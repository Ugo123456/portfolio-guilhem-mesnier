/* La page de chaque travail, bloc par bloc, dans l'ordre logique du travail.
   k : diapo (diaporama, s'ouvre dans la fenêtre flottante), pages (document en portrait), images, article (texte web),
       youtube, video, carrousel (gardé tel quel pour Basilic), infographie (image très haute).
   src : le document de départ dans hd.js (s1, s2…), sel : seulement certaines pages. */

const LOGICIELS_NOMS={
 canva:"Canva",indesign:"Adobe InDesign",illustrator:"Adobe Illustrator",photoshop:"Adobe Photoshop",
 "pixelmator-pro":"Pixelmator Pro",keynote:"Keynote",pages:"Pages","google-docs":"Google Docs",word:"Microsoft Word",
 youtube:"YouTube","google-analytics":"Google Analytics 4","davinci-resolve":"DaVinci Resolve",figma:"Figma",capcut:"CapCut"
};

/* Les logiciels lus dans les fichiers eux-mêmes (le logiciel qui a fabriqué chaque PDF ou chaque vidéo). */
const LOGICIELS={
 "livret-accueil":["keynote","pages"],
 "memoire-metamorphoses":["word"],
 "kithara":["canva"],
 "zefil":["canva","illustrator","davinci-resolve"],
 "a-ton-rythme":["canva","indesign"],
 "audit-juridique":["canva"],
 "analyse-discours":["canva"],
 "basilic":["canva"],
 "data-ga4":["google-analytics","google-docs"],
 "newsletter-ia":["canva"],
 "gestion-projet":["google-docs"],
 "anglais-wbd":["google-docs"],
 "tx-jewelry":["keynote"],
 "audit-monoprix":["canva","google-docs"],
 "preconisations-monoprix":["canva"],
 "galeries-lafayette":["canva","google-docs"],
 "ess":["canva"],
 "petits-debrouillards":["google-docs"],
 "infography-project":["illustrator","pixelmator-pro"],
 "cadrage-a69":["pages"],
 "newsletter-en-vrai":["pages"],
 "enquete-mails":["google-docs"],
 "baraka-jeux":["pages"],
 "fragonard":["canva","youtube"],
 "boz":["canva","indesign"],
 "nuit-des-musees":["canva"],
 "pere-lucien":["canva"],
 "communication-de-crise":["google-docs"],
 "odette-du-puigaudeau":["google-docs","youtube"],
 "etrange-festival":["photoshop","keynote"],
 "electric-jazzy-album":["photoshop"],
 "moodboard":["photoshop"],
 "burn-out-numerique":["word"]
};

/* Le type de travail : une étiquette de plus, à côté du semestre, de la matière et des thèmes.
   « Recherche » est réservé au mémoire. */
const TYPES={
 "livret-accueil":["Mission de stage","Livret","Diaporama"],
 "memoire-metamorphoses":["Recherche","Mémoire","Soutenance"],
 "kithara":["Création de marque","Diaporama","Vidéo"],
 "zefil":["Création de marque","Brand book","Vidéo","Podcast"],
 "a-ton-rythme":["Campagne","Charte graphique","Affiches","Carnet de bord"],
 "audit-juridique":["Audit"],
 "analyse-discours":["Analyse","Exposé oral"],
 "basilic":["Audit","Exposé oral"],
 "data-ga4":["Audit","Rapport de données"],
 "newsletter-ia":["Newsletter"],
 "gestion-projet":["Outil de pilotage"],
 "anglais-wbd":["Analyse","Anglais"],
 "tx-jewelry":["Lancement de produit","Diaporama"],
 "audit-monoprix":["Audit","Dossier écrit","Diaporama"],
 "preconisations-monoprix":["Préconisations","Diaporama"],
 "galeries-lafayette":["Étude de réception","Dossier écrit","Diaporama"],
 "ess":["Exposé oral"],
 "petits-debrouillards":["Dossier écrit"],
 "infography-project":["Création graphique","Affiches","Logo"],
 "cadrage-a69":["Analyse des médias","Dossier écrit"],
 "newsletter-en-vrai":["Audit","Newsletter"],
 "enquete-mails":["Enquête","Dossier écrit"],
 "baraka-jeux":["Articles","Rédaction"],
 "fragonard":["Création graphique","Publicité","Vidéo"],
 "boz":["Création de marque","Brand book"],
 "nuit-des-musees":["Enquête","Dossier de presse","Diaporama"],
 "pere-lucien":["Média planning","Réseaux sociaux"],
 "communication-de-crise":["Simulation","Dossier écrit"],
 "odette-du-puigaudeau":["Vidéo","Vulgarisation"],
 "etrange-festival":["Affiche","Dossier de création"],
 "electric-jazzy-album":["Pochette d'album","Création graphique"],
 "moodboard":["Moodboard","Création graphique"],
 "burn-out-numerique":["Article","Analyse"]
};

