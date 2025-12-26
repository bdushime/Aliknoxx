import SectionTitle from '../components/SectionTitle';

const Contact = () => {
    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="Get In Touch" title="Let's create something" highlight="Amazing Together" />

                 <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                         {/* Contact Form */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-lg backdrop-blur-sm border border-purple-500/30">
                            <h3 className="text-2xl font-serif font-semibold text-white mb-6">Send us a message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-[#B01E9D] font-serif transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-[#B01E9D] font-serif transition-colors duration-300" />
                                    </div>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-[#B01E9D] font-serif transition-colors duration-300" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-[#B01E9D] font-serif transition-colors duration-300" />
                                </div>
                                <div>
                                    <textarea placeholder="Your Message" rows="4" className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-3 focus:outline-none focus:border-[#B01E9D] font-serif resize-none transition-colors duration-300"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#B01E9D] hover:bg-[#9A1A85] text-white font-serif font-semibold py-3 px-6 rounded-full transition-colors duration-300 uppercase tracking-wider">
                                    Send Message
                                </button>
                            </form>
                        </div>

                         {/* Info */}
                        <div className="space-y-8">
                             {/* Location */}
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30">
                                <div className="flex items-center mb-4">
                                     <div className="w-12 h-12 bg-[#B01E9D] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                     </div>
                                     <div>
                                         <h4 className="text-lg font-serif font-semibold text-white">Our Location</h4>
                                         <p className="text-gray-300 font-serif">KIGALI - Kg St, Kacyiru</p>
                                     </div>
                                </div>
                            </div>
                            
                            {/* Call Us */}
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30">
                                <div className="flex items-center mb-4">
                                     <div className="w-12 h-12 bg-[#B01E9D] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                                     </div>
                                     <div>
                                         <h4 className="text-lg font-serif font-semibold text-white">Call Us</h4>
                                         <p className="text-gray-300 font-serif">+250784876606</p>
                                     </div>
                                </div>
                            </div>

                             {/* Email Us */}
                             <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg backdrop-blur-sm border border-purple-500/30">
                                <div className="flex items-center mb-4">
                                     <div className="w-12 h-12 bg-[#B01E9D] rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                     </div>
                                     <div>
                                         <h4 className="text-lg font-serif font-semibold text-white">Email Us</h4>
                                         <p className="text-gray-300 font-serif">info@muhire-music.com</p>
                                     </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
