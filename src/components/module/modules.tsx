import { Role } from "../role/role"
import { VILLAGEOIS, ETRANGER, SBIRE, DEMON, VOYAGEUR } from "../role/roles"
import Module from "./module"

const TROUBLE_BREWING = new Module(
    {
        name: 'Trouble Brewing',
        filename: 'trouble-brewing',
        imageUrl: 'img/blood-on-the-clocktower/BOTC-TB.png',
        roles: [
            VILLAGEOIS.LAVANDIERE,
            VILLAGEOIS.ARCHIVISTE,
            VILLAGEOIS.ENQUETEUR,
            VILLAGEOIS.CUISTOT,
            VILLAGEOIS.EMPATHIQUE,
            VILLAGEOIS.VOYANTE,
            VILLAGEOIS.CROQUE_MORT,
            VILLAGEOIS.MOINE,
            VILLAGEOIS.GARDIEN,
            VILLAGEOIS.PUCELLE,
            VILLAGEOIS.MERCENAIRE,
            VILLAGEOIS.SOLDAT,
            VILLAGEOIS.MAIRE,
            ETRANGER.MAJORDOME,
            ETRANGER.SOULARD,
            ETRANGER.RECLUS,
            ETRANGER.VERTUEUX,
            SBIRE.EMPOISONNEUR,
            SBIRE.ESPION,
            SBIRE.CROQUEUSE_D_HOMMES,
            SBIRE.BARON,
            DEMON.IMP,
            VOYAGEUR.BOUC_EMISSAIRE,
            VOYAGEUR.BUREAUCRATE,
            VOYAGEUR.MENDIANT,
            VOYAGEUR.VENGEUR,
            VOYAGEUR.VOLEUR
        ],
        theme: { color: 'red' },
        summary: `De l'art de l'ivresse à celui d'empoisonnement...
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.`,
        description: `De l'art de l'ivresse à celui d'empoisonnement...
            Un Démon, quatre SBIREs, ce sont ces derniers que les VILLAGEOIS devront déterminer pour prétendre à la Victoire.
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clock Tower ! C'est par ce module qu'on commence.`,
        fabled: `Des nuages se forment au-dessus de Ravenswood Bluff, engloutissant ce Village tranquille et ses habitants superstitieux de leurs ombres macabres. Des vêtements fraîchement lavés dansent sinistrement sur les étendages entre les cottages. Les cheminées crachent des volutes de fumée dans l'air. Des senteurs exotiques flottent entre les fissures des fenêtres et sous les portes tandis que des chaudrons cachés bouillonnent. Une chaude brise d'automne inhabituelle enveloppe les murs recouverts de vignes et chuchote de manière inquiétante aux plus courageux osant s'aventurer dans les rues pavées. Des mères anxieuses appellent leurs enfants à rentrer tandis l’orage commence à gronder à l’horizon. Cependant, si vous tendez l’oreille, des bruits étranges peuvent être entendus provenant de la forêt voisine. Sous l’œil vigilant d’un monastère, des silhouettes sautent de porte en porte. Ceux qui peuvent lire l’écriteau savent qu’il y a....
    
            TROUBLE BREWING`,
        detail: `Trouble Brewing est un subtil mélange de tout. Certains rôles reçoivent leurs informations passivement. Dautres ont besoin d'agir pour savoir qui est qui pendant que d'autres veulent attirer l'attention du démon sur eux. Les gentils comme les maléfiques peuvent prendre l'avantage en réalisant des sacrifices au bon moment. Trouble Brewing est une chasse au démon assez directe mais les maléfiques ont un certain nombre de viles astuces de désinformation dans leurs manches. Les gentils devraient donc se poser des questions sur ce qu'ils pensent savoir s'ils veulent survivre.
            Module débutant. Recommandé pour les nouveaux joueurs et les nouveaux conteurs de Blood on the Clocktower ou qui ne sont pas familier des jeux à identité cachée.
            Les gentils devront trouver qui est gentil et qui est maléfique en utilisant leur logique et leur intuition. Certains personnages voudront révéler leur rôle et leurs informations immédiatement (comme le cuistot et l'enqueteur) pendant que d'autres voudront mentir sur leur identité pour que le démon évite de les attaquer (comme le croque-mort ou la voyante). Certains mentiront sur leur rôle pour le démon les attaques (comme le gardien ou le soldat) !
            D'autres rôles de villageois obtienne de l'information en faisant quelque chose et en observant son effet. Sacrifier la vie d'un joueur en le faisant nominer une pucelle, tenter de tuer un Imp en tant que Mercenaire et en observant ce qu'il se passe où tuer délibérément des gentils pour que le croque-mort puisse confirmer leur identité. Ce sont toutes des façons de sacrifier la vie et sa capacité pour obtenir de l'information et arriver à la victoire.
            Les maléfiques auront besoin de prétendre être des rôles gentils et de le faire bien en donnant des fausses informations si nécessaires. Avec seulement de bonnes informations, le village va normalement trouver qui est maléfique avec un peu de temps. Mais avec juste une simple et plausible fausse information, les maléfiques ont une chance. L'empoisonneur et l'Espion, s'ils font attention, peuvent provoquer une grande confusion dans les rangs du village en utilisant leurs capacités. Les maléfiques devront aussi décider quand faire des sacrifices. Est-ce que la croqueuse d'homme fera tuer le imp pour sauver son équipe ? Est-ce que les maléfiques voteront pour exécuter un sbire suspect afin de passer pour des membres honorables du village.
            `
    })