/* Ce qui remplace les données de départ quand elles étaient fausses ou incomplètes. */
const CORRECTIONS={
 "zefil":{groupe:2},
 "infography-project":{
  consigne:"Deux parties. D'abord, suivre les tutoriels Illustrator 1, 2, 3, 5 et 6, puis rendre sa propre version de deux affiches, Mesita Cocktails et The Winery, tous les textes en anglais. Ensuite, un vrai brief : Skye Events, qui organise des événements sportifs sur l'île de Skye, en Écosse, veut un nouveau logo, plus simple, lisible sur les réseaux sociaux par un public international, en une seule couleur en aplat, avec une version noir et blanc et l'explication des choix graphiques en anglais.",
  fait:"Trois rendus. The Winery, l'affiche d'un bar à vin, et Mesita Cocktails, un verre à cocktail au coucher du soleil, tous deux dessinés en vectoriel sur Illustrator. Puis le logo de Skye Events : la falaise de Neist Point dans un cercle, en vert émeraude et en noir et blanc, avec la typographie Caveat Brush posée en arc.",
  dev:"Les deux affiches sont des exercices de technique : tracés, dégradés, hiérarchie de l'information. Le logo est un vrai travail de marque : un cercle qui tient dans une photo de profil, une seule couleur qui marche aussi en noir et blanc, et un paysage que tout le monde reconnaît."
 }
};

/* L'univers de chaque travail : la police des titres, le motif du fond, la couleur de la lueur. */
const THEMES={
 "kithara":{police:"Playfair Display",motif:"etoiles",lueur:"#f0c9a8"},
 "zefil":{police:"Playfair Display",motif:"vagues",lueur:"#7fc4f0"},
 "a-ton-rythme":{police:"Super Dream",motif:"bulles",lueur:"#b49cff"},
 "boz":{police:"Bebas Neue",motif:"burgers",lueur:"#ff4d4d"},
 "etrange-festival":{police:"Bebas Neue",motif:"neons",lueur:"#ff2bd6"},
 "fragonard":{police:"Playfair Display",motif:"fleurs",lueur:"#f4b7c8"},
 "galeries-lafayette":{police:"Playfair Display",motif:"or",lueur:"#e8d5a3"},
 "memoire-metamorphoses":{police:"Playfair Display",motif:"etoiles",lueur:"#d8b45a"},
 "tx-jewelry":{police:"Playfair Display",motif:"or",lueur:"#81d8d0"},
 "electric-jazzy-album":{police:"Playfair Display",motif:"or",lueur:"#d4a94a"},
 "infography-project":{police:"Caveat Brush",motif:"points",lueur:"#f6c177"},
 "odette-du-puigaudeau":{police:"Playfair Display",motif:"dunes",lueur:"#f6e3c0"},
 "nuit-des-musees":{police:"Playfair Display",motif:"etoiles",lueur:"#5aa9ff"},
 "audit-monoprix":{police:"Bebas Neue",motif:"points",lueur:"#ff6b81"},
 "preconisations-monoprix":{police:"Bebas Neue",motif:"points",lueur:"#ff6b81"},
 "livret-accueil":{police:"Sora",motif:"points",lueur:"#f2c14e"},
 "data-ga4":{police:"Sora",motif:"grille",lueur:"#f9ab00"}
};

