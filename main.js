(()=>{"use strict";const e=document.createElement("header");e.classList.add("header");const t=document.createElement("span");t.classList.add("header_logo"),t.textContent="Ocean Burgers";const n=document.createElement("a");n.classList.add("header_link"),n.id="our-team",n.href="#",n.textContent="Our Team";const a=document.createElement("a");a.classList.add("header_link"),a.id="menu",a.href="#",a.textContent="Menu";const c=document.createElement("a");c.classList.add("header_link"),c.id="contact",c.href="#",c.textContent="Contact",e.append(t,n,a,c);const s=function(){const e=document.createElement("div");e.classList.add("main-page");const t=document.createElement("div");t.classList.add("main-page_row");const n=document.createElement("div");n.classList.add("main-page_title-row");const a=document.createElement("h1");a.classList.add("main-page-title"),a.innerHTML="The best<br />burgers from<br />deep see";const c=document.createElement("div");c.classList.add("main-page-title_line");const s=function(){const e=document.createElement("button");e.classList.add("menu-btn");const t=document.createElement("div");t.classList.add("menu-btn_row");const n=document.createElement("img");n.src="img/menu-btn-icon.png",n.alt="menu button icon";const a=document.createElement("span");return a.classList.add("menu-btn_text"),a.textContent="Menu",t.append(n,a),e.append(t),e}(),d=document.createElement("div");d.classList.add("main-page_main-img");const m=document.createElement("img");return m.src="img/main-img.png",m.alt="Ocean Burers Restaurant Image",m.id="main-img",d.append(m),n.append(a,c,s),t.append(n,d),e.append(t),e}();document.querySelector("#content").append(s)})();