const BAD_MOON_RISING = new Module({
    name: 'Bad Moon Rising',
    filename: 'bad-moon-rising',
    imageUrl: 'img/blood-on-the-clocktower/BOTC-BMR.png',
    roles: [
        VILLAGEOIS.MAMIE,
        VILLAGEOIS.MARIN,
        VILLAGEOIS.FEMME_DE_CHAMBRE,
        VILLAGEOIS.EXORCISTE,
        VILLAGEOIS.AUBERGISTE,
        VILLAGEOIS.PARIEUR,
        VILLAGEOIS.COMMERE,
        VILLAGEOIS.COURTISANE,
        VILLAGEOIS.PROFESSEUR,
        VILLAGEOIS.MENESTREL,
        VILLAGEOIS.HERBORISTE,
        VILLAGEOIS.PACIFISTE,
        VILLAGEOIS.FOU,
        ETRANGER.INVENTEUR,
        ETRANGER.GITANE,
        ETRANGER.BRUTE,
        ETRANGER.LUNATIQUE,
        SBIRE.PARRAIN,
        SBIRE.AVOCAT_DU_DIABLE,
        SBIRE.ASSASSIN,
        SBIRE.CONSPIRATEUR,
        DEMON.PUKKA,
        DEMON.PO,
        DEMON.SHABALOTH,
        DEMON.ZOMBUUL,
        VOYAGEUR.APPRENTI,
        VOYAGEUR.ARCHEVEQUE,
        VOYAGEUR.MAGISTRAT,
        VOYAGEUR.MATRONE,
        VOYAGEUR.NECROMANT
    ],
    theme: { color: 'orange' },
    summary: `Une razzia de morts, un concert de décès !
    Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`,
    description: `Une razzia de morts, un concert de décès ! 
    Quatre SBIREs, Quatre Démons et des VILLAGEOIS qui devront s'entre-tuer pour connaître la Vérité !
    Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`,
    fabled: `Le soleil est avalé par un horizon déchiqueté, alors qu’un autre jour d’hiver s’abandonne à la nuit. Des taches d’orange et de rouge se décomposent en un brun profond et la forêt se transforme dans l’attente silencieuse de la neige à venir. Des loups voraces hurlent depuis les entrailles d’une crevasse aux choses au-delà des frontières de la ville, faisant fuir les oiseaux de leur perchoir confortable. Les VILLAGEOIS se précipitent dans l’auberge, cherchant un abri du froid qui s’installe. Ils se réchauffent avec du thé chaud, de la musique douce et de la bonne bière, sans se douter que des yeux étranges et malveillants les traquent depuis les ruines de ce Village autrefois majestueux. Ce soir, même le bétail sait qu’il y’a un…

    Bad Moon Rising`,
    detail: `Bad Moon Rising est une extravagance mortelle. Les démons tuent plusieurs personnes par nuits et les sbires passent à l’action également. Les gentils peuvent prendre de gros risques pour obtenir de l’information fiable mais pourrait causer accidentellement la mort leurs alliés. Heureusement, il y a plein d’options pour garder les joueurs en vie bien après leur date d’expiration. Toutefois, si le village n’arrive pas à déterminer quel démon et quels sbires sont en jeu, leur perte est certaine.
    Intermédiaire. Recommandé pour les joueurs qui sont proactifs, dévoués au travail d’équipe et qui n’ont pas peur de mourir.
    En jouant à Bad Moon Rising…
    Les gentils ne recevront que peu d’informations en restant passif. Quelques capacités de villageois nécessitent que le village exécute des joueurs pour obtenir des informations (comme l’Herboriste ou le pacifiste) pendant que d’autres les encourage à prendre des risques qui peuvent les tuer afin de savoir qui est qui (comme le Parieur ou la Commère). Quand les gentils font quelque chose, ils obtiennent quelque chose.
    Le village devra aussi prêter une attention particulière à qui meurt la nuit et comment. S’ils l’ignorent, ils risquent de perdre de façon inattendue à la fin d’un jour avec 4 ou 5 ou même 6 joueurs encore en vie. Toutefois, s’ils peuvent trouver comment les joueurs sont morts la nuit, ils peuvent deviner quels rôles maléfiques sont en jeu. Cela leur permettra d’éviter de perdre à cause d’un redoutable Conspirateur ou un Po intimidant et d’avoir des indices utiles sur quel rôle gentil à tuer un joueur par accident (comme la Gitane ou l’Inventeur)
    Les maléfiques pourraient se sentir invincible au début, mais ils auront besoin d’utiliser leurs capacités avec précision et prudence afin de l’emporter. Le démon pourrait avoir besoin de convaincre le village qu’un autre type de démon est en jeu afin d’éviter l’effet dévastateur de rôles gentils (comme l’exorciste ou la courtisane) et pourraient avoir besoin de ne délibérément pas tuer pour cela. Mais si le démon peut trouver qui attaquer et qui ne peut attaquer (comme les voisins de l’herboriste ou le fou) alors le village va avoir de gros problèmes.
    Les sbires auront également besoin d’un bon timing pour leurs capacités. Un assassin qui frappe au bon moment, un avocat du diable ou un Conspirateur qui peuvent lire le village peuvent transformer une défaire en victoire.`
})

