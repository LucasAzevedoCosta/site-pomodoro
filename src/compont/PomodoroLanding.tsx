import { useState } from "react";
import { Download, Clock, Check, ChevronDown, Moon, Sun } from "lucide-react";
import { FaLinux } from "react-icons/fa";

export const PomodoroLanding = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [expandedUpdate, setExpandedUpdate] = useState<number | null>(0);
  const [darkMode, setDarkMode] = useState(true);

  const themes = [
    { name: "Dark-academia", image: "/src/assets/dark.png" },
    { name: "Cyberpunk", image: "/src/assets/cyber.png" },
    { name: "Midnight", image: "/src/assets/midnight.png" },
    { name: "Emerald", image: "/src/assets/emerald.png" },
  ];

  const updates = [
    {
      version: "v1.0.0",
      date: "01 Jan 2026",
      changes: [
        "Lançamento inicial",
        "Temas Dark-academia, Cyberpunk, Midnight e Emerald",
        "Timer Pomodoro completo",
        "Configurações personalizáveis",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors ${darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Header */}
      <nav
        className={`border-b transition-colors ${darkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-600" />
            <span
              className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
            >
              Pomodoro Timer
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#demo"
              className={`transition ${darkMode ? "text-slate-300 hover:text-purple-400" : "text-slate-600 hover:text-purple-600"}`}
            >
              Demonstração
            </a>
            <a
              href="#download"
              className={`transition ${darkMode ? "text-slate-300 hover:text-purple-400" : "text-slate-600 hover:text-purple-600"}`}
            >
              Download
            </a>
            <a
              href="#updates"
              className={`transition ${darkMode ? "text-slate-300 hover:text-purple-400" : "text-slate-600 hover:text-purple-600"}`}
            >
              Atualizações
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition ${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"}`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-purple-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className={`border-b transition-colors ${darkMode ? "bg-linear-to-b from-purple-950/30 to-slate-900 border-slate-800" : "bg-linear-to-b from-purple-50 to-white border-slate-200"}`}
      >
        <div className="container mx-auto px-6 py-24 text-center">
          <h1
            className={`text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Foco e Produtividade Simplificados
          </h1>
          <p
            className={`text-xl mb-12 max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Um timer Pomodoro minimalista e elegante para ajudar você a manter o
            foco nas tarefas importantes
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-sm"
          >
            <Download className="w-5 h-5" />
            Baixar Agora
          </a>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="container mx-auto px-6 py-20">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          Demonstração
        </h2>
        <p
          className={`text-center mb-12 max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Explore os diferentes temas disponíveis no aplicativo
        </p>

        <div className="mb-8 flex justify-center gap-4 flex-wrap">
          {themes.map((theme, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTheme(idx)}
              className={`rounded-lg overflow-hidden border transition focus:outline-none ${
                selectedTheme === idx
                  ? "border-purple-500 ring-2 ring-purple-500"
                  : darkMode
                    ? "border-slate-700 hover:border-purple-500"
                    : "border-slate-200 hover:border-purple-300"
              }`}
            >
              <img
                src={theme.image}
                alt={theme.name}
                className="w-28 h-16 object-cover"
              />
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div
            className={`rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="aspect-video relative">
              <img
                src={themes[selectedTheme].image}
                alt={themes[selectedTheme].name}
                className="w-full h-full object-cover"
              />

            </div>
          </div>

          <div
            className={`rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
          >
            <div
              className={`aspect-video flex items-center justify-center ${darkMode ? "bg-slate-900" : "bg-slate-100"}`}
            >
              <div className="text-center">
                <div
                  className={`text-xl mb-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  Configurações
                </div>
                <div
                  className={`text-sm ${darkMode ? "text-slate-600" : "text-slate-500"}`}
                >
                  Personalize seu timer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download" className="container mx-auto px-6 py-20">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          Downloads
        </h2>
        <p
          className={`text-center mb-12 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
          Escolha a versão para o seu sistema operacional
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            className={`border rounded-lg p-8 text-center hover:shadow-md transition ${darkMode ? "bg-slate-800 border-slate-700 hover:border-purple-500" : "bg-white border-slate-200 hover:border-purple-200"}`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${darkMode ? "bg-purple-950/50" : "bg-purple-50"}`}
            >
              <svg
                className={`w-10 h-10 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3.449 9.75 2.1v9.4H0V3.449zm10.95-1.5L24 0v11.5H10.95V1.949zM0 12.55h9.75v9.4L0 20.55v-8zM10.95 12.55H24V24l-13.05-1.95v-9.5z" />
              </svg>
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Windows
            </h3>
            <p
              className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Windows 10/11
            </p>
            <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm shadow-sm">
              Download .exe
            </button>
          </div>

          <div
            className={`border rounded-lg p-8 text-center hover:shadow-md transition ${darkMode ? "bg-slate-800 border-slate-700 hover:border-purple-500" : "bg-white border-slate-200 hover:border-purple-200"}`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${darkMode ? "bg-purple-950/50" : "bg-purple-50"}`}
            >
              <svg
                className={`w-10 h-10 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              macOS
            </h3>
            <p
              className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              macOS 11+
            </p>
            <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm shadow-sm">
              Download .dmg
            </button>
          </div>

          <div
            className={`border rounded-lg p-8 text-center hover:shadow-md transition ${darkMode ? "bg-slate-800 border-slate-700 hover:border-purple-500" : "bg-white border-slate-200 hover:border-purple-200"}`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${darkMode ? "bg-purple-950/50" : "bg-purple-50"}`}
            >
              <FaLinux
                className={`w-10 h-10 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
              />
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Linux
            </h3>
            <p
              className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Ubuntu/Debian
            </p>
            <button className="w-full px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm shadow-sm">
              Download .AppImage
            </button>
          </div>
        </div>
      </div>

      {/* Updates */}
      <div
        id="updates"
        className={`border-t py-20 transition-colors ${darkMode ? "bg-slate-800/50 border-slate-800" : "bg-white border-slate-200"}`}
      >
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl font-bold text-center mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Atualizações
          </h2>
          <p
            className={`text-center mb-12 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Confira o histórico de melhorias e novos recursos
          </p>
          <div className="max-w-3xl mx-auto space-y-3">
            {updates.map((update, idx) => (
              <div
                key={idx}
                className={`border rounded-lg overflow-hidden transition ${darkMode ? "bg-slate-800 border-slate-700 hover:border-purple-500" : "bg-white border-slate-200 hover:border-purple-200"}`}
              >
                <button
                  onClick={() =>
                    setExpandedUpdate(expandedUpdate === idx ? null : idx)
                  }
                  className={`w-full p-5 flex items-center justify-between transition text-left ${darkMode ? "hover:bg-slate-700" : "hover:bg-slate-50"}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-semibold text-sm ${darkMode ? "bg-purple-950/50 text-purple-400" : "bg-purple-100 text-purple-700"}`}
                    >
                      {update.version.replace("v", "")}
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                      >
                        {update.version}
                      </div>
                      <div
                        className={`text-sm ${darkMode ? "text-slate-500" : "text-slate-500"}`}
                      >
                        {update.date}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${expandedUpdate === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {expandedUpdate === idx && (
                  <div
                    className={`px-5 pb-5 border-t ${darkMode ? "border-slate-700" : "border-slate-100"}`}
                  >
                    <div className="pt-4 space-y-2">
                      {update.changes.map((change, changeIdx) => (
                        <div key={changeIdx} className="flex items-start gap-3">
                          <Check
                            className={`w-4 h-4 mt-0.5 shrink-0 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                          />
                          <span
                            className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                          >
                            {change}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`border-t py-8 transition-colors ${darkMode ? "border-slate-800 bg-linear-to-b from-slate-900 to-purple-950/30" : "border-slate-200 bg-linear-to-b from-white to-purple-50"}`}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock
              className={`w-5 h-5 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
            />
            <span
              className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Pomodoro Timer
            </span>
          </div>
          <p
            className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Desenvolvido para aumentar sua produtividade
          </p>
        </div>
      </footer>
    </div>
  );
};
