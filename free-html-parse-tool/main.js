function convert() {
	var e = document.getElementById("somewhere"),
		l = e.value;
	l = (l = (l = (l = (l = (l = (l = (l = (l = l.replace(/&#038;/gi, "&amp;")).replace(/</gi, "&lt;")).replace(/>/gi, "&gt;")).replace(/"/gi, "&quot;")).replace(/'/gi, "&#039;")).replace(/&#177;/gi, "&plusmn;")).replace(/&#169;/gi, "&copy;")).replace(/&#174;/gi, "&reg;")).replace(/ya'll/gi, "ya'll"), e.value = l, document.getElementById("button-link").style.display = "inline-block", document.getElementById("btn_clear").style.display = "inline-block"
}

function cdClear() {
	document.getElementById("somewhere").value = "", document.getElementById("btnInfo").style.display = "none", document.getElementById("button-link").style.display = "none"
}
var clipboard = new Clipboard(".button-link");
clipboard.on("success", (function(e) {
	console.log(e), document.getElementById("btnInfo").style.display = "block", document.getElementById("somewhere").value = ""
})), clipboard.on("error", (function(e) {
	console.log(e)
}));
