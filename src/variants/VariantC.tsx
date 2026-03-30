import React, { useState } from 'react';
import { Minus, Square, X, Folder, FileText, User, BookOpen } from 'lucide-react';
import { profile, projects, writing, quickLinks, socialLinks, appearances, exaptationDefinition, exaptationEtymology, exaptationExamples } from '../data/fixtures';

/**
 * VARIANT C: Windows 95/98 Style
 *
 * Rationale: Classic desktop OS window manager aesthetic:
 * - Multiple windows with title bars
 * - Toolbar with icon buttons
 * - Classic window controls (minimize, maximize, close)
 * - Desktop-style layout
 *
 * Key Features:
 * - Windowed interface
 * - Beveled borders and buttons
 * - Taskbar-style navigation
 * - Nostalgic OS UI patterns
 */

type WindowType = 'about' | 'projects' | 'writing' | 'curiosities';

export default function VariantC() {
  const [activeWindow, setActiveWindow] = useState<WindowType>('about');
  const [curiositySubpage, setCuriositySubpage] = useState<string | null>(null);

  const windows = [
    { id: 'about' as WindowType, title: 'About.txt', icon: User },
    { id: 'projects' as WindowType, title: 'My Projects', icon: Folder },
    { id: 'writing' as WindowType, title: 'Writing', icon: FileText },
    { id: 'curiosities' as WindowType, title: 'Curiosities', icon: BookOpen },
  ];

  const Window = ({ type, title, icon: Icon, children }: { type: WindowType; title: string; icon: any; children: React.ReactNode }) => {
    const isActive = activeWindow === type;

    return (
      <div
        className={`${isActive ? 'block' : 'hidden'} bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-lg`}
        style={{ boxShadow: isActive ? '2px 2px 0 rgba(0,0,0,0.3)' : 'none' }}
      >
        {/* Title Bar */}
        <div className={`${isActive ? 'bg-gradient-to-r from-[#0000aa] to-[#1084d0]' : 'bg-[#808080]'} px-1 py-0.5 sm:py-1 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <Icon size={14} className="text-white" />
            <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#c0c0c0]'}`}>{title}</span>
          </div>
          <div className="flex gap-0.5">
            <button className="w-4 h-4 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black flex items-center justify-center hover:bg-[#d0d0d0]">
              <Minus size={10} />
            </button>
            <button className="w-4 h-4 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black flex items-center justify-center hover:bg-[#d0d0d0]">
              <Square size={8} />
            </button>
            <button className="w-4 h-4 bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black flex items-center justify-center hover:bg-[#d0d0d0]">
              <X size={10} />
            </button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="hidden md:block bg-[#c0c0c0] border-b border-[#808080] px-2 py-1">
          <div className="flex gap-4 text-sm">
            <button className="hover:bg-[#0000aa] hover:text-white px-2">File</button>
            <button className="hover:bg-[#0000aa] hover:text-white px-2">Edit</button>
            <button className="hover:bg-[#0000aa] hover:text-white px-2">View</button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-2 sm:p-4 font-mono text-xs sm:text-sm min-h-[300px] lg:min-h-[400px] max-h-screen lg:max-h-[500px] overflow-y-auto">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#008080] p-4 md:p-8">
      {/* Desktop Icons */}
      <div className="hidden lg:block absolute top-4 left-4 space-y-4">
        {windows.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveWindow(id)}
            onDoubleClick={() => setActiveWindow(id)}
            className={`flex flex-col items-center gap-1 p-2 ${activeWindow === id ? 'bg-[#0000aa]/20' : ''} hover:bg-black/10 transition-colors`}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Icon size={32} className="text-white drop-shadow-lg" strokeWidth={1.5} />
            </div>
            <span className="text-xs text-white font-bold drop-shadow-md text-center max-w-[80px]">
              {title}
            </span>
          </button>
        ))}
      </div>

      {/* Main Window Area */}
      <div className="w-full lg:max-w-3xl mx-auto mt-0 lg:mt-8 space-y-4">
        <Window type="about" title="About.txt" icon={User}>
          <div className="space-y-4">
            <div className="border-l-4 border-[#0000aa] pl-4">
              <div className="font-bold text-lg mb-2">{profile.name}</div>
              <div className="text-gray-700">Product Manager</div>
            </div>
            <div className="space-y-2 text-gray-800">
              <div>{profile.bio}</div>
              <div className="pt-2 border-t border-gray-300">
                <div className="text-sm"><span className="font-bold">Status:</span> {profile.status}</div>
                <div className="text-sm"><span className="font-bold">Location:</span> {profile.location}</div>
              </div>
            </div>

            <div className="border-t-2 border-[#808080] pt-4 space-y-4">
              <div>
                <div className="font-bold mb-2 text-[#0000aa]">Quick Links</div>
                <div className="space-y-2">
                  {quickLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-2 border-[#c0c0c0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-2 bg-white hover:bg-[#0000aa] hover:text-white transition-colors"
                    >
                      <div className="font-bold text-sm">{link.label}</div>
                      <div className="text-xs opacity-80">{link.description}</div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-bold mb-2 text-[#0000aa]">Social</div>
                <div className="space-y-2">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-2 border-[#c0c0c0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-2 bg-white hover:bg-[#0000aa] hover:text-white transition-colors"
                    >
                      <div className="font-bold text-sm">{link.name}</div>
                      <div className="text-xs opacity-80">{link.handle}</div>
                    </a>
                  ))}
                </div>
              </div>

              {appearances.length > 0 && (
                <div>
                  <div className="font-bold mb-2 text-[#0000aa]">Appearances</div>
                  <div className="space-y-2">
                    {appearances.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border-2 border-[#c0c0c0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-2 bg-white hover:bg-[#0000aa] hover:text-white transition-colors"
                      >
                        <div className="font-bold text-sm">{item.title}</div>
                        <div className="text-xs opacity-80">{item.platform} • {new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Window>

        <Window type="projects" title="My Projects" icon={Folder}>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="border-2 border-[#c0c0c0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-3 bg-[#f0f0f0]">
                <div className="flex items-start gap-3">
                  <Folder size={24} className="text-[#ffcc00] flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-700 hover:text-blue-900 hover:underline block mb-1"
                    >
                      {project.title}
                    </a>
                    <div className="text-sm text-gray-700 mb-2">{project.description}</div>
                    {project.tags && (
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 bg-white border border-[#808080] text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Window>

        <Window type="writing" title="Writing" icon={FileText}>
          <div className="space-y-4">
            {writing.map((item, idx) => (
              <div key={idx} className="border-b border-gray-300 pb-3 last:border-b-0">
                <div className="flex items-start gap-2 mb-1">
                  <FileText size={16} className="text-gray-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-700 hover:text-blue-900 hover:underline block"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mb-1 ml-6">
                  {item.date} • {item.type}
                  {item.platform && ` • ${item.platform}`}
                </div>
                <div className="text-sm text-gray-700 ml-6">{item.description}</div>
              </div>
            ))}
          </div>
        </Window>

        <Window type="curiosities" title="Curiosities" icon={BookOpen}>
          {curiositySubpage === null && (
            <div className="space-y-3">
              <div className="border-l-4 border-[#0000aa] pl-4 mb-4">
                <div className="font-bold text-base">Curiosities</div>
                <div className="text-xs text-gray-600 mt-1">Things I find interesting — collected here.</div>
              </div>
              <button
                onClick={() => setCuriositySubpage('exaptations')}
                className="w-full text-left border-2 border-[#c0c0c0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-3 bg-[#f0f0f0] hover:bg-[#e0e0ff] transition-colors flex items-center gap-3"
              >
                <FileText size={20} className="text-[#0000aa] flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm text-blue-700">Exaptations.txt</div>
                  <div className="text-xs text-gray-600">When things get repurposed for a totally different role</div>
                </div>
              </button>
            </div>
          )}

          {curiositySubpage === 'exaptations' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <button
                  onClick={() => setCuriositySubpage(null)}
                  className="border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#c0c0c0] px-3 py-0.5 text-xs hover:bg-[#d0d0d0] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
                >
                  ← Back
                </button>
                <span className="text-xs text-gray-600">Curiosities\Exaptations.txt</span>
              </div>
              <div className="border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white bg-white p-3 space-y-3">
                <div className="font-bold text-[#0000aa] text-sm">EXAPTATIONS</div>
                <div className="text-xs text-gray-700 leading-relaxed">{exaptationDefinition}</div>
                <div className="text-xs text-gray-500 italic border-t border-gray-300 pt-2">{exaptationEtymology}</div>
              </div>
              <div className="font-bold text-xs text-[#0000aa] mt-4">EXAMPLES</div>
              <div className="space-y-2">
                {exaptationExamples.map((example, idx) => (
                  <a
                    key={idx}
                    href={example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-2 border-[#c0c0c0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-2 bg-white hover:bg-[#0000aa] hover:text-white transition-colors group"
                  >
                    <div className="font-bold text-sm">{example.title}</div>
                    <div className="text-xs opacity-80 mt-1 leading-relaxed">{example.description}</div>
                    <div className="text-xs mt-1 opacity-60 group-hover:opacity-80">[{example.domain}]</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </Window>

      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#c0c0c0] border-t-2 border-white h-12 sm:h-10 px-1 flex items-center gap-1 pb-safe z-50">
        <button className="h-8 px-2 sm:px-3 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-white hover:border-b-white active:border-inset font-bold text-sm flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600"></div>
          <span className="hidden sm:inline">Start</span>
        </button>
        <div className="flex-1 flex gap-1 overflow-x-auto">
          {windows.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => setActiveWindow(id)}
              className={`h-8 px-2 sm:px-3 text-xs sm:text-sm border-2 whitespace-nowrap ${
                activeWindow === id
                  ? 'bg-white border-t-[#808080] border-l-[#808080] border-r-white border-b-white'
                  : 'bg-[#c0c0c0] border-t-white border-l-white border-r-[#808080] border-b-[#808080] hover:bg-[#d0d0d0]'
              } sm:truncate sm:max-w-[150px]`}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="h-8 px-3 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white text-sm flex items-center">
          {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}