const DOCS={
 "livret-accueil":[
  {t:"Le bilan présenté le 10 juin",p:"Le diaporama de la réunion de bilan : la démarche, l'enquête auprès des agents, les ateliers, puis le livret.",k:"diapo",src:"s1"},
  {t:"Le livret d'accueil, format A4",p:"La version finale du 28 juin, pensée pour l'écran et l'impression.",k:"pages",src:"s2"},
  {t:"Le livret d'accueil, format A5",p:"La même version, mise en page pour un livret de poche remis le premier jour.",k:"pages",src:"s3"}
 ],
 "memoire-metamorphoses":[
  {t:"Le mémoire",p:"La version déposée, du titre à la bibliographie. Les annexes ne sont pas reproduites.",k:"pages",src:"s1"},
  {t:"L'identité visuelle du mémoire",p:"Le monogramme M en violet et or, ses déclinaisons, ses fonds d'écran et son icône, dessinés pour accompagner le mémoire jusqu'à la soutenance.",k:"images",ims:["img/memoire/charte/c04.webp","img/memoire/charte/c05.webp","img/memoire/charte/c12.webp","img/memoire/charte/c02.webp","img/memoire/charte/c03.webp","img/memoire/charte/c13.webp","img/memoire/charte/c14.webp","img/memoire/charte/c06.webp","img/memoire/charte/c07.webp","img/memoire/charte/c10.webp"]},
  {t:"La soutenance du 2 septembre 2026",p:"Le diaporama de la soutenance, en mode sombre.",k:"diapo",src:"s2"}
 ],
 "kithara":[
  {t:"La présentation orale",p:"La marque, ses cibles, sa ligne éditoriale, son site et son budget, en dix-neuf diapositives.",k:"diapo",src:"s1"},
  {t:"Les coffrets",p:"Les maquettes des trois box : Lisbonne, la Thaïlande, l'Amérique latine.",k:"diapo",src:"s2"},
  {t:"L'arborescence du site",k:"diapo",src:"s3"},
  {t:"Le calendrier éditorial, semaine par semaine",p:"Six mois de lancement : ce qui sort, quand, et combien cela coûte.",k:"calendrier"},
  {t:"Le document du calendrier",k:"diapo",src:"s4"}
 ],
 "zefil":[
  {t:"La publicité",p:"Une publicité verticale de quarante-deux secondes, montée sur DaVinci Resolve.",k:"video",src:"video/pub-zefil.mp4",poster:"img/zefil/pub15.jpg",vertical:true},
  {t:"Le brand book",p:"Le fil graphique de la marque : logo, couleurs, polices, motif.",k:"pages",src:"s2"},
  {t:"La présentation orale",p:"Les six fils de la marque, de son histoire à sa communauté.",k:"diapo",src:"s1"}
 ],
 "a-ton-rythme":[
  {t:"Le brainstorming",p:"Les cibles, les objectifs, les idées et le moodboard, tirés du carnet de bord.",k:"diapo",src:"s3",sel:["p15","p16","p17","p18"]},
  {t:"La charte graphique",p:"Le logo, les couleurs, les polices et les personnages de la campagne.",k:"diapo",src:"s2"},
  {t:"Les affiches",p:"Cinq personnages : la fatigue, l'anxiété, l'isolement, la tristesse, et la douceur pour répondre.",k:"images",ims:["img/ssu/Affiche-Fatigue-V3.jpg","img/ssu/Affiche-Anxiete-V3.jpg","img/ssu/Affiche-Isolement-V3.jpg","img/ssu/Affiche-Tristesse-V3.jpg","img/ssu/Affiche-Douceur.jpg"],portrait:true},
  {t:"La campagne",p:"Les pochettes des playlists et les supports qui prolongent les affiches.",k:"images",ims:["img/ssu/1-cover-playlist-ssu.jpg","img/ssu/2-cover-playlist-ssu.jpg","img/ssu/3-cover-playlist-ssu.jpg"]},
  {t:"Le diaporama final, la campagne santé mentale",p:"La présentation du projet au Service de santé universitaire.",k:"diapo",src:"s1"},
  {t:"Le carnet de bord",p:"Le projet semaine après semaine : la rencontre, le benchmark, les choix, le calendrier.",k:"diapo",src:"s3"}
 ],
 "audit-juridique":[{t:"L'audit",k:"diapo",src:"s1"}],
 "analyse-discours":[{t:"La présentation orale",k:"diapo",src:"s1"}],
 "basilic":[{t:"L'audit du site",p:"Le carrousel des diapositives, tel quel.",k:"carrousel",src:"s1"}],
 "data-ga4":[{t:"Le rapport",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "gestion-projet":[{t:"La matrice des risques",k:"pages",src:"s1"}],
 "anglais-wbd":[{t:"L'analyse",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "tx-jewelry":[{t:"La présentation",k:"diapo",src:"s1"}],
 "audit-monoprix":[
  {t:"Le dossier d'audit",k:"article"},
  {t:"La présentation orale",k:"diapo",src:"s1"},
  {t:"Le dossier d'origine",k:"pages",src:"s2"}
 ],
 "preconisations-monoprix":[{t:"Les préconisations",k:"diapo",src:"s1"}],
 "galeries-lafayette":[
  {t:"Le dossier",k:"article"},
  {t:"La présentation orale",k:"diapo",src:"s1"},
  {t:"Le dossier d'origine",k:"pages",src:"s2"}
 ],
 "ess":[{t:"L'exposé",k:"diapo",src:"s1"}],
 "petits-debrouillards":[{t:"Le dossier",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "infography-project":[
  {t:"Les deux fiches de consigne",p:"La partie 1 (les tutoriels et les deux affiches) et la partie 2 (le brief de Skye Events).",k:"images",ims:["img/infography/consigne-tutoriels.webp","img/infography/consigne-skye.webp"],portrait:true},
  {t:"The Winery, l'affiche d'un bar à vin",p:"Premier exercice sur Illustrator : une affiche en anglais, dessinée en vectoriel à partir du tutoriel, puis réinterprétée.",k:"pages",src:"s1"},
  {t:"Mesita Cocktails, l'entraînement sur Illustrator",p:"Deuxième exercice : un verre à cocktail au coucher du soleil, tout en aplats et en dégradés.",k:"pages",src:"s2"},
  {t:"Skye Events, le logo",p:"Le vrai brief : la falaise de Neist Point dans un cercle, une seule couleur, une version noir et blanc, les choix expliqués en anglais.",k:"pages",src:"s3"},
  {t:"Les essais du logo Skye Events",k:"images",ims:["img/infography/skye-silhouette-logo-01.jpg","img/infography/skye-logo-variante-01.jpg","img/infography/skye-logo-variante-03.jpg","img/infography/skye-logo-variante-05.jpg","img/infography/skye-logo-variante-06.jpg","img/infography/skye-logo-variante-07.jpg","img/infography/skye-logo-cover-02.jpg","img/infography/skye-logo-cover-04.jpg","img/infography/skye-text-logo-01.jpg"]}
 ],
 "cadrage-a69":[{t:"Le dossier",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "newsletter-en-vrai":[{t:"L'analyse",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "enquete-mails":[{t:"Le dossier d'enquête",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "baraka-jeux":[{t:"Les articles",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "fragonard":[
  {t:"La vidéo",p:"La publicité détournée, en vidéo.","k":"video","src":"video/fragonard.mp4","poster":"img/fragonard/affiche-video.jpg"},
  {t:"Le diaporama",p:"L'artiste, le tableau, ses couleurs, puis la publicité.",k:"diapo",src:"s1"}
 ],
 "boz":[
  {t:"La présentation de la marque",k:"diapo",src:"s1"},
  {t:"Le brand book",k:"diapo",src:"s2"}
 ],
 "nuit-des-musees":[
  {t:"Le dossier de presse",p:"Le dossier écrit, en format portrait : méthode, diagnostic et préconisations.",k:"pages",src:"s1"},
  {t:"Les résultats du questionnaire",p:"Les 127 réponses des participants, telles que le formulaire les a résumées.",k:"infographie",src:"img/musees/resultats-questionnaire.webp"},
  {t:"Le diaporama",p:"La présentation orale du groupe.",k:"diapo",src:"s2"}
 ],
 "pere-lucien":[{t:"Le média planning",k:"pages",src:"s1"}],
 "communication-de-crise":[{t:"Le dossier",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "odette-du-puigaudeau":[
  {t:"La vidéo",p:"Le portrait d'Odette du Puigaudeau, publié sur YouTube, avec la miniature faite pour l'occasion.","k":"video","src":"video/odette.mp4","vertical":true,"poster":"img/odette/miniature.jpg"},
  {t:"Le dossier de création",p:"Les recherches, l'angle, le script diapositive par diapositive.",k:"article"},
  {t:"Le document d'origine",k:"pages",src:"s1"}
 ],
 "etrange-festival":[
  {t:"L'affiche",p:"L'affiche de la 31e édition, puis la même affiche dans la rue.",k:"images",ims:["img/etrange/affiche-31e-edition.jpg","img/etrange/affiche-dans-la-rue.jpg"],portrait:true},
  {t:"Le dossier de création",p:"Seize pages : le festival, le moodboard, l'affiche, son analyse, ses mises en situation.",k:"diapo",src:"s1"}
 ],
 "electric-jazzy-album":[{t:"La pochette",p:"La planche de tendance, une version de travail, la pochette finale et le vinyle.",k:"images",ims:["img/m1/jazzy-album-moodboard.jpg","img/m1/jazzy-album-version-4.jpg","img/m1/jazzy-album-pochette.jpg","img/m1/jazzy-album-vinyle.jpg"]}],
 "moodboard":[{t:"Le moodboard",k:"images",ims:["img/m1/moodboard-personnel.jpg"]}],
 "burn-out-numerique":[{t:"L'article",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "newsletter-ia":[]
};
