import SectionTitle from '../components/SectionTitle';

const About = () => {
    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <SectionTitle subtitle="About Us" title="We Are" highlight="Muhire" />

                  {/* Content from about.html preserved */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-12 max-w-6xl mx-auto">
                        <div className="flex-1">
                             <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                  <img src="/images/about-image.jpg" alt="About Us" className="w-full object-cover" />
                             </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-serif font-bold text-white mb-4">The soundtrack to your most unforgettable moments.</h3>
                            <p className="text-gray-300 font-serif leading-relaxed">
                                We are passionate musicians dedicated to creating unforgettable experiences through the power of live music. Our journey began with a simple belief that music has the power to connect souls and create lasting memories.
                            </p>
                            <p className="text-gray-300 font-serif leading-relaxed">
                                From intimate acoustic sessions to electrifying festival performances, we bring energy, emotion, and artistry to every stage we grace. Join us as we continue to push the boundaries of musical expression.
                            </p>
                            
                            <div className="flex gap-8 mt-8">
                                 <div>
                                     <span className="block text-4xl text-[#B01E9D] font-bold">10</span>
                                     <span className="text-gray-400 font-serif">Years Experience</span>
                                 </div>
                                 <div>
                                     <span className="block text-4xl text-[#B01E9D] font-bold">5</span>
                                     <span className="text-gray-400 font-serif">Albums</span>
                                 </div>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
    );
};

export default About;
