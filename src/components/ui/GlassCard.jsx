const GlassCard = ({ children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/20">
      {children}
    </div>
  );
};

export default GlassCard;
