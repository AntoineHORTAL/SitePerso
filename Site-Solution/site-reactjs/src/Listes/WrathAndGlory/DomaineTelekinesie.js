export const ListeDomaineTelekinesie = [
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
        Surpuissance: "[1] +1 DS dégâts.\n[1] La Bouffée de flammes peut être courbée sur\nune distance en mètre égale à votre Score de Force\nmentale."
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
        Effet: "vous concentrez votre rage, les yeux brillants de\nfeu du Warp, jusqu'à ce que vos ennemis s'enflamment.\nLes cibles touchées avec ce pouvoir subissent 12\n+1 DS dégâts et doivent réussir un" +
            " Test d'Agilité SD 4\npour éviter d'être mises En feu.",
        Surpuissance: "[2] +1 DS dégâts.\n[1] +10 m de portée."
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
            " et l'air\nprend feu autour de son passage.\nLe faisceau se déplace instantanément en ligne\ndroite sur 10 m dans la direction de votre choix. Les\ncibles touchées par le rayon subissent 18 +2 DS dégâts\net" +
            " doivent réussir un Test d'Initiative SD 4 ou être mises\nEn feu.",
        Surpuissance: "[2] +1 DS dégâts.\n[1] +10 m de portée."
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
            " champ de vision pour\nactiver ce pouvoir. Si vous réussissez, vous augmentez\nla température interne de la cible et elle est...\nAfin de maintenir ce pouvoir, vous devez remporter\nun Test opposé de" +
            " Force mentale contre votre cible au\ndébut de chacun de vos Tours.\nPendant que ce pouvoir affecte une cible, les effets\ndu froid extrême peuvent être réduits ou ignorés à la\ndiscrétion du MJ.",
        Surpuissance: "[1] Le niveau de la Condition Perturbé de la cible est\naugmenté de 1.\n[3] La cible est Fatiguée."
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
        Surpuissance: "[2] +1 DS dégâts.\n[3] +1 Défense."
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
        Prerequis: "",
        Effet: "vous écartez les bras et canalisez les énergies\nbouillonnantes du Warp pour invoquer un mur de\nflammes.\nAu départ, vous pouvez façonner librement ce mur\nde feu à votre guise, bien que ses" +
            " dimensions aient des\nlimites : jusqu'à 3 m de large, 20 m de long et 10 m\nde haut. Vous pouvez invoquer le Mur de flammes\nn'importe où à portée et dans votre champ de vision,\ny compris dans un" +
            " espace occupé par des créatures\nvivantes.\nUne fois que le mur a été invoqué, ses dimensions ne\npeuvent pas être modifiées et il brûle sans combustible\naussi longtemps que vous le maintenez.\nLes" +
            " créatures qui tentent de traverser le Mur de\nflammes ou qui sont prises à l'intérieur lorsqu'il est\ninvoqué subissent immédiatement 12 +1 DS dégâts et\nsont En feu. Les créatures à moins de 2 m" +
            " subissent\nimmédiatement 10 +1 DS dégâts lorsque le mur est\ninvoqué, et à nouveau à chaque Tour qu'elles terminent\nà moins de 2 m du mur.",
        Surpuissance: "[2] +1 DS dégâts.\n[2] Vous pouvez utiliser une Action de Déplacement\npour remodeler une fois le Mur de flammes pendant\nqu'il est maintenu.\n[1] +1 m de hauteur ou de longueur."
    },
    {
        Id: 7,
        Nom: "Collision",
        CoûtPX: "10",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "20 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "les yeux flamboyants de lumière intérieure, vous\nn'utilisez rien de plus que le pouvoir de votre volonté\npour déraciner un rocher, un arbre ou un objet de taille\nsimilaire à proximité et" +
            " frapper vos ennemis avec.\nLes cibles touchées par ce pouvoir subissent 10\n+1 DS dégâts.",
        Surpuissance: "[1] +1 DS dégâts.\n[2] Portée +10 m."
    },
    {
        Id: 8,
        Nom: "Compression",
        CoûtPX: "10",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "20 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous appliquez une force invisible autour de\nvotre ennemi, puis vous serrez pour l'écraser.\nSi ce pouvoir est activé avec succès, la cible subit 10\n+1 DS dégâts et doit réussir un Test de" +
            " Force ou de Force\nmentale (au choix) SD 5 ou être Entravée.\nLorsqu'elle est Entravée, la cible ne peut rien faire\npendant son Tour, sauf essayer de se libérer en faisant\nà nouveau un autre Test" +
            " de Force ou de Force mentale\nen tant qu'Action complexe. Si la victime ne s'échappe\npas, elle subit 10 +1 DS dégâts supplémentaires au\ndébut de chacun de vos Tours tant que vous maintenez\nle pouvoir.",
        Surpuissance: "[3] +1 DS dégâts. L'augmentation des dégâts\ns'applique aux dégâts continus à chaque Tour.\n[2] +1 SD au Test de Force ou de Force mentale."
    },
    {
        Id: 9,
        Nom: "Dôme télékinétique",
        CoûtPX: "15",
        SD: "5",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Télékinésie",
        Effet: "vous attirez les énergies inertes qui flottent tout\nautour de vous et créez une barrière de force invisible\npour vous protéger.\nVous gagnez +2 en Résistance et pouvez faire un\njet de" +
            " Détermination contre les Blessures mortelles tant\nque vous maintenez ce pouvoir.\nLe pouvoir Dôme télékinétique est mentalement\néprouvant. Vous subissez 1 Stress pour chaque minute\noù vous maintenez le pouvoir.",
        Surpuissance: "[2] Augmentez la portée à +Rang m, et tous les\nêtres à portée bénéficient de la même protection.\n[2] Augmentez le bonus de Résistance de +1."
    },
    {
        Id: 10,
        Nom: "Gravité du Warp",
        CoûtPX: "20",
        SD: "Force mentale de la cible +2",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "50 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous exploitez les pressions du Warp et appliquez\nune force semblable à celle de la gravité sur votre cible.\nFaites un Test opposé de Force mentale avec une\nseule cible dans votre champ de" +
            " vision pour activer\nce pouvoir. Si vous réussissez, vous pouvez choisir\nd'infliger un des effets suivants sur la cible :\nAugmenter la gravité : votre cible est À terre et\nEntravée.\nChanger la" +
            " gravité : choisissez une direction ; la\ngravité agit maintenant dans cette direction pour la\ncible.\nSi vous maintenez ce pouvoir, vous pouvez choisir un\nautre effet, comme augmenter la gravité" +
            " après l'avoir\nchangée ou changer à nouveau le sens de la gravité\npour la cible.\nSi vous arrêtez de maintenir ce pouvoir ou que\nla cible s'éloigne à plus de 50 m de vous, le pouvoir\nn'affecte" +
            " plus la cible.\nLa gravité à laquelle la cible est soumise est\néquivalente à la norme terrienne. La cible peut subir des\ndégâts de chute (p. 201).",
        Surpuissance: "[2] Inflige 1 Blessure mortelle à la cible.\n[3] Augmente la portée de +50 m."
    },
    {
        Id: 11,
        Nom: "Lévitation",
        CoûtPX: "8",
        SD: "5",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vos cheveux et vos vêtements sont violemment\nsoufflés par des forces éthérées alors que vous vous\nélevez du sol. Vous pouvez voler librement à votre\nVitesse normale pendant que vous maintenez" +
            " ce\npouvoir.\nLe pouvoir Lévitation est mentalement éprouvant.\nVous subissez 1 Stress pour chaque heure où vous\nmaintenez ce pouvoir.",
        Surpuissance: "[1] La Vitesse de vol augmente de 5 m.\n[2] +1 Force pour déterminer ce que vous pouvez\ntransporter en vol."
    },
    {
        Id: 12,
        Nom: "Onde de Choc",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "5 mètres",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "d'un puissant coup de poing, vous libérez une\nexplosion de force mentale qui explose dans toutes les\ndirections.\nToutes les créatures à portée subissent 12 +1 DS\ndégâts à cause de cette explosion" +
            " et doivent réussir un\nTest d'Agilité SD 5 ou être jetée À terre.",
        Surpuissance: "[1] La portée est augmentée de 5 m.\n[2] +1 DS dégâts."
    }
]