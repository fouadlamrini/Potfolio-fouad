/**
 * Galerie: `img1.png` … `imgN.png` (le cover reste `coverImage` → `main/bg.png`).
 * Optionnel: `startIndex` si une série ne commence pas à 1.
 */
function buildGallery(basePath, imageCount, startIndex = 1) {
  return Array.from(
    { length: imageCount },
    (_, i) => `${basePath}/img${startIndex + i}.png`,
  );
}

export const portfolioData = {
  name: "FOUAD LAMRINI",
  firstName: "FOUAD",
  lastName: "LAMRINI",
  roles: {
    en: ["Full Stack Developer", "DevOps Enthusiast", "Problem Solver"],
    fr: [
      "Développeur Full Stack",
      "Passionné DevOps",
      "Résolveur de problèmes",
    ],
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "SQL",
    "MySQL",
    "PHP",
    "Laravel",
    "Node.js",
    "Express.js",
    "EJS",
    "MongoDB",
    "React",
    "TypeScript",
    "Nest.js",
    "Next.js",
    "Docker",
  ],
  experience: [
    {
      year: "05/2025 – Present",
      title: {
        en: "Full Stack Developer Intern",
        fr: "Stagiaire Développeur Full Stack",
      },
      company: "Logiciel Lab",
      location: {
        en: "Tangier, Morocco",
        fr: "Tanger, Maroc",
      },
    },
  ],
  education: [
    {
      year: "2024 – 2026",
      degree: {
        en: "Full Stack Developer",
        fr: "Développeur Full Stack",
      },
      school: {
        en: "YouCode",
        fr: "YouCode",
      },
      location: {
        en: "Nador, Morocco",
        fr: "Nador, Maroc",
      },
    },
    {
      year: "2019 – 2023",
      degree: {
        en: "Bachelor in Physical Sciences",
        fr: "Licence en sciences physiques",
      },
      school: {
        en: "Multidisciplinary Faculty of Nador, Mohammed First University",
        fr: "Faculté Pluridisciplinaire de Nador, Université Mohammed Premier",
      },
      location: {
        en: "Selouane, Nador",
        fr: "Selouan, Nador",
      },
    },
    {
      year: "2018 – 2019",
      degree: {
        en: "Baccalaureate in Physical Sciences",
        fr: "Baccalauréat en sciences physiques",
      },
      school: "Lycée Moqadem Bouziane",
      location: {
        en: "Kariat Arekman, Nador",
        fr: "Kariat Arekman, Nador",
      },
    },
  ],
  cvs: [
    {
      label: { en: "Full Stackh", fr: "Full Stack" },
      file: "/cvs/CV-Fouad-Lamrini-Full-Stack-Developer.pdf",
    },
  ],
projects: {
    mern: [
      {
        id: 1,
        folderName: "Quizz",
        title: { en: "Quizz Nova", fr: "Quizz Nova" },
        tech: ["HTML", "CSS", "JavaScript", "git", "jira"],
        desc: {
          en: "Interactive quiz app with themed questions, timer, result storage, and statistics visualization",
          fr: "Application de quiz interactive avec gestion des questions par thème, minuteur, stockage des résultats et visualisation des statistiques.",
        },
        
        coverImage: "Projets/Mern/Quizz/main/bg.png",
        /* ancien img1 (doublon) supprimé + renommage img2→img1 … img7→img6 → 6 fichiers */
        gallery: buildGallery("Projets/Mern/Quizz", 6),
        features: [
          { en: "Multiple choice questions", fr: "Questions à choix multiples" },
          { en: "Category-based quizzes", fr: "Quiz par catégorie" },
          { en: "Global and per-question timer", fr: "Minuteur global et par question" },
          { en: "Score tracking and localStorage", fr: "Suivi du score et stockage localStorage" },
          { en: "Statistics visualization (Chart.js)", fr: "Visualisation des statistiques (Chart.js)" },
          { en: "Top 3 leaderboard", fr: "Classement des 3 meilleurs joueurs" },
        ],
        github: "https://github.com/fouadlamrini/JSQuiz-Advanced",
      },
      {
        id: 2,
        folderName: "YouHelp",
        title: { en: "YouHelp", fr: "YouHelp" },
        tech: [
          "React",
          "Node.js",
          "MongoDB",
          "Socket.io",
          "WebRTC",
          "Passport.js",
        ],
        desc: {
          en: "YouHelp is a full-stack community platform for YouCode: technical Q&A, knowledge sharing, workshops, and real-time collaboration. Authentication uses Passport.js with local credentials plus GitHub and Google OAuth. Four roles structure access—Super Admin, Admin, Trainer (formateur), and Student—with a Super Admin console for users, campuses, categories, classes, and levels. Students post problems, comment and reply in threads, react, favourite, and share; they can publish knowledge articles and request workshops. Super Admins can mark posts as resolved and attach an official solution. Trainers manage workshops. Inactive accounts are restricted to read-only mode. The app supports invitations, in-app notifications, text and voice messaging, voice calls, video calls with screen sharing (WebRTC), message deletion for yourself or for everyone, and live online/offline presence via Socket.io. The backend is covered by unit tests and integration tests.",
          fr: "YouHelp est une plateforme communautaire full stack pour YouCode : entraide technique, partage de connaissances, ateliers et collaboration en temps réel. L’authentification repose sur Passport.js (compte local, OAuth GitHub et Google). Quatre rôles structurent les droits — Super Admin, Admin, Formateur et Étudiant — avec une console Super Admin pour les utilisateurs, campus, catégories, classes et niveaux. Les étudiants publient des problèmes, commentent et répondent en fil, réagissent, mettent en favori et partagent ; ils peuvent publier des contenus « knowledge » et demander des workshops. Le Super Admin peut marquer un post comme résolu et y associer une solution. Les formateurs gèrent les workshops. Les comptes inactifs passent en mode lecture seule. L’application gère les invitations, les notifications, messages texte et vocaux, appels vocaux, appels vidéo avec partage d’écran (WebRTC), suppression d’un message pour soi ou pour tout le monde, et présence en ligne / hors ligne en temps réel via Socket.io. Le backend est couvert par des tests unitaires et des tests d’intégration.",
        },
        coverImage: "Projets/Mern/YouHelp/main/bg.png",
        /* ancien img1 supprimé + renommage img2→img1 … img40→img39 → 39 fichiers */
        gallery: buildGallery("Projets/Mern/YouHelp", 39),
        features: [
          { en: "Passport.js: local, GitHub & Google OAuth", fr: "Passport.js : authentification locale, GitHub et Google OAuth" },
          { en: "Four roles: Super Admin, Admin, Trainer, Student", fr: "Quatre rôles : Super Admin, Admin, Formateur, Étudiant" },
          { en: "Super Admin: users, campus, categories, class & level", fr: "Super Admin : gestion utilisateurs, campus, catégories, classes et niveaux" },
          { en: "Problem posts: comments, replies, reactions, favourites & share", fr: "Posts problème : commentaires, réponses, réactions, favoris et partage" },
          { en: "Knowledge publishing", fr: "Publication de contenus knowledge" },
          { en: "Students: workshop requests", fr: "Étudiants : demandes d’ateliers (workshops)" },
          { en: "Super Admin: mark resolved + official solution", fr: "Super Admin : marquer résolu et ajouter la solution officielle" },
          { en: "Trainers: workshop management", fr: "Formateurs : gestion des workshops" },
          { en: "Read-only mode for inactive users", fr: "Mode lecture seule pour les comptes non actifs" },
          { en: "Invitations & notifications", fr: "Invitations et notifications" },
          { en: "Text & voice messages (real-time)", fr: "Messages texte et vocaux en temps réel" },
          { en: "Voice calls, video + screen sharing (WebRTC)", fr: "Appels vocaux, vidéo et partage d’écran (WebRTC)" },
          { en: "Delete message: for me or for everyone", fr: "Suppression du message : pour moi ou pour tout le monde" },
          { en: "Online / offline presence (Socket.io)", fr: "Statut en ligne / hors ligne (Socket.io)" },
          { en: "Backend: unit & integration tests", fr: "Backend : tests unitaires et d’intégration" },
        ],
        github: "https://github.com/fouadlamrini/YouHelp",
      }
    ],
    laravel: [
      {
        id: 3,
        folderName: "Nexus",
        title: { en: "Nexus E-commerce Platform", fr: "Nexus E-commerce Platform" },
        tech: [
          "PHP 8.4",
          "Laravel 13",
          "MySQL",
          "Blade",
          "TailwindCSS 4",
          "Stripe",
          "Chart.js",
          "JavaScript",
          "AJAX (fetch)",
        ],
        desc: {
          en: "Full e-commerce platform with separate admin and client spaces, including catalog browsing, cart, checkout, promo codes, Stripe payment flow, wishlist, and analytics dashboard.",
          fr: "Plateforme e-commerce complete avec deux espaces (admin et client) : catalogue, panier, checkout, codes promo, paiement Stripe, wishlist et tableau de bord analytique.",
        },
        coverImage: "/Projets/Php-Laravel/Nexus/main/bg.png",
        gallery: buildGallery("/Projets/Php-Laravel/Nexus", 23),
        features: [
          { en: "Auth with role-based access (admin/client)", fr: "Authentification avec controle d'acces par roles (admin/client)" },
          { en: "Admin dashboard with paid/unpaid orders and stock analytics", fr: "Dashboard admin avec statistiques commandes payees/non payees et stock" },
          { en: "Dashboard charts powered by Chart.js", fr: "Graphiques dashboard avec Chart.js" },
          { en: "CRUD for products, categories, subcategories and shipping", fr: "CRUD produits, categories, sous-categories et shipping" },
          { en: "Promotion and coupon management", fr: "Gestion des promotions et coupons" },
          { en: "Client catalog browsing with product gallery and quantity selector", fr: "Navigation catalogue client avec galerie produit et selecteur de quantite" },
          { en: "Cart updates via AJAX fetch (increment, decrement, remove)", fr: "Mise a jour du panier via AJAX fetch (increment, decrement, suppression)" },
          { en: "Checkout with address selection and promo code application", fr: "Checkout avec selection d'adresse et application de code promo" },
          { en: "Stripe confirmation flow with dynamic payment AJAX handling", fr: "Flow Stripe avec confirmation et traitement AJAX dynamique du paiement" },
          { en: "Order history and progress tracking", fr: "Historique des commandes et suivi de progression" },
          { en: "Custom 403 and 404 pages", fr: "Pages personnalisees 403 et 404" },
        ],
        github: "https://github.com/fouadlamrini/ecomerce-product",
      },
      {
        id: 4,
        folderName: "Youdemy",
        title: { en: "Youdemy", fr: "Youdemy" },
        tech: [
          "PHP 8",
          "MySQL",
          "PDO",
          "HTML5",
          "Tailwind CSS",
          "JavaScript",
          "Laragon",
        ],
        desc: {
          en: "Youdemy is a role-based e-learning platform inspired by Udemy, with separate admin, teacher, and student spaces for course management, enrollment workflows, and centralized moderation.",
          fr: "Youdemy est une plateforme e-learning inspiree d'Udemy, basee sur les roles (admin, teacher, student), avec gestion des cours, workflow d'inscription et moderation centralisee.",
        },
        coverImage: "/Projets/Php-Laravel/Youdemy/main/bg.png",
        gallery: buildGallery("/Projets/Php-Laravel/Youdemy", 18),
        features: [
          { en: "Register and login with role-based access", fr: "Inscription et connexion avec controle d'acces par role" },
          { en: "Teacher approval flow (pending, approved, blocked)", fr: "Workflow enseignant (pending, approuve, bloque)" },
          { en: "Admin dashboard with global platform statistics", fr: "Dashboard admin avec statistiques globales" },
          { en: "Admin CRUD for categories and tags", fr: "CRUD admin pour categories et tags" },
          { en: "Teacher dashboard with personal course metrics", fr: "Dashboard professeur avec metriques personnelles" },
          { en: "Create, edit, and delete courses with category and tags", fr: "Creation, modification et suppression des cours avec categorie et tags" },
          { en: "Course content upload (video or PDF document)", fr: "Upload du contenu de cours (video ou PDF)" },
          { en: "Enrollment management by teachers (approve/reject)", fr: "Gestion des inscriptions par les professeurs (approuver/rejeter)" },
          { en: "Public course browsing with search and category filters", fr: "Navigation publique des cours avec recherche et filtres par categorie" },
          { en: "Course details and student enrollment flow", fr: "Details des cours et workflow d'inscription etudiant" },
          { en: "My Learning page for enrolled courses", fr: "Page My Learning pour les cours suivis" },
          { en: "Security with PDO prepared statements, password hashing, and RBAC", fr: "Securite avec PDO prepared statements, password hashing et RBAC" },
        ],
        github: "https://github.com/fouadlamrini/Copie-de-Plateforme-de-Cours-en-Ligne-Youdemy",
      },
    ],
  },
  contact: {
    email: "fouad11.lamrini@gmail.com",
    phone: "+212 6 22 46 19 37",
    whatsapp: "+212 6 22 46 19 37",
    linkedin: "https://www.linkedin.com/in/fouad-lamrini-95226a326/",
    github: "https://github.com/fouadlamrini",
  },
};
