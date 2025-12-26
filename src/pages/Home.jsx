import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import TrackCard from '../components/TrackCard';
import AlbumCard from '../components/AlbumCard';
import NewsCard from '../components/NewsCard';
import { tracks } from '../data/tracks';
import { albums } from '../data/albums';
import { news } from '../data/news';

const Home = () => {
    // Get featured/latest tracks (e.g., first 3)
    const featuredTracks = tracks.filter(t => t.isFeatured).slice(0, 3);
    const featuredAlbums = albums.slice(0, 4);
    const latestNews = news.slice(0, 3);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-[#150529]">
            {/* Hero Section */}
            <section id="home" className="relative hero-bg bg-cover bg-no-repeat bg-center min-h-screen flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="relative z-10 text-center px-4 pb-20">
                    <div className="max-w-4xl mx-auto mb-8">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-semibold uppercase mb-2 text-white">Example Night</h1> {/* Hardcoded for now or dynamic? Legacy had "Tonight" */}
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-semibold uppercase mb-2 text-[#B01E9D] leading-none">Progressive</h1>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-semibold uppercase mb-6 text-white">Trance Night</h1>
                        <p className="max-w-3xl mx-auto text-sm md:text-base font-serif uppercase text-[#C5C5C7] leading-relaxed">
                            Dive into the heart of live music with a band that blends energy, emotion, and artistry.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                         <button onClick={() => scrollToSection('tracks')} className="w-full sm:w-auto px-6 py-3 uppercase text-white bg-[#6617CA] hover:bg-[#5A15B8] rounded-full font-serif font-semibold transition-all duration-300 transform hover:scale-105">
                            Latest Tracks
                        </button>
                        <a href="https://wa.me/250784876606" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-3 uppercase text-white bg-[#C42091] hover:bg-[#B01E82] rounded-full font-serif font-semibold transition-all duration-300 transform hover:scale-105">
                            Request a Custom Track
                        </a>
                    </div>
                    {/* Scroll Indicator */}
                     <div className="flex items-center justify-center mt-12">
                        <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
                            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tracks Section */}
            <section id="tracks" className="section-padding bg-[#150529] py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Latest Releases" title="Listen to the" highlight="Vibe" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {featuredTracks.map(track => (
                            <TrackCard key={track.id} track={track} />
                        ))}
                    </div>
                    <div className="text-center mt-8 lg:mt-12">
                        <Link to="/tracks" className="inline-block px-8 py-3 bg-[#B01E9D] hover:bg-[#9A1A85] text-white font-serif font-bold text-lg rounded-full transition-all duration-300 uppercase tracking-wider transform hover:scale-105">
                            Browse All Tracks
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* About Section (Simplified port) */}
             <section id="about" className="section-padding">
                 <div className="relative pre-middle bg-[#110422] py-8 sm:py-12 lg:py-20 overflow-x-hidden">
                      <div className="absolute inset-0 bg-[#110422] opacity-50 z-0"></div>
                      <div className="container mx-auto px-4 relative z-10">
                          {/* Content omitted for brevity, reusing structure */}
                          <div className="text-center text-white">
                              <h2 className="text-3xl font-serif font-bold mb-4">About Us</h2>
                              <p className="max-w-2xl mx-auto">We are passionate musicians dedicated to creating unforgettable experiences through the power of live music.</p>
                          </div>
                      </div>
                 </div>
            </section>

             {/* Albums Section */}
            <section id="albums" className="section-padding bg-[#110422] py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Latest Album" title="Experience the magic of our" highlight="New Album" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {featuredAlbums.map(album => (
                            <AlbumCard key={album.id} album={album} />
                        ))}
                    </div>
                     <div className="text-center mt-8 lg:mt-12">
                        <Link to="/albums" className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#B01E9D] text-white font-serif font-semibold uppercase rounded-3xl hover:bg-[#9A1A85] transition-colors duration-300">
                            View All Albums
                        </Link>
                    </div>
                </div>
            </section>
            
             {/* Blog/News Section */}
            <section id="blog" className="section-padding bg-[#110422] py-12 sm:py-16 lg:py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Latest News" title="Stay updated with our" highlight="Musical Journey" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {latestNews.map(item => (
                            <NewsCard key={item.id} item={item} />
                        ))}
                    </div>
                 </div>
            </section>

             {/* Footer Hero */}
            <section id="footer-hero" className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-20" style={{backgroundImage: "url('/images/concert-crowd.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80"></div>
                 <div className="relative z-10 container mx-auto px-4 text-center">
                      <h2 className="text-4xl font-serif font-bold text-white uppercase mb-4">Unique shows, perfect music</h2>
                      <button className="bg-[#B01E9D] hover:bg-[#9A1A85] text-white font-serif font-semibold px-8 py-4 rounded-full uppercase tracking-wider">Book a private show</button>
                 </div>
            </section>
        </div>
    );
};

export default Home;
