import { useParams, Link } from 'react-router-dom';
import { albums } from '../data/albums';
import { tracks } from '../data/tracks';
import { artists } from '../data/artists'; // If needed for artist details
import SectionTitle from '../components/SectionTitle';

const AlbumDetails = () => {
    const { id } = useParams();
    const album = albums.find(a => a.id === id);
    
    if (!album) {
        return <div className="text-white text-center py-20">Album not found</div>;
    }

    const albumTracks = tracks.filter(t => t.albumId === id);
    const artist = artists.find(a => a.id === album.artistId);

    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-8">
                    <Link to="/albums" className="text-[#B01E9D] hover:text-white font-serif flex items-center gap-2 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                        Back to Albums
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                     {/* Playlist Embed */}
                    <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-900/50 bg-black">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe 
                                className="w-full h-[300px] sm:h-[400px] lg:h-[450px]" 
                                src={`https://www.youtube.com/embed/videoseries?list=${album.youtubePlaylistId}`} 
                                title={album.title} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Info */}
                    <div>
                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white uppercase leading-tight mb-2">
                             {album.title}
                         </h1>
                         <h2 className="text-xl sm:text-2xl text-[#B01E9D] font-serif font-medium mb-4">
                             {artist ? artist.name : "Unknown Artist"}
                         </h2>
                         <p className="text-gray-300 font-serif text-lg leading-relaxed mb-6">
                             {album.description}
                         </p>
                         <div className="inline-block bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-500/20 text-white font-serif">
                             {albumTracks.length} Tracks
                         </div>
                    </div>
                </div>

                {/* Track List */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-gray-700 pb-2">Track List</h3>
                    <ul className="space-y-4">
                        {albumTracks.map((track, index) => (
                            <li key={track.id} className="bg-white/5 hover:bg-white/10 p-4 rounded-lg flex justify-between items-center transition-colors group">
                                <div className="flex items-center gap-4">
                                     <span className="text-gray-500 font-serif w-6 text-right">{index + 1}</span>
                                     <div>
                                         <h4 className="text-white font-semibold font-serif">{track.title}</h4>
                                         <span className="text-xs text-[#B01E9D]">{track.mood}</span>
                                     </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-400 font-serif text-sm">{track.duration}</span>
                                     <a 
                                        href={`https://wa.me/250784876606?text=I'm%20interested%20in%20track%20${encodeURIComponent(track.title)}`}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                     >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                     </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AlbumDetails;
