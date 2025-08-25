const BorderWrapper = ({ children, className = "" }) => {
  return (
    <div className={`border border-gray-300 dark:border-gray-700 rounded-3xl overflow-hidden shadow-lg p-8 bg-white dark:bg-gray-900 ${className}`}>
      {children}
    </div>
  );
};

export default BorderWrapper;