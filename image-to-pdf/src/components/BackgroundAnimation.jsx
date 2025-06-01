const BackgroundAnimation = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-10">
    <div className="absolute w-24 h-24 bg-white/10 rounded-full top-1/5 left-1/10 animate-pulse"></div>
    <div className="absolute w-36 h-36 bg-white/10 rounded-full top-3/5 right-1/6 animate-pulse delay-1000"></div>
    <div className="absolute w-20 h-20 bg-white/10 rounded-full bottom-1/5 left-1/5 animate-pulse delay-2000"></div>
  </div>
);

export default BackgroundAnimation;