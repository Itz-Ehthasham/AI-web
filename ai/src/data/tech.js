// First, install react-icons:
// npm install react-icons

import {
  SiNodedotjs,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiExpress,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiOpenai,
  SiScikitlearn,
  SiFramer,
  SiSwift,
  SiKotlin,
} from 'react-icons/si';

// Fallback icon component for any missing icons
const FallbackIcon = ({ color, size = 24 }) => (
  <div 
    style={{ 
      width: size, 
      height: size, 
      backgroundColor: color, 
      borderRadius: '50%' 
    }} 
  />
);

export const techStack = [
  // Backend Technologies
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933',
    category: 'backend'
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB',
    category: 'backend'
  },
  {
    name: 'FastAPI',
    icon: FallbackIcon,
    color: '#009688',
    category: 'backend'
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#000000',
    category: 'backend'
  },
  {
    name: 'Django',
    icon: SiDjango,
    color: '#092E20',
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#4169E1',
    category: 'backend'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
    category: 'backend'
  },
  
  // Frontend Technologies
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    category: 'frontend'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#000000',
    category: 'frontend'
  },
  {
    name: 'Vue.js',
    icon: SiVuedotjs,
    color: '#4FC08D',
    category: 'frontend'
  },
  {
    name: 'Angular',
    icon: SiAngular,
    color: '#DD0031',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    category: 'frontend'
  },
  {
    name: 'Framer Motion',
    icon: SiFramer,
    color: '#0055FF',
    category: 'frontend'
  },
  
  // Data/AI Technologies
  {
    name: 'TensorFlow',
    icon: SiTensorflow,
    color: '#FF6F00',
    category: 'ai'
  },
  {
    name: 'PyTorch',
    icon: SiPytorch,
    color: '#EE4C2C',
    category: 'ai'
  },
  {
    name: 'Scikit-learn',
    icon: SiScikitlearn,
    color: '#F7931E',
    category: 'ai'
  },
  {
    name: 'Pandas',
    icon: SiPandas,
    color: '#150458',
    category: 'ai'
  },
  {
    name: 'NumPy',
    icon: SiNumpy,
    color: '#013243',
    category: 'ai'
  },
  {
    name: 'OpenAI API',
    icon: SiOpenai,
    color: '#412991',
    category: 'ai'
  },
  
  // Cloud/DevOps Technologies
  {
    name: 'AWS',
    icon: SiAmazonaws,
    color: '#FF9900',
    category: 'cloud'
  },
  {
    name: 'Azure',
    icon: SiMicrosoftazure,
    color: '#0078D4',
    category: 'cloud'
  },
  {
    name: 'Google Cloud',
    icon: SiGooglecloud,
    color: '#4285F4',
    category: 'cloud'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
    category: 'cloud'
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    color: '#326CE5',
    category: 'cloud'
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    color: '#000000',
    category: 'cloud'
  },
  
  // Mobile Technologies
  {
    name: 'React Native',
    icon: SiReact,
    color: '#61DAFB',
    category: 'mobile'
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    color: '#02569B',
    category: 'mobile'
  },
  {
    name: 'Swift',
    icon: SiSwift,
    color: '#FA7343',
    category: 'mobile'
  },
  {
    name: 'Kotlin',
    icon: SiKotlin,
    color: '#7F52FF',
    category: 'mobile'
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: '#FFCA28',
    category: 'mobile'
  }
];

// Helper function to get unique technologies by name
export const getUniqueTechStack = () => {
  const seen = new Set();
  return techStack.filter(tech => {
    if (seen.has(tech.name)) {
      return false;
    }
    seen.add(tech.name);
    return true;
  });
};