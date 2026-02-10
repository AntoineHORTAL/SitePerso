export const ListeDomainePyromancie = [
    {
        Id: 1,
        Nom: "Bouffée de flammes",
        CoûtPX: "5",
        SD: "5",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "5 mètres",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous crachez un jet de feu du Warp. Votre Bouffée\nde flammes couvre une zone de 5 m devant vous et est\ntraitée comme ayant le Trait Flamme (voir p. 209).",
        Surpuissance: "• [1] +1 DS dégâts.\n• [1] La Bouffée de flammes peut être courbée sur\nune distance en mètre égale à votre Score de Force\nmentale."
    },
    {
        Id: 2,
        Nom: "Combustion spontanée",
        CoûtPX: "10",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "20 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous concentrez votre rage, les yeux brillants de\nfeu du Warp, jusqu'à ce que vos ennemis s'enflamment.\nLes cibles touchées avec ce pouvoir subissent 12\n+1 DS dégâts et doivent réussir" +
            " un Test d'Agilité SD 4\npour éviter d'être mises En feu.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [1] +10 m de portée."
    },
    {
        Id: 3,
        Nom: "Faisceau de fusion",
        CoûtPX: "20",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "10 mètres",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous étendez votre main ouverte et libérez un\nfaisceau d'énergie aveuglante sur vos ennemis. Ce\nfaisceau extrêmement chaud de puissance brute fait\nfondre même les métaux les plus résistants," +
            " et l'air\nprend feu autour de son passage.\nLe faisceau se déplace instantanément en ligne\ndroite sur 10 m dans la direction de votre choix. Les\ncibles touchées par le rayon subissent 18 +2 DS" +
            " dégâts\net doivent réussir un Test d'Initiative SD 4 ou être mises\nEn feu.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [1] +10 m de portée."
    },
    {
        Id: 4,
        Nom: "Feu de l'esprit",
        CoûtPX: "15",
        SD: "Force mentale de la cible",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "100 mètres",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Pyromancie",
        Effet: "vous augmentez subtilement la température\ncorporelle de votre cible. À mesure que sa température\naugmente, elle ressent une gêne intense et son corps\nvacille.\nVotre cible doit être dans votre" +
            " champ de vision pour\nactiver ce pouvoir. Si vous réussissez, vous augmentez\nla température interne de la cible et elle est... [Texte tronqué sur l'image]\nAfin de maintenir ce pouvoir, vous devez" +
            " remporter\nun Test opposé de Force mentale contre votre cible au\ndébut de chacun de vos Tours.\nPendant que ce pouvoir affecte une cible, les effets\ndu froid extrême peuvent être réduits ou ignorés" +
            " à la\ndiscrétion du MJ.",
        Surpuissance: "• [1] Le niveau de la Condition Perturbé de la cible est\naugmenté de 1.\n• [3] La cible est Fatiguée."
    },
    {
        Id: 5,
        Nom: "Forme enflammée",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous prenez feu et votre corps est englouti\ndans un brasier ardent. Ces flammes ne causent aucun\ndommage à vous ou à vos possessions.\nTant que ce pouvoir est maintenu, toutes les créatures\nà" +
            " moins de 2 m de vous subissent immédiatement 10\n+1 DS dégâts et subissent à nouveau ces dégâts à la fin\nde chacun de leurs Tours où elles restent à portée.\nVous gagnez un bonus de +1 à votre Défense" +
            " et\nêtes immunisé contre tous les dégâts ou effets avec les\nmots-clés FEU ou FUSION.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [3] +1 Défense."
    },
    {
        Id: 6,
        Nom: "Mur de flammes",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "20 mètres",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Effet: "vous écartez les bras et canalisez les énergies\nbouillonnantes du Warp pour invoquer un mur de\nflammes.\nAu départ, vous pouvez façonner librement ce mur\nde feu à votre guise, bien que ses dimensions" +
            " aient des\nlimites : jusqu'à 3 m de large, 20 m de long et 10 m\nde haut. Vous pouvez invoquer le Mur de flammes\nn'importe où à portée et dans votre champ de vision,\ny compris dans un espace occupé par" +
            " des créatures\nvivantes.\nUne fois que le mur a été invoqué, ses dimensions ne\npeuvent pas être modifiées et il brûle sans combustible\naussi longtemps que vous le maintenez.\nLes créatures qui tentent" +
            " de traverser le Mur de\nflammes ou qui sont prises à l'intérieur lorsqu'il est\ninvoqué subissent immédiatement 12 +1 DS dégâts et\nsont En feu. Les créatures à moins de 2 m subissent\nimmédiatement 10 +1" +
            " DS dégâts lorsque le mur est\ninvoqué, et à nouveau à chaque Tour qu'elles terminent\nà moins de 2 m du mur.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [2] Vous pouvez utiliser une Action de Déplacement\npour remodeler une fois le Mur de flammes pendant\nqu'il est maintenu.\n• [1] +1 m de hauteur ou de longueur."
    }
]