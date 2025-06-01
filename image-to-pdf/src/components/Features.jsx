const Features = () => (
  <div className="bg-white/8 backdrop-blur-xl rounded-3xl p-12 my-16 animate-fade-in-up delay-300">
    <h2 className="text-white text-center mb-10 text-4xl font-semibold">
      Why Choose Our Converter?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: '⚡',
          title: 'Lightning Fast',
          desc: 'Convert files in seconds with our optimized processing engine'
        },
        {
          icon: '🔒',
          title: 'Secure & Private',
          desc: 'Your files are processed locally and never stored on our servers'
        },
        {
          icon: '📱',
          title: 'Mobile Friendly',
          desc: 'Works perfectly on all devices - desktop, tablet, and mobile'
        },
        {
          icon: '🎯',
          title: 'High Quality',
          desc: 'Maintains original quality and formatting during conversion'
        }
      ].map((feature, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
        >
          <div className="text-4xl mb-4 text-emerald-400 animate-pulse">
            {feature.icon}
          </div>
          <div className="text-white font-semibold mb-3 text-lg">
            {feature.title}
          </div>
          <div className="text-white/80 text-sm leading-relaxed">
            {feature.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Features;
