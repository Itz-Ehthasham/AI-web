export default function ValueCard({ value }) {
  return (
    <div className={`group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700 ${value.hoverBorder}`}>
      <div className={`w-20 h-20 bg-gradient-to-br ${value.bgGradient} ${value.darkBgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-3xl">{value.icon}</span>
      </div>
      <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{value.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}