const SECTS_AND_VIOLETS = new Module({
    name: 'Sects & Violets',
    filename: 'sects-and-violets',
    imageUrl: 'img/blood-on-the-clocktower/BOTC-SV.png',
    roles: [
        VILLAGEOIS.HORLOGER,
        VILLAGEOIS.REVEUR,
        VILLAGEOIS.CHARMEUR_DE_SERPENT,
        VILLAGEOIS.MATHEMATICIEN,
        VILLAGEOIS.FLEURISTE,
        VILLAGEOIS.CRIEUR,
        VILLAGEOIS.ORACLE,
        VILLAGEOIS.SAVANT,
        VILLAGEOIS.COUTURIERE,
        VILLAGEOIS.FAUSSAIRE,
        VILLAGEOIS.ARTISTE,
        VILLAGEOIS.JONGLEUR,
        VILLAGEOIS.SAGE,
        ETRANGER.BETE_DE_FOIRE,
        ETRANGER.BARBIER,
        ETRANGER.DULCINEE,
        ETRANGER.MALADROIT,
        SBIRE.JUMEAU_MALEFIQUE,
        SBIRE.MANIPULATEUR,
        SBIRE.SORCIERE,
        SBIRE.VIEILLE_CHOUETTE,
        DEMON.FANG_GU,
        DEMON.NO_DASHII,
        DEMON.VIGORMORTIS,
        DEMON.VORTOX,
        VOYAGEUR.BARISTA,
        VOYAGEUR.BOUCHER,
        VOYAGEUR.COLLECTEUR_D_OS,
        VOYAGEUR.DEVIANT,
        VOYAGEUR.FILLE_DE_JOIE
    ],
    theme: { color: 'darkorchid' },
    summary: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
    Sects & Violets sera votre 3ème expérience sur BotC, à réserver aux joueurs confirmés.`,
    description: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
    De la manipulation mentale, des Démons toujours plus forts, Sects & Violets, c'est la promesse d'une enquête difficile mais passionnante avec des VILLAGEOIS encore plus forts... mais toujours aussi vulnérables.
    Sects & Violets sera votre 3ème expérience sur BotC, à réserver aux joueurs confirmés.`,
    fabled: `Un printemps vibrant laisse place à un été chaleureux et accueillant. Des multitudes de fleurs s’épanouissent à perte de vue, tendrement entretenues dans les jardins publics et dans les balconnières surplombant la somptueuse promenade. Les oiseaux chantent, les artistes peignent et les penseurs songent aux plus grands mystères de la vie à l’intérieur d’une taverne animée, tandis qu’un cirque dresse son chapiteau dépenaillé à la lisière de la ville. Tandis que les habitants s’abandonnent à la frivolité et à l’espièglerie, se régalant de spectacles raffinés et de vins plus raffinés encore, d’obscures forces clandestines se rassemblent. Sorcières et cultistes se cachent dans les ruines majestueuses en marge de la société, planifiant des réunions secrètes dans les caves souterraines et complotant de manière malveillante à la chute de Ravenswood Bluff et de ses habitants insouciants. Le moment est venu pour...
    
    Sects & Violets`,
    detail: `Sects & Violets est le plus fou des trois scripts de bases. Les gentils reçoivent des informations extraordinaires chaque nuit. Toutefois, les maléfiques sont très variés et menaçants et peuvent jeter une grande confusion sur le village. Les joueurs peuvent changer d’alignement ou de rôle. Les maléfiques peuvent perdre de la trace de qui est qui. C’est aussi la première apparition de la folie qui peut venir bloquer l’avancée de l’enquête. 
    Intermédiaire. Recommandé pour les joueurs qui veulent jouer fort et de faon inattendue en repoussant les limites de ce qui peut se faire dans un jeu à identité caché. 
    Quand vous jouez à Sects & Violets…
    Le village aura des informations à ne plus savoir quoi en faire. Contrairement à Trouble Brewing, où le village peut faire confiance dans la plupart des informations qu’ils reçoivent, le village dans SnV aura besoin de trouver quel type de démon est en jeu avant de commencer à comprendre ce qu’il se passe. Avec un Fang GU en jeu, toutes les informations sont vraies sauf celles qui concernent le démon car il peut changer avec un autre joueur. Avec un No Dashii en jeu, deux villageois sont empoisonnés mais si le village peut déduire qui sont ces joueurs, ils auront trouvé le démon. Avec un Vigormortis en jeu, les villageois sont empoisonnés quand les sbires meurent la nuit. Avec un Vortox en jeu, toutes les informations sont fausses. Une fois que le village remarque quelle information est fausse et quelle information est vraie, ils peuvent renverser l’information et en déduire quelque chose de valable. 
    Pour ajouter encore plus de confusion, les étrangers vont probablement mentir sur leur identité pendant toute la partie et peut être même que certains villageois feront la même chose. Un étranger qui meurt peut causer de terribles désavantages au village alors les démons avisés voudront souvent les tuer dès que possible.
    Les maléfiques voudront tuer ou retirer la menace des villageois les plus dangereux le plus vite possible. Le démon ne peut tuer qu’une fois par nuit mais les sbires comme la vieille_chouette, la sorcière ou le manipulateur peuvent réellement aider à amaigrir les rangs des gentils si les sbires sont intelligents. Les maléfiques devront aussi réfléchir à donner de vraies ou de fausses informations au village puisque celui-ci pourrait renverser cette information en fonction du typé dé démon qu’ils pense en jeu.`
})

