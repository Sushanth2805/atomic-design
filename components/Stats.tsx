import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-12 border-b border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="text-center py-4">
                <div className="text-4xl md:text-5xl font-medium text-white mb-2">45+</div>
                <div className="text-brand-gray text-sm">Happy customers</div>
            </div>

            <div className="text-center py-4">
                <div className="text-4xl md:text-5xl font-medium text-white mb-2">5k+</div>
                <div className="text-brand-gray text-sm">Hours spent on craft</div>
            </div>

            <div className="text-center py-4">
                <div className="text-4xl md:text-5xl font-medium text-white mb-2">4.8</div>
                <div className="text-brand-gray text-sm">Review rate</div>
            </div>

        </div>
      </div>
    </section>
  );
};