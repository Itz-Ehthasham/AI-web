export default function MissionStatement() {
  return (
    <div className="mb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
      <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-10 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
            Our Mission
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            To empower businesses with intelligent, secure, and scalable technology solutions 
            that drive growth and innovation. We combine expertise in AI, cybersecurity, data science, 
            and full-stack development to create transformative digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}