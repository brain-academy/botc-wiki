(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[8592],{3349:function(e,n,a){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(n,{Z:function(){return r}})},6156:function(e,n,a){"use strict";function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}a.d(n,{Z:function(){return r}})},3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return m},kt:function(){return d}});var r=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},E=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),E=u(a),d=i,N=E["".concat(s,".").concat(d)]||E[d]||c[d]||t;return a?r.createElement(N,l(l({ref:n},m),{},{components:a})):r.createElement(N,l({ref:n},m))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,l=new Array(t);l[0]=E;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<t;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}E.displayName="MDXCreateElement"},3919:function(e,n,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}a.d(n,{b:function(){return r},Z:function(){return i}})},4996:function(e,n,a){"use strict";a.d(n,{C:function(){return t},Z:function(){return l}});var r=a(2263),i=a(3919);function t(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,a=void 0===n?"/":n,t=e.url;return{withBaseUrl:function(e,n){return function(e,n,a,r){var t=void 0===r?{}:r,l=t.forcePrependBaseUrl,o=void 0!==l&&l,s=t.absolute,u=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,i.b)(a))return a;if(o)return n+a;var m=a.startsWith(n)?a:n+a.replace(/^\//,"");return u?e+m:m}(t,a,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,t().withBaseUrl)(e,n)}},8917:function(e,n,a){"use strict";function r(e,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}a.d(n,{Z:function(){return l}});var i=a(6156),t=a(4996),l=function(){function e(e,n){void 0===n&&(n=e.toLowerCase()),this.name=e,this.filename=n,(0,i.Z)(this,"_base_url",void 0)}var n,a,l;return n=e,(a=[{key:"path",get:function(){return(0,t.Z)(this._base_url)+"/"+this.filename}}])&&r(n.prototype,a),l&&r(n,l),e}()},6376:function(e,n,a){"use strict";var r=a(9756),i=a(4996),t=a(7294),l=a(7792),o=a(524),s=a(8777),u=["Villageois","Etrangers","Sbires","D\xe9mons","Voyageurs","L\xe9gendaires"];n.Z=function(e){var n=e.page,a=e.tile,m=e.module,c=(0,r.Z)(e,["page","tile","module"]);if(!m){var E=Object.keys(c).filter(s.l);if(E.length>1)throw new Error("Found multiple BOTC modules in the same component: "+E.join("|"));if(0===E.length)throw new Error("Found Module component with no valid BoTC Module (component's attributes: ["+Object.keys(c)+"])");m=s.Z.fromName(E[0])}var d=m,N=d.imageUrl,T=d.fabled,w=d.roles,I=d.path,p=d.name,R=d.description,g=d.theme,S=(0,i.Z)(N);return n?t.createElement("div",null,S&&t.createElement("div",{style:{width:"100%",textAlign:"center"}},t.createElement("img",{style:{width:"300px",height:"300px"},src:S,alt:p})),T&&t.createElement("p",{style:{whiteSpace:"pre-line",textAlign:"justify",textJustify:"inter-word",fontStyle:"italic",fontSize:"large",color:null==g?void 0:g.color}},t.createElement("label",null,'"'),T,t.createElement("label",null,'"')),l.g2.map((function(e,n){return t.createElement(t.Fragment,{key:n},t.createElement("h1",{style:{padding:"20px 0 0 0"}},u[n]),t.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 180px)"}},w.filter((function(n){return n instanceof e})).map((function(e){return t.createElement(o.Z,{key:e.name,role:e,tile:!0})}))))}))):a?t.createElement("div",{style:{width:"100%",maxWidth:"400px",marginBottom:"20px",textAlign:"center"}},t.createElement("a",{href:I},S?t.createElement("img",{style:{width:"330px",height:"300px"},src:S,alt:p}):t.createElement("h3",{style:{textAlign:"center"}},p)),t.createElement("p",{style:{padding:"0 10px 0 10px",whiteSpace:"pre-line"}},R)):t.createElement("a",{href:I,style:{color:null==g?void 0:g.color}},p)}},8777:function(e,n,a){"use strict";a.d(n,{Z:function(){return s},l:function(){return u}});var r=a(3349),i=a(1788),t=a(6156),l=a(8917),o=a(7792),s=function(e){function n(n){var a,i=n.name,l=n.filename,o=void 0===l?i.toLowerCase():l,s=n.roles,u=n.imageUrl,m=n.summary,c=n.description,E=n.fabled,d=n.theme;return a=e.call(this,i,o)||this,(0,t.Z)((0,r.Z)(a),"_base_url","/docs/modules"),(0,t.Z)((0,r.Z)(a),"roles",void 0),(0,t.Z)((0,r.Z)(a),"imageUrl",void 0),(0,t.Z)((0,r.Z)(a),"summary",void 0),(0,t.Z)((0,r.Z)(a),"description",void 0),(0,t.Z)((0,r.Z)(a),"fabled",void 0),(0,t.Z)((0,r.Z)(a),"theme",void 0),a.roles=s,a.imageUrl=u,a.summary=m,a.description=c,a.fabled=E,a.theme=d,a}return(0,i.Z)(n,e),n}(l.Z);(0,t.Z)(s,"containing",(function(e){return s.MODULES.filter((function(n){return n.roles.includes(e)}))})),(0,t.Z)(s,"fromName",(function(e){if(u(e))return s[e];throw new Error("BoTC Module not found : "+e)})),(0,t.Z)(s,"TROUBLE_BREWING",new s({name:"Trouble Brewing",filename:"trouble-brewing",imageUrl:"img/blood-on-the-clocktower/BOTC-TB.png",roles:[o.w1.LAVANDIERE,o.w1.ARCHIVISTE,o.w1.ENQUETEUR,o.w1.CUISTOT,o.w1.EMPATHIQUE,o.w1.VOYANTE,o.w1.CROQUE_MORT,o.w1.MOINE,o.w1.GARDIEN,o.w1.PUCELLE,o.w1.MERCENAIRE,o.w1.SOLDAT,o.w1.MAIRE,o.cz.MAJORDOME,o.cz.SOULARD,o.cz.RECLUS,o.cz.VERTUEUX,o.A_.EMPOISONNEUR,o.A_.ESPION,o.A_.CROQUEUSE_D_HOMMES,o.A_.BARON,o.bU.IMP],theme:{color:"red"},summary:"De l'art de l'ivresse \xe0 celui d'empoisonnement...\n            Trouble Brewing sera votre premi\xe8re exp\xe9rience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.",description:"De l'art de l'ivresse \xe0 celui d'empoisonnement...\n            Un D\xe9mon, quatre Sbires, ce sont ces derniers que les Villageois devront d\xe9terminer pour pr\xe9tendre \xe0 la Victoire.\n            Trouble Brewing sera votre premi\xe8re exp\xe9rience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.",fabled:"Des nuages se forment au-dessus de Ravenswood Bluff, engloutissant ce Village tranquille et ses habitants superstitieux de leurs ombres macabres. Des v\xeatements fra\xeechement lav\xe9s dansent sinistrement sur les \xe9tendages entre les cottages. Les chemin\xe9es crachent des volutes de fum\xe9e dans l\u2019air. Des senteurs exotiques flottent entre les fissures des fen\xeatres et sous les portes tandis que des chaudrons cach\xe9s bouillonnent. Une chaude brise d\u2019automne inhabituelle enveloppe les murs recouverts de vignes et chuchote de mani\xe8re inqui\xe9tante aux plus courageux osant s\u2019aventurer dans les rues pav\xe9es. Des m\xe8res anxieuses appellent leurs enfants \xe0 rentrer tandis l\u2019orage commence \xe0 gronder \xe0 l\u2019horizon. Cependant, si vous tendez l\u2019oreille, des bruits \xe9tranges peuvent \xeatre entendus provenant de la for\xeat voisine. Sous l\u2019\u0153il vigilant d\u2019un monast\xe8re, des silhouettes sautent de porte en porte. Ceux qui peuvent lire l\u2019\xe9criteau savent qu\u2019il y a....\n\n            TROUBLE BREWING"})),(0,t.Z)(s,"BAD_MOON_RISING",new s({name:"Bad Moon Rising",filename:"bad-moon-rising",imageUrl:"img/blood-on-the-clocktower/BOTC-BMR.png",roles:[o.w1.MAMIE,o.w1.MARIN,o.w1.FEMME_DE_CHAMBRE,o.w1.EXORCISTE,o.w1.AUBERGISTE,o.w1.PARIEUR,o.w1.COMMERE,o.w1.COURTISANE,o.w1.PROFESSEUR,o.w1.MENESTREL,o.w1.HERBORISTE,o.w1.PACIFISTE,o.w1.FOU,o.cz.INVENTEUR,o.cz.GITANE,o.cz.BRUTE,o.cz.LUNATIQUE,o.A_.PARRAIN,o.A_.AVOCAT_DU_DIABLE,o.A_.ASSASSIN,o.A_.CONSPIRATEUR,o.bU.PUKKA,o.bU.PO,o.bU.SHABALOTH,o.bU.ZOMBUUL],theme:{color:"orange"},summary:"Une razzia de morts, un concert de d\xe9c\xe8s !\n        Une place pr\xe9pond\xe9rante pour l'ivresse et la protection, Bad Moon Rising sera votre 2\xe8me exp\xe9rience de jeu sur BotC, pour les joueurs interm\xe9diaires.",description:"Une razzia de morts, un concert de d\xe9c\xe8s ! \n        Quatre Sbires, Quatre D\xe9mons et des Villageois qui devront s'entre-tuer pour conna\xeetre la V\xe9rit\xe9 !\n        Une place pr\xe9pond\xe9rante pour l'ivresse et la protection, Bad Moon Rising sera votre 2\xe8me exp\xe9rience de jeu sur BotC, pour les joueurs interm\xe9diaires.",fabled:"Le soleil est aval\xe9 par un horizon d\xe9chiquet\xe9, alors qu\u2019un autre jour d\u2019hiver s\u2019abandonne \xe0 la nuit. Des taches d\u2019orange et de rouge se d\xe9composent en un brun profond et la for\xeat se transforme dans l\u2019attente silencieuse de la neige \xe0 venir. Des loups voraces hurlent depuis les entrailles d\u2019une crevasse aux choses au-del\xe0 des fronti\xe8res de la ville, faisant fuir les oiseaux de leur perchoir confortable. Les Villageois se pr\xe9cipitent dans l\u2019auberge, cherchant un abri du froid qui s\u2019installe. Ils se r\xe9chauffent avec du th\xe9 chaud, de la musique douce et de la bonne bi\xe8re, sans se douter que des yeux \xe9tranges et malveillants les traquent depuis les ruines de ce Village autrefois majestueux. Ce soir, m\xeame le b\xe9tail sait qu\u2019il y\u2019a un\u2026\n\n        Bad Moon Rising"})),(0,t.Z)(s,"SECTS_AND_VIOLETS",new s({name:"Sects & Violets",filename:"sects-and-violets",imageUrl:"img/blood-on-the-clocktower/BOTC-SV.png",roles:[o.w1.HORLOGER,o.w1.REVEUR,o.w1.CHARMEUR_DE_SERPENT,o.w1.MATHEMATICIEN,o.w1.FLEURISTE,o.w1.CRIEUR,o.w1.ORACLE,o.w1.SAVANT,o.w1.COUTURIERE,o.w1.FAUSSAIRE,o.w1.ARTISTE,o.w1.JONGLEUR,o.w1.SAGE,o.cz.BETE_DE_FOIRE,o.cz.BARBIER,o.cz.DULCINEE,o.cz.MALADROIT,o.A_.JUMEAU_MALEFIQUE,o.A_.MANIPULATEUR,o.A_.SORCIERE,o.A_.VIEILLE_CHOUETTE,o.bU.FANG_GU,o.bU.NO_DASHII,o.bU.VIGORMORTIS,o.bU.VORTOX],theme:{color:"darkorchid"},summary:"La Folie arrive et l'Empoisonnement est plus pr\xe9sent que jamais !\n        Sects & Violets sera votre 3\xe8me exp\xe9rience sur BotC, \xe0 r\xe9server aux joueurs confirm\xe9s.",description:"La Folie arrive et l'Empoisonnement est plus pr\xe9sent que jamais !\n        De la manipulation mentale, des D\xe9mons toujours plus forts, Sects & Violets, c'est la promesse d'une enqu\xeate difficile mais passionnante avec des Villageois encore plus forts... mais toujours aussi vuln\xe9rables.\n        Sects & Violets sera votre 3\xe8me exp\xe9rience sur BotC, \xe0 r\xe9server aux joueurs confirm\xe9s.",fabled:"Un printemps vibrant laisse place \xe0 un \xe9t\xe9 chaleureux et accueillant. Des multitudes de fleurs s\u2019\xe9panouissent \xe0 perte de vue, tendrement entretenues dans les jardins publics et dans les balconni\xe8res surplombant la somptueuse promenade. Les oiseaux chantent, les artistes peignent et les penseurs songent aux plus grands myst\xe8res de la vie \xe0 l\u2019int\xe9rieur d\u2019une taverne anim\xe9e, tandis qu\u2019un cirque dresse son chapiteau d\xe9penaill\xe9 \xe0 la lisi\xe8re de la ville. Tandis que les habitants s\u2019abandonnent \xe0 la frivolit\xe9 et \xe0 l\u2019espi\xe8glerie, se r\xe9galant de spectacles raffin\xe9s et de vins plus raffin\xe9s encore, d\u2019obscures forces clandestines se rassemblent. Sorci\xe8res et cultistes se cachent dans les ruines majestueuses en marge de la soci\xe9t\xe9, planifiant des r\xe9unions secr\xe8tes dans les caves souterraines et complotant de mani\xe8re malveillante \xe0 la chute de Ravenswood Bluff et de ses habitants insouciants."})),(0,t.Z)(s,"DEADLY_PENANCE_DAY",new s({name:"Deadly Penance Day - TBA Custom",filename:"deadly-penance-day",roles:[o.w1.CUISTOT,o.w1.ENQUETEUR,o.w1.CHASSEUR_DE_PRIMES,o.w1.MARIN,o.w1.PREDICATEUR,o.w1.CHEF_DE_SECTE,o.w1.CRIEUR,o.w1.PARIEUR,o.w1.EXORCISTE,o.w1.FAUSSAIRE,o.w1.SOLDAT,o.w1.FOU,o.w1.MAIRE,o.cz.BARBIER,o.cz.POLITICIEN,o.cz.SOULARD,o.cz.VERTUEUX,o.A_.PARRAIN,o.A_.ASSASSIN,o.A_.BARON,o.A_.SORCIERE,o.A_.ESPION,o.bU.PTIT_MONSTRE]})),(0,t.Z)(s,"LARGELY_UN_FAIRE",new s({name:"Largely Un Faire",filename:"largely-un-faire",roles:[o.w1.AERONAUTE,o.w1.EMPATHIQUE,o.w1.GENERAL,o.w1.CHARMEUR_DE_SERPENT,o.w1.CROQUE_MORT,o.w1.SAVANT,o.w1.AMNESIQUE,o.w1.CANNIBALE,o.w1.FAUSSAIRE,o.w1.COUTURIERE,o.w1.ARTISTE,o.w1.PECHEUR,o.w1.MERCENAIRE,o.cz.BETE_DE_FOIRE,o.cz.SOULARD,o.cz.VERTUEUX,o.cz.LUNATIQUE,o.A_.GOBELIN,o.A_.BARON,o.A_.CROQUEUSE_D_HOMMES,o.A_.VEUVE_NOIRE,o.bU.LEVIATHAN]})),(0,t.Z)(s,"MODULES",[s.TROUBLE_BREWING,s.BAD_MOON_RISING,s.SECTS_AND_VIOLETS,s.DEADLY_PENANCE_DAY,s.LARGELY_UN_FAIRE]);var u=function(e){return Object.keys(s).includes(e)}},524:function(e,n,a){"use strict";a.d(n,{Z:function(){return d}});var r=a(9756),i=a(4996),t=a(7294),l=a(8777),o=a(6376),s=a(7792),u={DETECTION:"D\xe9tection",PROTECTION:"Protection",TANK:"Tank",FIRST_NIGHT:"Premi\xe8re Nuit",SPECIALIST:"Sp\xe9cial"},m={NEVER:"Jamais",FIRST_NIGHT:"Uniquement la premi\xe8re nuit",EVERY_NIGHT:"Toutes les nuits",EVERY_NIGHT_BUT_FIRST:"Toutes les nuits, sauf la premi\xe8re",UNTIL_ABILITY_CONSUMED:"R\xf4le \xe0 usage unique - Se r\xe9veille toutes les nuits jusqu'\xe0 l'utilisation de sa capacit\xe9"},c=function(e){return e instanceof s.w1?"rgb(8,193,255)":e instanceof s.cz?"rgb(23,104,255)":e instanceof s.A_?"rgb(248,2,5)":e instanceof s.bU?"rgb(197,0,0)":e instanceof s.sY?"rgb(21,94,28)":e instanceof s.oJ?"rgb(168,153,50)":void 0},E=function(e){return e instanceof s.w1||e instanceof s.cz?"Gentil/Bon":e instanceof s.A_||e instanceof s.bU?"Mal\xe9fique":void 0},d=function(e){var n=e.tile,a=e.header,d=e.role,N=(0,r.Z)(e,["tile","header","role"]);if(!d){var T=Object.keys(N).filter(s.Il);if(T.length>1)throw new Error("Found multiple BoTC roles in the same component: "+T.join("|"));if(0===T.length)throw new Error("Found Role component with no valid BoTC Role (component's attributes: ["+Object.keys(N)+"])");d=s.uU.fromName(T[0])}return a?t.createElement(t.Fragment,null,t.createElement("img",{src:(0,i.Z)("/img/blood-on-the-clocktower/roles/icons/"+(d.filename||d.name.toLowerCase())+".png"),height:"150"}),t.createElement("h4",null,"Modules : ",l.Z.containing(d).reduce((function(e,n,a){return t.createElement(t.Fragment,null,e,a>0&&" - ",t.createElement(o.Z,{module:n}))}),t.createElement(t.Fragment,null))),t.createElement("h4",null,"Nom Original : ",d.originalName),t.createElement("h4",null,"Alignement : ",d.type," - ",E(d)),t.createElement("h4",null,"Classe : ",u[d.class]),t.createElement("h4",null,"R\xe9veil : ",m[d.wakeUpSchedule]||d.wakeUpSchedule)):n?t.createElement("a",{href:d.path,style:{border:"5px double "+c(d),width:"160px",height:"160px",textAlign:"center"}},t.createElement("img",{src:(0,i.Z)("/img/blood-on-the-clocktower/roles/icons/"+d.filename+".png"),height:"150"}),t.createElement("span",{style:{position:"relative",top:"-30%",fontWeight:"bold",color:c(d)}},d.name)):t.createElement("a",{href:d.path,style:{color:c(d),fontWeight:"bold"}},d.name)}},7792:function(e,n,a){"use strict";a.d(n,{uU:function(){return l},w1:function(){return o},cz:function(){return s},A_:function(){return u},bU:function(){return m},sY:function(){return c},oJ:function(){return E},Il:function(){return d},g2:function(){return N}});var r=a(3349),i=a(1788),t=a(6156),l=function(e){function n(n){var a,i=n.name,l=n.filename,o=void 0===l?i.toLowerCase():l,s=n.originalName,u=n.class,m=n.wakeUpSchedule;return a=e.call(this,i,o)||this,(0,t.Z)((0,r.Z)(a),"type",""),(0,t.Z)((0,r.Z)(a),"originalName",void 0),(0,t.Z)((0,r.Z)(a),"class","SPECIALIST"),(0,t.Z)((0,r.Z)(a),"wakeUpSchedule","NEVER"),(0,t.Z)((0,r.Z)(a),"_base_url","/docs/roles"),a.originalName=s,a.class=u||a.class,a.wakeUpSchedule=m||a.wakeUpSchedule,a}return(0,i.Z)(n,e),n}(a(8917).Z);(0,t.Z)(l,"fromName",(function(e){if(d(e))return o[e]||s[e]||u[e]||m[e]||c[e]||E[e];throw new Error("BoTC Role not found: "+e)}));var o=function(e){function n(){for(var n,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,(0,t.Z)((0,r.Z)(n),"type","Villageois"),n}return(0,i.Z)(n,e),n}(l);(0,t.Z)(o,"AERONAUTE",new o({name:"A\xe9ronaute",filename:"aeronaute",originalName:"Balloonist",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(o,"ALCHIMISTE",new o({name:"Alchimiste",originalName:"Alchemist",wakeUpSchedule:"La premi\xe8re nuit puis identique au r\xf4le attribu\xe9"})),(0,t.Z)(o,"AMNESIQUE",new o({name:"Amn\xe9sique",filename:"amnesique",originalName:"Amnesic"})),(0,t.Z)(o,"ATHEE",new o({name:"Ath\xe9e",filename:"athee",originalName:"Atheist"})),(0,t.Z)(o,"ARCHIVISTE",new o({name:"Archiviste",originalName:"Librarian",class:"FIRST_NIGHT",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"ARTISTE",new o({name:"Artiste",originalName:"Artist"})),(0,t.Z)(o,"AUBERGISTE",new o({name:"Aubergiste",originalName:"Innkeeper",class:"PROTECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"CANNIBALE",new o({name:"Cannibale",originalName:"Cannibal",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"CHARMEUR_DE_SERPENT",new o({name:"Charmeur de serpent",filename:"charmeur-de-serpent",originalName:"Snake Charmer",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"CHASSEUR",new o({name:"Chasseur",originalName:"Huntsman",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(o,"CHASSEUR_DE_PRIMES",new o({name:"Chasseur de primes",filename:"chasseur-de-primes",originalName:"Bounty Hunter",class:"DETECTION",wakeUpSchedule:"Lorsque la cible actuelle est d\xe9c\xe9d\xe9e"})),(0,t.Z)(o,"CHEF_DE_SECTE",new o({name:"Chef de Secte",filename:"chef-de-secte",originalName:"Cult Leader",wakeUpSchedule:"Lors d'un changement d'alignement"})),(0,t.Z)(o,"COMMERE",new o({name:"Comm\xe8re",filename:"commere",originalName:"Gossip",class:"DETECTION"})),(0,t.Z)(o,"COURTISANE",new o({name:"Courtisane",originalName:"Courtier",class:"DETECTION",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(o,"COUTURIERE",new o({name:"Couturiere",originalName:"Seamstress",class:"DETECTION",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(o,"CRIEUR",new o({name:"Crieur",originalName:"Town Crier",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"CROQUE_MORT",new o({name:"Croque-Mort",filename:"croque-mort",originalName:"Undertaker",class:"DETECTION",wakeUpSchedule:"Si ex\xe9cution la veille"})),(0,t.Z)(o,"CUISTOT",new o({name:"Cuistot",originalName:"Chef",class:"FIRST_NIGHT",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"CULTIVATEUR_DE_PAVOT",new o({name:"Cultivateur de pavot",filename:"cultivateur-de-pavot",originalName:"Poppy Grower"})),(0,t.Z)(o,"EMPATHIQUE",new o({name:"Empathique",originalName:"Empath",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(o,"ENFANT_DE_CHOEUR",new o({name:"Enfant de choeur",originalName:"Choirboy",wakeUpSchedule:"Si le roi est tu\xe9 par le d\xe9mon"})),(0,t.Z)(o,"ENQUETEUR",new o({name:"Enqu\xeateur",filename:"enqueteur",originalName:"Investigator",class:"FIRST_NIGHT",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"EXORCISTE",new o({name:"Exorciste",originalName:"Exorcist",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"FAUSSAIRE",new o({name:"Faussaire",originalName:"Philosopher",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(o,"FEMME_DE_CHAMBRE",new o({name:"Femme de Chambre",filename:"femme-de-chambre",originalName:"Chambermaid",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"FERMIER",new o({name:"Fermier",originalName:"Farmer"})),(0,t.Z)(o,"FLEURISTE",new o({name:"Fleuriste",originalName:"Flowergirl",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"FOU",new o({name:"Fou",originalName:"Fool",class:"TANK"})),(0,t.Z)(o,"GARDIEN",new o({name:"Gardien",originalName:"Ravenkeeper",class:"DETECTION",wakeUpSchedule:"Si tu\xe9 pendant la nuit"})),(0,t.Z)(o,"GENERAL",new o({name:"G\xe9n\xe9ral",filename:"general",originalName:"General"})),(0,t.Z)(o,"HORLOGER",new o({name:"Horloger",originalName:"Clockmaker",class:"FIRST_NIGHT",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"INGENIEUR",new o({name:"Ing\xe9nieur",originalName:"Engineer",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(o,"JONGLEUR",new o({name:"Jongleur",originalName:"Juggler",class:"DETECTION",wakeUpSchedule:"Uniquement la seconde nuit"})),(0,t.Z)(o,"LAVANDIERE",new o({name:"Lavandi\xe8re",filename:"lavandiere",originalName:"Washerwoman - Laundry Hand",class:"FIRST_NIGHT",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"LYCANTHROPE",new o({name:"Lycanthrope",originalName:"Lycanthrope",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"HERBORISTE",new o({name:"Herboriste",originalName:"Tea Lady",class:"PROTECTION"})),(0,t.Z)(o,"MAGICIEN",new o({name:"Magicien",originalName:"Magician"})),(0,t.Z)(o,"MAIRE",new o({name:"Maire",originalName:"Mayor"})),(0,t.Z)(o,"MAMIE",new o({name:"Mamie",originalName:"Grandmother",class:"FIRST_NIGHT",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"MARIN",new o({name:"Marin",originalName:"Sailor",class:"TANK",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(o,"MATHEMATICIEN",new o({name:"Mathematicien",originalName:"Mathematician",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(o,"MENESTREL",new o({name:"M\xe9nestrel",filename:"menestrel",originalName:"Minstrel",class:"DETECTION"})),(0,t.Z)(o,"MERCENAIRE",new o({name:"Mercenaire",originalName:"Slayer"})),(0,t.Z)(o,"MOINE",new o({name:"Moine",originalName:"Monk",class:"PROTECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"NOBLE",new o({name:"Noble",originalName:"Noble",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"ORACLE",new o({name:"Oracle",originalName:"Oracle",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"PACIFISTE",new o({name:"Pacifiste",originalName:"Pacifist",class:"PROTECTION"})),(0,t.Z)(o,"PARIEUR",new o({name:"Parieur",originalName:"Gambler",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"PECHEUR",new o({name:"P\xeacheur",filename:"pecheur",originalName:"Fisherman"})),(0,t.Z)(o,"PIXIE",new o({name:"Pixie",originalName:"Pixie",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(o,"PREDICATEUR",new o({name:"Predicateur",originalName:"Predicator",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"PROFESSEUR",new o({name:"Professeur",originalName:"Professor",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(o,"PUCELLE",new o({name:"Pucelle",originalName:"Virgin"})),(0,t.Z)(o,"REVEUR",new o({name:"Reveur",originalName:"Dreamer",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(o,"ROI",new o({name:"Roi",originalName:"King",wakeUpSchedule:"Si le nombre de mort est strictement sup\xe9rieur au nombre de vivants"})),(0,t.Z)(o,"SAGE",new o({name:"Sage",originalName:"Sage",class:"DETECTION",wakeUpSchedule:"Lorsqu'il est assassin\xe9 par le D\xe9mon"})),(0,t.Z)(o,"SAVANT",new o({name:"Savant",originalName:"Savant"})),(0,t.Z)(o,"SOLDAT",new o({name:"Soldat",originalName:"Soldier",class:"TANK"})),(0,t.Z)(o,"VEILLEUR_DE_NUIT",new o({name:"Veilleur de nuit",filename:"veilleur-de-nuit",originalName:"Nightwatchman",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(o,"VOYANTE",new o({name:"Voyante",originalName:"Fortune Teller",class:"DETECTION",wakeUpSchedule:"EVERY_NIGHT"}));var s=function(e){function n(){for(var n,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,(0,t.Z)((0,r.Z)(n),"type","Etranger"),n}return(0,i.Z)(n,e),n}(l);(0,t.Z)(s,"ACROBATE",new s({name:"Acrobate",originalName:"Acrobat"})),(0,t.Z)(s,"BALANCE",new s({name:"Balance",originalName:"Snitch"})),(0,t.Z)(s,"BARBIER",new s({name:"Barbier",originalName:"Barber"})),(0,t.Z)(s,"BETE_DE_FOIRE",new s({name:"Bete de foire",filename:"bete-de-foire",originalName:"Mutant"})),(0,t.Z)(s,"BRUTE",new s({name:"Brute",originalName:"Goon",wakeUpSchedule:"Lorsque cibl\xe9 la premi\xe8re fois de nuit par l'alignement oppos\xe9 \xe0 l'alignement actuel"})),(0,t.Z)(s,"DEMOISELLE",new s({name:"Demoiselle",originalName:"Damsel"})),(0,t.Z)(s,"DULCINEE",new s({name:"Dulcin\xe9e",filename:"dulcinee",originalName:"Sweetheart"})),(0,t.Z)(s,"GITANE",new s({name:"Gitane",originalName:"Moonchild"})),(0,t.Z)(s,"GOLEM",new s({name:"Golem",originalName:"Golem"})),(0,t.Z)(s,"HERETIQUE",new s({name:"H\xe9r\xe9tique",originalName:"Heretic"})),(0,t.Z)(s,"INVENTEUR",new s({name:"Inventeur",originalName:"Tinker"})),(0,t.Z)(s,"LUNATIQUE",new s({name:"Lunatique",originalName:"Lunatic",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(s,"MAJORDOME",new s({name:"Majordome",originalName:"Butler",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(s,"MAITRE_DES_PUZZLES",new s({name:"Ma\xeetre des puzzles",filename:"maitre-des-puzzles",originalName:"Puzzlemaster"})),(0,t.Z)(s,"MALADROIT",new s({name:"Maladroit",originalName:"Klutz"})),(0,t.Z)(s,"POLITICIEN",new s({name:"Politicien",originalName:"Politician"})),(0,t.Z)(s,"RECLUS",new s({name:"Reclus",originalName:"Recluse"})),(0,t.Z)(s,"SOULARD",new s({name:"So\xfblard",filename:"soulard",originalName:"Drunk",wakeUpSchedule:"Identique au faux r\xf4le attribu\xe9"})),(0,t.Z)(s,"VERTUEUX",new s({name:"Vertueux",originalName:"Saint"}));var u=function(e){function n(){for(var n,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,(0,t.Z)((0,r.Z)(n),"type","Sbire"),n}return(0,i.Z)(n,e),n}(l);(0,t.Z)(u,"ASSASSIN",new u({name:"Assassin",originalName:"Assassin",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(u,"AVOCAT_DU_DIABLE",new u({name:"Avocat du Diable",filename:"avocat-du-diable",originalName:"Devil's Advocate",class:"PROTECTION",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(u,"BARON",new u({name:"Baron",originalName:"Baron"})),(0,t.Z)(u,"BOOMDANDY",new u({name:"Boomdandy",originalName:"Boomdandy"})),(0,t.Z)(u,"CONSPIRATEUR",new u({name:"Conspirateur",originalName:"Mastermind"})),(0,t.Z)(u,"CROQUEUSE_D_HOMMES",new u({name:"Croqueuse d'hommes",filename:"croqueuse-d-hommes",originalName:"Scarlet Woman"})),(0,t.Z)(u,"EMPOISONNEUR",new u({name:"Empoisonneur",originalName:"Poisoner",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(u,"ESPION",new u({name:"Espion",originalName:"Spy",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(u,"GOBELIN",new u({name:"Gobelin",originalName:"Gobelin"})),(0,t.Z)(u,"JUMEAU_MALEFIQUE",new u({name:"Jumeau Mal\xe9fique",filename:"jumeau-malefique",originalName:"Evil Twin"})),(0,t.Z)(u,"JUMEAUX_MALEFIQUES",new u({name:"Jumeaux Mal\xe9fiques",filename:"jumeau-malefique",originalName:"Evil Twin"})),(0,t.Z)(u,"JUMEAU",new u({name:"Jumeau",filename:"jumeau-malefique",originalName:"Evil Twin"})),(0,t.Z)(u,"MANIPULATEUR",new u({name:"Manipulateur",originalName:"Cerenovus",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(u,"MARIONETTE",new u({name:"Marionette",originalName:"Marionette",wakeUpSchedule:"Identique au faux r\xf4le attribu\xe9"})),(0,t.Z)(u,"MEZEPHELES",new u({name:"Mezepheles",originalName:"Mezepheles",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(u,"PARRAIN",new u({name:"Parrain",originalName:"Godfather"})),(0,t.Z)(u,"PROPHETE_DE_L_EFFROI",new u({name:"Proph\xe8te de l'effroi",filename:"prophete-de-l-effroi",originalName:"Fearmonger",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(u,"PSYCHOPATHE",new u({name:"Psychopathe",originalName:"Psychopath"})),(0,t.Z)(u,"SORCIERE",new u({name:"Sorci\xe8re",filename:"sorciere",originalName:"Witch",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(u,"VEUVE_NOIRE",new u({name:"Veuve Noire",originalName:"Widow",wakeUpSchedule:"FIRST_NIGHT"})),(0,t.Z)(u,"VIEILLE_CHOUETTE",new u({name:"Vieille Chouette",filename:"vieille-chouette",originalName:"Pit Hag",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"}));var m=function(e){function n(){for(var n,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,(0,t.Z)((0,r.Z)(n),"type","Demon"),n}return(0,i.Z)(n,e),n}(l);(0,t.Z)(m,"AL_HADIKHIA",new m({name:"Al-Hadikhia",filename:"al-hadikhia",originalName:"Al-Hadikhia",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"EMEUTE",new m({name:"Emeute",originalName:"Riot"})),(0,t.Z)(m,"FANG_GU",new m({name:"Fang Gu",filename:"fang-gu",originalName:"Fang Gu",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"IMP",new m({name:"Imp",originalName:"Imp",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"LEGION",new m({name:"L\xe9gion",originalName:"Legion"})),(0,t.Z)(m,"LEVIATHAN",new m({name:"L\xe9viathan",filename:"leviathan",originalName:"Leviathan"})),(0,t.Z)(m,"PO",new m({name:"Po",filename:"po",originalName:"Po",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"PUKKA",new m({name:"Pukka",originalName:"Pukka",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(m,"NO_DASHII",new m({name:"No Dashii",filename:"no-dashii",originalName:"No Dashii",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"SANGSUE",new m({name:"Sangsue",originalName:"Lleech",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"SHABALOTH",new m({name:"Shabaloth",originalName:"Shabaloth",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(m,"PTIT_MONSTRE",new m({name:"P'tit Monstre",filename:"ptit-monstre",originalName:"Lil Monsta",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"VIGORMORTIS",new m({name:"Vigormortis",originalName:"Vigormortis",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"VORTOX",new m({name:"Vortox",originalName:"Vortox",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(m,"ZOMBUUL",new m({name:"Zombuul",originalName:"Zombuul",wakeUpSchedule:"Si aucune ex\xe9cution la veille"}));var c=function(e){function n(){for(var n,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,(0,t.Z)((0,r.Z)(n),"type","Voyageur"),n}return(0,i.Z)(n,e),n}(l);(0,t.Z)(c,"BOUC_EMISSAIRE",new c({name:"Bouc Emissaire",filename:"bouc-emissaire",originalName:"Scapegoat"})),(0,t.Z)(c,"BUREAUCRATE",new c({name:"Bureaucrate",originalName:"Bureaucrat",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(c,"MENDIANT",new c({name:"Mendiant",originalName:"Beggar"})),(0,t.Z)(c,"VENGEUR",new c({name:"Vengeur",originalName:"Gunslinger"})),(0,t.Z)(c,"VOLEUR",new c({name:"Voleur",originalName:"Thief",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(c,"APPRENTI",new c({name:"Apprenti",originalName:"Apprentice",wakeUpSchedule:"Lors de sa premi\xe8re nuit puis identique au r\xf4le attribu\xe9"})),(0,t.Z)(c,"ARCHEVEQUE",new c({name:"Archev\xeaque",originalName:"Bishop"})),(0,t.Z)(c,"MAGISTRAT",new c({name:"Magistrat",originalName:"Judge"})),(0,t.Z)(c,"MATRONE",new c({name:"Matrone",originalName:"Matron",wakeUpSchedule:"EVERY_NIGHT"})),(0,t.Z)(c,"NECROMANT",new c({name:"Necromant",originalName:"Voudon"})),(0,t.Z)(c,"BARISTA",new c({name:"Barista",originalName:"Barista"})),(0,t.Z)(c,"BOUCHER",new c({name:"Necromant",originalName:"Butcher"})),(0,t.Z)(c,"COLLECTEUR_D_OS",new c({name:"Necromant",filename:"collecteur-d-os",originalName:"Bone collector",wakeUpSchedule:"UNTIL_ABILITY_CONSUMED"})),(0,t.Z)(c,"DEVIANT",new c({name:"Necromant",originalName:"Deviant"})),(0,t.Z)(c,"FILLE_DE_JOIE",new c({name:"Necromant",filename:"fille-de-joie",originalName:"Harlot",wakeUpSchedule:"EVERY_NIGHT_BUT_FIRST"})),(0,t.Z)(c,"GANGSTER",new c({name:"Necromant",originalName:"Gangster"}));var E=function(e){function n(){for(var n,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=e.call.apply(e,[this].concat(i))||this,(0,t.Z)((0,r.Z)(n),"type","Legendaire"),n}return(0,i.Z)(n,e),n}(l);(0,t.Z)(E,"ANGE",new E({name:"Ange",originalName:"Angel"})),(0,t.Z)(E,"ARTISAN",new E({name:"Artisan",originalName:"Toymaker"})),(0,t.Z)(E,"BIBLIOTHECAIRE",new E({name:"Biblioth\xe9caire",originalName:"Hells Librarian"})),(0,t.Z)(E,"BOUDDHISTE",new E({name:"Bouddhiste",originalName:"Buddhist"})),(0,t.Z)(E,"PRECHEUR_DE_L_APOCALYPSE",new E({name:"Precheur de l'apocalypse",filename:"precheur-de-l-apocalypse",originalName:"Doomsayer"})),(0,t.Z)(E,"REVOLUTIONNAIRE",new E({name:"R\xe9volutionnaire",originalName:"Revolutionnary"})),(0,t.Z)(E,"TROUBLE_FETE",new E({name:"Trouble-f\xeate",filename:"trouble-fete",originalName:"Fiddler"})),(0,t.Z)(E,"BARATINEUR",new E({name:"Baratineur",originalName:"Fibbin"})),(0,t.Z)(E,"DUCHESSE",new E({name:"Duchesse",originalName:"Duchess"})),(0,t.Z)(E,"MAUVAIS_GENIE",new E({name:"Mauvais g\xe9nie",filename:"mauvais-genie",originalName:"Djinn"})),(0,t.Z)(E,"PROTECTRICE",new E({name:"Protectrice",originalName:"Spirit of Ivory"})),(0,t.Z)(E,"SENTINELLE",new E({name:"Sentinelle",originalName:"Sentinel"})),(0,t.Z)(E,"CHASSEUR_D_ORAGE",new E({name:"Chasseur d'orage",filename:"chasseur-d-orage",originalName:"Storm Catcher"}));var d=function(e){return N.flatMap((function(e){return Object.keys(e)})).includes(e)},N=[o,s,u,m,c,E]}}]);