'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import ProjectHeader from '@/components/ProjectDetail/ProjectHeader';
import ProjectContent from '@/components/ProjectDetail/ProjectContent';
import ProjectLoading from '@/components/ProjectDetail/ProjectLoading';
import ProjectNotFound from '@/components/ProjectDetail/ProjectNotFound';
import Breadcrumb from '@/components/ProjectDetail/Breadcrumb';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === id);
      setProject(foundProject);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <ProjectLoading />;
  }

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            projectTitle={project.title} 
            onBack={() => router.push('/portfolio')}
            onHome={() => router.push('/')}
            onPortfolio={() => router.push('/portfolio')}
          />
          
          <ProjectHeader project={project} />
          <ProjectContent project={project} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
