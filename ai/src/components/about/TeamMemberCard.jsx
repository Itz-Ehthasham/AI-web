export default function TeamMemberCard({ member, index }) {
  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Member Header with Custom Gradient */}
      <div className={`relative bg-gradient-to-r ${member.gradient} p-6 text-white`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="text-5xl mb-3 animate-bounce-slow">{member.icon}</div>
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-white/90 text-sm font-medium">{member.role}</p>
          <p className="text-white/75 text-xs mt-1 flex items-center">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {member.experience} Experience
          </p>
        </div>
      </div>

      {/* Member Details */}
      <div className="relative p-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
          {member.description}
        </p>

        {/* Expertise Tags with Hover Effect */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Key Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:shadow-md transform hover:scale-105 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}