!function(){"use strict";var e,f,a,c,b,d={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=d,n.c=t,e=[],n.O=function(f,a,c,b){if(!a){var d=1/0;for(o=0;o<e.length;o++){a=e[o][0],c=e[o][1],b=e[o][2];for(var t=!0,r=0;r<a.length;r++)(!1&b||d>=b)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(t=!1,b<d&&(d=b));t&&(e.splice(o--,1),f=c())}return f}b=b||0;for(var o=e.length;o>0&&e[o-1][2]>b;o--)e[o]=e[o-1];e[o]=[a,c,b]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);n.r(b);var d={};f=f||[null,a({}),a([]),a(a)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((function(f){d[f]=function(){return e[f]}}));return d.default=function(){return e},n.d(b,d),b},n.d=function(e,f){for(var a in f)n.o(f,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,a){return n.f[a](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",54:"4011a915",71:"953d21be",93:"fadea3b2",235:"4d62d089",286:"dcef5ad2",504:"ce494c7e",506:"b05e0d9f",566:"1ac63ddf",608:"1718d50e",624:"634fa487",657:"18ba09e8",778:"9ed0b096",833:"a4845b24",962:"fe62e6a5",1153:"6ccf66e6",1269:"08ebbb52",1322:"c4fa9eb6",1403:"2689bea3",1423:"c359a554",1729:"79498ebf",1825:"ac31b1fe",1828:"841157c1",1868:"064bb72d",1908:"779cc875",2101:"8fc15f3e",2202:"f3afcc14",2241:"7004cb25",2371:"49494195",2372:"b29ff3d5",2403:"ec7e9aa8",2491:"8f96d191",2494:"ce064b60",2594:"125891fd",2638:"759b231d",2642:"16889014",2664:"d27fc28e",2678:"69692008",2743:"dc35bb7a",2815:"fdcbe6a3",2827:"3fda5f98",2846:"8ce57a6b",2847:"61ac4271",2954:"12ed2dab",3e3:"3a918910",3057:"2f018540",3089:"a6aa9e1f",3101:"9b4b21f4",3130:"60a1989f",3136:"8a8e26f5",3212:"c1135639",3229:"5f9721d2",3271:"1afc68c2",3362:"9f6a3dc3",3408:"79431a14",3449:"849c5b41",3543:"f8a34fc3",3679:"389b5b7c",3694:"80575af9",3829:"7a4eb5f9",3831:"a30d890f",3845:"f4582031",3936:"e53088e7",4013:"01a85c17",4053:"5b4a16f7",4173:"4edc808e",4195:"c4f5d8e4",4292:"128c8707",4501:"fe473c49",4763:"3df52076",4795:"a9153e6c",5062:"20f7d99c",5072:"26c6894f",5143:"d2d99803",5158:"fa5bcb49",5204:"75bebf0c",5250:"74960afa",5302:"9348ba84",5414:"9b2911b2",5517:"46944d36",5604:"4c71197f",5629:"3daa7323",5714:"eab6853c",5893:"873980ae",5966:"9335b5e2",5996:"4c345d5a",6103:"ccc49370",6238:"f5e4f3e9",6352:"4aacf18a",6365:"d35a7e11",6474:"668f1c4f",6493:"80aad394",6684:"3660c03a",6723:"5fed5672",6970:"3f3a9232",7097:"a19dc7b9",7152:"502cf3e5",7180:"b39b08a6",7185:"a3d1f60e",7457:"be702177",7637:"b0c36711",7666:"9347ca06",7787:"fc087f51",7814:"270eda41",7827:"e65df44d",7829:"4412e50d",7848:"41498f80",7868:"c5c0bf52",7894:"b7206577",7918:"17896441",7957:"6c4b4fcb",7967:"0a7e1969",8010:"cc862bda",8042:"bf6ed557",8099:"011c73d4",8167:"59a1cef9",8190:"a4053336",8250:"212a0069",8459:"cf7c411f",8484:"fb00497e",8553:"7d980f8d",8592:"common",8610:"6875c492",8627:"47c2b12c",8640:"806b849f",8641:"f8791bbc",8758:"661869f0",9165:"72e09266",9177:"a5e9cad4",9216:"4f28b6a5",9245:"88dea38b",9479:"cd53d48d",9492:"e37e5385",9514:"1be78505",9515:"5d7a018f",9606:"01aa7ca2",9741:"9f44057e",9821:"5f5adf66"}[e]||e)+"."+{53:"b5c167aa",54:"92bd6959",71:"745540a4",93:"ab786dfb",235:"bf7360f7",286:"9444e601",504:"ecb51174",506:"68ce6e1d",566:"41cd64d6",608:"1aa72713",624:"664a5710",657:"a4d9bc25",778:"4658ea92",833:"3871c9b4",962:"eda0a982",1153:"451d0f93",1269:"17343bd4",1322:"b6a89541",1403:"1dbf27e2",1423:"1f57d673",1729:"56c91173",1825:"7ec03c57",1828:"d3203218",1868:"41fafd8f",1908:"a28419e5",2101:"9c3b125e",2202:"06f78282",2241:"4e032df0",2371:"c0502feb",2372:"8a46cca8",2403:"1b61205f",2491:"636dcbe1",2494:"aa7c21fb",2594:"e210b949",2611:"718c85e2",2638:"af3dc322",2642:"4c10c60d",2664:"d0bb7e3b",2678:"62f5ef10",2743:"de269edb",2815:"5a372b0f",2827:"759dc25d",2846:"7e156e68",2847:"a2c44dfa",2954:"0fd30b82",3e3:"e8f47cf4",3057:"911cf9fa",3089:"67f3a562",3101:"90b246a7",3130:"182092f9",3136:"1843ad6d",3212:"63570afd",3229:"b496435d",3271:"bc6a18cc",3362:"f3eba44d",3408:"467c0028",3449:"c7d5ef27",3541:"e0cb13e8",3543:"6a55fa8f",3679:"d4816b1e",3694:"fa899956",3829:"9401f81c",3831:"21261258",3845:"c734bf27",3936:"675f5f28",4013:"8475ee76",4053:"bb26443d",4173:"61d8aa5d",4195:"1aba2a16",4292:"6571c0a4",4501:"d5fc3a68",4608:"5b16c81c",4763:"62ec95b9",4795:"e2c2423d",5062:"88548146",5072:"cefe1381",5143:"03942d67",5158:"a925ff2b",5204:"bf88fd76",5250:"0a151681",5302:"bd65b2f0",5414:"e8048a00",5486:"dbf140c0",5517:"a3bed439",5604:"5785020c",5629:"a9ded263",5714:"4e284e45",5893:"07f78a13",5966:"c2e7ece9",5996:"e6c1c857",6103:"603678b5",6238:"2face898",6352:"347e97fb",6365:"1ba1a193",6474:"908311bf",6493:"309838f3",6684:"0e8d8885",6723:"87851c55",6970:"052d8982",7097:"446ab242",7152:"874ad031",7180:"823c270e",7185:"2119aad7",7457:"1ccde976",7637:"b1cfdf28",7666:"7ad2e075",7787:"f29d395c",7814:"d86b5ccc",7827:"05dc5634",7829:"abf84ef3",7848:"ca975422",7868:"dba6a5f3",7894:"b132a906",7918:"ad85074b",7957:"d238076c",7967:"bb7019be",8010:"396ba67e",8042:"56be1f29",8099:"c3316913",8167:"36385b32",8190:"3a42a6c3",8250:"5a83c90f",8459:"065c9c32",8484:"c874152b",8553:"2107e4e7",8592:"261c268e",8610:"460d921f",8627:"377bf62c",8640:"a8372859",8641:"abbd4ff6",8758:"ea589578",9165:"9cb6af5d",9177:"02c7190b",9216:"e0f83098",9245:"bba63720",9479:"b61a1801",9492:"0223047f",9514:"bb1a2b3b",9515:"17a58b4b",9606:"20d13335",9741:"216d360f",9821:"6c734fec"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.42642123.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},b="docusaurus-wiki:",n.l=function(e,f,a,d){if(c[e])c[e].push(f);else{var t,r;if(void 0!==a)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+a){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",b+a),t.src=e),c[e]=[f];var s=function(f,a){t.onerror=t.onload=null,clearTimeout(l);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((function(e){return e(a)})),f)return f(a)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/botc-wiki/",n.gca=function(e){return e={16889014:"2642",17896441:"7918",49494195:"2371",69692008:"2678","935f2afb":"53","4011a915":"54","953d21be":"71",fadea3b2:"93","4d62d089":"235",dcef5ad2:"286",ce494c7e:"504",b05e0d9f:"506","1ac63ddf":"566","1718d50e":"608","634fa487":"624","18ba09e8":"657","9ed0b096":"778",a4845b24:"833",fe62e6a5:"962","6ccf66e6":"1153","08ebbb52":"1269",c4fa9eb6:"1322","2689bea3":"1403",c359a554:"1423","79498ebf":"1729",ac31b1fe:"1825","841157c1":"1828","064bb72d":"1868","779cc875":"1908","8fc15f3e":"2101",f3afcc14:"2202","7004cb25":"2241",b29ff3d5:"2372",ec7e9aa8:"2403","8f96d191":"2491",ce064b60:"2494","125891fd":"2594","759b231d":"2638",d27fc28e:"2664",dc35bb7a:"2743",fdcbe6a3:"2815","3fda5f98":"2827","8ce57a6b":"2846","61ac4271":"2847","12ed2dab":"2954","3a918910":"3000","2f018540":"3057",a6aa9e1f:"3089","9b4b21f4":"3101","60a1989f":"3130","8a8e26f5":"3136",c1135639:"3212","5f9721d2":"3229","1afc68c2":"3271","9f6a3dc3":"3362","79431a14":"3408","849c5b41":"3449",f8a34fc3:"3543","389b5b7c":"3679","80575af9":"3694","7a4eb5f9":"3829",a30d890f:"3831",f4582031:"3845",e53088e7:"3936","01a85c17":"4013","5b4a16f7":"4053","4edc808e":"4173",c4f5d8e4:"4195","128c8707":"4292",fe473c49:"4501","3df52076":"4763",a9153e6c:"4795","20f7d99c":"5062","26c6894f":"5072",d2d99803:"5143",fa5bcb49:"5158","75bebf0c":"5204","74960afa":"5250","9348ba84":"5302","9b2911b2":"5414","46944d36":"5517","4c71197f":"5604","3daa7323":"5629",eab6853c:"5714","873980ae":"5893","9335b5e2":"5966","4c345d5a":"5996",ccc49370:"6103",f5e4f3e9:"6238","4aacf18a":"6352",d35a7e11:"6365","668f1c4f":"6474","80aad394":"6493","3660c03a":"6684","5fed5672":"6723","3f3a9232":"6970",a19dc7b9:"7097","502cf3e5":"7152",b39b08a6:"7180",a3d1f60e:"7185",be702177:"7457",b0c36711:"7637","9347ca06":"7666",fc087f51:"7787","270eda41":"7814",e65df44d:"7827","4412e50d":"7829","41498f80":"7848",c5c0bf52:"7868",b7206577:"7894","6c4b4fcb":"7957","0a7e1969":"7967",cc862bda:"8010",bf6ed557:"8042","011c73d4":"8099","59a1cef9":"8167",a4053336:"8190","212a0069":"8250",cf7c411f:"8459",fb00497e:"8484","7d980f8d":"8553",common:"8592","6875c492":"8610","47c2b12c":"8627","806b849f":"8640",f8791bbc:"8641","661869f0":"8758","72e09266":"9165",a5e9cad4:"9177","4f28b6a5":"9216","88dea38b":"9245",cd53d48d:"9479",e37e5385:"9492","1be78505":"9514","5d7a018f":"9515","01aa7ca2":"9606","9f44057e":"9741","5f5adf66":"9821"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,a){var c=n.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var b=new Promise((function(a,b){c=e[f]=[a,b]}));a.push(c[2]=b);var d=n.p+n.u(f),t=new Error;n.l(d,(function(a){if(n.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var b=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,a){var c,b,d=a[0],t=a[1],r=a[2],o=0;for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n);for(f&&f(a);o<d.length;o++)b=d[o],n.o(e,b)&&e[b]&&e[b][0](),e[d[o]]=0;return n.O(u)},a=self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}()}();