export const ListeArchetype = [
    /*Sœur Hospitalière*/
    {
        Id: 1,
        Nom: "Sœur Hospitalière",
        DescriptionCourte: "En tant que guérisseuse qui opère sur les champs de bataille, vous soignez aussi bien l'esprit que l'âme. Vous aidez les blessés avec une grande expertise médicale et inspirez les pieux avec votre foi inépuisable.",
        DescriptionLongue: "Lorsque les épidémies sévissent ou que le sang coule, chaque citoyen impérial prie pour que l'Empereur leur envoie une Sœur Hospitalière compétente et compatissante. Elles forment l'étreinte aimante de l'Empereur, " +
            "des femmes pieuses envoyées pour purifier les chairs purulentes et recoudre les plaies des fidèles. Devenir Sœur Hospitalière nécessite un dévouement total aux enseignements de l'Adepta Sororitas et un apprentissage méticuleux de" +
            " l'anatomie et de la physiologie. Elles étudient les cellules qui maintiennent le corps entier, ainsi que les façons dont cette biologie peut être maltraitée et annihilée. Même si elles se concentrent sur la noble pureté de la forme" +
            " humaine, elles étudient également la biologie des xenos pour détruire leur engeance répugnante. Leur expertise en Medicae et leur détermination en font des atouts inestimables pour percer les secrets de la biologie xenos, désarmer des" +
            " bombes chargées de neurotoxines et découvrir des techniques de torture non létales, mais atrocement douloureuses. Une Sœur Hospitalière remplit le double rôle vital de guérisseuse physique et spirituelle dans un groupe. Bien qu'elles" +
            " préfèrent généralement raccommoder les gens, elles sont aussi capables de les découper en morceaux. Les Sœurs de l'Ordre du Bouclier sanctifié se précipitent partout où le besoin d'aide médicale se fait sentir, au mépris des dangers" +
            " du système de Gilead, afin d'aider et d'enhardir les fidèles de l'Imperium. Elles sont donc vénérées par une grande partie de la population.",
        Tier: 1,
        Faction: 1,
        SousFaction: 1,
        Espèces: 1,
        CoûtPX: 24,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM, ADEPTA SORORITAS, [ORDRE]",
        Attributs: {
            ForceMentale: 3,
            Intelligence: 3
        },
        Compétences: {
            Connaissance: 1,
            Medicae: 1
        },
        AptitudeArchetype: "Compassion : +Double de votre Rang des bonus chaque fois que vous effectuez un Test de Medicae (Int) sur un personnage avec le Mot-clé IMPERIUM.",
        Equipement: "Instruments chirurgicaux, Habits de Sororitas, Exemplaire du Code des Sororitas",
        Armes: [
            {
                "Id": 7,
                "Nom": "Baïonnette tronçonneuse (montée au poignet)",
                "Description": "Au prix de l'augmentation spectaculaire du poids d'un fusil, une Baïonnette tronçonneuse peut offrir une fin rapide et sanglante à tous les ennemis qui se rapprochent de son porteur.",
                "Type": "Armes tronçonneuses",
                "PénétrationArmure": "-",
                "Dégâts": "(F) + 4",
                "DésDégâtsSupplémentaires": "3",
                "Portée": "-",
                "Rafale": "-",
                "Traits": "Brutal",
                "Valeur": "3",
                "Rareté": "Rare",
                "MotsClés": "TRONÇONNEUSE, IMPERIUM, CHAOS"
            },
            {
                "Id": 38,
                "Nom": "Pistolet laser",
                "Description": "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                "Type": "Armes Laser",
                "PénétrationArmure": "-",
                "Dégâts": "7",
                "DésDégâtsSupplémentaires": "1",
                "Portée": "6 / 12 / 18",
                "Rafale": "1",
                "Traits": "Fiable, Pistolet",
                "Valeur": "2",
                "Rareté": "Courant",
                "MotsClés": "LASER, IMPERIUM"
            }
        ],
        Armures: [
            {
                Id: 10,
                Nom: "Armure énergétique Sororitas",
                Description: "Fabriquée pour l'usage exclusif des Sœurs de bataille, l'Armure énergétique Sororitas est bénie et purifiée avec une grande ferveur religieuse pour protéger sa porteuse des hérétiques et des démons.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (2)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTA SORORITAS"
            }
        ],
        CoûtAttributConseil: 26,
        ForceConseil: 2,
        EndurenceConseil: 2,
        AgiliteConseil: 2,
        InitiativeConseil: 2,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 22,
        CompetenceConseil: {
            CapacitéDeCOmbat: 2,
            Connaissance: 2,
            Investigation: 1,
            Medicae: 3
        },
        PouvoirsPsychiques: [
            {
                "Nom": "Bouclier de la Foi",
                "CoutPX": 20,
                "Prerequis": "Mot-clé ADEPTA SORORITAS, Score de Force mentale 3+",
                "Effet": "votre croyance inexpugnable renforce votre esprit contre la sorcellerie Warp. Vous gagnez +1 Foi. En tant qu'Action de réaction, vous pouvez dépenser 1 Foi pour ignorer un pouvoir ou un effet psychique (y compris les Périls du Warp) jusqu'à la fin du Round. Vous pouvez dépenser un point de Foi supplémentaire pour accorder le même bonus à tous les alliés avec le mot-clé IMPERIUM dans un rayon de 15+Double de votre Rang mètres."
            }
        ],
        TallentConseil: [
            {
                Id: 52,
                Nom: "ORTHOPRAXIE",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "les litanies de Sa Sainte Parole sont profondément gravées dans votre mémoire. Vous pouvez réciter par cœur des hymnes et des prières à l'Empereur et les utiliser pour renforcer votre esprit. Comme Action simple, vous pouvez commencer à réciter mentalement des liturgies ecclésiastiques. Tant que vous sacrifiez votre Action simple de cette manière, vous gagnez un bonus de Force mentale de +1, pour un maximum de Rounds égal au double de votre Rang. Vous ne pouvez plus utiliser ce Talent tant que vous n'avez pas terminé un Repos."
            },
            {
                "Nom": "Par Sa Volonté",
                "CoutPX": 20,
                "Prerequis": "Mot-clé ADEPTUS MINISTORUM ou ADEPTA SORORITAS",
                "Effet": "la profondeur de votre foi vous permet de faire appel à l'Empereur-Dieu pour vous assister lorsque vous travaillez avec un autre de Ses enfants. Vous gagnez +1 Foi. Lorsque vous Aidez un personnage avec le Mot-clé IMPERIUM, vous ajoutez le triple du nombre de dés bonus si vous dépensez 1 Foi."
            }
        ],
        Influence: ""
    },
    /*Prêtre du Ministorum*/
    {
        Id: 2,
        Nom: "Prêtre du Ministorum",
        DescriptionCourte: "Vous prêchez et vous vous assurez de la bonne observance du Culte impérial. Vous exhortez les fidèles à exécuter Sa ForceMentale et enflammez les cœurs par vos discours passionnés.",
        DescriptionLongue: "Parangons de foi en l'Empereur, les Prêtres du Ministorum consacrent chaque seconde de leur existence à apporter toujours plus de gloire au Culte impérial. De nombreux membres de l'Ecclésiarchie croient être les" +
            " manifestations mortelles de la ForceMentale de l'Empereur-Dieu, créées pour démontrer Sa puissance, Ses triomphes et la sagesse de Son credo. Ceux qui assument le rôle de missionnaire voyagent dans de nouveaux mondes pour répandre le" +
            " Credo ou raviver la foi dans les communautés déchues. Chaque prêtre est une voix hurlante qui répand la juste parole de l'Empereur, extirpe la corruption au sein de sa congrégation et apporte un châtiment sévère à ceux qui ont failli" +
            " aux yeux de l'Empereur. N'importe quel citoyen impérial peut entendre l'appel de l'Empereur, offrir sa vie à l'Ecclésiarchie, devenir sanctifié et apprendre les mystères du Credo. Ce devoir n'est pas pris à la légère ; un Prêtre doit" +
            " suivre obstinément les innombrables obligations du Credo. Manquer à son devoir sacré est un péché apparenté à l'hérésie. Lorsque les Prêtres se rendent sur le champ de bataille, ils mènent la charge et revigorent leurs alliés avec des" +
            " hymnes et des litanies de haine ardente, armés uniquement d'armes légères et de leur foi. La position respectée d'un prêtre ouvre de nombreuses portes ; peu de citoyens pieux se détourneront d'un prêtre, car ce serait se détourner de la" +
            " lumière de l'Empereur-Dieu lui-même. Mais sous l'ombre déformée de la Grande Faille, certains citoyens du système de Gilead commencent à considérer les Prêtres comme des charlatans.",
        Tier: 1,
        Faction: 1,
        SousFaction: 3,
        Espèces: 1,
        CoûtPX: 12,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM",
        Attributs: {
            ForceMentale: 3
        },
        Compétences: {
            Connaissance: 1
        },
        AptitudeArchetype: "Discours enflammé : Vous pouvez prêcher la parole du Credo impérial en tant qu'Action gratuite une fois par combat. Vous et tous les alliés avec le Mot-clé IMPERIUM soignez (1d3+Rang) points de Stress.",
        Armes: [
            {
                "Id": 8,
                "Nom": "Épée tronçonneuse",
                "Description": "Malgré leur apparence brutale et leur rugissement rauque distinct, les épées tronçonneuses (parfois appelées « Lames tronçonneuses ») nécessitent de l'entraînement pour être maniées efficacement. Un duel entre deux porteurs d'Épée tronçonneuse entraînés est un spectacle qui vaut le détour : ces combattants sont capables de modifier la vitesse et la direction des chaînes dentelées pour contrer, parer et vaincre leur adversaire avec une grâce sauvage.",
                "Type": "Armes tronçonneuses",
                "PénétrationArmure": "-",
                "Dégâts": "(F) + 5",
                "DésDégâtsSupplémentaires": "4",
                "Portée": "-",
                "Rafale": "-",
                "Traits": "Brutal, Parade",
                "Valeur": "4",
                "Rareté": "Peu courant",
                "MotsClés": "TRONÇONNEUSE, AELDARI, IMPERIUM, CHAOS"
            },
            {
                "Id": 38,
                "Nom": "Pistolet laser",
                "Description": "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                "Type": "Armes Laser",
                "PénétrationArmure": "-",
                "Dégâts": "7",
                "DésDégâtsSupplémentaires": "1",
                "Portée": "6 / 12 / 18",
                "Rafale": "1",
                "Traits": "Fiable, Pistolet",
                "Valeur": "2",
                "Rareté": "Courant",
                "MotsClés": "LASER, IMPERIUM"
            },
            {
                "Id": 1,
                "Nom": "Couteau",
                "Description": "Du hachoir d'un boucher à grox au stylet d'un assassin, de nombreuses petites armes blanches peuvent être qualifiées de « Couteaux ». Cela inclut toutes les lames qui peuvent être fixées à une arme comme une baïonnette.",
                "Type": "Armes de mêlée",
                "PénétrationArmure": "-",
                "Dégâts": "(F) + 2",
                "DésDégâtsSupplémentaires": "2",
                "Portée": "Lancer (F) x 4",
                "Rafale": "-",
                "Traits": "-",
                "Valeur": "2",
                "Rareté": "Courant",
                "MotsClés": "LAME, [AU CHOIX]"
            }
        ],
        Equipement: "Rosarius, Robes du Ministorum, Kit de missionnaire",
        CoûtAttributConseil: 26,
        ForceConseil: 1,
        EndurenceConseil: 2,
        AgiliteConseil: 2,
        InitiativeConseil: 2,
        ForceMentaleConseil: 3,
        Intelligncve: 2,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 32,
        CompetenceConseil: {
            CapacitéDeCombat: 2,
            CapacitéDeTir: 2,
            Commandement: 2,
            Connaissance: 2,
            Intimidation: 1,
            Psychologie: 1,
            Vigilance: 2
        },
        PouvoirsPsychiques: [
            {
                "Nom": "Repentance !",
                "CoutPX": 20,
                "Prerequis": "Mot-clé ADEPTUS MINISTORUM ou ADEPTA SORORITAS, Score de Force mentale 3+",
                "Effet": "la droiture de votre indignation résonne aux oreilles de ceux qui sont fidèles au Culte impérial. Vous gagnez +1 Foi. Vous pouvez tenter de forcer un autre adepte du Culte impérial à se repentir par la force de votre ForceMentale. Dépensez 1 Foi et effectuez un Test opposé d'Intimidation (FM) contre votre cible avec +Rang dés bonus. Si vous êtes en combat, cela prend une Action de combat. Si vous réussissez le Test et que la cible a le Mot-clé IMPERIUM, elle s'agenouille et se repent durant une période de Double de votre Rang x 10 secondes."
            },
            {
                "Nom": "Au Nom de l'Empereur",
                "CoutPX": 20,
                "Prerequis": "Mot-clé ADEPTUS MINISTORUM ou ADEPTA SORORITAS, Score de Connaissance 1+",
                "Effet": "vous avez passé du temps à étudier les écrits sacrés du Culte Imperialis et pouvez invoquer des passages sacrés pour influencer les autres. Vous gagnez +1 Foi. Chaque fois que vous ciblez un personnage avec le Mot-clé IMPERIUM avec un Test de Persuasion ou de Commandement, vous pouvez dépenser 1 Foi pour ajouter +Double de votre Rang dés bonus à votre réserve."
            }
        ],
        TallentConseil: [
            {
                Id: 28,
                Nom: "FLAGELLANT",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous consacrez votre souffrance au service de l'Empereur. Au début de chaque journée, vous devez passer 20 minutes (norme de Terra) en prière et vous infliger des Blessures égales à votre Tier par autoflagellation. Vous ne pouvez pas faire de jet de Détermination contre ces Blessures ou permettre qu'elles soient soignées autrement que par un Repos. Tant que vous êtes blessé de cette manière, vous gagnez +Rang dés bonus à vos jets de Détermination et de Conviction et pouvez choisir de devenir Frénétique (p. 199) en tant qu'Action de combat. Si vous possédez également le Talent Frénésie, vous pouvez devenir Frénétique avec une Action simple. Si vous ne parvenez pas à vous flageller, la honte vous envahit et vous subissez une pénalité de +2 SD à tous les Tests jusqu'à ce que vous flagelliez à nouveau."
            }
        ],
        Influence: ""
    },
    /*Garde Impéria*/
    {
        Id: 3,
        Nom: "Garde Impérial",
        DescriptionCourte: "Fantassin de la plus grande armée de la galaxie, vous faites partie des milliards de nouvelles recrues entraînées à se dresser et à se battre contre les monstrueux ennemis de l'Humanité.",
        DescriptionLongue: "Citoyens arrachés aux planètes à travers l'étendue stupéfiante de l'Imperium, les membres de l'Astra Militarum doivent tous survivre à un entraînement brutal pour se préparer à leur destinée : la guerre. Armées d'armes produites" +
            " en série et envoyées dans toute la galaxie sur de gigantesques vaisseaux interstellaires, les innombrables vagues de la Garde impériale combattent les xenos et les hérétiques tel le marteau de l'Empereur. Un humain moyen n'est pas à la hauteur" +
            " d'un Ork déchaîné, d'un Psyker Aeldari sournois ou d'une monstrueuse bio-forme tyranide. Même ceux qui sont bien entraînés et armés ne peuvent espérer rivaliser avec les horreurs auxquelles ils sont confrontés. Faire face à de tels cauchemars" +
            " s'apparente à de la folie. Et pourtant, tous les frères et sœurs d'armes de la Garde se tiennent au coude à coude dans tout l'Imperium. L'Astra Militarum proclame fièrement que leur force face à de tels dangers est leur bravoure inspirée directement" +
            " par l'Empereur. Les origines d'un Garde varient ; sa filiation n'a aucun rapport avec sa capacité à tenir bon et à tirer avec un Fusil laser. Chaque planète impériale fournit une dîme de guerriers pour remplacer les pertes constantes. Pour certains," +
            " c'est un honneur. Pour d'autres, c'est une condamnation à mort. Chacun gère à sa manière les cicatrices physiques et mentales. Certaines âmes aigries donnent la mort et attendent la leur avec résignation, tandis que d'autres développent un sens de" +
            " l'humour morbide ou ont recours à des drogues illicites pour tenir leurs démons à distance. Bien que les membres les plus pieux de la Garde le nieraient, peu y réfléchiraient à deux fois avant de prendre un travail qui les libérerait de leur devoir" +
            " et du cycle sans fin de la guerre et de la mort. Les agents inquisitoriaux et autres hauts fonctionnaires prennent souvent des vétérans qualifiés comme gardes du corps. Tout être vivant avec une formation militaire est très précieux dans le système" +
            " de Gilead.",
        Tier: 1,
        Faction: 1,
        SousFaction: 2,
        Espèces: 1,
        CoûtPX: 6,
        MotsClés: "IMPERIUM, ASTRA MILITARUM, [RÉGIMENT]",
        Attributs: "",
        Compétences: {
            CapacitéDeTir: 2
        },
        AptitudeArchetype: "Attention, chef ! : Vous avez été entraîné à vous sacrifier pour sauver vos alliés. Une fois par combat, vous pouvez effectuer une Action de réaction pour vous déplacer jusqu'à la moitié de votre Vitesse et bloquer toute attaque" +
            " qui touche un allié. L'attaquant lance ensuite un jet contre votre Résistance au lieu de celle de votre allié et peut vous infliger des Blessures. Votre Rang s'ajoute à votre Résistance pour calculer ces dégâts.",
        Equipement: "Kit de ration du Munitorum, Trousse de toilette, Exemplaire du Manuel d'édification du fantassin impérial, 3 Rations de survie",
        Armes: [
            {
                "Id": 35,
                "Nom": "Fusil laser",
                "Description": "Les Fusils laser sont les armes les plus fabriquées et les plus modifiées de l'Humanité. Alors que le modèle standard de masse du Fusil laser peut être trouvé dans tout l'Imperium, il existe d'innombrables variantes.",
                "Type": "Armes Laser",
                "PénétrationArmure": "-",
                "Dégâts": "7",
                "DésDégâtsSupplémentaires": "1",
                "Portée": "12 / 24 / 36",
                "Rafale": "2",
                "Traits": "Fiable, Tir rapide (1)",
                "Valeur": "3",
                "Rareté": "Courant",
                "MotsClés": "LASER, IMPERIUM"
            },
            {
                "Id": 1,
                "Nom": "Couteau",
                "Description": "Du hachoir d'un boucher à grox au stylet d'un assassin, de nombreuses petites armes blanches peuvent être qualifiées de « Couteaux ». Cela inclut toutes les lames qui peuvent être fixées à une arme comme une baïonnette.",
                "Type": "Armes de mêlée",
                "PénétrationArmure": "-",
                "Dégâts": "(F) + 2",
                "DésDégâtsSupplémentaires": "2",
                "Portée": "Lancer (F) x 4",
                "Rafale": "-",
                "Traits": "-",
                "Valeur": "2",
                "Rareté": "Courant",
                "MotsClés": "LAME, [AU CHOIX]"
            }
        ],
        Armures: [
            {
                Id: 4,
                Nom: "Gilet pare-balles",
                Description: "Composée de couches de matériaux absorbant les chocs, la surface ablative du Gilet pare-balles est particulièrement résistante aux éclats de shrapnel et aux explosions.",
                Ar: "3",
                Effet: "",
                Traits: "-",
                Valeur: "4",
                Rareté: "Courant",
                MotsClés: "PARE-BALLES, IMPERIUM, ASTRA MILITARUM"
            }
        ],
        CoûtAttributConseil: 48,
        ForceConseil: 3,
        EndurenceConseil: 3,
        AgiliteConseil: 3,
        InitiativeConseil: 3,
        ForceMentaleConseil: 2,
        Intelligncve: 1,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 18,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeCombat: 1,
            CapacitéDeTir: 3,
            Survie: 1,
            Vigilance: 1
        },
        TallentConseil: [
            {
                Id: 20,
                Nom: "DUR À CUIRE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "Vous êtes difficile à tuer. Lorsque vous subissez plus de Blessures que votre Maximum de blessures, vous n'êtes pas Mourant. Faites un jet sur le Tableau des blessures de guerre et soignez 1 Blessure. Vous ne pouvez plus réutiliser ce Talent jusqu'à votre prochain Rassemblement."
            },
            {
                Id: 33,
                Nom: "HUMOUR NOIR",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous arrivez à trouver de l'humour dans les situations les plus désespérées, et vous pouvez vous en servir pour renforcer la détermination de vos alliés. Vous pouvez effectuer une Action simple pour faire une blague sinistre chaque fois que vous êtes Blessé ou souffrez d'une Condition, tant que vous êtes encore capable de parler. Faites un Test d'Attribut de Sociabilité SD 2. Si vous réussissez, vous et tous les alliés qui peuvent vous entendre récupérez un nombre de points de Stress égal à votre Rang plus le nombre d'Icônes obtenues."
            },
            {
                Id: 74,
                Nom: "TIR DE PRÉCISION",
                CoûtPX: 20,
                Prerequis: "Score de Capacité de Tir 2+",
                Effet: "vous êtes un tireur hors pair capable de cibler avec précision les points faibles de vos ennemis. Lorsque vous effectuez l'action Viser (p. 189) et effectuez un Tir ciblé (p. 186), le bonus de DS que vous recevez est doublé."
            }
        ],
        Influence: ""
    },
    /*Acolyte de l'Inquisition*/
    {
        Id: 4,
        Nom: "Acolyte de l'Inquisition",
        DescriptionCourte: "Enrôlé pour aider un Inquisiteur, vous identifiez et détruisez les menaces contre l'Imperium.",
        DescriptionLongue: "Combattant de première ligne dans la lutte pour l'âme de l'Empereur, chaque Acolyte rend compte à un membre supérieur de l'Inquisition. Certains sont chargés d'enquêter ou de purger des cellules de cultistes, tandis que d'autres" +
            " ont carte blanche pour nettoyer l'Imperium des xenos, des sorciers et des hérétiques. Chaque Acolyte possède une combinaison unique de compétences, d'équipements et d'expériences de vie. Il n'y a pas de processus de recrutement formalisé : chaque" +
            " fois qu'un Inquisiteur trouve une personne prometteuse ou a simplement besoin de plus de bras pour mettre en œuvre ses grands projets, il embauche un Acolyte. L'autorité illimitée des Inquisiteurs leur permet d'initier n'importe qui, d'un pèlerin" +
            " ayant la force spirituelle pour déraciner l'hérésie et la résolution de s'y opposer, à un ouvrier du manufactorum avec un talent pour remarquer les détails et connaissant bien la région. Certains ont survécu à des rencontres avec des démons ou des" +
            " xenos ; ces individus capables d'assumer des missions dangereuses n'ont alors pas besoin d'être exécutés pour préserver le secret de la mission sacrée de l'Inquisition. Ceux qui impressionnent leur Inquisiteur (ou restent en vie assez longtemps)" +
            " reçoivent une formation martiale, académique ou psychologique. Ils apprennent à fortifier leur esprit contre la tentation, à comprendre leurs ennemis et à torturer ou manipuler des sujets pour extraire des aveux et des informations précieuses." +
            " L'apparition de la Grande Faille a augmenté le rythme de recrutement des Acolytes. L'Inquisition a plus que jamais besoin de troupes pour mener sa croisade sacrée. Certains opportunistes cherchent à profiter de ces temps difficiles et utilisent" +
            " la nature secrète de l'Inquisition pour se faire passer pour des Acolytes, afin d'accaparer richesse et statut. La méfiance et la peur des civils face à un Acolyte de l'Inquisition ont de ce fait redoublé.",
        Tier: 1,
        Faction: 1,
        SousFaction: 4,
        Espèces: 1,
        CoûtPX: 6,
        MotsClés: "IMPERIUM, INQUISITION, [AU CHOIX], [ORDO]",
        Attributs: "",
        CompétencesInfos: "Augmentez une Compétence de votre choix à 2",
        AptitudeArchetype: "Décret de l'Inquisition : Vous pouvez invoquer le nom de votre Inquisiteur pour gagner +Rang des bonus pour n'importe quel Test de compétence sociale lorsque vous interagissez avec un individu avec le Mot-clé IMPERIUM. Vous ne" +
            " pouvez utiliser cette Aptitude qu'une seule fois par scène.",
        Equipement: "deux armes IMPERIUM d'une valeur de 5 ou moins et d'une Rareté Peu courant ou inférieure, Symbole d'autorité",
        Armures: [
            {
                Id: 4,
                Nom: "Gilet pare-balles",
                Description: "Composée de couches de matériaux absorbant les chocs, la surface ablative du Gilet pare-balles est particulièrement résistante aux éclats de shrapnel et aux explosions.",
                Ar: "3",
                Effet: "",
                Traits: "-",
                Valeur: "4",
                Rareté: "Courant",
                MotsClés: "PARE-BALLES, IMPERIUM, ASTRA MILITARUM"
            }
        ],
        CoûtAttributConseil: 42,
        ForceConseil: 2,
        EndurenceConseil: 3,
        AgiliteConseil: 2,
        InitiativeConseil: 2,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 50,
        CompetenceConseil: {
            Athlétisme: 1,
            CapacitéDeTir: 2,
            Connaissance: 1,
            Intimidation: 1,
            Investigation: 3,
            Psychologie: 3
        },
        TallentConseil: [
            {
                Id: 76,
                Nom: "VIGILANT",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous ne baissez jamais la garde. Vous gagnez +Double de votre Rang à votre Vigilance passive."
            },
            {
                Id: 41,
                Nom: "LECTURE SUR LES LÈVRES",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "Vous avez appris à lire sur les lèvres. Le MJ peut demander un Test de Vigilance (Int) pour lire avec succès sur les lèvres en fonction de l'environnement, de l'espèce du locuteur et de la langue parlée. Le SD par défaut est de 3 et peut être modifié au gré du MJ."
            },
            {
                Id: 79,
                Nom: "Identité secrète",
                CoûtPX: 20,
                Prerequis: "Mots-clé INQUISITION",
                Effet: "vous conservez une identité secrète qui vous permet de voyager dans l'Imperium sans vous faire remarquer.Travaillez avec votre MJ pour définir votre identité secrète.Vous pourriez être un petit noble d'un système lointain, un marchand ambulant à peine connu des dossiers de l'Administratum, ou un membre de l'Administratum faisant une enquête. Il peut être utile de sélectionner un ou deux Mots-clés relatifs à votre identité secrète.Votre identité a été bien établie à l'aide de ressources inquisitoriales. Cela peut vous apporter des avantages lorsque vous traitez avec certains types de personnes.Si votre identité secrète est contestée, vous devez effectuer un Test de Duperie(Soc) pour maintenir l'illusion."
            }
        ],
        Influence: ""
    },
    /*Sage de l'Inquisition*/
    {
        Id: 5,
        Nom: "Sage de l'Inquisition",
        DescriptionCourte: "Bureaucrate savant, vous êtes expert dans la recherche et l'application judicieuse des connaissances pour servir l'Imperium et vos propres fins.",
        DescriptionLongue: "Les Inquisiteurs et les Acolytes sont de redoutables enquêteurs qui traquent sans relâche les cultistes et les xenos mal intentionnés, mais leur formation ne leur permettra jamais de retenir les innombrables informations qui" +
            " reposent au sein de l'immense bureaucratie de l'Adeptus Terra. L'Adeptus Administratum est chargé de rassembler des rapports de tous les coins de la galaxie. Ses rangs se composent d'une infinité de scribes et de greffiers qui transcrivent," +
            " archivent et récupèrent de grandes quantités de données. Cela comprend des milliards de parchemins, de tablettes de données et de caches d'informations, les rapports de mouvements de troupes, les quantités d'armes dans chaque dépôt et la dîme" +
            " d'un million de mondes. Les Sages de l'Inquisition s'appliquent sans relâche au milieu de cette bibliothèque incroyablement vaste, à la recherche du grain de vérité qui permettra à un Inquisiteur de traquer sa proie. Avant leur recrutement," +
            " certains ont découvert des vérités hérétiques et attiré l'attention de l'Inquisition, qui cherche à empêcher la divulgation d'informations prohibées dans tout l'Imperium. Lorsqu'ils sont impliqués dans une mission inquisitoriale, ces érudits" +
            " découvrent des détails qui apportent une meilleure compréhension des projets d'hérétiques ou de xenos qui ont projeté leur influence dans tout un secteur pendant des siècles. Les Sages sont des agents de l'ombre qui permettent à un Inquisiteur" +
            " d'évoluer efficacement dans les rouages de la bureaucratie impériale.",
        Tier: 1,
        Faction: 1,
        SousFaction: 4,
        Espèces: 1,
        CoûtPX: 16,
        MotsClés: "ADEPTUS ADMINISTRATUM, IMPERIUM, INQUISITION, [ORDO]",
        Attributs: {
            Intelligence: 3
        },
        Compétences: {
            Connaissance: 2
        },
        AptitudeArchetype: "Archives de l'Administratum : Vous êtes particulièrement habile à naviguer dans la bureaucratie complexe de l'Imperium. Vous gagnez +Rang dés bonus chaque fois que vous effectuez un Test pour collecter des informations auprès" +
            " de sources impériales, généralement lors de Tests d'Influence ou d'Investigation (Int).",
        Equipement: "Robes de l'Administratum, Plume automatique, Tablette de données, 3 Parchemins de documents anciens",
        Armes: [
            {
                "Id": 38,
                "Nom": "Pistolet laser",
                "Description": "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                "Type": "Armes Laser",
                "PénétrationArmure": "-",
                "Dégâts": "7",
                "DésDégâtsSupplémentaires": "1",
                "Portée": "6 / 12 / 18",
                "Rafale": "1",
                "Traits": "Fiable, Pistolet",
                "Valeur": "2",
                "Rareté": "Courant",
                "MotsClés": "LASER, IMPERIUM"
            },
            {
                "Id": 1,
                "Nom": "Couteau",
                "Description": "Du hachoir d'un boucher à grox au stylet d'un assassin, de nombreuses petites armes blanches peuvent être qualifiées de « Couteaux ». Cela inclut toutes les lames qui peuvent être fixées à une arme comme une baïonnette.",
                "Type": "Armes de mêlée",
                "PénétrationArmure": "-",
                "Dégâts": "(F) + 2",
                "DésDégâtsSupplémentaires": "2",
                "Portée": "Lancer (F) x 4",
                "Rafale": "-",
                "Traits": "-",
                "Valeur": "2",
                "Rareté": "Courant",
                "MotsClés": "LAME, [AU CHOIX]"
            }
        ],
        CoûtAttributConseil: 32,
        ForceConseil: 1,
        EndurenceConseil: 1,
        AgiliteConseil: 2,
        InitiativeConseil: 2,
        ForceMentaleConseil: 3,
        Intelligncve: 4,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 24,
        CompetenceConseil: {
            CapacitéDeTir: 1,
            Connaissance: 3,
            Duperie: 1,
            Investigation: 2,
            Technomaîtrise: 1,
            Vigilance: 2
        },
        TallentConseil: [
            {
                Id: 18,
                Nom: "DÉDUCTION",
                CoûtPX: 20,
                Prérequis: "Score d'Intelligence 3+",
                Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
            },
            {
                Id: 71,
                Nom: "SUPPLICATION",
                CoûtPX: 20,
                Prerequis: "Humain",
                Effet: "vous connaissez votre place et savez comment utiliser le système féodal impérial à votre avantage. Vous gagnez +Rang dés bonus chaque fois que vous faites appel à l'un de vos supérieurs sociaux, comme un gouverneur planétaire ou un officier supérieur. Si votre comportement s'écarte de quelque manière que ce soit des normes sociales acceptées de l'Imperium, votre MJ peut refuser ce bonus."
            },
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            }
        ],
        Influence: "+1"
    },
    /*Ganger*/
    {
        Id: 6,
        Nom: "Ganger",
        DescriptionCourte: "Rebut de la société impériale, votre vie est pleine de violence et de difficultés. Votre identité est associée à un gang territorial, un reflet brutal de la vie dans la roche inférieure.",
        DescriptionLongue: "La vie dans l'Imperium est un combat de chaque instant pour sa survie, mais l'union fait la force. Des citoyens surmenés se regroupent, sortent des bidonvilles et des égouts et prennent ce qu'ils peuvent par la menace ou la" +
            " violence. Un Ganger se bat pour sa nouvelle famille. Bien que certains brisent la Pax Imperialis pour le profit, beaucoup sont des citoyens normaux qui prennent les armes pour obtenir justice. Les Chiens de la rouille se battent pour le contrôle" +
            " d'une raffinerie de prométhium sur Avachrus, tandis que les Crocs fervents d'Enoch organisent des rackets contre protection et des réseaux de drogue pour financer leurs chasses aux sorcières. Tout peut unir un gang : la ferveur religieuse," +
            " l'injustice sociale, la passion pour la technologie. Ceux qui survivent assez longtemps développent des traditions, des rituels d'initiation et des signes d'identification. Les classes inférieures ont l'habitude de lutter pour leur survie." +
            " Beaucoup volent leur équipement ou reconstruisent des objets à partir de pièces détachées pour en faire des armes. Certains gangs sont si petits qu'ils pourraient tous être tués lors d'un seul échange de tirs en centre-ville. D'autres sont" +
            " suffisamment importants et influents pour influencer secrètement la politique d'une planète. Les Gangers sautent sur n'importe quelle occasion pour améliorer leur position, quitte à abandonner leur ancienne « famille ». Les contrebandiers," +
            " les assassins et les chasseurs de primes sont souvent d'anciens Gangers, embauchés chaque fois que la noblesse, des Inquisiteurs ou des Libres Marchands ont besoin d'un contact dans le monde criminel. Si leur fourberie, leur ruse et leur soif" +
            " de violence impressionnent leur nouvel employeur, ils pourraient même obtenir un emploi plus permanent.",
        Tier: 1,
        Faction: 1,
        SousFaction: 9,
        Espèces: 1,
        CoûtPX: 2,
        MotsClés: "RACAILLES, [AU CHOIX]",
        Attributs: "",
        Compétences: {
            Ruse: 1
        },
        AptitudeArchetype: "Débrouillard : Votre vie de miséreux vous a rendu apte à trouver des pièces de rechange et du matériel dans les endroits les plus improbables. Vous gagnez +Rang dés bonus pour les Tests de Ruse (Soc). Une fois par session," +
            " vous pouvez faire un Test d'Influence ou de Ruse pour acquérir un objet, représentant une situation pour laquelle vous vous teniez prêt.",
        Equipement: "Couteau ou Épée, Sac de couchage, Gourde, couleurs du gang, un des objets suivants : un Pistolet laser ou un Pistolet mitrailleur ou un Canon de poing ou un Revolver",
        CoûtAttributConseil: 42,
        ForceConseil: 2,
        EndurenceConseil: 3,
        AgiliteConseil: 2,
        InitiativeConseil: 3,
        ForceMentaleConseil: 2,
        Intelligncve: 1,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 32,
        CompetenceConseil: {
            CapacitéDeCombat: 2,
            CapacitéDeTir: 2,
            Duperie: 1,
            Furtivité: 1,
            Investigation: 1,
            Ruse: 3,
            Survie: 1,
            Vigilance: 1
        },
        TallentConseil: [
            {
                Id: 59,
                Nom: "QUELCONQUE",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous ne marquez pas les esprits et vous vous fondez facilement dans la foule. Les personnages d'une classe sociale supérieure avec le Mot-clé IMPERIUM, tels que les gouverneurs planétaires, la noblesse impériale ou les propriétaires de manufactorum, vous ignorent complètement à moins que vous n'attiriez une attention excessive sur vous-même. Toute personne essayant de vous remarquer ou de vous suivre dans une zone surpeuplée, ou essayant de se souvenir de votre visage, subit +2 SD."
            },
            {
                Id: 66,
                Nom: "RUCHIER",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous avez l'habitude d'évoluer dans les environnements urbains de l'Imperium. Vous gagnez +Rang dés bonus à tous les Tests de Furtivité (A) ou de Survie (FM) lorsque vous vous déplacez dans des environnements urbains."
            },
            {
                Id: 17,
                Nom: "COUP BAS",
                CoûtPX: 20,
                Prérequis: "",
                Effet: "vous maîtrisez l'art du combat déloyal. Chaque fois que vous effectuez une Attaque déstabilisante (p. 190) et que vous Convertissez 2 Icônes exaltées, vous pouvez infliger à votre cible une Condition supplémentaire. Choisissez la Condition la plus appropriée du point de vue narratif parmi les options suivantes : À terre (p. 199), Aveuglé (p. 199), Entravé (p. 199), Secoué (p. 200)"
            }
        ],
        Influence: "+1"
    },
    /*Corsaire*/
    {
        Id: 7,
        Nom: "Corsaire",
        DescriptionCourte: "Pirate de l'espace et exilé autoproclamé de votre espèce. Vous pillez et combattez pour de l'argent, et votre vie exaltante vous permet de ressentir chaque sensation et émotion imaginable.",
        DescriptionLongue: "Les Corsaires sont des opportunistes qui parcourent les étoiles à bord de petits vaisseaux rapides et qui privilégient les actions rapides et agressives. Opérant en bandes soudées par la camaraderie, ils s'attaquent à n'importe" +
            " quelle proie pour satisfaire leur recherche de sensations fortes. Pleins de panache et libérés des contraintes des Vaisseaux-mondes, les Corsaires assument toute la profondeur de leurs émotions. Ils prennent le risque de mourir ou d'être consommés" +
            " par l'Assoiffée pour assouvir leur envie de voyages et parcourent la galaxie à leur guise dans une quête de nouvelles expériences. Leurs actions et motivations sont indéniablement inhumaines, mais elles sont au moins compréhensibles par rapport" +
            " à la dépravation des Drukhari avec lesquels ils sont souvent confondus. Les bandes de Corsaires varient considérablement en apparences, en tactiques et en motivations. Certains attaquent pour le frisson du combat et profitent pleinement des combats," +
            " équipés de technologies Aeldari avancées et de matériel rare et volé. D'autres sont plus matérialistes et peuvent même devenir des mercenaires. Bien que généralement nomades, les bandes de Corsaires ont des bases d'opérations ; le repaire de la" +
            " Princesse d'émeraude a notamment échappé à l'Ordo Xenos pendant des décennies. En effet, les Inquisiteurs s'attendaient à ce que la bande de Corsaires se déplace vers de plus verts pâturages, jusqu'à ce qu'elle soit elle aussi piégée dans le" +
            " système de Gilead par la Grande Faille. La Grande Faille a offert de nombreuses opportunités pour les raids de Corsaires sur des infrastructures impériales totalement paralysées ; les vaisseaux voyageant entre les Mondes du noyau emploient souvent" +
            " des Équipes d'extermination pour repousser les Corsaires. Certains de ceux-ci se sont plutôt tournés contre les hordes envahissantes du Chaos qui pénètrent dans leur territoire. Les rumeurs abondent selon lesquelles la dynastie Varonius serait en" +
            " collusion avec la reine Corsaire Ferianwyr et des Corsaires isolés aideraient les agents humains du Libre Marchand. Il suffirait d'exprimer cette simple idée pour être accusé d'hérésie par l'Ordo Xenos, mais certains radicaux pensent qu'en ces temps" +
            " sombres, l'humanité ne peut se détourner d'aucun allié potentiel.",
        Tier: 1,
        Faction: 2,
        SousFaction: 11,
        Espèces: 2,
        CoûtPX: 16,
        MotsClés: "AELDARI, ANHRATHE, [COTERIE]",
        Attributs: {
            Agilité: 3
        },
        Compétences: {
            Athlétisme: 2
        },
        AptitudeArchetype: "Sur le fil du rasoir : Vous vous jetez dans le danger au mépris de toute prudence, afin de mieux cacher vos peurs ancestrales. Vous gagnez +Rang des bonus chaque fois que vous effectuez ou résistez à une Attaque déstabilisante" +
            " d'Athlétisme (F) ou de Persuasion (Soc). Vous subissez une pénalité de +1 SD aux Tests de Peur.",
        Equipement: "Pierre-esprit, 3 Grenades à plasma, Combinaison spatiale",
        Armes: [
            {
                "Id": 8,
                "Nom": "Pistolet shuriken",
                "Description": "Avec leur facilité d'utilisation et leur recul quasi inexistant, les Pistolets shuriken sont prisés par les Aeldari qui cherchent une rapide victoire grâce à une rafale précise de shurikens à courte portée.",
                "Type": "Armes à distance Aeldari",
                "Degats": "10",
                "DS": "1",
                "PA": "-",
                "Portee": "6 / 12 / 18",
                "Rafale": "2",
                "Traits": "Pistolet, Perforant (3)",
                "Valeur": "6",
                "Rarete": "Rare",
                "MotsCles": "SHURIKEN, AELDARI, ASURYANI"
            },
            {
                "Id": 5,
                "Nom": "Éclateur laser",
                "Description": "Ces armes d'assaut laser utilisent des prismes de cristal à harmonisation psychique pour concentrer des faisceaux brillants de lumière le long de leurs barils réfléchissants. Lorsqu'ils sont déchargés, ils traversent leurs cibles dans un élégant spectacle lumineux de mort et de destruction.",
                "Type": "Armes à distance Aeldari",
                "Degats": "7",
                "DS": "1",
                "PA": "-",
                "Portee": "12 / 24 / 36",
                "Rafale": "4",
                "Traits": "Assaut",
                "Valeur": "5",
                "Rarete": "Très rare",
                "MotsCles": "LASER, AELDARI"
            }
        ],
        Armures: [
            {
                "Id": 1,
                "Nom": "Armure Corsaire",
                "Description": "Cette armure est composée de mailles scintillantes et de plaques de moelle spectrale polie. Toujours intimidantes et somptueuses, elles prennent des formes aussi variées que les Corsaires qui les portent.",
                "Ar": "3",
                "Effet": "",
                "Traits": "-",
                "Valeur": "4",
                "Rareté": "Rare",
                "MotsClés": "LÉGÈRE, AELDARI, ANHRATE"
            }
        ],
        CoûtAttributConseil: 46,
        ForceConseil: 2,
        EndurenceConseil: 2,
        AgiliteConseil: 4,
        InitiativeConseil: 4,
        ForceMentaleConseil: 1,
        Intelligncve: 2,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 18,
        CompetenceConseil: {
            Athlétisme: 3,
            CapacitéDeCombat: 1,
            CapacitéDeTir: 2,
            Pilotage: 1,
            Vigilance: 1
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 42,
                Nom: "LEG DE TRISTESSE",
                CoûtPX: 20,
                Prerequis: "Espèce : Aeldari",
                Effet: "La longue et triste histoire de votre peuple pèse lourdement sur votre cœur. Mais loin de vous apitoyer, vous êtes plus déterminé et enhardi que jamais. Vous ne subissez plus le malus de l'Aptitude d'espèce Émotions intenses (p. 29). Le groupe gagne +1 Gloire chaque fois que vous récupérez de l'état Mourant."
            },
            {
                Id: 75,
                Nom: "TOUCHÉ PAR LE DESTIN",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "la chance est toujours de votre côté, même lorsque l'équipement ou la foi peuvent faiblir. Vous commencez chaque session avec +Rang points de Fureur."
            }
        ],
        Influence: ""
    },
    /*Boy Ork*/
    {
        Id: 8,
        Nom: "Boy Ork",
        DescriptionCourte: "Une créature massive et brutale qui ne vit que pour se battre. Vous êtes un colosse violent et anarchiste né pour la guerre.",
        DescriptionLongue: "La marée terrifiante de créatures vertes connue sous le nom de WAAAGH! est composée de Boyz, les Orks les plus communs. Peu de Boyz connaissent autre chose que la guerre, et cela leur convient tout à fait. Plus grand et plus fort" +
            " qu'un humain en tous points de vue, un seul Ork peut submerger toute une foule sans effort. Les Boyz recherchent constamment la violence et se battent entre eux s'ils ne trouvent aucun ennemi plus alléchant. Bien que faisant partie d'un clan, chaque" +
            " Boy possède sa propre apparence bricolée à partir de détritus et de bidules variés. Leurs armes improvisées sont fabriquées à partir de ferraille, mais les Orks adorent leurs constructions absurdes, à condition qu'elles se révèlent aussi meurtrières" +
            " que possible. Les armes à feu sont appréciées pour leur taille et leur dakka (ou cadence de tir) plutôt que pour leur précision. Les haches et massues les plus grosses, les plus lourdes et les plus grossières sont les meilleures. Les Orks sont plus" +
            " que satisfaits de faire la guerre aux hordes démoniaques qui se déversent à travers la Grande Faille, mais si cette bataille se termine, ils se retourneront sûrement contre les Mondes du noyau. Une petite troupe de Blood Axes est devenue incontrôlable" +
            " et détruit de nombreux avant-postes impériaux en marge du système de Gilead. Certains opportunistes ont tenté de les embaucher comme mercenaires, et bien qu'ils aient réussi certaines missions, aucun employeur ne leur a survécu. La légende raconte" +
            " qu'un trésor de dents et d'artefacts Orks est enterré quelque part dans le système, soi-disant protégé par l'esprit de Sainte Julyana Gilead, et beaucoup ont l'intention d'aller réclamer ce butin.",
        Tier: 1,
        Faction: 4,
        SousFaction: 12,
        Espèces: 3,
        CoûtPX: 26,
        MotsClés: "ORK, [CLAN]",
        Attributs: {
            Force: 3,
            Endurance: 3
        },
        Compétences: {
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Au Kontact : Vous gagnez +Rang des bonus aux attaques de mêlée pour chaque allié engagé avec la même cible que vous.",
        Equipement: "Vêtements déchirés",
        Armes: [
            {
                Id: 10,
                Nom: "Fling'",
                Description: "Le type d'arme à feu Ork le plus courant. Ces fusils encombrants fabriqués avec de la ferraille sont à mi-chemin entre un gourdin et une arme automatique. Ils vomissent des murs de balles imprécis et de gros calibre avec une détonation assourdissante souvent appelée « Dakka » par leurs propriétaires peaux-vertes.",
                Type: "Armes à distance Orks",
                Degats: "1",
                PenetrationArmure: "-",
                Portee: "9 / 18 / 27",
                Rafale: "2",
                Traits: "Assaut, Waaagh!",
                Valeur: "4",
                Rarete: "Peu courant",
                MotsCles: "PROJECTILE, ORK"
            },
            {
                Id: 6,
                Nom: "Kikoup'",
                Description: "Souvent la première arme qu'un jeune Ork tient dans ses mains, les Kikoup' sont de simples lames lourdes qui se combinent avec la force naturelle d'un Ork pour réduire l'infanterie ennemie en charpie.",
                Type: "Armes de mêlée Orks",
                PénétrationArmure: "-",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "3",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable, Waaagh!",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, ORK"
            },
            {
                Id: 9,
                Nom: "Kalibr'",
                Description: "Ces gros pistolets sont bruyants et grossiers. Ils tirent des munitions tellement chargées de poudre à canon qu'elles sont presque inutiles sauf à bout portant.",
                Type: "Armes à distance Orks",
                Degats: "1",
                PenetrationArmure: "-",
                Portee: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Pistolet, Waaagh!",
                Valeur: "3",
                Rarete: "Courant",
                MotsCles: "PROJECTILE, ORK"
            }
        ],
        CoûtAttributConseil: 26,
        ForceConseil: 4,
        EndurenceConseil: 4,
        AgiliteConseil: 2,
        InitiativeConseil: 3,
        ForceMentaleConseil: 1,
        Intelligncve: 1,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 16,
        CompetenceConseil: {
            Athlétisme: 1,
            CapacitéDeCombat: 3,
            CapacitéDeTir: 1,
            Intimidation: 2
        },
        TallentConseil: [
            {
                Id: 8,
                Nom: "BERZERK",
                CoûtPX: 20,
                Prérequis: "",
                Effet: "la seule vue du sang suffit à provoquer chez vous une rage noire. Chaque fois que vous voyez un individu à moins de 30 mètres de vous subir un Coup critique ou la Condition Saignement, vous gagnez 1 point de Fureur. Le MJ peut vous demander de faire un Test de Corruption SD 1 chaque fois que ce Talent est activé."
            },
            {
                Id: 10,
                Nom: "BRUTE",
                CoûtPX: 20,
                Prérequis: "Score de Force 3+",
                Effet: "vos attaques portent des coups brutaux, quelle que soit l'arme que vous utilisez. Chaque arme de mêlée que vous utilisez possède le Trait d'arme Brutal (p. 209), y compris pour vos attaques à mains nues. Si vous réussissez une attaque de mêlée avec une arme qui possède déjà le Trait d'arme Brutal, vous infligez +1 dégât supplémentaire. Ce bonus de dégât est appliqué après le calcul de vos dégâts totaux, il ne s'ajoute pas à la valeur Dégâts de l'arme."
            },
            {
                Id: 31,
                Nom: "FRÉNÉSIE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous pouvez utiliser une Action de combat pour devenir Frénétique (p. 199)."
            }
        ],
        Influence: ""
    },
    /*Sœur de Bataille*/
    {
        Id: 9,
        Nom: "Sœur de Bataille",
        DescriptionCourte: "Une nonne guerrière inébranlable à la juste détermination. Vous chantez des hymnes de bataille pendant que vous détruisez avec zèle les ennemis de l'Empereur.",
        DescriptionLongue: "Lorsque les hérétiques se rassemblent et que la corruption fait rage, les Sœurs de Bataille prennent leurs armes sacrées. Bras militant de l'Adeptus Ministorum à la foi infinie, elles sont l'épée flamboyante de l'Imperium et le" +
            " bouclier vertueux du Credo impérial. Elles arpentent le champ de bataille en armures énergétiques ornées, brandissant leurs bolters et leurs lance-flammes avec précision et impitoyabilité pour accomplir leur devoir sacré : purger la galaxie de" +
            " l'hérésie et de la corruption, et immoler tous ceux qui s'opposeraient au Credo impérial. Ce sont les Sœurs de Bataille. Repentez-vous ou périssez ! La Schola Progenium accueille les orphelins des guerres sans fin de l'Imperium et les instruit" +
            " selon le Credo impérial. Lorsque le moment est venu, les plus dévotes subissent un entraînement militaire intense et un endoctrinement plus poussé afin de devenir des Sœurs de Bataille. À l'âge adulte, elles sont devenues de féroces guerrières," +
            " dont la foi en leurs Sœurs et dans le Credo est inébranlable, même face à une mort certaine. En raison de cette pureté d'âme et de leurs objectifs communs, les Adepta Sororitas travaillent souvent en collaboration avec l'Inquisition. On observe" +
            " parfois des Sœurs solitaires agissant comme de puissantes et fidèles guerrières face à la corruption la plus répugnante. Les Sœurs sont des combattantes de première ligne ; quand elles ne purgent pas l'impur, elles sont à l'affût de l'hérésie," +
            " où qu'elle se trouve. Leur force ne vient pas d'améliorations génétiques, mais d'une pureté de foi et d'une croyance inébranlable en l'Empereur.",
        Tier: 2,
        Faction: 1,
        SousFaction: 1,
        Espèces: 1,
        CoûtPX: 64,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM, ADEPTA SORORITAS, [ORDRE]",
        Attributs: {
            Force: 3,
            Endurance: 3,
            Agilité: 3,
            ForceMentale: 3
        },
        Compétences: {
            CapacitéDeCombat: 2,
            CapacitéDeTir: 2,
            Connaissance: 1
        },
        AptitudeArchetype: "Pureté de la foi : Vous et tous vos alliés à moins de 15 mètres gagnez +Double de votre Rang des bonus aux Tests de Corruption. Vous gagnez +Double de votre Rang des bonus à n'importe quel Test pour résister aux effets d'un Pouvoir" +
            " psychique.",
        Equipement: "Chapelet de l'Ecclésiarchie, Habits de Sororitas, Kit d'écriture, un exemplaire du Code des Sororitas. Choisissez parmi l'une des options suivantes : un Bolter ou un Pistolet bolter et une Épée tronçonneuse",
        Armures: [
            {
                Id: 10,
                Nom: "Armure énergétique Sororitas",
                Description: "Fabriquée pour l'usage exclusif des Sœurs de bataille, l'Armure énergétique Sororitas est bénie et purifiée avec une grande ferveur religieuse pour protéger sa porteuse des hérétiques et des démons.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (2)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTA SORORITAS"
            }
        ],
        CoûtAttributConseil: 58,
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 4,
        InitiativeConseil: 4,
        ForceMentaleConseil: 4,
        Intelligncve: 2,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 28,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeCombat: 3,
            CapacitéDeTir: 3,
            Commandement: 1,
            Connaissance: 2,
            Intimidation: 1,
            Vigilance: 1
        },
        PouvoirsPsychiques: [
            {
                Nom: "Bouclier de la Foi",
                CoutPX: 20,
                Prerequis: "Mot-clé ADEPTA SORORITAS, Score de Force mentale 3+",
                Effet: "votre croyance inexpugnable renforce votre esprit contre la sorcellerie Warp. Vous gagnez +1 Foi. En tant qu'Action de réaction, vous pouvez dépenser 1 Foi pour ignorer un pouvoir ou un effet psychique (y compris les Périls du Warp) jusqu'à la fin du Round. Vous pouvez dépenser un point de Foi supplémentaire pour accorder le même bonus à tous les alliés avec le mot-clé IMPERIUM dans un rayon de 15+Double de votre Rang mètres."
            }
        ],
        TallentConseil: [
            {
                Id: 20,
                Nom: "DUR À CUIRE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "Vous êtes difficile à tuer. Lorsque vous subissez plus de Blessures que votre Maximum de blessures, vous n'êtes pas Mourant. Faites un jet sur le Tableau des blessures de guerre et soignez 1 Blessure. Vous ne pouvez plus réutiliser ce Talent jusqu'à votre prochain Rassemblement."
            },
            {
                Id: 52,
                Nom: "ORTHOPRAXIE",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "les litanies de Sa Sainte Parole sont profondément gravées dans votre mémoire. Vous pouvez réciter par cœur des hymnes et des prières à l'Empereur et les utiliser pour renforcer votre esprit. Comme Action simple, vous pouvez commencer à réciter mentalement des liturgies ecclésiastiques. Tant que vous sacrifiez votre Action simple de cette manière, vous gagnez un bonus de Force mentale de +1, pour un maximum de Rounds égal au double de votre Rang. Vous ne pouvez plus utiliser ce Talent tant que vous n'avez pas terminé un Repos."
            }
        ],
        Influence: ""
    },
    /*Psyker Assermenté*/
    {
        Id: 10,
        Nom: "Psyker Assermenté",
        DescriptionCourte: "Un mutant capable de canaliser le Warp pour manipuler la réalité.",
        DescriptionLongue: "Craints dans tout l'Imperium, les Psykers déchirent la réalité pour la plier à leur ForceMentale. Ils invoquent le feu, lisent les pensées et façonnent la chair vivante selon leur bon vouloir. Le pouvoir impie qu'ils canalisent est autant" +
            " une force qu'un point faible : les Psykers sont des phares dans l'obscurité pour les démons. Chaque fois qu'ils canalisent le Warp, ils risquent de devenir une passerelle physique permettant au Chaos d'entrer dans le monde réel. N'importe quel humain" +
            " peut développer des pouvoirs psychiques, et de plus en plus de malheureux sont touchés par le Warp chaque année. Les Psykers assermentés ont survécu au voyage éprouvant dans un sinistre Vaisseau noir vers Sainte Terra. Après avoir survécu à l'entraînement" +
            " et à l'endoctrinement de la Scholastia Psykana, ils développent une discipline sans égale. Jugés dignes de servir l'Empereur, ils sont liés à Sa sainte grâce pour mieux résister à l'appel du Chaos. Fort d'esprit et pur de ForceMentale, le Psyker est" +
            " considéré comme un atout pour l'humanité. Seule une petite fraction de tous les Psykers possède la force mentale nécessaire pour être déployés en toute sécurité. Certains sont envoyés sur les champs de bataille pour provoquer de terribles massacres," +
            " tandis que d'autres touchent le voile intemporel pour prédire l'avenir. Dans un passé plus sombre, les Psykers étaient considérés comme contre nature, mais leur valeur évidente l'a emporté sur les histoires effrayantes des propagandes d'autrefois." +
            " Pourtant, le Warp marque tous les Psykers. La plupart ont le corps brisé et l'esprit torturé, malgré leur grande ForceMentale. La conscience qu'une seule erreur pourrait ouvrir les portes de l'Immaterium est toujours présente dans l'esprit d'un Psyker." +
            " Dans un tel cas, le mieux qu'on peut espérer est une mort rapide. Même ceux qui répriment leurs peurs savent qu'ils seront toujours des parias, victimes de soupçons issus de générations d'endoctrinements ou de leurs propres cauchemars bien trop réels.",
        Tier: 2,
        Faction: 1,
        SousFaction: 7,
        Espèces: 1,
        CoûtPX: 32,
        MotsClés: "IMPERIUM, ADEPTUS ASTRA TELEPATHICA, PSYKER, SCHOLASTIA PSYKANA",
        Attributs: {
            ForceMentale: 4
        },
        Compétences: {
            MaîtrisePsychique: 1
        },
        AptitudeArchetype: "Psyker : Vous avez le Mot-clé PSYKER et êtes un Psyker. Vous connaissez les Pouvoirs psychiques universels (p. 267), 1 Pouvoir psychique mineur et le Pouvoir psychique Châtiment. Vous pouvez acheter des Pouvoirs psychiques" +
            " supplémentaires en suivant les règles du Chapitre 11.",
        Equipement: "Kit de ration du Munitorum, Couverture, Trousse de toilette, 2 Rations de survie",
        Armes: [
            {
                Id: 38,
                Nom: "Pistolet laser",
                Description: "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                Type: "Armes Laser",
                PénétrationArmure: "-",
                Dégâts: "7",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Fiable, Pistolet",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LASER, IMPERIUM"
            },
            {
                Id: 16,
                Nom: "Bâton de force",
                Description: "Les Bâtons de force sont dotés d'une psy-matrice complexe qui leur permet d'agir comme une batterie psychique, afin de stocker de l'énergie psychique qui pourra être déchaînée avec une efficacité redoutable.",
                Type: "Armes de force",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 4",
                DésDégâtsSupplémentaires: "2",
                Portée: "2",
                Rafale: "-",
                Traits: "Brutal, Force",
                Valeur: "2",
                Rareté: "Rare",
                MotsClés: "FORCE, AELDARI, À 2 MAINS, INQUISITION, ADEPTUS ASTARTES, ADEPTUS ASTRA TELEPATHICA"
            },
            {
                Id: 6,
                Nom: "Miséricorde de la Psykana",
                Description: "Les Psykers assermentés sont équipés d'une lame tranchante à utiliser en dernier recours si leurs pouvoirs échappent à leur contrôle. Si un malheureux devait faire face à la tragédie d'une possession démoniaque imminente, la lame lui offre une échappatoire salutaire. Les « Chasseurs de sorcières » improvisés qui opèrent dans tout le système de Gilead considèrent ces lames comme de prestigieux trophées et n'hésitent pas à exhiber leurs plus belles prises en privé. Une Miséricorde de la Psykana a le même profil qu'un Couteau, mais avec une PA à -1 et le Mot-clé ADEPTUS ASTRA TELEPATHICA.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 2",
                DésDégâtsSupplémentaires: "2",
                Portée: "Lancer (F) x 4",
                Rafale: "-",
                Traits: "-",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, ADEPTUS ASTRA TELEPATHICA"
            }
        ],
        CoûtAttributConseil: 73,
        ForceConseil: 1,
        EndurenceConseil: 3,
        AgiliteConseil: 2,
        InitiativeConseil: 3,
        ForceMentaleConseil: 6,
        Intelligncve: 3,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 26,
        CompetenceConseil: {
            Connaissance: 1,
            Duperie: 2,
            MaîtrisePsychique: 4
        },
        PouvoirsPsychiques: [
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
                Effet: "Vous utilisez votre force de ForceMentale pour libérer votre corps de la gravité. Vous pouvez flotter librement, en planant ou en vous déplaçant lentement vers le haut ou vers le bas (1/2 Vitesse). Cependant," +
                    " vous n'êtes pas vraiment capable de voler, vous devez donc utiliser d'autres moyens pour vous déplacer dans une autre direction. Ce pouvoir peut être utilisé pour tenter d'interrompre une chute.",
                Surpuissance: "[1] Peut se déplacer à Vitesse normale vers le haut ou vers le bas. [2] Peut également affecter une créature consentante à moins de 5 m. Le Psyker contrôle son mouvement vertical."
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
                Effet: "par la simple force de votre ForceMentale, vous invoquez une poussée mentale invisible que vous pouvez utiliser pour repousser une cible dans votre champ de vision. La cible doit immédiatement réussir un Test" +
                    " d'Agilité SD 4 ou finir À terre, ce qui peut entraîner des conséquences supplémentaires en fonction de sa situation à ce moment-là.",
                Surpuissance: "• [1] La portée est augmentée de 15 m.\n• [2] +1 SD au Test d'Agilité."
            }
        ],
        TallentConseil: "",
        Influence: ""
    },
    /*Skitarii*/
    {
        Id: 11,
        Nom: "Skitarii",
        DescriptionCourte: "Soldat constitué de plus d'acier que de chair, vous faites partie de l'armée permanente de l'Adeptus Mechanicus.",
        DescriptionLongue: "Avec les instruments sacrés du Dieu-Machine, les Skitarii sont reconstruits et forgés pour la guerre. Fervents adorateurs du Culte de la Machine, leurs nouveaux corps mécaniques sont des œuvres d'art divines dédiées à l'Omnimessie." +
            " Leurs devoirs sont de garder et de vénérer les instruments sacrés de l'Adeptus Mechanicus, d'obéir aux ordres et de mener une guerre juste. Les Skitarii ont survécu à une transformation éreintante : leur chair a été retirée et remplacée par des fibres" +
            " synthétiques et de l'adamantium. Leurs membres sont remplacés par des Augmentiques infatigables, et des plaques de blindage sont fixées à même leurs os. Des cogitateurs leur sont implantés dans le cerveau pour maintenir une concentration de tout instant." +
            " Chaque objectif est analysé en permanence, aucune mission ne peut être oubliée. Un Skitarii poursuivra obstinément son objectif pendant des siècles, à moins qu'il ne lui soit ordonné de s'arrêter. Les Skitarii pourraient être des guerriers déchus sans" +
            " autre option ou des condamnés ayant eu une révélation divine. Les Skitarii se souviennent rarement de leur passé, car les souvenirs qui pourraient interférer avec leur objectif sont effacés de leur mémoire. Leur valeur a été éprouvée en tant que gardes," +
            " tacticiens et conseillers techniques. Certains sont envoyés pour accomplir des tâches que la chair ne peut pas assumer : marcher dans l'espace pour réparer des vaisseaux, ou travailler dans des fumées mortelles de manufactorum. Selon la rumeur," +
            " l'Administratum utiliserait leur logique froide pour rationner efficacement les stocks de nourriture en constante diminution dans le système de Gilead. Les forges d'Avachrus travaillent sans relâche pour augmenter davantage de guerriers ; afin de" +
            " combattre les terreurs de la Grande Faille, les faiblesses de la chair doivent être surmontées. Bien que beaucoup soient suffisamment dévots ou désespérés pour se soumettre à la procédure, les stocks diminuent et les forges n'acceptent plus que les" +
            " candidats les plus pieux. Les Skitarii sont perçus avec jalousie par de nombreuses personnes, et il est déjà arrivé qu'un Skitarii soit forcé de tuer un Ganger qui tentait de voler ses Augmentiques bénis.",
        Tier: 2,
        Faction: 1,
        SousFaction: 5,
        Espèces: 1,
        CoûtPX: 28,
        MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, SKITARII, [MONDE-FORGE]",
        Attributs: {
            Endurance: 3
        },
        Compétences: {
            CapacitéDeTir: 2,
            Technomaîtrise: 1
        },
        AptitudeArchetype: "Augmentiques mécaniques : Votre corps a été repensé pour résister aux rigueurs de la guerre. Vous ne saignez pas (ce qui vous immunise contre la Condition Saignement) et vous gagnez +Rang dés bonus aux jets de Détermination.",
        Equipement: "Combi-outils, Cuirasse Skitarii",
        Armes: [
            {
                Id: 53,
                Nom: "Fusil galvanique",
                Description: "Rappelant les anciennes armes à silex, les Fusils galvaniques tirent des projectiles électromagnétiques intégrant des servitors de guidage. Chaque munition est dotée d'un esprit-machine sauvage et obsédé par l'idée d'infliger un maximum de dégâts à sa cible.",
                Type: "Armes à distance de l'Adeptus Mechanicus",
                Degats: "10",
                DS: "1",
                PA: "-",
                Portee: "15 / 30 / 45",
                Rafale: "2",
                Traits: "Perforant (1), Tir rapide (1)",
                Valeur: "5",
                Rarete: "Rare",
                MotsClés: "PROJECTILE, ADEPTUS MECHANICUS"
            }
        ],
        Armures: [
            {
                Id: 6,
                Nom: "Cuirasse Skitarii",
                Description: "Constituée de plaques solides d'armaplast protégées contre les radiations, la Cuirasse Skitarii protège son porteur à la fois de ses ennemis et des rayonnements dangereux produits par ses propres armes radioactives.",
                Ar: "4",
                Effet: "",
                Traits: "-",
                Valeur: "5",
                Rareté: "Rare",
                MotsClés: "LOURDE, IMPERIUM, ADEPTUS MECHANICUS, SKITARII"
            }
        ],
        CoûtAttributConseil: 58,
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 4,
        InitiativeConseil: 3,
        ForceMentaleConseil: 2,
        Intelligncve: 2,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 54,
        CompetenceConseil: {
            Athlétisme: 1,
            CapacitéDeCombat: 1,
            CapacitéDeTir: 4,
            Investigation: 2,
            Medicae: 2,
            Technomaîtrise: 4,
            Vigilance: 1
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 16,
                Nom: "CONVERSATION CALCULÉE",
                CoûtPX: 10,
                Prérequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "les dispositifs de cogitation qui forment votre cerveau sont ajustés avec précision. Grâce à la froide pureté de la logique, vous pouvez calculer les résultats probables d'une conversation et prédire les réponses des esprits biologiques plus limités que le vôtre. Avant de faire un Test de Compétence Ruse (Soc), Duperie (Soc), Psychologie (Soc) ou Persuasion (Soc), vous pouvez choisir d'activer ce Talent pour utiliser votre Compétence Technomaîtrise (Int) à la place. Vous devez effectuer un Rassemblement ou un Repos avant de pouvoir utiliser à nouveau ce Talent."
            },
            {
                Id: 61,
                Nom: "RÉSONANCE BINAIRE",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "vous maîtrisez parfaitement les constructs mécaniques. Vous gagnez +Double de votre Rang dés bonus chaque fois que vous essayez de contrôler, de programmer ou d'interroger un Serviteur ou une construction similaire, comme un chérubin ou un Servo-crâne."
            },
            {
                Id: 63,
                Nom: "RITUEL DE MAGNOMÉTRIE",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "vous avez installé de puissants électro-aimants contrôlables par la pensée dans vos Augmentiques. Vous pouvez varier l'intensité et la fréquence de vos émissions électromagnétiques, ce qui vous permet d'attirer des objets métalliques et de survoler de grandes surfaces métalliques. Vous pouvez prendre et déplacer des objets métalliques jusqu'à 3 + Double de votre Rang mètres de votre corps vers n'importe quel objet métallique stable ou de grande taille et le survoler. Aucun Test n'est requis pour ces capacités. L'utilisation de ce Talent au combat nécessite une Action simple. La portée effective de ce Talent est égale à votre Rang x 20 mètres. La Force effective de ce Talent (à utiliser pour lancer un objet ou résister à une autre force) est de 1 + Double de votre Rang."
            }
        ],
        Influence: ""
    },
    /*Assassin du Culte de la Mort*/
    {
        Id: 12,
        Nom: "Assassin du Culte de la Mort",
        DescriptionCourte: "Adepte d'une secte d'extrémistes, vous honorez le sacrifice de l'Empereur pour l'humanité à travers le massacre cruel de Ses ennemis.",
        DescriptionLongue: "Sortant de l'ombre et frappant comme la foudre, les Cultistes de la Mort exécutent chaque assassinat dans une effusion de sang et de révérence. Le sang coulé et la mort sont leurs hymnes et leurs prières, et chaque vie interrompue" +
            " est considérée comme le pieux reflet du sacrifice de l'Empereur. Les Assassins du Culte de la Mort traquent leurs proies furtivement pour mieux vivre l'exsanguination rituelle de leurs ennemis. Divers Cultes de la Mort prospèrent à travers l'Imperium" +
            " : des citoyens sans éducation se rassemblent pour accomplir des rituels brutaux et primitifs, tandis que l'élite organise des cérémonies baroques de saignée qui durent des jours. Tous croient que la violence qu'ils infligent sert l'Imperium et comparent" +
            " ces actes d'adoration au sacrifice de l'Empereur-Dieu. La chair est découpée et consommée, les croyants se baignent dans le sang sanctifié ! L'Ecclésiarchie et l'Inquisition ferment souvent les yeux sur ces pratiques quasi hérétiques. En tant que" +
            " traqueurs et meurtriers totalement obstinés, ils servent l'Imperium dans le cadre d'un accord mutuellement avantageux. Un Assassin élimine un individu problématique et met fin à son influence malveillante, et en récompense, les Cultes de la Mort" +
            " reçoivent un corps pour leur sacrifice rituel. Une récompense appropriée pour leur loyauté fanatique (même si parfois déviante) au Credo. Dans la confusion qui a suivi l'émergence de la Grande Faille, des nobles et des officiers opportunistes ont" +
            " employé des Assassins du Culte de la Mort pour faire avancer leurs propres objectifs. Alors que les démons pénètrent dans le monde réel, le désespoir a contraint de nombreux citoyens à se jeter dans les bras des Cultes de la Mort.",
        Tier: 2,
        Faction: 1,
        SousFaction: 3,
        Espèces: 1,
        CoûtPX: 36,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM",
        Attributs: {
            Agilité: 4
        },
        Compétences: {
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Coup superficiel : Vous dépendez de vos mouvements rapides et de vos réflexes aiguisés pour éviter les blessures. Vous pouvez utiliser votre Agilité au lieu de votre Endurance lorsque vous faites un jet de Détermination contre les" +
            " Dégâts d'attaques, et vous pouvez faire un jet de Détermination contre les Blessures mortelles. Vous ne pouvez pas utiliser cette capacité si vous êtes immobilisé d'une manière ou d'une autre, par exemple à cause de la Condition Entravé.",
        Equipement: "Deux Lames énergétiques du Culte de la Mort, 3 doses de Stimm",
        Armures: [
            {
                Id: 2,
                Nom: "Combinaison renforcée",
                Description: "Tissée à partir de microfibres résistantes aux chocs, les combinaisons renforcées offrent une protection discrète et peuvent être dissimulées sous les vêtements ou enfilées sous une armure plus lourde.",
                Ar: "2",
                Effet: "",
                Traits: "-",
                Valeur: "3",
                Rareté: "Rare",
                MotsClés: "LÉGÈRE, IMPERIUM, ADEPTUS MINISTORUM"
            }
        ],
        Armes: [
            {
                Id: 1,
                Nom: "Couteau",
                Description: "Du hachoir d'un boucher à grox au stylet d'un assassin, de nombreuses petites armes blanches peuvent être qualifiées de « Couteaux ». Cela inclut toutes les lames qui peuvent être fixées à une arme comme une baïonnette.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-",
                Dégâts: "(F) + 2",
                DésDégâtsSupplémentaires: "2",
                Portée: "Lancer (F) x 4",
                Rafale: "-",
                Traits: "-",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, [AU CHOIX]"
            },
            {
                Id: 38,
                Nom: "Pistolet laser",
                Description: "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                Type: "Armes Laser",
                PénétrationArmure: "-",
                Dégâts: "7",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Fiable, Pistolet",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LASER, IMPERIUM"
            }
        ],
        CoûtAttributConseil: 54,
        ForceConseil: 3,
        EndurenceConseil: 3,
        AgiliteConseil: 4,
        InitiativeConseil: 4,
        ForceMentaleConseil: 3,
        Intelligncve: 2,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 50,
        CompetenceConseil: {
            Athlétisme: 3,
            CapacitéDeCombat: 4,
            CapacitéDeTir: 1,
            Connaissance: 1,
            Furtivité: 3,
            Intimidation: 1,
            Investigation: 1,
            Vigilance: 1
        },
        TallentConseil: [
            {
                Id: 28,
                Nom: "FLAGELLANT",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous consacrez votre souffrance au service de l'Empereur. Au début de chaque journée, vous devez passer 20 minutes (norme de Terra) en prière et vous infliger des Blessures égales à votre Tier par autoflagellation. Vous ne pouvez pas faire de jet de Détermination contre ces Blessures ou permettre qu'elles soient soignées autrement que par un Repos. Tant que vous êtes blessé de cette manière, vous gagnez +Rang dés bonus à vos jets de Détermination et de Conviction et pouvez choisir de devenir Frénétique (p. 199) en tant qu'Action de combat. Si vous possédez également le Talent Frénésie, vous pouvez devenir Frénétique avec une Action simple. Si vous ne parvenez pas à vous flageller, la honte vous envahit et vous subissez une pénalité de +2 SD à tous les Tests jusqu'à ce que vous flagelliez à nouveau."
            },
            {
                Id: 40,
                Nom: "LE SANG DOIT COULER !",
                CoûtPX: 20,
                Prerequis: "Score de Capacité de Combat 2+",
                Effet: "Vous savez diriger vos coups pour infliger des hémorragies. Vous pouvez dépenser une Icône exaltée chaque fois que vous réussissez une attaque de Capacité de Combat (I) pour infliger la Condition Saignement à votre cible."
            },
            {
                Id: 69,
                Nom: "SILENCIEUX",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous maîtrisez l'art de se déplacer silencieusement. Vous pouvez vous déplacer à pleine Vitesse lorsque vous vous Déplacez furtivement (p. 182). Chaque fois que votre Score de Furtivité est réduit, vous perdez 1 point de moins."
            },
            {
                Id: 21,
                Nom: "ÉLIMINATEUR",
                CoûtPX: 20,
                Prerequis: "Score de Furtivité 2+",
                Effet: "Vous frappez dans l'ombre et utilisez l'élément de surprise pour tuer vos ennemis en un coup. Lorsque vous possédez un Score de Furtivité (p. 181) et que vous attaquez un ennemi qui ne vous a pas remarqué, vous pouvez ajouter votre Score de Furtivité comme DS, en plus des bonus liés à une Attaque surprise (p. 182). Toute diminution de votre Score de Furtivité est résolue après l'attaque."
            }
        ],
        Influence: "+1"
    },
    /*Fils du Tempestus*/
    {
        Id: 13,
        Nom: "Fils du Tempestus",
        DescriptionCourte: "Vous êtes un soldat de choc d'élite hautement qualifié de l'Astra Militarum.",
        DescriptionLongue: "Déployés pour s'immiscer dans les lignes ennemies impénétrables ou pour frapper des objectifs clés, les Fils du Tempestus sont utilisés par les officiers de la Garde impériale pour accomplir ce qui serait impossible pour plusieurs" +
            " dizaines de soldats classiques. Équipés de matériel de pointe et employant des tactiques avancées, ils opèrent sans soutien, frappent sans prévenir et exécutent leurs ordres à la lettre. L'échec n'est pas une option pour les Fils du Tempestus." +
            " Le système de Gilead a plus que jamais besoin de troupes d'élites comme les Fils. Leur entraînement s'accompagne d'une gestion nécessairement pointilleuse des réserves de munitions, avec à la clé des tireurs d'élite qui ne gaspillent jamais une" +
            " balle et des agents de combat rapproché prudents. Les Fils sont sélectionnés pour leur sombre destin dès l'enfance. Leur instruction dans l'art de la guerre commence ainsi des années avant que d'autres soldats ne soient intronisés dans les rangs" +
            " énormes de l'Astra Militarum. Endoctrinés physiquement, mentalement et spirituellement depuis l'enfance, leur existence tourne autour de l'excellence sur le champ de bataille. Ils sont inculqués d'une foi absolue dans l'Empereur et Sa machine de" +
            " guerre. Tout doute est purgé, tout comme les défauts de personnalité ou les souvenirs inutiles. Les esprits qui survivent à ce processus deviennent une page vierge, prêts à suivre un entraînement incessant aux arts martiaux, à la tactique, à l'endurance" +
            " et au tir. Ceux qui conviennent à la sélection sont rares, et les Fils sont donc habitués à travailler en petites équipes exécutant des frappes derrière les lignes ennemies, à s'adapter et à improviser dans des situations intenses sans structure de" +
            " commandement. Les Fils ont appris à faire confiance à leurs coéquipiers et forgent rapidement des liens pour assurer une efficacité maximale. Cependant, certains sont troublés par leur pragmatisme sans limites et la brutalité aveugle avec laquelle" +
            " ils obéissent aux ordres.",
        Tier: 2,
        Faction: 1,
        SousFaction: 2,
        Espèces: 1,
        CoûtPX: 52,
        MotsClés: "IMPERIUM, ASTRA MILITARUM, MILITARUM TEMPESTUS",
        Attributs: {
            Force: 3,
            Endurance: 3,
            Agilité: 3
        },
        Compétences: {
            CapacitéDeTir: 2,
            Furtivité: 2
        },
        AptitudeArchetype: "Soldat d'élite : Vous êtes un expert du maniement des armes de l'Imperium. Chaque fois que vous dépensez de la Gloire pour augmenter les dégâts lors de l'utilisation d'une arme avec le Mot de clé ASTRA MILITARUM, vous pouvez ajouter" +
            " votre Rang à la valeur finale des dégâts.",
        Equipement: "Grav-chute, Couteau, Kit de ration du Munitorum, un exemplaire du Manuel d'édification du fantassin impérial, Tablette Monitron, Pixenregistreur, 3 Rations de survie",
        Armes: [
            {
                Id: 37,
                Nom: "Fusil radiant laser",
                Description: "Le Fusil radiant laser, ou « Fusil pleine-bourre », est un Fusil laser classique auquel on a enlevé plusieurs mécanismes de sécurité afin de projeter un faisceau de lumière plus puissant à travers un canon renforcé.",
                Type: "Armes Laser",
                PénétrationArmure: "-2",
                Dégâts: "9",
                DésDégâtsSupplémentaires: "1",
                Portée: "9 / 18 / 27",
                Rafale: "2",
                Traits: "Fiable, Tir rapide (2)",
                Valeur: "6",
                Rareté: "Rare",
                MotsClés: "LASER, IMPERIUM, ASTRA MILITARUM"
            }
        ],
        Armures: [
            {
                Id: 8,
                Nom: "Armure carapace Tempestus",
                Description: "Favorisée par les soldats d'élite du Militarum Tempestus, la silhouette imposante de l'Armure carapace Tempestus est à la fois intimidante et très résistante aux dégâts.",
                Ar: "4",
                Effet: "",
                Traits: "-",
                Valeur: "6",
                Rareté: "Rare",
                MotsClés: "LOURDE, IMPERIUM, ASTRA MILITARUM, MILITARUM TEMPESTUS"
            }
        ],
        CoûtAttributConseil: 42,
        ForceConseil: 4,
        EndurenceConseil: 3,
        AgiliteConseil: 4,
        InitiativeConseil: 3,
        ForceMentaleConseil: 2,
        Intelligncve: 2,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 46,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeCombat: 2,
            CapacitéDeTir: 4,
            Commandement: 1,
            Furtivité: 2,
            Pilotage: 2,
            Survie: 2,
            Vigilance: 2
        },
        TallentConseil: [
            {
                Id: 20,
                Nom: "DUR À CUIRE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "Vous êtes difficile à tuer. Lorsque vous subissez plus de Blessures que votre Maximum de blessures, vous n'êtes pas Mourant. Faites un jet sur le Tableau des blessures de guerre et soignez 1 Blessure. Vous ne pouvez plus réutiliser ce Talent jusqu'à votre prochain Rassemblement."
            },
            {
                Id: 25,
                Nom: "EXPERT DES ARMES SPÉCIALES",
                CoûtPX: "20, plus PX égal à la Valeur de l'arme choisie",
                Prerequis: "Score de Capacité de Tir 3+, Mot-clé ASTRA MILITARUM",
                Effet: "De nombreux soldats de l'Astra Militarum reçoivent un entraînement à l'utilisation d'armes spéciales sur le champ de bataille. Souvent, cette formation comprend l'apprentissage d'incantations basiques pour apaiser l'esprit de guerre de l'arme si elle devient têtue ou récalcitrante. Vous pouvez sélectionner une des armes suivantes comme équipement standard, en remplacement de votre arme principale : Fusil à pompe de combat (p. 222), Fusil à plasma (p. 223), Fuseur (p. 223), Fusil de sniper laser (p. 221), Lance-flammes (p. 224), Lance-grenades (p. 225). Vous recevez également 3 grenades Frag et 3 grenades Krak. Fusil radiant à salve (FILS DU TEMPESTUS uniquement, p. 221)."
            },
            {
                Id: 36,
                Nom: "JARGON [COMPÉTENCE]",
                CoûtPX: 20,
                Prerequis: "Score de 1+ dans une des Compétences suivantes : Capacité de Combat (I), Capacité de Tir (A), Connaissance (Int), Medicae (Int), Pilotage (A), Survie (FM) ou Technomaîtrise (Int).",
                Effet: "vous êtes suffisamment informé sur un sujet particulier pour disserter à l'infini. Votre emploi d'un langage mystifiant, spécifique et étrange suffit à stupéfier les profanes et à vous faire rapidement des amis parmi ceux qui partagent votre passion. Lorsque vous prenez ce Talent, vous devez choisir à laquelle de vos Compétences il s'applique dans la liste des Prérequis ci-dessus. Lors de toute rencontre sociale, vous pouvez faire un Test de Compétence en utilisant la Compétence associée à votre Jargon. Le SD est déterminé par le MJ en fonction du degré d'amitié de la cible avec vous. Si vous échouez, tout le monde autour de vous ignore votre bavardage incohérent. Si vous réussissez et que la cible est intéressée ou formée à la Compétence, elle deviendra probablement plus amicale avec vous (voir p. 168). Si la cible ne partage pas vos connaissances et votre argot, elle reste stupéfaite pendant que vous blablatez : elle est distraite, incapable de s'éloigner de votre conversation pendant une durée maximale de 20 minutes (norme de Terra)."
            },
            {
                Id: 74,
                Nom: "TIR DE PRÉCISION",
                CoûtPX: 20,
                Prerequis: "Score de Capacité de Tir 2+",
                Effet: "vous êtes un tireur hors pair capable de cibler avec précision les points faibles de vos ennemis. Lorsque vous effectuez l'action Viser (p. 189) et effectuez un Tir ciblé (p. 186), le bonus de DS que vous recevez est doublé."
            }
        ],
        Influence: "+1"
    },
    /*Libre Marchand*/
    {
        Id: 14,
        Nom: "Libre Marchand",
        DescriptionCourte: "Doté de la rare liberté d'explorer les étoiles, vous explorez, échangez, pillez et conquérez pour étendre l'Imperium.",
        DescriptionLongue: "Le destin de l'Humanité est de gouverner la galaxie, car telle est la ForceMentale de l'Empereur. Pour étendre Son royaume, l'Imperium accorde des vaisseaux et des droits de libre passage et de commerce aux individus audacieux qui voyagent" +
            " au-delà des frontières de l'espace connu à la recherche de fortune et de gloire. Un Libre Marchand est défini par sa Lettre de Marque. Ces décrets permettent à leur titulaire de voyager au-delà des limites de l'Imperium et d'agir de manière autonome." +
            " Ils peuvent avoir carte blanche pour s'associer avec des xenos, surtout si une telle entreprise permettrait d'acquérir des connaissances et des technologies au profit de l'Imperium. Leur vocation leur permet d'échanger toutes sortes de ressources, des" +
            " denrées alimentaires aux minéraux, et ils contiennent parfois des routes commerciales entières pour financer des aventures plus lointaines. Ceux qui font preuve d'une grande ruse, d'une diplomatie aguerrie, d'un bon sens de l'humour et d'une gâchette" +
            " nerveuse réussissent à former des équipages composés de toutes sortes de mercenaires (et rarement, de xenos bien payés) et à alourdir leurs cales avec d'innombrables artefacts de valeur. Opportunistes et maîtres de la manipulation, les Libres Marchands" +
            " sont traités avec un mélange de jalousie et de crainte par les citoyens impériaux ordinaires. Ils incarnent la richesse et l'aventure, de fougueux guerriers qui combattent aux frontières de l'Imperium pour répandre la gloire de l'Empereur, mais ils ont" +
            " aussi la réputation de fréquenter les vils xenos que la société Impériale a été conditionnée à haïr.",
        Tier: 2,
        Faction: 1,
        SousFaction: 6,
        Espèces: 1,
        CoûtPX: 36,
        MotsClés: "IMPERIUM, ROGUE TRADER, [DYNASTIE]",
        Attributs: {
            Sociabilité: 3
        },
        Compétences: {
            Persuasion: 2,
            Psychologie: 2,
            Ruse: 1,
            Vigilance: 1
        },
        AptitudeArchetype: "Lettre de Marque",
        Equipement: "Pistolet laser ou Pistolet-mitrailleur, Épée tronçonneuse ou Épée énergétique, Armure carapace ou Armure énergétique légère, Augmentique de qualité commune (au choix), Lettre de Marque.",
        CoûtAttributConseil: 67,
        ForceConseil: 2,
        EndurenceConseil: 2,
        AgiliteConseil: 2,
        InitiativeConseil: 3,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 64,
        CompetenceConseil: {
            CapacitéDeCombat: 1,
            CapacitéDeTir: 1,
            Commandement: 2,
            Duperie: 3,
            Persuasion: 3,
            Pilotage: 2,
            Psychologie: 2,
            Ruse: 3,
            Vigilance: 3
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 33,
                Nom: "HUMOUR NOIR",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous arrivez à trouver de l'humour dans les situations les plus désespérées, et vous pouvez vous en servir pour renforcer la détermination de vos alliés. Vous pouvez effectuer une Action simple pour faire une blague sinistre chaque fois que vous êtes Blessé ou souffrez d'une Condition, tant que vous êtes encore capable de parler. Faites un Test d'Attribut de Sociabilité SD 2. Si vous réussissez, vous et tous les alliés qui peuvent vous entendre récupérez un nombre de points de Stress égal à votre Rang plus le nombre d'Icônes obtenues."
            },
            {
                Id: 60,
                Nom: "RACAILLE AVISÉE",
                CoûtPX: 20,
                Prerequis: "Humain",
                Effet: "de longues années de bêtises peu recommandables lors de transactions commerciales avec des individus touches-vous ont appris à dépouiller efficacement les hors-la-loi et à bien assimiler des substances chimiques potentiellement dangereuses. Vous gagnez +Double de votre Rang dés bonus à tout Test lié à la résistance aux effets de produits chimiques. Vous gagnez +Rang des bonus lorsque vous effectuez des Tests de Ruse (Soc)."
            },
            {
                Id: 75,
                Nom: "TOUCHÉ PAR LE DESTIN",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "la chance est toujours de votre côté, même lorsque l'équipement ou la foi peuvent faiblir. Vous commencez chaque session avec +Rang points de Fureur."
            }
        ],
        Influence: "+2"
    },
    /*Fouisseur*/
    {
        Id: 15,
        Nom: "Fouisseur",
        DescriptionCourte: "Vous avez survécu aux pires conditions de la société impériale. Les environnements les plus hostiles imaginables ont fait de vous un mutant résolu et obstiné.",
        DescriptionLongue: "« Fouisseur » est un terme d'argot qui désigne un mutant qui a prospéré malgré ses afflictions. La Lex Imperialis juge tous les mutants illégaux, mais des millions d'entre eux survivent et contribuent à l'Imperium dans l'ombre." + "" +
            " Partout dans l'Imperium, des communautés sont obligées de travailler et de vivre dans des conditions nocives. Ceux qui sont nés dans les montagnes de ferraille d'Avachrus ou les fosses de déversements toxiques de Gilead Primus ne connaissent pas" +
            " d'autre vie. Ces parias travaillent dans l'obscurité, souvent simplement oubliés et laissés pour mort, de peur que leurs formes mutées ne contaminent les purs. Cependant, la même ténacité illimitée de l'humanité qui a forgé l'Imperium engendre" +
            " également des survivants dans ces conditions horribles. Maladie génétique, malnutrition, exposition aux radiations et aux toxines... Les populations de Fouisseurs ne peuvent échapper à la maladie et forment des tribus mutantes comptant les unes" +
            " sur les autres pour survivre. La plupart n'ont que des déformations esthétiques : dents couvertes de cuir ou doigts retournés vers l'arrière. Cependant, certains deviennent des montagnes de muscles sauvages dotés d'une vision nocturne et parés" +
            " d'appendices supplémentaires. Même s'ils vivent essentiellement en marge de la société, les Fouisseurs savent que la plupart des humains les repousseront et pourront même tenter de les tuer à vue. Certains cherchent du réconfort dans l'adoration" +
            " de l'Empereur, considèrent les déformations de leur chair comme des bénédictions et partent détruire Ses ennemis. D'autres savent que n'importe quelle vie serait meilleure que la leur et se lancent volontiers dans des associations dangereuses pour" +
            " une chance de normalité. Dans le sillage de la Cicatrix Maledictum, les taux de mutation ont grimpé en flèche. Certains prétendent que des actes aussi simples que de regarder le ciel déchiré par le Warp ont irrévocablement changé leur physiologie." +
            " Parmi les classes inférieures de la société impériale, les Fouisseurs sont à peine tolérés. Avec des mutations pouvant aller d'yeux rouges à une peau bestiale, ceux qui s'aventurent plus haut se déguisent bien pour éviter l'exécution.",
        Tier: 2,
        Faction: 1,
        SousFaction: 9,
        Espèces: 1,
        CoûtPX: 10,
        MotsClés: "RACAILLES, [AU CHOIX]",
        Attributs: {
            Endurance: 2
        },
        Compétences: {
            Survie: 1
        },
        AptitudeArchetype: "Mutant",
        Equipement: "Un pistolet laser ou un Pistolet-mitrailleur, Sac de couchage, Gourde, Vêtements en lambeaux",
        Armes: [
            {
                Id: 1,
                Nom: "Couteau",
                Description: "Du hachoir d'un boucher à grox au stylet d'un assassin, de nombreuses petites armes blanches peuvent être qualifiées de « Couteaux ». Cela inclut toutes les lames qui peuvent être fixées à une arme comme une baïonnette.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-",
                Dégâts: "(F) + 2",
                DésDégâtsSupplémentaires: "2",
                Portée: "Lancer (F) x 4",
                Rafale: "-",
                Traits: "-",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, [AU CHOIX]"
            }
        ],
        CoûtAttributConseil: 60,
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 3,
        InitiativeConseil: 3,
        ForceMentaleConseil: 2,
        Intelligncve: 1,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 74,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeCombat: 2,
            CapacitéDeTir: 1,
            Duperie: 2,
            Furtivité: 2,
            Intimidation: 1,
            Investigation: 2,
            Persuasion: 1,
            Ruse: 2,
            Survie: 4,
            Technomaîtrise: 1,
            Vigilance: 2
        },
        TallentConseil: [
            {
                Id: 17,
                Nom: "COUP BAS",
                CoûtPX: 20,
                Prérequis: "",
                Effet: "vous maîtrisez l'art du combat déloyal. Chaque fois que vous effectuez une Attaque déstabilisante (p. 190) et que vous Convertissez 2 Icônes exaltées, vous pouvez infliger à votre cible une Condition supplémentaire. Choisissez la Condition la plus appropriée du point de vue narratif parmi les options suivantes : À terre (p. 199), Aveuglé (p. 199), Entravé (p. 199), Secoué (p. 200)"
            },
            {
                Id: 59,
                Nom: "QUELCONQUE",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous ne marquez pas les esprits et vous vous fondez facilement dans la foule. Les personnages d'une classe sociale supérieure avec le Mot-clé IMPERIUM, tels que les gouverneurs planétaires, la noblesse impériale ou les propriétaires de manufactorum, vous ignorent complètement à moins que vous n'attiriez une attention excessive sur vous-même. Toute personne essayant de vous remarquer ou de vous suivre dans une zone surpeuplée, ou essayant de se souvenir de votre visage, subit +2 SD."
            },
            {
                Id: 69,
                Nom: "SILENCIEUX",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous maîtrisez l'art de se déplacer silencieusement. Vous pouvez vous déplacer à pleine Vitesse lorsque vous vous Déplacez furtivement (p. 182). Chaque fois que votre Score de Furtivité est réduit, vous perdez 1 point de moins."
            },
            {
                Id: 66,
                Nom: "RUCHIER",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous avez l'habitude d'évoluer dans les environnements urbains de l'Imperium. Vous gagnez +Rang dés bonus à tous les Tests de Furtivité (A) ou de Survie (FM) lorsque vous vous déplacez dans des environnements urbains."
            }
        ],
        Influence: "-1"
    },
    /*Scout Space Marine*/
    {
        Id: 16,
        Nom: "Scout Space Marine",
        DescriptionCourte: "Génétiquement amélioré au-delà des limites humaines, vous êtes un guerrier initié de l'Adeptus Astartes déployé pour effectuer des frappes rapides et furtives.",
        DescriptionLongue: "Bien qu'ils fassent deux têtes de plus que tout autre humain, les Scouts Space Marines se déplacent silencieusement et évoluent au-devant de leurs frères Astartes. S'ils sont aussi forts et rapides que n'importe quel autre transhumain," +
            " ils n'ont pas encore la Carapace noire (ni l'expérience) qui distingue un véritable Space Marine. Les Scouts apprennent à pied et comptent sur leur Furtivité et la ruse pour rester en vie. Chacune de leurs attaques doit être décisive pour empêcher" +
            " l'ennemi de riposter. Certains utilisent des fusils de précision pour infliger la mort à distance, puis observent l'héroïsme de leurs frères de première ligne. Un Ange de la Mort ne se forge pas en un jour ; chacun d'entre eux naît mortel. Les Scouts" +
            " se souviennent encore de leur vie d'humains. Leur chair est débarrassée de l'impureté par la souffrance. Leur ForceMentale est tempérée par l'épreuve et le tourment. Leur esprit est aiguisé par la prière et l'apprentissage. Pieux, déterminés et à mi-chemin" +
            " du transhumanisme, les Scouts occupent une position unique. Ils peuvent toujours ressentir de la compassion pour les mortels, mais ils savent qu'ils ne seront plus jamais vraiment humains : un Scout meurt ou devient un Ange de la mort. Leur" +
            " conditionnement en fait des adhérents stricts au Codex Astartes, mais en raison de leur manque d'expérience et leurs souvenirs, ils ont davantage tendance à avoir de l'empathie pour les citoyens impériaux. Les Scouts Space Marines sont considérés" +
            " comme des demi-dieux. Bien que le Chapitre des Absolvers ait la réputation d'être aussi redoutable qu'intrépide, la plupart des citoyens font toujours confiance aux plus grands guerriers de l'Empereur. Le manque de ressources et la diminution des" +
            " réserves de génogermes signifient que de nombreux Scouts opèrent dans le cadre des Absolvers. Diriger un petit groupe de guerriers mortels dans des missions ciblées est considéré comme un rite de passage ; certains Scouts consacrent plusieurs décennies" +
            " à une telle mission en attendant la Carapace noire.",
        Tier: 2,
        Faction: 1,
        SousFaction: 8,
        Espèces: 4,
        CoûtPX: 170,
        MotsClés: "IMPERIUM, ADEPTUS ASTARTES, [CHAPITRE]",
        Attributs: {
            Force: 4,
            Endurance: 4,
            Agilité: 4,
            Initiative: 4,
            ForceMentale: 3,
            Intelligence: 3
        },
        Compétences: {
            Athlétisme: 3,
            CapacitéDeCombat: 3,
            CapacitéDeTir: 3,
            Furtivité: 3,
            Vigilance: 3
        },
        AptitudeArchetype: "Position dissimulée",
        Equipement: "3 Grenades Frag, Mutavox. Choix : Bolter / Pistolet bolter + Épée tronçonneuse / Fusil à pompe / Fusil de sniper + cape caméléoline",
        Armures: [
            {
                Id: 16,
                Nom: "Armure scout",
                Description: "Des plaques de céramite épaisses se combinent avec un tissage en carbone exceptionnellement résistant pour offrir une protection inégalée sur le champ de bataille sans sacrifier la mobilité.",
                Ar: "4",
                Effet: "",
                Traits: "-",
                Valeur: "5",
                Rareté: "Rare",
                MotsClés: "IMPERIUM, ADEPTUS ASTARTES"
            }
        ],
        Armes: [
            {
                Id: 2,
                Nom: "Couteau de combat Astartes",
                Description: "Cette grande lame exceptionnellement tranchante fait partie de l'équipement standard de nombreux Space Marines. Aussi long que les épées courtes des humains ordinaires, ce couteau possède un tranchant monomoléculaire qui ne s'émousse jamais.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "2",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable",
                Valeur: "3",
                Rareté: "Peu courant",
                MotsClés: "LAME, ADEPTUS ASTARTES"
            }
        ],
        CoûtAttributConseil: 0,
        ForceConseil: 4,
        EndurenceConseil: 4,
        AgiliteConseil: 4,
        InitiativeConseil: 4,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 0,
        CompetenceConseil: {
            Athlétisme: 3,
            CapacitéDeCombat: 3,
            CapacitéDeTir: 3,
            Furtivité: 3,
            Vigilance: 3
        },
        TallentConseil: "",
        Influence: "+1"
    },
    /*Ranger*/
    {
        Id: 17,
        Nom: "Ranger",
        DescriptionCourte: "Embrassant la Voie de l'Errant, vous parcourez furtivement la galaxie à la recherche de nouvelles expériences et éliminez de loin les menaces qui pèsent sur votre Vaisseau-monde.",
        DescriptionLongue: "Explorateurs de mondes lointains et dangereux, tous les Rangers quittent leur Vaisseau-monde pour partir à l'aventure. Comptant sur leur furtivité et leur adresse au tir pour rester en sécurité dans les lieux étranges qu'ils visitent," +
            " les Rangers deviennent des tireurs d'élite mortels prêts à apporter la mort à leurs ennemis. La première loyauté d'un Ranger est envers son Vaisseau-monde, le vaste vaisseau spatial qui est à la fois son lieu de naissance et sa communauté. Grâce aux" +
            " mystères de la Toile, les Rangers peuvent apparaître de nulle part pour éliminer silencieusement les menaces qui pèsent sur leur foyer. Bien que les Rangers travaillent souvent seuls, ils partagent un certain sentiment de solidarité et de camaraderie" +
            " avec leurs semblables lorsque le besoin s'en fait sentir, qu'il s'agisse de protéger leur Vaisseau-monde ou d'éliminer la souillure du Chaos. Dans leurs pérégrinations, ils interagissent avec d'autres Aeldari : Corsaires, Drukhari et même Arlequins." +
            " Beaucoup se joignent à ces autres groupes ou abandonnent complètement leurs responsabilités de Ranger au profit d'une autre destinée. Telle est la nature instable des Aeldari. Attirés par Ul-Khari, le Vaisseau-monde qui s'est écrasé sur Trollius, un" +
            " certain nombre de Rangers évoluent secrètement dans le système de Gilead. Certains semblent même servir volontairement les intérêts de l'Imperium et sont déployés dans le cadre de la délicate entente entre Varronius et les Grands prophètes d'Ul-Khari." +
            " Les Rangers sont bien conscients de la méfiance et de la répulsion que la plupart des citoyens impériaux ont à leur égard et font tout leur possible pour ne pas révéler leur identité. De nombreux Rangers se rebellent contre les responsabilités accrues" +
            " du travail dans le système de Gilead et projettent leur colère contre l'Imperium. Cependant, tous connaissent la tragédie de la perte d'une seule vie Aeldari et sont toujours prêts à combattre les forces de l'Assoiffée.",
        Tier: 2,
        Faction: 3,
        SousFaction: 11,
        Espèces: 2,
        CoûtPX: 34,
        MotsClés: "AELDARI, ASURYANI",
        Attributs: {
            Agilité: 3
        },
        Compétences: {
            CapacitéDeTir: 2,
            Furtivité: 1,
            Survie: 2
        },
        AptitudeArchetype: "Depuis les ombres",
        Equipement: "Pierre esprit, Sac de couchage, Couverture, Lunette de visée",
        Armes: [
            {
                Id: 7,
                Nom: "Long fusil de ranger",
                Description: "Cultivé avec beaucoup de difficulté et sculpté à la main par les Chanteurs de moelle Aeldari, chaque Long fusil de ranger est une œuvre d'art exquise spécialement conçue pour un seul Ranger Aeldari. Ses stabilisateurs gyrostatiques éliminent tout recul et sa technologie cristalline énigmatique projette des faisceaux de lumière mortelle à travers le champ de bataille avec une précision extrême.",
                Type: "Armes à distance Aeldari",
                Degats: "10",
                DS: "1",
                PA: "-",
                Portee: "18 / 36 / 54",
                Rafale: "0",
                Traits: "Précis (4)",
                Valeur: "7",
                Rarete: "Très rare",
                MotsClés: "LASER, AELDARI"
            },
            {
                Id: 8,
                Nom: "Pistolet shuriken",
                Description: "Avec leur facilité d'utilisation et leur recul quasi inexistant, les Pistolets shuriken sont prisés par les Aeldari qui cherchent une rapide victoire grâce à une rafale précise de shurikens à courte portée.",
                Type: "Armes à distance Aeldari",
                Degats: "10",
                DS: "1",
                PA: "-",
                Portee: "6 / 12 / 18",
                Rafale: "2",
                Traits: "Pistolet, Perforant (3)",
                Valeur: "6",
                Rarete: "Rare",
                MotsClés: "SHURIKEN, AELDARI, ASURYANI"
            },
            {
                Id: 1,
                Nom: "Couteau",
                Description: "Du hachoir d'un boucher à grox au stylet d'un assassin, de nombreuses petites armes blanches peuvent être qualifiées de « Couteaux ». Cela inclut toutes les lames qui peuvent être fixées à une arme comme une baïonnette.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-",
                Dégâts: "(F) + 2",
                DésDégâtsSupplémentaires: "2",
                Portée: "Lancer (F) x 4",
                Rafale: "-",
                Traits: "-",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, [AU CHOIX]"
            }
        ],
        Armures: [
            {
                Id: 23,
                Nom: "Cape de caméléoline",
                Description: "Tissée à partir de fibres photo-réactives, la Cape caméléoline présente des couleurs changeantes qui brouillent les contours du porteur.",
                Ar: "",
                Effet: "+1 dé bonus aux Tests de Furtivité (A) et +1 à la Défense dans l'ombre ou à couvert.",
                Traits: "",
                Valeur: "5",
                Rareté: "Rare",
                MotsClés: "[AU CHOIX]"
            },
            {
                Id: 2,
                Nom: "Armure composite Aeldari",
                Description: "Tissée à partir d'écailles microscopiques de moelle spectrale, cette armure est similaire en fonction, mais supérieure en action à l'imitation grossière que constitue l'Armure composite humaine.",
                Ar: "3",
                Effet: "",
                Traits: "-",
                Valeur: "4",
                Rareté: "Très rare",
                MotsClés: "LÉGÈRE, AELDARI, ANHRATE"
            }
        ],
        CoûtAttributConseil: 69,
        ForceConseil: 2,
        EndurenceConseil: 3,
        AgiliteConseil: 5,
        InitiativeConseil: 3,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 46,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeTir: 3,
            Connaissance: 1,
            Duperie: 1,
            Furtivité: 3,
            Psychologie: 1,
            Survie: 2,
            Vigilance: 4
        },
        TallentConseil: [
            {
                Id: 21,
                Nom: "ÉLIMINATEUR",
                CoûtPX: 20,
                Prerequis: "Score de Furtivité 2+",
                Effet: "Vous frappez dans l'ombre et utilisez l'élément de surprise pour tuer vos ennemis en un coup. Lorsque vous possédez un Score de Furtivité (p. 181) et que vous attaquez un ennemi qui ne vous a pas remarqué, vous pouvez ajouter votre Score de Furtivité comme DS, en plus des bonus liés à une Attaque surprise (p. 182). Toute diminution de votre Score de Furtivité est résolue après l'attaque."
            },
            {
                Id: 74,
                Nom: "TIR DE PRÉCISION",
                CoûtPX: 20,
                Prerequis: "Score de Capacité de Tir 2+",
                Effet: "vous êtes un tireur hors pair capable de cibler avec précision les points faibles de vos ennemis. Lorsque vous effectuez l'action Viser (p. 189) et effectuez un Tir ciblé (p. 186), le bonus de DS que vous recevez est doublé."
            },
            {
                Id: 42,
                Nom: "LEG DE TRISTESSE",
                CoûtPX: 20,
                Prerequis: "Espèce : Aeldari",
                Effet: "La longue et triste histoire de votre peuple pèse lourdement sur votre cœur. Mais loin de vous apitoyer, vous êtes plus déterminé et enhardi que jamais. Vous ne subissez plus le malus de l'Aptitude d'espèce Émotions intenses (p. 29). Le groupe gagne +1 Gloire chaque fois que vous récupérez de l'état Mourant."
            },
            {
                Id: 77,
                Nom: "VOIES MAÎTRISÉES",
                CoûtPX: 20,
                Prerequis: "Espèce Aeldari, Mot-clé ASURYANI",
                Effet: "en tant que membre d'un Vaisseau-monde, vous avez parcouru et maîtrisé de nombreuses Voies au cours de votre longue vie. Vous avez probablement oublié plus de connaissances que ce que la plupart des humains apprendront jamais, mais vous conservez toujours la maîtrise de votre ancien sujet d'étude. Sélectionnez une des Voies Aeldari. Vous ajoutez un bonus égal à votre Rang au bonus que vous recevez normalement de cette Voie Aeldari."
            }
        ],
        Influence: ""
    },
    /*Kommando*/
    {
        Id: 18,
        Nom: "Kommando",
        DescriptionCourte: "Spécimen extraordinaire de votre espèce, vous employez la ruse, la furtivité et l'autodiscipline pour accomplir des actes de brutalité sournoise.",
        DescriptionLongue: "Reflétant leurs dieux Gork et Mork, la philosophie Ork se divise en deux branches : brutal mais rusé, ou rusé mais brutal. Les Kommandos sont rusés pour qu'ils puissent être les plus brutaux et s'en vanter ensuite. Contrairement aux" +
            " Boyz, ces Orks utilisent de sales tours comme la furtivité, le camouflage et les distractions. De telles méthodes reposent sur une caractéristique rare chez les Orks : la discipline. Bien qu'il existe des Kommandos dans tous les clans Orks, les autres" +
            " Orks ont tendance à se méfier d'eux. La plupart considèrent que l'utilisation de la furtivité et du camouflage est contraire à la kultur Ork, car il n'y aurait aucun intérêt à tuer l'ennemi avant que celui-ci ne puisse se battre. Bien que les Boss de" +
            " guerre comprennent instinctivement les Kommandos, la plupart sont profondément mal à l'aise en présence de tout Ork qui resterait volontairement silencieux. L'état d'esprit aberrant qui distingue chaque Kommando sert l'ensemble du clan ; tout comme" +
            " l'Ork moyen est poussé avant tout à se battre, un Kommando trouve le plus grand plaisir dans les opérations secrètes. Se faufiler à travers une base ennemie pour massacrer des ennemis pris par surprise, attendre patiemment de frapper pour optimiser" +
            " l'impact d'une embuscade, utiliser des explosifs à retardement pour paralyser les lignes de ravitaillement : toutes ces méthodes incarnent les « taktiks » de bataille de Mork. Certains Kommandos partent si loin devant la tribu qu'ils se retrouvent" +
            " profondément enfouis derrière les lignes ennemies, au point qu'ils finissent par être oubliés et mènent de longues campagnes sans ordres, exécutant des missions furtives uniquement pour le plaisir.",
        Tier: 2,
        Faction: 4,
        SousFaction: 11,
        Espèces: 3,
        CoûtPX: 54,
        MotsClés: "ORK, [CLAN]",
        Attributs: {
            Force: 3,
            Endurance: 3,
            Agilité: 3
        },
        Compétences: {
            CapacitéDeCombat: 2,
            Furtivité: 2,
            Survie: 1
        },
        AptitudeArchetype: "Plan rusé : Vous et n'importe lequel de vos alliés avec le Mot-clé ORK dans un rayon de 15 mètres gagnez +Double de votre Rang des bonus aux Tests de Furtivité (A).",
        Equipement: "3 Stikkbombs, Kit de survie",
        Armes: [
            {
                Id: 10,
                Nom: "Fling'",
                Description: "Le type d'arme à feu Ork le plus courant. Ces fusils encombrants fabriqués avec de la ferraille sont à mi-chemin entre un gourdin et une arme automatique. Ils vomissent des murs de balles imprécis et de gros calibre avec une détonation assourdissante souvent appelée « Dakka » par leurs propriétaires peaux-vertes.",
                Type: "Armes à distance Orks",
                Dégâts: "1",
                PénétrationArmure: "-",
                Portée: "9 / 18 / 27",
                Rafale: "2",
                Traits: "Assaut, Waaagh!",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "PROJECTILE, ORK"
            },
            {
                Id: 9,
                Nom: "Kalibr'",
                Description: "Ces gros pistolets sont bruyants et grossiers. Ils tirent des munitions tellement chargées de poudre à canon qu'elles sont presque inutiles sauf à bout portant.",
                Type: "Armes à distance Orks",
                Dégâts: "1",
                PénétrationArmure: "-",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Pistolet, Waaagh!",
                Valeur: "3",
                Rareté: "Courant",
                MotsClés: "PROJECTILE, ORK"
            },
            {
                Id: 6,
                Nom: "Kikoup'",
                Description: "Souvent la première arme qu'un jeune Ork tient dans ses mains, les Kikoup' sont de simples lames lourdes qui se combinent avec la force naturelle d'un Ork pour réduire l'infanterie ennemie en charpie.",
                Type: "Armes de mêlée Orks",
                PénétrationArmure: "-",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "3",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable, Waaagh!",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, ORK"
            }
        ],
        CoûtAttributConseil: 60,
        ForceConseil: 4,
        EndurenceConseil: 4,
        AgiliteConseil: 4,
        InitiativeConseil: 3,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 52,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeCombat: 4,
            CapacitéDeTir: 1,
            Furtivité: 4,
            Intimidation: 2,
            Ruse: 1,
            Survie: 1,
            Technomaîtrise: 2,
            Vigilance: 1
        },
        TallentConseil: [
            {
                Id: 10,
                Nom: "BRUTE",
                CoûtPX: 20,
                Prérequis: "Score de Force 3+",
                Effet: "vos attaques portent des coups brutaux, quelle que soit l'arme que vous utilisez. Chaque arme de mêlée que vous utilisez possède le Trait d'arme Brutal (p. 209), y compris pour vos attaques à mains nues. Si vous réussissez une attaque de mêlée avec une arme qui possède déjà le Trait d'arme Brutal, vous infligez +1 dégât supplémentaire. Ce bonus de dégât est appliqué après le calcul de vos dégâts totaux, il ne s'ajoute pas à la valeur Dégâts de l'arme."
            },
            {
                Id: 21,
                Nom: "ÉLIMINATEUR",
                CoûtPX: 20,
                Prerequis: "Score de Furtivité 2+",
                Effet: "Vous frappez dans l'ombre et utilisez l'élément de surprise pour tuer vos ennemis en un coup. Lorsque vous possédez un Score de Furtivité (p. 181) et que vous attaquez un ennemi qui ne vous a pas remarqué, vous pouvez ajouter votre Score de Furtivité comme DS, en plus des bonus liés à une Attaque surprise (p. 182). Toute diminution de votre Score de Furtivité est résolue après l'attaque."
            },
            {
                Id: 56,
                Nom: "PLUSS DE DAKKA !",
                CoûtPX: 35,
                Prerequis: "Espèce : Ork",
                Effet: "vous aimez l'odeur et le son du Dakka, et vous avez la fâcheuse tendance à épuiser des quantités exorbitantes de munitions : cette tactique peut paraître simpliste, mais son efficacité est indéniable. La valeur Rafale de toute arme que vous utilisez est augmentée de votre Rang. Vous pouvez utiliser un Grot bastos (p. 241) pour transporter des Munitions supplémentaires."
            },
            {
                Id: 69,
                Nom: "SILENCIEUX",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous maîtrisez l'art de se déplacer silencieusement. Vous pouvez vous déplacer à pleine Vitesse lorsque vous vous Déplacez furtivement (p. 182). Chaque fois que votre Score de Furtivité est réduit, vous perdez 1 point de moins."
            },
        ],
        Influence: ""
    },
    /*Technoprêtre*/
    {
        Id: 19,
        Nom: "Technoprêtre",
        DescriptionCourte: "Vous êtes un membre de haut rang de l'Adeptus Mechanicus. La technologie et la religion ne font qu'un pour vous et vous êtes un vrai dévot.",
        DescriptionLongue: "Dévoué au service du Dieu-Machine, un Technoprêtre a étudié et maîtrise une ou plusieurs des disciplines technologiques ou scientifiques sacrées qui constituent son crédo. La connaissance et l'expertise sont synonymes d'autorité parmi" +
            " les rangs des croyants du Mechanicus. Lorsque la machinerie ésotérique de l'Imperium fonctionne mal, les citoyens réclament un Technoprêtre. Chaque Technoprêtre est spécialisé dans un ou plusieurs domaines d'étude liés à la machine sacrée. Les" +
            " Génétors étudient l'interface entre le biologique et le mécanique. Les Logis accumulent et organisent des informations obscures. Les plus courants sont les Artisans, qui fabriquent et entretiennent les machines mystiques nécessaires à l'Imperium." +
            " Chacun est un ardent gardien des secrets occultes de la technologie. En tant que membres supérieurs de l'Adeptus Mechanicus, les Technoprêtres ont remplacé une grande partie de leur chair faible par une technologie sacrée, bien qu'ils conservent" +
            " une partie de leur cerveau organique, car devenir une machine capable de penser serait un blasphème de premier ordre. Les Technoprêtres sont plus habitués à interagir avec les Esprits de la machine qu'avec les humains. On se tient à l'écart de" +
            " telles figures énigmatiques, si proches des machines qu'ils vénèrent qu'ils pourraient aussi bien être d'une autre espèce. Les réparations sont plus importantes que jamais alors que le système de Gilead est confronté à de graves problèmes" +
            " d'approvisionnement. Au-delà des vigilants augures des hautes Magos d'Avachrus, les Technoprêtres mènent des expériences désespérées pour échapper à leur sort. Certains ont été extirpés de leur congrégation de combat pour rejoindre de petites" +
            " forces de frappe en tant que conseillers technologiques et spirituels à la recherche d'avancées technologiques à utiliser contre les ennemis de l'Omnimessie.",
        Tier: 2,
        Faction: 1,
        SousFaction: 5,
        Espèces: 1,
        CoûtPX: 44,
        MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, CULTE MECHANICUS, [MONDE-FORGE]",
        Attributs: {
            Intelligence: 3
        },
        Compétences: {
            Connaissance: 1,
            Technomaîtrise: 3
        },
        AptitudeArchetype: "Rite de réparation : Vous recevez +Double de votre Rang des bonus aux Tests de Technomaîtrise (Int) pour réparer des machines endommagées. Tous les Tests de Technomaîtrise (Int) que vous effectuez prennent la moitié du temps standard.",
        Equipement: "Une Mécadendrite, 2 Augmentations au choix, Combi-outils, Sceau de l'Omnimessie (symbole d'autorité)",
        Armes: [
            {
                Id: 22,
                Nom: "Hache de l'Omnimessie / Hache énergétique",
                Description: "Symbole du pouvoir du Dieu-Machine, la Hache de l'Omnimessie est ornée d'icônes Mechanicus et d'engrenages ornementaux. / Une Hache énergétique coupe avec la force d'un éclair. Cette arme est capable de fendre une armure et de démembrer sa victime comme un bûcheron le ferait avec des bûches.",
                Type: "Armes énergétiques",
                PénétrationArmure: "-2",
                Dégâts: "(F) + 5",
                DésDégâtsSupplémentaires: "5",
                Portée: "2",
                Rafale: "-",
                Traits: "-",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "CHAMP DE FORCE, À 2 MAINS, ADEPTUS MECHANICUS"
            },
            {
                Id: 38,
                Nom: "Pistolet laser",
                Description: "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                Type: "Armes Laser",
                PénétrationArmure: "-",
                Dégâts: "7",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Fiable, Pistolet",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LASER, IMPERIUM"
            }
        ],
        Armures: [
            {
                Id: 9,
                Nom: "Armure énergétique légère",
                Description: "En réduisant l'encombrement des plaques de céramite, l'Armure énergétique légère offre les avantages d'une force servomoteur augmentée et d'une coque en céramite durable, mais sans sacrifier la mobilité ou l'agilité de son porteur.",
                Ar: "4",
                Effet: "",
                Traits: "Énergétique (1)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM"
            }
        ],
        CoûtAttributConseil: 102,
        ForceConseil: 2,
        EndurenceConseil: 3,
        AgiliteConseil: 2,
        InitiativeConseil: 2,
        ForceMentaleConseil: 3,
        Intelligncve: 7,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 94,
        CompetenceConseil: {
            CapacitéDeCombat: 2,
            CapacitéDeTir: 4,
            Connaissance: 4,
            Investigation: 1,
            Medicae: 2,
            Pilotage: 2,
            Technomaîtrise: 6,
            Vigilance: 2
        },
        TallentConseil: [
            {
                Id: 18,
                Nom: "DÉDUCTION",
                CoûtPX: 20,
                Prérequis: "Score d'Intelligence 3+",
                Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
            },
            {
                Id: 61,
                Nom: "RÉSONANCE BINAIRE",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "vous maîtrisez parfaitement les constructs mécaniques. Vous gagnez +Double de votre Rang dés bonus chaque fois que vous essayez de contrôler, de programmer ou d'interroger un Serviteur ou une construction similaire, comme un chérubin ou un Servo-crâne."
            },
            {
                Id: 64,
                Nom: "RITUEL DE LA PENSÉE PURE",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "vous avez remplacé un hémisphère de votre cerveau par un cogitateur. Vous vivez une existence sans émotion, basée sur la pureté paisible et gratifiante de la logique. Vous gagnez un +Rang des bonus aux Tests de Résolution et de Peur, ainsi que pour résister aux Attaques déstabilisantes de Persuasion et d'Intimidation. Vous gagnez +Rang dés bonus lorsque vous effectuez des Tests d'investigation."
            },
            {
                Id: 63,
                Nom: "RITUEL DE MAGNOMÉTRIE",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "vous avez installé de puissants électro-aimants contrôlables par la pensée dans vos Augmentiques. Vous pouvez varier l'intensité et la fréquence de vos émissions électromagnétiques, ce qui vous permet d'attirer des objets métalliques et de survoler de grandes surfaces métalliques. Vous pouvez prendre et déplacer des objets métalliques jusqu'à 3 + Double de votre Rang mètres de votre corps vers n'importe quel objet métallique stable ou de grande taille et le survoler. Aucun Test n'est requis pour ces capacités. L'utilisation de ce Talent au combat nécessite une Action simple. La portée effective de ce Talent est égale à votre Rang x 20 mètres. La Force effective de ce Talent (à utiliser pour lancer un objet ou résister à une autre force) est de 1 + Double de votre Rang."
            }
        ],
        Influence: "+2"
    },
    /*Croisé*/
    {
        Id: 20,
        Nom: "Croisé",
        DescriptionCourte: "Moine guerrier de l'Ecclésiarchie, l'adoration de l'Empereur et le combat singulier contre Ses ennemis ne font qu'un pour vous.",
        DescriptionLongue: "Bastions d'honneur et maîtres du combat singulier ayant prêté serment à l'Ecclésiarchie, les Croisés sont des moines guerriers qui vont là où leur foi les appelle. Avec un stoïcisme dévot, ils hissent de grands boucliers tempête" +
            " et de lourdes lames énergétiques. D'un pas déterminé, ils avancent, leurs robes vertueuses du Culte Impérial flottant derrière eux, indifférents au poids de leur armure ou de leurs serments. Ils sont le rempart sur lequel les hérétiques se brisent," +
            " et les chasseurs implacables qui poursuivent impitoyablement les impies. Ce sont les Croisés de l'Ecclésiarchie, et personne ne peut échapper à leur jugement. Certaines Maisons de Croisés recrutent exclusivement dans la Schola Progenium, tandis que" +
            " d'autres n'acceptent que les membres de la noblesse. Les pères romerains qui rassemblèrent l'ensemble des Croisés, même les plus inexpérimentés, sont une aptitude exceptionnelle au combat au corps à corps et une dévotion obstinée au Crédo Impérial." +
            " Une fois son entraînement terminé, un Croisé prête un serment personnel sacré et quitte son monastère pour avancer avec détermination, résolu à accomplir sa tâche. Beaucoup accompagnent d'autres groupes, dans l'espoir qu'en contribuant aux objectifs" +
            " de leurs camarades, ces derniers rendront la pareille et aideront à remplir le serment du Croisé. Les Croisés sont des combattants de première ligne et des gardiens dévoués. Leur habileté avec une lame, leur ForceMentale de fer et leur armure lourde les" +
            " rendent capables de repousser des coups sous lesquels tomberaient la grande majorité des mortels. Le monde-sanctuaire Enoch a attiré de nombreux pèlerins Croisés avant l'arrivée de la Grande Faille. La plupart ont prêté un serment supplémentaire de" +
            " protéger les synodes et les cathédrales jusqu'à ce que la tempête Warp s'apaise, pensant pouvoir repousser la longue nuit par le pouvoir de la foi.",
        Tier: 3,
        Faction: 1,
        SousFaction: 3,
        Espèces: 1,
        CoûtPX: 54,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM",
        Attributs: {
            Initiative: 3,
            ForceMentale: 3
        },
        Compétences: {
            CapacitéDeCombat: 3,
            Connaissance: 1
        },
        AptitudeArchetype: "Armure de la foi : Vous gagnez +Double de votre Rang des bonus pour les Tests d'Attaque de mêlée contre des cibles avec le Mot-clé CHAOS ou HÉRÉTIQUE. Votre Résolution est également augmentée par votre Rang.",
        Equipement: "Bouclier tempête, Robes du Ministorum",
        Armes: [
            {
                Id: 20,
                Nom: "Épée énergétique",
                Description: "Ces armes rares sont réservées aux héros de renom et aux officiers les plus prestigieux. L'énergie qui jaillit le long du fil d'une Épée énergétique est à la fois un avertissement et un défi pour tous ceux qui se dressent face à son porteur.",
                Type: "Armes énergétiques",
                PénétrationArmure: "-3",
                Dégâts: "(F) + 5",
                DésDégâtsSupplémentaires: "4",
                Portée: "-",
                Rafale: "-",
                Traits: "Parade",
                Valeur: "6",
                Rareté: "Rare",
                MotsClés: "CHAMP DE FORCE, IMPERIUM, AELDARI"
            }
        ],
        Armures: [
            {
                Id: 7,
                Nom: "Armure carapace",
                Description: "Fabriquée à partir de plaques superposées d'armaplast rigides, l'Armure carapace offre une excellente protection contre les impacts directs, au détriment de la mobilité et de la flexibilité.",
                Ar: "4",
                Effet: "",
                Traits: "Massive (1)",
                Valeur: "5",
                Rareté: "Peu courant",
                MotsClés: "IMPERIUM, ADEPTUS ASTARTES, ASTRA MILITARUM"
            },
            {
                Id: 13,
                Nom: "Bouclier tempête",
                Description: "Un Bouclier tempête est un bouclier lourd en forme de dalle de céramite renforcée et d'armaplast, augmenté d'un projecteur de champ interne qui l'entoure d'une énergie crépitante. Ces boucliers sont le plus souvent portés par des gardes du corps protégeant des individus d'une importance capitale ou par de prestigieux Astartes spécialistes du combat rapproché.",
                Ar: "*2",
                Effet: "",
                Traits: "Bouclier, Champ de force, Massive (1)",
                Valeur: "8",
                Rareté: "Unique",
                MotsClés: "CHAMP DE FORCE, IMPERIUM, ADEPTUS ASTARTES, ADEPTUS MINISTORUM, INQUISITION"
            }
        ],
        CoûtAttributConseil: 84,
        ForceConseil: 4,
        EndurenceConseil: 3,
        AgiliteConseil: 3,
        InitiativeConseil: 5,
        ForceMentaleConseil: 4,
        Intelligncve: 3,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 94,
        CompetenceConseil: {
            Athlétisme: 3,
            CapacitéDeCombat: 5,
            Commandement: 2,
            Connaissance: 5,
            Intimidation: 1,
            Psychologie: 3,
            Vigilance: 3
        },
        TallentConseil: [
            {
                Id: 28,
                Nom: "FLAGELLANT",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous consacrez votre souffrance au service de l'Empereur. Au début de chaque journée, vous devez passer 20 minutes (norme de Terra) en prière et vous infliger des Blessures égales à votre Tier par autoflagellation. Vous ne pouvez pas faire de jet de Détermination contre ces Blessures ou permettre qu'elles soient soignées autrement que par un Repos. Tant que vous êtes blessé de cette manière, vous gagnez +Rang dés bonus à vos jets de Détermination et de Conviction et pouvez choisir de devenir Frénétique (p. 199) en tant qu'Action de combat. Si vous possédez également le Talent Frénésie, vous pouvez devenir Frénétique avec une Action simple. Si vous ne parvenez pas à vous flageller, la honte vous envahit et vous subissez une pénalité de +2 SD à tous les Tests jusqu'à ce que vous flagelliez à nouveau."
            },
            {
                Id: 39,
                Nom: "LE DEVOIR DANS LA MORT",
                CoûtPX: 20,
                Prerequis: "Score de Force mentale 3+, Mot-clé IMPERIUM",
                Effet: "Votre foi ardente en l'Empereur vous permet de dépasser vos limites pour agir selon Sa ForceMentale, au détriment de votre forme physique. Chaque fois que vous subissez plus de Blessures que votre Maximum de blessures, vous pouvez utiliser ce Talent. Vous pouvez effectuer votre prochain Tour normalement, mais vous devenez Mourant à la fin de ce Tour. Vous pouvez choisir de faire votre prochain Tour immédiatement après avoir activé ce Talent, et il est ainsi possible d'interrompre le Tour d'un ennemi. Si vous obtenez une Complication à n'importe quel Test, vous subissez une Blessure grave."
            },
            {
                Id: 52,
                Nom: "ORTHOPRAXIE",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "les litanies de Sa Sainte Parole sont profondément gravées dans votre mémoire. Vous pouvez réciter par cœur des hymnes et des prières à l'Empereur et les utiliser pour renforcer votre esprit. Comme Action simple, vous pouvez commencer à réciter mentalement des liturgies ecclésiastiques. Tant que vous sacrifiez votre Action simple de cette manière, vous gagnez un bonus de Force mentale de +1, pour un maximum de Rounds égal au double de votre Rang. Vous ne pouvez plus utiliser ce Talent tant que vous n'avez pas terminé un Repos."
            },
            {
                Id: 73,
                Nom: "TENACE",
                CoûtPX: 30,
                Prerequis: "Aucun",
                Effet: "votre persévérance dépasse l'entendement. Vous récupérez 1 Stress pour chaque Icône exaltée que vous obtenez pendant un jet de Détermination (p. 196)."
            }
        ],
        Influence: "+1"
    },
    /*Commissaire Impérial*/
    {
        Id: 21,
        Nom: "Commissaire Impérial",
        DescriptionCourte: "Vous êtes un officier supérieur de l'Astra Militarum chargé de maintenir le moral par tous les moyens nécessaires. Vous veillez à ce que les soldats fassent leur devoir en les dirigeant sur le front.",
        DescriptionLongue: "Debout au cœur de la bataille, le Commissaire pénètre de son regard perçant l'âme de ses soldats et ricane avec dédain face aux ennemis de l'Imperium. Lorsque la ForceMentale d'un soldat se brise, le Commissaire le remet sur pieds. Quand" +
            " des lâches font volte-face et s'enfuient, le Commissaire autorise à exécuter sommairement les fuyards, veille à ce que personne ne les suive. Lorsque la charge faiblit face à une opposition insurmontable, le commissaire est le premier à franchir la" +
            " brèche et à foncer sur l'ennemi dans une démonstration inspirante de détermination et de férocité. Les Commissaires sont la ForceMentale de fer de l'Empereur manifestée : il faut triompher, quel qu'en soit le prix. Diplômés de l'illustre Officio Prefectus," +
            " les Commissaires sont formés pour être des guerriers compétents et des chefs inspirants, dévoués au Crédo Impérial et déterminés à réaliser les idéaux de l'Imperium. Ces officiers aguerris et affûtés sont affectés aux régiments de l'Astra Militarum en" +
            " tant que conseillers et multiplicateurs de force, et ils se tiennent prêts à intervenir et à assumer le contrôle direct des opérations en cas de besoin. Habitués à s'adapter aux étranges coutumes du régiment auquel ils sont rattachés, ils tissent des" +
            " liens rapides ou maintiennent un détachement calculé. Leur droit d'exécuter quiconque refuse les ordres peut souvent mettre à rude épreuve les relations. Le système de Gilead a besoin de gens qui n'hésiteront pas à commettre un mal nécessaire. En" +
            " raison de la profusion d'orphelins dans le système, l'Officio Prefectus peut se permettre d'affecter ces commandants hautement qualifiés à des groupes plus petits et d'utiliser leur réputation redoutée et leur formation en compétences interpersonnelles" +
            " pour résoudre des problèmes politiques.",
        Tier: 3,
        Faction: 1,
        SousFaction: 2,
        Espèces: 1,
        CoûtPX: 76,
        MotsClés: "IMPERIUM, ASTRA MILITARUM, OFFICIO PREFECTUS",
        Attributs: {
            Force: 3,
            Endurance: 3,
            ForceMentale: 4
        },
        Compétences: {
            CapacitéDeCombat: 1,
            CapacitéDeTir: 1,
            Commandement: 2,
            Intimidation: 2
        },
        AptitudeArchetype: "Respect et Discipline : Tous les alliés à moins de 15 mètres de vous qui peuvent vous voir peuvent ajouter +Double de votre Rang des bonus aux Tests de Résolution. Vous ajoutez +Double de votre Rang des bonus à tous les Tests" +
            " d'Intimidation (FM), y compris pour les Attaques déstabilisantes.",
        Equipement: "Kit de ration du Ministorum, Couverture, Trousse de toilette, Manuel d'édification, 3 Rations de survie",
        Armes: [
            {
                Id: 31,
                Nom: "Pistolet bolter",
                Description: "Toute la puissance et la fureur d'une arme à bolt, mais dans un format compact. Les spécialistes du combat rapproché affrontant des ennemis dangereux et les officiers désireux de marquer les esprits privilégient ces armes aussi redoutables que maniables.",
                Type: "Arme à Bolt",
                PénétrationArmure: "0",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            },
            {
                Id: 8,
                Nom: "Épée tronçonneuse",
                Description: "Malgré leur apparence brutale et leur rugissement rauque distinct, les épées tronçonneuses (parfois appelées « Lames tronçonneuses ») nécessitent de l'entraînement pour être maniées efficacement. Un duel entre deux porteurs d'Épée tronçonneuse entraînés est un spectacle qui vaut le détour : ces combattants sont capables de modifier la vitesse et la direction des chaînes dentelées pour contrer, parer et vaincre leur adversaire avec une grâce sauvage.",
                Type: "Armes tronçonneuses",
                PénétrationArmure: "-",
                Dégâts: "(F) + 5",
                DésDégâtsSupplémentaires: "4",
                Portée: "-",
                Rafale: "-",
                Traits: "Brutal, Parade",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "TRONÇONNEUSE, AELDARI, IMPERIUM, CHAOS"
            }
        ],
        Armures: [
            {
                Id: 5,
                Nom: "Manteau pare-balles",
                Description: "Les Commissaires et autres officiers supérieurs de la Garde impériale privilégient cette alternative légère au Gilet pare-balles standard.",
                Ar: "3",
                Effet: "",
                Traits: "-",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "PARE-BALLES, IMPERIUM, ASTRA MILITARUM"
            }
        ],
        CoûtAttributConseil: 83,
        ForceConseil: 3,
        EndurenceConseil: 3,
        AgiliteConseil: 2,
        InitiativeConseil: 3,
        ForceMentaleConseil: 5,
        Intelligncve: 2,
        SociabiliteConseil: 4,
        CompétencesConseilCoût: 106,
        CompetenceConseil: {
            Athlétisme: 1,
            CapacitéDeCombat: 2,
            CapacitéDeTir: 3,
            Commandement: 5,
            Connaissance: 2,
            Intimidation: 5,
            Persuasion: 2,
            Psychologie: 3,
            Vigilance: 3
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 67,
                Nom: "SANS PEUR",
                CoûtPX: 30,
                Prerequis: "Score de Force mentale 4+",
                Effet: "un conditionnement mental approfondi ou un entraînement intensif vous permet de contrôler complètement votre peur. Vous réussissez automatiquement n'importe quel Test de Peur. Vous êtes immunisé contre les Attaques déstabilisantes d'Intimidation (FM)."
            },
            {
                Id: 70,
                Nom: "STOÏQUE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "que ce soit par un hasard de la biologie, une intervention chirurgicale ou une blessure traumatique, votre visage ne trahit plus vos émotions comme les autres membres de votre espèce. Vous infligez une pénalité égale au Double de votre Rang en SD sur tous les Tests de Psychologie effectués contre vous."
            },
            {
                Id: 73,
                Nom: "TENACE",
                CoûtPX: 30,
                Prerequis: "Aucun",
                Effet: "votre persévérance dépasse l'entendement. Vous récupérez 1 Stress pour chaque Icône exaltée que vous obtenez pendant un jet de Détermination (p. 196)."
            }
        ],
        Influence: "+3"
    },
    /*Desperado*/
    {
        Id: 22,
        Nom: "Desperado",
        DescriptionCourte: "Hors-la-loi solitaire échappant au contrôle de l'Imperium, vous êtes un mercenaire compétent libéré des entraves de votre faction et de votre famille.",
        DescriptionLongue: "Les Desperados rejettent la protection du puissant Imperium et préfèrent compter sur leur intelligence et leurs capacités pour survivre et prospérer. Ce sont des mercenaires, des chasseurs de primes, des contrebandiers et des pirates," +
            " et ils sont prêts à tout pour prospérer en dehors de la loi. Libérés des contraintes de la bureaucratie byzantine de l'Imperium, les Desperados opèrent au-delà des protections de la Lex Imperialis : leur intelligence et leur ruse leur suffisent pour" +
            " survivre. Ils peuvent toujours vénérer l'Empereur-Dieu, mais ils possèdent leur propre code d'honneur et exécutent des contrats selon leurs propres principes. Ils doivent faire preuve d'une grande polyvalence pour se protéger et évoluer dans les milieux" +
            " les plus sombres de la société. Cela en fait d'excellents gardes du corps, pilotes et porte-parole sournois ou charmants qui sont particulièrement à l'aise dans les relations avec les contacts de la pègre. Les Desperados mènent des vies variées. Les" +
            " pirates de l'espace du Bourbier du vide peuvent escorter des vaisseaux de l'Imperium pendant un temps, puis s'allier à une Coterie Corsaire la semaine suivante. Pendant ce temps, les « chevaucheurs de requins » de Charybdis chassent les océans à bord" +
            " de toutes sortes d'esquifs anti-grav et de motos aquatiques. Il existe d'autres entrepreneurs moins belliqueux qui tentent de se faire une fortune par la simple force de leur intelligence. Des chasseurs d'archéotechnologies explorent les Space Hulks," +
            " des chasseurs traquent de gros gibiers sur Nethreus et des prospecteurs exploitent les ceintures d'astéroïdes du Bourbier du vide. Les hors-la-loi peuvent être motivés par différentes choses : le profit, le frisson du danger ou bien la vengeance contre" +
            " un client qui s'est rétracté. La plupart des Desperados travaillent seuls, mais ceux qui sont piégés dans le système de Gilead ont réalisé qu'en ces temps incertains, les opportunités de travail sont innombrables mais toute échappatoire est impossible." +
            " Bien qu'ils aient peu d'influence sur les organisations, ils sont proches des gens ordinaires, dont le quotidien était autrefois similaire au leur.",
        Tier: 3,
        Faction: 1,
        SousFaction: 9,
        Espèces: 1,
        CoûtPX: 52,
        MotsClés: "RACAILLES, [AU CHOIX]",
        Attributs: {
            Agilité: 3,
            Intelligence: 2
        },
        Compétences: {
            Investigation: 2,
            Ruse: 2,
            Vigilance: 2
        },
        AptitudeArchetype: "Proie de valeur : Vous gagnez +Rang des bonus pour les Tests de Ruse (Soc) et tout Test effectué pour pister un individu.",
        Equipement: "Lunettes infrarouges, Cartes des Mondes du noyau, Combi-outils, toute arme ayant le Mot-clé PROJECTILE, toute arme de mêlée de Rareté Peu courant ou inférieure",
        Armures: [
            {
                Id: 5,
                Nom: "Manteau pare-balles",
                Description: "Les Commissaires et autres officiers supérieurs de la Garde impériale privilégient cette alternative légère au Gilet pare-balles standard.",
                Ar: "3",
                Effet: "",
                Traits: "-",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "PARE-BALLES, IMPERIUM, ASTRA MILITARUM"
            }
        ],
        CoûtAttributConseil: 99,
        ForceConseil: 2,
        EndurenceConseil: 3,
        AgiliteConseil: 5,
        InitiativeConseil: 4,
        ForceMentaleConseil: 2,
        Intelligncve: 4,
        SociabiliteConseil: 4,
        CompétencesConseilCoût: 88,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeCombat: 2,
            CapacitéDeTir: 3,
            Duperie: 1,
            Furtivité: 3,
            Investigation: 4,
            Medicae: 1,
            Persuasion: 1,
            Pilotage: 1,
            Psychologie: 2,
            Ruse: 4,
            Survie: 1,
            Technomaîtrise: 1,
            Vigilance: 3
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 17,
                Nom: "COUP BAS",
                CoûtPX: 20,
                Prérequis: "",
                Effet: "vous maîtrisez l'art du combat déloyal. Chaque fois que vous effectuez une Attaque déstabilisante (p. 190) et que vous Convertissez 2 Icônes exaltées, vous pouvez infliger à votre cible une Condition supplémentaire. Choisissez la Condition la plus appropriée du point de vue narratif parmi les options suivantes : À terre (p. 199), Aveuglé (p. 199), Entravé (p. 199), Secoué (p. 200)"
            },
            {
                Id: 33,
                Nom: "HUMOUR NOIR",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous arrivez à trouver de l'humour dans les situations les plus désespérées, et vous pouvez vous en servir pour renforcer la détermination de vos alliés. Vous pouvez effectuer une Action simple pour faire une blague sinistre chaque fois que vous êtes Blessé ou souffrez d'une Condition, tant que vous êtes encore capable de parler. Faites un Test d'Attribut de Sociabilité SD 2. Si vous réussissez, vous et tous les alliés qui peuvent vous entendre récupérez un nombre de points de Stress égal à votre Rang plus le nombre d'Icônes obtenues."
            },
            {
                Id: 36,
                Nom: "JARGON [COMPÉTENCE]",
                CoûtPX: 20,
                Prerequis: "Score de 1+ dans une des Compétences suivantes : Capacité de Combat (I), Capacité de Tir (A), Connaissance (Int), Medicae (Int), Pilotage (A), Survie (FM) ou Technomaîtrise (Int).",
                Effet: "vous êtes suffisamment informé sur un sujet particulier pour disserter à l'infini. Votre emploi d'un langage mystifiant, spécifique et étrange suffit à stupéfier les profanes et à vous faire rapidement des amis parmi ceux qui partagent votre passion. Lorsque vous prenez ce Talent, vous devez choisir à laquelle de vos Compétences il s'applique dans la liste des Prérequis ci-dessus. Lors de toute rencontre sociale, vous pouvez faire un Test de Compétence en utilisant la Compétence associée à votre Jargon. Le SD est déterminé par le MJ en fonction du degré d'amitié de la cible avec vous. Si vous échouez, tout le monde autour de vous ignore votre bavardage incohérent. Si vous réussissez et que la cible est intéressée ou formée à la Compétence, elle deviendra probablement plus amicale avec vous (voir p. 168). Si la cible ne partage pas vos connaissances et votre argot, elle reste stupéfaite pendant que vous blablatez : elle est distraite, incapable de s'éloigner de votre conversation pendant une durée maximale de 20 minutes (norme de Terra)."
            }
        ],
        Influence: "+1"
    },
    /*Space Marine Tactique*/
    {
        Id: 23,
        Nom: "Space Marine Tactique",
        DescriptionCourte: "Un super soldat génétiquement amélioré, supérieur en tout point à un mortel, vêtu d'une armure énergétique et déployé pour détruire les ennemis de l'Imperium.",
        DescriptionLongue: "Les Anges de la mort avancent telles les légendes du Moyen-Âge technologique, le bolter et la lame à la main, dominant le champ de bataille. Ce sont des guerriers transhumains imposants de plus de deux mètres de haut, vêtus d'une armure" +
            " ancestrale qui amplifie encore davantage la puissance de leurs coups, qui frappent leurs ennemis avec les armes les plus dévastatrices que l'Imperium puisse forger. Ce sont les Space Marines de l'Empereur, et ils ne connaissent pas la peur. Le Space" +
            " Marine tactique a peu changé depuis que l'Empereur a génétiquement créé la première de leurs légions. Fantassin flexible et impitoyablement efficace, un seul Astartes est aussi lourdement armé et dangereux qu'une centaine de guerriers mortels. Les" +
            " citoyens prient pour que l'Empereur envoie Ses justes libérateurs, qui tombent des cieux dans des Modules de largage pour décimer les ennemis de l'humanité. Leur vie est dédiée à l'anéantissement des ennemis de l'Imperium ; tout temps loin du champ" +
            " de bataille est généralement consacré à l'affûtage de leurs corps tels des armes. Les Astartes pratiquent un entraînement martial constant, un entretien méticuleux de leurs armes et d'autres rituels qui les rapprochent de l'idée que leur Chapitre se" +
            " fait du guerrier parfait. En raison de votre taille imposante et de votre équipement distinctif, votre présence passe rarement inaperçue. Même sans armure, vous dominez les humains, et votre forme augmentée est couverte des cicatrices des opérations" +
            " chirurgicales et des batailles innombrables que vous avez subies. Vous vous retrouverez le plus souvent à l'écart de ceux que vous avez le devoir de protéger, incapable de compatir avec des mortels plus faibles dont l'espérance de vie ne représente" +
            " qu'une fraction de la vôtre. C'est particulièrement vrai des Absolvers, connus pour leur capacité à réprimer les rébellions, mais c'est un faible prix à payer pour apporter un juste jugement aux ennemis de l'Empereur.",
        Tier: 3,
        Faction: 1,
        SousFaction: 8,
        Espèces: 4,
        CoûtPX: 277,
        MotsClés: "IMPERIUM, ADEPTUS ASTARTES, [CHAPITRE]",
        Attributs: {
            Force: 4,
            Endurance: 5,
            Agilité: 5,
            Initiative: 5,
            ForceMentale: 3,
            Intelligence: 3
        },
        Compétences: {
            Athlétisme: 3,
            CapacitéDeCombat: 4,
            CapacitéDeTir: 5,
            Commandement: 1,
            Connaissance: 1,
            Furtivité: 3,
            Survie: 1,
            Vigilance: 3
        },
        AptitudeArchetype: "Flexibilité tactique : Votre entraînement vous a préparé à toute circonstance. Lorsque vous faites un Coup critique, vous pouvez faire deux jets sur la table Coups critiques et choisir un des deux résultats obtenus.",
        Equipement: "3 Grenades Frag, 3 Grenades Krak",
        Armures: [
            {
                Id: 17,
                Nom: "Armure Mk VII Aquila",
                Description: "Parfaitement adaptée à son porteur, l'Armure Aquila est l'un des modèles d'armure Astartes les plus anciens en circulation. Cette vénérable combinaison a fait ses preuves à maintes reprises dans une galaxie éternellement en guerre.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (3)",
                Valeur: "8",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTUS ASTARTES"
            }
        ],
        Armes: [
            {
                Id: 26,
                Nom: "Bolter",
                Description: "Difficiles à manier par de simples mortels, les Bolters sont pensés pour les Astartes. Ces fusils polyvalents sont comme le prolongement du corps d'un Space Marine.",
                Type: "Arme à Bolt",
                PénétrationArmure: "-1",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "12 / 24 / 36",
                Rafale: "2",
                Traits: "Brutal, Tir rapide (2)",
                Valeur: "5",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            },
            {
                Id: 31,
                Nom: "Pistolet bolter",
                Description: "Toute la puissance et la fureur d'une arme à bolt, mais dans un format compact. Les spécialistes du combat rapproché affrontant des ennemis dangereux et les officiers désireux de marquer les esprits privilégient ces armes aussi redoutables que maniables.",
                Type: "Arme à Bolt",
                PénétrationArmure: "0",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            },
            {
                Id: 2,
                Nom: "Couteau de combat Astartes",
                Description: "Cette grande lame exceptionnellement tranchante fait partie de l'équipement standard de nombreux Space Marines. Aussi long que les épées courtes des humains ordinaires, ce couteau possède un tranchant monomoléculaire qui ne s'émousse jamais.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "2",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable",
                Valeur: "3",
                Rareté: "Peu courant",
                MotsClés: "LAME, ADEPTUS ASTARTES"
            }
        ],
        CoûtAttributConseil: 0,
        ForceConseil: 4,
        EndurenceConseil: 5,
        AgiliteConseil: 5,
        InitiativeConseil: 5,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 0,
        CompetenceConseil: {
            Athlétisme: 3,
            CapacitéDeCombat: 4,
            CapacitéDeTir: 5,
            Commandement: 1,
            Connaissance: 1,
            Furtivité: 3,
            Survie: 1,
            Vigilance: 3
        },
        TallentConseil: "",
        Influence: "+2"
    },
    /*Psycharque*/
    {
        Id: 24,
        Nom: "Psycharque",
        DescriptionCourte: "Doté de pouvoirs surnaturels et formé aux techniques des Guerriers aspects, vous êtes un Psyker de combat agressif qui ne vit que pour la guerre.",
        DescriptionLongue: "Les Psycharques ont parcouru les Voies du Prophète et du Guerrier et aiguisé leur sensibilité psychique innée en canalisant le Warp en toute sécurité à travers des runes complexes et puissantes. Ils ont maîtrisé une école de combat" +
            " spécifique et vénèrent un aspect de Khaine à travers leurs prouesses au combat. Unissant leurs disciplines dans une danse de la mort gracieuse et magique, les Psycharques sont parmi les plus puissants de tous les Aeldari vivants. Slaanesh est toujours" +
            " attentif à l'occasion de consommer une âme Aeldari. Les rares personnes qui suivent la Voie du Prophète ont conscience de ce danger et contrôlent soigneusement leurs dons naturels à travers la méditation et la sécurité des runes de moelle spectrale." +
            " La plupart pratiquent la divination et tirent les ficelles du destin pour modifier l'avenir. Ceux qui ont suivi l'entraînement des Guerriers aspects développent une affinité pour les pouvoirs psychiques explosifs et volatils. Armé de lames sorcières" +
            " psychiquement réactives et de puissants pouvoirs runiques, chaque Psycharque a un impact considérable sur le champ de bataille, faisant exploser les ennemis avec de simples pensées et renforçant ses alliés en un mot mental. Les visions qu'ils ont vécues" +
            " sur la Voie du Prophète continuent de se manifester : ils peuvent voir de grandes batailles à venir, des ères de paix ou de bouleversements politiques, ou leur propre fin. Étant donnée la nature changeante du Warp, ils partagent rarement ces visions" +
            " potentiellement trompeuses avec leurs semblables, mais tous sont définis par les avenirs qu'ils voient. La rumeur dit que les Psycharques du Vaisseau-monde Ul-Khari se sont alliés avec Jakel Varonius et utilisent leurs dons de clairvoyance pour aider" +
            " à défendre le système de Gilead contre la horde du Chaos qui menace indéniablement les deux espèces. Insondables dans leur but, ils communiquent peu avec les étrangers, faisant confiance à la toile enchevêtrée des destins que leur espèce tisse.",
        Tier: 3,
        Faction: 3,
        SousFaction: 11,
        Espèces: 2,
        CoûtPX: 56,
        MotsClés: "AELDARI, ASURYANI, PSYKER, [VAISSEAU-MONDE]",
        Attributs: {
            Agilité: 3,
            ForceMentale: 4
        },
        Compétences: {
            MaîtrisePsychique: 2
        },
        AptitudeArchetype: "Runes de bataille : Vous avez le Mot-clé PSYKER et êtes un Psyker. Vous connaissez les Pouvoirs psychiques universels (p. 267), le Pouvoir psychique Châtiment et un pouvoir de Runes de bataille au choix. Vous pouvez apprendre d'autres" +
            " pouvoirs en suivant les règles du Chapitre 11.",
        Equipement: "Jeu de runes en moelle spectrale, Pierre-esprit",
        Armures: [
            {
                Id: 3,
                Nom: "Armure runique",
                Description: "Ce plastron de moelle spectrale conçu sur mesure s'adapte psychiquement à son porteur. Grâce aux vibrations éthériques des Aeldari aux pouvoirs psychiques innés, cette armure repousse les coups avant qu'ils ne touchent leur cible.",
                Ar: "4",
                Effet: "",
                Traits: "Champ de force",
                Valeur: "6",
                Rareté: "Unique",
                MotsClés: "CHAMP DE FORCE, AELDARI, ASURYANI"
            }
        ],
        Armes: [
            {
                Id: 2,
                Nom: "Lame sorcière",
                Description: "Maniées par les Psycharques et les Grands prophètes, les Lames sorcières canalisent les énergies psychiques de leur porteur pour trancher aussi bien des matières ordinaires que des matériaux issus du Warp.",
                Type: "Armes de mêlée Aeldari",
                PénétrationArmure: "-",
                Dégâts: "(F) + 6",
                DésDégâtsSupplémentaires: "5",
                Portée: "-",
                Rafale: "-",
                Traits: "Force, Parade, Warp",
                Valeur: "9",
                Rareté: "Très rare",
                MotsClés: "FORCE, AELDARI, ASURYANI"
            },
            {
                Id: 8,
                Nom: "Pistolet shuriken",
                Description: "Avec leur facilité d'utilisation et leur recul quasi inexistant, les Pistolets shuriken sont prisés par les Aeldari qui cherchent une rapide victoire grâce à une rafale précise de shurikens à courte portée.",
                Type: "Armes à distance Aeldari",
                Degats: "10",
                DS: "1",
                PA: "-",
                Portee: "6 / 12 / 18",
                Rafale: "2",
                Traits: "Pistolet, Perforant (3)",
                Valeur: "6",
                Rarete: "Rare",
                MotsClés: "SHURIKEN, AELDARI, ASURYANI"
            }
        ],
        CoûtAttributConseil: 143,
        ForceConseil: 2,
        EndurenceConseil: 3,
        AgiliteConseil: 4,
        InitiativeConseil: 5,
        ForceMentaleConseil: 7,
        Intelligncve: 4,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 84,
        CompetenceConseil: {
            CapacitéDeCombat: 3,
            Commandement: 1,
            Connaissance: 3,
            MaîtrisePsychique: 4,
            Psychologie: 3,
            Vigilance: 1
        },
        PouvoirsPsychiques: [
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
                Effet: "vous scrutez les profondeurs du Warp et voyez\nau-delà des possibilités ondulant à la surface. Au-delà\ndu glamour et des promesses trompeuses de ce qui\npourrait être, vous avez des aperçus et des" +
                    " images de\nce qui sera vraiment, du moins dans un avenir proche.\nUne fois activé, Prescience vous permet de relancer\n1 dé (mais pas les Dés de Fureur) dans tous les Tests\nque vous effectuez pour le" +
                    " reste de la scène.\nDe plus, vous pouvez demander aux êtres intemporels\nqui habitent le Warp de répondre à une seule question\nsur ce qui pourrait arriver. Le MJ choisit l'entité qui\nrépond à votre" +
                    " question et vous communique en privé\nsa réponse. La réponse elle-même peut être une courte\nphrase, un seul mot, une émotion ou autre chose ; les\nêtres du Warp sont insondables pour les esprits mortels\net" +
                    " peuvent être utiles, inutiles ou totalement indifférents\nà votre question.",
                Surpuissance: "• [1] Activation réduite de 5 minutes (minimum 5).\n• [2] Vous pouvez poser une question supplémentaire\nsur l'avenir au MJ."
            },
            {
                Id: 5,
                Nom: "Protection/Spoliation",
                CoûtPX: "20",
                SD: "5",
                Activation: "Action",
                Durée: "Maintien",
                Portée: "25 mètres",
                CiblesMultiples: "Non",
                MotsClés: "AELDARI, PSYCHIQUE",
                Prerequis: "le Psyker doit avoir le Mot-clé AELDARI",
                Effet: "vous tirez sur les fils du destin qui entourent n'importe quel champ de bataille afin d'isoler et de lier ceux d'un individu spécifique, dont le destin est modifié en conséquence. Une fois ce pouvoir activé, vous pouvez provoquer un des effets suivants : Protection : vous tissez votre destin et celui de vos alliés pour mieux vous protéger. Tant que le pouvoir est maintenu, vous et tous vos alliés à moins de 5 m gagnez un bonus de +1 à la Résistance de base. Spoliation : vous tissez le destin de vos ennemis pour les rendre plus vulnérables. Ciblez un ennemi à portée comme point central d'une zone d'effet Explosion (6). Tous les ennemis dans cette zone tant que le pouvoir est maintenu subissent une pénalité de -1 à leur Résistance de base.",
                Surpuissance: "[3] Protection : bonus supplémentaire de +1 à la Résistance. [3] Spoliation : pénalité supplémentaire de -1 à la Résistance."
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
                Effet: "les émotions intenses laissent des marques\ndurables sur les fils intemporels du Warp. En ouvrant\nvotre esprit, vous percevez les échos du passé qui\nrestent psychiquement d'un lieu ou d'un" +
                    " objet.\nLorsque vous utilisez ce pouvoir, vous pouvez\nentrevoir des visions d'événements passés dans un lieu\nou un individu a exprimé une forte émotion.\nAu départ, vous ne sentez que des traces" +
                    " psychiques\nde l'émotion en question, par exemple le goût aigre-\nacide de la rage meurtrière ou la puanteur âcre du regret.\nSi vous restez longtemps sur place et maintenez\nle pouvoir, plus vous" +
                    " recevez d'informations sur le\ncontexte de cette émotion. Vos sens peuvent détecter\ndes événements qui se sont déroulés dans un rayon de\n5 m autour de vous.\n• 1 heure : bien que vagues et indistincts," +
                    " vos sens\npeuvent percevoir les événements qui se sont\nproduits juste avant, pendant et après l'émotion.\nLes personnes ont une apparence fantomatique,\navec des silhouettes changeantes et floues, et" +
                    " les\nseuls sons perçus sont des échos de chuchotements\nétouffés.\n• 6 heures : vous pouvez percevoir clairement les\névénements qui se sont produits avant, pendant et\naprès l'émotion dans le rayon" +
                    " d'action.\n• 12 heures : le Warp vous apporte une meilleure\ncompréhension de ce qui s'est passé. Vous pouvez\nposer au MJ une seule question sur l'événement qui\na eu lieu.",
                Surpuissance: "• [1] Vous pouvez partager votre vision avec n'importe\nquel allié à portée du Pouvoir psychique.\n• [2] La portée du pouvoir est doublée.\n• [2] Vos visions se manifestent deux fois plus\nrapidement."
            },
            {
                Id: 3,
                Nom: "Dissimulation/Révélation",
                CoûtPX: "20",
                SD: "5",
                Activation: "Action",
                Durée: "Maintien",
                Portée: "25 mètres",
                CiblesMultiples: "Oui",
                MotsClés: "AELDARI, PSYCHIQUE",
                Prerequis: "le Psyker doit avoir le Mot-clé AELDARI",
                Effet: "vous projetez votre esprit et prenez le contrôle des ombres, que vous pouvez alors plier et façonner à votre guise. Une fois ce pouvoir activé, vous pouvez provoquer un des effets suivants : Dissimulation : vous attirez les ombres et les enfilez comme une cape pour dissimuler votre position. Tant que le pouvoir est maintenu, vous et vos alliés à moins de 5 m gagnez un bonus de +1 à votre Défense et +1 aux dés bonus à tous les Tests de Furtivité (A) que vous effectuez. Révélation : vous éloignez les ombres d'une cible à portée pour l'exposer complètement. Ciblez un ennemi à portée comme point central d'une zone d'effet Explosion (6). Tout ennemi dans cette zone pendant que le pouvoir est maintenu ne peut pas bénéficier de bonus aux Tests de Défense ou de Furtivité lié à un couvert.",
                Surpuissance: "[3] Dissimulation : les avantages augmentent de +1 en Défense et de +1d en Furtivité. [2] Révélation : la zone d'effet devient Explosion (10)."
            }
        ],
        TallentConseil: "",
        Influence: "+2"
    },
    /*Nob Ork*/
    {
        Id: 25,
        Nom: "Nob Ork",
        DescriptionCourte: "Vous êtes plus grand et plus fort que la plupart des Orks. Grâce à votre taille et votre force hors du commun, vous bénéficiez d'une position d'autorité et vous régnez violemment sur les autres Boyz.",
        DescriptionLongue: "Pour gravir les échelons de la société Ork, il faut faire preuve de brutalité rusée, de ruse brutale et d'une capacité affolante à fracasser le crâne de tout prétendant au trône. Les Nobz Orks font généralement une ou deux têtes de plus" +
            " qu'un Boy Ork moyen et font plus du double de son poids. La loi du plus fort règne dans la société Ork, et chaque Nob a prouvé sa force jusqu'à obtenir le respect et l'équipement digne d'un commandant peau-verte. Un Nob contrôle ses sous-fifres par des" +
            " menaces et des violences physiques et utilise sa position pour se réserver le meilleur butin (le plus brillant des fusils et le plus grand des Kikoup') et se jeter au cœur de la bataille. La société Ork est si impitoyable qu'il y a toujours un prétendant" +
            " prêt à écraser le chef ; un Nob doit constamment faire ses preuves. Les Nobz Orks en viennent souvent aux mains avec les chefs de groupes rivaux et font tout leur possible pour prouver leur compétence à leur Boss de guerre. Un Nob roue sauvagement de" +
            " coups ses Boyz pour leur donner l'envie de se battre ardemment sur le champ de bataille. Les Nobz n'hésitent pas à diriger leurs Boyz depuis la ligne de front et à les inspirer par des actes d'héroïsme brutal, quitte à prendre des décisions parfois" +
            " suicidaires. Les Nobz sont donc à la fois craints et vénérés. Ils peuvent prospérer en tant que chefs, à condition de pouvoir survivre à quelques couteaux dans le dos et infliger des châtiments appropriés. Ils sont universellement arrogants et entêtés," +
            " mais après avoir survécu à d'innombrables combats (aussi bien contre l'ennemi qu'avec leurs propres Boyz), ils sont assez rusés pour conclure des accords avec certains ennemis.",
        Tier: 3,
        Faction: 4,
        SousFaction: 12,
        Espèces: 3,
        CoûtPX: 56,
        MotsClés: "ORK, [CLAN]",
        Attributs: {
            Force: 4,
            Endurance: 3
        },
        Compétences: {
            Intimidation: 2
        },
        AptitudeArchetype: "La marée verte : Vous commandez un groupe de Boyz (p. 355) égal à votre Rang x3. Si l'un de vos Boyz meurt, il peut être remplacé entre les sessions à la Furtivité du MJ.",
        Equipement: "",
        Armures: [
            {
                Id: 2,
                Nom: "Armur' lourd'",
                Description: "Cette armure peut être constituée de lourdes plaques de ferraille de plastacier boulonnées ensemble, ou même simplement vissées directement dans la chair d'un Ork. Nommée ainsi en raison de son poids, cette armure est très résistante en raison de son épaisseur, avec un volume qui rassure son porteur et affecte à peine sa combativité.",
                Ar: "4",
                Effet: "",
                Traits: "Massive (1), On y va !",
                Valeur: "3",
                Rareté: "Peu courant",
                MotsClés: "LOURDE, PRIMITIVE, ORK"
            }
        ],
        Armes: [
            {
                Id: 9,
                Nom: "Kalibr'",
                Description: "Ces gros pistolets sont bruyants et grossiers. Ils tirent des munitions tellement chargées de poudre à canon qu'elles sont presque inutiles sauf à bout portant.",
                Type: "Armes à distance Orks",
                Dégâts: "1",
                PénétrationArmure: "-",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Pistolet, Waaagh!, Kustom",
                Valeur: "3",
                Rareté: "Courant",
                MotsClés: "PROJECTILE, ORK"
            },
            {
                Id: 6,
                Nom: "Kikoup'",
                Description: "Souvent la première arme qu'un jeune Ork tient dans ses mains, les Kikoup' sont de simples lames lourdes qui se combinent avec la force naturelle d'un Ork pour réduire l'infanterie ennemie en charpie.",
                Type: "Armes de mêlée Orks",
                PénétrationArmure: "-",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "3",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable, Waaagh!, Kustom",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, ORK"
            }
        ],
        CoûtAttributConseil: 78,
        ForceConseil: 5,
        EndurenceConseil: 5,
        AgiliteConseil: 2,
        InitiativeConseil: 4,
        ForceMentaleConseil: 3,
        Intelligncve: 1,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 106,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeCombat: 6,
            CapacitéDeTir: 2,
            Commandement: 3,
            Intimidation: 4,
            Pilotage: 2,
            Ruse: 3,
            Survie: 2,
            Vigilance: 1
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 10,
                Nom: "BRUTE",
                CoûtPX: 20,
                Prérequis: "Score de Force 3+",
                Effet: "vos attaques portent des coups brutaux, quelle que soit l'arme que vous utilisez. Chaque arme de mêlée que vous utilisez possède le Trait d'arme Brutal (p. 209), y compris pour vos attaques à mains nues. Si vous réussissez une attaque de mêlée avec une arme qui possède déjà le Trait d'arme Brutal, vous infligez +1 dégât supplémentaire. Ce bonus de dégât est appliqué après le calcul de vos dégâts totaux, il ne s'ajoute pas à la valeur Dégâts de l'arme."
            },
            {
                Id: 44,
                Nom: "LOI D'LA BANDE",
                CoûtPX: 20,
                Prerequis: "Espèce : Ork",
                Effet: "vous savez manipuler l'assurance brutale d'une horde d'Orks. Lorsque vous commandez deux Orks ou plus, vous et tous les Orks alliés, à moins de 15+Double de votre Rang mètres, pouvez ajouter +Double de votre Rang dés bonus aux Tests de Résolution."
            },
            {
                Id: 56,
                Nom: "PLUSS DE DAKKA !",
                CoûtPX: 35,
                Prerequis: "Espèce : Ork",
                Effet: "vous aimez l'odeur et le son du Dakka, et vous avez la fâcheuse tendance à épuiser des quantités exorbitantes de munitions : cette tactique peut paraître simpliste, mais son efficacité est indéniable. La valeur Rafale de toute arme que vous utilisez est augmentée de votre Rang. Vous pouvez utiliser un Grot bastos (p. 241) pour transporter des Munitions supplémentaires."
            }
        ],
        Influence: "+2"
    },
    /*Inquisiteur*/
    {
        Id: 26,
        Nom: "Inquisiteur",
        DescriptionCourte: "Le plus puissant des agents de l'Empereur, vous bénéficiez d'une autorité sans limites pour mieux chasser les plus grands ennemis de l'humanité.",
        DescriptionLongue: "L'Inquisiteur se bat pour l'âme de l'Empereur contre les plus grands de Ses adversaires. Pour faire face à de telles horreurs, l'Inquisiteur reçoit le meilleur équipement de l'Imperium et une rosette inquisitoriale qui octroie une" +
            " autorité illimitée. Ainsi habilités, ils utilisent tous les moyens à leur disposition pour défendre les âmes de l'humanité, ne répondant qu'à leur propre organisation et à l'Adeptus Terra. L'exercice d'une telle autorité permet à l'Inquisiteur de" +
            " s'acquitter de ses tâches périlleuses comme bon lui semble. Comme tous les citoyens impériaux sont endoctrinés à signaler toute activité hérétique, chacun d'entre eux a un grand nombre de pistes à suivre. Certains opèrent seuls et comptent sur leur" +
            " talent d'enquêteur et leurs propres compétences au combat pour exterminer leurs proies impies. D'autres rassemblent des multitudes de subalternes, chacun ayant une aptitude spéciale à offrir à la Sainte Inquisition. Presque tous les Inquisiteurs" +
            " s'appuient sur des techniques de torture avancées pour extraire les informations dont ils ont besoin. Il n'y a que peu d'Inquisiteurs dans le système de Gilead, et ceux qui y sont piégés ont été exposés à leur plus grande crainte : le déclin de leur" +
            " autorité. Sans le soutien de la bureaucratie de l'Imperium tout entier, ils ne peuvent faire appel qu'aux maigres ressources mises à leur disposition. La Grande Faille qui traverse le ciel a convaincu de nombreux citoyens que la fin de l'Imperium était" +
            " proche ; des cultes de l'apocalypse qui ne craignent pas la rosette inquisitoriale et les pouvoirs lointains qu'elle représente se sont développés. Cependant, les fidèles citoyens de l'Imperium craignent toujours les Inquisiteurs et leur obéissent sans" +
            " poser de questions, ce qui a permis à ceux qui sont bloqués ici de constituer des suites adéquates pour accomplir leur devoir sacré.",
        Tier: 4,
        Faction: 1,
        SousFaction: 4,
        Espèces: 1,
        CoûtPX: 110,
        MotsClés: "IMPERIUM, INQUISITION, [ORDO], [AU CHOIX]",
        Attributs: {
            Intelligence: 4,
            ForceMentale: 4
        },
        Compétences: "Augmentez deux Compétences de votre choix à 4",
        AptitudeArchetype: "Autorité incontestable : Vous avez l'autorité suprême pour maintenir la sécurité de l'Imperium. Vous gagnez +Double de votre Rang des bonus chaque fois que vous effectuez un Test de Compétence sociale contre un personnage avec le Mot-clé IMPERIUM.",
        Equipement: "Rosette inquisitoriale, Deux armes avec une Valeur de 7 ou moins et une Rareté Très rare ou inférieure, Choisissez une des options suivantes : Manteau pare-balles ou Armure carapace ou Armure énergétique Ignatius ou Armure énergétique légère",
        CoûtAttributConseil: 124,
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 3,
        InitiativeConseil: 3,
        ForceMentaleConseil: 6,
        Intelligncve: 6,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 120,
        CompetenceConseil: {
            CapacitéDeCombat: 2,
            CapacitéDeTir: 1,
            Commandement: 2,
            Connaissance: 2,
            Duperie: 2,
            Furtivité: 2,
            Intimidation: 3,
            Investigation: 5,
            Medicae: 1,
            Psychologie: 7,
            Ruse: 2,
            Survie: 1,
            Technomaîtrise: 1,
            Vigilance: 3
        },
        TallentConseil: [
            {
                Id: 18,
                Nom: "DÉDUCTION",
                CoûtPX: 20,
                Prérequis: "Score d'Intelligence 3+",
                Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
            },
            {
                Id: 52,
                Nom: "ORTHOPRAXIE",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "les litanies de Sa Sainte Parole sont profondément gravées dans votre mémoire. Vous pouvez réciter par cœur des hymnes et des prières à l'Empereur et les utiliser pour renforcer votre esprit. Comme Action simple, vous pouvez commencer à réciter mentalement des liturgies ecclésiastiques. Tant que vous sacrifiez votre Action simple de cette manière, vous gagnez un bonus de Force mentale de +1, pour un maximum de Rounds égal au double de votre Rang. Vous ne pouvez plus utiliser ce Talent tant que vous n'avez pas terminé un Repos."
            },
            {
                Id: 67,
                Nom: "SANS PEUR",
                CoûtPX: 30,
                Prerequis: "Score de Force mentale 4+",
                Effet: "un conditionnement mental approfondi ou un entraînement intensif vous permet de contrôler complètement votre peur. Vous réussissez automatiquement n'importe quel Test de Peur. Vous êtes immunisé contre les Attaques déstabilisantes d'Intimidation (FM)."
            },
            {
                Id: 70,
                Nom: "STOÏQUE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "que ce soit par un hasard de la biologie, une intervention chirurgicale ou une blessure traumatique, votre visage ne trahit plus vos émotions comme les autres membres de votre espèce. Vous infligez une pénalité égale au Double de votre Rang en SD sur tous les Tests de Psychologie effectués contre vous."
            }
        ],
        Influence: "+4"
    },
    /*Intercessor Primaris*/
    {
        Id: 27,
        Nom: "Intercessor Primaris",
        DescriptionCourte: "Vous êtes une nouvelle forme d'Astartes, un super soldat aiguisé à la puissance encore plus grande que celle des Space Marines.",
        DescriptionLongue: "Pour l'heure la plus sombre de l'humanité, une nouvelle forme d'Astartes a été forgée. Ils font deux têtes de plus que leurs frères de l'Adeptus Astartes et avancent vêtus d'une armure améliorée et brandissant des armes améliorées" +
            " au fil des millénaires. Sans peur, ils chargent à travers la galaxie, dans les gueules des ténèbres, pour raviver la flamme de l'espoir dans le cœur des mortels. Entraînés à coordonner et à concentrer leurs tirs avec leurs frères, les Intercessors" +
            " anéantissent les cibles par un flot incessant de bolts. En tant que Space Marines améliorés, les Intercessors sont capables de prendre d'assaut des positions fortifiées et de tenir bon quoiqu'il en coûte. Ils avancent sans avoir besoin de s'abriter," +
            " marchant implacablement à travers le feu comme des statues vengeresses. Forgés il y a des millénaires et réveillés pour repousser la 13e Croisade noire, les premiers Primaris sont les citoyens d'un Imperium oublié depuis longtemps. Le royaume de" +
            " l'Empereur a sombré dans la superstition, et l'écart entre la culture impériale actuelle et celle qu'ils connaissaient est aussi vaste que le fossé qui les sépare du reste de l'humanité. Plus grands et plus larges que les Space Marines, les Primaris" +
            " luttent physiquement, mentalement et spirituellement pour s'intégrer dans un monde conçu pour des êtres inférieurs. Les Adeptus Astartes des Absolvers refusent d'initier leurs frères Primaris aux rites secrets du Chapitre, ce qui fait une forme" +
            " d'isolement supplémentaire à supporter. Convoyés vers le système de Gilead par la flotte Varonius, les renforts d'Intercessors ont été accueillis froidement malgré leurs prouesses avérées au combat. La réticence des Absolvers à travailler aux côtés" +
            " des Intercessors les a conduits à être affectés à la protection d'agents moins puissants ayant besoin de soutien.",
        Tier: 4,
        Faction: 1,
        SousFaction: 8,
        Espèces: 5,
        CoûtPX: 300,
        MotsClés: "ADEPTUS ASTARTES, IMPERIUM, PRIMARIS, [CHAPITRE]",
        Attributs: {
            Force: 5,
            Endurance: 6,
            Agilité: 5,
            Initiative: 5,
            ForceMentale: 3,
            Intelligence: 3
        },
        Compétences: {
            Athlétisme: 3,
            CapacitéDeCombat: 3,
            CapacitéDeTir: 6,
            Furtivité: 3,
            Vigilance: 3
        },
        AptitudeArchetype: "Entraînement aux armes : Vous gagnez +Double de votre Rang des bonus à tous les Tests de Capacité de Tir (A) pour tirer avec une arme à distance avec le Mot-clé PRIMARIS.",
        Equipement: "3 Grenades Frag, 3 Grenades Krak, Auto-reliquaire d'apaisement balistique",
        Armures: [
            {
                Id: 18,
                Nom: "Armure Mk X Tacticus",
                Description: "Les Astartes Primaris utilisent leur propre modèle d'armure énergétique, en raison des proportions stupéfiantes de leur organisme. L'Armure Mk X Tacticus s'inspire des protections d'autrefois, tout en intégrant les progrès du 41e millénaire en matière de déviation balistique pour incarner le summum de la gloire des Astartes.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (4)",
                Valeur: "9",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTUS ASTARTES, PRIMARIS"
            }
        ],
        Armes: [
            {
                Id: 30,
                Nom: "Fusil bolter",
                Description: "Fabriqué par l'Archimagos Dominus Belisarius Cawl, le Fusil bolter Mk II est l'évolution naturelle de l'arme la plus emblématique des Astartes. Ces Bolters surdimensionnés tirent des bolts de gros calibre avec une portée et une capacité de pénétration de blindage améliorées.",
                Type: "Arme à Bolt",
                PénétrationArmure: "-1",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "2",
                Portée: "15 / 30 / 45",
                Rafale: "2",
                Traits: "Brutal, Tir rapide (2)",
                Valeur: "7",
                Rareté: "Très rare",
                MotsClés: "BOLT, IMPERIUM, ADEPTUS ASTARTES, PRIMARIS"
            },
            {
                Id: 32,
                Nom: "Pistolet bolter lourd",
                Description: "Ces énormes armes de poing ont été forgées pour s'adapter aux paumes prodigieuses des Astartes Primaris. Aucun autre pistolet ne leur arrive à la cheville, que ce soit en termes de taille ou de potentiel destructeur.",
                Type: "Arme à Bolt",
                PénétrationArmure: "-1",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "5",
                Rareté: "Très rare",
                MotsClés: "BOLT, IMPERIUM, ADEPTUS ASTARTES, PRIMARIS"
            },
            {
                Id: 2,
                Nom: "Couteau de combat Astartes",
                Description: "Cette grande lame exceptionnellement tranchante fait partie de l'équipement standard de nombreux Space Marines. Aussi long que les épées courtes des humains ordinaires, ce couteau possède un tranchant monomoléculaire qui ne s'émousse jamais.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "2",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable",
                Valeur: "3",
                Rareté: "Peu courant",
                MotsClés: "LAME, ADEPTUS ASTARTES"
            }
        ],
        CoûtAttributConseil: 40,
        ForceConseil: 6,
        EndurenceConseil: 6,
        AgiliteConseil: 6,
        InitiativeConseil: 5,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 22,
        CompetenceConseil: {
            Athlétisme: 3,
            CapacitéDeCombat: 4,
            CapacitéDeTir: 6,
            Connaissance: 2,
            Furtivité: 3,
            Vigilance: 4
        },
        TallentConseil: "",
        Influence: "+1"
    },
    /*Sœur Repentia*/
    {
        Id: 28,
        Nom: "Sœur Repentia",
        DescriptionCourte: "Vous êtes un zélateur flagellant, condamné par vos péchés à chercher une mort de martyr ou l'exonération sur le champ de bataille.",
        DescriptionLongue: "Les vœux de l'Adepta Sororitas sont nombreux et inviolables, il est donc facile, même pour les Sœurs les plus pieuses, de commettre une faute. Les péchés graves, tels que la lâcheté, la désobéissance ou l'échec, ne sont pardonnés qu'en" +
            " prêtant le Serment du Pénitent. Sans armure et armée seulement de son éviscérateur cérémoniel, la Sœur Repentia cherche la mort au combat pour expier ses transgressions. Bien que les Repentia servent généralement aux côtés d'une Supérieure chargée de" +
            " leur réhabilitation spirituelle, elles peuvent être poussées par la ForceMentale de l'Empereur à chercher leur propre absolution.",
        Tier: 2,
        Faction: 1,
        SousFaction: 1,
        Espèces: 1,
        CoûtPX: 70,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM, ADEPTA SORORITAS, [ORDRE]",
        Attributs: {
            Force: 3,
            Endurance: 3,
            Agilité: 3,
            ForceMentale: 3
        },
        Compétences: {
            CapacitéDeTir: 2,
            Connaissance: 1,
            CapacitéDeCombat: 3
        },
        AptitudeArchetype: "Apaisement dans l'Angoisse : Vous ignorez les pénalités de Difficulté (DN) pour les blessures. Vous gagnez +Rang en dés bonus pour les attaques au corps à corps tant que vous êtes blessé. Lorsque vous êtes Mourant, ce bonus s'applique à tous les tests," +
            " vous ne tombez pas à terre et n'avez pas de restriction d'action. +Double Rang en dés bonus pour résister aux pouvoirs psychiques.",
        Equipement: "Haillons, 2 Sceaux de Pureté, Chapelet Ecclésiastique, une copie de la Règle de la Sororité.",
        CoûtAttribueConseil: 44,
        Armes: [
            {
                Id: 9,
                Nom: "Eviscerator",
                Description: "Emporté au combat par des fanatiques et des repentis, un Eviscerator est une grande Épée tronçonneuse sur laquelle on a installé un champ de force primitif. Une seule frappe peut couper à travers des hordes de mécréants et de damnés et faire pleuvoir le sang dans un vacarme de chaînes dentelées.",
                Type: "Armes tronçonneuses",
                PénétrationArmure: "-4",
                Dégâts: "(F) + 6",
                DésDégâtsSupplémentaires: "6",
                Portée: "2",
                Rafale: "-",
                Traits: "Brutal, Encombrant (2)",
                Valeur: "6",
                Rareté: "Rare",
                MotsClés: "TRONÇONNEUSE, À 2 MAINS, ADEPTUS ASTARTES, ADEPTUS MINISTORUM, ADEPTA SORORITAS, CHAMP DE FORCE"
            }
        ],
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 3,
        InitiativeConseil: 4,
        ForceMentaleConseil: 4,
        Intelligncve: 2,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 36,
        CompetenceConseil: {
            Athlétisme: 2,
            CapacitéDeTir: 2,
            Intimidation: 1,
            Connaissance: 3,
            CapacitéDeCombat: 5
        },
        TallentConseil: [
            {
                Id: 31,
                Nom: "FRÉNÉSIE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous pouvez utiliser une Action de combat pour devenir Frénétique (p. 199)."
            },
            {
                Id: 11,
                Nom: "CHARGE FURIEUSE",
                CoûtPX: 20,
                Prérequis: "Score d'Athlétisme 2+ et score de Capacité de Combat 2+",
                Effet: "vous vous êtes entraîné à vous rapprocher rapidement d'un ennemi. Frapper en courant ne vous pose aucun problème. Vous gagnez +Rang dés bonus pour toute attaque de mêlée que vous effectuez dans le cadre d'une Charge (p. 187)."
            },
            {
                Id: 28,
                Nom: "FLAGELLANT",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "vous consacrez votre souffrance au service de l'Empereur. Au début de chaque journée, vous devez passer 20 minutes (norme de Terra) en prière et vous infliger des Blessures égales à votre Tier par autoflagellation. Vous ne pouvez pas faire de jet de Détermination contre ces Blessures ou permettre qu'elles soient soignées autrement que par un Repos. Tant que vous êtes blessé de cette manière, vous gagnez +Rang dés bonus à vos jets de Détermination et de Conviction et pouvez choisir de devenir Frénétique (p. 199) en tant qu'Action de combat. Si vous possédez également le Talent Frénésie, vous pouvez devenir Frénétique avec une Action simple. Si vous ne parvenez pas à vous flageller, la honte vous envahit et vous subissez une pénalité de +2 SD à tous les Tests jusqu'à ce que vous flagelliez à nouveau."
            }
        ],
        Influence: ""
    },
    /*Sœur Dialogus*/
    {
        Id: 29,
        Nom: "Sœur Dialogus",
        DescriptionCourte: "Maître du langage et de la traduction, vous êtes un briseur de code, un orateur public et un orateur religieux émouvant.",
        DescriptionLongue: "Après dix mille ans de règne sur un million de mondes, l'Imperium a vu naître et tomber des milliards de dialectes locaux, sans qu'aucune langue unique ne soit adoptée par tous ses sujets. Les Sœurs de l'Ordre Dialogus étudient toutes" +
            " ces langues, ainsi que les chiffres manufacturés, les histoires orales, les techniques rhétoriques et même les langues xenos. Bien que généralement recluses et érudites, les Sœurs Dialogus comprennent bien le pouvoir de la parole et peuvent se" +
            " transformer en oratrices charismatiques. Les écritures religieuses sont leur spécialité, mais l'assistance dans les négociations, les interrogatoires et le décodage des communications ennemies est tout aussi précieuse.",
        Tier: 3,
        Faction: 1,
        SousFaction: 1,
        Espèces: 1,
        CoûtPX: 146,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM, ADEPTA SORORITAS, [ORDRE]",
        Attributs: {
            Force: 3,
            Endurance: 3,
            Agilité: 3,
            ForceMentale: 4,
            Intelligence: 4
        },
        Compétences: {
            CapacitéDeTir: 2,
            Investigation: 3,
            Commandement: 2,
            Persuasion: 2,
            Connaissance: 4,
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Polyglotte Supérieure : Maître du langage écrit et parlé. Lorsque vous lisez à haute voix les mots d'une autre personne (traduction, ordres, écritures), gagnez +Rang en dés bonus au test correspondant. Divise par deux les pénalités de Difficulté (DN)" +
            " pour l'interaction avec une espèce ou une culture inconnue.",
        Equipement: "Sceptre Dialogus (Bâton), Laud Hailer (Haut-parleur de louanges), Chapelet Ecclésiastique, copie de la Règle de la Sororité, nombreux livres de linguistique et Credo Impérial.",
        CoûtAttribueConseil: 50,
        Armures: [
            {
                Id: 10,
                Nom: "Armure énergétique Sororitas",
                Description: "Fabriquée pour l'usage exclusif des Sœurs de bataille, l'Armure énergétique Sororitas est bénie et purifiée avec une grande ferveur religieuse pour protéger sa porteuse des hérétiques et des démons.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (2)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTA SORORITAS"
            }
        ],
        Armes: [
            {
                Id: 31,
                Nom: "Pistolet bolter",
                Description: "Toute la puissance et la fureur d'une arme à bolt, mais dans un format compact. Les spécialistes du combat rapproché affrontant des ennemis dangereux et les officiers désireux de marquer les esprits privilégient ces armes aussi redoutables que maniables.",
                Type: "Arme à Bolt",
                PénétrationArmure: "0",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            }
        ],
        ForceConseil: 3,
        EndurenceConseil: 3,
        AgiliteConseil: 3,
        InitiativeConseil: 3,
        ForceMentaleConseil: 5,
        Intelligncve: 5,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 54,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 2,
            CapacitéDeTir: 4,
            Intuition: 2,
            Investigation: 4,
            Commandement: 2,
            Persuasion: 4,
            Connaissance: 4,
            CapacitéDeCombat: 2
        },
        TallentConseil: [
            {
                Id: 41,
                Nom: "LECTURE SUR LES LÈVRES",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "Vous avez appris à lire sur les lèvres. Le MJ peut demander un Test de Vigilance (Int) pour lire avec succès sur les lèvres en fonction de l'environnement, de l'espèce du locuteur et de la langue parlée. Le SD par défaut est de 3 et peut être modifié au gré du MJ."
            },
            {
                Id: 18,
                Nom: "DÉDUCTION",
                CoûtPX: 20,
                Prérequis: "Score d'Intelligence 3+",
                Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
            }
        ],
        PouvoirsPsychiques: [
            {
                Nom: "Repentance !",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MINISTORUM ou ADEPTA SORORITAS, Score de Force mentale 3+",
                Effet: "la droiture de votre indignation résonne aux oreilles de ceux qui sont fidèles au Culte impérial. Vous gagnez +1 Foi. Vous pouvez tenter de forcer un autre adepte du Culte impérial à se repentir par la force de votre ForceMentale. Dépensez 1 Foi et effectuez un Test opposé d'Intimidation (FM) contre votre cible avec +Rang dés bonus. Si vous êtes en combat, cela prend une Action de combat. Si vous réussissez le Test et que la cible a le Mot-clé IMPERIUM, elle s'agenouille et se repent durant une période de Double de votre Rang x 10 secondes."
            }
        ],
        Influence: "+2"
    },
    /*Sœur Imagifier*/
    {
        Id: 30,
        Nom: "Sœur Imagifier",
        DescriptionCourte: "Vous portez l'image d'une Sœur martyre comme étendard de bataille, exaltant haut et fort ses vertus pour inspirer les autres.",
        DescriptionLongue: "Lorsqu'une Sœur meurt en martyr avec une signification religieuse extraordinaire, elle est honorée par les Ordres Pronatus avec une sainte relique façonnée à son image. Ce Simulacrum Imperialis est fixé sur un grand poteau et porté à" +
            " la guerre par une Imagifier, une Sœur vétérane qui agit en tant qu'interprète des actes de la martyre. Une Imagifier doit se montrer digne de cet honneur, non seulement par ses prouesses martiales et sa foi, mais aussi par une connaissance" +
            " encyclopédique de la vie, de la mort et des plus grands miracles de sa sainte patronne. Les Imagifiers sont des figures grandiloquentes, louant bruyamment les vertus de leur héroïne, que ce soit sur le champ de bataille ou non. Toutes préféreraient" +
            " mourir plutôt que de permettre la perte de leur artefact sacré.",
        Tier: 3,
        Faction: 1,
        SousFaction: 1,
        Espèces: 1,
        CoûtPX: 146,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM, ADEPTA SORORITAS, [ORDRE]",
        Attributs: {
            Force: 3,
            Endurance: 3,
            Agilité: 3,
            ForceMentale: 4,
            Sociabilité: 4
        },
        Compétences: {
            CapacitéDeTir: 2,
            Intimidation: 2,
            Commandement: 4,
            Persuasion: 3,
            Connaissance: 2,
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Litanie des Hauts Faits : Lorsque vous portez ou êtes adjacent à votre Simulacrum Imperialis, vous et tous les alliés fidèles au Culte Impérial à portée de voix gagnez +1 en Force. De plus, en tant qu'Action de Combat, vous pouvez planter" +
            " votre Simulacrum sur place. Jusqu'à votre prochain mouvement, vous et tous les alliés fidèles au Culte Impérial à moins de 5m gagnez +Rang en Détermination.",
        Equipement: "3 Grenades Frag, 3 Grenades Krak, Chapelet Ecclésiastique, Simulacrum Imperialis, archives complètes de votre martyre, une copie de la Règle de la Sororité.      Talent ou pouvoirs : Pureté Soutenue, En Son Nom",
        CoûtAttribueConseil: 44,
        Armures: [
            {
                Id: 10,
                Nom: "Armure énergétique Sororitas",
                Description: "Fabriquée pour l'usage exclusif des Sœurs de bataille, l'Armure énergétique Sororitas est bénie et purifiée avec une grande ferveur religieuse pour protéger sa porteuse des hérétiques et des démons.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (2)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTA SORORITAS"
            }
        ],
        Armes: [
            {
                Id: 31,
                Nom: "Pistolet bolter",
                Description: "Toute la puissance et la fureur d'une arme à bolt, mais dans un format compact. Les spécialistes du combat rapproché affrontant des ennemis dangereux et les officiers désireux de marquer les esprits privilégient ces armes aussi redoutables que maniables.",
                Type: "Arme à Bolt",
                PénétrationArmure: "0",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            },
            {
                Id: 26,
                Nom: "Bolter",
                Description: "Difficiles à manier par de simples mortels, les Bolters sont pensés pour les Astartes. Ces fusils polyvalents sont comme le prolongement du corps d'un Space Marine.",
                Type: "Arme à Bolt",
                PénétrationArmure: "-1",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "12 / 24 / 36",
                Rafale: "2",
                Traits: "Brutal, Tir rapide (2)",
                Valeur: "5",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            }
        ],
        ForceConseil: 3,
        EndurenceConseil: 3,
        AgiliteConseil: 3,
        InitiativeConseil: 3,
        ForceMentaleConseil: 5,
        Intelligncve: 2,
        SociabiliteConseil: 5,
        CompétencesConseilCoût: 46,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 3,
            CapacitéDeTir: 4,
            Intimidation: 2,
            Commandement: 4,
            Persuasion: 4,
            Connaissance: 3,
            CapacitéDeCombat: 2
        },
        TallentConseil: [
            {
                Id: 52,
                Nom: "ORTHOPRAXIE",
                CoûtPX: 20,
                Prerequis: "Mot-clé IMPERIUM",
                Effet: "les litanies de Sa Sainte Parole sont profondément gravées dans votre mémoire. Vous pouvez réciter par cœur des hymnes et des prières à l'Empereur et les utiliser pour renforcer votre esprit. Comme Action simple, vous pouvez commencer à réciter mentalement des liturgies ecclésiastiques. Tant que vous sacrifiez votre Action simple de cette manière, vous gagnez un bonus de Force mentale de +1, pour un maximum de Rounds égal au double de votre Rang. Vous ne pouvez plus utiliser ce Talent tant que vous n'avez pas terminé un Repos."
            }
        ],
        Influence: "+2"
    },
    /*Séraphine*/
    {
        Id: 31,
        Nom: "Séraphine",
        DescriptionCourte: "Portée par des ailes angéliques de feu, vous apportez le salut à vos alliés par des attaques aériennes éclair.",
        DescriptionLongue: "Les Séraphines sont les équipes de frappe d'élite des Ordres Militants, descendant d'en haut sur des réacteurs dorsaux modèle San Leor stylisés en ailes d'ange. Contrairement à la plupart des troupes de choc impériales, les Séraphines se" +
            " spécialisent dans les fusillades à courte portée plutôt que dans les assauts de mêlée prolongés, dévastant les formations ennemies avec des barrages de pistolets jumelés avant de se retirer vers l'engagement suivant. La réputation des Séraphines pour" +
            " le sauvetage d'unités assiégées, avant de repartir aussi rapidement qu'elles sont arrivées, leur a valu l'adoration indéfectible des alliés impériaux. En tant que spécialistes de l'intervention rapide, les Séraphines de l'Ordre du Bouclier Sanctifié" +
            " sont souvent les premières Sœurs déployées depuis Enoch vers de nouveaux fronts.",
        Tier: 3,
        Faction: 1,
        SousFaction: 1,
        Espèces: 1,
        CoûtPX: 118,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM, ADEPTA SORORITAS, [ORDRE]",
        Attributs: {
            Force: 3,
            Endurance: 3,
            Agilité: 4,
            ForceMentale: 3,
            Intelligence: 3
        },
        Compétences: {
            CapacitéDeTir: 3,
            Pilotage: 3,
            Connaissance: 1,
            CapacitéDeCombat: 3
        },
        AptitudeArchetype: "Présence Angélique : Vous et tous les alliés à moins de 15m fidèles au Culte Impérial gagnez +Rang en dés de bonus pour les tests de Résolution. De plus, lorsque vous utilisez un réacteur dorsal pour vous éloigner d'un engagement," +
            " les ennemis ne peuvent pas porter d'Attaques Réflexes contre vous.",
        Equipement: "3 Grenades Frag, 3 Grenades Krak, Chapelet Ecclésiastique, une copie de la Règle de la Sororité, 2 Pistolets Bolters ou 2 Lance-flammes légers ou 2 Pistolets Inferno.                  Talent ou pouvoirs : Bénédiction Inspirée",
        CoûtAttribueConseil: 79,
        Armures: [
            {
                Id: 10,
                Nom: "Armure énergétique Sororitas",
                Description: "Fabriquée pour l'usage exclusif des Sœurs de bataille, l'Armure énergétique Sororitas est bénie et purifiée avec une grande ferveur religieuse pour protéger sa porteuse des hérétiques et des démons.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (2)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTA SORORITAS"
            },
            {
                Id: 47,
                Nom: "Réacteur dorsal",
                Description: "Les roquettes gyrostabilisées d'un Réacteur dorsal projettent l'utilisateur haut dans les airs avec suffisamment d'élan pour fondre sur une cible imprudente.",
                Ar: "",
                Effet: "en utilisant votre Déplacement, vous pouvez voler au double de votre Vitesse avec un Test de Pilotage (A) SD 3, en ignorant n'importe quel terrain. Si vous échouez au Test de Pilotage (A), votre mouvement dévie selon les règles de Dispersion (p. 185). Une Complication déclenche un crash, qui inflige un minimum de 1d3 Stress, plus des dégâts de chute (p. 201).",
                Traits: "",
                Valeur: "7",
                Rareté: "Rare",
                MotsClés: "[AU CHOIX]"
            }
        ],
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 6,
        InitiativeConseil: 4,
        ForceMentaleConseil: 4,
        Intelligncve: 3,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 40,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 1,
            CapacitéDeTir: 4,
            Intuition: 1,
            Commandement: 1,
            Pilotage: 4,
            Connaissance: 2,
            CapacitéDeCombat: 4
        },
        PouvoirsPsychiques: [
            {
                Nom: "Bouclier de la Foi",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTA SORORITAS, Score de Force mentale 3+",
                Effet: "votre croyance inexpugnable renforce votre esprit contre la sorcellerie Warp. Vous gagnez +1 Foi. En tant qu'Action de réaction, vous pouvez dépenser 1 Foi pour ignorer un pouvoir ou un effet psychique (y compris les Périls du Warp) jusqu'à la fin du Round. Vous pouvez dépenser un point de Foi supplémentaire pour accorder le même bonus à tous les alliés avec le mot-clé IMPERIUM dans un rayon de 15+Double de votre Rang mètres."
            }
        ],
        TallentConseil: [
            {
                Id: 12,
                Nom: "COMBAT À DEUX ARMES",
                CoûtPX: 20,
                Prérequis: "",
                Effet: "vous pouvez manier deux armes avec une précision incroyable. Lorsque vous maniez une arme dans chaque main, la pénalité au SD pour l'utilisation de l'option Attaques multiples est réduite de 2. Chaque arme doit avoir le Trait Pistolet ou être une arme de mêlée à une main. Vous pouvez également utiliser une arme différente pour chacune de vos Attaques multiples, en faisant des jets de dégâts séparés pour chaque arme."
            }
        ],
        Influence: "+2"
    },
    /*Chanoinesse*/
    {
        Id: 32,
        Nom: "Chanoinesse",
        DescriptionCourte: "Vous êtes un officier supérieur des Ordres Militants, menant les fidèles par l'exemple dans les actes d'adoration et de guerre.",
        DescriptionLongue: "Une Sœur de Bataille qui excelle en tant que commandant et phare de piété finira par être promue au rang de Chanoinesse, un poste conférant l'autorité sur des centaines de Sœurs. Ces légendes vivantes coordonnent les Guerres de Foi" +
            " du Ministorum et conçoivent la défense du couvent et de la paroisse d'un Ordre. Seuls les guerriers expérimentés et intrépides atteignent ce rang, requis pour maîtriser la stratégie militaire et donner des ordres sans l'ombre d'un doute. Détenir" +
            " l'autorité suprême isole souvent une Chanoinesse des Sœurs dont elle dépense la vie, et beaucoup ne peuvent compter que sur l'Empereur comme confident. Les Chanoinesses mènent toujours depuis le front.",
        Tier: 4,
        Faction: 1,
        SousFaction: 1,
        Espèces: 1,
        CoûtPX: 249,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM, ADEPTA SORORITAS, [ORDRE]",
        Attributs: {
            Force: 3,
            Endurance: 4,
            Agilité: 4,
            Initiative: 4,
            ForceMentale: 6,
            Intelligence: 3,
            Sociabilité: 4
        },
        Compétences: {
            CapacitéDeTir: 3,
            Commandement: 4,
            Connaissance: 4,
            CapacitéDeCombat: 3
        },
        AptitudeArchetype: "Mener les Justes : Vous êtes à la fois un chef de guerre inspirant et un miracle vivant. Vous gagnez +Rang en Foi. Chaque fois que vous infligez une blessure, vous pouvez dépenser 1 point de Foi pour gagner +1 en Gloire en tant" +
            " qu'Action Gratuite.",
        Equipement: "Vêtements Sororitas, Chapelet Ecclésiastique, une copie de la Règle de la Sororité, un Bolter Condemnor ou un Bolter avec l'amélioration d'Arme Combinée (Lance-flammes, Fuseur ou Plasma), une Lame" +
            " Bénie ou une Épée Tronçonneuse ou un Éviscérateur ou une Épée Énergétique, un Pistolet Bolter ou un Pistolet à Plasma ou un Pistolet Inferno, un Brasero de Feu Saint ou un Sceptre de Nullité.            Telnt ou pouvoir: Pureté Soutenue, Colère Vertueuse",
        Armures: [
            {
                Id: 10,
                Nom: "Armure énergétique Sororitas",
                Description: "Fabriquée pour l'usage exclusif des Sœurs de bataille, l'Armure énergétique Sororitas est bénie et purifiée avec une grande ferveur religieuse pour protéger sa porteuse des hérétiques et des démons.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (2)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTA SORORITAS"
            },
            {
                Id: 15,
                Nom: "Rosarius",
                Description: "Symbole de fonction pour l'Adeptus Ministorum et les Chapelains des Space Marines, le Rosarius prend la forme d'un Aquila impérial ou d'une croix gothique avec un bijou ou un crâne en son centre. Le Rosarius abrite un puissant émetteur de champ de force qui protège le porteur des attaques en convertissant toute l'énergie cinétique en éclats de lumière.",
                Ar: "*4",
                Effet: "",
                Traits: "Champ de force",
                Valeur: "7",
                Rareté: "Très rare",
                MotsClés: "CHAMP DE FORCE, IMPERIUM, ADEPTUS ASTARTES, ADEPTUS MINISTORUM"
            }
        ],
        CoûtAttribueConseil: null,
        ForceConseil: null,
        EndurenceConseil: null,
        AgiliteConseil: null,
        InitiativeConseil: null,
        ForceMentaleConseil: null,
        Intelligncve: null,
        SociabiliteConseil: null,
        CompétencesConseilCoût: 90,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 3,
            CapacitéDeTir: 5,
            Intuition: 3,
            Intimidation: 2,
            Investigation: 2,
            Commandement: 4,
            Persuasion: 3,
            Connaissance: 4,
            CapacitéDeCombat: 5
        },
        PouvoirsPsychiques: [
            {
                Nom: "Repentance !",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MINISTORUM ou ADEPTA SORORITAS, Score de Force mentale 3+",
                Effet: "la droiture de votre indignation résonne aux oreilles de ceux qui sont fidèles au Culte impérial. Vous gagnez +1 Foi. Vous pouvez tenter de forcer un autre adepte du Culte impérial à se repentir par la force de votre ForceMentale. Dépensez 1 Foi et effectuez un Test opposé d'Intimidation (FM) contre votre cible avec +Rang dés bonus. Si vous êtes en combat, cela prend une Action de combat. Si vous réussissez le Test et que la cible a le Mot-clé IMPERIUM, elle s'agenouille et se repent durant une période de Double de votre Rang x 10 secondes."
            }
        ],
        TallentConseil: "",
        Influence: "+3"
    },
    /*Apothicaire Astartes*/
    {
        Id: 33,
        Nom: "Apothicaire Astartes",
        DescriptionCourte: "Vous êtes un médecin de combat expert spécialisé dans la physiologie Astartes et la récupération de matériel génétique précieux.",
        DescriptionLongue: "Les Astartes dotés d'un instinct pour la recherche scientifique reçoivent une instruction médicale de l'Apothicarion de leur Chapitre, étudiant les secrets sacrés de l'implantation des semences génétiques Astartes et surveillant les" +
            " autres Frères pour détecter les déviances génétiques. Au combat, les Apothicaires remettent sur pied les camarades blessés et récupèrent les glandes progénoïdes des Astartes décédés — l'implant qui reproduit la semence génétique pour la prochaine" +
            " génération de Néophytes. Bien que d'esprit plus académique que leurs frères, les Apothicaires n'en sont pas moins des guerriers doués. Certains sont hantés par le fait d'assister personnellement à la mort de tant de Frères de Bataille, tandis que" +
            " d'autres sont portés par leur rôle direct dans la préservation de l'avenir de leur Chapitre.",
        Tier: 4,
        Faction: 1,
        SousFaction: 8,
        Espèces: 4,
        CoûtPX: 357,
        MotsClés: "IMPERIUM, ADEPTUS ASTARTES, [CHAPITRE]",
        Attributs: {
            Force: 5,
            Endurance: 5,
            Agilité: 5,
            Initiative: 5,
            ForceMentale: 4,
            Intelligence: 5
        },
        Compétences: {
            Athlétisme: 3,
            Vigilance: 3,
            CapacitéDeTir: 5,
            Commandement: 1,
            Medicae: 5,
            Connaissance: 1,
            Furtivité: 3,
            Survie: 1,
            CapacitéDeCombat: 5
        },
        AptitudeArchetype: "Hélice Primus : Votre devoir envers vos frères de bataille blessés n'est surpassé que par votre devoir envers les défunts. Lorsque vous réussissez un test de Medicae pour soigner les blessures d'une cible, elle récupère +Rang blessures" +
            " supplémentaires.",
        Equipement: "3 Grenades Frag, 3 Grenades Krak, Narthécium, Réducteur.",
        Armures: [
            {
                Id: 17,
                Nom: "Armure Mk VII Aquila",
                Description: "Parfaitement adaptée à son porteur, l'Armure Aquila est l'un des modèles d'armure Astartes les plus anciens en circulation. Cette vénérable combinaison a fait ses preuves à maintes reprises dans une galaxie éternellement en guerre.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (3)",
                Valeur: "8",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTUS ASTARTES"
            },
            {
                Id: 31,
                Nom: "Pistolet bolter",
                Description: "Toute la puissance et la fureur d'une arme à bolt, mais dans un format compact. Les spécialistes du combat rapproché affrontant des ennemis dangereux et les officiers désireux de marquer les esprits privilégient ces armes aussi redoutables que maniables.",
                Type: "Arme à Bolt",
                PénétrationArmure: "0",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            },
            {
                Id: 8,
                Nom: "Épée tronçonneuse",
                Description: "Malgré leur apparence brutale et leur rugissement rauque distinct, les épées tronçonneuses (parfois appelées « Lames tronçonneuses ») nécessitent de l'entraînement pour être maniées efficacement. Un duel entre deux porteurs d'Épée tronçonneuse entraînés est un spectacle qui vaut le détour : ces combattants sont capables de modifier la vitesse et la direction des chaînes dentelées pour contrer, parer et vaincre leur adversaire avec une grâce sauvage.",
                Type: "Armes tronçonneuses",
                PénétrationArmure: "-",
                Dégâts: "(F) + 5",
                DésDégâtsSupplémentaires: "4",
                Portée: "-",
                Rafale: "-",
                Traits: "Brutal, Parade",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "TRONÇONNEUSE, AELDARI, IMPERIUM, CHAOS"
            }
        ],
        CoûtAttribueConseil: null,
        ForceConseil: null,
        EndurenceConseil: null,
        AgiliteConseil: null,
        InitiativeConseil: null,
        ForceMentaleConseil: null,
        Intelligncve: null,
        SociabiliteConseil: null,
        CompétencesConseilCoût: null,
        CompetenceConseil: "",
        TallentConseil: "",
        Influence: "+2"
    },
    /*Chapelain Astartes*/
    {
        Id: 34,
        Nom: "Chapelain Astartes",
        DescriptionCourte: "Vous êtes le porte-parole des croyances spirituelles de votre Chapitre, veillant au bien-être psychologique de vos camarades.",
        DescriptionLongue: "La plupart des Chapitres de Space Marines ne reconnaissent pas l'Empereur comme un dieu, mais souscrivent plutôt à une idéologie combinant la Vérité Impériale pré-Hérésie, les enseignements de leur Primarque fondateur et la culture de" +
            " leur monde d'origine. Ce culte est incarné par les Chapelains du Chapitre, des prédicateurs zélés au masque mortuaire en forme de crâne qui inspirent leurs Frères à de plus grands actes de bravoure. Les Chapelains sont des mentors, conseillant les" +
            " Astartes troublés, supervisant l'entraînement des Néophytes et dirigeant les rites funéraires des Frères disparus. Leurs fonctions peuvent également inclure la protection des secrets de l'histoire de leur Chapitre et parfois la surveillance de la santé" +
            " physique et mentale.",
        Tier: 4,
        Faction: 1,
        SousFaction: 8,
        Espèces: 4,
        CoûtPX: 392,
        MotsClés: "IMPERIUM, ADEPTUS ASTARTES, [CHAPITRE]",
        Attributs: {
            Force: 5,
            Endurance: 5,
            Agilité: 5,
            Initiative: 5,
            ForceMentale: 5,
            Intelligence: 3,
            Sociabilité: 5
        },
        Compétences: {
            Athlétisme: 3,
            Vigilance: 3,
            CapacitéDeTir: 5,
            Intuition: 3,
            Commandement: 3,
            Connaissance: 4,
            Furtivité: 3,
            Survie: 1,
            CapacitéDeCombat: 5
        },
        AptitudeArchetype: "Culte de Chapitre : Vous gagnez 1 point de Foi et pouvez acheter des Talents de Foi disponibles pour les personnages ayant le mot-clé ADEPTUS MINISTORUM. En tant qu'Action de Combat, vous pouvez dépenser 1 point de Foi pour donner à un" +
            " allié à portée de voix votre mot-clé [CHAPITRE] pour le reste de la scène. De plus, tout allié à moins de 5xRang mètres partageant votre mot-clé [CHAPITRE] gagne +Rang aux tests de Résolution.",
        Equipement: "Armure Énergétique Mark VII, Casque Crâne, Crozius Arcanum, Pistolet Bolter, Rosarius, 3 Grenades Frag, 3 Grenades Krak.",
        Armures: [
            {
                Id: 17,
                Nom: "Armure Mk VII Aquila",
                Description: "Parfaitement adaptée à son porteur, l'Armure Aquila est l'un des modèles d'armure Astartes les plus anciens en circulation. Cette vénérable combinaison a fait ses preuves à maintes reprises dans une galaxie éternellement en guerre.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (3)",
                Valeur: "8",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTUS ASTARTES"
            },
            {
                Id: 15,
                Nom: "Rosarius",
                Description: "Symbole de fonction pour l'Adeptus Ministorum et les Chapelains des Space Marines, le Rosarius prend la forme d'un Aquila impérial ou d'une croix gothique avec un bijou ou un crâne en son centre. Le Rosarius abrite un puissant émetteur de champ de force qui protège le porteur des attaques en convertissant toute l'énergie cinétique en éclats de lumière.",
                Ar: "*4",
                Effet: "",
                Traits: "Champ de force",
                Valeur: "7",
                Rareté: "Très rare",
                MotsClés: "CHAMP DE FORCE, IMPERIUM, ADEPTUS ASTARTES, ADEPTUS MINISTORUM"
            }
        ],
        Armes: [
            {
                Id: 77,
                Nom: "Crozius Arcanum",
                Description: "Pour un Chapelain Astartes, la méthode la plus pure d'adorer l'Empereur est de massacrer Ses ennemis dans une bataille glorieuse. De manière appropriée, le Crozius Arcanum porté par chaque Chapelain est à la fois un insigne de fonction et une arme mortelle : une masse avec une tête en forme de symbole sacré, crépitant de l'énergie d'un champ énergétique mortel.",
                Type: "Armes de mêlée de l'Imperium",
                PénétrationArmure: "-2",
                Dégâts: "(F) + 5",
                DésDégâtsSupplémentaires: "4",
                Portée: "-",
                Rafale: "-",
                Traits: "Brutal",
                Valeur: "6",
                "Rareté": "3",
                MotsClés: "CHAMP ÉNERGÉTIQUE, IMPERIUM, ADEPTUS ASTARTES"
            },
            {
                Id: 31,
                Nom: "Pistolet bolter",
                Description: "Toute la puissance et la fureur d'une arme à bolt, mais dans un format compact. Les spécialistes du combat rapproché affrontant des ennemis dangereux et les officiers désireux de marquer les esprits privilégient ces armes aussi redoutables que maniables.",
                Type: "Arme à Bolt",
                PénétrationArmure: "0",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            }
        ],
        CoûtAttribueConseil: null,
        ForceConseil: null,
        EndurenceConseil: null,
        AgiliteConseil: null,
        InitiativeConseil: null,
        ForceMentaleConseil: null,
        Intelligncve: null,
        SociabiliteConseil: null,
        CompétencesConseilCoût: null,
        CompetenceConseil: "",
        TallentConseil: "",
        Influence: "+2"
    },
    /*Archiviste Astartes*/
    {
        Id: 35,
        Nom: "Archiviste Astartes",
        DescriptionCourte: "Vous êtes un psyker de bataille de l'Adeptus Astartes, une combinaison terrifiante de puissance inhumaine et de pouvoir conféré par le Warp.",
        DescriptionLongue: "Si un aspirant Astartes se révèle posséder un potentiel psychique, il est envoyé au Librarius de son Chapitre, où il subit une instruction encore plus éprouvante. Ceux qui surmontent les épreuves avec leur esprit, leur corps et leur"
            + " âme intacts deviennent des Archivistes. Ils prophétisent les conflits futurs, facilitent les communications astrotélépathiques du Chapitre et déchaînent des magies mortelles contre les formations ennemies. Les tentations constantes du Warp" +
            " transforment les Archivistes en figures sombres, voire sinistres. En tant que chroniqueurs de l'histoire de leur Chapitre, leurs pouvoirs se manifestent souvent en sympathie avec les traditions de leur fraternité.",
        Tier: 4,
        Faction: 1,
        SousFaction: 8,
        Espèces: 4,
        CoûtPX: 359,
        MotsClés: "IMPERIUM, ADEPTUS ASTARTES, [CHAPITRE]",
        Attributs: {
            Force: 5,
            Endurance: 5,
            Agilité: 5,
            Initiative: 5,
            ForceMentale: 6,
            Intelligence: 3
        },
        Compétences: {
            Athlétisme: 3,
            Vigilance: 3,
            CapacitéDeTir: 5,
            MaîtrisePsychique: 4,
            Connaissance: 2,
            Furtivité: 3,
            Survie: 1,
            CapacitéDeCombat: 5
        },
        AptitudeArchetype: "Culte de Chapitre : Vous possédez le mot-clé PSYKER. Vous connaissez les capacités universelles de Psyker du livre de règles ainsi que le pouvoir psychique Châtiment (Smite). Vous connaissez la discipline Librarius et un pouvoir de cette" +
            " discipline de votre choix, et pouvez choisir une autre discipline psychique pour apprendre des pouvoirs.",
        Equipement: "Coiffe Psychique, 3 Grenades Frag, 3 Grenades Krak.",
        Armures: [
            {
                Id: 17,
                Nom: "Armure Mk VII Aquila",
                Description: "Parfaitement adaptée à son porteur, l'Armure Aquila est l'un des modèles d'armure Astartes les plus anciens en circulation. Cette vénérable combinaison a fait ses preuves à maintes reprises dans une galaxie éternellement en guerre.",
                Ar: "5",
                Effet: "",
                Traits: "Énergétique (3)",
                Valeur: "8",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM, ADEPTUS ASTARTES"
            }
        ],
        Armes: [
            {
                Id: 31,
                Nom: "Pistolet bolter",
                Description: "Toute la puissance et la fureur d'une arme à bolt, mais dans un format compact. Les spécialistes du combat rapproché affrontant des ennemis dangereux et les officiers désireux de marquer les esprits privilégient ces armes aussi redoutables que maniables.",
                Type: "Arme à Bolt",
                PénétrationArmure: "0",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "4",
                Rareté: "Peu courant",
                MotsClés: "BOLT, IMPERIUM"
            },
            {
                Id: 16,
                Nom: "Bâton de force",
                Description: "Les Bâtons de force sont dotés d'une psy-matrice complexe qui leur permet d'agir comme une batterie psychique, afin de stocker de l'énergie psychique qui pourra être déchaînée avec une efficacité redoutable.",
                Type: "Armes de force",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 4",
                DésDégâtsSupplémentaires: "2",
                Portée: "2",
                Rafale: "-",
                Traits: "Brutal, Force",
                Valeur: "2",
                Rareté: "Rare",
                MotsClés: "FORCE, AELDARI, À 2 MAINS, INQUISITION, ADEPTUS ASTARTES, ADEPTUS ASTRA TELEPATHICA"
            }
        ],
        CoûtAttribueConseil: null,
        ForceConseil: null,
        EndurenceConseil: null,
        AgiliteConseil: null,
        InitiativeConseil: null,
        ForceMentaleConseil: null,
        Intelligncve: null,
        SociabiliteConseil: null,
        CompétencesConseilCoût: null,
        CompetenceConseil: "",
        TallentConseil: "",
        Influence: "+2"
    },
    /*Reiver Primaris*/
    {
        Id: 36,
        Nom: "Reiver Primaris",
        DescriptionCourte: "Vous êtes un infiltrateur, un saboteur et un combattant de guérilla, déchaînant toute votre force Primaris dans des attaques terroristes soigneusement coordonnées.",
        DescriptionLongue: "Alors que les systèmes du Dark Imperium sont submergés, des guerriers d'élite capables d'exceller en opérant derrière les lignes ennemies sont nécessaires. Les Reivers Primaris remplissent ce créneau, utilisant l'armure énergétique" +
            " silencieuse Mark X Phobos et d'autres technologies furtives pour démanteler des armées entières sans qu'un seul coup de feu ne soit tiré en retour. Lorsque les Reivers révèlent enfin leur présence, un déploiement choquant d'une force irrésistible" +
            " écrase les ennemis paniqués avec un mépris total. L'engagement d'un Reiver à maîtriser la guerre psychologique engendre des personnalités désagréables, parfois instables.",
        Tier: 4,
        Faction: 1,
        SousFaction: 8,
        Espèces: 5,
        CoûtPX: 288,
        MotsClés: "IMPERIUM, ADEPTUS ASTARTES, PRIMARIS, [CHAPITRE]",
        Attributs: {
            Force: 5,
            Endurance: 5,
            Agilité: 4,
            Initiative: 5,
            ForceMentale: 5,
            Intelligence: 3
        },
        Compétences: {
            Athlétisme: 3,
            Vigilance: 3,
            CapacitéDeTir: 4,
            Intimidation: 3,
            Furtivité: 3,
            CapacitéDeCombat: 4
        },
        AptitudeArchetype: "Tactiques de Terreur : Lorsque votre score de Furtivité est réduit à 0 ou que vous tendez une embuscade à une menace, vous pouvez choisir que tous les ennemis qui peuvent vous voir ou vous entendre passent un test de Terreur, avec un" +
            " DN égal à 1 + Rang.",
        Equipement: "3 Grenades Frag, 3 Grenades Krak, 3 Grenades Shock (Sismiques), Grav-Chute (Grav-chute).",
        Armures: [
            {
                Id: 58,
                Nom: "Armure Énergétique Phobos Mk X",
                Description: "Variante de l'armure énergétique Mark 10 Tacticus optimisée pour la furtivité et la mobilité, l'armure Phobos dispose de servo-moteurs réingénierés pour garantir un mouvement silencieux. Grâce à l'utilisation de plaques de céramite plus petites, l'armure Phobos maximise la mobilité du porteur mais sacrifie une petite quantité de protection.",
                Ar: "4",
                Effet: "",
                Traits: "Alimenté (3)",
                Valeur: "9",
                Rareté: "3",
                MotsClés: "ALIMENTÉ, IMPERIUM, ADEPTUS ASTARTES, PRIMARIS"
            }
        ],
        Armes: [
            {
                Id: 84,
                Nom: "Carabine Bolter",
                Description: "Variante compacte du fusil Bolter Primaris, la carabine Bolter dispose d'une poignée supplémentaire montée à l'avant de l'arme pour une précision accrue en combat rapproché.",
                Type: "Armes à distance",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                PénétrationArmure: "-",
                Portée: "12/24/36",
                Rafale: "2",
                Traits: "Assaut, Brutal, Tir Rapide (2)",
                Valeur: "6",
                Rareté: "3",
                MotsClés: "BOLT, IMPERIUM, ADEPTUS ASTARTES, PRIMARIS"
            },
            {
                Id: 32,
                Nom: "Pistolet bolter lourd",
                Description: "Ces énormes armes de poing ont été forgées pour s'adapter aux paumes prodigieuses des Astartes Primaris. Aucun autre pistolet ne leur arrive à la cheville, que ce soit en termes de taille ou de potentiel destructeur.",
                Type: "Arme à Bolt",
                PénétrationArmure: "-1",
                Dégâts: "10",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Brutal, Pistolet",
                Valeur: "5",
                Rareté: "Très rare",
                MotsClés: "BOLT, IMPERIUM, ADEPTUS ASTARTES, PRIMARIS"
            },
            {
                Id: 2,
                Nom: "Couteau de combat Astartes",
                Description: "Cette grande lame exceptionnellement tranchante fait partie de l'équipement standard de nombreux Space Marines. Aussi long que les épées courtes des humains ordinaires, ce couteau possède un tranchant monomoléculaire qui ne s'émousse jamais.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "2",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable",
                Valeur: "3",
                Rareté: "Peu courant",
                MotsClés: "LAME, ADEPTUS ASTARTES"
            }
        ],
        CoûtAttribueConseil: 40,
        ForceConseil: 6,
        EndurenceConseil: 5,
        AgiliteConseil: 4,
        InitiativeConseil: 6,
        ForceMentaleConseil: 5,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 26,
        CompetenceConseil: {
            Athlétisme: 3,
            Vigilance: 3,
            CapacitéDeTir: 4,
            Intimidation: 5,
            Furtivité: 4,
            CapacitéDeCombat: 4
        },
        TallentConseil: "",
        Influence: "+1"
    },
    /*Tech-Adepte*/
    {
        Id: 37,
        Nom: "Tech-Adepte",
        DescriptionCourte: "Vous êtes un opérateur technique au service du Sacerdoce de Mars, spécialisé dans la navigation et la compilation de systèmes numériques.",
        DescriptionLongue: "L'industrie gigantesque de l'Adeptus Mechanicus est alimentée par le travail physique d'ouvriers asservis et de Serviteurs, les calculs incompréhensibles des Esprits de la Machine et le jugement des Adeptes Techniques qui supervisent" +
            " les deux. Bien que les fonctions d'un Adepte Technique soient souvent hautement spécialisées — surveiller une seule machine ou enregistrer une seule sortie de données — tous jouent finalement un petit rôle dans la progression de la Quête du Savoir." +
            " Leur agenda peut être mesquin ou au service d'une puissance supérieure, mais il est invariablement coloré par l'endoctrinement du Culte Mechanicus.",
        Tier: 1,
        Faction: 1,
        SousFaction: 5,
        Espèces: 1,
        CoûtPX: 22,
        MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, [MONDE-FORGE]",
        Attributs: {
            Intelligence: 2
        },
        Compétences: {
            Connaissance: 2,
            Technomaîtrise: 3
        },
        AptitudeArchetype: "Accès Administrateur : Votre but est de communier avec les Esprits de la Machine et de cataloguer leur sagesse. Lorsque vous communiez avec un Esprit de la Machine dans le cadre d'un test, vous gagnez des icônes égales à votre Rang.",
        Equipement: "Robes d'Adepte (Vêtements), Multi-outil (Combi-Tool), Ardoise de données (DataSlate), Huile Sacrée pour Machine, toute Amélioration Augmétique.",
        Armes: [
            {
                Id: 38,
                Nom: "Pistolet laser",
                Description: "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                Type: "Armes Laser",
                PénétrationArmure: "-",
                Dégâts: "7",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Fiable, Pistolet",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LASER, IMPERIUM"
            }
        ],
        CoûtAttribueConseil: 20,
        ForceConseil: 1,
        EndurenceConseil: 2,
        AgiliteConseil: 1,
        InitiativeConseil: 1,
        ForceMentaleConseil: 1,
        Intelligncve: 4,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 28,
        CompetenceConseil: {
            Vigilance: 2,
            CapacitéDeTir: 1,
            Investigation: 2,
            Medicae: 1,
            Pilotage: 1,
            Connaissance: 2,
            Technologie: 4,
            CapacitéDeCombat: 1
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 61,
                Nom: "RÉSONANCE BINAIRE",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "vous maîtrisez parfaitement les constructs mécaniques. Vous gagnez +Double de votre Rang dés bonus chaque fois que vous essayez de contrôler, de programmer ou d'interroger un Serviteur ou une construction similaire, comme un chérubin ou un Servo-crâne."
            },
            {
                Id: 18,
                Nom: "DÉDUCTION",
                CoûtPX: 20,
                Prérequis: "Score d'Intelligence 3+",
                Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
            }
        ],
        Influence: ""
    },
    /*Infiltrateur Sicarien*/
    {
        Id: 38,
        Nom: "Infiltrateur Sicarien",
        DescriptionCourte: "Vous êtes un soldat mécanique diffusant une longueur d'onde de neurostatique, provoquant une surcharge sensorielle chez toutes les créatures à proximité.",
        DescriptionLongue: "Les Sicariens sont des constructions guerrières à peine humaines, douloureusement fabriquées à partir des restes gravement blessés des soldats vivants du Culte de la Machine. Les Infiltrateurs Sicariens sont des unités de chasseurs" +
            " spécialisées, pénétrant les lignes ennemies avec un assaut sensoriel direct. Leurs casques en dôme émettent un bruit qui submerge la vue, l'ouïe et les autres sens avec un statique agonisant. Bien que les sentinelles sachent qu'elles sont attaquées," +
            " identifier leur ennemi est impossible, car leurs yeux, leurs oreilles et leur bouche se remplissent de sang.\n\nAvec une telle puissance impressionnante à leur disposition, il est tentant pour les Infiltrateurs Sicariens d'employer leur neurostatique" +
            " hors du champ de bataille, contre des citoyens impériaux peu coopératifs. Cette escalade mène souvent à des complications inutiles, et les Infiltrateurs doivent lutter pour renouer avec leurs lambeaux d'humanité déclinants et découvrir des moyens moins" +
            " directs d'atteindre leurs objectifs.\n\nLes Tech-Prêtres d'Avachrus dépêchent des Infiltrateurs pour recueillir des informations et récupérer des cargaisons précieuses dans les parties les plus gardées et les moins accessibles du système Gilead. Les" +
            " agents coopérants s'équipent d'émetteurs implantés ou amovibles qui neutralisent les effets neurostatiques de l'Infiltrateur.",
        Tier: 3,
        Faction: 1,
        SousFaction: 5,
        Espèces: 1,
        CoûtPX: 76,
        MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, [MONDE-FORGE]",
        Attributs: {
            Endurance: 3,
            Agilité: 3,
            Intelligence: 2
        },
        Compétences: {
            CapacitéDeTir: 4,
            Intimidation: 2,
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Capacité : Aura Neurostatique. Vous êtes immunisé contre l'état Hémorragie. Par une Action de Combat, vous pouvez choisir un nombre de cibles jusqu'à votre Rang, et infliger autant d'états Entravé à tous les personnages à moins de 10m" +
            " qui n'ont pas cette capacité ou d'entrées audio à code nul.",
        Equipement: "Jambes Augmétiques, Casque d'Infiltrateur, Éclateur à Flechettes et Matraque Taser ou Carabine Radiant et Épée Énergétique",
        Armes: [
            {
                Id: 59,
                Nom: "Armure de Bataille Sicarienne",
                Description: "Installée sur les corps lourdement augmentés des Sicarians, cette armure mince et flexible protège parfaitement les rares parties biologiques d'une killcade sans limiter leur mobilité cruciale.",
                Ar: "4",
                Effet: "",
                Traits: "Champ Énergétique",
                Valeur: "6",
                Rareté: "2",
                MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, SKITARII"
            }
        ],
        CoûtAttributConseil: 91,
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 5,
        InitiativeConseil: 4,
        ForceMentaleConseil: 3,
        Intelligncve: 4,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 68,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 3,
            CapacitéDeTir: 4,
            Intuition: 2,
            Intimidation: 4,
            Investigation: 1,
            Commandement: 1,
            Medicae: 1,
            Furtivité: 2,
            Survie: 2,
            Technomaîtrise: 3,
            CapacitéDeCombat: 2
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 78,
                Nom: "VOIX INQUIÉTANTE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous avez une voix sinistre et perturbante. Cela peut être dû à des cadences infrasoniques produites par un synthétiseur vox, à un entraînement à l'interrogatoire ou simplement à un air naturellement malfaisant. Vous gagnez +Rang dés bonus aux Tests d'Intimidation (FM) et de Commandement (FM) lorsque vous utilisez votre voix. Tout Test de Sociabilité réalisé avec quelqu'un susceptible d'être perturbé par votre voix (personnes nerveuses, Psykers, membres pieux de l'Ecclésiarchie) subit une pénalité de +2 SD."
            },
            {
                Id: 43,
                Nom: "LOBOTOMIE AVANCÉE",
                CoûtPX: 20,
                Prerequis: "Espèce : Humain",
                Effet: "grâce à une discipline surhumaine ou à des traitements chirurgicaux, vous avez été immunisé contre les tentations de la chair. Vous gagnez +Double de votre Rang à votre Conviction et votre Résolution. Vous n'ajoutez plus votre Tier à votre Stress maximum."
            }
        ],
        Influence: ""
    },
    /*Ruststalker Sicarien*/
    {
        Id: 39,
        Nom: "Ruststalker Sicarien",
        DescriptionCourte: "Vous êtes un assassin mécanique, taillant à travers les défenses de votre cible avec une rafale de lames transoniques hurlantes.",
        DescriptionLongue: "Les Ruststalkers Sicariens sont des cyber-commandos employés pour exécuter les ennemis en fuite de Mars. Instruments chirurgicaux de la vengeance de la Prêtrise de la Technologie, leurs armes transoniques distinctives vrombissent et" +
            " tremblent alors qu'elles répercutent depuis les défenses blindées, avant que leur fréquence ne s'ajuste pour passer à travers les protections avec une attaque de suivi. Pour accorder leurs lames rapidement, les Ruststalkers attaquent dans une frénésie" +
            " meurtrière, accordant peu d'importance à leur propre protection.\n\nLa plupart des Sicariens sont construits à partir des corps mortellement blessés des Skitarii tombés. C'est une transformation traumatisante et douloureuse qui ébranle la stabilité" +
            " psychologique du receveur. Les Ruststalkers sont souvent choisis parmi ceux qui s'en sont le moins bien remis — des âmes perdues et désespérées, reconnaissantes de la sanction pour déchaîner leur rage violente au service du Dieu-Machine.\n\nAucun" +
            " recoin du système Gilead n'est hors de portée d'un Ruststalker Sicarien une fois que les Tech-Prêtres d'Avachrus ont autorisé leur utilisation. Invariablement, leur mission est d'assassiner une cible prioritaire, tout autre paramètre étant une" +
            " préoccupation secondaire.",
        Tier: 3,
        Faction: 1,
        SousFaction: 5,
        Espèces: 1,
        CoûtPX: 76,
        MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, [MONDE-FORGE]",
        Attributs: {
            Endurance: 3,
            Agilité: 3,
            Initiative: 2
        },
        Compétences: {
            Athlétisme: 2,
            Furtivité: 2,
            CapacitéDeCombat: 4
        },
        AptitudeArchetype: "Assassin Transonique : Vous êtes un agent tueur-chasseur, délivrant une grêle de coups transoniques jusqu'à ce que vous trouviez la fréquence parfaite de perforation d'armure. Vous êtes immunisé contre l'état Hémorragie." +
            " De plus, vous gagnez un bonus de dés de +Rang lors d'une Charge ou d'une Attaque Déchaînée en maniant une arme avec le mot-clé TRANSONIQUE.",
        Equipement: "2 Jambes Augmétiques, Lames Transoniques ou un Rasoir Transonique et une Griffe d'Accolade (Chordclaw)",
        Armures: [
            {
                Id: 59,
                Nom: "Armure de Bataille Sicarienne",
                Description: "Installée sur les corps lourdement augmentés des Sicarians, cette armure mince et flexible protège parfaitement les rares parties biologiques d'une killcade sans limiter leur mobilité cruciale.",
                Ar: "4",
                Effet: "",
                Traits: "Champ Énergétique",
                Valeur: "6",
                Rareté: "2",
                MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, SKITARII"
            }
        ],
        CoûtAttributConseil: 116,
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 5,
        InitiativeConseil: 6,
        ForceMentaleConseil: 3,
        Intelligncve: 3,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 52,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 3,
            CapacitéDeTir: 1,
            Duperie: 2,
            Intimidation: 3,
            Investigation: 1,
            Medicae: 1,
            Furtivité: 4,
            Technologie: 3,
            CapacitéDeCombat: 4
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 21,
                Nom: "ÉLIMINATEUR",
                CoûtPX: 20,
                Prerequis: "Score de Furtivité 2+",
                Effet: "Vous frappez dans l'ombre et utilisez l'élément de surprise pour tuer vos ennemis en un coup. Lorsque vous possédez un Score de Furtivité (p. 181) et que vous attaquez un ennemi qui ne vous a pas remarqué, vous pouvez ajouter votre Score de Furtivité comme DS, en plus des bonus liés à une Attaque surprise (p. 182). Toute diminution de votre Score de Furtivité est résolue après l'attaque."
            },
            {
                Id: 29,
                Nom: "FLÉAU DES ARMURES",
                CoûtPX: 20,
                Prerequis: "Score de Capacité de Combat 2+",
                Effet: "les armures de vos ennemis ne valent rien face à vos coups puissants. Lorsque vous réussissez une attaque de mêlée, vous pouvez Convertir des Icônes exaltées pour réduire la Résistance de la cible au lieu d'ajouter des DS. Chaque Icône exaltée que vous Convertissez diminue de 1 la Résistance de la cible. Cette Résistance est soustraite avant de calculer les dégâts de l'attaque. Votre arme doit avoir un des Mots-clés suivants pour activer ce Talent : LAME, TRONÇONNEUSE, FORCE, CHAMP DE FORCE."
            }
        ],
        Influence: ""
    },
    /*Tech-Prêtre Dominus*/
    {
        Id: 40,
        Nom: "Tech-Prêtre Dominus",
        DescriptionCourte: "Vous êtes un commandant des forces militaires de l'Adeptus Mechanicus, divisant sans effort votre conscience entre de multiples interfaces techniques.",
        DescriptionLongue: "Les Tech-Prêtres ayant un don pour faire la guerre finiront par atteindre le rang de Dominus, recevant les armes les plus mortelles des Mondes-Forges et le commandement d'une armée du Dieu-Machine. Ils dévorent des masses de données" +
            " transmises par leurs subordonnés, traitant les solutions optimales et relayant les instructions avec des impulsions instinctives de dissémination de pensée. Pour les profanes, ils semblent être à plusieurs endroits à la fois.\n\nLe credo obsessif du" +
            " Culte Mechanicus nourrit des « intérêts spéciaux » bizarres au sein de sa Prêtrise. Les Dominus ne font pas exception ; la plupart n'hésitent pas à abuser de leur position, dirigeant des légions entières pour satisfaire leur Quête du Savoir. Mais la" +
            " politique des Tech-Prêtres force souvent les Dominus à dépendre de leurs propres compétences et de leur puissance de feu en premier lieu.\n\nDepuis le départ de la Legio Karathos et de son Fabricator Général, les Dominus régnants de chaque forge de" +
            " fonderie sur Avachrus se sont disputés la prééminence. Actuellement, l'Archdomina Aexekra Vakuul de Belisxia a émergé comme successeur, mais sans le soutien des autres Dominus, elle ne le restera pas longtemps.",
        Tier: 4,
        Faction: 1,
        SousFaction: 5,
        Espèces: 1,
        CoûtPX: 113,
        MotsClés: "IMPERIUM, ADEPTUS MECHANICUS, [MONDE-FORGE]",
        Attributs: {
            Intelligence: 5
        },
        Compétences: {
            CapacitéDeTir: 2,
            Connaissance: 2,
            Technomaîtrise: 5,
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Seigneur du Culte de la Machine : Vous êtes libéré des entraves de votre forme biologique, interfaçant automatiquement avec la technologie proche. Par une Action Simple, vous pouvez Aider tous les alliés à moins de 10m qui ont" +
            " le mot-clé ADEPTUS MECHANICUS ou qui utilisent un équipement doté d'un Esprit de la Machine (incluant les pistolets et les armes de mêlée non-basiques), ignorant le bonus de dés de +Rang pour leurs Tests.",
        Equipement: "Blaster Volkite ou Rayon d'Éradication, Macro-stubeur ou Serpen-phosphore, Champ Réfracteur, Un Méchadendrite de n'importe quel type, 3 Augmétiques de votre choix, Multi-outil (Combi-tool)," +
            " Sceau Omnissien (Symbole d'Autorité), Huile Sacrée pour Machine.        Talent ou pouvoir: Dévoué, Rite de Magnétométrie, Rite de la Pensée Pure",
        Armes: [
            {
                Id: 22,
                Nom: "Hache de l'Omnimessie / Hache énergétique",
                Description: "Symbole du pouvoir du Dieu-Machine, la Hache de l'Omnimessie est ornée d'icônes Mechanicus et d'engrenages ornementaux. / Une Hache énergétique coupe avec la force d'un éclair. Cette arme est capable de fendre une armure et de démembrer sa victime comme un bûcheron le ferait avec des bûches.",
                Type: "Armes énergétiques",
                PénétrationArmure: "-2",
                Dégâts: "(F) + 5",
                DésDégâtsSupplémentaires: "5",
                Portée: "2",
                Rafale: "-",
                Traits: "-",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "CHAMP DE FORCE, À 2 MAINS, ADEPTUS MECHANICUS"
            }
        ],
        Armures: [
            {
                Id: 9,
                Nom: "Armure énergétique légère",
                Description: "En réduisant l'encombrement des plaques de céramite, l'Armure énergétique légère offre les avantages d'une force servomoteur augmentée et d'une coque en céramite durable, mais sans sacrifier la mobilité ou l'agilité de son porteur.",
                Ar: "4",
                Effet: "",
                Traits: "Énergétique (1)",
                Valeur: "6",
                Rareté: "Très rare",
                MotsClés: "ÉNERGÉTIQUE, IMPERIUM"
            }
        ],
        CoûtAttributConseil: 119,
        ForceConseil: 3,
        EndurenceConseil: 4,
        AgiliteConseil: 3,
        InitiativeConseil: 4,
        ForceMentaleConseil: 4,
        Intelligncve: 7,
        SociabiliteConseil: 2,
        CompétencesConseilCoût: 98,
        CompetenceConseil: {
            Vigilance: 3,
            CapacitéDeTir: 5,
            Investigation: 3,
            Commandement: 2,
            Medicae: 1,
            Pilotage: 3,
            Connaissance: 5,
            Technomaîtrise: 5,
            CapacitéDeCombat: 3
        },
        TallentConseil: "",
        Influence: "+2"
    },
    /*Confesseur*/
    {
        Id: 41,
        Nom: "Confesseur",
        DescriptionCourte: "Vous êtes un prédicateur incendiaire du culte Impérial, forçant votre troupeau à admettre ses défaillances par la seule force de votre personnalité.",
        DescriptionLongue: "Chaque citoyen impérial est coupable de quelque chose — des vices véniels de la trahison et de l'hérésie à l'amour inacceptable de la famille au-dessus de l'amour pour Son Imperium. Les Confesseurs débusquent ces secrets avec des sermons" +
            " de feu et de soufre qui terrifient les congrégations superstitieuses pour les pousser à implorer le pardon. En concevant une punition appropriée (et souvent douloureuse), un Confesseur peut diriger les fidèles redynamisés comme il le souhaite.\n\nLes" +
            " Confesseurs sont irrépressibles et belliqueux, rarement enclins à tempérer leur austérité. La plupart se sentent responsables de leurs fidèles, même si leur séjour dans une paroisse est bref. Encourager les croyants à dénoncer leurs voisins est une" +
            " excellente source de connaissances locales ; en période de besoin, la milice fanatique peut être incitée à rendre une justice de foule aux ennemis de l'Empereur.\n\nOn trouve des Confesseurs prononçant Sa parole partout où ils sentent que la foi de" +
            " Ses serviteurs fait défaut. En pratique, c'est partout, et les Confesseurs sont devenus des vues courantes à travers le système Gilead, défiant la corruption de la Grande Faille avec leur passion.",
        Tier: 2,
        Faction: 1,
        SousFaction: 3,
        Espèces: 1,
        CoûtPX: 90,
        MotsClés: "IMPERIUM, ADEPTUS MINISTORUM",
        Attributs: {
            ForceMentale: 4,
            Intelligence: 3
        },
        Compétences: {
            Intuition: 2,
            Intimidation: 2,
            Medicae: 3,
            Connaissance: 4,
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Gouvernance Spirituelle : Lorsque vous effectuez un Test pour découvrir les péchés d'un autre (que ce soit par Coercition, Investigation ou Intuition), gagnez +Rang dés de bonus. De plus, pendant un Repos (Regroup), vous" +
            " pouvez choisir un personnage fidèle au Culte Impérial pour qu'il récupère tous ses Chocs (Shock).",
        Equipement: "Robes du Ministorum, Kit de Missionnaire, Kit de Torture, Tomes du Ministorum, Lutrin Portable.         Talent ou pouvoir: En Son Nom, Repentez-vous !, La Passion",
        Armures: [
            {
                Id: 15,
                Nom: "Rosarius",
                Description: "Symbole de fonction pour l'Adeptus Ministorum et les Chapelains des Space Marines, le Rosarius prend la forme d'un Aquila impérial ou d'une croix gothique avec un bijou ou un crâne en son centre. Le Rosarius abrite un puissant émetteur de champ de force qui protège le porteur des attaques en convertissant toute l'énergie cinétique en éclats de lumière.",
                Ar: "*4",
                Effet: "",
                Traits: "Champ de force",
                Valeur: "7",
                Rareté: "Très rare",
                MotsClés: "CHAMP DE FORCE, IMPERIUM, ADEPTUS ASTARTES, ADEPTUS MINISTORUM"
            }
        ],
        Armes: [
            {
                Id: 79,
                Nom: "Masse Énergétique",
                Description: "Simple masse améliorée par un champ énergétique, ces armes sont appréciées pour leur utilité. Comme le champ énergétique couvre une zone plus restreinte de l'arme, son intensité peut être ajustée, lui permettant de porter des coups capables d'impacter une armure assistée ou des tapes d'avertissement non létales sur un crâne humain.",
                Type: "Armes de mêlée de l'Imperium",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 5",
                DésDégâtsSupplémentaires: "4",
                Portée: "-",
                Rafale: "-",
                Traits: "Brutal",
                Valeur: "6",
                Rareté: "3",
                MotsClés: "CHAMP ÉNERGÉTIQUE, IMPERIUM, ADEPTUS ASTARTES, ADEPTUS MINISTORUM"
            },
            {
                Id: 38,
                Nom: "Pistolet laser",
                Description: "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                Type: "Armes Laser",
                PénétrationArmure: "-",
                Dégâts: "7",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Fiable, Pistolet",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LASER, IMPERIUM"
            }
        ],
        CoûtAttributConseil: 26,
        ForceConseil: 2,
        EndurenceConseil: 2,
        AgiliteConseil: 2,
        InitiativeConseil: 2,
        ForceMentaleConseil: 4,
        Intelligncve: 3,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 24,
        CompetenceConseil: {
            Vigilance: 1,
            Intuition: 4,
            Intimidation: 2,
            Investigation: 2,
            Medicae: 3,
            Connaissance: 4,
            Technomaîtrise: 1,
            CapacitéDeCombat: 2
        },
        TallentConseil: "",
        Influence: "+1"
    },
    /*Sniper Ratling*/
    {
        Id: 42,
        Nom: "Sniper Ratling",
        DescriptionCourte: "Vous êtes petit et insaisissable, enrôlé dans l'Astra Militarum en tant que tireur d'élite et spécialiste de l'infiltration.",
        DescriptionLongue: "Bien que les Ratlings ne soient pas réputés pour leur force ou leur discipline, leur précision et leur instinct aiguisé pour débusquer les bonnes cachettes en font d'excellents snipers. Ils se déploient généralement à longue portée," +
            " éliminant les cibles d'opportunité tout en minimisant les tirs de riposte. Occasionnellement, ils sont chargés de missions de sabotage, s'introduisant et s'échappant de défenses supposées impénétrables sans être détectés.\n\nL'expérience sur le champ" +
            " de bataille aiguise la Furtivité naturelle et les compétences de survie aux mains agiles d'un Ratling. Les soldats qui traitent leurs camarades plus petits avec respect peuvent obtenir des rations supplémentaires, des intoxicants et du matériel" +
            " spécialisé. Ceux qui insultent la stature des Ratlings voient au contraire leurs effets personnels disparaître mystérieusement.\n\nLes Ratlings sont originaires du Monde Agricole d'Ostia. Ils sont spécifiquement ciblés par les recruteurs forcés du" +
            " Seigneur Militant au détriment de la population humaine plus grande et plus productive de la planète. Beaucoup de ces conscrits désertent, fuyant vers l'Étendue et d'autres lieux sans loi où ils s'adaptent à un mode de vie criminel.",
        Tier: 1,
        Faction: 1,
        SousFaction: 2,
        Espèces: 7,
        CoûtPX: 54,
        MotsClés: "IMPERIUM, ASTRA MILITARUM, [RÉGIMENT], ABHUMAIN, MILITARUM AUXILLA",
        Attributs: {
            Endurance: 2,
            Agilité: 2,
            Sociabilité: 2
        },
        Compétences: {
            Vigilance: 2,
            CapacitéDeTir: 3,
            Ruse: 2,
            Duperie: 2,
            Furtivité: 3
        },
        AptitudeArchetype: "Tir Précis et Déguuerpissement : Lorsque vous utilisez une arme avec le trait Sniper, augmentez le score Sniper de l'arme de +Rang. De plus, lorsque vous réussissez un Test d'Attaque à distance, vous pouvez immédiatement" +
            " vous déplacer d'une distance égale à votre Vitesse en tant qu'Action Réflexe.",
        Equipement: "Fusil Ratling ou Fusil Laser Long, Armure Flak, 5 Rations (2 volées), Souvenirs Ratling                      Talent ou pouvoir: Coup Fatal",
        Armes: [
            {
                Id: 1,
                Nom: "Couteau",
                Description: "Du hachoir d'un boucher à grox au stylet d'un assassin, de nombreuses petites armes blanches peuvent être qualifiées de « Couteaux ». Cela inclut toutes les lames qui peuvent être fixées à une arme comme une baïonnette.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-",
                Dégâts: "(F) + 2",
                DésDégâtsSupplémentaires: "2",
                Portée: "Lancer (F) x 4",
                Rafale: "-",
                Traits: "-",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LAME, [AU CHOIX]"
            }
        ],
        CoûtAttributConseil: 16,
        ForceConseil: 1,
        EndurenceConseil: 2,
        AgiliteConseil: 3,
        InitiativeConseil: 1,
        ForceMentaleConseil: 1,
        Intelligncve: 2,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 4,
        CompetenceConseil: {
            Vigilance: 2,
            CapacitéDeTir: 3,
            Ruse: 2,
            Duperie: 2,
            Intuition: 1,
            Persuasion: 1,
            Furtivité: 1
        },
        TallentConseil: [
            {
                Id: 21,
                Nom: "ÉLIMINATEUR",
                CoûtPX: 20,
                Prerequis: "Score de Furtivité 2+",
                Effet: "Vous frappez dans l'ombre et utilisez l'élément de surprise pour tuer vos ennemis en un coup. Lorsque vous possédez un Score de Furtivité (p. 181) et que vous attaquez un ennemi qui ne vous a pas remarqué, vous pouvez ajouter votre Score de Furtivité comme DS, en plus des bonus liés à une Attaque surprise (p. 182). Toute diminution de votre Score de Furtivité est résolue après l'attaque."
            },
            {
                Id: 69,
                Nom: "SILENCIEUX",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous maîtrisez l'art de se déplacer silencieusement. Vous pouvez vous déplacer à pleine Vitesse lorsque vous vous Déplacez furtivement (p. 182). Chaque fois que votre Score de Furtivité est réduit, vous perdez 1 point de moins."
            }
        ],
        Influence: ""
    },
    /*Guerrier Ogryn*/
    {
        Id: 43,
        Nom: "Guerrier Ogryn",
        DescriptionCourte: "Vous êtes un titan de guerre musclé, déchaîné par l'Astra Militarum comme un instrument contondant.",
        DescriptionLongue: "La masse incroyable et la force physique des Ogryns en font des troupes de choc idéales pour l'Astra Militarum. Leurs esprits simples privilégient la route la plus directe pour détruire leurs ennemis. La Militarum Auxilla les" +
            " équipe d'un armement robuste, conçu pour tenir bon quel que soit le nombre de fois où il est utilisé comme une masse contre des ennemis lourdement armés.\n\nLes Ogryns sont loyaux et chaleureux par inclinaison, bien qu'ils aient du mal à se calmer" +
            " une fois enragés. Tous possèdent une phobie instinctive des espaces confinés, ce qui inclut la plupart des structures conçues pour les humains plus petits. La dévotion envers l'Empereur vient facilement, leur foi étant rarement compliquée par des" +
            " doutes ou d'autres pensées conflictuelles.\n\nLes Ogryns étaient les habitants originels de Skardas, la lune-prison à haute gravité de Gilead Primus. Des communautés d'Ogryns y servent de gardes pénitentiaires depuis des siècles, mais alors que le" +
            " besoin de l'Astra Militarum en force brute écrasante augmente, leur nombre diminue.",
        Tier: 2,
        Faction: 1,
        SousFaction: 2,
        Espèces: 6,
        CoûtPX: 98,
        MotsClés: "IMPERIUM, ASTRA MILITARUM, MILITARUM AUXILLA, [RÉGIMENT], ABHUMAIN",
        Attributs: {
            Force: 5,
            Endurance: 5,
            Volonté: 2
        },
        Compétences: {
            CapacitéDeTir: 1,
            Survie: 2,
            CapacitéDeCombat: 2
        },
        AptitudeArchetype: "Déchaînement : Votre approche du combat est simple, directe, et dépense beaucoup de munitions. Lorsque vous Chargez et que vous possédez une arme à distance, vous pouvez tirer sauvagement avec celle-ci en tant qu'Action" +
            " Gratuite. Ceci est traité comme une Option de Rafale qui accorde des Dés de Bonus à votre Test d'Attaque de Mêlée égaux à la valeur de Rafale de votre arme.",
        Equipement: "Armure Flak, 3 Bombes à Fragments",
        Armes: [
            {
                Id: 93,
                Nom: "Fusil Écorcheur",
                Description: "Grand, robuste et basique, le fusil écorcheur (Ripper Gun) est conçu pour être manié par les Ogryns. Pour cette raison, sa taille et sa construction solide garantissent qu'il est aussi utile comme gourdin que comme arme à feu. La stupidité et l'imprécision typiques d'un Ogryn ont façonné la conception du fusil écorcheur, résultant en un mécanisme de détente personnalisé activé en pressant la poignée pour tirer une rafale. Un limiteur de rafale est câblé dans chaque fusil écorcheur pour s'assurer qu'un Ogryn excité ne vide pas un chargeur entier dès la première pression.",
                Type: "Armes à distance du Militarum Auxilla",
                Dégâts: "11",
                DésDégâtsSupplémentaires: "2",
                PénétrationArmure: "-",
                Portée: "6/12/18",
                Rafale: "2",
                Traits: "Assaut, Brutal, Lourd (5)",
                Valeur: "5",
                Rareté: "3",
                MotsClés: "PROJECTILE, IMPERIUM, ASTRA MILITARUM, MILITARUM AUXILLA"
            },
            {
                Id: 83,
                Nom: "Baïonnette de l'Écorcheur",
                Description: "Les membres du Departmento Munitorum plaisantent en disant que les baïonnettes ont été installées à l'origine sur les fusils écorcheurs Ogryn pour que leurs porteurs à l'esprit lent sachent quelle partie de l'arme pointer vers l'ennemi. En vérité, une charge d'Ogryn est rendue beaucoup plus mortelle par ces larges dalles de métal affûtées.",
                Type: "Armes de mêlée Ogryn",
                PénétrationArmure: "-1",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "3",
                Portée: "-",
                Rafale: "-",
                Traits: "Fiable",
                Valeur: "3",
                Rareté: "1",
                MotsClés: "LAME, IMPERIUM, ASTRA MILITARUM, MILITARUM AUXILLA"
            }
        ],
        CoûtAttributConseil: 8,
        ForceConseil: 5,
        EndurenceConseil: 5,
        AgiliteConseil: 2,
        InitiativeConseil: 2,
        ForceMentaleConseil: 2,
        Intelligncve: 1,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 44,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 1,
            CapacitéDeTir: 2,
            Intimidation: 1,
            Survie: 3,
            CapacitéDeCombat: 5
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 39,
                Nom: "LE DEVOIR DANS LA MORT",
                CoûtPX: 20,
                Prerequis: "Score de Force mentale 3+, Mot-clé IMPERIUM",
                Effet: "Votre foi ardente en l'Empereur vous permet de dépasser vos limites pour agir selon Sa volonté, au détriment de votre forme physique. Chaque fois que vous subissez plus de Blessures que votre Maximum de blessures, vous pouvez utiliser ce Talent. Vous pouvez effectuer votre prochain Tour normalement, mais vous devenez Mourant à la fin de ce Tour. Vous pouvez choisir de faire votre prochain Tour immédiatement après avoir activé ce Talent, et il est ainsi possible d'interrompre le Tour d'un ennemi. Si vous obtenez une Complication à n'importe quel Test, vous subissez une Blessure grave."
            },
            {
                Id: 10,
                Nom: "BRUTE",
                CoûtPX: 20,
                Prérequis: "Score de Force 3+",
                Effet: "vos attaques portent des coups brutaux, quelle que soit l'arme que vous utilisez. Chaque arme de mêlée que vous utilisez possède le Trait d'arme Brutal (p. 209), y compris pour vos attaques à mains nues. Si vous réussissez une attaque de mêlée avec une arme qui possède déjà le Trait d'arme Brutal, vous infligez +1 dégât supplémentaire. Ce bonus de dégât est appliqué après le calcul de vos dégâts totaux, il ne s'ajoute pas à la valeur Dégâts de l'arme."
            }
        ],
        Influence: ""
    },
    /*Bullgryn*/
    {
        Id: 44,
        Nom: "Bullgryn",
        DescriptionCourte: "Vous êtes un mur de plaques de blindage lourdes et d'armes d'assaut rapproché, marchant au combat en premier avec une armée de camarades s'abritant derrière vous.",
        DescriptionLongue: "Lorsque le muscle Ogryn est insuffisant pour enfoncer une défense ennemie, les commandants de l'Astra Militarum ordonnent à leurs troupes d'assaut de s'armer de chenilles de chars et de boucliers lourds, et d'échanger leurs fusils" +
            " contre des armes de corps à corps. Le résultat est instable, même selon les standards Ogryns — une charge lente mais inarrêtable, matraquant toute opposition, un bouclier vivant pour la seconde vague avançant derrière eux.\n\nLes Bullgryns comprennent" +
            " que leurs amis plus petits dépendent d'eux pour leur protection, un devoir qu'ils prennent extrêmement au sérieux. Ils répètent constamment des marches à un rythme plus court pour que leurs compagnons aux jambes plus petites puissent suivre, jusqu'à" +
            " ce que se souvenir de tenir leurs boucliers levés devienne une seconde nature. La pensée misérable de faillir à défendre leurs alliés les trouble bien plus que de mourir, ce qui se traduit par un courage incroyable sous le feu.\n\nLes Bullgryns sont" +
            " sélectionnés parmi les guerriers vétérans, émergeant partout où la progression de l'Astra Militarum a faibli. Le Seigneur Militant Fylamon les rassemble pour une frappe contre les Mondes de Vide et de Membrane, un rappel puissant de l'incroyable" +
            " puissance à la disposition de l'Imperium.",
        Tier: 3,
        Faction: 1,
        SousFaction: 2,
        Espèces: 6,
        CoûtPX: 172,
        MotsClés: "IMPERIUM, ASTRA MILITARUM, MILITARUM AUXILLA, [RÉGIMENT], ABHUMAIN",
        Attributs: {
            Force: 6,
            Endurance: 6,
            Agilité: 2,
            Initiative: 2,
            Volonté: 2
        },
        Compétences: {
            Athlétisme: 2,
            CapacitéDeTir: 2,
            Survie: 2,
            CapacitéDeCombat: 3
        },
        AptitudeArchetype: "Mur de Boucliers : Vous fournissez à vos alliés une ligne de défense mobile formée de carapace, de chenilles de char et de muscle abhumain. Si une attaque est effectuée contre un allié à moins de 3m, cet allié peut" +
            " ajouter la Valeur d'Armure de votre Bouclier à sa propre Valeur d'Armure.",
        Equipement: "3 Bombes à Fragments, un Bouclier de Brèche (Slabshield) et un Gantelet Grenadier ou une Masse de Bullgryn et un Bouclier de Brute",
        Armures: [
            {
                Id: 60,
                Nom: "Plaque Bullgryn",
                Description: "Le Departmento Munitorum a découvert il y a longtemps que les Ogryns étaient assez forts pour porter des blindages de véhicules recyclés, et utilise depuis lors tout surplus pour équiper les Bullgryns avec ce que l'on appelle la Plaque Bullgryn.",
                Ar: "4",
                Effet: "Cette armure est conçue pour les Ogryns. Les personnages de taille moyenne ne peuvent pas porter d'armure Ogryn.",
                Traits: "-",
                Valeur: "5",
                Rareté: "1",
                MotsClés: "LOURD, IMPERIUM, ASTRA MILITARUM, MILITARUM AUXILLA"
            }
        ],
        CoûtAttributConseil: 12,
        ForceConseil: 6,
        EndurenceConseil: 6,
        AgiliteConseil: 3,
        InitiativeConseil: 3,
        ForceMentaleConseil: 2,
        Intelligncve: 1,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 56,
        CompetenceConseil: {
            Athlétisme: 2,
            Vigilance: 3,
            CapacitéDeTir: 3,
            Commandement: 1,
            Survie: 3,
            CapacitéDeCombat: 5
        },
        TallentConseil: [
            {
                Id: 10,
                Nom: "BRUTE",
                CoûtPX: 20,
                Prérequis: "Score de Force 3+",
                Effet: "vos attaques portent des coups brutaux, quelle que soit l'arme que vous utilisez. Chaque arme de mêlée que vous utilisez possède le Trait d'arme Brutal (p. 209), y compris pour vos attaques à mains nues. Si vous réussissez une attaque de mêlée avec une arme qui possède déjà le Trait d'arme Brutal, vous infligez +1 dégât supplémentaire. Ce bonus de dégât est appliqué après le calcul de vos dégâts totaux, il ne s'ajoute pas à la valeur Dégâts de l'arme."
            },
            {
                Id: 20,
                Nom: "DUR À CUIRE",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "Vous êtes difficile à tuer. Lorsque vous subissez plus de Blessures que votre Maximum de blessures, vous n'êtes pas Mourant. Faites un jet sur le Tableau des blessures de guerre et soignez 1 Blessure. Vous ne pouvez plus réutiliser ce Talent jusqu'à votre prochain Rassemblement."
            },
            {
                Id: 55,
                Nom: "PEUR",
                CoûtPX: 30,
                Prerequis: "Aucun",
                Effet: "que ce soit en raison des ravages que la guerre a laissés sur votre corps, d'une aura malfaisante ou encore du poids de vos mots, vous effrayez ceux que vous rencontrez. Lorsque vous réussissez un Test d'Intimidation (FM), vous pouvez forcer la cible à faire un Test de Peur avec un SD égal à 1+Double de votre Rang."
            }
        ],
        Influence: ""
    },
    /*Lexmecanicien*/
    {
        Id: 45,
        Nom: "Lexmecanicien",
        DescriptionCourte: "Vous êtes une source ambulante d'information et de calcul, concevant des solutions mathématiques pour tous les problèmes que vous rencontrez.",
        DescriptionLongue: "Les forges de l'Adeptus Mechanicus contiennent de vastes salles de banques de cogitateurs, leurs Esprits de la Machine traitant les quotas de production, les analyses statistiques et les rapports de bataille. Lorsqu'une évaluation" +
            " plus mobile est requise, les Tech-Prêtres dépêchent les Lexmecaniciens, leurs cerveaux mécaniques avancés fournissant des instructions sur le terrain sur des sujets aussi divers que l'interprétation du langage corporel et les trajectoires" +
            " d'artillerie.\n\nLes Lexmecaniciens ont tendance à être dépourvus d'humour et terre-à-terre, toujours précis dans leur travail, et avides de plus d'informations. Contrairement à leurs maîtres Tech-Prêtres, ils s'en remettent naturellement à" +
            " un rôle de soutien. Ils sont souvent détachés auprès d'autres organisations, en particulier les Ordres de l'Inquisition, qui trouvent leurs connaissances polymathiques exceptionnellement utiles dans leurs investigations.\n\nBien que les" +
            " Lexmecaniciens se trouvent n'importe où dans le système Gilead où il y a des données déroutantes à interpréter, la plupart retournent sur Avachrus quand ils le peuvent. Ostensiblement, c'est pour améliorer leur capacité de traitement avec" +
            " des augmétiques supplémentaires, mais il s'agit surtout d'une opportunité de télécharger leurs expériences dans les cogitateurs du Mechanicus, préservant une sauvegarde en cas de décès prématuré.",
        Tier: 2,
        Faction: 1,
        SousFaction: 4,
        Espèces: 1,
        CoûtPX: 44,
        MotsClés: "IMPERIUM, INQUISITION, [ORDRE], ADEPTUS MECHANICUS, [MONDE-FORGE]",
        Attributs: {
            Intelligence: 3
        },
        Compétences: {
            Connaissance: 3,
            Technomaîtrise: 3
        },
        AptitudeArchetype: "Certitude Statistique : L'assistance que vous fournissez à vos alliés bénéficie d'une analyse mathématique rigoureuse, pour éliminer toute possibilité de malchance ou de doute. Lorsque vous Aidez un allié, vous pouvez" +
            " réduire le nombre de Dés de Bonus que vous fournissez d'un montant égal à votre Rang. Pour chaque dé retiré, votre allié gagne une icône supplémentaire sur le résultat de son Test.",
        Equipement: "Robes d'Adepte (Vêtements), Auspex, Plume d'Auto-scribe, Multi-outil (Combi-tool), Ardoise de Données, 2 Augmétiques de votre choix, Huile Sacrée pour Machine, Symbole d'Autorité (Adeptus Mechanicus et Inquisition)",
        Armes: [
            {
                Id: 38,
                Nom: "Pistolet laser",
                Description: "Petit, facile à produire et fiable, le toujours très utile Pistolet laser est l'arme de poing standard de l'Astra Militarum. Bien qu'il n'ait pas la puissance d'arrêt des armes de poing plus lourdes, sa robustesse garantit qu'il fonctionnera dans presque toutes les conditions.",
                Type: "Armes Laser",
                PénétrationArmure: "-",
                Dégâts: "7",
                DésDégâtsSupplémentaires: "1",
                Portée: "6 / 12 / 18",
                Rafale: "1",
                Traits: "Fiable, Pistolet",
                Valeur: "2",
                Rareté: "Courant",
                MotsClés: "LASER, IMPERIUM"
            }
        ],
        CoûtAttributConseil: 63,
        ForceConseil: 1,
        EndurenceConseil: 2,
        AgiliteConseil: 3,
        InitiativeConseil: 2,
        ForceMentaleConseil: 3,
        Intelligncve: 5,
        SociabiliteConseil: 3,
        CompétencesConseilCoût: 34,
        CompetenceConseil: {
            Vigilance: 2,
            CapacitéDeTir: 1,
            Ruse: 1,
            Intuition: 2,
            Investigation: 2,
            Medicae: 1,
            Persuasion: 1,
            Pilotage: 1,
            Connaissance: 3,
            Technomaîtrise: 3,
            CapacitéDeCombat: 1
        },
        TallentConseil: [
            {
                Id: 7,
                Nom: "AUGMENTIQUE",
                CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
                Prérequis: "",
                Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
            },
            {
                Id: 18,
                Nom: "DÉDUCTION",
                CoûtPX: 20,
                Prérequis: "Score d'Intelligence 3+",
                Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
            },
            {
                Id: 64,
                Nom: "RITUEL DE LA PENSÉE PURE",
                CoûtPX: 20,
                Prerequis: "Mot-clé ADEPTUS MECHANICUS",
                Effet: "vous avez remplacé un hémisphère de votre cerveau par un cogitateur. Vous vivez une existence sans émotion, basée sur la pureté paisible et gratifiante de la logique. Vous gagnez un +Rang des bonus aux Tests de Résolution et de Peur, ainsi que pour résister aux Attaques déstabilisantes de Persuasion et d'Intimidation. Vous gagnez +Rang dés bonus lorsque vous effectuez des Tests d'investigation."
            }
        ],
        Influence: "+1"
    },
    /*Interrogateur*/
    {
        Id: 46,
        Nom: "Interrogateur",
        DescriptionCourte: "Vous êtes un apprenti Inquisiteur, commençant votre entraînement en apprenant à extorquer des informations à des sujets récalcitrants.",
        DescriptionLongue: "Tout Inquisiteur subit un long apprentissage avant d'être jugé digne de recevoir le titre, apprenant à démêler les conspirations et testant son âme contre les ennemis les plus périlleux de l'Humanité. Par dessein, beaucoup" +
            " d'Interrogateurs ne survivent pas à ces épreuves, garantissant que seuls les plus endurcis et à la Volonté de fer reçoivent une Rosette Inquisitoriale.\n\nPour être accepté comme Interrogateur, un acolyte doit attirer l'attention d'un Inquisiteur" +
            " en étant exceptionnel d'une manière ou d'une autre, mais son entraînement implique toujours de diversifier ses capacités. L'interrogatoire est la compétence la plus mise en avant — incluant la torture — mais cultiver un réseau d'informateurs à" +
            " travers les factions impériales est tout aussi important.\n\nLes Interrogateurs bénéficient parfois d'un enseignement direct aux côtés de leur maître, mais depuis l'arrivée de la Grande Faille, la plupart sont restés bloqués dans le système Gilead" +
            " et forcés de compter sur leurs propres instincts. Ils s'engagent dans les multiples adversités qui frappent le système avec délectation, croyant que chaque catastrophe est une nouvelle chance de prouver leur aptitude aux hautes fonctions.",
        Tier: 2,
        Faction: 1,
        SousFaction: 4,
        Espèces: 1,
        CoûtPX: 64,
        MotsClés: "IMPERIUM, INQUISITION, [ORDRE], [TOUT]",
        Attributs: {
            Volonté: 3,
            Intelligence: 4
        },
        Compétences: {
            Intuition: 2,
            Medicae: 3,
            Connaissance: 1,
            Technomaîtrise: 1,
            CapacitéDeCombat: 1
        },
        AptitudeArchetype: "Extraire la Vérité : Pour gagner une Rosette Inquisitoriale, la première compétence que vous devez maîtriser est de mettre à nu les cœurs pécheurs des humains et des xénos. Lorsque vous réussissez un Test pour acquérir" +
            " des informations d'un individu, vous gagnez des Changements (Shifts) gratuits égaux à votre Rang.",
        Equipement: "Symbole d'Autorité, Excruciateur, N'importe quels trois objets d'Équipement avec le mot-clé IMPERIUM d'une rareté Rare ou inférieure.",
        Armes: [
            {
                Id: 14,
                Nom: "Fouet neural",
                Description: "Fabriqués à partir de matériaux psychoconducteurs, ces longs fouets crépitants envoient de terribles signaux neuronaux à travers la chair et jusqu'au centre de douleur du cerveau.",
                Type: "Armes de mêlée exotiques",
                PénétrationArmure: "-2",
                Dégâts: "(F) + 3",
                DésDégâtsSupplémentaires: "2",
                Portée: "4",
                Rafale: "-",
                Traits: "Douloureux",
                Valeur: "5",
                Rareté: "Rare",
                MotsClés: "EXOTIQUE, ADEPTA SORORITAS"
            }
        ],
        CoûtAttributConseil: 48,
        ForceConseil: 2,
        EndurenceConseil: 3,
        AgiliteConseil: 2,
        InitiativeConseil: 3,
        ForceMentaleConseil: 3,
        Intelligncve: 4,
        SociabiliteConseil: 4,
        CompétencesConseilCoût: 42,
        CompetenceConseil: {
            Vigilance: 2,
            CapacitéDeTir: 1,
            Ruse: 1,
            Intuition: 3,
            Intimidation: 2,
            Investigation: 2,
            Medicae: 3,
            Connaissance: 2,
            Survie: 1,
            Technomaîtrise: 2,
            CapacitéDeCombat: 2
        },
        TallentConseil: [
            {
                Id: 18,
                Nom: "DÉDUCTION",
                CoûtPX: 20,
                Prérequis: "Score d'Intelligence 3+",
                Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
            },
            {
                Id: 55,
                Nom: "PEUR",
                CoûtPX: 30,
                Prerequis: "Aucun",
                Effet: "que ce soit en raison des ravages que la guerre a laissés sur votre corps, d'une aura malfaisante ou encore du poids de vos mots, vous effrayez ceux que vous rencontrez. Lorsque vous réussissez un Test d'Intimidation (FM), vous pouvez forcer la cible à faire un Test de Peur avec un SD égal à 1+Double de votre Rang."
            },
            {
                Id: 76,
                Nom: "VIGILANT",
                CoûtPX: 20,
                Prerequis: "Aucun",
                Effet: "vous ne baissez jamais la garde. Vous gagnez +Double de votre Rang à votre Vigilance passive."
            }
        ],
        Influence: "+1"
    },
    /*Mercenaire Kroot*/
    {
        Id: 47,
        Nom: "Mercenaire Kroot",
        DescriptionCourte: "Vous êtes une lame à louer extraterrestre, recherchant des adversaires puissants à dévorer pour absorber leur force.",
        DescriptionLongue: "Les Kroots sont notoirement peu concernés par l'identité de ceux pour qui ils se battent ou contre qui ils luttent. Leur véritable récompense est la chair des ennemis puissants qu'ils défont au combat — bien qu'ils exigent un" +
            " paiement en monnaie locale, l'échangeant contre du matériel spécialisé et des besoins de survie de base. C'est pourquoi les Kroots défient secrètement leur contrat d'exclusivité avec l'Empire T’au. Ce n'est qu'en combattant au-delà des sphères" +
            " d'influence T’au que leur espèce peut prélever une diversité génétique suffisante pour véritablement prospérer.\n\nLa personnalité d'un Mercenaire Kroot est colorée par son historique d'emploi et son régime alimentaire, mais en général, ils sont" +
            " pragmatiques et peu émotifs. Ils pratiquent les coutumes tribales de leur monde natal Pech partout où ils vont, et s'adaptent facilement aux nouvelles technologies et langages alors qu'ils parcourent l'immensité de la galaxie à la recherche d'ennemis" +
            " puissants à occire et consommer.\n\nMalgré la haine notoire de l'Imperium pour les espèces xénos, de petits groupes de Mercenaires Kroots opèrent secrètement dans le système Gilead depuis des générations. La Sphère de Guerre Kroot *Howl Marauk*," +
            " cachée dans le Voidmire, sert de quartier général, offrant des services à la Flottille Varonius, aux Guerriers Greensteel et à d'autres parties payantes sans discrimination.",
        Tier: 1,
        Faction: 5,
        SousFaction: 13,
        Espèces: 8,
        CoûtPX: 62,
        MotsClés: "KROOT",
        Attributs: {
            Force: 3,
            Endurance: 2,
            Agilité: 3,
            Initiative: 2
        },
        Compétences: {
            Athlétisme: 1,
            Vigilance: 1,
            Discrétion: 2,
            Survie: 3,
            CapacitéDeCombat: 3
        },
        AptitudeArchetype: "Loyauté Adoptive : Vous parcourez la galaxie à la recherche de proies puissantes à consommer, travaillant comme mercenaire pour financer vos voyages. Vous gagnez le mot-clé [TOUT], qui doit être remplacé par la Faction" +
            " qui commande actuellement votre allégeance. À la discrétion du MJ, vous pouvez échanger ce mot-clé pour un autre différent si vos loyautés changent en cours de jeu.",
        Equipement: "",
        Armes: [
            {
                Id: 75,
                Nom: "Fusil Kroot (mêlée)",
                Description: "Toutes les armes Kroot intègrent des lames, écho des bâtons de combat de leurs ancêtres. La plupart privilégient les lanceurs de limaces à canon long personnalisés avec des lames récupérées lors d'engagements mercenaires, leur permettant de charger leurs ennemis avec la fureur bestiale et les coups rapides à deux mains pour lesquels leur espèce est connue.",
                Type: "Armes de mêlée",
                PénétrationArmure: "-",
                Dégâts: "(F) + 4",
                DésDégâtsSupplémentaires: "3",
                Portée: "-",
                Rafale: "-",
                Traits: "2 mains",
                Valeur: "3",
                Rareté: "3",
                MotsClés: "LAME, KROOT, PRIMITIF"
            }
        ],
        Armures: [
            {
                Id: 57,
                Nom: "Armure Kroot",
                Description: "À peine plus que des morceaux de métal ficelés ensemble pour protéger les quelques parties vulnérables de la biologie Kroot, cette armure est assemblée avec soin pour s'assurer qu'elle n'entrave pas les mouvements.",
                Ar: "2",
                Effet: "",
                Traits: "-",
                Valeur: "1",
                Rareté: "1",
                MotsClés: "LÉGER, PRIMITIF, KROOT"
            }
        ],
        CoûtAttributConseil: 4,
        ForceConseil: 3,
        EndurenceConseil: 2,
        AgiliteConseil: 3,
        InitiativeConseil: 2,
        ForceMentaleConseil: 2,
        Intelligncve: 1,
        SociabiliteConseil: 1,
        CompétencesConseilCoût: 14,
        CompetenceConseil: {
            Athlétisme: 1,
            Vigilance: 1,
            CapacitéDeTir: 1,
            Intuition: 3,
            Discrétion: 2,
            Survie: 3,
            CapacitéDeCombat: 3
        },
        TallentConseil: "",
        Influence: ""
    },
]