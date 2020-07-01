// ==UserScript==
// @name     HuntFaloop
// @version  1
// @grant    none
// ==/UserScript==
const mobs = [{
    id: 2962,
    name_ja: "クロック・ミテーヌ",
    name_en: "Croque-mitaine",
    name_fr: "Croque-mitaine",
    name_de: "Croque Mitaine"
}, {
    id: 2963,
    name_ja: "ケロゲロス",
    name_en: "Croakadile",
    name_fr: "Croabéros",
    name_de: "Quakquak"
}, {
    id: 2964,
    name_ja: "ガーロック",
    name_en: "the Garlok",
    name_fr: "Garlok",
    name_de: "Garlok"
}, {
    id: 2965,
    name_ja: "ボナコン",
    name_en: "Bonnacon",
    name_fr: "Bonnacon",
    name_de: "Bonnacon"
}, {
    id: 2966,
    name_ja: "ナンディ",
    name_en: "Nandi",
    name_fr: "Nandi",
    name_de: "Nandi"
}, {
    id: 2967,
    name_ja: "チェルノボーグ",
    name_en: "Chernobog",
    name_fr: "Czernobog",
    name_de: "Czernobog"
}, {
    id: 2953,
    name_ja: "レドロネット",
    name_en: "Laideronnette",
    name_fr: "Laideronnette",
    name_de: "Laideronette"
}, {
    id: 2954,
    name_ja: "ウルガル",
    name_en: "Wulgaru",
    name_fr: "Wulgaru",
    name_de: "Wulgaru"
}, {
    id: 2955,
    name_ja: "マインドフレア",
    name_en: "mindflayer",
    name_fr: "flagelleur mental",
    name_de: "Seelenbrenner"
}, {
    id: 2956,
    name_ja: "サウザンドキャスト・セダ",
    name_en: "Thousand-cast Theda",
    name_fr: "Theda la tripoteuse",
    name_de: "Tausendzahn Theda"
}, {
    id: 2957,
    name_ja: "ゾーナ・シーカー",
    name_en: "Zona Seeker",
    name_fr: "Zona Seeker",
    name_de: "Zona Sucher"
}, {
    id: 2958,
    name_ja: "ブロンテス",
    name_en: "Brontes",
    name_fr: "Brontes",
    name_de: "Brontes"
}, {
    id: 2959,
    name_ja: "バルウール",
    name_en: "Lampalagua",
    name_fr: "Balaur",
    name_de: "Balaur"
}, {
    id: 2960,
    name_ja: "ヌニュヌウィ",
    name_en: "Nunyunuwi",
    name_fr: "Nunyunuwi",
    name_de: "Nunyunuwi"
}, {
    id: 2961,
    name_ja: "ミニョーカオン",
    name_en: "Minhocao",
    name_fr: "Minhocao",
    name_de: "Minhocao"
}, {
    id: 2968,
    name_ja: "サファト",
    name_en: "Safat",
    name_fr: "Safat",
    name_de: "Safat"
}, {
    id: 2969,
    name_ja: "アグリッパ",
    name_en: "Agrippa the Mighty",
    name_fr: "Agrippa",
    name_de: "Agrippa"
}, {
    id: 4374,
    name_ja: "カイザーベヒーモス",
    name_en: "kaiser behemoth",
    name_fr: "béhémoth empereur",
    name_de: "Kaiser-Behemoth"
}, {
    id: 4378,
    name_ja: "極楽鳥",
    name_en: "Bird of Paradise",
    name_fr: "oiseau de Paradis",
    name_de: "Paradiesvogel"
}, {
    id: 4377,
    name_ja: "ガンダルヴァ",
    name_en: "Gandarewa",
    name_fr: "Gandharva",
    name_de: "Gandalva"
}, {
    id: 4375,
    name_ja: "セーンムルウ",
    name_en: "Senmurv",
    name_fr: "Sênmurw",
    name_de: "Simurgh"
}, {
    id: 4376,
    name_ja: "ペイルライダー",
    name_en: "the Pale Rider",
    name_fr: "Cavalier pale",
    name_de: "Bleich[a] Reiter"
}, {
    id: 4380,
    name_ja: "レウクロッタ",
    name_en: "Leucrotta",
    name_fr: "leucrotta",
    name_de: "Leucrotta"
}, {
    id: 5987,
    name_ja: "ウドンゲ",
    name_en: "Udumbara",
    name_fr: "Udumbara",
    name_de: "Udumbara"
}, {
    id: 5988,
    name_ja: "ボーンクローラー",
    name_en: "Bone Crawler",
    name_fr: "Mangeur d'os",
    name_de: "Knochenkriecher"
}, {
    id: 5989,
    name_ja: "ソルト・アンド・ライト",
    name_en: "Salt and Light",
    name_fr: "Salaclux",
    name_de: "Salzlicht"
}, {
    id: 5984,
    name_ja: "オキナ",
    name_en: "Okina",
    name_fr: "Okina",
    name_de: "Okina"
}, {
    id: 5985,
    name_ja: "ガンマ",
    name_en: "Gamma",
    name_fr: "Gamma",
    name_de: "Gamma"
}, {
    id: 5986,
    name_ja: "オルガナ",
    name_en: "Orghana",
    name_fr: "Orghana",
    name_de: "Orghana"
}, {
    id: 8905,
    name_fr: "Tygre",
    name_en: "Tyger",
    name_ja: "ティガー",
    name_de: "Tyger"
}, {
    id: 8910,
    name_fr: "pédanterie pardonnée",
    name_en: "forgiven pedantry",
    name_ja: "フォーギヴン・ペダントリー",
    name_de: "geläutert[a] Pedanterie"
}, {
    id: 8900,
    name_fr: "Tarchia",
    name_en: "Tarchia",
    name_ja: "タルキア",
    name_de: "Tarchia"
}, {
    id: 8653,
    name_fr: "Aglaope",
    name_en: "Aglaope",
    name_ja: "アグラオペ",
    name_de: "Aglaope"
}, {
    id: 8890,
    name_fr: "Ixtab",
    name_en: "Ixtab",
    name_ja: "イシュタム",
    name_de: "Ixtab"
}, {
    id: 8895,
    name_fr: "Gunitt",
    name_en: "Gunitt",
    name_ja: "グニット",
    name_de: "Gunitt"
}];
let currentmobid = 0;

