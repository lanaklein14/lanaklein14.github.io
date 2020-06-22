function textToDate(text) {
	const now = new Date();
	const year = now.getFullYear();
	const date0 = new Date((year-1)+'/'+text);
	const date1 = new Date(year+'/'+text);
	const date2 = new Date((year+1)+'/'+text);
	let value = date0;
	let diff = Math.abs(date0.getTime()-now.getTime());
	if (Math.abs(date1.getTime()-now.getTime()) < diff) {
		diff = Math.abs(date1.getTime()-now.getTime());
		value = date1;
	}
	if (Math.abs(date2.getTime()-now.getTime()) < diff) {
		diff = Math.abs(date2.getTime()-now.getTime());
		value = date2;
	}
	return value;
}

document.querySelector('body').addEventListener( 'DOMNodeInserted', function ( event ) {

	if( event.target.nodeName == 'SECTION' && 
		event.target.classList.contains('clump-content')) {
		let hasFaloopReport = false;
		event.target.querySelectorAll('TEXT.left').forEach(textNode => {
		    if (textNode.textContent == 'id: c4a17639-159f-...') {
				hasFaloopReport = true;
			    textNode.textContent = 'Faloop!';
			}
		});

		timeTexts = Array.from(event.target.querySelectorAll('TEXT.right')).map(text => {
			return textToDate(text.textContent);
		})
		const length = timeTexts.length;
		if (length > 0) {
			const index = Math.floor((length+1)/2)-1;
			let mean = timeTexts[index].getTime();
			if (timeTexts.length % 2 === 0) {
				mean = Math.floor((mean + timeTexts[index+1].getTime())/2);
			}
			console.log(mean);
			console.log(new Date(mean));
			if (!hasFaloopReport) {
				const world = document.querySelector('#selected-world').textContent;
				let div = document.createElement('div');
				div.classList.add("score");
				let link = document.createElement('a');
				link.target= '_blank';
				link.href= `https://faloop.app/${world.toLowerCase()}?&mobid=${currentmobid}&time=${mean}`;
				link.innerText = `Open ${world} in Faloop!`;
			    event.target.appendChild(div);
			    div.appendChild(link);
			}
		}
	}
}, false );

let currentmobid = 0;
  
document.querySelector('body').addEventListener(
	'click', function (event) {
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
			console.log(mob.id, mob.name_ja);
		}
		else {
			currentmobid = 0;
			console.log("not found");
		} 
	}
}, false);

