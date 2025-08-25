const TestimonialNavigation = ({ 
  testimonials, 
  currentIndex, 
  onPrevious, 
  onNext 
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Author Avatars */}
        <div className="flex -space-x-3">
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.id}
              src={testimonial.avatar}
              alt={testimonial.author}
              className={`w-12 h-12 rounded-full border-2 border-gray-800 transition-all ${
                index === currentIndex 
                  ? 'z-10 ring-2 ring-yellow-400 scale-110' 
                  : 'hover:z-10 hover:scale-105'
              }`}
            />
          ))}
        </div>
        
        {/* Next Button */}
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialNavigation;