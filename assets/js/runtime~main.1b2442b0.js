(()=>{"use strict";var e,a,c,f,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=b,r.c=t,e=[],r.O=(a,c,f,d)=>{if(!c){var b=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],d=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[c,f,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,c({}),c([]),c(c)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({15:"703e56ea",53:"935f2afb",54:"4011a915",71:"953d21be",93:"fadea3b2",235:"4d62d089",286:"dcef5ad2",443:"b2d1b6f5",479:"6370b936",504:"ce494c7e",506:"b05e0d9f",566:"1ac63ddf",608:"1718d50e",624:"634fa487",657:"18ba09e8",778:"9ed0b096",833:"a4845b24",962:"fe62e6a5",1153:"6ccf66e6",1269:"08ebbb52",1322:"c4fa9eb6",1403:"2689bea3",1423:"c359a554",1729:"79498ebf",1825:"ac31b1fe",1828:"841157c1",1868:"064bb72d",1908:"779cc875",1992:"4e40b7c4",2101:"8fc15f3e",2202:"f3afcc14",2207:"d03c9ed9",2241:"7004cb25",2313:"9510e7ba",2371:"49494195",2372:"b29ff3d5",2403:"ec7e9aa8",2481:"ceb0e67d",2491:"8f96d191",2494:"ce064b60",2535:"814f3328",2594:"125891fd",2638:"759b231d",2642:"16889014",2664:"d27fc28e",2678:"69692008",2726:"1f37573d",2743:"dc35bb7a",2815:"fdcbe6a3",2827:"3fda5f98",2846:"8ce57a6b",2847:"61ac4271",2954:"12ed2dab",3e3:"3a918910",3056:"7b067c04",3057:"2f018540",3082:"45954ba7",3089:"a6aa9e1f",3090:"02e8b7ad",3101:"9b4b21f4",3130:"45d5f8ed",3136:"8a8e26f5",3212:"c1135639",3229:"5f9721d2",3271:"1afc68c2",3362:"9f6a3dc3",3408:"79431a14",3444:"20cfcb54",3449:"849c5b41",3543:"f8a34fc3",3600:"10780ce8",3608:"9e4087bc",3679:"389b5b7c",3694:"80575af9",3786:"f4715270",3819:"60a1989f",3831:"a30d890f",3936:"e53088e7",3979:"e2f9f8d0",4013:"01a85c17",4053:"5b4a16f7",4173:"4edc808e",4195:"c4f5d8e4",4259:"95df65d2",4275:"dd7cf046",4286:"b4e91e3e",4292:"128c8707",4467:"88fda7ea",4501:"fe473c49",4517:"1fa0d1e0",4740:"3d4810a6",4763:"3df52076",4792:"f6239f56",4795:"a9153e6c",5062:"20f7d99c",5072:"26c6894f",5143:"d2d99803",5158:"fa5bcb49",5196:"56d5a1b6",5204:"75bebf0c",5250:"74960afa",5302:"9348ba84",5414:"9b2911b2",5423:"2d56533d",5517:"46944d36",5561:"bb118c4d",5604:"4c71197f",5629:"3daa7323",5659:"a5be97b4",5714:"eab6853c",5893:"873980ae",5966:"9335b5e2",5996:"4c345d5a",6103:"ccc49370",6145:"6299633f",6238:"f5e4f3e9",6352:"4aacf18a",6353:"6abdd52b",6365:"d35a7e11",6474:"668f1c4f",6493:"80aad394",6594:"b78c10c5",6652:"3b553658",6684:"3660c03a",6694:"40854604",6723:"5fed5672",6802:"a067790f",6908:"d026abc8",6970:"3f3a9232",7097:"a19dc7b9",7152:"502cf3e5",7180:"b39b08a6",7185:"a3d1f60e",7457:"be702177",7514:"d899fc26",7634:"d91759ed",7637:"b0c36711",7666:"9347ca06",7783:"e3e1ea4a",7787:"fc087f51",7814:"270eda41",7827:"e65df44d",7829:"4412e50d",7848:"41498f80",7868:"c5c0bf52",7894:"b7206577",7918:"17896441",7957:"6c4b4fcb",7964:"8d942089",7967:"0a7e1969",8010:"cc862bda",8042:"bf6ed557",8099:"011c73d4",8167:"59a1cef9",8190:"a4053336",8250:"212a0069",8282:"83a35305",8459:"cf7c411f",8484:"fb00497e",8541:"81f6b3ae",8553:"7d980f8d",8592:"common",8610:"6875c492",8627:"47c2b12c",8640:"806b849f",8641:"f8791bbc",8659:"231158f5",8717:"9b60c77f",8758:"661869f0",8822:"5471eaa3",8838:"dd5125e5",8844:"06576e8a",9083:"301e35b6",9165:"72e09266",9177:"a5e9cad4",9216:"4f28b6a5",9223:"617cb3cd",9245:"88dea38b",9479:"cd53d48d",9492:"e37e5385",9514:"1be78505",9515:"5d7a018f",9540:"c773e81e",9606:"01aa7ca2",9701:"0d920061",9741:"9f44057e",9821:"5f5adf66",9839:"2335c677"}[e]||e)+"."+{15:"4ea053fb",53:"696c959e",54:"eb63ec2e",71:"0ba8a146",93:"0b2a5c9d",235:"44f8d726",286:"308e6f5a",443:"67e77aac",479:"cfc7a7aa",504:"1d649b8a",506:"13c35a55",566:"f0b49949",608:"3bd70279",624:"718f3a84",657:"245f4798",778:"e23c352e",833:"54a617e0",962:"c057b96f",1153:"45d91f0f",1269:"de41c779",1322:"c198b37e",1403:"6fa173e8",1423:"4cd76d22",1729:"498fd149",1825:"5ece0275",1828:"ac05ebb9",1868:"a8a26d8c",1908:"5190677a",1992:"f7368689",2101:"5845d26a",2202:"80c55006",2207:"1162a018",2241:"70fffbbd",2313:"f77088bc",2371:"c5ccf48b",2372:"8ba74519",2403:"3b63a6e7",2481:"40af9055",2491:"a15290c1",2494:"81ac4f2d",2535:"8db03fcf",2594:"fc8ed262",2638:"0aba9b3b",2642:"2345f0db",2664:"b54abd07",2678:"39f1b604",2726:"bb411a7d",2743:"2dbc7a42",2815:"84fdef37",2827:"259d8076",2846:"23d80d03",2847:"ff415a68",2954:"3c7fd0be",3e3:"46e589d8",3056:"ad6b0a96",3057:"298e050e",3082:"819d2249",3089:"23ef9658",3090:"d71dc862",3101:"49284939",3130:"ec3b4e79",3136:"080bf48b",3212:"2e31bfa0",3229:"4ced78f3",3271:"425ff3ef",3362:"d785a619",3408:"323d1799",3444:"45400670",3449:"209b96dd",3543:"2058e46b",3600:"b2ea133f",3608:"81159286",3679:"167a36c7",3694:"f6ce95ee",3786:"2fe747ff",3819:"c1a79247",3831:"c70c2854",3936:"77c14549",3979:"7c505b41",4013:"5a954921",4053:"44ed46d6",4173:"aef0d990",4195:"d1834d17",4259:"f4dfe74a",4275:"c5bf86e6",4286:"aa647afe",4292:"37065900",4467:"3b8705dd",4501:"42d2a163",4517:"b83ec512",4740:"3e973816",4763:"df58e5a7",4792:"c6033b3e",4795:"7b1b990b",4972:"19b2150f",5062:"4fd0d885",5072:"50b96ad1",5143:"86ea8533",5158:"ecb39654",5196:"967c1234",5204:"65c7c605",5250:"9fd5f399",5302:"7be9597b",5414:"e9dde77c",5423:"d3a31a65",5517:"d1f5d046",5561:"9afcc320",5604:"97eeb5b4",5629:"cc8c857b",5659:"497b5c11",5714:"483456c3",5893:"0e9ab1cf",5966:"37a8b56a",5996:"d9a28d42",6048:"3f870ee6",6103:"bd885947",6145:"6b90f13a",6238:"2bd6c7c4",6352:"39500fd9",6353:"ef431f2b",6365:"00e82f34",6474:"391af258",6493:"4165acc0",6594:"a7eb0c7a",6652:"26aec045",6684:"bd2117fb",6694:"5fb90a05",6723:"fcfc2321",6802:"0aff5b0b",6908:"380143dc",6970:"d5952bf3",7036:"dabea938",7097:"417052ac",7152:"acd75322",7180:"d027fe55",7185:"c54eb895",7457:"c41bf63f",7514:"15921a80",7634:"5f7577bc",7637:"59b19460",7666:"5c428c7d",7783:"149b7db3",7787:"acace6e1",7814:"1d413173",7827:"f1ec59c0",7829:"60b7ef82",7848:"0af31c9c",7868:"c1eca165",7894:"e4cb9e37",7918:"41a19d1c",7957:"cd545f82",7964:"a39134f2",7967:"68337635",8010:"ea510410",8042:"666eee41",8099:"75b70d6c",8167:"753e0fd2",8190:"b73169dc",8250:"a5a6f043",8282:"4469c667",8459:"61820338",8484:"2bef8e4b",8541:"27ff35a1",8553:"7c4e7120",8592:"586bca4c",8610:"73e7cdcd",8627:"b80f8b3e",8640:"7f5de7fb",8641:"1513c884",8659:"4611b88c",8717:"a9b941c4",8758:"cdb03ed5",8822:"95f0493c",8838:"6df96166",8844:"924a3036",9083:"fff589ab",9165:"f254eb84",9177:"da27ae54",9216:"e398698d",9223:"67e3edf6",9245:"d31f7196",9479:"2f9a0bcc",9492:"d300243a",9514:"58e80383",9515:"679da816",9540:"e4c0a45d",9606:"c6319e05",9701:"3053e1ce",9741:"7204d882",9821:"9d6e9d84",9839:"66127d97"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},d="docusaurus-wiki:",r.l=(e,a,c,b)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+c){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+c),t.src=e),f[e]=[a];var l=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var d=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/botc-wiki/",r.gca=function(e){return e={16889014:"2642",17896441:"7918",40854604:"6694",49494195:"2371",69692008:"2678","703e56ea":"15","935f2afb":"53","4011a915":"54","953d21be":"71",fadea3b2:"93","4d62d089":"235",dcef5ad2:"286",b2d1b6f5:"443","6370b936":"479",ce494c7e:"504",b05e0d9f:"506","1ac63ddf":"566","1718d50e":"608","634fa487":"624","18ba09e8":"657","9ed0b096":"778",a4845b24:"833",fe62e6a5:"962","6ccf66e6":"1153","08ebbb52":"1269",c4fa9eb6:"1322","2689bea3":"1403",c359a554:"1423","79498ebf":"1729",ac31b1fe:"1825","841157c1":"1828","064bb72d":"1868","779cc875":"1908","4e40b7c4":"1992","8fc15f3e":"2101",f3afcc14:"2202",d03c9ed9:"2207","7004cb25":"2241","9510e7ba":"2313",b29ff3d5:"2372",ec7e9aa8:"2403",ceb0e67d:"2481","8f96d191":"2491",ce064b60:"2494","814f3328":"2535","125891fd":"2594","759b231d":"2638",d27fc28e:"2664","1f37573d":"2726",dc35bb7a:"2743",fdcbe6a3:"2815","3fda5f98":"2827","8ce57a6b":"2846","61ac4271":"2847","12ed2dab":"2954","3a918910":"3000","7b067c04":"3056","2f018540":"3057","45954ba7":"3082",a6aa9e1f:"3089","02e8b7ad":"3090","9b4b21f4":"3101","45d5f8ed":"3130","8a8e26f5":"3136",c1135639:"3212","5f9721d2":"3229","1afc68c2":"3271","9f6a3dc3":"3362","79431a14":"3408","20cfcb54":"3444","849c5b41":"3449",f8a34fc3:"3543","10780ce8":"3600","9e4087bc":"3608","389b5b7c":"3679","80575af9":"3694",f4715270:"3786","60a1989f":"3819",a30d890f:"3831",e53088e7:"3936",e2f9f8d0:"3979","01a85c17":"4013","5b4a16f7":"4053","4edc808e":"4173",c4f5d8e4:"4195","95df65d2":"4259",dd7cf046:"4275",b4e91e3e:"4286","128c8707":"4292","88fda7ea":"4467",fe473c49:"4501","1fa0d1e0":"4517","3d4810a6":"4740","3df52076":"4763",f6239f56:"4792",a9153e6c:"4795","20f7d99c":"5062","26c6894f":"5072",d2d99803:"5143",fa5bcb49:"5158","56d5a1b6":"5196","75bebf0c":"5204","74960afa":"5250","9348ba84":"5302","9b2911b2":"5414","2d56533d":"5423","46944d36":"5517",bb118c4d:"5561","4c71197f":"5604","3daa7323":"5629",a5be97b4:"5659",eab6853c:"5714","873980ae":"5893","9335b5e2":"5966","4c345d5a":"5996",ccc49370:"6103","6299633f":"6145",f5e4f3e9:"6238","4aacf18a":"6352","6abdd52b":"6353",d35a7e11:"6365","668f1c4f":"6474","80aad394":"6493",b78c10c5:"6594","3b553658":"6652","3660c03a":"6684","5fed5672":"6723",a067790f:"6802",d026abc8:"6908","3f3a9232":"6970",a19dc7b9:"7097","502cf3e5":"7152",b39b08a6:"7180",a3d1f60e:"7185",be702177:"7457",d899fc26:"7514",d91759ed:"7634",b0c36711:"7637","9347ca06":"7666",e3e1ea4a:"7783",fc087f51:"7787","270eda41":"7814",e65df44d:"7827","4412e50d":"7829","41498f80":"7848",c5c0bf52:"7868",b7206577:"7894","6c4b4fcb":"7957","8d942089":"7964","0a7e1969":"7967",cc862bda:"8010",bf6ed557:"8042","011c73d4":"8099","59a1cef9":"8167",a4053336:"8190","212a0069":"8250","83a35305":"8282",cf7c411f:"8459",fb00497e:"8484","81f6b3ae":"8541","7d980f8d":"8553",common:"8592","6875c492":"8610","47c2b12c":"8627","806b849f":"8640",f8791bbc:"8641","231158f5":"8659","9b60c77f":"8717","661869f0":"8758","5471eaa3":"8822",dd5125e5:"8838","06576e8a":"8844","301e35b6":"9083","72e09266":"9165",a5e9cad4:"9177","4f28b6a5":"9216","617cb3cd":"9223","88dea38b":"9245",cd53d48d:"9479",e37e5385:"9492","1be78505":"9514","5d7a018f":"9515",c773e81e:"9540","01aa7ca2":"9606","0d920061":"9701","9f44057e":"9741","5f5adf66":"9821","2335c677":"9839"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,c)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((c,d)=>f=e[a]=[c,d]));c.push(f[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(c=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var d=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,f[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var f,d,b=c[0],t=c[1],o=c[2],n=0;if(b.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(c);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},c=self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();