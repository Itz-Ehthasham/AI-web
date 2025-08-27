const FormInput = ({ 
  label, 
  type = 'text', 
  id, 
  name, 
  value, 
  onChange, 
  placeholder, 
  error,
  rows,
  className = '',
  children
}) => {
  const baseInputClass = `w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border ${
    error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 text-sm`;

  return (
    <div className={className}>
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      
      {type === 'textarea' ? (
        <div className="relative">
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            rows={rows || 3}
            placeholder={placeholder}
            className={`${baseInputClass} ${children ? 'pr-32' : ''} resize-none`}
          />
          {children}
        </div>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseInputClass}
        />
      )}
      
      {error && (
        <p className="mt-0.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;