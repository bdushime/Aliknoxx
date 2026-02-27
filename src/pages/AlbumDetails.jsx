import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { albums } from '../data/albums';

const AlbumDetails = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const albumId = searchParams.get('id');

    // Find the specific album
    const album = albums.find(a => a.id.toString() === albumId);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [albumId]);

    // Fallback if the album isn't found
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

    // Generate a mock tracklist array based on the album's trackCount
    const mockTracklist = Array.from({ length: album.trackCount }, (_, i) => ({
        number: i + 1,
        title: `${album.title} - Track ${i + 1}`,
        duration: "3:15" // Dummy duration
    }));

    return (
        <div className="pt-24 pb-20 bg-[#150529] min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                
                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors">
                    <span>&larr;</span> Back to Albums
                </button>

                <div className="flex flex-col lg:flex-row gap-12 bg-[#110422] p-6 md:p-10 rounded-2xl border border-purple-500/20 shadow-2xl">
                    
                    {/* Left Column: Visuals & Buy CTA */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-6">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-[0_0_30px_rgba(176,30,157,0.2)] bg-gray-900">
                            <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="bg-[#150529] p-6 rounded-xl border border-purple-500/20 text-center">
                            <p className="text-gray-400 font-serif text-sm mb-2 uppercase tracking-wider">Bundle Price</p>
                            <p className="text-3xl text-white font-serif font-bold mb-6">${album.price.toFixed(2)}</p>
                            
                            <a 
                                href={`https://wa.me/250784876606?text=Hi%20Gatikabisi!%20I'm%20ready%20to%20purchase%20your%20full%20album%20bundle:%20"${encodeURIComponent(album.title)}"`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-serif font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                Buy Full Album
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Details & Tracklist */}
                    <div className="w-full lg:w-7/12 flex flex-col">
                        <p className="text-[#B01E9D] font-serif font-bold uppercase tracking-widest mb-2">
                            {album.artist} • {album.releaseYear}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            {album.title}
                        </h1>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            {album.description}
                        </p>

                        {/* Tracklist UI */}
                        <div className="flex-grow">
                            <h3 className="text-xl font-serif text-white mb-4 border-b border-purple-500/20 pb-2">
                                Tracklist ({album.trackCount})
                            </h3>
                            <div className="flex flex-col gap-2">
                                {mockTracklist.map((track) => (
                                    <div key={track.number} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-500 font-mono text-sm w-4 text-right">
                                                {track.number}
                                            </span>
                                            <span className="text-gray-200 font-serif group-hover:text-white transition-colors">
                                                {track.title}
                                            </span>
                                        </div>
                                        <span className="text-gray-500 text-sm font-mono">
                                            {track.duration}
                                        </span>
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