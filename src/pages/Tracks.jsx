import { useState, useMemo } from 'react';
import { tracks } from '../data/tracks';
import TrackCard from '../components/TrackCard';
import SectionTitle from '../components/SectionTitle';

const Tracks = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [selectedMood, setSelectedMood] = useState('All');

    // Optimize: Only calculate unique genres/moods once on mount
    const genres = useMemo(() => ['All', ...new Set(tracks.map(t => t.genre))], []);
    const moods = useMemo(() => ['All', ...new Set(tracks.map(t => t.mood))], []);

    // Filter logic updated to include the search query
    const filteredTracks = tracks.filter(track => {
        const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre;
        const matchesMood = selectedMood === 'All' || track.mood === selectedMood;
        
        return matchesSearch && matchesGenre && matchesMood;
    });

    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="All Tracks" title="Find Your" highlight="Rhythm" />

                {/* Filters & Search Bar */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 max-w-4xl mx-auto">
                    
                    {/* New Search Input */}
                    <input 
                        type="text"
                        placeholder="Search tracks by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-1/3 bg-purple-900/30 text-white border border-purple-500/30 rounded-full px-6 py-3 focus:outline-none focus:border-[#B01E9D] placeholder-gray-400"
                    />

                    <select 
                        value={selectedGenre} 
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        className="w-full md:w-auto bg-purple-900/30 text-white border border-purple-500/30 rounded-full px-6 py-3 focus:outline-none focus:border-[#B01E9D]"
                    >
                        {genres.map(g => (
                            <option key={g} value={g} className="bg-[#150529]">
                                {g === 'All' ? 'All Genres' : g}
                            </option>
                        ))}
                    </select>

                    <select 
                        value={selectedMood} 
                        onChange={(e) => setSelectedMood(e.target.value)}
                        className="w-full md:w-auto bg-purple-900/30 text-white border border-purple-500/30 rounded-full px-6 py-3 focus:outline-none focus:border-[#B01E9D]"
                    >
                        {moods.map(m => (
                            <option key={m} value={m} className="bg-[#150529]">
                                {m === 'All' ? 'All Moods' : m}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Results Counter */}
                <div className="text-center text-gray-400 mb-8 font-serif text-sm">
                    Showing {filteredTracks.length} {filteredTracks.length === 1 ? 'track' : 'tracks'}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTracks.map(track => (
                        <TrackCard key={track.id} track={track} />
                    ))}
                </div>
                
                {filteredTracks.length === 0 && (
                    <div className="text-center text-gray-400 mt-12 text-xl font-serif">
                        No tracks found matching your criteria. Try adjusting your search!
                    </div>
                )}
             </div>
        </div>
    );
};

export default Tracks;