const DEADLY_PENANCE_DAY = new Module({
    name: 'Deadly Penance Day - TBA Custom',
    filename: 'deadly-penance-day',
    roles: [
        VILLAGEOIS.CUISTOT,
        VILLAGEOIS.ENQUETEUR,
        VILLAGEOIS.CHASSEUR_DE_PRIMES,
        VILLAGEOIS.MARIN,
        VILLAGEOIS.PREDICATEUR,
        VILLAGEOIS.CHEF_DE_SECTE,
        VILLAGEOIS.CRIEUR,
        VILLAGEOIS.PARIEUR,
        VILLAGEOIS.EXORCISTE,
        VILLAGEOIS.FAUSSAIRE,
        VILLAGEOIS.SOLDAT,
        VILLAGEOIS.FOU,
        VILLAGEOIS.MAIRE,
        ETRANGER.BARBIER,
        ETRANGER.POLITICIEN,
        ETRANGER.SOULARD,
        ETRANGER.VERTUEUX,
        SBIRE.PARRAIN,
        SBIRE.ASSASSIN,
        SBIRE.BARON,
        SBIRE.SORCIERE,
        SBIRE.ESPION,
        DEMON.PTIT_MONSTRE
    ]
})

const LARGELY_UN_FAIRE = new Module({
    name: 'Largely Un Faire',
    filename: 'largely-un-faire',
    roles: [
        VILLAGEOIS.AERONAUTE,
        VILLAGEOIS.EMPATHIQUE,
        VILLAGEOIS.GENERAL,
        VILLAGEOIS.CHARMEUR_DE_SERPENT,
        VILLAGEOIS.CROQUE_MORT,
        VILLAGEOIS.SAVANT,
        VILLAGEOIS.AMNESIQUE,
        VILLAGEOIS.CANNIBALE,
        VILLAGEOIS.FAUSSAIRE,
        VILLAGEOIS.COUTURIERE,
        VILLAGEOIS.ARTISTE,
        VILLAGEOIS.PECHEUR,
        VILLAGEOIS.MERCENAIRE,
        ETRANGER.BETE_DE_FOIRE,
        ETRANGER.SOULARD,
        ETRANGER.VERTUEUX,
        ETRANGER.LUNATIQUE,
        SBIRE.GOBELIN,
        SBIRE.BARON,
        SBIRE.CROQUEUSE_D_HOMMES,
        SBIRE.VEUVE_NOIRE,
        DEMON.LEVIATHAN
    ]
})

