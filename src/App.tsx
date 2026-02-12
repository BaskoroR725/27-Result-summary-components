import "./App.css";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";
import data from "../data.json";


const categoryConfig: Record<string, { bg: string; text: string; icon: string }> = {

  Reaction: { bg: "bg-[hsla(0,100%,67%,0.1)]", text: "text-[#ff5757]", icon: iconReaction },

  Memory: { bg: "bg-[hsla(39,100%,56%,0.1)]", text: "text-[#ffb01e]", icon: iconMemory },

  Verbal: { bg: "bg-[hsla(166,100%,37%,0.1)]", text: "text-[#00bd91]", icon: iconVerbal },

  Visual: { bg: "bg-[hsla(234,85%,45%,0.1)]", text: "text-[#1125d4]", icon: iconVisual },

};

function App() {
  return (
    <main className="min-h-screen bg-[#f2f4ff] flex flex-col items-center justify-center font-['Hanken_Grotesk']">
      <div className="bg-white w-full max-w-[736px] flex flex-col md:flex-row md:rounded-[32px] shadow-2xl overflow-hidden">
        {/* Left card */}
        <section className="bg-gradient-to-b from-[#7857ff] to-[#2e2be9] text-white p-10 flex flex-col items-center gap-6 rounded-b-[32px] md:rounded-[32px] md:w-1/2 text-center">
          <h1 className="text-[#c8c7ff] text-2xl font-bold">Your Result</h1>
          {/* circle */}
          <div className="bg-gradient-to-b from-[#4e21ca] to-transparent w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center">
            <span className="text-7xl font-extrabold">76</span>
            <span className="text-[#c8c7ff] opacity-50"> of 100</span>
          </div>
          {/* text */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Great</h2>
            <p className="text-[#c8c7ff] text-lg px-4">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>

        {/* Right card */}
        <section className="p-10 flex flex-col gap-8 md:w-1/2">
          <h2 className="text-2xl font-bold text-[#303b5a]">Summary</h2>

          <ul className="flex flex-col gap-4">
              {data.map((item) => {
              const config = categoryConfig[item.category];
              return (
                <li key={item.category} className={`flex justify-between items-center p-4 ${config.bg} rounded-xl`}>
                  <div className="flex gap-3 items-center">
                    <img src={config.icon} alt="" />
                    <span className={`${config.text} font-bold`}>{item.category}</span>
                  </div>
                  <p className="font-bold text-[#303b5a]">
                    {item.score} <span className="text-[#989bab]">/ 100</span>
                  </p>
                </li>
              );
            })}
          </ul>
          <button className="bg-[#303b5a] text-white py-4 rounded-full font-bold hover:bg-gradient-to-b hover:from-[#7857ff] hover:to-[#2e2be9] transition-all">
            Continue
          </button>
        </section>
      </div>

      <footer className="mt-8 mb-4 md:absolute md:bottom-2 w-full text-center text-xs text-[#303b5a]">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="font-bold hover:text-[#7857ff] transition-colors"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/BaskoroR725"
          className="font-bold hover:text-[#7857ff] transition-colors text-blue-300"
        >
          Baskoro Ramadhan
        </a>
        .
      </footer>
    </main>
  );
}

export default App;
