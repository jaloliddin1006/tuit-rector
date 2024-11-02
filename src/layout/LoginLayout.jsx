const LoginLayout = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="bg-slate-800 flex items-center justify-center h-screen w-[40%]">
        <h2 className="text-white text-6xl">Smart TUIT</h2>
      </div>
      <div className="w-[60%] h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
