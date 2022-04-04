// ==UserScript==
// @name         HAchubby template
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Overlay for the HAchubby's r/place template
// @author       oralekin, Top_Fuel
// @website      https://topfuel.github.io/rplace-image/
// @source       https://github.com/TopFuel/rplace-image/
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        var layout = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0];
        layout.getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
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
            })());

        try {
            var added = false;
            var preview = null;
            setInterval(() => {
                try {
                    preview = layout.getElementsByTagName("mona-lisa-pixel-preview");
                    if (preview && preview[0].shadowRoot && preview[0].shadowRoot.children[0]) {
                        if (!added) {
                            added = true;
                            layout.getElementsByTagName("mona-lisa-pixel-preview")[0].shadowRoot.children[0].style.clipPath = "polygon( evenodd, 37.5% 37.5%, 62.5% 37.5%, 62.5% 62.5%, 37.5% 62.5%, 37.5% 37.5%, calc(50% - 100px / 2) calc(50% - 100px / 2), calc(50% + 100px / 2) calc(50% - 100px / 2), calc(50% + 100px / 2) calc(50% + 100px / 2), calc(50% - 100px / 2) calc(50% + 100px / 2), calc(50% - 100px / 2) calc(50% - 100px / 2)";
                        }
                    } else {
                        added = false;
                    }
                } catch (e) {
                    added = false;
                }
            }, 1000);
        } catch (e) {
            console.log(e);
        }
    }, false);
}
