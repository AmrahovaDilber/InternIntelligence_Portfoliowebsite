const Title: React.FC<{ children: string }> = ({ children }) => {
    return (
      <div className="text-center my-14">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          {children}
        </h1>
      </div>
    );
  };
  
  export default Title;
  