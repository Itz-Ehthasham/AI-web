import ServiceCard from './ServiceCard';

const ServicesGrid = ({ services }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;