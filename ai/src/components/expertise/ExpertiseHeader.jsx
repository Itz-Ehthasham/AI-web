export default function ExpertiseHeader() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Our Expertise
        </span>
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          We are a team of highly skilled{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developers
          </span>{" "}
          with{" "}
          <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            5–10+ years of professional experience
          </span>{" "}
          in building robust, scalable, and future-ready digital solutions.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Our group of engineers brings together deep expertise across both{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">frontend</span> and{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">backend development</span>, 
          ensuring end-to-end product delivery with precision and quality.
        </p>
      </div>
    </div>
  );
}