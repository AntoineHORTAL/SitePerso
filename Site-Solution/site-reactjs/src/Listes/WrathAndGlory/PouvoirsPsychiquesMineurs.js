export const ListePouvoirsPsychiquesMineurs = [
    {
        Id: 1,
        Nom: "Anti-gravité",
        CoûtPX: "7",
        SD: "4",
        Activation: "Action simple",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "Vous utilisez votre force de volonté pour libérer votre corps de la gravité. Vous pouvez flotter librement, en planant ou en vous déplaçant lentement vers le haut ou vers le bas (1/2 Vitesse). Cependant," +
            " vous n'êtes pas vraiment capable de voler, vous devez donc utiliser d'autres moyens pour vous déplacer dans une autre direction. Ce pouvoir peut être utilisé pour tenter d'interrompre une chute.",
        Surpuissance: "[1] Peut se déplacer à Vitesse normale vers le haut ou vers le bas. [2] Peut également affecter une créature consentante à moins de 5 m. Le Psyker contrôle son mouvement vertical."
    },
    {
        Id: 2,
        Nom: "Atténuation de la douleur",
        CoûtPX: "8",
        SD: "4",
        Activation: "Action simple",
        Durée: "1 Round",
        Portée: "5 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "Vous utilisez votre force de volonté pour désensibiliser les autres (ou vous-même) à la douleur. Tant que ce pouvoir reste actif, la cible réduit tous les points de Stress qu'elle subit de 1.",
        Surpuissance: "[1] Stress réduit de 1 point supplémentaire. [3] La cible réduit de 1 toutes les Blessures qu'elle subit."
    },
    {
        Id: 3,
        Nom: "Bruit blanc",
        CoûtPX: "5",
        SD: "3",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "Vous attirez les énergies sombres du Warp autour de votre esprit, afin de masquer votre présence auprès de ceux qui pourraient tenter de vous détecter par des moyens psychiques. En cas de succès, vous pouvez" +
            " résister aux tentatives de vous localiser ou de vous identifier en tant que Psyker via des pouvoirs tels que Psyniscience. Tout Test de Maîtrise psychique (FM) effectué pour vous détecter doit être fait avec une" +
            " pénalité de +2 SD.",
        Surpuissance: "[1] +1 au SD pour les tentatives de détection."
    },
    {
        Id: 4,
        Nom: "Caméléon",
        CoûtPX: "8",
        SD: "5",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous pliez la réalité juste assez pour que votre image se fonde dans votre environnement. Tant que ce pouvoir reste actif, vous gagnez +5 dés bonus aux Tests de Furtivité (A) et + 1 à votre Défense contre" +
            " les attaques à distance.",
        Surpuissance: "• [1] Bonus de Furtivité (A) augmenté de +1. • [3] Bonus supplémentaire de +1 à la Défense."
    },
    {
        Id: 5,
        Nom: "Chance",
        CoûtPX: "10",
        SD: "4",
        Activation: "Action simple",
        Durée: "1 Round",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous manipulez les énergies du Warp, peut-être même inconsciemment, pour mettre les probabilités de votre côté. Vous pouvez choisir de gagner +1 dé bonus pour un Test que vous effectuez pendant la durée du pouvoir.",
        Surpuissance: "• [1] Vous gagnez +1 dé bonus au Test choisi."
    },
    {
        Id: 6,
        Nom: "Écho d'outre-monde",
        CoûtPX: "5",
        SD: "3",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "25 mètres",
        CiblesMultiples: "Non",
        MotsClés: "AUDITION, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous manipulez la cacophonie du Warp pour vos propres fins. Des voix fantomatiques ou d'autres sons semblent provenir d'endroits ou d'objets dans votre champ de vision et à portée. Ces voix ou sons produisent" +
            " un écho surnaturel et leur volume ne peut pas dépasser le niveau d'une conversation normale. Ces sons sont généralement utilisés pour troubler ou distraire les autres, mais ils peuvent également servir à transmettre" +
            " des informations à des cibles éloignées, bien qu'une telle communication soit à sens unique et de nature perturbante.",
        Surpuissance: "• [1] La portée est augmentée de 25 m. • [2] Volume des voix et des sons augmenté au niveau d'un cri."
    },
    {
        Id: 7,
        Nom: "Flash bruyant",
        CoûtPX: "8",
        SD: "4",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "5 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "AUDITION, LUMIÈRE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous projetez mentalement l'énergie Warp comme un fouet, afin de produire un flash lumineux et un son sec. Tout le monde à portée doit réussir un Test d'Endurance SD 3 ou subir 1 Stress et être Aveuglé pendant 1 Round.",
        Surpuissance: "• [1] +1 Stress supplémentaire. • [2] Portée augmentée de 5 m."
    },
    {
        Id: 8,
        Nom: "Infliction de la douleur",
        CoûtPX: "8",
        SD: "4",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "5 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous puisez dans les énergies tourbillonnantes du Warp pour les déverser dans l'esprit de votre cible et lui infliger une douleur débilitante. Choisissez une cible dans votre champ de vision. Cette cible subit" +
            " immédiatement 1d3 Stress et doit réussir un Test de Force mentale SD 3 ou est Secouée. Tant que vous maintenez ce pouvoir, la cible doit refaire le même Test au début de chacun de ses tours ou subir un autre point" +
            " de Stress et rester Secouée. Si la cible résiste, elle est immunisée contre la Condition Secoué causée par ce pouvoir pour le reste de la scène, mais elle subit quand même des dégâts de Stress. Infliction de la" +
            " douleur n'a aucun effet contre les cibles qui ne sont pas vraiment vivantes ou qui ne ressentent pas la douleur (comme les démons, les plantes, etc.).",
        Surpuissance: "• [1] +1 dégât de Stress par Round maintenu."
    },
    {
        Id: 9,
        Nom: "Injonction",
        CoûtPX: "10",
        SD: "5",
        Activation: "Action simple",
        Durée: "1 Round",
        Portée: "5 mètres",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "vous implantez un ordre simple dans l'esprit d'une créature proche. Cet ordre doit être court (constitue d'une seule action), simple et évident, mais il peut aller à l'encontre des intérêts ou des instincts" +
            " de base de la créature ciblée.",
        Surpuissance: "• [1] + 1 SD au Test de Force Mentale pour résister.\n• [2] + 2 1 Round à la Durée."
    },
    {
        Id: 10,
        Nom: "Invocation de flamme",
        CoûtPX: "10",
        SD: "4",
        Activation: "Mouvement",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "FEU, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous invoquez une simple flamme. Cette flamme est de taille variable : elle peut être aussi petite qu'une allumette ou aussi grande qu'une torche crépitante. Elle se comporte en tout point comme un véritable feu" +
            " et peut être utilisée pour enflammer des matériaux combustibles. Tant que la flamme existe, vous êtes immunisé contre ses effets, bien que vous ne soyez pas immunisé contre les effets du feu provenant de toute autre" +
            " source (ni vos vêtements ni les objets que vous tenez). Lors d'une attaque de mêlée, cette flamme peut être utilisée comme une arme infligeant 8+1 DS dégâts. À la discrétion du MJ, cela peut provoquer la Condition En feu.",
        Surpuissance: "• [1] Vous générez une flamme supplémentaire.\• [2] +1 DS dégâts."
    },
    {
        Id: 11,
        Nom: "Malédiction de la machine",
        CoûtPX: "10",
        SD: "4",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "25 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous pénétrez dans une machine ou un mécanisme spécifique avec votre esprit pour en interrompre temporairement le fonctionnement. Un mécanisme bloqué avec ce pouvoir reste inopérant pendant une minute. Le" +
            " mécanisme peut être réinitialisé et remis en service pendant cet intervalle avec un Test de Technomaîtrise SD 3 réussi.",
        Surpuissance: "• [1] Portée augmentée de 25 m.\• [1] +1 SD au Test de Technomaîtrise."
    },
    {
        Id: 12,
        Nom: "Mains spectrales",
        CoûtPX: "8",
        SD: "4",
        Activation: "Action complexe",
        Durée: "Maintien",
        Portée: "10 mètres",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous manifestez une paire invisible de mains spectrales à portée. En utilisant l'action appropriée, vous pouvez utiliser ces mains pour exécuter n'importe quelle tâche qu'elles pourraient logiquement effectuer" +
            " : appuyer sur un bouton, ouvrir/fermer une porte, tirer la goupille d'une grenade, etc., mais vous devez voir l'objet ou la cible à manipuler. Pour les besoins de ces tâches, les Mains spectrales ont une Force et" +
            " une Agilité égales à votre Force mentale. Ce pouvoir ne peut pas être utilisé pour faire une attaque, mais le MJ peut vous permettre de faire une Attaque déstabilisante en utilisant une réserve de dés égale à votre" +
            " Force mentale.",
        Surpuissance: "• [1] Activation réduite à une Action.\• [1] Portée augmentée de 10 m."
    },
    {
        Id: 13,
        Nom: "Poussée mentale",
        CoûtPX: "8",
        SD: "3",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "15 mètres",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "par la simple force de votre volonté, vous invoquez une poussée mentale invisible que vous pouvez utiliser pour repousser une cible dans votre champ de vision. La cible doit immédiatement réussir un Test" +
            " d'Agilité SD 4 ou finir À terre, ce qui peut entraîner des conséquences supplémentaires en fonction de sa situation à ce moment-là.",
        Surpuissance: "• [1] La portée est augmentée de 15 m.\n• [2] +1 SD au Test d'Agilité."
    },
    {
        Id: 14,
        Nom: "Torche psychique",
        CoûtPX: "5",
        SD: "2",
        Activation: "Action simple",
        Durée: "Maintien",
        Portée: "5 mètres",
        CiblesMultiples: "Non",
        MotsClés: "CINÉTIQUE, PSYCHIQUE",
        Prerequis: "",
        Effet: "vous invoquez un orbe flottant qui émet une lumière rougeoyante. Bien qu'il soit généralement d'intensité égale à celle d'une torche à lumens ordinaire, vous pouvez le rendre aussi faible qu'une bougie" +
            " ou aussi brillant qu'une fusée éclairante en vous concentrant. L'orbe flotte généralement dans les airs à côté de vous, mais avec une commande mentale, il peut recevoir des instructions simples telles que vous" +
            " suivre, orbiter autour de votre tête ou rester stationnaire à un endroit spécifique. L'orbe peut atteindre votre Vitesse, mais il se dissipe instantanément s'il passe hors de portée et doit alors être réinvoqué.",
        Surpuissance: "• [1] La portée est augmentée de 5 m.\n• [2] Peut créer un orbe supplémentaire."
    }
]