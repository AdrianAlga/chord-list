import React, { useState } from 'react';
import { Music, ExternalLink, Search } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Data lagu dengan URL chord
  const songs = [
    {
      id: 1,
      title: "Diujung jalan",
      artist: "Oasis",
      chordUrl: "https://share.google/WryPXfvTypdeOJHKU"
    },
    {
      id: 2,
      title: "Let It Be",
      artist: "The Beatles",
      chordUrl: "https://tabs.ultimate-guitar.com/tab/the-beatles/let-it-be-chords-58388"
    },
    {
      id: 3,
      title: "Hotel California",
      artist: "Eagles",
      chordUrl: "https://tabs.ultimate-guitar.com/tab/eagles/hotel-california-chords-17636"
    },
    {
      id: 4,
      title: "Perfect",
      artist: "Ed Sheeran",
      chordUrl: "https://tabs.ultimate-guitar.com/tab/ed-sheeran/perfect-chords-2004079"
    },
    {
      id: 5,
      title: "Hallelujah",
      artist: "Leonard Cohen",
      chordUrl: "https://tabs.ultimate-guitar.com/tab/leonard-cohen/hallelujah-chords-23424"
    },
    {
      id: 6,
      title: "Someone Like You",
      artist: "Adele",
      chordUrl: "https://tabs.ultimate-guitar.com/tab/adele/someone-like-you-chords-912583"
    }
  ];

  // Filter lagu berdasarkan pencarian
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSongClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Music className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">Daftar Lagu</h1>
          </div>
          <p className="text-gray-600">Klik lagu untuk melihat chord-nya</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari lagu atau artis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Song List */}
        <div className="space-y-3">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div
                key={song.id}
                onClick={() => handleSongClick(song.chordUrl)}
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 cursor-pointer border border-gray-200 hover:border-purple-400"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Music className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {song.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{song.artist}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <Music className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>Tidak ada lagu yang ditemukan</p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Total: {filteredSongs.length} lagu
        </div>
      </div>
    </div>
  );
}

