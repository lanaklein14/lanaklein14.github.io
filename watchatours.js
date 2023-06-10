// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/channels/321601714035884034/588506294990798877
// @match        https://discord.com/channels/321601714035884034/986138725866164234
// @match        https://discord.com/channels/321601714035884034/888186087963496448
// @match        https://discord.com/channels/321601714035884034/668277147005222922
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @connect      https://discord.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    const urlToDataCenter = {
        "https://discord.com/channels/321601714035884034/588506294990798877": "Elemental",
        "https://discord.com/channels/321601714035884034/888186087963496448": "Gaia",
        "https://discord.com/channels/321601714035884034/668277147005222922": "Mana",
        "https://discord.com/channels/321601714035884034/986138725866164234": "Meteor",
    }
    const dataCenter = urlToDataCenter[document.URL] || 'Unknown'

    function initialize() {
        const chatList = document.querySelector('ol.scrollerInner-2PPAp2')
        console.log('chatlist', chatList)
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        const observer = new MutationObserver((mutations) => {
            const divs = mutations.reduce((acc, mutation) => {
                Array.from(mutation.addedNodes).forEach(node => {
                    const div = node.querySelector(`[id^='message-content']:not(.isSending-3SiDwE)`)
                    if (div) {
                        acc.push(div)
                    }
                })
                return acc
            }, [])
            divs.forEach(div => {
                console.debug('div', div.innerHTML)
                GM_xmlhttpRequest({
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    url: "https://discord.com/api/webhooks/1117008651345997954/RgxFfPlyqJ2ksHKAASKwlVMvZ_VH2VPZC_2eM6gzAoyl-Y1kQ2Y7k-hEZrpsAjUCP4Hq",
                    data: JSON.stringify({
                        username: dataCenter,
                        content: div.innerHTML
                    }),
                    onload: function(response) {
                        if (response.status != '204') {
                            console.error(response.responseText);
                        }
                    }
                });
            })
        });
        observer.observe(chatList, {
            childList: true,
        });
    }

    function pre_loop(){
        let pre_loop_timeout = 1000
        if(! document.querySelector('ol.scrollerInner-2PPAp2')){
            pre_loop_timeout = (pre_loop_timeout || 1000) + 1000;
            setTimeout(pre_loop, pre_loop_timeout);
            console.debug("wait for page load");
            return;
        }
        console.debug("initialize");
        setTimeout(initialize, 1000);
    }
    pre_loop();
})();