const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-fuchsia-200/20 dark:from-purple-800/20 dark:to-fuchsia-800/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundShapes;