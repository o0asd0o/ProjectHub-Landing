const PricingHero: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mt-24 md:mt-40 lg:mt-48 max-w-[1400px] px-4 md:px-6 lg:px-0 mb-8 md:mb-12">
      <div className="flex flex-col text-center max-w-4xl">
        <span className="text-[#3b68ff] font-semibold text-sm md:text-base mb-4">
          PRICING
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Simple, Transparent <span className="text-[#3b68ff]">Pricing</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Choose the plan that fits your team. All plans include a 14-day free
          trial with no credit card required. Upgrade, downgrade, or cancel
          anytime.
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Save up to 25% with annual billing
      </div>

      <div className="top-32 md:top-48 rounded-full absolute w-full h-[300px] md:h-[400px] bg-[radial-gradient(#3b68fb2d,_transparent)] blur-2xl md:blur-3xl -z-10" />
    </section>
  );
};

export default PricingHero;
