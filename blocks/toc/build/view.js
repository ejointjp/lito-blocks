document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".entry-content");if(t){const e=t.querySelectorAll("h2:not(.toc-exclude), h3:not(.toc-exclude)"),o=document.querySelectorAll(".wp-block-lito-toc");e.length>1&&o.forEach((t=>{const o=document.createElement("h2");o.classList.add("wp-block-lito-toc-title"),o.innerText="目次",t.appendChild(o);const c=document.createElement("ol");c.classList.add("wp-block-lito-toc-list"),t.appendChild(c);let l=0,n=1;e.forEach((t=>{let e;"H2"===t.tagName?(l++,e=t.id?t.id:"litob-toc-item-"+l):(e=t.id?t.id:`litob-toc-item-${l}-${n}`,n++),t.id=e;const o=document.createElement("li");o.classList.add("wp-block-lito-toc-item");const d=document.createElement("a"),i=document.createElement("span");i.classList.add("toc-label"),i.innerText=t.innerText,d.appendChild(i),o.appendChild(d);const a=document.createElement("span");a.classList.add("wp-block-lito-toc-number"),"H2"===t.tagName?(d.classList.add("wp-block-lito-toc-a","wp-block-lito-toc-h2"),d.href="#"+e,a.innerText=l+"."):(d.classList.add("wp-block-lito-toc-a","wp-block-lito-toc-h3"),d.href="#"+e,a.innerText=`${l}-${n}.`),d.insertBefore(a,d.firstChild),c.appendChild(o)}))}))}}));