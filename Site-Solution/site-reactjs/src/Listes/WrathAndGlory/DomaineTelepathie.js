export const ListeDomaineTelepathie = [
    {
        Id: 1,
        Nom: "Mauvais œil",
        CoûtPX: "15",
        SD: "Défense de la cible",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "30 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous sombrez dans une brève rêverie et scrutez\nle futur immédiat d'un ennemi spécifique, puis vous\nmanipulez les fils de cet avenir afin que les possibilités\nles plus tragiques se concrétisent.\nLa" +
            " cible devient immédiatement Vulnérable (1)\net Perturbée (1) tant que le pouvoir est maintenu. Le\npouvoir Mauvais œil est mentalement éprouvant. Vous\nsubissez 1 Stress pour chaque minute pendant laquelle\nvous" +
            " maintenez le pouvoir.",
        Surpuissance: "• [1] Temps d'activation réduit à une Action.\n• [2] La cible a un malus de -1 à la Défense.\n• [2] La cible a +1 SD aux Tests de Compétence."
    },
    {
        Id: 2,
        Nom: "Prescience",
        CoûtPX: "15",
        SD: "7",
        Activation: "30 minutes",
        Durée: "1 scène",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Divination.",
        Effet: "vous scrutez les profondeurs du Warp et voyez\nau-delà des possibilités ondulant à la surface. Au-delà\ndu glamour et des promesses trompeuses de ce qui\npourrait être, vous avez des aperçus et des images de\nce" +
            " qui sera vraiment, du moins dans un avenir proche.\nUne fois activé, Prescience vous permet de relancer\n1 dé (mais pas les Dés de Fureur) dans tous les Tests\nque vous effectuez pour le reste de la scène.\nDe plus," +
            " vous pouvez demander aux êtres intemporels\nqui habitent le Warp de répondre à une seule question\nsur ce qui pourrait arriver. Le MJ choisit l'entité qui\nrépond à votre question et vous communique en privé\nsa réponse.",
        Surpuissance: "• [1] Activation réduite de 5 minutes (minimum 5).\n• [2] Vous pouvez poser une question supplémentaire\nsur l'avenir au MJ."
    },
    {
        Id: 3,
        Nom: "Pressentiment",
        CoûtPX: "15",
        SD: "6",
        Activation: "Action complexe",
        Durée: "1 Combat",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous sombrez dans une brève rêverie et scrutez\nle futur immédiat pour voir comment les événements\nd'une rencontre spécifique se dérouleront. Vous faites\nattention à la façon dont vos ennemis se battent" +
            " et\naux actions qu'ils entreprendront, afin de mieux vous\nprotéger contre leurs attaques grâce à vos nouvelles\nconnaissances.\nQuand ce pouvoir est activé, vous pouvez Voler\nl'initiative (p. 177) sans dépenser" +
            " de Gloire pendant le\ncombat dans lequel vous êtes actuellement engagé ou\nvotre prochain combat, et vous gagnez un bonus de +1\nà votre Défense.",
        Surpuissance: "• [1] Activation réduite à une Action.\n• [2] Bonus de +1 à la Défense."
    },
    {
        Id: 4,
        Nom: "Vision projetée",
        CoûtPX: "5",
        SD: "6",
        Activation: "Action complexe (ou 10 minutes)",
        Durée: "Maintien",
        Portée: "5 000 m",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous projetez votre esprit dans l'espace pour\nvisualiser les événements qui se déroulent à un autre\nendroit à portée. Vous devez connaître ce lieu pour\npouvoir le visualiser, et vous devez avoir au moins" +
            " une\nidée générale de l'endroit où il se trouve par rapport\nà vous-même. Si vous ne connaissez pas exactement\ncette information, vous devez consacrer 10 minutes à\nchercher le lieu désiré.\nVision projetée est" +
            " mentalement éprouvant. Vous\nsubissez 1 Stress toutes les 10 minutes tant que vous\nmaintenez ce pouvoir.",
        Surpuissance: "• [1] Portée multipliée par 10."
    },
    {
        Id: 5,
        Nom: "Psychométrie",
        CoûtPX: "15",
        SD: "4",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "10 mètres",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Divination.",
        Effet: "les émotions intenses laissent des marques\ndurables sur les fils intemporels du Warp. En ouvrant\nvotre esprit, vous percevez les échos du passé qui\nrestent psychiquement d'un lieu ou d'un objet.\nLorsque" +
            " vous utilisez ce pouvoir, vous pouvez\nentrevoir des visions d'événements passés dans un lieu\noù un individu a exprimé une forte émotion.\n• 1 heure : vos sens peuvent percevoir les événements\nproduits juste" +
            " avant, pendant et après l'émotion.\n• 6 heures : vous pouvez percevoir clairement les\névénements qui se sont produits.\n• 12 heures : vous pouvez poser au MJ une seule question\nsur l'événement qui a eu lieu.",
        Surpuissance: "• [1] Vous pouvez partager votre vision avec n'importe\nquel allié à portée du Pouvoir psychique.\n• [2] La portée du pouvoir est doublée.\n• [2] Vos visions se manifestent deux fois plus\nrapidement."
    },
    {
        Id: 6,
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
        Id: 7,
        Nom: "Combustion spontanée",
        CoûtPX: "10",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "20 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous concentrez votre rage, les yeux brillants de\nfeu du Warp, jusqu'à ce que vos ennemis s'enflamment.\nLes cibles touchées avec ce pouvoir subissent 12\n+1 DS dégâts et doivent réussir un Test d'Agilité SD" +
            " 4\npour éviter d'être mises En feu.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [1] +10 m de portée."
    },
    {
        Id: 8,
        Nom: "Faisceau de fusion",
        CoûtPX: "20",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "10 mètres",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous étendez votre main ouverte et libérez un\nfaisceau d'énergie aveuglante sur vos ennemis.\nLe faisceau se déplace instantanément en ligne\ndroite sur 10 m dans la direction de votre choix. Les\ncibles" +
            " touchées par le rayon subissent 18 +2 DS dégâts\net doivent réussir un Test d'Initiative SD 4 ou être mises\nEn feu.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [1] +10 m de portée."
    },
    {
        Id: 9,
        Nom: "Feu de l'esprit",
        CoûtPX: "15",
        SD: "Force mentale de la cible",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "100 mètres",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Pyromancie.",
        Effet: "vous augmentez subtilement la température\ncorporelle de votre cible. À mesure que sa température\naugmente, elle ressent une gêne intense et son corps\nvacille.\nAfin de maintenir ce pouvoir, vous devez" +
            " remporter\nun Test opposé de Force mentale contre votre cible au\ndébut de chacun de vos Tours.",
        Surpuissance: "• [1] Le niveau de la Condition Perturbé de la cible est\naugmenté de 1.\n• [3] La cible est Fatiguée."
    },
    {
        Id: 10,
        Nom: "Forme enflammée",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous prenez feu et votre corps est englouti\ndans un brasier ardent. Ces flammes ne causent aucun\ndommage à vous ou à vos possessions.\nTant que ce pouvoir est maintenu, toutes les créatures\nà moins" +
            " de 2 m de vous subissent immédiatement 10\n+1 DS dégâts.\nVous gagnez un bonus de +1 à votre Défense et\nêtes immunisé contre tous les dégâts ou effets avec les\nmots-clés FEU ou FUSION.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [3] +1 Défense."
    },
    {
        Id: 11,
        Nom: "Mur de flammes",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "20 mètres",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous écartez les bras et canalisez les énergies\nbouillonnantes du Warp pour invoquer un mur de\nflammes.\nLe mur peut mesurer jusqu'à 3 m de large, 20 m de long\net 10 m de haut. Les créatures qui tentent" +
            " de traverser\nle Mur de flammes ou qui sont prises à l'intérieur\nsubissent immédiatement 12 +1 DS dégâts et sont En feu.\nLes créatures à moins de 2 m subissent immédiatement\n10 +1 DS dégâts.",
        Surpuissance: "• [2] +1 DS dégâts.\n• [2] Vous pouvez utiliser une Action de Déplacement\npour remodeler une fois le Mur de flammes pendant\nqu'il est maintenu.\n• [1] +1 m de hauteur ou de longueur."
    },
    {
        Id: 12,
        Nom: "Collision",
        CoûtPX: "10",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "20 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous n'utilisez rien de plus que le pouvoir de votre\nvolonté pour déraciner un rocher, un arbre ou un objet\nde taille similaire à proximité et frapper vos ennemis avec.\nLes cibles touchées par ce pouvoir" +
            " subissent 10\n+1 DS dégâts.",
        Surpuissance: "• [1] +1 DS dégâts.\n• [2] Portée +10 m."
    },
    {
        Id: 13,
        Nom: "Compression",
        CoûtPX: "10",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "20 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous appliquez une force invisible autour de\nvotre ennemi, puis vous serrez pour l'écraser.\nSi réussi, la cible subit 10 +1 DS dégâts et doit réussir\nun Test de Force ou de Force mentale SD 5 ou" +
            " être\nEntravée. Si la victime ne s'échappe pas, elle subit\n10 +1 DS dégâts supplémentaires à chaque Tour.",
        Surpuissance: "• [3] +1 DS dégâts (s'applique aux dégâts continus).\n• [2] +1 SD au Test de Force ou de Force mentale."
    },
    {
        Id: 14,
        Nom: "Dôme télékinétique",
        CoûtPX: "15",
        SD: "5",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Télékinésie.",
        Effet: "vous créez une barrière de force invisible pour\nvous protéger. Vous gagnez +2 en Résistance et pouvez\nfaire un jet de Détermination contre les Blessures\nmortelles.\nSubissez 1 Stress pour chaque minute de maintien.",
        Surpuissance: "• [2] Augmentez la portée à +Rang m (alliés protégés).\n• [2] Augmentez le bonus de Résistance de +1."
    },
    {
        Id: 15,
        Nom: "Gravité du Warp",
        CoûtPX: "20",
        SD: "Force mentale de la cible +2",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "50 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "faites un Test opposé de Force mentale. Si vous\nréussissez, vous pouvez choisir d'Augmenter la gravité\n(cible À terre et Entravée) ou de Changer la gravité\n(choisissez une direction).\nLa cible peut" +
            " subir des dégâts de chute (p. 201).",
        Surpuissance: "• [2] Inflige 1 Blessure mortelle à la cible.\n• [3] Augmente la portée de +50 m."
    },
    {
        Id: 16,
        Nom: "Lévitation",
        CoûtPX: "8",
        SD: "5",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous pouvez voler librement à votre Vitesse normale\npendant que vous maintenez ce pouvoir.\nSubissez 1 Stress pour chaque heure de maintien.",
        Surpuissance: "• [1] La Vitesse de vol augmente de 5 m.\n• [2] +1 Force pour déterminer la charge transportable."
    },
    {
        Id: 17,
        Nom: "Onde de Choc",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "5 mètres",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous libérez une explosion de force mentale dans\ntoutes les directions. Toutes les créatures à portée\nsubissent 12 +1 DS dégâts et doivent réussir un Test\nd'Agilité SD 5 ou être jetées À terre.",
        Surpuissance: "• [1] La portée est augmentée de 5 m.\n• [2] +1 DS dégâts."
    },
    {
        Id: 18,
        Nom: "Brume mentale",
        CoûtPX: "15",
        SD: "4",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "10 mètres",
        CiblesMultiples: "Non",
        MotsClés: "TÉLÉPATHIE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous brouillez les pensées de votre ennemi.\nTous les ennemis à portée doivent réussir un Test de\nForce mentale SD 6 ou être à la fois Perturbés (2)\net Secoués. Subissez 1 Stress par Round de maintien.",
        Surpuissance: "• [1] +10 m de portée.\n• [2] Activation réduite à une Action."
    },
    {
        Id: 19,
        Nom: "Effacement",
        CoûtPX: "15",
        SD: "Force mentale de la cible +2",
        Activation: "Action complexe",
        Durée: "Instantané",
        Portée: "30 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "TÉLÉPATHIE, PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Télépathie.",
        Effet: "vous retirez un souvenir de l'esprit de votre cible.\nVous pouvez supprimer un souvenir récent égal à votre\nRang en heures (datant de moins de 24h). La cible a\nconscience d'avoir perdu des souvenirs" +
            " mais ils ne\npeuvent pas être récupérés.",
        Surpuissance: "• [2] Portée +30 m.\n• [3] Le nombre d'heures effaçables est doublé."
    },
    {
        Id: 20,
        Nom: "Épouvante",
        CoûtPX: "15",
        SD: "5",
        Activation: "Action complexe",
        Durée: "Instantané",
        Portée: "10 mètres",
        CiblesMultiples: "Non",
        MotsClés: "TÉLÉPATHIE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous arrachez les peurs latentes du subconscient.\nTous les ennemis à portée doivent faire un Test de Peur\nSD 5.",
        Surpuissance: "• [2] SD du jet de Peur augmenté de +1.\n• [2] Activation réduite à une Action.\n• [1] +10 m de portée."
    },
    {
        Id: 21,
        Nom: "Plainte psychique",
        CoûtPX: "10",
        SD: "Force mentale de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "50 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous libérez une onde d'énergie psychique pour\nattaquer l'esprit d'un ennemi. La cible subit\nimmédiatement 1d3+3 Stress et doit réussir un Test de\nForce mentale SD 5 ou être Secouée.",
        Surpuissance: "• [1] +1 Stress.\n• [2] +1 SD au Test de Force mentale."
    },
    {
        Id: 22,
        Nom: "Sonde mentale",
        CoûtPX: "15",
        SD: "Force mentale de la cible (Test opposé)",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "30 mètres",
        CiblesMultiples: "Non",
        MotsClés: "TÉLÉPATHIE, PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Télépathie.",
        Effet: "vous sondez l'esprit pour révéler les secrets les plus\nintimes. Vous pouvez poser une question à la cible à\nchacun de vos Tours. La cible subit 1d3 Stress par\nquestion répondue.\nPour maintenir," +
            " vous devez remporter un Test opposé de\nForce mentale à chaque Tour.",
        Surpuissance: "• [1] La cible répond à une question supplémentaire.\n• [2] La cible ne subit pas de Stress et n'est pas\nconsciente de l'intrusion."
    },
    {
        Id: 23,
        Nom: "Télépathie",
        CoûtPX: "5",
        SD: "3",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "100 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "TÉLÉPATHIE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous communiquez par la pensée. Vous n'avez pas\nbesoin de voir les cibles tant qu'elles sont à portée.\nSi utilisé pour espionner, la cible peut tenter un Test de\nVigilance (Int) réussi contre votre" +
            " réserve de dés de\nMaîtrise psychique. Agir comme relais pour plusieurs\ncibles coûte 1 Stress toutes les 20 minutes.",
        Surpuissance: "• [1] La portée est multipliée par 10."
    }
]