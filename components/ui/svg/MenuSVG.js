const MenuSVG = () => (
  <svg id="menuSVG" className="menuSVG" /* width="35" height="25" */ viewBox="0 0 35 25" xmlns="http://www.w3.org/2000/svg" /* style={{ stroke: "rgb(216, 216, 216)", strokeWidth: "4px", strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: "1, 50", preserveAspectRatio:"xMidYMid meet"}} */>
  <defs></defs>
    {<path id="menu-top" d="m2,2l30,.07" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>}
    {<path id="menu-middle" d="m2,12.18l30,.07" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>}
    {<path id="menu-bottom" d="m2,22.37l30,.07" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" filter="url(#shadow)"></path>}
  </svg>
);

export default MenuSVG;