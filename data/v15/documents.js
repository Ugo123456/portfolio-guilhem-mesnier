/* La page de chaque travail, bloc par bloc, dans l'ordre logique du travail.
   k : diapo (diaporama, s'ouvre dans la fenêtre flottante), pages (document en portrait), images, article (texte web),
       youtube, video, carrousel (gardé tel quel pour Basilic), infographie (image très haute).
   src : le document de départ dans hd.js (s1, s2…), sel : seulement certaines pages. */

const LOGICIELS_NOMS={
 canva:"Canva",indesign:"Adobe InDesign",illustrator:"Adobe Illustrator",photoshop:"Adobe Photoshop",
 "adobe-express":"Adobe Express",procreate:"Procreate",gemini:"Gemini",wordpress:"WordPress",spotify:"Spotify",deezer:"Deezer","youtube-music":"YouTube Music",
 "pixelmator-pro":"Pixelmator Pro",keynote:"Keynote",pages:"Pages","google-docs":"Google Docs",word:"Microsoft Word",
 youtube:"YouTube","google-analytics":"Google Analytics 4","davinci-resolve":"DaVinci Resolve",figma:"Figma",capcut:"CapCut"
};

/* Les logiciels lus dans les fichiers eux-mêmes (le logiciel qui a fabriqué chaque PDF ou chaque vidéo). */
const LOGICIELS={
 "livret-accueil":["keynote","pages"],
 "stage-m1":["pages","canva","pixelmator-pro","gemini","google-docs"],
 "memoire-metamorphoses":["word"],
 "kithara":["canva"],
 "zefil":["canva","illustrator","davinci-resolve","figma"],
 "a-ton-rythme":["photoshop","illustrator","indesign","adobe-express","procreate","gemini","canva","wordpress","spotify","deezer","youtube-music"],
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
 "infography-project":["illustrator"],
 "skye-events":["illustrator","pixelmator-pro"],
 "cadrage-a69":["pages"],
 "newsletter-en-vrai":["pages"],
 "enquete-mails":["google-docs"],
 "baraka-jeux":["pages","google-docs","canva"],
 "fragonard":["canva","youtube"],
 "boz":["canva","indesign"],
 "nuit-des-musees":["canva"],
 "pere-lucien":["canva"],
 "communication-de-crise":["google-docs"],
 "odette-du-puigaudeau":["google-docs","youtube"],
 "etrange-festival":["photoshop","keynote"],
 "electric-jazzy-album":["photoshop"],
 "moodboard":["photoshop"],
 "organisations-communicantes":["canva"],
 "burn-out-numerique":["word"]
};

/* Le type de travail : une étiquette de plus, à côté du semestre, de la matière et des thèmes.
   « Recherche » est réservé au mémoire. */
const TYPES={
 "livret-accueil":["Mission de stage","Livret","Diaporama"],
 "stage-m1":["Mission de stage","Guide","Affiches","Film"],
 "memoire-metamorphoses":["Recherche","Mémoire","Soutenance"],
 "kithara":["Création de marque","Diaporama","Vidéo"],
 "zefil":["Création de marque","Brand book","Vidéo","Podcast","Newsletter"],
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
 "infography-project":["Création graphique","Affiches"],
 "skye-events":["Création graphique","Logo","Identité de marque"],
 "cadrage-a69":["Analyse des médias","Dossier écrit"],
 "newsletter-en-vrai":["Audit","Newsletter"],
 "enquete-mails":["Enquête","Dossier écrit"],
 "baraka-jeux":["Articles","Rédaction","Podcast"],
 "fragonard":["Création graphique","Publicité","Vidéo"],
 "boz":["Création de marque","Brand book"],
 "nuit-des-musees":["Enquête","Dossier de presse","Diaporama"],
 "pere-lucien":["Média planning","Réseaux sociaux"],
 "communication-de-crise":["Simulation","Dossier écrit"],
 "odette-du-puigaudeau":["Vidéo","Vulgarisation"],
 "etrange-festival":["Affiche","Dossier de création"],
 "electric-jazzy-album":["Pochette d'album","Création graphique"],
 "moodboard":["Moodboard","Création graphique"],
 "organisations-communicantes":["Exposé","Analyse"],
 "burn-out-numerique":["Article","Analyse"]
};

