import{r as o}from"./index-Ds58fsWd.js";function c(){const[t,r]=o.useState(!1);return o.useEffect(()=>{const e=()=>{const s=window.scrollY;r(s>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),{isSticky:t}}export{c as u};
