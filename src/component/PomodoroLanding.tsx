import { useState } from "react";
import { Download, Clock, Check, ChevronDown, Moon, Sun } from "lucide-react";
import { FaLinux } from "react-icons/fa";

export const PomodoroLanding = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [expandedUpdate, setExpandedUpdate] = useState<number | null>(0);
  const [darkMode, setDarkMode] = useState(true);

  const themes = [
    { name: "Dark-academia", image: "/assets/dark.png" },
    { name: "Cyberpunk", image: "/assets/cyber.png" },
    { name: "Midnight", image: "/assets/midnight.png" },
    { name: "Emerald", image: "/assets/emerald.png" },
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

        {/* Miniaturas de Temas */}
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
                className="w-28 h-16 object-contain bg-black/5" // object-contain evita o corte
              />
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Imagem do Tema Selecionado */}
          <div
            className={`rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="aspect-video relative bg-slate-900/5 flex items-center justify-center">
              <img
                src={themes[selectedTheme].image}
                alt={themes[selectedTheme].name}
                className="w-full h-full object-center"
              />
            </div>
          </div>

          <div
            className={`rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <div
              className={`aspect-video relative flex items-center justify-center ${darkMode ? "bg-slate-900" : "bg-slate-100"}`}
            >
              <img
                src="/assets/settings.png"
                alt="Configuração do Timer"
                className="w-full h-full object-center"
              />
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

          {/* Card macOS - Em Breve */}
          <div
            className={`border rounded-lg p-8 text-center transition ${
              darkMode
                ? "bg-slate-800/50 border-slate-700"
                : "bg-gray-50 border-slate-200"
            }`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                darkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
            >
              <svg
                className={`w-10 h-10 ${darkMode ? "text-slate-500" : "text-slate-400"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h3
              className={`text-lg font-semibold mb-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}
            >
              macOS
            </h3>
            <p
              className={`text-sm mb-4 ${darkMode ? "text-slate-600" : "text-slate-400"}`}
            >
              Indisponível no momento
            </p>
            <button
              disabled
              className="w-full px-6 py-2 bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-500 rounded-lg text-sm shadow-sm cursor-not-allowed"
            >
              Em breve
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

      {/* Footer Section */}
      <footer
        className={`border-t py-12 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            {/* Coluna 1: Nome e Copyright */}
            <div>
              <p
                className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-purple-500">
                  Lucas Azevedo Costa
                </span>
              </p>
              <p
                className={`text-xs mt-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}
              >
                Todos os direitos reservados.
              </p>
            </div>

            {/* Coluna 2: Contatos */}
            <div className="flex flex-col items-center">
              <h4
                className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? "text-slate-300" : "text-slate-800"}`}
              >
                Contatos
              </h4>
              <div className="flex gap-6">
                <a
                  href="https://lucasazevedo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Meu Portfólio"
                  className={`transition-transform hover:scale-110 hover:text-purple-500 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/lucas-azevedo-costa-9b469734a"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className={`transition-transform hover:scale-110 hover:text-blue-500 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="mailto:lucasdev.azevedo@gmail.com"
                  title="Enviar E-mail"
                  className={`transition-transform hover:scale-110 hover:text-red-500 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
