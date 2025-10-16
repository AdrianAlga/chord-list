import React, { useState } from 'react';
import { Music, ExternalLink, Search, ArrowLeft } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Kategori musik
  const categories = [
    {
      id: 'makassar',
      name: 'Musik Makassar',
      icon: '🎵',
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 'indonesia',
      name: 'Musik Indonesia',
      icon: '🇮🇩',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'inggris',
      name: 'Musik Inggris',
      icon: '🎸',
      color: 'from-green-400 to-teal-500'
    }
  ];
  
  // Data lagu berdasarkan kategori
  const songsByCategory = {
    makassar: [
      {
        id: 1,
        title: "Ammakku Surgaku",
        artist: "Adnan Bustam",
        chordUrl: "https://share.google/eOL4DcsMKZBZqXk5n"
      },
      {
        id: 2,
        title: "Anak Karaeng",
        artist: "Anci Laricci",
        chordUrl: "https://share.google/v3WX55fzqCBlP52IZ"
      },
      {
        id: 3,
        title: "Anak Karaeng Chord Dasar",
        artist: "Anci Laricci",
        chordUrl: "https://share.google/4Bfcv4FoSrVhU1OdC"
      }
    ],
    indonesia: [
      {
        id: 4,
        title: "Diujung Jalan",
        artist: "Samsons",
        chordUrl: "https://share.google/WryPXfvTypdeOJHKU"
      },
      {
        id: 5,
        title: "Bukan Rayuan Gombal",
        artist: "Judika",
        chordUrl: "https://share.google/w3sLggoklNt3nZNBs"
      },
      {
        id: 6,
        title: "Terendap Laraku",
        artist: "Naff",
        chordUrl: "https://share.google/xhuOhFgRR2MLFTvGq"
      }
    ],
    inggris: [
      {
        id: 7,
        title: "Wonderwall",
        artist: "Oasis",
        chordUrl: "https://tabs.ultimate-guitar.com/tab/oasis/wonderwall-chords-62006"
      },
      {
        id: 8,
        title: "Let It Be",
        artist: "The Beatles",
        chordUrl: "https://tabs.ultimate-guitar.com/tab/the-beatles/let-it-be-chords-58388"
      },
      {
        id: 9,
        title: "Someone Like You",
        artist: "Adele",
        chordUrl: "https://tabs.ultimate-guitar.com/tab/adele/someone-like-you-chords-912583"
      }
    ]
  };

  // Filter lagu berdasarkan pencarian
  const songs = selectedCategory ? songsByCategory[selectedCategory] : [];
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSongClick = (url) => {
    window.open(url, '_blank');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSearchTerm('');
  };

  // Halaman Kategori
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Music className="w-12 h-12 text-purple-600" />
              <h1 className="text-5xl font-bold text-gray-800">Chord Lagu</h1>
            </div>
            <p className="text-gray-600 text-lg">Pilih kategori musik yang kamu inginkan</p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-400"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-center text-sm">
                  {songsByCategory[category.id].length} lagu
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-500">
            <p>Total {Object.values(songsByCategory).flat().length} lagu tersedia</p>
          </div>
        </div>
      </div>
    );
  }

  // Halaman List Lagu
  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackToCategories}
          className="mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Kategori
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${currentCategory.color} flex items-center justify-center text-2xl`}>
              {currentCategory.icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-800">{currentCategory.name}</h1>
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