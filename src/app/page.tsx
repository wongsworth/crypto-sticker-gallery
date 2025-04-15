'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">@Wongsworths Ultimate Crypto Sticker Gallery</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name, category, or tag..."
          className="w-full p-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Image grid will go here */}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Selected sticker"
              width={800}
              height={800}
              className="w-full h-auto"
            />
            <a
              href={selectedImage}
              download
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
