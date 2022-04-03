// ==UserScript==
// @name         HAchubby template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       oralekin, Top_Fuel
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function() {
                const i = document.createElement("img");
                const time = Math.floor(Date.now() / 10000);
                i.src = "https://raw.githubusercontent.com/TopFuel/rplace-image/main/hachubby_overlay.png?tstamp=" + time;
                if (i.width === i.height) {
                    i.style = "position: absolute;left: 0;top: 1000px;image-rendering: pixelated;width: 1000px;height: 1000px;";
                } else {
                    i.style = "position: absolute;left: 0;top: 1000px;image-rendering: pixelated;width: 2000px;height: 1000px;";
                }
                console.log(i);
                return i;
            })())

    }, false);

}
