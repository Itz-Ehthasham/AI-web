const FileUploadButton = ({ onChange, fileName }) => {
  return (
    <label className="absolute bottom-2 right-2">
      <input
        type="file"
        name="file"
        onChange={onChange}
        className="hidden"
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
      />
      <div className="flex items-center space-x-2 px-4 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
        <svg 
          className="w-4 h-4 text-gray-600 dark:text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>
        <span className="text-sm text-gray-700 dark:text-gray-300">
          {fileName ? fileName.substring(0, 10) + '...' : 'Attach file'}
        </span>
      </div>
    </label>
  );
};

export default FileUploadButton;