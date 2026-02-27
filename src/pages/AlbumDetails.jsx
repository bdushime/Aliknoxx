import { useEffect } from 'react';
// 1. IMPORT useParams
import { useParams, useNavigate } from 'react-router-dom';
import { albums } from '../data/albums';

const AlbumDetails = () => {
    // 2. USE useParams
    const { id } = useParams();
    const navigate = useNavigate();

    // 3. FIND LOGIC
    const album = albums.find(a => a.id.toString() === id);

    // 4. DEPENDENCY
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!album) {
        return (
            <div className="pt-32 pb-20 bg-[#150529] min-h-screen flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-serif mb-4">Album not found</h2>
                <button onClick={() => navigate(-1)} className="text-[#B01E9D] hover:text-white transition-colors">
                    &larr; Go Back
                </button>
            </div>
        );
    }

    const mockTracklist = Array.from({ length: album.trackCount }, (_, i) => ({
        number: i + 1,
        title: `${album.title} - Track ${i + 1}`,
        duration: "3:15" 
    }));

    return (
        <div className="pt-24 pb-20 bg-[#150529] min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors">
                    <span>&larr;</span> Back to Albums
                </button>

                <div className="flex flex-col lg:flex-row gap-12 bg-[#110422] p-6 md:p-10 rounded-2xl border border-purple-500/20 shadow-2xl">
                    <div className="w-full lg:w-5/12 flex flex-col gap-6">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-[0_0_30px_rgba(176,30,157,0.2)] bg-gray-900">
                            <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-[#150529] p-6 rounded-xl border border-purple-500/20 text-center">
                            <p className="text-gray-400 font-serif text-sm mb-2 uppercase tracking-wider">Bundle Price</p>
                            <p className="text-3xl text-white font-serif font-bold mb-6">${album.price.toFixed(2)}</p>
                            <a href={`https://wa.me/250784876606?text=Hi%20Gatikabisi!%20I'm%20ready%20to%20purchase%20your%20full%20album%20bundle:%20"${encodeURIComponent(album.title)}"`} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-serif font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                                Buy Full Album
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12 flex flex-col">
                        <p className="text-[#B01E9D] font-serif font-bold uppercase tracking-widest mb-2">{album.artist} • {album.releaseYear}</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">{album.title}</h1>
                        <p className="text-gray-300 leading-relaxed mb-8">{album.description}</p>
                        <div className="flex-grow">
                            <h3 className="text-xl font-serif text-white mb-4 border-b border-purple-500/20 pb-2">Tracklist ({album.trackCount})</h3>
                            <div className="flex flex-col gap-2">
                                {mockTracklist.map((track) => (
                                    <div key={track.number} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-500 font-mono text-sm w-4 text-right">{track.number}</span>
                                            <span className="text-gray-200 font-serif group-hover:text-white transition-colors">{track.title}</span>
                                        </div>
                                        <span className="text-gray-500 text-sm font-mono">{track.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumDetails;