import { useState, useEffect, useRef } from 'react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

export default function StatsSection() {
  const statsRef = useRef(null);
  const counters = useCounterAnimation(statsRef, {
    experience: 10,
    projects: 100,
    clients: 50,
    support: 24
  });

  return (
    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      <StatCard 
        value={counters.experience === 10 ? '5-10' : counters.experience}
        suffix={counters.experience > 0 ? '+' : ''}
        label="Years Experience"
        gradient="from-blue-500 to-blue-600"
      />
      <StatCard 
        value={counters.projects}
        suffix={counters.projects > 0 ? '+' : ''}
        label="Projects Delivered"
        gradient="from-purple-500 to-purple-600"
      />
      <StatCard 
        value={counters.clients}
        suffix={counters.clients > 0 ? '+' : ''}
        label="Happy Clients"
        gradient="from-pink-500 to-pink-600"
      />
      <StatCard 
        value={counters.support === 24 ? '24/7' : counters.support}
        label="Support"
        gradient="from-indigo-500 to-indigo-600"
      />
    </div>
  );
}

function StatCard({ value, suffix = '', label, gradient }) {
  return (
    <div className={`text-center p-6 bg-gradient-to-br ${gradient} rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}>
      <div className="text-4xl font-bold mb-2">
        <span className="inline-block min-w-[100px]">
          {value}{suffix}
        </span>
      </div>
      <div className="text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
}