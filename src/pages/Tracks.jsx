import { useState } from 'react';
import { tracks } from '../data/tracks';
import { albums } from '../data/albums';
import TrackCard from '../components/TrackCard';
import SectionTitle from '../components/SectionTitle';

const Tracks = () => {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [selectedMood, setSelectedMood] = useState('All');

    // Extract unique genres and moods
    const genres = ['All', ...new Set(tracks.map(t => t.genre))];
    const moods = ['All', ...new Set(tracks.map(t => t.mood))];

    // Filter logic
    const filteredTracks = tracks.filter(track => {
        const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre;
        const matchesMood = selectedMood === 'All' || track.mood === selectedMood;
        return matchesGenre && matchesMood;
    });

    return (
        <div className="pt-24 bg-[#150529] min-h-screen pb-20">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="All Tracks" title="Find Your" highlight="Rhythm" />

                {/* Filters */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                     <select 
                        value={selectedGenre} 
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        className="bg-purple-900/30 text-white border border-purple-500/30 rounded-full px-6 py-3 focus:outline-none focus:border-[#B01E9D]"
                    >
                        {genres.map(g => <option key={g} value={g} className="bg-[#150529]">{g} Genre</option>)}
                    </select>

                    <select 
                        value={selectedMood} 
                         onChange={(e) => setSelectedMood(e.target.value)}
                        className="bg-purple-900/30 text-white border border-purple-500/30 rounded-full px-6 py-3 focus:outline-none focus:border-[#B01E9D]"
                    >
                        {moods.map(m => <option key={m} value={m} className="bg-[#150529]">{m} Mood</option>)}
                    </select>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTracks.map(track => (
                        <TrackCard key={track.id} track={track} />
                    ))}
                </div>
                
                {filteredTracks.length === 0 && (
                    <div className="text-center text-gray-400 mt-12 text-xl font-serif">
                        No tracks found matching your criteria.
                    </div>
                )}
             </div>
        </div>
    );
};

export default Tracks;
