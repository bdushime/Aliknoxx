import { Link } from 'react-router-dom';
import { artists } from '../data/artists';
import SectionTitle from '../components/SectionTitle';

const Artists = () => {
    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="The Talent" title="Meet the" highlight="Artists" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map(artist => (
                        <div key={artist.id} className="text-center group">
                            <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-800 aspect-w-1 aspect-h-1">
                                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <Link to={`/artists/${artist.id}`} className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                     <span className="text-white font-serif font-semibold border-b border-[#B01E9D]">View Profile</span>
                                </Link>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white mb-2">{artist.name}</h3>
                            <p className="text-gray-400 font-serif text-sm line-clamp-2">{artist.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Artists;
