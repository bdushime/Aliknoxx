import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const TrackCard = ({ track }) => {
    // 1. Manage playing state and grab a reference to the audio element in the DOM
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // 2. Logic to toggle play/pause
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            // Pause any other tracks that might be playing (optional advanced feature later)
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl overflow-hidden border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full">
            
            {/* --- NEW AUDIO PLAYER UI --- */}
            <div className="relative h-56 sm:h-64 bg-[#110422] flex items-center justify-center overflow-hidden group-hover:bg-[#1a0633] transition-colors">
                
                {/* Optional: Track Cover Image could go here */}
                {track.coverImage && (
                    <img src={track.coverImage} alt={track.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
                )}

                {/* The actual audio element (Hidden from view) */}
                {/* We'll need to make sure your track data has a 'previewUrl' pointing to a 30s MP3 */}
                <audio 
                    ref={audioRef} 
                    src={track.previewUrl} 
                    onEnded={() => setIsPlaying(false)} // Reset button when track finishes
                />

                {/* Custom Play/Pause Button */}
                <button 
                    onClick={togglePlay}
                    className="relative z-10 w-16 h-16 bg-[#B01E9D] rounded-full flex items-center justify-center text-white hover:bg-[#C42091] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(176,30,157,0.4)]"
                >
                    {isPlaying ? (
                        // Pause Icon
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                        // Play Icon
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                </button>

                {/* Simple Equalizer Animation (Visible only when playing) */}
                {isPlaying && (
                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                        {/* We can upgrade this to a real progress bar later, but a CSS animation looks cool for now */}
                        <div className="h-full bg-[#B01E9D] animate-pulse w-full"></div>
                     </div>
                )}
            </div>
            {/* --- END AUDIO PLAYER UI --- */}

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-white mb-1">{track.title}</h3>
                        <p className="text-[#B01E9D] font-serif text-sm">{track.genre}</p>
                    </div>
                    {track.isNew && (
                         <span className="bg-[#B01E9D]/20 text-[#B01E9D] text-xs font-bold px-2 py-1 rounded-full border border-[#B01E9D]/50">NEW</span>
                    )}
                </div>
                
                <p className="text-gray-300 font-serif text-sm mb-6 line-clamp-2 flex-grow">
                    {track.description || `Mood: ${track.mood}. A great track for your playlist.`}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Link to={`/tracks?id=${track.id}`} className="flex-1 text-center px-4 py-2 border border-white/30 text-white hover:bg-white hover:text-[#110422] rounded-full font-serif font-semibold transition-all duration-300 text-sm">
                        View Details
                    </Link>
                    <a 
                        href={`https://wa.me/250784876606?text=I'm%20interested%20in%20buying%20your%20track%20${encodeURIComponent(track.title)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-serif font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TrackCard;