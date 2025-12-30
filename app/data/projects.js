// Centralized project data - edit this file to add/update projects
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
    slug: "retail-management-system",
    title: "Retail Management System",
    description: "A comprehensive solution for managing retail operations, including inventory, sales, and customer management.",
    fullDescription: `A full-featured retail management system that handles all aspects of retail operations. From inventory tracking to sales processing and customer relationship management, this system provides a complete solution for retail businesses.

Core modules include:
• Point of Sale (POS)
• Inventory Management
• Customer Management
• Sales Reporting
• Employee Management`,
    image: "",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    category: "major",
    liveUrl: "#",
    githubUrl: "#",
    date: "2024",
    role: "Full Stack Developer",
    features: [
      "Point of Sale system",
      "Inventory tracking",
      "Sales analytics",
      "Customer management"
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
    slug: "piano-chord-catalog",
    title: "Piano Chord Catalog",
    description: "An interactive web application for learning and exploring piano chords with visual representations.",
    fullDescription: `A comprehensive piano chord catalog that helps musicians learn and practice chords. Features visual keyboard representations, audio playback, and chord progression suggestions.`,
    image: "",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    category: "small",
    liveUrl: "#",
    githubUrl: "#",
    date: "2024",
    role: "Full Stack Developer",
    challenges: "Creating an intuitive visual representation of piano keys and chords.",
    solution: "Built a custom SVG-based piano component with interactive keys.",
    features: [
      "Interactive piano keyboard",
      "Chord library",
      "Audio playback",
      "Chord progressions"
    ],
    screenshots: []
  },
  {
    slug: "book-collection",
    title: "Book Collection Web App",
    description: "A web application for managing and showcasing a personal book collection.",
    fullDescription: `A personal book collection manager that allows users to catalog their books, track reading progress, and share their collection. Features include book search, reviews, and reading statistics.`,
    image: "",
    tags: ["Laravel", "HTML/CSS", "MySQL"],
    category: "small",
    liveUrl: "#",
    githubUrl: "#",
    date: "2024",
    role: "Full Stack Developer",
    challenges: "Implementing a robust search and filtering system for large book collections.",
    solution: "Used Laravel's Eloquent ORM with efficient database indexing.",
    features: [
      "Book cataloging",
      "Reading tracker",
      "Search & filter",
      "Reading statistics"
    ],
    screenshots: []
  }
];

export const allProjects = [...majorProjects, ...smallProjects];

export function getProjectBySlug(slug) {
  return allProjects.find(project => project.slug === slug);
}
