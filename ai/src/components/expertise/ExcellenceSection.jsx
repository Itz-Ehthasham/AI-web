export default function ExcellenceSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="relative bg-black/30 backdrop-blur-sm p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Delivering Excellence at Every Step
        </h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
          Our collective expertise allows us to deliver solutions that are not only{" "}
          <span className="font-bold text-yellow-300">technically sound</span> but also aligned with the{" "}
          <span className="font-bold text-cyan-300">business goals</span> of our clients. 
          Whether it's building <span className="font-bold text-green-300">AI-powered platforms</span>, 
          developing <span className="font-bold text-orange-300">end-to-end full stack applications</span>, 
          or designing intuitive <span className="font-bold text-pink-300">UI/UX experiences</span>, 
          our team ensures innovation and excellence at every step.
        </p>
      </div>
    </div>
  );
}