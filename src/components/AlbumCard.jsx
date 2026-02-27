import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
    return (
        <div className="bg-[#150529] rounded-xl overflow-hidden border border-purple-500/30 hover:border-[#B01E9D]/70 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-[0_10px_30px_rgba(176,30,157,0.2)]">
            
            {/* Album Cover with Overlay & Badge */}
            <div className="relative aspect-square overflow-hidden bg-gray-900">
                <img 
                    src={album.coverImage} 
                    alt={album.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle dark gradient at the bottom so the badge pops */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#150529] via-transparent to-transparent opacity-80"></div>
                
                {/* Track count floating badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    {album.trackCount} Tracks
                </div>
            </div>

            {/* Album Details */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Artist Name & Year */}
                <div className="mb-1 text-[#B01E9D] text-xs font-bold uppercase tracking-wider flex justify-between">
                    <span>{album.artist}</span>
                    <span className="text-gray-400">{album.releaseYear}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-2 line-clamp-1" title={album.title}>
                    {album.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm font-serif mb-4 line-clamp-2 flex-grow">
                    {album.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-serif font-bold text-white">
                        ${album.price.toFixed(2)}
                    </span>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col gap-2 mt-auto">
                    <Link 
                        to={`/albums?id=${album.id}`} 
                        className="w-full text-center px-4 py-2 border border-[#B01E9D] text-[#B01E9D] hover:bg-[#B01E9D] hover:text-white rounded-full font-serif font-semibold transition-colors duration-300 text-sm"
                    >
                        View Album
                    </Link>
                    <a 
                        href={`https://wa.me/250784876606?text=Hi%20Gatikabisi!%20I'm%20interested%20in%20buying%20your%20album%20bundle:%20"${encodeURIComponent(album.title)}"`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full text-center px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-serif font-semibold transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                    >
                        {/* WhatsApp Icon */}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Buy Bundle
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;