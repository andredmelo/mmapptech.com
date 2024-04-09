import { gsap } from "gsap";

const verticalLoop = (items: any, config: any) => {
  items = gsap.utils.toArray(items);
  config = config || {};

  let onChange = config.onChange,
		lastIndex = 0,
		tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
      let i = tl.closestIndex();
      if (lastIndex !== i) {
        lastIndex = i;
        onChange(items[i], i);
      }
    }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => {tl.totalTime(tl.rawTime() + tl.duration() * 100)}}),
    length = items.length,
    startY = items[0].offsetTop,
    times: number[] = [],
    heights = [] as number[],
		spaceBefore = [] as number[],
    yPercents = [] as number[],
    curIndex = 0,
		indexIsDirty = false,
		center = config.center,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if height is 20% the first element's height might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
		timeOffset = 0,
		container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
    totalHeight, curY, distanceToStart, distanceToLoop, item, i,
    //New 2024-04-09
		gettotalHeight = () => Number(items[length-1].offsetTop) + Number(yPercents[length-1]) / 100 * Number(heights[length-1]) - Number(startY) + Number(spaceBefore[0]) + Number(items[length-1].offsetHeight) * Number(gsap.getProperty(items[length-1], "scaleY")) + (parseFloat(config.paddingBottom) || 0),
		/* populateheights = () => {
			let b1 = container.getBoundingClientRect(), b2;
			items.forEach((el, i) => {
				heights[i] = parseFloat(gsap.getProperty(el, "height", "px"));
        yPercents[i] = snap(parseFloat(gsap.getProperty(el, "y", "px")) / heights[i] * 100 + parseFloat(gsap.getProperty(el, "yPercent").toString()));
        b2 = el.getBoundingClientRect();
        spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
				b1 = b2;
			});
			gsap.set(items, { // convert "y" to "yPercent" to make things responsive, and populate the heights/yPercents Arrays to make lookups faster.
				yPercent: i => yPercents[i]
			});
			totalHeight = gettotalHeight();
		},
		timeWrap,
		populateOffsets = () => {
      let totalHeight: number = 0;
      timeOffset = center ? tl.duration() * (container.offsetHeight / 2) / totalHeight : 0;
      center && times.forEach((t, i) => {
        times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * heights[i] / 2 / totalHeight - timeOffset);
      });
    }, */
    getClosest = (values: number[], value: number, wrap: number) => {
      let i = values.length,
        closest = 1e10,
        index = 0, d;
      while (i--) {
        d = Math.abs(values[i] - value);
        if (d > wrap / 2) {
          d = wrap - d;
        }
        if (d < closest) {
          closest = d;
          index = i;
        }
      }
      return index;
    };
  gsap.set(items, {
    yPercent: (i, el) => {
      // Explicitly declare and type all intermediate variables
      const heightStr: string | number = gsap.getProperty(el, "height", "px");
      const height: number = parseFloat(heightStr.toString());
      heights[i] = height; // Store the height for later use

      const yStr: string = gsap.getProperty(el, "x", "px").toString();
      const y: number = parseFloat(yStr);

      const yPercentStr: string = gsap.getProperty(el, "yPercent", "px").toString();
      const yPercent: number = parseFloat(yPercentStr);

      // Calculate the target yPercent value
      const targetYPercent: number = (y / height * 100) + yPercent;
      const snappedYPercent: number = snap(targetYPercent); // Ensure snap returns a number

      yPercents[i] = snappedYPercent; // Store the snapped value
      return snappedYPercent; // Return the value
    }
  });



  gsap.set(items, {y: 0});
  totalHeight = Number(items[length-1].offsetTop) + Number(yPercents[length-1]) / 100 * Number(heights[length-1]) - startY + Number(items[length-1].offsetHeight) * Number(gsap.getProperty(items[length-1], "scaleY")) + (parseFloat(config.paddingTop) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curY = yPercents[i] / 100 * heights[i];
    distanceToStart = item.offsetTop + curY - startY;
    distanceToLoop = distanceToStart + heights[i] * Number(gsap.getProperty(item, "scaleY"));
    tl.to(item, {yPercent: snap((curY - distanceToLoop) / heights[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
      .fromTo(item, {yPercent: snap((curY - distanceToLoop + totalHeight) / heights[i] * 100)}, {yPercent: yPercents[i], duration: (curY - distanceToLoop + totalHeight - curY) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
  }
  tl.next = (vars: any) => toIndex(curIndex + 1, vars, tl, curIndex, items.length, times);
  tl.previous = (vars: any) => toIndex(curIndex - 1, vars, tl, curIndex, items.length, times);
  tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
  tl.toIndex = (index: number, vars: any) => toIndex(index, vars, tl, curIndex, items.length, times);
	tl.closestIndex = (setCurrent: number) => {
		let index = getClosest(times, tl.time(), tl.duration());
		if (setCurrent) {
			curIndex = index;
			indexIsDirty = false;
		}
		return index;
	};
  tl.times = times;
  tl.progress(1, true).progress(0, true);
  if (config.reversed) {
    if (typeof tl.vars.onReverseComplete === 'function') {
      tl.vars.onReverseComplete();
    }
    tl.reverse();
  }
  return tl;
};

function toIndex(index: number, vars: any, tl: any, curIndex: number, length: number, times: number[]) {
  vars = vars || {};
  (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
  let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
  if (time > tl.time() !== index > curIndex) {
    vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
    time += tl.duration() * (index > curIndex ? 1 : -1);
  }
  curIndex = newIndex;
  vars.overwrite = true;
  return tl.tweenTo(time, vars);
}

export default verticalLoop;