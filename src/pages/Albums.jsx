import AlbumCard from '../components/AlbumCard';
import SectionTitle from '../components/SectionTitle';
import Layout from '../components/Layout';
import { albums } from '../data/albums';

const Albums = () => {
    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="All Albums" title="Explore Our" highlight="Discography" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                     {albums.map(album => (
                        <AlbumCard key={album.id} album={album} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Albums;
