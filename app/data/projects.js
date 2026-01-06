// Centralized project data 
export const majorProjects = [
  {
    slug: "nu-queuest",
    title: "NU Queuest",
    description: "A queueing system designed to streamline and enhance administrative transactions within NU Laguna.",
    fullDescription: `NU Queuest is a comprehensive queueing management system developed to improve the efficiency of administrative processes at NU Laguna. The system allows students and staff to join virtual queues, receive real-time updates on their position, and get notifications when it's their turn.`,
    image: "/assets/projects/nu-queuest.jpg",
    tags: ["PHP", "CSS", "JavaScript", "HTML"],
    category: "major",
    liveUrl: null,
    githubUrl: null,
    date: "2024",
    role: " Back-End Developer, UI",
    challenges: "Managing real-time queue updates across multiple departments while ensuring system stability during peak hours.",
    solution: "Implemented efficient polling mechanisms and optimized database queries to handle concurrent users smoothly.",
    features: [
      "Real-time queue tracking",
      "Multi-department support",
      "Admin analytics dashboard",
    ],
    screenshots: [
      { src: "/assets/projects/nu-queuest_ss1.png", caption: "Mobile View Login Page" },
      { src: "/assets/projects/nu-queuest_ss2.png", caption: "User Queue Dashboard" },
      { src: "/assets/projects/nu-queuest_ss3.png", caption: "Join Queue" },
      { src: "/assets/projects/nu-queuest_ss4.png", caption: "Select an Office" },
    ]
  },
  {
    slug: "retailkosys",
    title: "RetailKOSys ",
    description: "Retail Knowledge-Oriented System. Modern retail management solution for inventory, sales, and operations.",
    fullDescription: `A modern, all-in-one retail management solution built with Next.js to streamline your store operations. From inventory management to sales tracking, RetailKOSys has got you covered.
  `,
    image: "",
    tags: ["TypeScript", "Next.js", "MongoDB", "HTML/CSS"],
    category: "major",
    liveUrl: null,
    githubUrl: null,
    date: "2025",
    role: " Full-Stack Developer ",
    features: [
      "Inventory Management ",
      "Sales Tracking",
      "User-Friendly Interface",
      "Responsive Design",
    ],
    screenshots: [
      { src: "/assets/projects/RKO_dashboard.png", caption: "Dashboard" },
      { src: "/assets/projects/RKO_menu.png", caption: "Menu Management" },
      { src: "/assets/projects/RKO_POS.png", caption: "Point of Sale" },
      { src: "/assets/projects/RKO_process_payment.png", caption: "Process Payment" },
      { src: "/assets/projects/RKO_inventory.png", caption: "Inventory Management" },
      { src: "/assets/projects/RKO_customer.png", caption: "Customer Management" },
      { src: "/assets/projects/RKO_employee.png", caption: "Employee Management" },
      { src: "/assets/projects/RKO_sales.png", caption: "Sales & Report" },
      { src: "/assets/projects/RKO_settings.png", caption: "Settings" },

    ]
  },
  {
    slug: "kayagov",
    title: "KayaGov",
    description: "A citizen concern management system with dedicated portals for Citizens, Government officials, and Administrators.",
    fullDescription: `KayaGov is a comprehensive Citizen Concern System Web App designed to streamline the process of managing community issues and concerns. The platform connects citizens directly with government officials through an intuitive interface.

The system features three dedicated portals:
• Citizen Portal - Submit and track concerns
• Government Official Portal - Review and resolve issues
• Third-Party Administrator Portal - Oversee system operations

Key capabilities:
• Submit community concerns with details and attachments
• Real-time status tracking of submitted issues
• Efficient concern resolution workflow
• Multi-role access control and management`,
    image: "/assets/projects/KayaGovIcon.png",
    tags: ["Laravel", "PHP", "JavaScript", "MySQL", "HTML/CSS"],
    category: "major",
    liveUrl: null,
    githubUrl: null,
    date: "2025",
    role: "Backend Developer",
    challenges: "Implementing real-time updates across multiple clients while maintaining data consistency.",
    solution: "Leveraged Firebase for real-time database sync and Socket.io for instant notifications.",
    features: [
      "Citizen concern submission",
      "Issue tracking & status updates",
      "Multi-portal system",
      "Resolution workflow"
    ],
    screenshots: []
  },
  {
    slug: "pipfolio",
    title: "PipFolio - Trade Journal Web App",
    description: "A web app to track and manage multi-level trading challenges with advanced analytics and import/export capabilities.",
    fullDescription: `Trading Challenge Tracker is a specialized web application designed for traders to manage and monitor multi-level trading challenges. The platform enables users to create and organize challenge plans, log trades, visualize performance statistics, and track equity curves. CSV import/export functionality allows seamless data migration and analysis.`,
    image: "",
    tags: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
    category: "major",
    liveUrl: null,
    githubUrl: null,
    date: "2024",
    role: "Lead Full Stack Developer",
    features: [
      "Challenge management",
      "Multi-level challenge plans",
      "Trade logging",
      "Performance statistics",
      "Equity curve visualization",
      "CSV import/export"
    ],
    screenshots: []
  },
  {
    slug: "facial-image-verification",
    title: "CNN-ViT-MLP Fusion for Face Verification",
    description: "A decision-support system using deep learning fusion to classify faces as Real, AI-Generated, Deepfake, or Tampered.",
    fullDescription: `A comprehensive face verification system that combines multiple deep learning architectures to detect and classify facial image authenticity. This research project addresses the growing concerns around AI-generated imagery and deepfake manipulation.

The model employs a fusion approach combining:
• CNN (Convolutional Neural Network) - For spatial feature extraction
• ViT (Vision Transformer) - For capturing global image context
• MLP (Multi-Layer Perceptron) - For final classification decision

Classification Categories:
• Real - Authentic, unaltered facial images
• AI-Generated - Fully Synthetic Faces created by generative AI models
• Deepfake - Face-swapped or manipulated images
• Tampered - Manually edited or Photoshopped facial images

This decision-support approach provides reliable verification results to help identify synthetic and manipulated media.`,
    image: "",
    tags: ["Python", "TensorFlow", "CNN", "Vision Transformer", "Deep Learning"],
    category: "major",
    liveUrl: null,
    githubUrl: null,
    date: "2024",
    role: "Lead ML Engineer",
    features: [
      "CNN-ViT-MLP fusion architecture",
      "4-class face classification",
      "Deepfake detection",
      "Decision-support system"
    ],
    screenshots: []
  }
];

export const smallProjects = [
  {
    slug: "piano-chord-library",
    title: "Piano Chord Library",
    description: "An interactive web application for learning and exploring piano chords with visual representations.",
    fullDescription: `A comprehensive piano chord library that helps musicians learn and practice chords. Features visual keyboard representations, audio playback, and chord progression suggestions.`,
    image: "",
    tags: ["Next.js", "Node.js", "HTML/CSS", "JavaScript"],
    category: "small",
    liveUrl: "#",
    githubUrl: "#",
    date: "2024",
    role: "Full Stack Developer",
    challenges: "Creating an intuitive visual representation of piano keys and chords.",
    solution: "Built a custom SVG-based piano component with interactive keys.",
    features: [
      "Interactive piano keyboard - upcoming",
      "Chord library",
      "Audio playback - upcoming",
      "Chord progressions"
    ],
    screenshots: []
  },
];

export const allProjects = [...majorProjects, ...smallProjects];

export function getProjectBySlug(slug) {
  return allProjects.find(project => project.slug === slug);
}
