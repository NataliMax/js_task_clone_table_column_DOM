function t(t,e){for(var n=document.querySelector("table"),o=n.querySelectorAll("".concat(t," tr ").concat(e,":nth-child(2)")),d=0;d<=o.length-1;d++){var c=o[d].cloneNode(!0),a=n.querySelector("".concat(t," tr:nth-child(").concat(d+1,") ").concat(e,":last-child"));a.parentNode.insertBefore(c,a)}}document.addEventListener("DOMContentLoaded",t("thead","th")),document.addEventListener("DOMContentLoaded",t("tfoot","th")),document.addEventListener("DOMContentLoaded",t("tbody","td"));
//# sourceMappingURL=index.9e8b9c16.js.map