export const projects = [
  {
    id: '1',
    tag: 'AI',
    title: 'AI-Powered Chat Assistant',
    description: 'A sophisticated chatbot that uses natural language processing to provide intelligent responses and assistance.',
    tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    featured: true,
    image: '/api/placeholder/400/300',
    duration: '4 months',
    teamSize: '3 developers',
    challenges: ['NLP model accuracy', 'Real-time response optimization', 'Multi-language support'],
    achievements: ['95% user satisfaction rate', 'Reduced response time by 60%', 'Support for 5 languages'],
    overview: 'This AI-powered chat assistant revolutionizes customer support by providing instant, intelligent responses to user queries. Built with state-of-the-art natural language processing, it understands context, learns from interactions, and continuously improves its responses.',
    architecture: {
      frontend: 'React-based responsive interface with real-time chat capabilities',
      backend: 'FastAPI server with async processing and Redis caching',
      ai: 'TensorFlow models for intent recognition and response generation',
      database: 'PostgreSQL for user data and conversation history'
    }
  },
  {
    id: '2',
    tag: 'AI',
    title: 'Machine Learning Dashboard',
    description: 'Real-time dashboard for monitoring and visualizing machine learning model performance metrics.',
    tech: ['Python', 'Scikit-learn', 'D3.js', 'Flask'],
    featured: true,
    image: '/api/placeholder/400/300',
    duration: '3 months',
    teamSize: '2 developers',
    challenges: ['Real-time data streaming', 'Complex visualization rendering', 'Model performance tracking'],
    achievements: ['Real-time monitoring with <100ms latency', 'Interactive visualizations for 10+ metrics', 'Automated alert system'],
    overview: 'A comprehensive ML monitoring dashboard that provides real-time insights into model performance, data drift, and prediction accuracy. Features interactive visualizations and automated alerts for proactive model management.',
    architecture: {
      frontend: 'D3.js-powered interactive charts and real-time updates',
      backend: 'Flask API with WebSocket support for live data',
      ml: 'Scikit-learn integration for model evaluation metrics',
      monitoring: 'Real-time data pipeline with Apache Kafka'
    }
  },
  {
    id: '3',
    tag: 'Web',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.',
    tech: ['Next.js', 'JavaScript', 'Stripe', 'PostgreSQL'],
    featured: false,
    image: '/api/placeholder/400/300',
    duration: '6 months',
    teamSize: '4 developers',
    challenges: ['Payment security compliance', 'Inventory management', 'Scalable architecture'],
    achievements: ['PCI DSS compliant payment system', '99.9% uptime', 'Handles 10,000+ concurrent users'],
    overview: 'A modern, scalable e-commerce platform built with Next.js that provides seamless shopping experiences. Features include secure payment processing, inventory management, and comprehensive admin controls.',
    architecture: {
      frontend: 'Next.js with SSR for SEO optimization and fast loading',
      backend: 'Node.js API with Express and JWT authentication',
      payment: 'Stripe integration with webhook handling',
      database: 'PostgreSQL with Redis caching for performance'
    }
  },
  {
    id: '4',
    tag: 'Data',
    title: 'Data Visualization Tool',
    description: 'Interactive tool for creating and sharing data visualizations with real-time collaboration.',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    featured: false,
    image: '/api/placeholder/400/300',
    duration: '5 months',
    teamSize: '3 developers',
    challenges: ['Real-time collaboration', 'Complex chart rendering', 'Data format compatibility'],
    achievements: ['Real-time collaborative editing', 'Support for 20+ chart types', 'Export to multiple formats'],
    overview: 'An interactive data visualization platform that enables teams to create, share, and collaborate on charts and dashboards in real-time. Supports multiple data formats and export options.',
    architecture: {
      frontend: 'React with D3.js for advanced charting capabilities',
      backend: 'Node.js with Socket.io for real-time collaboration',
      database: 'MongoDB for flexible data storage',
      realtime: 'WebSocket-based collaboration with conflict resolution'
    }
  },
  {
    id: '5',
    tag: 'Mobile',
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals.',
    tech: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
    featured: false,
    image: '/api/placeholder/400/300',
    duration: '4 months',
    teamSize: '2 developers',
    challenges: ['Cross-platform compatibility', 'Offline functionality', 'Performance optimization'],
    achievements: ['95% code sharing between iOS/Android', 'Offline workout tracking', 'Smooth 60fps animations'],
    overview: 'A comprehensive fitness tracking application that helps users monitor workouts, track nutrition, and achieve fitness goals. Built with React Native for cross-platform compatibility.',
    architecture: {
      mobile: 'React Native with native module integration',
      state: 'Redux for centralized state management',
      backend: 'Firebase for authentication and data storage',
      offline: 'AsyncStorage with sync capabilities'
    }
  },
  {
    id: '6',
    tag: 'AI',
    title: 'AI Image Recognition',
    description: 'Computer vision application that can identify and classify objects in images using deep learning.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Streamlit'],
    featured: true,
    image: '/api/placeholder/400/300',
    duration: '5 months',
    teamSize: '3 developers',
    challenges: ['Model accuracy optimization', 'Real-time processing', 'Multi-object detection'],
    achievements: ['95% accuracy on COCO dataset', 'Real-time processing (<1s)', 'Support for 1000+ object classes'],
    overview: 'Advanced computer vision application that uses deep learning to identify and classify objects in images. Features real-time processing and high accuracy across multiple object categories.',
    architecture: {
      ml: 'PyTorch-based CNN models with transfer learning',
      vision: 'OpenCV for image preprocessing and augmentation',
      interface: 'Streamlit web app for easy model interaction',
      deployment: 'Docker containerization with GPU support'
    }
  },
  {
    id: '7',
    tag: 'Web',
    title: 'Real-time Chat Application',
    description: 'Modern chat app with real-time messaging, file sharing, and user authentication.',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    featured: false,
    image: '/api/placeholder/400/300',
    duration: '3 months',
    teamSize: '2 developers',
    challenges: ['Real-time message delivery', 'File upload handling', 'User presence tracking'],
    achievements: ['Real-time messaging with <50ms latency', 'Support for multiple file types', 'Online/offline status'],
    overview: 'A modern real-time chat application built with Next.js and Socket.io. Features include instant messaging, file sharing, user authentication, and online status tracking.',
    architecture: {
      frontend: 'Next.js with Tailwind CSS for modern UI',
      realtime: 'Socket.io for WebSocket-based communication',
      database: 'MongoDB for message and user data storage',
      storage: 'AWS S3 for file uploads and media storage'
    }
  },
  {
    id: '8',
    tag: 'Data',
    title: 'Business Intelligence Platform',
    description: 'Comprehensive BI platform for data analysis, reporting, and business insights.',
    tech: ['Python', 'Pandas', 'Plotly', 'FastAPI'],
    featured: false,
    image: '/api/placeholder/400/300',
    duration: '7 months',
    teamSize: '4 developers',
    challenges: ['Large dataset processing', 'Real-time analytics', 'User permission management'],
    achievements: ['Processes 1M+ records in <5 seconds', 'Real-time dashboard updates', 'Role-based access control'],
    overview: 'A powerful business intelligence platform that transforms raw data into actionable insights. Features interactive dashboards, automated reporting, and advanced analytics capabilities.',
    architecture: {
      backend: 'FastAPI with async processing for high performance',
      analytics: 'Pandas and NumPy for data manipulation',
      visualization: 'Plotly for interactive charts and dashboards',
      security: 'JWT-based authentication with role permissions'
    }
  }
];
