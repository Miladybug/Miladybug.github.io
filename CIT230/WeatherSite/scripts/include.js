function includeHTML() {
    var z, i, elmnt, file, xhttp, cb;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("html-include");
        cb = window[elmnt.getAttribute("html-include-cb")];
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = this.responseText + elmnt.innerHTML;
                    elmnt.removeAttribute("html-include");
                    includeHTML();

                    if (cb) cb.apply(window, undefined);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};

includeHTML();