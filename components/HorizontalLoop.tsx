import { gsap } from "gsap";

const horizontalLoop = (items: any, config: any) => {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => {tl.totalTime(tl.rawTime() + tl.duration() * 100)}}),
    length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths = [] as number[],
    xPercents = [] as number[],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  gsap.set(items, {
    xPercent: (i, el) => {
      // Explicitly declare and type all intermediate variables
      const widthStr: string | number = gsap.getProperty(el, "width", "px");
      const width: number = parseFloat(widthStr.toString());
      widths[i] = width; // Store the width for later use
    
      const xStr: string = gsap.getProperty(el, "x", "px").toString();
      const x: number = parseFloat(xStr);
    
      const xPercentStr: string = gsap.getProperty(el, "xPercent", "px").toString();
      const xPercent: number = parseFloat(xPercentStr);
    
      // Calculate the target xPercent value
      const targetXPercent: number = (x / width * 100) + xPercent;
      const snappedXPercent: number = snap(targetXPercent); // Ensure snap returns a number
    
      xPercents[i] = snappedXPercent; // Store the snapped value
      return snappedXPercent; // Return the value
    }
  });
  gsap.set(items, {x: 0});
  totalWidth = Number(items[length-1].offsetLeft) + Number(xPercents[length-1]) / 100 * Number(widths[length-1]) - startX + Number(items[length-1].offsetWidth) * Number(gsap.getProperty(items[length-1], "scaleX")) + (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"));
    tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
      .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
  }
  tl.next = (vars: any) => toIndex(curIndex + 1, vars, tl, curIndex, items.length, times);
  tl.previous = (vars: any) => toIndex(curIndex - 1, vars, tl, curIndex, items.length, times);
  tl.current = () => curIndex;
  tl.toIndex = (index: number, vars: any) => toIndex(index, vars, tl, curIndex, items.length, times);
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

export default horizontalLoop;