/* Ce qui remplace les données de départ quand elles étaient fausses ou incomplètes. */
const CORRECTIONS={
 "zefil":{groupe:2},
 "infography-project":{
  consigne:"Suivre les tutoriels Illustrator 1, 2, 3, 5 et 6, puis rendre sa propre version de deux affiches, Mesita Cocktails et The Winery, tous les textes en anglais.",
  fait:"Deux affiches dessinées en vectoriel sur Illustrator : The Winery, l'affiche d'ouverture d'un bar à vin et à tapas, et Mesita Cocktails, un verre à cocktail au coucher du soleil.",
  dev:"Deux exercices de technique : les tracés, les dégradés, la hiérarchie de l'information (le nom, la date, le lieu) et une palette réduite qui reste lisible de loin."
 },
 "skye-events":{
  consigne:"Un vrai brief : Skye Events, qui organise des événements sportifs sur l'île de Skye, en Écosse, veut un nouveau logo, plus simple, lisible sur les réseaux sociaux par un public international, en couleur et en noir et blanc, avec les choix expliqués en anglais.",
  fait:"Le logo de Skye Events : la falaise de Neist Point dans un cercle, en vert émeraude et en noir et blanc, avec la typographie Caveat Brush posée en arc, puis une série d'essais et de déclinaisons.",
  dev:"Un vrai travail de marque : un cercle qui tient dans une photo de profil, une seule couleur qui marche aussi en noir et blanc, et un paysage que tout le monde reconnaît."
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
 "infography-project":{police:"Alfa Slab One",motif:"points",lueur:"#f6c177"},
 "skye-events":{police:"Caveat Brush",motif:"vagues",lueur:"#7fd6d0"},
 "odette-du-puigaudeau":{police:"Playfair Display",motif:"dunes",lueur:"#f6e3c0"},
 "nuit-des-musees":{police:"Playfair Display",motif:"etoiles",lueur:"#5aa9ff"},
 "audit-monoprix":{police:"Bebas Neue",motif:"points",lueur:"#ff6b81"},
 "preconisations-monoprix":{police:"Bebas Neue",motif:"points",lueur:"#ff6b81"},
 "livret-accueil":{police:"Sofia Pro",motif:"points",lueur:"#f2c14e"},
 "stage-m1":{police:"Sofia Pro",motif:"points",lueur:"#4fd8bd"},
 "data-ga4":{police:"Sora",motif:"grille",lueur:"#f9ab00"}
};

const DOCS={
 "stage-m1":[
  {t:"Le guide pour les professionnels",p:"Le logement, les services, la vie sociale et l'admission : tout ce qu'un professionnel médico-social doit savoir pour orienter une personne âgée vers une résidence autonomie.",k:"pages",src:"s1"},
  {t:"Les affiches de bienvenue",p:"Deux affiches A3, une par résidence, posées sur les portes pour accueillir les nouveaux résidents.",k:"pages",src:"s2"},
  {t:"Le film en vue subjective",p:"La visite de la résidence Marie et Marius Viple, comme si on y entrait soi-même.",k:"video",src:"video/pov-viple.mp4",vertical:true,poster:"img/travaux/stage-m1/poster-pov.webp",noyt:true}
 ],
 "livret-accueil":[
  {t:"Le bilan présenté le 10 juin",p:"Le diaporama de la réunion de bilan : la démarche, l'enquête auprès des agents, les ateliers, puis le livret.",k:"diapo",src:"s1"},
  {t:"Le livret d'accueil, format A4",p:"La version finale du 28 juin, pensée pour l'écran et l'impression.",k:"pages",src:"s2"},
  {t:"Le livret d'accueil, format A5",p:"La même version, mise en page pour un livret de poche remis le premier jour.",k:"pages",src:"s3"}
 ],
 "memoire-metamorphoses":[
  {t:"La soutenance du 2 septembre 2026",p:"Le diaporama de la soutenance, en mode sombre.",k:"diapo",src:"s2"}
 ],
 "kithara":[
  {t:"La présentation orale",p:"La marque, ses cibles, sa ligne éditoriale, son site et son budget, en dix-neuf diapositives.",k:"diapo",src:"s1"},
  {t:"Les coffrets",p:"Les maquettes des trois box : Lisbonne, la Thaïlande, l'Amérique latine.",k:"diapo",src:"s2"},
  {t:"L'arborescence du site",k:"diapo",src:"s3"},
  {t:"Le document du calendrier",k:"diapo",src:"s4"}
 ],
 "zefil":[
  {t:"Les vidéos",p:"La publicité de quarante-deux secondes pour les réseaux sociaux, montée sur DaVinci Resolve, à côté des images du tournage.",k:"verticales",items:[{v:"video/pub-zefil.mp4",img:"img/zefil/pub15.jpg",t:"La publicité"},{img:"img/zefil/pub3.jpg",t:"Le bracelet"},{img:"img/zefil/pub9.jpg",t:"Le fil"}]},
  {t:"Le podcast",p:"« De A à Zefil », le fil audio de la marque : sa bande-annonce, montée sur DaVinci Resolve.",k:"verticales",items:[{img:"img/zefil/pub22.jpg",t:"La bande-annonce du podcast"},{img:"img/zefil/podcast-lecteur.webp",t:"De A à Zefil"},{img:"img/zefil/podcast-ecran.webp",t:"L'annonce de la sortie"}]},
  {t:"Le brand book",p:"Le fil graphique de la marque : logo, couleurs, polices, motif.",k:"pages",src:"s2",pile:true},
  {t:"La newsletter de bienvenue",p:"L'histoire de Zefil de A à Z, maquettée sur Figma. Pour le site, les photos de la créatrice sont remplacées par des photos de bijoux de la même campagne.",k:"tranches",src:"img/zefil/newsletter-histoire.webp"},
  {t:"La newsletter des coulisses",p:"La fabrication d'un bracelet, du fil à la main, maquettée sur Figma.",k:"tranches",src:"img/zefil/newsletter-coulisses.webp"},
  {t:"La présentation orale",p:"Les six fils de la marque, de son histoire à sa communauté.",k:"diapo",src:"s1"}
 ],
 "a-ton-rythme":[
  {t:"Le brainstorming",p:"Les cibles, les objectifs, les idées et le moodboard, tirés du carnet de bord.",k:"diapo",src:"s3",sel:["p15","p16","p17","p18"]},
  {t:"La charte graphique",p:"Le logo, les couleurs, les polices et les personnages de la campagne.",k:"diapo",src:"s2"},
  {t:"Les affiches",p:"Cinq personnages : la fatigue, l'anxiété, l'isolement, la tristesse, et la douceur pour répondre.",k:"images",ims:["img/ssu/Affiche-Fatigue-V3.jpg","img/ssu/Affiche-Anxiete-V3.jpg","img/ssu/Affiche-Isolement-V3.jpg","img/ssu/Affiche-Tristesse-V3.jpg","img/ssu/Affiche-Douceur.jpg"],portrait:true},
  {t:"La campagne",p:"Les pochettes des playlists et les supports qui prolongent les affiches.",k:"images",ims:["img/ssu/1-cover-playlist-ssu.jpg","img/ssu/2-cover-playlist-ssu.jpg","img/ssu/3-cover-playlist-ssu.jpg"]},
  {t:"Le diaporama final",p:"La présentation de la campagne au Service de Santé Universitaire : la rencontre, le cœur du projet, l'immersion dans les supports, et la suite.",k:"diapo",src:"s4"},
  {t:"Le diaporama de travail",p:"Le brainstorming du groupe : les pistes, les essais et les choix de la campagne, avant la version finale.",k:"diapo",src:"s1"},
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
 "petits-debrouillards":[{t:"Les affiches de l'arpentage",p:"Deux affiches pour les ateliers de lecture collective de l'association, en novembre et en décembre 2024.",k:"images",portrait:true,ims:["img/travaux/petits-debrouillards/affiche-arpentage-novembre-2024.webp","img/travaux/petits-debrouillards/affiche-arpentage-decembre-2024.webp"]},{t:"Le dossier",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "infography-project":[
  {t:"La fiche de consigne",p:"Les tutoriels Illustrator et les deux affiches à refaire.",k:"images",ims:["img/infography/consigne-tutoriels.webp"],portrait:true},
  {t:"The Winery, l'affiche d'un bar à vin",p:"Premier exercice sur Illustrator : une affiche en anglais, dessinée en vectoriel à partir du tutoriel, puis réinterprétée.",k:"pages",src:"s1"},
  {t:"Mesita Cocktails, l'entraînement sur Illustrator",p:"Deuxième exercice : un verre à cocktail au coucher du soleil, tout en aplats et en dégradés.",k:"pages",src:"s2"}
 ],
 "skye-events":[
  {t:"La fiche de consigne",p:"Le brief de Skye Events : un logo plus simple, lisible sur les réseaux sociaux.",k:"images",ims:["img/infography/consigne-skye.webp"],portrait:true},
  {t:"Skye Events, le logo",p:"Le vrai brief : la falaise de Neist Point dans un cercle, une seule couleur, une version noir et blanc, les choix expliqués en anglais.",k:"images",ims:["img/hd/infography-project/s3-p01.webp"],portrait:true},
  {t:"Les essais du logo Skye Events",k:"images",ims:["img/infography/skye-silhouette-logo-01.jpg","img/infography/skye-logo-variante-01.jpg","img/infography/skye-logo-variante-03.jpg","img/infography/skye-logo-variante-05.jpg","img/infography/skye-logo-variante-06.jpg","img/infography/skye-logo-variante-07.jpg","img/infography/skye-logo-cover-02.jpg","img/infography/skye-logo-cover-04.jpg","img/infography/skye-text-logo-01.jpg"]}
 ],
 "cadrage-a69":[{t:"Le dossier",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "newsletter-en-vrai":[{t:"L'analyse",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "enquete-mails":[{t:"Le dossier d'enquête",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "baraka-jeux":[{t:"Les articles",k:"article"},{t:"Le dossier du podcast Baraka+",p:"La ligne éditoriale du podcast : présentation, nom, musiques, durée, fréquence, thèmes et plateformes. Travail de groupe (5 étudiants).",k:"pages",src:"s2"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "fragonard":[
  {t:"La vidéo",p:"La publicité détournée, en vidéo.","k":"video","yt":"TjgDN8iSae0","src":"video/fragonard.mp4","poster":"img/fragonard/affiche-video.jpg"},
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
 "organisations-communicantes":[{t:"L'exposé",p:"Les cinq parties de l'exposé, de la communication comme fondement de l'organisation aux enjeux d'aujourd'hui.",k:"diapo",src:"s1"}],
 "burn-out-numerique":[{t:"L'article",k:"article"},{t:"Le document d'origine",k:"pages",src:"s1"}],
 "newsletter-ia":[{t:"La newsletter",p:"Le courriel complet, de l'accroche au bouton d'inscription. Les noms des intervenants sont masqués.",k:"tranches",src:"img/travaux/newsletter-ia/newsletter-conference-ia.webp"}]
};
