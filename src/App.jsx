import React, { useState } from "react";
import { Music, ExternalLink, Search, ArrowLeft } from "lucide-react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Kategori musik
  const categories = [
    {
      id: "makassar",
      name: "Musik Makassar",
      icon: "🎵",
      color: "from-red-400 to-pink-500",
    },
    {
      id: "lagu90",
      name: "Musik 90an",
      icon: "🎼",
      color: "from-cyan-400 to-sky-500",
    },
    {
      id: "indonesia",
      name: "Musik Indonesia",
      icon: "🇮🇩",
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: "inggris",
      name: "Musik Inggris",
      icon: "🎸",
      color: "from-green-400 to-teal-500",
    },
    {
      id: "Malaysia",
      name: "Musik Malaysia",
      icon: "🇲🇾",
      color: "from-yellow-400 to-amber-500",
    },
  ];

  // Data lagu berdasarkan kategori
  const songsByCategory = {
    makassar: [
      {
        id: 1,
        title: "Ammakku Surgaku",
        artist: "Adnan Bustam",
        chordUrl: "https://share.google/eOL4DcsMKZBZqXk5n",
      },
      {
        id: 2,
        title: "Anak Karaeng",
        artist: "Anci Laricci",
        chordUrl: "https://share.google/v3WX55fzqCBlP52IZ",
      },
      {
        id: 3,
        title: "Jannang Ripangakkali",
        artist: "Ashari Sitaba",
        chordUrl: "https://share.google/0ly7uygFCW3gMwZWa",
      },
      {
        id: 4,
        title: "Tea Tonja Nipakamma",
        artist: "Ashari Sitaba",
        chordUrl: "https://share.google/48j2vpsisatBT5JSR",
      },
      {
        id: 5,
        title: "Naloko Nakku",
        artist: "Ridwan Sau",
        chordUrl: "https://share.google/1fFTL7V7uwowFQfBI",
      },
      {
        id: 6,
        title: "Rannu",
        artist: "Ashari Sitaba",
        chordUrl: "https://share.google/eOL4DcsMKZBZqXk5n",
      },
      {
        id: 7,
        title: "Tena Ruanna",
        artist: "Anci Laricci",
        chordUrl: "https://share.google/RqROqTMiT3zvvanCI",
      },
      {
        id: 8,
        title: "Limbangmi Taung",
        artist: "Ridwan Sau",
        chordUrl: "https://share.google/cNmNGoSSV8ntox0BN",
      },
    ],
    lagu90: [
      {
        id: 1,
        title: "Titip Rindu Buat Ayah",
        artist: "Ebiet G.Ade",
        chordUrl: "https://share.google/uXHTqzBruZSG7cw8r",
      },
      {
        id: 2,
        title: "Disini di Batas Kota Ini",
        artist: "Tommy J Pisa",
        chordUrl: "https://share.google/dmWBiR8TWK3p4a5MP",
      },
      {
        id: 5,
        title: "Tak Ingin Sendiri",
        artist: "Pance Pondaag",
        chordUrl: "https://share.google/Ipj53T8iqnpAIjoTK",
      },
      {
        id: 6,
        title: "Bintang Kehidupan",
        artist: "Nike Ardila",
        chordUrl: "https://share.google/oakyZtjxBd9KR1KUL",
      },
      {
        id: 7,
        title: "Hati Yang Luka",
        artist: "Betharia Sonata",
        chordUrl: "https://share.google/ezV7BhRgHVvgofytT",
      },
      {
        id: 8,
        title: "Cintaku Tak Terbatas Waktu",
        artist: "Anie Carera",
        chordUrl: "https://share.google/BmmaenJ5pwdxWGL7p",
      },
      {
        id: 9,
        title: "Yang Pertama Kali",
        artist: "Harry Parintang",
        chordUrl: "https://share.google/5g7dCaPRl9Yai6Urj",
      },
      {
        id: 10,
        title: "Cintaku Takkan Berubah",
        artist: "Anie Carera",
        chordUrl: "https://share.google/kL2lwxayiQgiqNPdJ",
      },
      {
        id: 11,
        title: "Yang Terlupakan",
        artist: "Iwan Fals",
        chordUrl: "https://share.google/ohx39s9kVXEDNz8zP",
      },
      {
        id: 12,
        title: "Suratan",
        artist: "Tommy J Pisa",
        chordUrl: "https://share.google/npDRcyvQk7DWkfRZp",
      },
      {
        id: 13,
        title: "Di Tepian Rindu",
        artist: "Davi Siumbing",
        chordUrl: "https://share.google/npDRcyvQk7DWkfRZp",
      },
      {
        id: 14,
        title: "Ayah",
        artist: "Rinto Harahap",
        chordUrl: "https://share.google/oMvKKEuE1aYoqIqs4",
      },
      {
        id: 15,
        title: "Ibu",
        artist: "Iwan Fals",
        chordUrl: "https://share.google/zoAny0z7tVZCMqMgH",
      },
    ],
    indonesia: [
      {
        id: 1,
        title: "Diujung Jalan",
        artist: "Samsons",
        chordUrl: "https://share.google/WryPXfvTypdeOJHKU",
      },
      {
        id: 2,
        title: "Bukan Rayuan Gombal",
        artist: "Judika",
        chordUrl: "https://share.google/w3sLggoklNt3nZNBs",
      },
      {
        id: 3,
        title: "Terendap Laraku",
        artist: "Naff",
        chordUrl: "https://share.google/xhuOhFgRR2MLFTvGq",
      },
      {
        id: 4,
        title: "Sekuat Hatimu",
        artist: "Last Child",
        chordUrl: "https://share.google/AJhkD8BAbwCoeiCY1",
      },
      {
        id: 5,
        title: "Pedih",
        artist: "Last Child",
        chordUrl: "https://share.google/9yiwt995VGETX7tNp",
      },
      {
        id: 6,
        title: "Kenanglah Aku",
        artist: "Naff",
        chordUrl: "https://share.google/u4gZcSJHD25Lo06pH",
      },
      {
        id: 7,
        title: "Semua Tentang Kita",
        artist: "Peterpan",
        chordUrl: "https://share.google/2zR7VImZbLbOaqlNQ",
      },
      {
        id: 8,
        title: "Selalu Ada",
        artist: "Blackout",
        chordUrl: "https://share.google/ik1VRPcWT4mqWmtV6",
      },
      {
        id: 9,
        title: "Tak kan Hilang",
        artist: "Budi Doremi",
        chordUrl: "https://share.google/DWpiL85oKlaFJ1b4c",
      },
      {
        id: 10,
        title: "Pergi Hilang dan Lupakan",
        artist: "Remember of Today",
        chordUrl: "https://share.google/fu1sOsUx8lVq6SKBf",
      },
      {
        id: 11,
        title: "Cinta Luar Biasa",
        artist: "Admesh Kamelang",
        chordUrl: "https://share.google/DYVU8lj0q0XQ6d5f4",
      },
      {
        id: 12,
        title: "Antara Ada dan Tiada",
        artist: "Utopia",
        chordUrl: "https://share.google/7ZEsueN9T4ksqpqPA",
      },
      {
        id: 13,
        title: "Serana",
        artist: "For Revenge",
        chordUrl: "https://share.google/G4aK9NwXoUWVkMbjm",
      },
      {
        id: 14,
        title: "Seluruh Nafas Ini",
        artist: "Last Child",
        chordUrl: "https://share.google/IMOiN2NMu4gmvCbdl",
      },
      {
        id: 15,
        title: "Harusnya Aku",
        artist: "Armada",
        chordUrl: "https://share.google/grVkSo0JUOArrrloO",
      },
      {
        id: 16,
        title: "Yang Terdalam",
        artist: "Peterpan",
        chordUrl: "https://share.google/OCbJpMA3KZIx4f3SG",
      },
      {
        id: 17,
        title: "Anugerah Terindah Yang Pernah Kumiliki",
        artist: "Sheila On 7",
        chordUrl: "https://share.google/giCdJDORC2arGFO14",
      },
      {
        id: 18,
        title: "Aku Milikmu",
        artist: "Dewa 19",
        chordUrl: "https://share.google/66ZKlVDYHFqBdRwMg",
      },
      {
        id: 19,
        title: "Bebaskan Diriku",
        artist: "Armada",
        chordUrl: "https://share.google/WIGao4YDxnMmjO2LV",
      },
      {
        id: 20,
        title: "Bergema Sampai Selamanya",
        artist: "Nadhif Basalamah",
        chordUrl: "https://share.google/rQsyLMN56bVWM8aVZ",
      },
      {
        id: 21,
        title: "Akhirnya Ku Menemukanmu",
        artist: "Naff",
        chordUrl: "https://share.google/s7Rqtoy9KQbM6k9L1",
      },
      {
        id: 22,
        title: "Melepasmu",
        artist: "Drive",
        chordUrl: "https://share.google/FDyrazOuHTPGPmQDP",
      },
      {
        id: 23,
        title: "Pegang Tanganku",
        artist: "Nosstress",
        chordUrl: "https://share.google/kDV0ELoN3pzHRVaFG",
      },
      {
        id: 24,
        title: "Takkan Pisah",
        artist: "Eren (Kangen Band)",
        chordUrl: "https://share.google/GvfRemBttSM7vmD4m",
      },
      {
        id: 25,
        title: "Virus",
        artist: "SLANK",
        chordUrl: "https://share.google/e2rQqW7g6uVliTl0F",
      },
      {
        id: 26,
        title: "Saat Terakhir",
        artist: "ST12",
        chordUrl: "https://share.google/Otycdvv4KTqVsPdHs",
      },
    ],
    inggris: [
      {
        id: 1,
        title: "Sailor Song",
        artist: "Gigi Perez",
        chordUrl: "https://share.google/TmfDjg7H34FU1IjDD",
      },
      {
        id: 2,
        title: "Creep",
        artist: "Radiohead",
        chordUrl: "https://share.google/TVxWjgzuGyKBnCOer",
      },
      {
        id: 3,
        title: "Sweet Scar",
        artist: "Weird Genius",
        chordUrl: "https://share.google/Jw9g3HMZNt71sJTUp",
      },
      {
        id: 4,
        title: "Self Healing",
        artist: "Brian Rahmattio",
        chordUrl: "https://share.google/M6rqr4k2njCdLnHZQ",
      },
    ],
    Malaysia: [
      {
        id: 1,
        title: "Sembilu Berbisa (Romantika Airmata) Chord Dasar",
        artist: "Iwan Salman",
        chordUrl: "https://share.google/xaEJicfJXjqJ2pQoA",
      },
      {
        id: 2,
        title: "Mencari Alasan",
        artist: "Exist",
        chordUrl: "https://share.google/CfXz7XogVMmO6gkTp",
      },
      {
        id: 3,
        title: "Gerimis Mengundang",
        artist: "Slam",
        chordUrl: "https://share.google/4mMeU3dSixtDLK1Pj",
      },
    ],
  };

  // Filter lagu berdasarkan pencarian
  const songs = selectedCategory ? songsByCategory[selectedCategory] : [];
  const filteredSongs = songs.filter((song) => song.title.toLowerCase().includes(searchTerm.toLowerCase()) || song.artist.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSongClick = (url) => {
    window.open(url, "_blank");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSearchTerm("");
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
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl`}>{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">{category.name}</h3>
                <p className="text-gray-500 text-center text-sm">{songsByCategory[category.id].length} lagu</p>
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
  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button onClick={handleBackToCategories} className="mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Kategori
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${currentCategory.color} flex items-center justify-center text-2xl`}>{currentCategory.icon}</div>
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
                      <h3 className="text-lg font-semibold text-gray-800">{song.title}</h3>
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
        <div className="mt-8 text-center text-sm text-gray-500">Total: {filteredSongs.length} lagu</div>
      </div>
    </div>
  );
}