const EXPERIMENTAL = new Module({
    name: 'Expérimental',
    filename: 'experimental',
    roles: [
        VILLAGEOIS.AERONAUTE,
        VILLAGEOIS.ALCHIMISTE,
        VILLAGEOIS.AMNESIQUE,
        VILLAGEOIS.ATHEE,
        VILLAGEOIS.CANNIBALE,
        VILLAGEOIS.CHASSEUR,
        VILLAGEOIS.CHASSEUR_DE_PRIMES,
        VILLAGEOIS.CHEF_DE_SECTE,
        VILLAGEOIS.CULTIVATEUR_DE_PAVOT,
        VILLAGEOIS.ENFANT_DE_CHOEUR,
        VILLAGEOIS.FERMIER,
        VILLAGEOIS.GENERAL,
        VILLAGEOIS.INGENIEUR,
        VILLAGEOIS.LYCANTHROPE,
        VILLAGEOIS.MAGICIEN,
        VILLAGEOIS.NOBLE,
        VILLAGEOIS.PECHEUR,
        VILLAGEOIS.PREDICATEUR,
        VILLAGEOIS.ROI,
        VILLAGEOIS.PECHEUR,
        VILLAGEOIS.PIXIE,
        VILLAGEOIS.VEILLEUR_DE_NUIT,
        ETRANGER.ACROBATE,
        ETRANGER.BALANCE,
        ETRANGER.DEMOISELLE,
        ETRANGER.GOLEM,
        ETRANGER.HERETIQUE,
        ETRANGER.MAITRE_DES_PUZZLES,
        ETRANGER.POLITICIEN,
        SBIRE.BOOMDANDY,
        SBIRE.GOBELIN,
        SBIRE.MARIONETTE,
        SBIRE.MEZEPHELES,
        SBIRE.PROPHETE_DE_L_EFFROI,
        SBIRE.PSYCHOPATHE,
        SBIRE.VEUVE_NOIRE,
        DEMON.AL_HADIKHIA,
        DEMON.EMEUTE,
        DEMON.LEGION,
        DEMON.LEVIATHAN,
        DEMON.PTIT_MONSTRE,
        DEMON.SANGSUE,
        VOYAGEUR.GANGSTER
    ],
    detail: `Les rôles expérimentaux sont des rôles qui n’ont pas encore de script officiel associé. Plus tard, ils pourraient être inclus dans des scripts d’extensions officiels. Pour l’instant, vous êtes encouragés à les tester en les incluant dans vos propres scripts.
    Recommandés pour les joueurs et conteurs qui ont joué beaucoup de parties de Blood on the Clocktower.`
})

export let modules: { [k: string]: Module | any } = {
    TROUBLE_BREWING,
    BAD_MOON_RISING,
    SECTS_AND_VIOLETS,
    DEADLY_PENANCE_DAY,
    LARGELY_UN_FAIRE,
    EXPERIMENTAL
}

modules.containing = (role: Role): Module[] => (Object.values(modules) as Module[])
    .filter(module => module?.roles?.includes(role) || false)
