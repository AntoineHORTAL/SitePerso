export const ListeDomaineBiomancie = [
    {
        Id: 1,
        Nom: "Affaiblissement",
        CoûtPX: "15",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "10 mètres",
        CiblesMultiples: "Oui",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "l'air devient épais et poisseux alors que vous pratiquez une légère déchirure dans le tissu de la réalité pour drainer la vie de vos ennemis. La Force de la cible est réduite de 1 et elle" +
            " subit 1 Stress au début de chacun de ses tours tant que le pouvoir est maintenu. Une fois le pouvoir terminé, la cible récupère sa Force perdue.",
        Surpuissance: "• [1] +1 réduction de la Force. • [3] +1 dégâts de Stress par Round."
    },
    {
        Id: 2,
        Nom: "Célérité Warp",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "votre forme commence à se déformer et à devenir floue alors que vous tirez de l'énergie du Warp pour la transférer directement dans vos propres membres. Tant que vous maintenez ce pouvoir," +
            " votre Vitesse est doublée, vous pouvez effectuer une Action supplémentaire par Round sans pénalité (ce qui peut être une attaque), votre Défense augmente de +1 et vous agissez en premier à chaque" +
            " Round. L'utilisation de Célérité Warp a des conséquences directes sur la physiologie du Psyker. Vous subissez 1d3+1 Stress pour chaque Round pendant lequel ce pouvoir est maintenu.",
        Surpuissance: "• [1] Vous subissez 1 Stress de moins lorsque vous maintenez ce pouvoir. • [2] Bonus de +1 à la Défense."
    },
    {
        Id: 3,
        Nom: "Drain de vie",
        CoûtPX: "15",
        SD: "Défense de la cible",
        Activation: "Action",
        Durée: "Instantané",
        Portée: "5 mètres",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "l'air se refroidit autour de vous pendant que vous aspirez la vie de votre ennemi dans des volutes éphémères. La cible subit 1d6 Stress et 1d3 Blessures. Vous soignez une quantité de Stress" +
            " et de Blessures égale à la moitié de la quantité infligée à la cible.",
        Surpuissance: "• [1] +1 Stress. • [2] +1 Blessure. • [3] Les dommages sont des Blessures mortelles."
    },
    {
        Id: 4,
        Nom: "Forme spectrale",
        CoûtPX: "15",
        SD: "7",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "la lumière qui vous entoure s'atténue, puis votre corps disparaît lui aussi peu à peu jusqu'à ce que vous ayez l'apparence d'un fantôme éthéré. Pendant que vous maintenez le pouvoir, vous" +
            " pouvez traverser librement des objets solides de toute nature, mais votre Vitesse est réduite de moitié. Vous devenez concrètement un fantôme, un être en décalage avec la réalité. Bien que vous" +
            " puissiez à la fois voir et être vu par le monde réel, vous ne pouvez en aucun cas interagir physiquement avec lui. La Forme spectrale est extrêmement éprouvante pour l'esprit. Vous subissez 1" +
            " Stress pour chaque Round où vous maintenez le pouvoir. Si vous revenez à votre forme normale alors que vous traversez un environnement dangereux, vous en subissez immédiatement les conséquences." +
            " Si vous revenez à votre vraie forme alors que vous traversez un objet solide, vous apparaissez dans un espace dégagé aléatoire à côté de l'objet et subissez 1d6 Blessures mortelles.",
        Surpuissance: "• [1] Votre Vitesse est normale. • [1] Il est possible de vous entendre quand vous parlez. • [3] Vous pouvez utiliser une Action complexe pour interagir avec des objets."
    },
    {
        Id: 5,
        Nom: "Régénération",
        CoûtPX: "15",
        SD: "8",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "",
        Effet: "votre corps est une extension du Warp lui-même. Vous ne faites qu'un avec le Warp, et vous avez le contrôle total du Warp comme de votre propre corps. Une fois ce pouvoir activé, vous pouvez" +
            " soigner les blessures à un rythme phénoménal. Avec le temps, il est même possible de faire repousser des membres ou des organes perdus. Tant que ce pouvoir est maintenu, vous soignez 1 Blessure par" +
            " Round. Si vous êtes au maximum de Blessures, vous soignez 1 Stress par Round. Si vous êtes au maximum de Stress et de Blessures, vous pouvez régénérer des parties entières du corps, bien que ce" +
            " processus soit beaucoup plus lent. Une petite partie du corps, comme un doigt ou un œil, peut être régénérée en une heure, mais régénérer un membre entier prend une journée entière (maintenir le pouvoir" +
            " si longtemps vous laissera Fatigué).",
        Surpuissance: "• [1] +1 Stress soigné par Round. • [2] +1 Blessure soignée par Round."
    },
    {
        Id: 6,
        Nom: "Remodelage charnel",
        CoûtPX: "20",
        SD: "6",
        Activation: "Action",
        Durée: "Maintien",
        Portée: "Lanceur",
        CiblesMultiples: "Non",
        MotsClés: "PSYCHIQUE",
        Prerequis: "au moins un autre pouvoir de Biomancie",
        Effet: "votre forme physique est entièrement soumise à votre volonté. Vous pouvez changer votre corps comme vous le souhaitez par la simple force de la pensée. Lorsque vous activez ce pouvoir," +
            " choisissez un des effets suivants. L'effet dure jusqu'à ce que vous arrêtiez de maintenir ce Pouvoir psychique. [Effet 1] Vous prenez l'apparence de tout individu dont la masse est à peu près" +
            " équivalente à la vôtre. Si vous essayez d'imiter une personne que vous avez rencontrée, vous pouvez modifier vos cordes vocales pour qu'elles correspondent aux siennes, tant que vous l'avez entendue" +
            " parler. Vous êtes biologiquement identique à ce que vous essayez d'imiter, mais vous devrez peut-être encore faire des Tests de Duperie (Soc) pour convaincre les gens que vous êtes bien ce que vous" +
            " prétendez être. [Effet 2] Vous modifiez votre corps avec une des options suivantes : Vous faites pousser des ailes qui permettent de voler librement à votre Vitesse normale ; Vous développez des branchies" +
            " qui vous immunisent contre la Condition Asphyxié lorsque vous respirez sous l'eau ; Vos mains et vos pieds deviennent palmés, et l'eau est alors considérée comme un terrain normal au lieu d'un terrain" +
            " difficile ; Vos cornées sont profondément modifiées pour vous conférer les mêmes avantages que des Lunettes infrarouges (p. 238) ; Votre peau se durcit et vous bénéficiez d'un bonus de Résistance de +4.",
        Surpuissance: "• [2] +1 de bonus aux Tests de Duperie pour imiter quelqu'un d'autre. • [5] Vous pouvez sélectionner une seconde modification corporelle lors de la transformation de votre corps."
    }
]