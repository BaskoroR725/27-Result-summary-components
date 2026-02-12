import "./App.css";

// Di sini kita bisa import data.json atau hardcode dulu isinya
function App() {
  return (
    <main className="min-h-screen bg-[#f2f4ff] flex items-center justify-center font-['Hanken_Grotesk']">
      {/* Card Utama */}
      <div className="bg-white w-full max-w-[736px] flex flex-col md:flex-row md:rounded-[32px] shadow-2xl overflow-hidden">
        
        {/* Bagian Kiri: Your Result */}
        <section className="bg-gradient-to-b from-[#7857ff] to-[#2e2be9] text-white p-10 flex flex-col items-center gap-6 rounded-b-[32px] md:rounded-[32px] md:w-1/2 text-center">
          <h1 className="text-[#c8c7ff] text-2xl font-bold">Your Result</h1>
          
          {/* Skor Lingkaran */}
          <div className="bg-gradient-to-b from-[#4e21ca] to-transparent w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center">
            <span className="text-7xl font-extrabold">76</span>
            <span className="text-[#c8c7ff] opacity-50">of 100</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Great</h2>
            <p className="text-[#c8c7ff] text-lg px-4">
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
        </section>

        {/* Bagian Kanan: Summary */}
        <section className="p-10 flex flex-col gap-8 md:w-1/2">
          <h2 className="text-2xl font-bold text-[#303b5a]">Summary</h2>
          
          <ul className="flex flex-col gap-4">
            {/* Kita buat satu contoh dulu, nanti bisa kita map dari data.json */}
            <li className="flex justify-between items-center p-4 bg-[#fff6f5] rounded-xl">
              <div className="flex gap-3 items-center">
                {/* Kamu bisa masukkan icon di sini nanti */}
                <span className="text-[#ff5757] font-bold">Reaction</span>
              </div>
              <p className="font-bold text-[#303b5a]">
                80 <span className="text-[#989bab]">/ 100</span>
              </p>
            </li>
            
            {/* Coba tambahkan <li> yang lain untuk Memory, Verbal, dan Visual ya! */}
            {/* Gunakan warna yang berbeda sesuai style-guide */}
          </ul>

          <button className="bg-[#303b5a] text-white py-4 rounded-full font-bold hover:bg-gradient-to-b hover:from-[#7857ff] hover:to-[#2e2be9] transition-all">
            Continue
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;