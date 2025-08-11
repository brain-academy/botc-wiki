import Role from "../role/role"
import { Roles } from "../role/roles"
import Module from "./module"


type ExtendableModule = Module & { [key: string]: any }

export const Modules: {
    TROUBLE_BREWING: ExtendableModule,
    BAD_MOON_RISING: ExtendableModule,
    SECTS_AND_VIOLETS: ExtendableModule,
    DEADLY_PENANCE_DAY: ExtendableModule,
    LARGELY_UN_FAIRE: ExtendableModule,
    [key: string]: any
} = {
    TROUBLE_BREWING: {
        name: 'Trouble Brewing',
        filename: 'trouble-brewing',
        roles: [
            Roles.VILLAGEOIS.LAVANDIERE,
            Roles.VILLAGEOIS.ARCHIVISTE,
            Roles.VILLAGEOIS.ENQUETEUR,
            Roles.VILLAGEOIS.CUISTOT,
            Roles.VILLAGEOIS.EMPATHIQUE,
            Roles.VILLAGEOIS.VOYANTE,
            Roles.VILLAGEOIS.CROQUE_MORT,
            Roles.VILLAGEOIS.MOINE,
            Roles.VILLAGEOIS.GARDIEN,
            Roles.VILLAGEOIS.PUCELLE,
            Roles.VILLAGEOIS.MERCENAIRE,
            Roles.VILLAGEOIS.SOLDAT,
            Roles.VILLAGEOIS.MAIRE,
            Roles.ETRANGER.MAJORDOME,
            Roles.ETRANGER.SOULARD,
            Roles.ETRANGER.RECLUS,
            Roles.ETRANGER.VERTUEUX,
            Roles.SBIRE.EMPOISONNEUR,
            Roles.SBIRE.ESPION,
            Roles.SBIRE.CROQUEUSE_D_HOMMES,
            Roles.SBIRE.BARON,
            Roles.DEMON.IMP,
            Roles.VOYAGEUR.BOUC_EMISSAIRE,
            Roles.VOYAGEUR.BUREAUCRATE,
            Roles.VOYAGEUR.MENDIANT,
            Roles.VOYAGEUR.VENGEUR,
            Roles.VOYAGEUR.VOLEUR
        ],
        summary: `De l'art de l'ivresse à celui d'empoisonnement...
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clocktower ! C'est par ce module qu'on commence.`,
        description: `De l'art de l'ivresse à celui d'empoisonnement...
            Un Démon, quatre Sbires, ce sont ces derniers que les Villageois devront démasquer pour prétendre à la Victoire.
            Trouble Brewing sera votre première expérience dans le monde fantastique de Blood On The Clocktower ! C'est par ce module qu'on commence.`,
        fabled: `Des nuages se forment au-dessus de Ravenswood Bluff, engloutissant ce Village tranquille et ses habitants superstitieux de leurs ombres macabres. Des vêtements fraîchement lavés dansent sinistrement sur les étendages entre les cottages. Les cheminées crachent des volutes de fumée dans l'air. Des senteurs exotiques flottent entre les fissures des fenêtres et sous les portes tandis que des chaudrons cachés bouillonnent. Une chaude brise d'automne inhabituelle enveloppe les murs recouverts de vignes et chuchote de manière inquiétante aux plus courageux osant s'aventurer dans les rues pavées. Des mères anxieuses appellent leurs enfants à rentrer tandis l’orage commence à gronder à l’horizon. Cependant, si vous tendez l’oreille, des bruits étranges peuvent être entendus provenant de la forêt voisine. Sous l’œil vigilant d’un monastère, des silhouettes sautent de porte en porte. Ceux qui peuvent lire l’écriteau savent qu’il y a....
    
            TROUBLE BREWING`,
        gameplay: `
            Trouble Brewing est un subtil mélange de tout. Certains rôles reçoivent leurs informations passivement. D'autres ont besoin d'agir pour savoir qui est qui pendant que d'autres veulent attirer l'attention du Démon sur eux. Les gentils comme les maléfiques peuvent prendre l'avantage en réalisant des sacrifices au bon moment. Trouble Brewing est une chasse au Démon assez directe mais les maléfiques ont un certain nombre de viles astuces de désinformation dans leurs manches. Les gentils devraient donc se poser des questions sur ce qu'ils pensent savoir s'ils veulent survivre.
            
            Module débutant. Recommandé pour les nouveaux joueurs et les nouveaux Conteurs de Blood on the Clocktower ou qui ne sont pas familier des jeux à identité cachée.
            
            En jouant à Trouble Brewing…

            Les gentils devront trouver qui est gentil et qui est maléfique en utilisant leur logique et leur intuition. Certains personnages voudront révéler leur rôle et leurs informations immédiatement (comme le Cuistot et l'Enquêteur) pendant que d'autres voudront mentir sur leur identité pour que le Démon évite de les attaquer (comme le Croque-mort ou la Voyante). Certains mentiront sur leur rôle pour que le Démon les attaques (comme le Gardien ou le Soldat) !
            
            D'autres rôles de Villageois obtienne de l'information en faisant quelque chose et en observant son effet. Sacrifier la vie d'un joueur en le faisant nominer une Pucelle, tenter de tuer un Imp en tant que Mercenaire et en observant ce qu'il se passe où tuer délibérément des gentils pour que le Croque-mort puisse confirmer leur identité. Ce sont toutes des façons de sacrifier la vie et sa capacité pour obtenir de l'information et arriver à la victoire.
            
            Les maléfiques auront besoin de prétendre être des rôles gentils et de le faire bien en donnant des fausses informations, si nécessaire. Avec seulement de bonnes informations, le village va normalement trouver qui est maléfique en peu de temps. Mais avec juste une simple et plausible fausse information, les maléfiques ont une chance. L'Empoisonneur et l'Espion, s'ils font attention, peuvent provoquer une grande confusion dans les rangs du village en utilisant leurs capacités. Les maléfiques devront aussi décider quand faire des sacrifices. Est-ce que la Croqueuse d'hommes fera tuer le Imp pour sauver son équipe ? Est-ce que les maléfiques voteront pour exécuter un Sbire suspect afin de passer pour des membres honorables du village.
            
            `,
        detail:`
            Choisir les rôles. Les rôles que vous choisissez affecteront grandement la façon dont le jeu se déroulera. Choisissez ce que vous pensez être amusant, ce qui interagira bien ensemble ou simplement ce que vous vous sentez capable de gérer. S'il s'agit de votre première partie et que vous ne savez pas quels rôles inclure, tenez compte des éléments suivants (pour une partie à 8 joueurs) ou modifiez-les en fonction de votre style:
            
            1) Cuistot, Empathique, Voyante, Croque-mort, Pucelle, Soûlard (Enquêteur), Croqueuse d’hommes et Imp. Cette configuration contient beaucoup d'informations pour l’équipe des gentils, de bonnes possibilités d'impliquer les joueurs et de parler immédiatement, mais elle est également relativement sûre pour les joueurs maléfiques qui ne savent pas comment bien bluffer. Ce sera un jeu chaotique qui ravira les nouveaux joueurs. N'oubliez pas de donner de fausses informations à l'Enquêteur ivre et rappelez-vous qu'il ne peut pas mourir en désignant la Pucelle !
            
            2) Mercenaire, Gardien, Maire, Voyante, Empathique, Vertueux, Empoisonneur et Imp. Ce sera un jeu beaucoup plus calme, car les joueurs découvriront lentement si le Vertueux, le Mercenaire et le Maire disent la vérité. L’Empoisonneur, qui a de nombreuses cibles juteuses, peut certainement provoquer un certain chaos. Cependant, le jeu peut être rapide si le Mercenaire est averti, si le Vertueux ne l'est pas assez, ou si l'Empoisonneur ne peut pas trouver l'Empathique et la Voyante à temps. Si le Maire est attaqué la nuit, pensez à tuer un autre joueur à sa place – peut-être le Gardien?
            
            3) Lavandière, Mercenaire, Pucelle, Croque-mort, Voyante, Reclus, Espion et Imp. Il s'agit d'une configuration plus avancée, nécessitant une logique plus approfondie de la part des joueurs, mais elle peut être très gratifiante s'ils la comprennent. N'oubliez pas que le Reclus peut s'enregistrer en tant que Démon auprès de la Voyante, du Croque-mort et du Mercenaire ! Et rappelez-vous que l’Espion peut s’enregistrer en tant que Villageois auprès de la Pucelle, du Croque- mort et de la Lavandière !
`
    },
    BAD_MOON_RISING: {
        name: 'Bad Moon Rising',
        filename: 'bad-moon-rising',
        roles: [
            Roles.VILLAGEOIS.MAMIE,
            Roles.VILLAGEOIS.MARIN,
            Roles.VILLAGEOIS.FEMME_DE_CHAMBRE,
            Roles.VILLAGEOIS.EXORCISTE,
            Roles.VILLAGEOIS.AUBERGISTE,
            Roles.VILLAGEOIS.PARIEUR,
            Roles.VILLAGEOIS.COMMERE,
            Roles.VILLAGEOIS.COURTISANE,
            Roles.VILLAGEOIS.PROFESSEUR,
            Roles.VILLAGEOIS.MENESTREL,
            Roles.VILLAGEOIS.HERBORISTE,
            Roles.VILLAGEOIS.PACIFISTE,
            Roles.VILLAGEOIS.FOU,
            Roles.ETRANGER.INVENTEUR,
            Roles.ETRANGER.GITANE,
            Roles.ETRANGER.BRUTE,
            Roles.ETRANGER.LUNATIQUE,
            Roles.SBIRE.PARRAIN,
            Roles.SBIRE.AVOCAT_DU_DIABLE,
            Roles.SBIRE.ASSASSIN,
            Roles.SBIRE.CONSPIRATEUR,
            Roles.DEMON.PUKKA,
            Roles.DEMON.PO,
            Roles.DEMON.SHABALOTH,
            Roles.DEMON.ZOMBUUL,
            Roles.VOYAGEUR.APPRENTI,
            Roles.VOYAGEUR.ARCHEVEQUE,
            Roles.VOYAGEUR.MAGISTRAT,
            Roles.VOYAGEUR.MATRONE,
            Roles.VOYAGEUR.NECROMANT
        ],
        summary: `Une razzia de morts, un concert de décès !
    Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`,
        description: `Une razzia de morts, un concert de décès ! 
    Quatre SBIREs, Quatre Démons et des VILLAGEOIS qui devront s'entre-tuer pour connaître la Vérité !
    Une place prépondérante pour l'ivresse et la protection, Bad Moon Rising sera votre 2ème expérience de jeu sur BotC, pour les joueurs intermédiaires.`,
        fabled: `Le soleil est avalé par un horizon déchiqueté, alors qu’un autre jour d’hiver s’abandonne à la nuit. Des taches d’orange et de rouge se décomposent en un brun profond et la forêt se transforme dans l’attente silencieuse de la neige à venir. Des loups voraces hurlent depuis les entrailles d’une crevasse aux choses au-delà des frontières de la ville, faisant fuir les oiseaux de leur perchoir confortable. Les VILLAGEOIS se précipitent dans l’auberge, cherchant un abri du froid qui s’installe. Ils se réchauffent avec du thé chaud, de la musique douce et de la bonne bière, sans se douter que des yeux étranges et malveillants les traquent depuis les ruines de ce Village autrefois majestueux. Ce soir, même le bétail sait qu’il y’a un…

    Bad Moon Rising`,
        gameplay: `
            Bad Moon Rising est une extravagance mortelle. Les Démons tuent plusieurs personnes par nuits et les Sbires passent à l’action également. Les gentils peuvent prendre de gros risques pour obtenir de l’information fiable mais pourrait causer accidentellement la mort leurs alliés. Heureusement, il y a plein d’options pour garder les joueurs en vie bien après leur date d’expiration. Toutefois, si le village n’arrive pas à déterminer quel Démon et quels Sbires sont en jeu, leur perte est certaine.
            
            Intermédiaire. Recommandé pour les joueurs qui sont proactifs, dévoués au travail d’équipe et qui n’ont pas peur de mourir.
            
            En jouant à Bad Moon Rising…
            
            Les gentils ne recevront que peu d’informations en restant passif. Quelques capacités de Villageois nécessitent que le village exécute des joueurs pour obtenir des informations (comme l’Herboriste ou le Pacifiste) pendant que d’autres les encourage à prendre des risques qui peuvent les tuer afin de savoir qui est qui (comme le Parieur ou la Commère). Quand les gentils font quelque chose, ils obtiennent quelque chose.
            
            Le village devra aussi prêter une attention particulière à qui meurt la nuit et comment. S’ils l’ignorent, ils risquent de perdre de façon inattendue à la fin d’un jour avec 4 ou 5 ou même 6 joueurs encore en vie. Toutefois, s’ils peuvent trouver comment les joueurs sont morts la nuit, ils peuvent deviner quels rôles maléfiques sont en jeu. Cela leur permettra d’éviter de perdre à cause d’un redoutable Conspirateur ou un Po intimidant et d’avoir des indices utiles sur quel rôle gentil à tuer un joueur par accident (comme la Gitane ou l’Inventeur)
            
            Les maléfiques pourraient se sentir invincible au début, mais ils auront besoin d’utiliser leurs capacités avec précision et prudence afin de l’emporter. Le Démon pourrait avoir besoin de convaincre le village qu’un autre type de Démon est en jeu afin d’éviter l’effet dévastateur de rôles gentils (comme l’Exorciste ou la Courtisane) et pourraient avoir besoin de ne délibérément pas tuer pour cela. Mais si le Démon peut trouver qui attaquer et qui ne peut attaquer (comme les voisins de l’Herboriste ou le fou) alors le village va avoir de gros problèmes.
            
            Les Sbires auront également besoin d’un bon timing pour leurs capacités. Un Assassin qui frappe au bon moment, un Avocat du diable ou un Conspirateur qui peuvent lire le village peuvent transformer une défaire en victoire.
            
            `,
        
        detail:`
            Si c’est la première fois que vous contez BMR et que vous voulez apprendre en utilisant les rôles les plus simples et les plus directs, considérez mettre ces rôles en jeu :
            Parieur, Professeur, Ménestrel, Pacifiste, Fou, Inventeur, Assassin, Shabaloth.
            Vous aurez besoin de choisir quand utiliser la capacité du Pacifiste, de l’Inventeur et la capacité de résurrection du Shabaloth.  Les capacités du Ménestrel et du Fou fonctionneront automatiquement. Les joueurs feront le reste.

            Si vous vous sentez un peu plus aventureux, et que vous aimeriez un style de jeu plus singulier qui se frotte avec des rôles et des interactions plus compliquées, considérez mettre ces rôles en jeu (pour une partie à 8 joueurs) ou changez-en un pour adapter à votre style :
           
            Parieur, Commère, Femme de Chambre, Mamie, Inventeur, Gitane, Parrain, Zombuul.
            Ce sera une partie avec pas mal d’informations si le village veut accepter le niveau de risque qui va avec. Parieur, Commère, Femme de Chambre et Mamie apprendront des informations utiles rapidement, mais auront besoin de bien coordonner leur savoir pour traquer l’insaisissable Zombuul. L’Inventeur et la Gitane apporteront une couverture très utile pour le Démon car avec le Parrain en jeu, il peut y avoir des morts supplémentaires la nuit ce qui pourra faire croire qu’un autre Démon est en jeu.

            Femme de Chambre, Aubergiste, Ménestrel, Exorciste, Fou, Lunatique, Assassin, Pukka. 
            Cette composition est amusante pour les maléfiques. L’Assassin et le Pukka peuvent tous les deux tuer qui pourraient ne pas mourir autrement et le Pukka peut apporter beaucoup de confusion en empoisonnant la Femme de Chambre, l’Aubergiste, le Ménestrel ou l’Exorciste. Le Village pourrait déduire qu’un Pukka est en jeu si le Fou meurt et il pourrait aussi utiliser la capacité de l’Aubergiste pour repousser les morts à posteriori du Pukka. Le Lunatique peut être difficile à conter si vous n’êtes pas familier avec BMR alors prenez votre temps.

            Aubergiste, Herboriste, Pacifiste, Professeur, Fou, Inventeur, Avocat du Diable, Shabaloth.
            Dans cette partie, le village et les maléfiques doivent travailler dur pour tuer des joueurs du camp opposé. Il y a beaucoup de protection face à la mort pour les deux équipes. Durant la journée, les exécutions pourraient ne pas entrainer la mort et le village devra déterminer si cela vient du Pacifiste ou de l’Avocat du Diable ou autre. La nuit, le Shabaloth aura besoin de choisir ses victimes avec sagesse ou alors il pourrait ne pas être capable de tuer. Les joueurs peuvent être ramenés à la vie et le village devra aussi fournir un effort pour déterminer pourquoi.

            Marin, Femme de Chambre, Ménestrel, Courtisane, Parieur, Brute, Conspirateur, Po.
            Cela constituera un puzzle difficile à résoudre pour le village.  La variation du nombre de morts la nuit dû au Po combiné avec le terrifiant pouvoir du Conspirateur devrait inciter le village à garder tous ses esprits pour déterminer quel Démon est en jeu et même, si le Démon est mort ou vivant. Cela sera la clé de leur victoire. Le village peut s’appuyer sur le grand pouvoir de la Courtisane mais il aura besoin d’utiliser les capacités du Ménestrel, de la Femme de Chambre et du Parieur pour juger quel joueur ou quel rôle il est préférable de choisir la nuit.  Même le Marin et la Brute, s’ils jouent bien, pourraient causer suffisamment de confusion chez les maléfiques pour laisser le temps au village de déterminer ce qu’il se passe.  
            `
        },
    SECTS_AND_VIOLETS: {
        name: 'Sects & Violets',
        filename: 'sects-and-violets',
        roles: [
            Roles.VILLAGEOIS.HORLOGER,
            Roles.VILLAGEOIS.REVEUR,
            Roles.VILLAGEOIS.CHARMEUR_DE_SERPENT,
            Roles.VILLAGEOIS.MATHEMATICIEN,
            Roles.VILLAGEOIS.FLEURISTE,
            Roles.VILLAGEOIS.CRIEUR,
            Roles.VILLAGEOIS.ORACLE,
            Roles.VILLAGEOIS.SAVANT,
            Roles.VILLAGEOIS.COUTURIERE,
            Roles.VILLAGEOIS.FAUSSAIRE,
            Roles.VILLAGEOIS.ARTISTE,
            Roles.VILLAGEOIS.JONGLEUR,
            Roles.VILLAGEOIS.SAGE,
            Roles.ETRANGER.BETE_DE_FOIRE,
            Roles.ETRANGER.BARBIER,
            Roles.ETRANGER.DULCINEE,
            Roles.ETRANGER.MALADROIT,
            Roles.SBIRE.JUMEAU_MALEFIQUE,
            Roles.SBIRE.MANIPULATEUR,
            Roles.SBIRE.SORCIERE,
            Roles.SBIRE.VIEILLE_CHOUETTE,
            Roles.DEMON.FANG_GU,
            Roles.DEMON.NO_DASHII,
            Roles.DEMON.VIGORMORTIS,
            Roles.DEMON.VORTOX,
            Roles.VOYAGEUR.BARISTA,
            Roles.VOYAGEUR.BOUCHER,
            Roles.VOYAGEUR.COLLECTEUR_D_OS,
            Roles.VOYAGEUR.DEVIANT,
            Roles.VOYAGEUR.FILLE_DE_JOIE
        ],
        summary: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
    Sects & Violets sera votre 3ème expérience sur BotC, pour joueurs intermédiaires.`,
        description: `La Folie arrive et l'Empoisonnement est plus présent que jamais !
    De la manipulation mentale, des Démons toujours plus forts, Sects & Violets, c'est la promesse d'une enquête difficile mais passionnante avec des VILLAGEOIS encore plus forts... mais toujours aussi vulnérables.
    Sects & Violets sera votre 3ème expérience sur BotC, pour joueurs intermédiaires.`,
        fabled: `Un printemps vibrant laisse place à un été chaleureux et accueillant. Des multitudes de fleurs s’épanouissent à perte de vue, tendrement entretenues dans les jardins publics et dans les balconnières surplombant la somptueuse promenade. Les oiseaux chantent, les artistes peignent et les penseurs songent aux plus grands mystères de la vie à l’intérieur d’une taverne animée, tandis qu’un cirque dresse son chapiteau dépenaillé à la lisière de la ville. Tandis que les habitants s’abandonnent à la frivolité et à l’espièglerie, se régalant de spectacles raffinés et de vins plus raffinés encore, d’obscures forces clandestines se rassemblent. Sorcières et cultistes se cachent dans les ruines majestueuses en marge de la société, planifiant des réunions secrètes dans les caves souterraines et complotant de manière malveillante à la chute de Ravenswood Bluff et de ses habitants insouciants. Le moment est venu pour...
    
    Sects & Violets`,
        gameplay: `
        Sects & Violets est le plus fou des trois scripts de bases. Les gentils reçoivent des informations extraordinaires chaque nuit. Toutefois, les maléfiques sont très variés et menaçants et peuvent jeter une grande confusion sur le village. Les joueurs peuvent changer d’alignement ou de rôle. Les maléfiques peuvent perdre de la trace de qui est qui. C’est aussi la première apparition de la folie qui peut venir bloquer l’avancée de l’enquête. 
    
        Intermédiaire. Recommandé pour les joueurs qui veulent jouer fort et de façon inattendue en repoussant les limites de ce qui peut se faire dans un jeu à identité caché. 
   
        Quand vous jouez à Sects & Violets…
    
        Le village aura des informations à ne plus savoir quoi en faire. Contrairement à Trouble Brewing, où le village peut faire confiance dans la plupart des informations qu’ils reçoivent, le village dans SnV aura besoin de trouver quel type de Démon est en jeu avant de commencer à comprendre ce qu’il se passe. Avec un Fang GU en jeu, toutes les informations sont vraies sauf celles qui concernent le Démon car il peut changer avec un autre joueur. Avec un No Dashii en jeu, deux Villageois sont empoisonnés mais si le village peut déduire qui sont ces joueurs, ils auront trouvé le Démon. Avec un Vigormortis en jeu, les Villageois sont empoisonnés quand les Sbires meurent la nuit. Avec un Vortox en jeu, toutes les informations sont fausses. Une fois que le village remarque quelle information est fausse et quelle information est vraie, ils peuvent renverser l’information et en déduire quelque chose de valable. 
    
        Pour ajouter encore plus de confusion, les Etrangers vont probablement mentir sur leur identité pendant toute la partie et peut être même que certains Villageois feront la même chose. Un Etranger qui meurt peut causer de terribles désavantages au village alors les Démons avisés voudront souvent les tuer dès que possible.
    
        Les maléfiques voudront tuer ou retirer la menace des Villageois les plus dangereux le plus vite possible. Le Démon ne peut tuer qu’une fois par nuit mais les Sbires comme la Vieille_chouette, la sorcière ou le Manipulateur peuvent réellement aider à amaigrir les rangs des gentils si les Sbires sont intelligents. Les maléfiques devront aussi réfléchir à donner de vraies ou de fausses informations au village puisque celui-ci pourrait renverser cette information en fonction du type de Démon qu’ils pense en jeu.
        
        `,
        detail:`
            Si c’est la première fois que vous contez SNV et que vous voulez apprendre en utilisant les rôles les plus simples et les plus directs, considérez mettre ces rôles en jeu :
            Horloger, Oracle, Couturière, Artiste, Jongleur, Maladroit, Sorcière, No Dashii. 
            Les informations que vous devez donner à l’Horloger, à l’Oracle et au Jongleur sont faciles à calculer à comprendre. Les joueurs choisiront comment utiliser leur capacité de Couturière, d’Artiste, de Jongleur et de Maladroit. Rappelez-vous du joueur maudit par la Sorcière et les joueurs empoisonnées par le No Dashii et tout se passera bien. 

            Si vous vous sentez un peu plus aventureux, et que vous aimeriez un style de jeu plus singulier qui se frotte avec des rôles et des interactions plus compliquées, considérez mettre ces rôles en jeu (pour une partie à 8 joueurs) ou changez-en un pour adapter à votre style :
            Charmeur de Serpent, Rêveur, Fleuriste, Savant, Barbier, Maladroit, Vieille Chouette, Fang Gu.
            Cette composition se focalise sur le changement de rôle. Le Charmeur de Serpent et le Fang Gu peuvent provoquer un changement dans l’identité du Démon. La Vieille Chouette créé de nouveaux rôles. Le Barbier peut aussi complique de qui est qui en échangeant des rôles. Malheur au Maladroit qui devra choisir rapidement dans tout ce chaos !

            Crieur, Couturière, Faussaire, Artiste, Jongleur, Sage, Jumeau Maléfique, Vigormortis. 
            Cette composition va se focaliser sur le Jumeau Maléfique et le Jumeau gentil. Le village a d’incroyables ressources pur déterminer l’alignement des jumeaux mais le Vigormortis peut tuer un des jumeaux si les choses se gâtent ce qui causera beaucoup de confusion et de chaos dans le processus. Toutefois, si le village met toutes ses ressources pour trouver le Jumeau maléfique, il pourrait ne pas trouver le Démon a temps. Equilibre et prévoyance seront seront la clé. 

            Horologer, Mathématicien, Crieur, Savant, Artist, Dulcinée, Sorcière, No Dashii.
            Cette composition est similaire au premier exemple avec l’ajout du Mathématicien du Crieur, du Savant et de la Dulcinée. Le No Dashii peut empoisonner plein de Villageois intéressant mais le Savant et le Mathématicien peuvent trouver le No Dashii assez rapidement s’ils sont assez malin. La Sorcière est effrayante, en particulier avec la Dulcinée mais l’Horloger et l’Artiste peuvent se coordonner our trouver le deuxième maléfique une fois qu’ils ont une idée du premier. Cette compo estp lus adaptée à des joueurs prudents et réfléchis.
            Horloger, Faussaire, Fleuriste, Mathématicien, Sage, Bête de foire, Manipulateur, Vortox. Préparez-vous à une partie déchainée ! Le Vortox va créer une fausse information pour des rôles cruciaux tandis que la Bête de Foire et le Manipulateur vont semer le chaos et la méfiance. Vous aurez besoin d’être familier avec la folie et de la subtile différence entre les deux rôles mais si les joueurs sont aussi familiers avec la folie, ça peut être très amusant. Ce composition amène à des bluffs inhabituels, des accusations confuses et une expérience exubérante. 
`
    },
    DEADLY_PENANCE_DAY: {
        name: 'Deadly Penance Day - TBA Custom',
        filename: 'deadly-penance-day',
        roles: [
            Roles.VILLAGEOIS.CUISTOT,
            Roles.VILLAGEOIS.ENQUETEUR,
            Roles.VILLAGEOIS.CHASSEUR_DE_PRIMES,
            Roles.VILLAGEOIS.MARIN,
            Roles.VILLAGEOIS.PREDICATEUR,
            Roles.VILLAGEOIS.CHEF_DE_SECTE,
            Roles.VILLAGEOIS.CRIEUR,
            Roles.VILLAGEOIS.PARIEUR,
            Roles.VILLAGEOIS.EXORCISTE,
            Roles.VILLAGEOIS.FAUSSAIRE,
            Roles.VILLAGEOIS.SOLDAT,
            Roles.VILLAGEOIS.FOU,
            Roles.VILLAGEOIS.MAIRE,
            Roles.ETRANGER.BARBIER,
            Roles.ETRANGER.POLITICIEN,
            Roles.ETRANGER.SOULARD,
            Roles.ETRANGER.VERTUEUX,
            Roles.SBIRE.PARRAIN,
            Roles.SBIRE.ASSASSIN,
            Roles.SBIRE.BARON,
            Roles.SBIRE.SORCIERE,
            Roles.SBIRE.ESPION,
            Roles.DEMON.P_TIT_MONSTRE
        ]
    },
    LARGELY_UN_FAIRE: {
        name: 'Largely Un Faire',
        filename: 'largely-un-faire',
        roles: [
            Roles.VILLAGEOIS.AERONAUTE,
            Roles.VILLAGEOIS.EMPATHIQUE,
            Roles.VILLAGEOIS.GENERAL,
            Roles.VILLAGEOIS.CHARMEUR_DE_SERPENT,
            Roles.VILLAGEOIS.CROQUE_MORT,
            Roles.VILLAGEOIS.SAVANT,
            Roles.VILLAGEOIS.AMNESIQUE,
            Roles.VILLAGEOIS.CANNIBALE,
            Roles.VILLAGEOIS.FAUSSAIRE,
            Roles.VILLAGEOIS.COUTURIERE,
            Roles.VILLAGEOIS.ARTISTE,
            Roles.VILLAGEOIS.PECHEUR,
            Roles.VILLAGEOIS.MERCENAIRE,
            Roles.ETRANGER.BETE_DE_FOIRE,
            Roles.ETRANGER.SOULARD,
            Roles.ETRANGER.VERTUEUX,
            Roles.ETRANGER.LUNATIQUE,
            Roles.SBIRE.GOBELIN,
            Roles.SBIRE.BARON,
            Roles.SBIRE.CROQUEUSE_D_HOMMES,
            Roles.SBIRE.VEUVE_NOIRE,
            Roles.DEMON.LEVIATHAN
        ]
    }
}

export const MAIN_MODULES = [Modules.TROUBLE_BREWING, Modules.BAD_MOON_RISING, Modules.SECTS_AND_VIOLETS]

Modules.EXPERIMENTAL = {
    name: 'Expérimental',
    filename: 'experimental',
    roles: Object.values(Roles)
        .reduce((a, b) => ([...a, ...Object.values(b)]), [] as Role[])
        .filter(role => !MAIN_MODULES
            .flatMap((module: Module) => module.roles)
            .map(r => r.name)
            .includes(role.name)),
    gameplay: `Les rôles expérimentaux sont des rôles qui n’ont pas encore de script officiel associé. Plus tard, ils pourraient être inclus dans des scripts d’extensions officiels. Pour l’instant, vous êtes encouragés à les tester en les incluant dans vos propres scripts.
    Recommandés pour les joueurs et Conteurs qui ont joué beaucoup de parties de Blood on the Clocktower.`
}

Modules.containing = (role: Role): Module[] => (Object.values(Modules) as Module[])
    .filter(module => module?.roles?.includes(role) || false)
