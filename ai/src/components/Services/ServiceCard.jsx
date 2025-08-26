import { CheckCircle, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Gradient Border Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative bg-white dark:bg-gray-800 m-[1px] rounded-3xl p-8 hover:p-9 transition-all duration-300">
        {/* Decorative Element */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-3xl`}></div>
        
        {/* Icon and Title */}
        <ServiceHeader icon={Icon} title={service.title} description={service.description} gradient={service.gradient} />
        
        {/* Features */}
        <ServiceFeatures features={service.features} />
        
        {/* Technologies */}
        <ServiceTechnologies technologies={service.technologies} />
        
        {/* Hover Action */}
        <ServiceAction gradient={service.gradient} />
      </div>
    </div>
  );
};

const ServiceHeader = ({ icon: Icon, title, description, gradient }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className={`relative p-3 bg-gradient-to-r ${gradient} rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
      <Icon className="h-8 w-8 text-white" />
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const ServiceFeatures = ({ features }) => (
  <div className="space-y-3 mb-6">
    {features.map((feature, idx) => (
      <div key={idx} className="flex items-center space-x-3 group/item">
        <div className="relative">
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
          <div className="absolute inset-0 bg-green-400 blur-lg opacity-0 group-hover/item:opacity-40 transition-opacity duration-200"></div>
        </div>
        <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
          {feature}
        </span>
      </div>
    ))}
  </div>
);

const ServiceTechnologies = ({ technologies }) => (
  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
      Technologies & Tools
    </p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ServiceAction = ({ gradient }) => (
  <div className="mt-6 flex items-center justify-between">
    <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Explore service
      <ArrowRight className="h-4 w-4 ml-2 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
    <div className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
      Available
    </div>
  </div>
);

export default ServiceCard;
