import React from 'react';
import LinkList from './components/LinkList';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          <section className="py-8 md:py-12 text-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">George Nurijanian</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto jacquard-12-regular">
              nobody
            </p>
          </section>
          
          <LinkList />
        </div>
      </main>
    </div>
  );
}

export default App;