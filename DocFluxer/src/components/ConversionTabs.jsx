const ConversionTabs = ({ conversionTypes, currentType, onTabClick }) => (
  <div className="flex justify-center gap-4 mb-12 flex-wrap">
    {Object.entries(conversionTypes).map(([type, config]) => (
      <div
        key={type}
        className={`
          px-8 py-4 rounded-full cursor-pointer transition-all duration-300 
          flex items-center gap-3 font-medium min-w-[170px] justify-center
          border-2 hover:transform hover:-translate-y-1
          ${currentType === type 
            ? 'bg-gradient-to-r from-emerald-400 to-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-400/30' 
            : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/40'
          }
        `}
        onClick={() => onTabClick(type)}
      >
        <span className="text-lg">{config.icon}</span>
        {type.split('-').map(word => word.split(' ').map(val => val !='to'?val.toUpperCase():val ) ).join(' ') 

        }
      </div>
    ))}
  </div>
);
export default ConversionTabs