const mobs = [{
    id: 2962,
    version: "v2",
    area_id: 30,
    rank: "S",
    scale: 10,
    interval: 3900,
    name_ja: "クロック・ミテーヌ",
    name_en: "Croque-mitaine",
    name_fr: "Croque-mitaine",
    name_de: "Croque Mitaine",
    condition_ja: "ラノシアソイルG3を採掘。 (ET19:00-22:00)",
    condition_en: "Mining Grade 3 La Noscean Topsoil. (ET19:00-22:00)",
    condition_fr: "Mining Grade 3 La Noscean Topsoil. (ET19:00-22:00)",
    condition_de: "Mining Grade 3 La Noscean Topsoil. (ET19:00-22:00)"
}, {
    id: 2963,
    version: "v2",
    area_id: 31,
    rank: "S",
    scale: 10,
    interval: 3e3,
    name_ja: "ケロゲロス",
    name_en: "Croakadile",
    name_fr: "Croabéros",
    name_de: "Quakquak",
    condition_ja: "満月になる夜のET17:00以降にスポーン候補座標を踏む。",
    condition_en: "ET17:00 of the night with a full moon.",
    condition_fr: "ET17:00 of the night with a full moon.",
    condition_de: "ET17:00 of the night with a full moon."
}, {
    id: 2964,
    version: "v2",
    area_id: 32,
    rank: "S",
    scale: 10,
    interval: 2520,
    name_ja: "ガーロック",
    name_en: "the Garlok",
    name_fr: "Garlok",
    name_de: "Garlok",
    condition_ja: "200分間(3時間20分間、[ET]約2日20時間34分)雨が降らない。",
    condition_en: "200 minutes (3 hours 20 minutes, [ET] about 2 days 20 hours 34 minutes) does not rain.",
    condition_fr: "200 minutes (3 hours 20 minutes, [ET] about 2 days 20 hours 34 minutes) does not rain.",
    condition_de: "200 minutes (3 hours 20 minutes, [ET] about 2 days 20 hours 34 minutes) does not rain."
}, {
    id: 2965,
    version: "v2",
    area_id: 33,
    rank: "S",
    scale: 10,
    interval: 3900,
    name_ja: "ボナコン",
    name_en: "Bonnacon",
    name_fr: "Bonnacon",
    name_de: "Bonnacon",
    condition_ja: "ラノシアリーキを草刈。 (ET8:00-11:00)",
    condition_en: "Harvesting La Noscean Leeks. (ET8:00-11:00)",
    condition_fr: "Harvesting La Noscean Leeks. (ET8:00-11:00)",
    condition_de: "Harvesting La Noscean Leeks. (ET8:00-11:00)"
}, {
    id: 2966,
    version: "v2",
    area_id: 34,
    rank: "S",
    scale: 10,
    interval: 2820,
    name_ja: "ナンディ",
    name_en: "Nandi",
    name_fr: "Nandi",
    name_de: "Nandi",
    condition_ja: "ミニオンを連れてスポーン候補地を踏む。ミニオンを出した状態からであれば騎乗してもよい。",
    condition_en: "Step over spawn point with minion. After call minion, you can call mount.",
    condition_fr: "Step over spawn point with minion. After call minion, you can call mount.",
    condition_de: "Step over spawn point with minion. After call minion, you can call mount."
}, {
    id: 2967,
    version: "v2",
    area_id: 350,
    rank: "S",
    scale: 10,
    interval: 3900,
    name_ja: "チェルノボーグ",
    name_en: "Chernobog",
    name_fr: "Czernobog",
    name_de: "Czernobog",
    condition_ja: "プレイヤーキャラクターが戦闘不能になる。",
    condition_en: "Death of players.",
    condition_fr: "Death of players.",
    condition_de: "Death of players."
}, {
    id: 2953,
    version: "v2",
    area_id: 54,
    rank: "S",
    scale: 10,
    interval: 2640,
    name_ja: "レドロネット",
    name_en: "Laideronnette",
    name_fr: "Laideronnette",
    name_de: "Laideronette",
    condition_ja: "30分間（[ET]約10時間17分）、雨が降り続く。",
    condition_en: "Raining for 30 minutes ([ET] about 10 hours 17 minutes)",
    condition_fr: "Raining for 30 minutes ([ET] about 10 hours 17 minutes)",
    condition_de: "Raining for 30 minutes ([ET] about 10 hours 17 minutes)"
}, {
    id: 2954,
    version: "v2",
    area_id: 55,
    rank: "S",
    scale: 10,
    interval: 4020,
    name_ja: "ウルガル",
    name_en: "Wulgaru",
    name_fr: "Wulgaru",
    name_de: "Wulgaru",
    condition_ja: "リーヴクエストを開始、またはクリア。",
    condition_en: "Levequest is initiated or completed.",
    condition_fr: "Levequest is initiated or completed.",
    condition_de: "Levequest is initiated or completed."
}, {
    id: 2955,
    version: "v2",
    area_id: 56,
    rank: "S",
    scale: 10,
    interval: 3e3,
    name_ja: "マインドフレア",
    name_en: "mindflayer",
    name_fr: "flagelleur mental",
    name_de: "Seelenbrenner",
    condition_ja: "新月の夜のET0:00以降にスポーン候補座標を踏む。",
    condition_en: "ET0:00 of the night of the new moon.",
    condition_fr: "ET0:00 of the night of the new moon.",
    condition_de: "ET0:00 of the night of the new moon."
}, {
    id: 2956,
    version: "v2",
    area_id: 57,
    rank: "S",
    scale: 10,
    interval: 3480,
    name_ja: "サウザンドキャスト・セダ",
    name_en: "Thousand-cast Theda",
    name_fr: "Theda la tripoteuse",
    name_de: "Tausendzahn Theda",
    condition_ja: "ジャッジ・レイを釣る。",
    condition_en: "Judgeray is caught by a Fisherman.",
    condition_fr: "Judgeray is caught by a Fisherman.",
    condition_de: "Judgeray is caught by a Fisherman."
}, {
    id: 2957,
    version: "v2",
    area_id: 42,
    rank: "S",
    scale: 10,
    interval: 3480,
    name_ja: "ゾーナ・シーカー",
    name_en: "Zona Seeker",
    name_fr: "Zona Seeker",
    name_de: "Zona Sucher",
    condition_ja: "銅鏡を釣る。",
    condition_en: "Glimmerscale is caught by a Fisherman.",
    condition_fr: "Glimmerscale is caught by a Fisherman.",
    condition_de: "Glimmerscale is caught by a Fisherman."
}, {
    id: 2958,
    version: "v2",
    area_id: 43,
    rank: "S",
    scale: 10,
    interval: 4080,
    name_ja: "ブロンテス",
    name_en: "Brontes",
    name_fr: "Brontes",
    name_de: "Brontes",
    condition_ja: "スポーン候補地点で食事をとる。",
    condition_en: "Consumption of any food at spawn point.",
    condition_fr: "Consumption of any food at spawn point.",
    condition_de: "Consumption of any food at spawn point."
}, {
    id: 2959,
    version: "v2",
    area_id: 44,
    rank: "S",
    scale: 10,
    interval: 4020,
    name_ja: "バルウール",
    name_en: "Lampalagua",
    name_fr: "Balaur",
    name_de: "Balaur",
    condition_ja: "リーヴクエストを開始、またはクリア。",
    condition_en: "Levequest is initiated or completed.",
    condition_fr: "Levequest is initiated or completed.",
    condition_de: "Levequest is initiated or completed."
}, {
    id: 2960,
    version: "v2",
    area_id: 45,
    rank: "S",
    scale: 10,
    interval: 2760,
    name_ja: "ヌニュヌウィ",
    name_en: "Nunyunuwi",
    name_fr: "Nunyunuwi",
    name_de: "Nunyunuwi",
    condition_ja: "南ザナラーンで発生するFATEを1時間失敗および時間切れさせない。ただし、NPCに話しかけることで開始するFATEは開始せずに無視してよい。（開始したら達成する必要あり。）",
    condition_en: "For a period of at least 60 minutes, no FATE in Southern Thanalan expires or fails.",
    condition_fr: "For a period of at least 60 minutes, no FATE in Southern Thanalan expires or fails.",
    condition_de: "For a period of at least 60 minutes, no FATE in Southern Thanalan expires or fails."
}, {
    id: 2961,
    version: "v2",
    area_id: 46,
    rank: "S",
    scale: 10,
    interval: 3480,
    name_ja: "ミニョーカオン",
    name_en: "Minhocao",
    name_fr: "Minhocao",
    name_de: "Minhocao",
    condition_ja: "アーススプライトを倒す。",
    condition_en: "Death of Earth Sprites.",
    condition_fr: "Death of Earth Sprites.",
    condition_de: "Death of Earth Sprites."
}, {
    id: 2968,
    version: "v2",
    area_id: 63,
    rank: "S",
    scale: 10,
    interval: 3600,
    name_ja: "サファト",
    name_en: "Safat",
    name_fr: "Safat",
    name_de: "Safat",
    condition_ja: "落下してHPが1になる。",
    condition_en: "Players falls to almost death (HP1).",
    condition_fr: "Players falls to almost death (HP1).",
    condition_de: "Players falls to almost death (HP1)."
}, {
    id: 2969,
    version: "v2",
    area_id: 67,
    rank: "S",
    scale: 10,
    interval: 3600,
    name_ja: "アグリッパ",
    name_en: "Agrippa the Mighty",
    name_fr: "Agrippa",
    name_de: "Agrippa",
    condition_ja: "トレジャーハントで宝箱を開ける。",
    condition_en: "Open treasure chests.",
    condition_fr: "Open treasure chests.",
    condition_de: "Open treasure chests."
}, {
    id: 4374,
    version: "v3",
    area_id: 2200,
    rank: "S",
    name_ja: "カイザーベヒーモス",
    name_en: "kaiser behemoth",
    name_fr: "béhémoth empereur",
    name_de: "Kaiser-Behemoth",
    scale: 10,
    interval: 5040
}, {
    id: 4378,
    version: "v3",
    area_id: 2100,
    rank: "S",
    name_ja: "極楽鳥",
    name_en: "Bird of Paradise",
    name_fr: "oiseau de Paradis",
    name_de: "Paradiesvogel",
    scale: 10,
    interval: 5040
}, {
    id: 4377,
    version: "v3",
    area_id: 2002,
    rank: "S",
    name_ja: "ガンダルヴァ",
    name_en: "Gandarewa",
    name_fr: "Gandharva",
    name_de: "Gandalva",
    scale: 10,
    interval: 5040
}, {
    id: 4375,
    version: "v3",
    area_id: 2e3,
    rank: "S",
    name_ja: "セーンムルウ",
    name_en: "Senmurv",
    name_fr: "Sênmurw",
    name_de: "Simurgh",
    scale: 10,
    interval: 5040
}, {
    id: 4376,
    version: "v3",
    area_id: 2001,
    rank: "S",
    name_ja: "ペイルライダー",
    name_en: "the Pale Rider",
    name_fr: "Cavalier pale",
    name_de: "Bleich[a] Reiter",
    scale: 10,
    interval: 5040
}, {
    id: 4380,
    version: "v3",
    area_id: 2101,
    rank: "S",
    name_ja: "レウクロッタ",
    name_en: "Leucrotta",
    name_fr: "leucrotta",
    name_de: "Leucrotta",
    scale: 10,
    interval: 5040
}, {
    id: 5987,
    version: "v4",
    area_id: 2406,
    rank: "S",
    name_ja: "ウドンゲ",
    name_en: "Udumbara",
    name_fr: "Udumbara",
    name_de: "Udumbara",
    scale: 10,
    interval: 5040
}, {
    id: 5988,
    version: "v4",
    area_id: 2407,
    rank: "S",
    name_ja: "ボーンクローラー",
    name_en: "Bone Crawler",
    name_fr: "Mangeur d'os",
    name_de: "Knochenkriecher",
    scale: 10,
    interval: 5040
}, {
    id: 5989,
    version: "v4",
    area_id: 2408,
    rank: "S",
    name_ja: "ソルト・アンド・ライト",
    name_en: "Salt and Light",
    name_fr: "Salaclux",
    name_de: "Salzlicht",
    scale: 10,
    interval: 5040
}, {
    id: 5984,
    version: "v4",
    area_id: 2409,
    rank: "S",
    name_ja: "オキナ",
    name_en: "Okina",
    name_fr: "Okina",
    name_de: "Okina",
    scale: 10,
    interval: 5040
}, {
    id: 5985,
    version: "v4",
    area_id: 2410,
    rank: "S",
    name_ja: "ガンマ",
    name_en: "Gamma",
    name_fr: "Gamma",
    name_de: "Gamma",
    scale: 10,
    interval: 5040
}, {
    id: 5986,
    version: "v4",
    area_id: 2411,
    rank: "S",
    name_ja: "オルガナ",
    name_en: "Orghana",
    name_fr: "Orghana",
    name_de: "Orghana",
    scale: 10,
    interval: 5040
}, {
    id: 8905,
    version: "v5",
    area_id: 2953,
    rank: "S",
    scale: 10,
    interval: 5040,
    name_fr: "Tygre",
    name_en: "Tyger",
    name_ja: "ティガー",
    name_de: "Tyger"
}, {
    id: 8910,
    version: "v5",
    area_id: 2954,
    rank: "S",
    scale: 10,
    interval: 5040,
    name_fr: "pédanterie pardonnée",
    name_en: "forgiven pedantry",
    name_ja: "フォーギヴン・ペダントリー",
    name_de: "geläutert[a] Pedanterie"
}, {
    id: 8900,
    version: "v5",
    area_id: 2955,
    rank: "S",
    scale: 10,
    interval: 5040,
    name_fr: "Tarchia",
    name_en: "Tarchia",
    name_ja: "タルキア",
    name_de: "Tarchia"
}, {
    id: 8653,
    version: "v5",
    area_id: 2956,
    rank: "S",
    scale: 10,
    interval: 5040,
    name_fr: "Aglaope",
    name_en: "Aglaope",
    name_ja: "アグラオペ",
    name_de: "Aglaope"
}, {
    id: 8890,
    version: "v5",
    area_id: 2957,
    rank: "S",
    scale: 10,
    interval: 5040,
    name_fr: "Ixtab",
    name_en: "Ixtab",
    name_ja: "イシュタム",
    name_de: "Ixtab"
}, {
    id: 8895,
    version: "v5",
    area_id: 2958,
    rank: "S",
    scale: 10,
    interval: 5040,
    name_fr: "Gunitt",
    name_en: "Gunitt",
    name_ja: "グニット",
    name_de: "Gunitt"
}];
