(()=>{"use strict";var e,a,f,d,c,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,r.c=t,e=[],r.O=(a,f,d,c)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],c=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&c||b>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,d,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(c,b),c},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({15:"703e56ea",53:"935f2afb",54:"4011a915",71:"953d21be",93:"fadea3b2",235:"4d62d089",286:"dcef5ad2",321:"2340a531",443:"b2d1b6f5",479:"6370b936",504:"ce494c7e",506:"b05e0d9f",608:"1718d50e",624:"634fa487",657:"18ba09e8",833:"a4845b24",962:"fe62e6a5",1153:"6ccf66e6",1269:"08ebbb52",1322:"c4fa9eb6",1403:"2689bea3",1423:"c359a554",1627:"24372975",1729:"79498ebf",1825:"ac31b1fe",1828:"841157c1",1860:"90989bb2",1868:"064bb72d",1908:"779cc875",1992:"4e40b7c4",2086:"f81d193d",2101:"8fc15f3e",2202:"f3afcc14",2207:"d03c9ed9",2241:"7004cb25",2313:"9510e7ba",2371:"49494195",2372:"b29ff3d5",2401:"85fb37f6",2403:"ec7e9aa8",2481:"ceb0e67d",2491:"8f96d191",2494:"ce064b60",2535:"814f3328",2550:"81907958",2575:"ab79110f",2594:"125891fd",2638:"759b231d",2642:"16889014",2664:"d27fc28e",2678:"69692008",2726:"1f37573d",2743:"dc35bb7a",2815:"fdcbe6a3",2827:"3fda5f98",2846:"8ce57a6b",2847:"61ac4271",2921:"a2db477d",2954:"12ed2dab",3056:"7b067c04",3057:"2f018540",3073:"bad81e4d",3082:"45954ba7",3089:"a6aa9e1f",3090:"02e8b7ad",3101:"9b4b21f4",3130:"45d5f8ed",3136:"8a8e26f5",3142:"52df89c5",3229:"5f9721d2",3271:"1afc68c2",3362:"9f6a3dc3",3408:"79431a14",3444:"20cfcb54",3449:"849c5b41",3543:"f8a34fc3",3600:"10780ce8",3608:"9e4087bc",3679:"389b5b7c",3694:"80575af9",3786:"f4715270",3819:"60a1989f",3936:"e53088e7",3979:"e2f9f8d0",3985:"62384fa8",4013:"01a85c17",4027:"e66dfa52",4053:"5b4a16f7",4173:"4edc808e",4195:"c4f5d8e4",4259:"95df65d2",4275:"dd7cf046",4286:"b4e91e3e",4292:"128c8707",4311:"790aa8a2",4466:"62477a81",4467:"88fda7ea",4501:"fe473c49",4517:"1fa0d1e0",4740:"3d4810a6",4763:"3df52076",4792:"f6239f56",4795:"a9153e6c",4803:"b7552748",4905:"32983ddc",4916:"213ca66f",5062:"20f7d99c",5072:"26c6894f",5098:"416b80c6",5143:"d2d99803",5158:"fa5bcb49",5196:"56d5a1b6",5204:"75bebf0c",5250:"74960afa",5414:"9b2911b2",5423:"2d56533d",5517:"46944d36",5561:"bb118c4d",5600:"43688194",5604:"4c71197f",5629:"3daa7323",5659:"a5be97b4",5674:"0e1836e5",5714:"eab6853c",5893:"873980ae",5966:"9335b5e2",6103:"ccc49370",6145:"6299633f",6352:"4aacf18a",6353:"6abdd52b",6365:"d35a7e11",6391:"4da41012",6428:"100fbb06",6474:"668f1c4f",6493:"80aad394",6495:"a6aa77a4",6528:"9547b16f",6594:"b78c10c5",6652:"3b553658",6684:"3660c03a",6694:"40854604",6723:"5fed5672",6802:"a067790f",6908:"d026abc8",6970:"3f3a9232",7097:"a19dc7b9",7152:"502cf3e5",7180:"b39b08a6",7185:"a3d1f60e",7457:"be702177",7514:"d899fc26",7634:"d91759ed",7637:"b0c36711",7666:"9347ca06",7736:"0d08fd45",7783:"e3e1ea4a",7787:"fc087f51",7814:"270eda41",7827:"e65df44d",7829:"4412e50d",7848:"41498f80",7868:"c5c0bf52",7894:"b7206577",7918:"17896441",7921:"3cbb8945",7957:"6c4b4fcb",7964:"8d942089",7967:"0a7e1969",8010:"cc862bda",8042:"bf6ed557",8099:"011c73d4",8167:"59a1cef9",8190:"a4053336",8250:"212a0069",8459:"cf7c411f",8484:"fb00497e",8541:"81f6b3ae",8553:"7d980f8d",8592:"common",8610:"6875c492",8641:"f8791bbc",8659:"231158f5",8662:"7cc5ee3b",8717:"9b60c77f",8758:"661869f0",8810:"eaa99903",8822:"5471eaa3",8838:"dd5125e5",8844:"06576e8a",8872:"592b68a8",8914:"a183fbb7",8918:"7f109569",9083:"301e35b6",9165:"72e09266",9216:"4f28b6a5",9223:"617cb3cd",9245:"88dea38b",9479:"cd53d48d",9492:"e37e5385",9514:"1be78505",9515:"5d7a018f",9540:"c773e81e",9606:"01aa7ca2",9701:"0d920061",9839:"2335c677"}[e]||e)+"."+{15:"4ea053fb",53:"9d428ae1",54:"a5c0f968",71:"b77ea50e",93:"49c543b6",235:"7904964f",286:"dc721045",321:"4e4ff80b",443:"9720efe1",479:"9285d881",504:"6dce5072",506:"f63e64d3",608:"f172312d",624:"6383aae2",657:"245f4798",833:"494b1ab8",962:"6c80aaa7",1153:"91764329",1269:"191d4ee3",1322:"3195132e",1403:"5cf923c3",1423:"a21e587a",1627:"d4747a4b",1729:"5456bf18",1825:"4b6b97fa",1828:"8e1e9b8d",1860:"4c87b403",1868:"37dc6ecf",1908:"abdae539",1992:"b5b34eb7",2086:"06d04a34",2101:"c58928d6",2202:"ce7cf371",2207:"cdebf287",2241:"11634f79",2313:"cc47872c",2371:"b4696ee6",2372:"cbddf5c7",2401:"50264907",2403:"3b63a6e7",2481:"dc5d54c3",2491:"2f59de3f",2494:"0cd3da67",2535:"8db03fcf",2550:"f5b38e52",2575:"e5b87fca",2594:"dd3031cf",2638:"51675674",2642:"8e9c224d",2664:"060c083b",2678:"cdf84971",2726:"18e87ec1",2743:"0456ed2a",2815:"409e032d",2827:"294dd964",2846:"d9e1c423",2847:"ab6f11c6",2921:"9c891c28",2954:"b3b4b762",3056:"e6a448e0",3057:"6178dc7d",3073:"b888bb84",3082:"664535d0",3089:"23ef9658",3090:"5a734a75",3101:"769e5af9",3130:"62fb2b29",3136:"8440576f",3142:"4c67cd60",3229:"08322216",3271:"ed1ff40e",3362:"0d67ff31",3408:"1379a512",3444:"bdbfb47c",3449:"f2b4219f",3543:"4cde517b",3600:"b879922b",3608:"81159286",3679:"39347044",3694:"c118ba7e",3786:"79c1a1a9",3819:"cae3e510",3936:"a00e9e54",3979:"7c505b41",3985:"abb7dfcf",4013:"5a954921",4027:"6283d87f",4053:"9d82967a",4173:"23363689",4195:"d1834d17",4259:"e35ce3d3",4275:"bd3ca251",4286:"0bfdceea",4292:"66455c15",4311:"f29e95f8",4466:"ed92e641",4467:"27a2f82d",4501:"42d2a163",4517:"05992714",4740:"fc03b9fc",4763:"a5a29059",4792:"09fd0702",4795:"5f37ec34",4803:"70727b86",4905:"3711aa32",4916:"172d2fd9",4972:"19b2150f",5062:"6451d9dc",5072:"d90df35d",5098:"34d279a4",5143:"ca43201d",5158:"0a901afd",5196:"7128e291",5204:"cc268e39",5250:"476e6ad6",5414:"cf77dad0",5423:"d3a31a65",5517:"c2f355d1",5561:"c6ca08a8",5600:"eda83bd4",5604:"b8b591d0",5629:"fa42c092",5659:"02e845ee",5674:"32234f0e",5714:"6e928744",5893:"26936a2f",5966:"87e509db",6048:"3f870ee6",6103:"bd885947",6145:"6b90f13a",6352:"832ac09e",6353:"1c285720",6365:"7693c25c",6391:"7a2c6339",6428:"23988aed",6474:"94829c1c",6493:"bf05b41d",6495:"afb78642",6528:"3d967d49",6594:"dafa692d",6652:"b42084bd",6684:"92d84a63",6694:"ac6f0703",6723:"0dc325d1",6802:"0aff5b0b",6908:"4837c74b",6970:"bbd8d338",7036:"dabea938",7097:"417052ac",7152:"8a081f02",7180:"dd1585a4",7185:"de2c3c0a",7457:"59bf5241",7514:"44165010",7634:"109735f8",7637:"67ef45dd",7666:"cdbc9bda",7736:"665ce61a",7783:"74caf454",7787:"5f4264ae",7814:"b62f7af2",7827:"0a379acf",7829:"26e03351",7848:"b7a9f001",7868:"bf254c94",7894:"e4c4a765",7918:"41a19d1c",7921:"809d54ed",7957:"83bcbeea",7964:"a077c0e3",7967:"1ef559d6",8010:"3a5f05be",8042:"666eee41",8099:"ff426a02",8167:"2422aa3b",8190:"d19c508b",8250:"a5a6f043",8459:"7068f282",8484:"2bef8e4b",8541:"27ff35a1",8553:"d423a5c1",8592:"3a9f034f",8610:"73e7cdcd",8641:"e1c48d6c",8659:"bebcc387",8662:"995acc5e",8717:"bb1ddfbb",8758:"d12bb7ab",8810:"69605199",8822:"5be4eecd",8838:"8758b8e5",8844:"7ca77884",8872:"69e86a13",8914:"41316bb0",8918:"514de77c",9083:"d1a8f1c5",9165:"f79f1bbd",9216:"c70a14cb",9223:"84d8eef8",9245:"f192afaa",9479:"83854be1",9492:"66292fe1",9514:"58e80383",9515:"389a8fd4",9540:"d8ee9cc1",9606:"506ce596",9701:"d1dd2bc4",9839:"a1d74929"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="docusaurus-wiki:",r.l=(e,a,f,b)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var c=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/botc-wiki/",r.gca=function(e){return e={16889014:"2642",17896441:"7918",24372975:"1627",40854604:"6694",43688194:"5600",49494195:"2371",69692008:"2678",81907958:"2550","703e56ea":"15","935f2afb":"53","4011a915":"54","953d21be":"71",fadea3b2:"93","4d62d089":"235",dcef5ad2:"286","2340a531":"321",b2d1b6f5:"443","6370b936":"479",ce494c7e:"504",b05e0d9f:"506","1718d50e":"608","634fa487":"624","18ba09e8":"657",a4845b24:"833",fe62e6a5:"962","6ccf66e6":"1153","08ebbb52":"1269",c4fa9eb6:"1322","2689bea3":"1403",c359a554:"1423","79498ebf":"1729",ac31b1fe:"1825","841157c1":"1828","90989bb2":"1860","064bb72d":"1868","779cc875":"1908","4e40b7c4":"1992",f81d193d:"2086","8fc15f3e":"2101",f3afcc14:"2202",d03c9ed9:"2207","7004cb25":"2241","9510e7ba":"2313",b29ff3d5:"2372","85fb37f6":"2401",ec7e9aa8:"2403",ceb0e67d:"2481","8f96d191":"2491",ce064b60:"2494","814f3328":"2535",ab79110f:"2575","125891fd":"2594","759b231d":"2638",d27fc28e:"2664","1f37573d":"2726",dc35bb7a:"2743",fdcbe6a3:"2815","3fda5f98":"2827","8ce57a6b":"2846","61ac4271":"2847",a2db477d:"2921","12ed2dab":"2954","7b067c04":"3056","2f018540":"3057",bad81e4d:"3073","45954ba7":"3082",a6aa9e1f:"3089","02e8b7ad":"3090","9b4b21f4":"3101","45d5f8ed":"3130","8a8e26f5":"3136","52df89c5":"3142","5f9721d2":"3229","1afc68c2":"3271","9f6a3dc3":"3362","79431a14":"3408","20cfcb54":"3444","849c5b41":"3449",f8a34fc3:"3543","10780ce8":"3600","9e4087bc":"3608","389b5b7c":"3679","80575af9":"3694",f4715270:"3786","60a1989f":"3819",e53088e7:"3936",e2f9f8d0:"3979","62384fa8":"3985","01a85c17":"4013",e66dfa52:"4027","5b4a16f7":"4053","4edc808e":"4173",c4f5d8e4:"4195","95df65d2":"4259",dd7cf046:"4275",b4e91e3e:"4286","128c8707":"4292","790aa8a2":"4311","62477a81":"4466","88fda7ea":"4467",fe473c49:"4501","1fa0d1e0":"4517","3d4810a6":"4740","3df52076":"4763",f6239f56:"4792",a9153e6c:"4795",b7552748:"4803","32983ddc":"4905","213ca66f":"4916","20f7d99c":"5062","26c6894f":"5072","416b80c6":"5098",d2d99803:"5143",fa5bcb49:"5158","56d5a1b6":"5196","75bebf0c":"5204","74960afa":"5250","9b2911b2":"5414","2d56533d":"5423","46944d36":"5517",bb118c4d:"5561","4c71197f":"5604","3daa7323":"5629",a5be97b4:"5659","0e1836e5":"5674",eab6853c:"5714","873980ae":"5893","9335b5e2":"5966",ccc49370:"6103","6299633f":"6145","4aacf18a":"6352","6abdd52b":"6353",d35a7e11:"6365","4da41012":"6391","100fbb06":"6428","668f1c4f":"6474","80aad394":"6493",a6aa77a4:"6495","9547b16f":"6528",b78c10c5:"6594","3b553658":"6652","3660c03a":"6684","5fed5672":"6723",a067790f:"6802",d026abc8:"6908","3f3a9232":"6970",a19dc7b9:"7097","502cf3e5":"7152",b39b08a6:"7180",a3d1f60e:"7185",be702177:"7457",d899fc26:"7514",d91759ed:"7634",b0c36711:"7637","9347ca06":"7666","0d08fd45":"7736",e3e1ea4a:"7783",fc087f51:"7787","270eda41":"7814",e65df44d:"7827","4412e50d":"7829","41498f80":"7848",c5c0bf52:"7868",b7206577:"7894","3cbb8945":"7921","6c4b4fcb":"7957","8d942089":"7964","0a7e1969":"7967",cc862bda:"8010",bf6ed557:"8042","011c73d4":"8099","59a1cef9":"8167",a4053336:"8190","212a0069":"8250",cf7c411f:"8459",fb00497e:"8484","81f6b3ae":"8541","7d980f8d":"8553",common:"8592","6875c492":"8610",f8791bbc:"8641","231158f5":"8659","7cc5ee3b":"8662","9b60c77f":"8717","661869f0":"8758",eaa99903:"8810","5471eaa3":"8822",dd5125e5:"8838","06576e8a":"8844","592b68a8":"8872",a183fbb7:"8914","7f109569":"8918","301e35b6":"9083","72e09266":"9165","4f28b6a5":"9216","617cb3cd":"9223","88dea38b":"9245",cd53d48d:"9479",e37e5385:"9492","1be78505":"9514","5d7a018f":"9515",c773e81e:"9540","01aa7ca2":"9606","0d920061":"9701","2335c677":"9839"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((f,c)=>d=e[a]=[f,c]));f.push(d[2]=c);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,c,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)c=b[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();