/**
 * Generate date object with the year nearest to current date.
 * @param {string} text - date in format 'M/d H:mm'
 * @return date object
 */
function textToDate(text) {
    const now = new Date();
    const year = now.getFullYear();
    const date0 = new Date((year - 1) + '/' + text);
    const date1 = new Date(year + '/' + text);
    const date2 = new Date((year + 1) + '/' + text);
    let value = date0;
    let diff = Math.abs(date0.getTime() - now.getTime());
    if (Math.abs(date1.getTime() - now.getTime()) < diff) {
        diff = Math.abs(date1.getTime() - now.getTime());
        value = date1;
    }
    if (Math.abs(date2.getTime() - now.getTime()) < diff) {
        diff = Math.abs(date2.getTime() - now.getTime());
        value = date2;
    }
    return value;
}

/**
 * Main function
 */
function main_huntnet() {

    // Set style
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
    .uid-c4a17639-159f-4403-9bac-b4c2ddc278fd > rect, 
    circle.uid-c4a17639-159f-4403-9bac-b4c2ddc278fd {
        fill: #5580C8 !important;
    }`
    ));
    document.querySelector('head').appendChild(style);

    document.addEventListener("mozule:touchstart", function (event) {
        var timelineElement = event.target.closest('div.timeline');
        if (timelineElement) {
            const title = timelineElement.querySelector('h3.mob-name').getAttribute('title');
            let mob = mobs.find(m => {
                return (m.name_ja == title ||
                    m.name_en == title ||
                    m.name_fr == title ||
                    m.name_de == title);
            });
            if (mob) {
                currentmobid = mob.id;
                console.log(mob.id, mob.name_en);
            }
            else {
                currentmobid = 0;
                console.log("not found");
            }
        }
    }, false);

    const body = document.querySelector('body');
    const observer = new MutationObserver(records => {
        const popup = document.querySelector('SECTION.clump-content:not(.hidden)');
        if (popup) {
            let hasFaloopReport = false;
            popup.querySelectorAll('.left').forEach(textNode => {
                if (textNode.textContent == 'id: c4a17639-159f-...') {
                    hasFaloopReport = true;
                    textNode.textContent = 'Faloop!';
                }
            });

            timeTexts = Array.from(popup.querySelectorAll('.right')).map(text => {
                return textToDate(text.textContent);
            })
            const length = timeTexts.length;
            if (length > 0) {
                const index = Math.floor((length + 1) / 2) - 1;
                let mean = timeTexts[index].getTime();
                if (timeTexts.length % 2 === 0) {
                    mean = Math.floor((mean + timeTexts[index + 1].getTime()) / 2);
                }
                console.log(mean);
                console.log(new Date(mean));
                if (!hasFaloopReport && currentmobid !== 0) {
                    const world = document.querySelector('#selected-world').textContent;
                    let div = document.createElement('div');
                    div.classList.add("score");
                    let link = document.createElement('a');
                    link.target = '_blank';
                    link.href = `https://faloop.app/${world.toLowerCase()}?mobid=${currentmobid}&time=${mean}`;
                    link.innerText = `Open Faloop!`;
                    popup.appendChild(div);
                    div.appendChild(link);
                }
            }
        }
    
        
