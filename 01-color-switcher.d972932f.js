const t=document.querySelector("[data-start]");let n=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){document.body.style.backgroundColor=e(),n=setInterval(e,1e3)})),btnStop.addEventListener("click",onStop);
//# sourceMappingURL=01-color-switcher.d972932f.js.map
