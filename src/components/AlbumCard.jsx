import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
    return (
        <div className="bg-[#150529] rounded-xl overflow-hidden border border-purple-500/30 hover:border-[#B01E9D]/70 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-[0_10px_30px_rgba(176,30,157,0.2)]">
            <div className="relative aspect-square overflow-hidden bg-gray-900">
                <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150529] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    {album.trackCount} Tracks
                </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-1 text-[#B01E9D] text-xs font-bold uppercase tracking-wider flex justify-between">
                    <span>{album.artist}</span>
                    <span className="text-gray-400">{album.releaseYear}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2 line-clamp-1" title={album.title}>{album.title}</h3>
                <p className="text-gray-400 text-sm font-serif mb-4 line-clamp-2 flex-grow">{album.description}</p>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-serif font-bold text-white">${album.price.toFixed(2)}</span>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                    {/* CHANGED THIS LINK */}
                    <Link to={`/albums/${album.id}`} className="w-full text-center px-4 py-2 border border-[#B01E9D] text-[#B01E9D] hover:bg-[#B01E9D] hover:text-white rounded-full font-serif font-semibold transition-colors duration-300 text-sm">
                        View Album
                    </Link>
                    <a 
                        href={`https://wa.me/250784876606?text=Hi%20Gatikabisi!%20I'm%20interested%20in%20buying%20your%20album%20bundle:%20"${encodeURIComponent(album.title)}"`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full text-center px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-serif font-semibold transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                    >
                        Buy Bundle
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;