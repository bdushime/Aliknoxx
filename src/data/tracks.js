// Helper to generate tracks
// 10 tracks per album
const generateTracks = () => {
    const tracks = [];
    const albums = ["album-1", "album-2", "album-3", "album-4"];
    const moods = ["Chill", "Energetic", "Dark", "Happy", "Melancholic"];
    let trackIdCounter = 1;

    albums.forEach(albumId => {
        for (let i = 1; i <= 10; i++) {
            tracks.push({
                id: `track-${trackIdCounter}`,
                title: `Track ${i} - ${albumId}`,
                albumId: albumId,
                artistId: albumId === "album-1" || albumId === "album-2" ? "artist-1" : "artist-2",
                duration: "3:45",
                mood: moods[Math.floor(Math.random() * moods.length)],
                genre: "Electronic",
                youtubeVideoId: "dQw4w9WgXcQ" // Place holder
            });
            trackIdCounter++;
        }
    });

    // Add specific featured tracks from legacy home page
    tracks.push({
        id: "track-neon-nights",
        title: "Neon Nights",
        albumId: "album-1",
        artistId: "artist-1",
        duration: "4:32",
        mood: "Energetic",
        genre: "Progressive Trance",
        youtubeVideoId: "dQw4w9WgXcQ",
        isFeatured: true
    });
     tracks.push({
        id: "track-sunset-drive",
        title: "Sunset Drive",
        albumId: "album-2",
        artistId: "artist-1",
        duration: "3:20",
        mood: "Chill",
        genre: "Synthwave",
        youtubeVideoId: "dQw4w9WgXcQ",
        isFeatured: true
    });
     tracks.push({
        id: "track-deep-echoes",
        title: "Deep Echoes",
        albumId: "album-3",
        artistId: "artist-2",
        duration: "5:10",
        mood: "Dark",
        genre: "Deep House",
        youtubeVideoId: "dQw4w9WgXcQ",
        isFeatured: true
    });

    return tracks;
};

export const tracks = generateTracks();
