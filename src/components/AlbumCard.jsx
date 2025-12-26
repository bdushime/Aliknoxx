import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
    return (
        <div className="text-center group">
            <div className="relative overflow-hidden rounded-lg mb-4 h-64 sm:h-72 lg:h-80 bg-gray-800">
                <img 
                    src={album.coverImage} 
                    alt={album.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play overlay on hover */}
                <Link to={`/albums/${album.id}`} className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#B01E9D] rounded-full flex items-center justify-center hover:bg-[#9A1A85] transition-colors">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z"/>
                        </svg>
                    </div>
                </Link>
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-1">
                <Link to={`/albums/${album.id}`} className="hover:text-[#B01E9D] transition-colors">
                    {album.title}
                </Link>
            </h3>
            {/* We will need to map artistId to name in parent or pass artistName */}
            <p className="text-gray-400 font-serif text-sm sm:text-base">{album.artistName || "Artist"}</p>
        </div>
    );
};

export default AlbumCard;
