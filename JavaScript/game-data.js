// games-data.js
const games = {
    pacman: {
        title: "Dumb Pacman",
        url: "https://html5.gamemonetize.co/3uwoe2havsewdy7r15l1nz226qbvrqvv/",
        image: "./images/Dumb Pacman-512x340.jpg",
        developpeur: "Newgamess",
        date_sortie: "2 octobre 2019",
        technologie: "HTML5 (Unity WebGL)",
        description: "Jeu Pacman classique où vous devez manger des points et éviter vos ennemis. En mangeant de gros points, vous pouvez manger vos ennemis et ainsi passer le niveau. Mais attention aux nouveaux ennemis !"
    },
    chess: {
        title: "Chess Free",
        url: "https://html5.gamemonetize.co/u3vfu3ocwhdperazqcfr292brdp07pau/",
        image: "./images/Chess free-512x340.jpg",
        developpeur: "Smartberry",
        date_sortie: "25 mai 2024",
        technologie: "HTML5 (Unity WebGL)",
        description: "Échecs avec un ordinateur : - Moteur puissant - 18 niveaux de difficulté du débutant au champion du monde - Affichage des coups possibles lors du choix d'une pièce - Conseils interactifs pour mieux jouer pendant la partie - Annuler le coup, s'il y a eu un bâillement, vous pouvez revenir en arrière - L'analyse après la partie met en évidence les erreurs et montre comment vous auriez pu mieux jouer - La possibilité de rejouer la partie depuis le bon endroit - Sélection du handicap Échecs en ligne : - De vrais joueurs en direct - Sauvegarde du classement - Analyse après la partie,"
    },
    orc_hero: {
        title: "Orc Hero",
        url: "https://html5.gamemonetize.co/lqv5exvjamjgzqbhojbdqpdbe72tptet/",
        image: "./images/Orc Hero-512x340.jpg",
        developpeur: "Raccon",
        date_sortie: "11 juin 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Embarquez pour une aventure palpitante au tour par tour en pixel art ! Affrontez des ennemis redoutables, faites progresser vos héros et maîtrisez les combats stratégiques. Améliorez votre esquive, votre défense et votre attaque pour survivre face à des adversaires plus puissants. Parviendrez-vous à vaincre les vagues infinies et à devenir le héros ultime ?"
    },
    bloc_tetrix: {
        title: "Bloc Tetrix",
        url: "https://html5.gamemonetize.co/1mag1l65xefg1rzrrl65nf6xsa6d14yw/",
        image: "./images/Tetrix Blocks-512x340.jpg",
        developpeur: "LofGames.com",
        date_sortie: "21 janvier 2022",
        technologie: "HTML5 (Unity WebGL)",
        description: "Glissez-déposez les blocs de gauche à droite ou de droite à gauche pour remplir une rangée complète de blocs et les éliminer. Collectez plusieurs rangées à la fois pour augmenter votre score."
    },
    super_sprunki: {
        title: "Super Sprunki",
        url: "https://html5.gamemonetize.co/yh0n2bobl4i5wdm0z43l7rhow2nk62qy/",
        image: "./images/super sprunki adventure game-512x340.jpg",
        developpeur: "Gamewelt",
        date_sortie: "15 juillet 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Le jeu d'aventure Super Sprunki - Jungle Adventure - Classic Run Game vous offre un retour en enfance. Le monde de Bobby est désert depuis que la princesse a été kidnappée dans la jungle. Mais l'aventure commence ! Votre mission : aider Bobby à traverser la jungle mystérieuse, à sauter par-dessus les obstacles et à sauver la belle princesse à la destination finale de l'aventure grâce à des monstres super maléfiques. Ce jeu est gratuit et vous pouvez jouer à Bob hors ligne ! [Caractéristiques] : + Plus de 240 niveaux + Combats de boss stimulants + Superbes graphismes haute résolution, dans un style moderne mêlé d'une touche classique + Fluidité"
    },
    jumper_doodle: {
        title: "Jumper Doodle",
        url: "https://html5.gamemonetize.co/5ag61ag42etsgzqx1gsik1jeorem15ok/",
        image: "./images/Jumper   Doodle Edition-512x340.jpg",
        developpeur: "Airem",
        date_sortie: "1 février 2023",
        technologie: "HTML5 (Unity WebGL)",
        description: "Une étrange créature doit atteindre le sommet sans tomber. Essayez d'aller le plus loin possible et faites attention aux pièges. Profitez des sons et des graphismes d'ambiance"
    },
    stop_zombie: {
        title: "Stop Zombie",
        url: "https://html5.gamemonetize.co/8sttq4hfxsvoveqhy43cp39updyjcs48/",
        image: "./images/Stop Zombies-512x340.jpg",
        developpeur: "Tgames",
        date_sortie: "27 juin 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Armé d'un blaster tirant des projectiles colorés, vous devez tenir bon face à une horde implacable dans Stop Zombies. Chaque créature morte-vivante ne peut être éliminée qu'avec une balle de sa couleur ; la vivacité d'esprit et des réflexes aiguisés sont donc votre meilleure défense. Face à la horde grandissante, votre survie dépend de votre vigilance et de votre intelligence pour empêcher"
    },
    duel_of_builders: {
        title: "Duel of builders",
        url: "https://html5.gamemonetize.co/hhqdm1lz6isab49dpaaaecxxkr465hs0/",
        image: "./images/Duel of Builders-512x340.jpg",
        developpeur: "Hexapp",
        date_sortie: "11 décembre 2023",
        technologie: "HTML5 (Unity WebGL)",
        description: "Duel of Builders est un jeu de duel génial. Combattez avec un ami ou contre l'ordinateur ! Prêt pour ce duel amusant ? Joueur 1 W, A, S, D : Mouvement R : Changer d'arme Espace : Attaquer Joueur 2 Touches fléchées : Mouvement O : Changer d'arme P : Attaquer"
    },
    off_road_motocross: {
        title: "Off Road Motocross",
        url: "https://html5.gamemonetize.co/vcecgonbw7uvc92nrt8xgwx9meouuqtz/",
        image: "./images/Off road motocross-512x384.jpg",
        developpeur: "Chif",
        date_sortie: "30 juin 2025",
        technologie:"HTML5 (Unity WebGL)",
        description: "Le motocross tout-terrain est un monde palpitant de vitesse et d'adrénaline. Pilotez des circuits dangereux, surmontez les obstacles et améliorez vos véhicules pour devenir le roi de la route. Pilotez une moto puissante, réalisez des cascades et améliorez vos compétences dans ce jeu de course captivant. Ressentez la vitesse et la liberté dans ce jeu addictif."
    },
    dead_seek: {
        title: "Dead Seek",
        url: "https://html5.gamemonetize.co/zt2tti9k25tgwbwmnacqoxz6l921m956/",
        image: "./images/Dead Seek-512x340.jpg",
        developpeur: "FPDA",
        date_sortie: "01 juillet 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Plongez dans un jeu d'arcade explosif et bourré d'action où chaque tir est un combat pour la survie ! Affrontez des hordes de zombies implacables grâce à un large arsenal d'armes et améliorez-les pour une puissance de feu maximale. Découvrez de nouvelles tactiques et explorez des zones dangereuses grouillant d'infectés. Avec des graphismes éclatants, un gameplay palpitant et une action ininterrompue, vous ne vous ennuierez jamais. Êtes-vous prêt à relever le défi ?"
    },
    stickman_street_fighter_3d: {
        title: "Stickman Street Fighter 3D",
        url: "https://html5.gamemonetize.co/r5tug67vf8lprllpnawokwa3p0xddr45/",
        image: "./images/Stickman Street Fighter 3D-512x384.jpg",
        developpeur: "Kiz10",
        date_sortie: "15 janvier 2020",
        technologie: "HTML5 (Unity WebGL)",
        description: "C'est l'heure du combat dans KZ10 ! Choisissez votre stickman préféré et réalisez des combos incroyables pour terrasser vos adversaires ! Encore plus impressionnant : soyez celui qui, au milieu, met la pression à tout le monde. Dans Stickman Ultimate StreetFighter 3D, un jeu de combat à réaction incroyable, vous devez agir très vite pour donner coups de poing et coups de pied au timing parfait et éviter de vous faire tabasser par des centaines d'ennemis. Terminez 100 niveaux pour débloquer le mode sans fin. Différents types d'ennemis et plus de 20 armes sont disponibles."
    },
    stickman_slash: {
        title: "Stickman Slash",
        url: "https://html5.gamemonetize.co/dimgvlqk0miw677p6zv1snl4u3491l3i/",
        image: "./images/Stickman Slash-512x340.jpg",
        developpeur: "Kiz10",
        date_sortie: "12 août 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Découvrez l'univers de l'un de vos jeux de combat préférés, avec Stickman comme héros principal ! Une physique avancée et des graphismes immersifs propulsent cette expérience vers un tout autre niveau !"
    },
    stickman_sniper: {
        title: "Stickman Sniper",
        url: "https://html5.gamemonetize.co/pnu56ck5blbnesweiw2z1ule6o530x9e/",
        image: "./images/StickmanSniper-512x340.jpg",
        developpeur: "Kiz10",
        date_sortie: "07 août 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Hautement entraînés, ces jeux mettent à l'honneur les tireurs d'élite à la visée la plus meurtrière. Dans ces jeux de sniper, l'objectif est d'éviter d'être détecté et d'utiliser votre entraînement spécialisé pour infiltrer, observer et éliminer les troupes ennemies à longue distance avant même qu'elles ne vous repèrent."
    },
    cod_duty_call_fps: {
        title: "COD Duty Call FPS",
        url: "https://html5.gamemonetize.co/rc0aptuuleju6xnlpeds38lisqpz1hzu/",
        image: "./images/COD Duty Call FPS-512x384.jpg",
        developpeur: "BreymanGames",
        date_sortie: "2 juillet 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Plongez au cœur d'un champ de bataille déchiré par la guerre dans COD Duty Call FPS, un jeu de tir à la première personne effréné qui plonge les joueurs au cœur d'une guerre moderne. Dans un futur proche, vous incarnez un agent d'élite des forces spéciales déployé dans des régions instables, des zones de guerre urbaines et des installations ennemies secrètes, dans une campagne explosive et immersive. COD Duty Call FPS offre une expérience riche en adrénaline où vos réflexes, votre tactique et votre précision détermineront votre survie. Le jeu propose une campagne solo captivante qui suit une mission aux enjeux élevés pour empêcher une catastrophe mondiale."
    },
    forces_armees_io: {
        title: "Forces Armées.io",
        url: "https://html5.gamemonetize.co/31sze1xgnq00dw16hvmett3re4q2qx9w/",
        image: "./images/Armed Forces io-512x340.jpg",
        developpeur: "Lich.Games",
        date_sortie: "19 février 2024",
        technologie: "HTML5 (Unity WebGL)",
        description: "Bienvenue sur ArmedForces.io, où action et adrénaline, tirs intenses et aventures palpitantes vous attendent ! Lancez-vous dans une mission pour localiser et éliminer les ennemis disséminés sur la carte. Chaque recoin recèle des menaces potentielles. Restez vigilant et utilisez un mélange de furtivité, de prouesses de chasseur et de précision pour déjouer vos adversaires."
    },
    freehead_skate: {
        title: "Freehead Skate",
        url: "https://html5.gamemonetize.co/museimxpj23qgd30oirvj1xlmc0vouem/",
        image: "./images/Freehead Skate-512x340.jpg",
        developpeur: "R1Games.com",
        date_sortie: "2 août 2023",
        technologie: "HTML5 (Unity WebGL)",
        description: "Freehead Skate est un jeu d'arcade rapide qui met les joueurs au défi de sauter par-dessus des obstacles en utilisant uniquement la tête de leur personnage. Grâce à des commandes simples et un gameplay addictif, les joueurs doivent synchroniser leurs sauts avec la tête à la perfection pour venir à bout de niveaux de plus en plus difficiles et atteindre des scores élevés."
    },
    dunk_slash: {
        title: "Dunk Slash",
        url: "https://html5.gamemonetize.co/r5q7wmk5mdoulxc1pjzpekh8mkcyrsun/",
        image: "./images/Slash Dunk-512x340.jpg",
        developpeur: "R1Games.com",
        date_sortie: "19 juillet 2023",
        technologie: "HTML5 (Unity WebGL)",
        description: "Dunk Slash est un jeu de basket-ball captivant où les joueurs doivent couper des fils stratégiquement pour diriger le ballon vers le but. Avec des coupes limitées et des agencements de fils complexes, votre précision et votre intelligence seront mises à rude épreuve !"
    },
    iron_legion: {
        title: "Iron Legion",
        url: "https://html5.gamemonetize.co/gkeofcoqengjzxlw0b09f2qrng35egbi/",
        image: "./images/Iron Legion-512x340.jpg",
        developpeur: "Farkhutdinov",
        date_sortie: "05 août 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Iron Legion Plongez dans des batailles de chars épiques et modernes ! Iron Legion est un jeu d'action en ligne palpitant où vous incarnez le commandant d'un formidable véhicule de combat. Caractéristiques du jeu : * Plus de 10 modèles de chars classiques légendaires * Cartes uniques avec un terrain détaillé * Système de développement et d'amélioration des véhicules avec des mécanismes de dégâts réalistes * Batailles en équipe jusqu'à 20 joueurs en temps réel."
    },
    streets_of_rage: {
        title: "Streets of rage",
        url: "https://html5.gamemonetize.co/mg8yyr1z59tawzapm79vfzwg2y2o78u1/",
        image: "./images/Streets Of Rage-512x340.jpg",
        developpeur: "Bestgames.com",
        date_sortie: "18 avril 2025",
        technologie: "HTML5 (Unity WebGL)",
        description: "Les rues sont perturbées et les forces du mal sont à l'œuvre. Découvrez Streets Of Rage, un jeu de combat de rue aux allures d'arcade. Choisissez entre Coup de pied tourbillonnant, ATK VITESSE augmentée, Explosion de feu et bien plus encore pour commencer votre combat. Affrontez des vagues d'ennemis, lancez de puissants combos et devenez le guerrier ultime"
    }
};
