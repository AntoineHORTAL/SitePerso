export const ListeTalents = [
    {
        Id: 1,
        Nom: "[ATTRIBUT] SURHUMAIN(E)",
        CoûtPX: 60,
        Prérequis: "Score d'[Attribut] 5+",
        Effet: "lorsque vous prenez ce Talent, vous devez sélectionner un de vos Attributs avec un score de 5 ou plus. Ce Talent s’applique à cet Attribut. Chaque fois que vous effectuez un Test avec l’Attribut choisi, vous gagnez +Double de votre Rang dés bonus."
    },
    {
        Id: 2,
        Nom: "[COMPÉTENCE] SURNATUREL(LE)",
        CoûtPX: 60,
        Prérequis: "Score de [Compétence] 4+",
        Effet: "choisissez n’importe quelle Compétence avec un score de 4+. Lorsque vous effectuez un Test avec la Compétence sélectionnée, réduisez tous les modificateurs SD du Double de votre Rang, jusqu’à un minimum de 0. Cela n’affecte pas la difficulté de base de la tâche, seulement les éventuels modificateurs. Il peut par exemple s’agir de faire un test sans les outils appropriés, dans l’obscurité totale, ou bien une option de combat spécifique."
    },
    {
        Id: 3,
        Nom: "[TRAIT] AMÉLIORÉ(E)",
        CoûtPX: 40,
        Prérequis: "",
        Effet: "augmentez un de ces Traits de +Rang : Conviction, Défense, Résistance, Résolution, Stress, Détermination, Vitesse, Blessures"
    },
    {
        Id: 4,
        Nom: "ANGE DE LA MORT",
        CoûtPX: 30,
        Prérequis: "Rang 2+, Espèce Adeptus Astartes",
        Effet: "vous êtes un Space Marine, un des guerriers les plus redoutés de la galaxie. Vous êtes un soldat surhumain et surentraîné, le vétéran de plusieurs centaines de batailles et un maître du maniement de nombreuses armes mortelles. Ajoutez +Rang à la valeur totale des dégâts des attaques réussies avec les armes suivantes : Épées tronçonneuses, Haches tronçonneuses, Épées énergétiques, Gantelets énergétiques, Attaques à mains nues, Armes à Bolt, Toute arme avec le Mot-clé ADEPTUS ASTARTES. À la discrétion du MJ, ce Talent peut également s’appliquer aux armes avec le Mot-clé CHAOS pour les Space Marines du Chaos."
    },
    {
        Id: 5,
        Nom: "ARME DE PRÉDILECTION",
        CoûtPX: 30,
        Prérequis: "",
        Effet: "vous vous êtes entraîné intensivement avec une seule arme que vous gardez toujours sur vous. Elle est presque devenue une extension de votre corps. Choisissez une de vos armes comme Arme de prédilection. Ce Talent n’affecte que cette arme et aucune autre de son type (par exemple, une seule Épée tronçonneuse modifiée, pas toutes les Épées tronçonneuses). Chaque fois que vous réussissez une attaque avec votre Arme de prédilection, vous infligez +Double de votre Rang DS. Si vous perdez ou détruisez votre Arme de prédilection, vous ne pouvez plus recevoir d’avantages de ce Talent. Collaborez avec le MJ pour déterminer si un remplacement approprié peut être trouvé ; cela pourrait être l’objet de toute une aventure."
    },
    {
        Id: 6,
        Nom: "ATTAQUE ÉCRASANTE",
        CoûtPX: 20,
        Prérequis: "Score de Capacité de Combat 2+",
        Effet: "vous pouvez concentrer toute votre force et votre rage en une seule attaque ; cette frappe est mortelle, mais elle vous laisse à découvert. Vous gagnez +Rang DS lors de n'importe quelle Attaque à outrance."
    },
    {
        Id: 7,
        Nom: "AUGMENTIQUE",
        CoûtPX: "20, plus un nombre d'PX égal à la valeur de l'Augmentique que vous choisissez",
        Prérequis: "",
        Effet: "vous remplacez une partie de votre organisme par un Augmentique, le nom commun des implants cybernétiques dans l'Imperium. Vous pouvez prendre plusieurs fois ce Talent. Chaque fois que vous prenez ce Talent, vous pouvez sélectionner deux Augmentiques de rareté Rare ou inférieure, ou un seul Augmentique Très rare. Voir p. 241 pour plus d'informations sur les Augmentiques. Le MJ détermine quels Augmentiques sont disponibles (généralement ceux conçus pour votre espèce) et qui peut effectuer la procédure d'installation nécessaire."
    },
    {
        Id: 8,
        Nom: "BERZERK",
        CoûtPX: 20,
        Prérequis: "",
        Effet: "la seule vue du sang suffit à provoquer chez vous une rage noire. Chaque fois que vous voyez un individu à moins de 30 mètres de vous subir un Coup critique ou la Condition Saignement, vous gagnez 1 point de Fureur. Le MJ peut vous demander de faire un Test de Corruption SD 1 chaque fois que ce Talent est activé."
    },
    {
        Id: 9,
        Nom: "BOMBARDEMENT",
        CoûtPX: 40,
        Prérequis: "Rang 2+, un des Mots-clés suivants : ADEPTUS ASTARTES, AELDARI, ASTRA MILITARUM, CHAOS, ORK, ROGUE TRADER",
        Effet: "vous disposez des contacts et du soutien militaire requis pour lancer une frappe aérienne. Ce bombardement peut provenir d'artillerie au sol, d'aéronefs ou même d'un vaisseau en orbite basse. Dans tous les cas, les attaques sont dévastatrices pour leurs cibles. Une fois par session de jeu, un personnage avec ce Talent et doté de moyens de communication avec son vaisseau ou d'autres forces armées peut demander un bombardement. L'attaque de bombardement inflige 20 dégâts +Double de votre Rang DS à toutes les cibles à moins de Rang x 10 mètres de la cible désignée."
    },
    {
        Id: 10,
        Nom: "BRUTE",
        CoûtPX: 20,
        Prérequis: "Score de Force 3+",
        Effet: "vos attaques portent des coups brutaux, quelle que soit l'arme que vous utilisez. Chaque arme de mêlée que vous utilisez possède le Trait d'arme Brutal (p. 209), y compris pour vos attaques à mains nues. Si vous réussissez une attaque de mêlée avec une arme qui possède déjà le Trait d'arme Brutal, vous infligez +1 dégât supplémentaire. Ce bonus de dégât est appliqué après le calcul de vos dégâts totaux, il ne s'ajoute pas à la valeur Dégâts de l'arme."
    },
    {
        Id: 11,
        Nom: "CHARGE FURIEUSE",
        CoûtPX: 20,
        Prérequis: "Score d'Athlétisme 2+ et score de Capacité de Combat 2+",
        Effet: "vous vous êtes entraîné à vous rapprocher rapidement d'un ennemi. Frapper en courant ne vous pose aucun problème. Vous gagnez +Rang dés bonus pour toute attaque de mêlée que vous effectuez dans le cadre d'une Charge (p. 187)."
    },
    {
        Id: 12,
        Nom: "COMBAT À DEUX ARMES",
        CoûtPX: 20,
        Prérequis: "",
        Effet: "vous pouvez manier deux armes avec une précision incroyable. Lorsque vous maniez une arme dans chaque main, la pénalité au SD pour l'utilisation de l'option Attaques multiples est réduite de 2. Chaque arme doit avoir le Trait Pistolet ou être une arme de mêlée à une main. Vous pouvez également utiliser une arme différente pour chacune de vos Attaques multiples, en faisant des jets de dégâts séparés pour chaque arme."
    },
    {
        Id: 13,
        Nom: "COMBAT AVEUGLE",
        CoûtPX: 20,
        Prérequis: "Score de Vigilance 3+",
        Effet: "vous vous êtes entraîné à combattre à l'aveugle, en vous fiant à votre instinct et à d'autres sens pour détecter et éliminer vos ennemis même lorsque vous ne pouvez pas voir. La Condition Aveugle n'affecte pas vos Tests d'attaque utilisant votre Capacité de Combat (I)."
    },
    {
        Id: 14,
        Nom: "CONCENTRATION MULTIPLE",
        CoûtPX: 20,
        Prérequis: "Score de Maîtrise psychique 4+",
        Effet: "vous avez pratiqué l'art de diviser vos pensées, ce qui vous permet de vous concentrer plus efficacement sur la manipulation du Warp de deux manières à la fois. La pénalité de SD due au maintien de plusieurs Pouvoirs psychiques est réduite de 2."
    },
    {
        Id: 15,
        Nom: "CONTRE-ATTAQUE",
        CoûtPX: 30,
        Prérequis: "Score de Capacité de Combat 5+",
        Effet: "maître du combat au corps à corps, vous parvenez toujours à trouver une ouverture dans la garde de votre adversaire lorsqu'il attaque. Vous pouvez utiliser ce Talent chaque fois qu'un ennemi vous cible avec une attaque de mêlée. Une fois que l'ennemi a terminé son attaque, vous pouvez effectuer une seule attaque de mêlée contre lui. Ceci est traité comme votre Action de réaction, mais vous pouvez Contre-attaquer jusqu'à Rang fois par Round. Vous ne pouvez pas appliquer d'autres Talents, Aptitudes ou options de combat à une Contre-attaque. Si vous Contre-attaquez, vous ne pouvez pas effectuer d'Action de Déplacement lors de votre prochain tour."
    },
    {
        Id: 16,
        Nom: "CONVERSATION CALCULÉE",
        CoûtPX: 10,
        Prérequis: "Mot-clé ADEPTUS MECHANICUS",
        Effet: "les dispositifs de cogitation qui forment votre cerveau sont ajustés avec précision. Grâce à la froide pureté de la logique, vous pouvez calculer les résultats probables d'une conversation et prédire les réponses des esprits biologiques plus limités que le vôtre. Avant de faire un Test de Compétence Ruse (Soc), Duperie (Soc), Psychologie (Soc) ou Persuasion (Soc), vous pouvez choisir d'activer ce Talent pour utiliser votre Compétence Technomaîtrise (Int) à la place. Vous devez effectuer un Rassemblement ou un Repos avant de pouvoir utiliser à nouveau ce Talent."
    },
    {
        Id: 17,
        Nom: "COUP BAS",
        CoûtPX: 20,
        Prérequis: "",
        Effet: "vous maîtrisez l'art du combat déloyal. Chaque fois que vous effectuez une Attaque déstabilisante (p. 190) et que vous Convertissez 2 Icônes exaltées, vous pouvez infliger à votre cible une Condition supplémentaire. Choisissez la Condition la plus appropriée du point de vue narratif parmi les options suivantes : À terre (p. 199), Aveuglé (p. 199), Entravé (p. 199), Secoué (p. 200)"
    },
    {
        Id: 18,
        Nom: "DÉDUCTION",
        CoûtPX: 20,
        Prérequis: "Score d'Intelligence 3+",
        Effet: "votre esprit studieux peut facilement démêler un problème (ou une personne). En tant qu'Action simple, vous pouvez utiliser ce Talent pour faire un Test de Compétence basé sur l'Intelligence pour vous rappeler ou remarquer quelque chose à propos d'une cible. La cible peut être n'importe quoi, d'une porte à verrouillage magnétique avec un esprit de machine acariâtre à un gouverneur planétaire impénétrable. Si vous réussissez le Test, le MJ peut vous donner des informations basées sur la Compétence que vous avez utilisée pour faire le Test. Vous gagnez également +Rang dés bonus pour tout Test effectué contre cette cible en utilisant cette information. Vous pouvez donner ce bonus à un allié si vous lui communiquez ce que vous avez appris."
    },
    {
        Id: 19,
        Nom: "DÉVOTS",
        CoûtPX: 30,
        Prérequis: "Score de Commandement 4+",
        Effet: "grâce à votre réputation ou à votre mission, vous avez rassemblé un certain nombre d'adeptes qui feront tout ce que vous demandez. Si vous êtes attaqué, ils interviennent. Vos fidèles sont une Horde de n'importe quelle Menace de niveau Troupe, comme décrit au Chapitre 14 : Bestiaire. Un nombre de fidèles égal au Double de votre Rang+2 a décidé de vous suivre. Vous pouvez utiliser les statistiques présentées au Chapitre 14 pour chaque dévot, ou utiliser les règles suivantes : Les Attributs des dévots sont égaux à 1+Double de votre Rang. Les Compétences des dévots sont égales à 1+Double de votre Rang. Les Attributs et les Compétences des dévots ne peuvent pas être supérieurs aux vôtres. Chaque fois que vous êtes touché par une attaque, un de vos fidèles peut effectuer un Test d'Initiative SD 5 en tant qu'Action de réaction. En cas de succès, l'attaque tue le dévot au lieu de vous toucher. Les fidèles tués peuvent être remplacés gratuitement la prochaine fois que vous visiterez un campement ou une ville importante. Si vous prenez ce Talent plusieurs fois, vous gagnez plus de fidèles du même type que vous possédez déjà. Si vous avez déjà des adeptes dû à une Aptitude d'Archétype, ce Talent fournit à la place des adeptes supplémentaires de ce type."
    },
    {
        Id: 20,
        Nom: "DUR À CUIRE",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "Vous êtes difficile à tuer. Lorsque vous subissez plus de Blessures que votre Maximum de blessures, vous n'êtes pas Mourant. Faites un jet sur le Tableau des blessures de guerre et soignez 1 Blessure. Vous ne pouvez plus réutiliser ce Talent jusqu'à votre prochain Rassemblement."
    },
    {
        Id: 21,
        Nom: "ÉLIMINATEUR",
        CoûtPX: 20,
        Prerequis: "Score de Furtivité 2+",
        Effet: "Vous frappez dans l'ombre et utilisez l'élément de surprise pour tuer vos ennemis en un coup. Lorsque vous possédez un Score de Furtivité (p. 181) et que vous attaquez un ennemi qui ne vous a pas remarqué, vous pouvez ajouter votre Score de Furtivité comme DS, en plus des bonus liés à une Attaque surprise (p. 182). Toute diminution de votre Score de Furtivité est résolue après l'attaque."
    },
    {
        Id: 22,
        Nom: "ÉLU DU WARP",
        CoûtPX: 40,
        Prerequis: "Mot-clé PSYKER",
        Effet: "Le Warp est aussi dangereux que capricieux, et ses horreurs affectent certains malheureux plus que d'autres. Même les Psykers qui font preuve d'un puissant conditionnement mental et semblent maîtriser leurs pouvoirs psychiques ne sont pas à l'abri de l'instabilité du Warp. Vous pouvez utiliser ce Talent pour relancer n'importe quel jet sur la table Périls du Warp (p. 263). Vous devez accepter le nouveau résultat."
    },
    {
        Id: 23,
        Nom: "ENDURCI",
        CoûtPX: 30,
        Prerequis: "Score d'Endurance 3+",
        Effet: "Vous bénéficiez d'une grande résistance naturelle, ou bien vous avez subi un entraînement d'endurance éprouvant. En tant qu'Action de combat, vous pouvez effectuer un Test d'Endurance ND 3. En cas d'échec, vous récupérez 1 Stress. En cas de succès, vous récupérez 1 + Double de votre Rang en Stress. Chaque Icône exaltée convertie permet également de récupérer un point de Stress supplémentaire. Une fois que vous avez utilisé ce Talent, vous ne pouvez plus l'utiliser tant que vous n'avez pas terminé un Rassemblement (p. 196)."
    },
    {
        Id: 24,
        Nom: "ESPRIT DU WARP",
        CoûtPX: 30,
        Prerequis: "Score de Maîtrise psychique 4+",
        Effet: "Vous avez ouvert votre esprit pour accéder à un autre Domaine psychique, soit par une discipline et une étude intenses, soit par une exposition traumatisante au Warp. Vous pouvez apprendre des Pouvoirs psychiques d'un Domaine psychique supplémentaire. Vous pouvez choisir de prendre de la Corruption pour réduire le coût en PX de ce Talent. Pour chaque point de Corruption que vous prenez, réduisez le coût en PX de 5."
    },
    {
        Id: 25,
        Nom: "EXPERT DES ARMES SPÉCIALES",
        CoûtPX: "20, plus PX égal à la Valeur de l'arme choisie",
        Prerequis: "Score de Capacité de Tir 3+, Mot-clé ASTRA MILITARUM",
        Effet: "De nombreux soldats de l'Astra Militarum reçoivent un entraînement à l'utilisation d'armes spéciales sur le champ de bataille. Souvent, cette formation comprend l'apprentissage d'incantations basiques pour apaiser l'esprit de guerre de l'arme si elle devient têtue ou récalcitrante. Vous pouvez sélectionner une des armes suivantes comme équipement standard, en remplacement de votre arme principale : Fusil à pompe de combat (p. 222), Fusil à plasma (p. 223), Fuseur (p. 223), Fusil de sniper laser (p. 221), Lance-flammes (p. 224), Lance-grenades (p. 225). Vous recevez également 3 grenades Frag et 3 grenades Krak. Fusil radiant à salve (FILS DU TEMPESTUS uniquement, p. 221)."
    },
    {
        Id: 26,
        Nom: "FAMILIER DU CHAOS",
        CoûtPX: 20,
        Prerequis: "Mot-clé CHAOS",
        Effet: "Les dieux sombres vous ont récompensé avec un serviteur tout droit sorti du Warp. Cette créature malfaisante se complait dans la violence et la tromperie, et elle vous rappelle constamment les décisions qui vous ont mené jusqu'ici. Les familiers du Chaos sont imprévisibles, capricieux et traitres, mais ils peuvent se révéler des outils puissants dans l'arsenal de n'importe quel cultiste. Vous gagnez +2 Corruption. Vous gagnez un serviteur, un démon inférieur issu du Warp. Il utilise le profil de l'Horreur sulfureuse (voir p. 348), mais tous ses Attributs sont à 1. Ses seules Compétences sont Connaissance (5) et Furtivité (8). Ce démon est capricieux. Pour le forcer à agir, vous devez d'abord réussir un Test opposé de Persuasion ou d'Intimidation. Une fois persuadé, le démon prend des mesures extrêmes pour accomplir la tâche que vous lui confiez et fait au mieux de ses capacités limitées. À la discrétion du MJ, si le serviteur vous voit œuvrer contre les intérêts du Warp, le familier peut se retourner immédiatement contre vous jusqu'à ce qu'il soit détruit ou convaincu de son erreur. Si le familier est tué, vous devez dépenser un point de Fureur pour l'invoquer à nouveau, ce qui prend du temps et nécessite l'autorisation du MJ."
    },
    {
        Id: 27,
        Nom: "FÉLON",
        CoûtPX: 20,
        Prerequis: "Mot-clé CHAOS",
        Effet: "vous pouvez faire des sacrifices aux dieux du chaos pour gagner leur faveur. Vous gagnez +1 Corruption. Vous pouvez sacrifier un individu volontaire ou inconscient, comme un dévot ou un adepte, pour gagner un point de Fureur. À la discrétion du MJ, ce sacrifice peut déclencher un Test de Corruption SD 5."
    },
    {
        Id: 28,
        Nom: "FLAGELLANT",
        CoûtPX: 20,
        Prerequis: "Mot-clé IMPERIUM",
        Effet: "vous consacrez votre souffrance au service de l'Empereur. Au début de chaque journée, vous devez passer 20 minutes (norme de Terra) en prière et vous infliger des Blessures égales à votre Tier par autoflagellation. Vous ne pouvez pas faire de jet de Détermination contre ces Blessures ou permettre qu'elles soient soignées autrement que par un Repos. Tant que vous êtes blessé de cette manière, vous gagnez +Rang dés bonus à vos jets de Détermination et de Conviction et pouvez choisir de devenir Frénétique (p. 199) en tant qu'Action de combat. Si vous possédez également le Talent Frénésie, vous pouvez devenir Frénétique avec une Action simple. Si vous ne parvenez pas à vous flageller, la honte vous envahit et vous subissez une pénalité de +2 SD à tous les Tests jusqu'à ce que vous flagelliez à nouveau."
    },
    {
        Id: 29,
        Nom: "FLÉAU DES ARMURES",
        CoûtPX: 20,
        Prerequis: "Score de Capacité de Combat 2+",
        Effet: "les armures de vos ennemis ne valent rien face à vos coups puissants. Lorsque vous réussissez une attaque de mêlée, vous pouvez Convertir des Icônes exaltées pour réduire la Résistance de la cible au lieu d'ajouter des DS. Chaque Icône exaltée que vous Convertissez diminue de 1 la Résistance de la cible. Cette Résistance est soustraite avant de calculer les dégâts de l'attaque. Votre arme doit avoir un des Mots-clés suivants pour activer ce Talent : LAME, TRONÇONNEUSE, FORCE, CHAMP DE FORCE."
    },
    {
        Id: 30,
        Nom: "FRAPPE SIMULTANÉE",
        CoûtPX: 30,
        Prerequis: "Score de Capacité de Tir 4+ ou score de Capacité de Combat 4+",
        Effet: "vous pouvez attaquer avec précision avec deux armes à la fois. Lorsque vous prenez ce Talent, vous devez choisir s'il s'applique à votre Capacité de Tir (A) ou à votre Capacité de Combat (I). Vous devez avoir un Score de compétence de 4+ dans la Compétence que vous choisissez. Vous ne pouvez faire une Frappe simultanée qu'avec deux armes de mêlée à une main ou deux armes à distance avec le Trait Pistolet. Vous pouvez transformer n'importe quelle Action d'attaque qui a une cible unique en une Frappe simultanée. Choisissez votre arme principale ; votre attaque utilise toutes les statistiques de votre arme principale, telles que la PA et les Traits d'arme. Votre Test d'attaque s'effectue normalement. En cas de réussite, ajoutez la moitié de la valeur Dégâts de l'arme secondaire en tant que DS au jet de dégâts."
    },
    {
        Id: 31,
        Nom: "FRÉNÉSIE",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "vous pouvez utiliser une Action de combat pour devenir Frénétique (p. 199)."
    },
    {
        Id: 32,
        Nom: "HAINE [AU CHOIX]",
        CoûtPX: 30,
        Prerequis: "Aucun",
        Effet: "vous avez transformé votre haine envers un ennemi spécifique en une arme. Sélectionnez un Mot-clé qui sera l'objet de votre haine. Vous gagnez +Double de votre Rang dés bonus pour les attaques de mêlée contre les cibles qui ont le Mot-clé choisi. Vous subissez une pénalité de +2 SD chaque fois que vous interagissez socialement avec des individus du Mot-clé choisi."
    },
    {
        Id: 33,
        Nom: "HUMOUR NOIR",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "vous arrivez à trouver de l'humour dans les situations les plus désespérées, et vous pouvez vous en servir pour renforcer la détermination de vos alliés. Vous pouvez effectuer une Action simple pour faire une blague sinistre chaque fois que vous êtes Blessé ou souffrez d'une Condition, tant que vous êtes encore capable de parler. Faites un Test d'Attribut de Sociabilité SD 2. Si vous réussissez, vous et tous les alliés qui peuvent vous entendre récupérez un nombre de points de Stress égal à votre Rang plus le nombre d'Icônes obtenues."
    },
    {
        Id: 34,
        Nom: "IDENTITÉ SECRÈTE",
        CoûtPX: 20,
        Prerequis: "Mot-clé INQUISITION",
        Effet: "vous conservez une identité secrète qui vous permet de voyager dans l'Imperium sans vous faire remarquer. Travaillez avec votre MJ pour définir votre identité secrète. Vous pourriez être un petit noble d'un système lointain, un marchand ambulant à peine connu des dossiers de l'Administratum, ou un membre de l'Administratum faisant une enquête. Il peut être utile de sélectionner un ou deux Mots-clés relatifs à votre identité secrète. Votre identité a été bien établie à l'aide de ressources inquisitoriales. Cela peut vous apporter des avantages lorsque vous traitez avec certains types de personnes. Si votre identité secrète est contestée, vous devez effectuer un Test de Duperie (Soc) pour maintenir l'illusion."
    },
    {
        Id: 35,
        Nom: "INSENSIBLE À LA DOULEUR",
        CoûtPX: 40,
        Prerequis: "Score d'Endurance 4+",
        Effet: "votre tolérance à la douleur est supérieure à celle de la plupart des autres membres de votre espèce. Vous ne subissez pas de pénalité au SD pour avoir été Blessé. Votre Trait Blessures est augmenté de votre Rang."
    },
    {
        Id: 36,
        Nom: "JARGON [COMPÉTENCE]",
        CoûtPX: 20,
        Prerequis: "Score de 1+ dans une des Compétences suivantes : Capacité de Combat (I), Capacité de Tir (A), Connaissance (Int), Medicae (Int), Pilotage (A), Survie (FM) ou Technomaîtrise (Int).",
        Effet: "vous êtes suffisamment informé sur un sujet particulier pour disserter à l'infini. Votre emploi d'un langage mystifiant, spécifique et étrange suffit à stupéfier les profanes et à vous faire rapidement des amis parmi ceux qui partagent votre passion. Lorsque vous prenez ce Talent, vous devez choisir à laquelle de vos Compétences il s'applique dans la liste des Prérequis ci-dessus. Lors de toute rencontre sociale, vous pouvez faire un Test de Compétence en utilisant la Compétence associée à votre Jargon. Le SD est déterminé par le MJ en fonction du degré d'amitié de la cible avec vous. Si vous échouez, tout le monde autour de vous ignore votre bavardage incohérent. Si vous réussissez et que la cible est intéressée ou formée à la Compétence, elle deviendra probablement plus amicale avec vous (voir p. 168). Si la cible ne partage pas vos connaissances et votre argot, elle reste stupéfaite pendant que vous blablatez : elle est distraite, incapable de s'éloigner de votre conversation pendant une durée maximale de 20 minutes (norme de Terra)."
    },
    {
        Id: 37,
        Nom: "LA CHAIR EST FAIBLE",
        CoûtPX: 30,
        Prerequis: "Aucun",
        Effet: "Presque tous vos organes ont été remplacés par des Augmentiques. Vous avez peut être subi cette procédure pour récupérer de terribles blessures, ou bien pour exprimer votre foi. Ces nouveaux composants sont bien plus solides que vos anciens organes, mais votre apparence est considérablement affectée. Vous n'avez plus besoin de respirer et vous ne saignez pas. Par conséquent, vous êtes immunisé contre les Conditions Saignement (p. 200) et Asphyxie (p. 201). Vous gagnez +Rang dés bonus aux Tests de Technomaîtrise (Int) et aux jets de Détermination. Vous subissez +2 SD aux Tests de Persuasion (Soc). Lorsque vous prenez ce Talent, vous pouvez soigner toutes les Blessures de guerre et Blessures graves (p. 194-195)."
    },
    {
        Id: 38,
        Nom: "LA MORT OU LA GLOIRE !",
        CoûtPX: 20,
        Prerequis: "Espèce : Humain",
        Effet: "Même terrifié, vous pouvez trouver le courage de vous lancer dans une attaque féroce. Chaque fois que vous devez effectuer un Test de Peur, vous pouvez choisir de Charger instantanément la source de la Peur, si vous en êtes capable, et de faire une seule attaque de mêlée. Faites le Test de Peur après la résolution de cette attaque si la cible est toujours en vie. Si vous êtes en combat après la résolution du Test de Peur, vous sacrifiez votre premier Tour."
    },
    {
        Id: 39,
        Nom: "LE DEVOIR DANS LA MORT",
        CoûtPX: 20,
        Prerequis: "Score de Force mentale 3+, Mot-clé IMPERIUM",
        Effet: "Votre foi ardente en l'Empereur vous permet de dépasser vos limites pour agir selon Sa volonté, au détriment de votre forme physique. Chaque fois que vous subissez plus de Blessures que votre Maximum de blessures, vous pouvez utiliser ce Talent. Vous pouvez effectuer votre prochain Tour normalement, mais vous devenez Mourant à la fin de ce Tour. Vous pouvez choisir de faire votre prochain Tour immédiatement après avoir activé ce Talent, et il est ainsi possible d'interrompre le Tour d'un ennemi. Si vous obtenez une Complication à n'importe quel Test, vous subissez une Blessure grave."
    },
    {
        Id: 40,
        Nom: "LE SANG DOIT COULER !",
        CoûtPX: 20,
        Prerequis: "Score de Capacité de Combat 2+",
        Effet: "Vous savez diriger vos coups pour infliger des hémorragies. Vous pouvez dépenser une Icône exaltée chaque fois que vous réussissez une attaque de Capacité de Combat (I) pour infliger la Condition Saignement à votre cible."
    },
    {
        Id: 41,
        Nom: "LECTURE SUR LES LÈVRES",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "Vous avez appris à lire sur les lèvres. Le MJ peut demander un Test de Vigilance (Int) pour lire avec succès sur les lèvres en fonction de l'environnement, de l'espèce du locuteur et de la langue parlée. Le SD par défaut est de 3 et peut être modifié au gré du MJ."
    },
    {
        Id: 42,
        Nom: "LEG DE TRISTESSE",
        CoûtPX: 20,
        Prerequis: "Espèce : Aeldari",
        Effet: "La longue et triste histoire de votre peuple pèse lourdement sur votre cœur. Mais loin de vous apitoyer, vous êtes plus déterminé et enhardi que jamais. Vous ne subissez plus le malus de l'Aptitude d'espèce Émotions intenses (p. 29). Le groupe gagne +1 Gloire chaque fois que vous récupérez de l'état Mourant."
    },
    {
        Id: 43,
        Nom: "LOBOTOMIE AVANCÉE",
        CoûtPX: 20,
        Prerequis: "Espèce : Humain",
        Effet: "grâce à une discipline surhumaine ou à des traitements chirurgicaux, vous avez été immunisé contre les tentations de la chair. Vous gagnez +Double de votre Rang à votre Conviction et votre Résolution. Vous n'ajoutez plus votre Tier à votre Stress maximum."
    },
    {
        Id: 44,
        Nom: "LOI D'LA BANDE",
        CoûtPX: 20,
        Prerequis: "Espèce : Ork",
        Effet: "vous savez manipuler l'assurance brutale d'une horde d'Orks. Lorsque vous commandez deux Orks ou plus, vous et tous les Orks alliés, à moins de 15+Double de votre Rang mètres, pouvez ajouter +Double de votre Rang dés bonus aux Tests de Résolution."
    },
    {
        Id: 45,
        Nom: "MAÎTRE DE L'ÉVASION",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "grâce à des contorsions corporelles, à un entraînement ou à un équipement dissimulé sous la peau, vous êtes apte à échapper à toutes sortes de liens. Vous gagnez +Double de votre Rang dés bonus à toutes les tentatives pour échapper à toute forme d'entraves, qu'il s'agisse de liens mécaniques ou d'un individu qui a saisi dans le cadre d'une action de Lutte (p. 188)."
    },
    {
        Id: 46,
        Nom: "MAÎTRE DU DOMAINE",
        CoûtPX: 30,
        Prerequis: "Score de Maîtrise psychique 4+, et au moins 2 Pouvoirs psychiques dans un même Domaine",
        Effet: "votre dévouement à un Domaine psychique vous a permis de maîtriser votre style de sorcellerie Warp. Lorsque vous prenez ce Talent, sélectionnez un Domaine psychique dans lequel vous possédez au moins 2 Pouvoirs psychiques. À chaque fois que vous faites un Test de Maîtrise psychique (FM) pour activer un Pouvoir psychique de ce domaine, réduisez le SD de 1."
    },
    {
        Id: 47,
        Nom: "MAÎTRE DU SAVOIR [MOT-CLÉ]",
        CoûtPX: 30,
        Prerequis: "Score de Connaissance 3+",
        Effet: "vous êtes hautement qualifié dans un domaine spécifique. Lorsque vous prenez ce Talent, choisissez un Mot-clé. Cela pourrait être une organisation de l'Imperium, une espèce xenos ou quelque chose d'ésotérique (et d'interdit) comme la démonologie. Toutes les sélections de Mots-clés sont soumises à l'approbation du MJ. Si vous sélectionnez une autre Espèce comme Mot-clé, vous pouvez parler sa langue maternelle avec autant d'aisance que la vôtre. Chaque fois que vous effectuez un Test de Compétence lié au Mot-clé choisi, vous gagnez +Double de votre Rang dés bonus. Cela inclut les Tests de Connaissance, mais ce Talent peut aussi être utile pour tout Test impliquant une interaction avec ce Mot-clé, y compris les Attaques déstabilisantes (p. 190). Le MJ est seul juge de ce qui se rapproche assez du Mot-clé sélectionné pour recevoir ce bonus."
    },
    {
        Id: 48,
        Nom: "MAÎTRISE DU PROMÉTHIUM",
        CoûtPX: 20,
        Prerequis: "Mot-clé IMPERIUM",
        Effet: "vous avez été formé à l'utilisation du feu sacré de l'Empereur. Lorsque vous utilisez des armes avec le Trait Inflige (En feu), vous gagnez +Rang DS à tous les jets de dégâts. Une fois par Round, vous pouvez gagner 1 point de Fureur lorsque vous tuez un ennemi de l'Imperium à l'aide d'une arme avec le Trait Inflige (En feu)."
    },
    {
        Id: 49,
        Nom: "MARQUE DU CHAOS",
        CoûtPX: 30,
        Prerequis: "Mot-clé [MARQUE DU CHAOS]",
        Effet: "vous avez obtenu la faveur des dieux du Chaos. Cela peut être parce que vous avez dédié votre vie à un dieu en particulier, ou bien car vous avez commis un acte au nom de tout le panthéon du Warp. Vous gagnez +1 Corruption. Sélectionnez une des cinq options ci-dessous et appliquez le bonus à votre Feuille de personnage. Si vous prenez ce Talent, le Mot-clé [MARQUE DU CHAOS] est remplacé par le nom du Dieu que vous avez choisi. Nurgle : votre Endurance augmente de +1. Khorne : vous gagnez +2 dés bonus lorsque vous effectuez des attaques en utilisant l'option Attaque à outrance. Vous ne pouvez pas prendre cette option si vous avez le Mot-clé PSYKER. Slaanesh : vous gagnez +2 dés bonus aux Tests de Vigilance et de Persuasion. Tzeentch : vous obtenez le Mot-clé PSYKER. Si vous possédez déjà le Mot-clé PSYKER, vous gagnez un Pouvoir psychique mineur de votre choix. Sans allégeance : choisissez une des Compétences suivantes : Capacité de Combat, Duperie, Furtivité, Maîtrise psychique, Persuasion, Psychologie, Ruse ou Vigilance. Vous gagnez +Rang dés bonus lorsque vous utilisez cette Compétence. Si vous choisissez Sans allégeance, vous ne remplacez pas le Mot-clé [MARQUE DU CHAOS]."
    },
    {
        Id: 50,
        Nom: "MIMÉTISME VOCAL",
        CoûtPX: 20,
        Prerequis: "Score de Duperie 3+",
        Effet: "vous pouvez imiter la voix d'autres personnes avec une précision étonnante. Vous avez peut-être appris ce Talent grâce à votre environnement ou à une formation difficile, ou bien vous avez acquis cette capacité avec l'implantation d'un synthétiseur vox. Faites un Test de Vigilance lorsque vous écoutez une personne parler pendant au moins 1 heure pour étudier sa voix. Le SD est défini par le MJ en fonction de la différence entre la voix de votre cible et la vôtre et de vos capacités auditives actuelles. Si vous réussissez, vous gagnez +Double de votre Rang dés bonus chaque fois que vous effectuez un Test de Duperie pour imiter cette voix. Vous pouvez mémoriser un nombre de voix égal à votre Intelligence."
    },
    {
        Id: 51,
        Nom: "NOBLE",
        CoûtPX: 30,
        Prerequis: "Score de Persuasion 3+",
        Effet: "vous êtes membre d'une classe noble renommée. Vous pouvez avoir une autorité supplémentaire sur les autres membres de votre société, ainsi qu'une responsabilité envers vos inférieurs sociaux. Chaque fois que vous êtes dans une situation sociale où le statut joue un rôle, gagnez +Double de votre Rang dés bonus aux Tests d'Influence et à tous les Tests de Compétence impliquant une interaction sociale."
    },
    {
        Id: 52,
        Nom: "ORTHOPRAXIE",
        CoûtPX: 20,
        Prerequis: "Mot-clé IMPERIUM",
        Effet: "les litanies de Sa Sainte Parole sont profondément gravées dans votre mémoire. Vous pouvez réciter par cœur des hymnes et des prières à l'Empereur et les utiliser pour renforcer votre esprit. Comme Action simple, vous pouvez commencer à réciter mentalement des liturgies ecclésiastiques. Tant que vous sacrifiez votre Action simple de cette manière, vous gagnez un bonus de Force mentale de +1, pour un maximum de Rounds égal au double de votre Rang. Vous ne pouvez plus utiliser ce Talent tant que vous n'avez pas terminé un Repos."
    },
    {
        Id: 53,
        Nom: "PARANOÏAQUE",
        CoûtPX: 20,
        Prerequis: "Score de Ruse 3+",
        Effet: "vous craignez constamment pour votre vie. Vous avez établi tout un réseau de contacts pour recueillir des informations sur d'éventuels complots dangereux. Une fois par session, lorsque vous avez accès à un appareil de communication, vous pouvez poser à votre cercle de contacts une question dont ils pourraient connaître la réponse. Le MJ lance un Test secret de Ruse (Soc) et vous fournit toutes les informations que le contact peut fournir. Le nombre d'Icônes obtenues sur le Test détermine la qualité et la quantité des informations communiquées."
    },
    {
        Id: 54,
        Nom: "PAS DE CÔTÉ",
        CoûtPX: 30,
        Prerequis: "Score d'Initiative 3+",
        Effet: "vous avez la capacité d'esquiver les blessures au corps à corps. Vous pouvez utiliser Pas de côté comme Action de réaction chaque fois que vous êtes attaqué au corps à corps et que vous savez où se trouve l'assaillant. Vous devez déclarer un Pas de côté avant que l'attaquant ne fasse son Test de Capacité de Combat. Vous ne pourrez pas faire de Déplacement lors de votre prochain tour. Lorsque vous faites un Pas de côté, vous gagnez +Double de votre Rang en Défense et en Résistance pendant la résolution de l'attaque. Vous ne pouvez faire qu'un seul Pas de côté par tour, et les bonus ne s'appliquent que pour une seule attaque."
    },
    {
        Id: 55,
        Nom: "PEUR",
        CoûtPX: 30,
        Prerequis: "Aucun",
        Effet: "que ce soit en raison des ravages que la guerre a laissés sur votre corps, d'une aura malfaisante ou encore du poids de vos mots, vous effrayez ceux que vous rencontrez. Lorsque vous réussissez un Test d'Intimidation (FM), vous pouvez forcer la cible à faire un Test de Peur avec un SD égal à 1+Double de votre Rang."
    },
    {
        Id: 56,
        Nom: "PLUSS DE DAKKA !",
        CoûtPX: 35,
        Prerequis: "Espèce : Ork",
        Effet: "vous aimez l'odeur et le son du Dakka, et vous avez la fâcheuse tendance à épuiser des quantités exorbitantes de munitions : cette tactique peut paraître simpliste, mais son efficacité est indéniable. La valeur Rafale de toute arme que vous utilisez est augmentée de votre Rang. Vous pouvez utiliser un Grot bastos (p. 241) pour transporter des Munitions supplémentaires."
    },
    {
        Id: 57,
        Nom: "PRÉSENCE SOUVERAINE [COMPÉTENCE]",
        CoûtPX: 30,
        Prerequis: "Score de Compétence 4+ dans une des Compétences suivantes : Athlétisme (F), Duperie (Soc), Intimidation (FM), Persuasion (Soc) ou Technomaîtrise (Int).",
        Effet: "votre présence pèse de tout son poids dans la pièce et attire l'attention, même de la part de grands groupes d'individus. Lorsque vous prenez ce Talent, vous devez sélectionner une des Compétences répertoriées dans les exigences. Lorsque vous effectuez une Attaque déstabilisante avec la compétence choisie, vous pouvez sélectionner soit 1+Double de votre Rang cibles, soit une Horde de n'importe quel nombre de Troupes. Le SD pour l'Attaque déstabilisante n'augmente pas."
    },
    {
        Id: 58,
        Nom: "QUE BRÛLE LA GALAXIE",
        CoûtPX: 20,
        Prerequis: "Mot-clé CHAOS",
        Effet: "vous prenez plaisir à détruire toute forme de structure hiérarchique. Quand votre proie commence à faiblir, sa chute vous exalte et vous pousse à commettre des atrocités toujours plus grandes au nom des dieux du Chaos. Vous gagnez +1 Corruption. Chaque fois que vous neutralisez un ennemi de niveau Adversaire ou Élite, le groupe gagne +1 Gloire, jusqu'à un maximum du double de votre Rang en Gloire par rencontre."
    },
    {
        Id: 59,
        Nom: "QUELCONQUE",
        CoûtPX: 20,
        Prerequis: "Mot-clé IMPERIUM",
        Effet: "vous ne marquez pas les esprits et vous vous fondez facilement dans la foule. Les personnages d'une classe sociale supérieure avec le Mot-clé IMPERIUM, tels que les gouverneurs planétaires, la noblesse impériale ou les propriétaires de manufactorum, vous ignorent complètement à moins que vous n'attiriez une attention excessive sur vous-même. Toute personne essayant de vous remarquer ou de vous suivre dans une zone surpeuplée, ou essayant de se souvenir de votre visage, subit +2 SD."
    },
    {
        Id: 60,
        Nom: "RACAILLE AVISÉE",
        CoûtPX: 20,
        Prerequis: "Humain",
        Effet: "de longues années de bêtises peu recommandables lors de transactions commerciales avec des individus touches-vous ont appris à dépouiller efficacement les hors-la-loi et à bien assimiler des substances chimiques potentiellement dangereuses. Vous gagnez +Double de votre Rang dés bonus à tout Test lié à la résistance aux effets de produits chimiques. Vous gagnez +Rang des bonus lorsque vous effectuez des Tests de Ruse (Soc)."
    },
    {
        Id: 61,
        Nom: "RÉSONANCE BINAIRE",
        CoûtPX: 20,
        Prerequis: "Mot-clé ADEPTUS MECHANICUS",
        Effet: "vous maîtrisez parfaitement les constructs mécaniques. Vous gagnez +Double de votre Rang dés bonus chaque fois que vous essayez de contrôler, de programmer ou d'interroger un Serviteur ou une construction similaire, comme un chérubin ou un Servo-crâne."
    },
    {
        Id: 62,
        Nom: "RÉSURGENCE PRIMARIS",
        CoûtPX: 40,
        Prerequis: "Espèce Primaris Astartes",
        Effet: "vous avez été maintenu en animation suspendue depuis le 31e millénaire, juste après la fin de l'Hérésie d'Horus. Vous vous souvenez d'une galaxie très différente et avez une perspective unique sur le Sombre Imperium. Vos souvenirs sont porteurs à la fois d'un grand espoir et d'une grande tristesse. Vous gagnez +Rang des bonus aux Tests de Résolution et de Corruption. Vous gagnez +Double de votre Rang des bonus pour les Tests de Connaissance concernant les événements historiques du 31e millénaire ou antérieurs à cette période."
    },
    {
        Id: 63,
        Nom: "RITUEL DE MAGNOMÉTRIE",
        CoûtPX: 20,
        Prerequis: "Mot-clé ADEPTUS MECHANICUS",
        Effet: "vous avez installé de puissants électro-aimants contrôlables par la pensée dans vos Augmentiques. Vous pouvez varier l'intensité et la fréquence de vos émissions électromagnétiques, ce qui vous permet d'attirer des objets métalliques et de survoler de grandes surfaces métalliques. Vous pouvez prendre et déplacer des objets métalliques jusqu'à 3 + Double de votre Rang mètres de votre corps vers n'importe quel objet métallique stable ou de grande taille et le survoler. Aucun Test n'est requis pour ces capacités. L'utilisation de ce Talent au combat nécessite une Action simple. La portée effective de ce Talent est égale à votre Rang x 20 mètres. La Force effective de ce Talent (à utiliser pour lancer un objet ou résister à une autre force) est de 1 + Double de votre Rang."
    },
    {
        Id: 64,
        Nom: "RITUEL DE LA PENSÉE PURE",
        CoûtPX: 20,
        Prerequis: "Mot-clé ADEPTUS MECHANICUS",
        Effet: "vous avez remplacé un hémisphère de votre cerveau par un cogitateur. Vous vivez une existence sans émotion, basée sur la pureté paisible et gratifiante de la logique. Vous gagnez un +Rang des bonus aux Tests de Résolution et de Peur, ainsi que pour résister aux Attaques déstabilisantes de Persuasion et d'Intimidation. Vous gagnez +Rang dés bonus lorsque vous effectuez des Tests d'investigation."
    },
    {
        Id: 65,
        Nom: "RITUEL DE PEUR",
        CoûtPX: 30,
        Prerequis: "Mot-clé ADEPTUS MECHANICUS",
        Effet: "votre larynx a été remplacé par un vocodeur synthétique. Cet appareil, indispensable pour communiquer avec la Lingua-technis, est capable d'émettre des infrasons. Ces fréquences graves sont inférieures au seuil de l'audition et peuvent déclencher des réflexes de peur. Vous pouvez activer le Rituel de peur en tant qu'Action de combat. Ce rituel affecte tous les personnages à l'intérieur d'un cône de 10 mètres de long sur 3 mètres de large à son extrémité. Les personnages dans la zone d'effet qui n'ont pas de protection auditive (y compris des oreilles Augmentiques) doivent immédiatement faire un Test de Peur avec un SD de 2+Double de votre Rang. Vous êtes au bout du cône, mais vous êtes immunisé contre ses effets. Vous pouvez acheter le Talent Voix inquiétante pour 10 PX."
    },
    {
        Id: 66,
        Nom: "RUCHIER",
        CoûtPX: 20,
        Prerequis: "Mot-clé IMPERIUM",
        Effet: "vous avez l'habitude d'évoluer dans les environnements urbains de l'Imperium. Vous gagnez +Rang dés bonus à tous les Tests de Furtivité (A) ou de Survie (FM) lorsque vous vous déplacez dans des environnements urbains."
    },
    {
        Id: 67,
        Nom: "SANS PEUR",
        CoûtPX: 30,
        Prerequis: "Score de Force mentale 4+",
        Effet: "un conditionnement mental approfondi ou un entraînement intensif vous permet de contrôler complètement votre peur. Vous réussissez automatiquement n'importe quel Test de Peur. Vous êtes immunisé contre les Attaques déstabilisantes d'Intimidation (FM)."
    },
    {
        Id: 68,
        Nom: "SENS AIGUISÉ",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "choisissez l'un de vos 5 sens (vue, ouïe, odorat, goût ou toucher). Chaque fois que vous effectuez un Test de Vigilance basé sur ce sens, vous gagnez +Rang dés bonus."
    },
    {
        Id: 69,
        Nom: "SILENCIEUX",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "vous maîtrisez l'art de se déplacer silencieusement. Vous pouvez vous déplacer à pleine Vitesse lorsque vous vous Déplacez furtivement (p. 182). Chaque fois que votre Score de Furtivité est réduit, vous perdez 1 point de moins."
    },
    {
        Id: 70,
        Nom: "STOÏQUE",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "que ce soit par un hasard de la biologie, une intervention chirurgicale ou une blessure traumatique, votre visage ne trahit plus vos émotions comme les autres membres de votre espèce. Vous infligez une pénalité égale au Double de votre Rang en SD sur tous les Tests de Psychologie effectués contre vous."
    },
    {
        Id: 71,
        Nom: "SUPPLICATION",
        CoûtPX: 20,
        Prerequis: "Humain",
        Effet: "vous connaissez votre place et savez comment utiliser le système féodal impérial à votre avantage. Vous gagnez +Rang dés bonus chaque fois que vous faites appel à l'un de vos supérieurs sociaux, comme un gouverneur planétaire ou un officier supérieur. Si votre comportement s'écarte de quelque manière que ce soit des normes sociales acceptées de l'Imperium, votre MJ peut refuser ce bonus."
    },
    {
        Id: 72,
        Nom: "TEMPÊTE DE MORT",
        CoûtPX: 30,
        Prerequis: "Score de Capacité de Combat 4+",
        Effet: "vous effectuez une rafale d'attaques au combat. Lorsque la seule option de combat que vous choisissez à votre tour est une Attaque multiple, la pénalité de SD est réduite du Double de votre Rang. Votre tour se termine une fois que vous avez terminé votre Attaque multiple."
    },
    {
        Id: 73,
        Nom: "TENACE",
        CoûtPX: 30,
        Prerequis: "Aucun",
        Effet: "votre persévérance dépasse l'entendement. Vous récupérez 1 Stress pour chaque Icône exaltée que vous obtenez pendant un jet de Détermination (p. 196)."
    },
    {
        Id: 74,
        Nom: "TIR DE PRÉCISION",
        CoûtPX: 20,
        Prerequis: "Score de Capacité de Tir 2+",
        Effet: "vous êtes un tireur hors pair capable de cibler avec précision les points faibles de vos ennemis. Lorsque vous effectuez l'action Viser (p. 189) et effectuez un Tir ciblé (p. 186), le bonus de DS que vous recevez est doublé."
    },
    {
        Id: 75,
        Nom: "TOUCHÉ PAR LE DESTIN",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "la chance est toujours de votre côté, même lorsque l'équipement ou la foi peuvent faiblir. Vous commencez chaque session avec +Rang points de Fureur."
    },
    {
        Id: 76,
        Nom: "VIGILANT",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "vous ne baissez jamais la garde. Vous gagnez +Double de votre Rang à votre Vigilance passive."
    },
    {
        Id: 77,
        Nom: "VOIES MAÎTRISÉES",
        CoûtPX: 20,
        Prerequis: "Espèce Aeldari, Mot-clé ASURYANI",
        Effet: "en tant que membre d'un Vaisseau-monde, vous avez parcouru et maîtrisé de nombreuses Voies au cours de votre longue vie. Vous avez probablement oublié plus de connaissances que ce que la plupart des humains apprendront jamais, mais vous conservez toujours la maîtrise de votre ancien sujet d'étude. Sélectionnez une des Voies Aeldari. Vous ajoutez un bonus égal à votre Rang au bonus que vous recevez normalement de cette Voie Aeldari."
    },
    {
        Id: 78,
        Nom: "VOIX INQUIÉTANTE",
        CoûtPX: 20,
        Prerequis: "Aucun",
        Effet: "vous avez une voix sinistre et perturbante. Cela peut être dû à des cadences infrasoniques produites par un synthétiseur vox, à un entraînement à l'interrogatoire ou simplement à un air naturellement malfaisant. Vous gagnez +Rang dés bonus aux Tests d'Intimidation (FM) et de Commandement (FM) lorsque vous utilisez votre voix. Tout Test de Sociabilité réalisé avec quelqu'un susceptible d'être perturbé par votre voix (personnes nerveuses, Psykers, membres pieux de l'Ecclésiarchie) subit une pénalité de +2 SD."
    },
    {
        Id: 79,
        Nom: "Identité secrète",
        CoûtPX: 20,
        Prerequis: "Mots-clé INQUISITION",
        Effet: "vous conservez une identité secrète qui vous permet de voyager dans l'Imperium sans vous faire remarquer.Travaillez avec votre MJ pour définir votre identité secrète.Vous pourriez être un petit noble d'un système lointain, un marchand ambulant à peine connu des dossiers de l'Administratum, ou un membre de l'Administratum faisant une enquête. Il peut être utile de sélectionner un ou deux Mots-clés relatifs à votre identité secrète.Votre identité a été bien établie à l'aide de ressources inquisitoriales. Cela peut vous apporter des avantages lorsque vous traitez avec certains types de personnes.Si votre identité secrète est contestée, vous devez effectuer un Test de Duperie(Soc) pour maintenir l'illusion."
    }
]