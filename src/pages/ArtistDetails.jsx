import { useParams, Link } from 'react-router-dom';
import { artists } from '../data/artists';
import { albums } from '../data/albums';
import { tracks } from '../data/tracks';
import AlbumCard from '../components/AlbumCard';
import TrackCard from '../components/TrackCard';

const ArtistDetails = () => {
    const { id } = useParams();
    const artist = artists.find(a => a.id === id);

    if (!artist) return <div className="text-white text-center py-20">Artist not found</div>;

    const artistAlbums = albums.filter(a => a.artistId === id);
    const artistTracks = tracks.filter(t => t.artistId === id).slice(0, 4); // Top 4 tracks

    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#B01E9D] shadow-2xl flex-shrink-0">
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white uppercase leading-tight mb-4">
                            {artist.name}
                        </h1>
                        <p className="text-gray-300 font-serif text-lg leading-relaxed max-w-2xl">
                            {artist.bio}
                        </p>
                    </div>
                </div>

                {/* Discography */}
                <div className="mb-16">
                     <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-[#B01E9D] pl-4">Discography</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {artistAlbums.map(album => (
                            <AlbumCard key={album.id} album={album} />
                        ))}
                     </div>
                     {artistAlbums.length === 0 && <p className="text-gray-500 font-serif">No albums released yet.</p>}
                </div>

                 {/* Top Tracks */}
                 <div>
                     <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-[#B01E9D] pl-4">Top Tracks</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {artistTracks.map(track => (
                            <TrackCard key={track.id} track={track} />
                        ))}
                     </div>
                </div>
             </div>
        </div>
    );
};

export default ArtistDetails;