/*        alert('nodeList Changed');
        records.forEach(record => {
        });
    */
   
    });
    observer.observe(body, {
        childList: true
    });
}

/**
 * Find the subtract TOD button in DOM and click it based on the given time.
 * @param {int} timeOfDeath - timeOfDeath in unixtime millisec
 */
function setDefaultTOD(timeOfDeath) {
    const detailPane = document.querySelector('div.TimerGroups_details__YAKwO');
    if (!detailPane) {
        console.log('Could not find the details pane. skipping.');
        return;
    }
    const button = detailPane.querySelectorAll('button.ActionButtons_up-down-btn__KPkj-.btn.btn-danger')[1];
    if (!button) {
        console.log('Could not find subtract TOD button. skipping.');
        return;
    }
    let minutes = Math.floor((Date.now() - timeOfDeath) / 1000 / 60);
    console.log('Total minutes', minutes);

    const countCtrlShiftKey = Math.floor(minutes / 720);
    console.log('Number of clicks with Ctrl+Shift Key(720 min each):', countCtrlShiftKey);
    minutes = minutes % 720;
    console.log('Remaining minutes', minutes);
    const countCtrlKey = Math.floor(minutes / 60);
    console.log('Number of clicks with Ctrl Key(60 min each):', countCtrlKey);
    minutes = minutes % 60;
    console.log('Remaining minutes', minutes);
    const countShiftKey = Math.floor(minutes / 10);
    console.log('Number of clicks with Shift Key(10 min each):', countShiftKey);
    minutes = minutes % 10;
    console.log('Number of clicks(=Remaining minutes):', minutes);

    for (let i = 0; i < countCtrlShiftKey; i++) {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true, ctrlKey: true, shiftKey: true }));
    }
    for (let i = 0; i < countCtrlKey; i++) {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true, ctrlKey: true }));
    }
    for (let i = 0; i < countShiftKey; i++) {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true, shiftKey: true }));
    }
    for (let i = 0; i < minutes; i++) {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
}

/**
 * Find the mob row (may retry in case of loading). 
 * Open the details pane and call setDefaultTOD function.
 * @param {object} mob - target mob object
 * @param {int} timeOfDeath - time of death in unixtime millisec
 * @param {int} retryCount - retry count
 */
function selectMob(mob, timeOfDeath, retryCount) {
    let nameTags = Array.from(document.querySelectorAll('span.MarkNameColumn_name__14HXZ'));
    let nameTag = nameTags.find(t => {
        const name = t.textContent.toLowerCase();
        return (name == mob.name_ja.toLowerCase() ||
            name == mob.name_en.toLowerCase() ||
            name == mob.name_fr.toLowerCase() ||
            name == mob.name_de.toLowerCase());
    });

    if (nameTag) {
        console.log(`Mob row for ${nameTag.textContent} found.`);
        const row = nameTag.closest('div.TimerGroupRow_row__2GYfv');
        row.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        setTimeout(function () { setDefaultTOD(timeOfDeath); }, 500);
    }
    else {
        if (retryCount > 0) {
            console.log(`Mob row not found. Retry(${retryCount - 1})`);
            setTimeout(function () { selectMob(mob, timeOfDeath, retryCount - 1) }, 1000);
        }
        else {
            console.log(`Mob row not found. Skipping.`)
        }
    }
}

/**
 * Main function. Validate the url parameters and execute selectMob.
 */
function main_faloop() {
    const urlParams = new URLSearchParams(window.location.search);
    const mobid = urlParams.get('mobid');
    const time = urlParams.get('time');
    const mob = mobs.find(m => { return m.id == mobid });
    if (mob && time) {
        console.log('Valid parameters detected. Processing.', mobid, time);
        selectMob(mob, time, 10);
    }
    else {
        console.log('Valid parameters NOT detected. Skipping.');
    }
}

if (location.hostname === "ffxiv-the-hunt.net") {
    main_huntnet();
}
else if (location.hostname === "faloop.app") {
    main_faloop();
}
