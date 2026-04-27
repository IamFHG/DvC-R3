/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <main className="min-h-screen bg-[#07110a] selection:bg-white selection:text-[#142d1b] flex items-center justify-center p-4 lg:p-0">
      <div className="relative w-full max-w-[1136px] bg-[#142d1b] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden">
        <Navbar />
        
        {/* Main Content Sections */}
        <Hero />
      </div>
    </main>
  );
}

