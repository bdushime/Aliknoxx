import { useState, useRef, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { tracks } from '../data/tracks'; 

const TrackDetails = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const trackId = searchParams.get('id');

    // Find the specific track. We check both string and int just in case!
    const track = tracks.find(t => t.id.toString() === trackId);

    // Audio Player State
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [trackId]);

    if (!track) {
        return (
            <div className="pt-32 pb-20 bg-[#150529] min-h-screen flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-serif mb-4">Track not found</h2>
                <button onClick={() => navigate('/tracks')} className="text-[#B01E9D] hover:text-white transition-colors">
                    &larr; Back to all tracks
                </button>
            </div>
        );
    }

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="pt-24 pb-20 bg-[#150529] min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                
                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors">
                    <span>&larr;</span> Back
                </button>

                <div className="flex flex-col md:flex-row gap-12 bg-[#110422] p-6 md:p-10 rounded-2xl border border-purple-500/20 shadow-2xl">
                    
                    {/* Left Column: Visuals & Player */}
                    <div className="w-full md:w-5/12 flex flex-col gap-6">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-[0_0_30px_rgba(176,30,157,0.2)] bg-gray-900 group">
                            {track.coverImage ? (
                                <img src={track.coverImage} alt={track.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-pink-900/40">
                                    <span className="text-4xl text-white/50 font-serif">♪</span>
                                </div>
                            )}
                            
                            {/* Hover Overlay with big play button */}
                            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                <button 
                                    onClick={togglePlay}
                                    className="w-20 h-20 bg-[#B01E9D] rounded-full flex items-center justify-center text-white hover:bg-[#C42091] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(176,30,157,0.6)]"
                                >
                                    {isPlaying ? (
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                                    ) : (
                                        <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Hidden Audio Element */}
                        <audio 
                            ref={audioRef} 
                            src={track.previewUrl} 
                            onEnded={() => setIsPlaying(false)} 
                        />

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-[#150529] p-3 rounded-lg border border-purple-500/20">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">BPM</p>
                                <p className="text-white font-semibold font-serif">{track.bpm || 'N/A'}</p>
                            </div>
                            <div className="bg-[#150529] p-3 rounded-lg border border-purple-500/20">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Key</p>
                                <p className="text-white font-semibold font-serif">{track.key || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & Purchase */}
                    <div className="w-full md:w-7/12 flex flex-col">
                        <div className="mb-2 flex gap-2">
                            <span className="bg-[#B01E9D]/20 text-[#B01E9D] text-xs font-bold px-3 py-1 rounded-full border border-[#B01E9D]/50 uppercase">
                                {track.genre}
                            </span>
                            <span className="bg-blue-900/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30 uppercase">
                                {track.mood}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                            {track.title}
                        </h1>

                        <p className="text-2xl text-[#B01E9D] font-serif font-semibold mb-8">
                            {track.price ? `$${track.price}` : 'Price on Request'}
                        </p>

                        <div className="prose prose-invert mb-10 flex-grow">
                            <h3 className="text-xl font-serif text-white mb-3">About this track</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {track.description || `This high-energy ${track.genre} track captures a distinctly ${track.mood.toLowerCase()} vibe. Perfect for your next project, set, or personal collection.`}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <a 
                                href={`https://wa.me/250784876606?text=Hi!%20I'm%20ready%20to%20purchase%20the%20track:%20"${encodeURIComponent(track.title)}"`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-serif font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                Buy Track via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackDetails;