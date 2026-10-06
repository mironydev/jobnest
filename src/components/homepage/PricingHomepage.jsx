"use client";

import Pricing from "@/app/pricing/Pricing";

const PricingHomepage = ({ user }) => {
  return (
    <div className="mt-28 sm:mt-36 px-4">
      <div className="text-center space-y-2">
        <div className="flex justify-center items-center gap-3 mb-3">
          <span className="bg-indigo-500 h-1.5 w-1.5 rounded-xs"></span>
          <p className="text-sm font-semibold tracking-widest text-foreground/70">
            PRICING
          </p>
          <span className="bg-indigo-500 h-1.5 w-1.5 rounded-xs"></span>
        </div>

        <h2 className="text-4xl/tight font-semibold max-w-xl mx-auto">
          Unlock More Features, <br className="hidden sm:block" />
          Accelerate Your Job Search
        </h2>
      </div>

      <Pricing user={user} />
    </div>
  );
};

export default PricingHomepage;
