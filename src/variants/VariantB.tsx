import React, { useState } from 'react';
import { profile, projects, writing, quickLinks, socialLinks, appearances } from '../data/fixtures';

/**
 * VARIANT B: Terminal/Command Line
 *
 * Rationale: Pure terminal aesthetic with command-line interaction:
 * - Single column monospace layout
 * - Command prompt navigation
 * - ASCII art header
 * - Terminal color scheme (green on black)
 *
 * Key Features:
 * - Dark terminal background
 * - Prompt-style commands (> ls, > cat)
 * - Cursor blink effect
 * - Hacker/tech aesthetic
 */

type View = 'home' | 'projects' | 'writing' | 'links';

export default function VariantB() {
  const [currentView, setCurrentView] = useState<View>('home');

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-3 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-2 sm:space-y-4 text-xs sm:text-sm">
        {/* ASCII Art Header */}
        <pre className="hidden sm:block text-xs md:text-sm text-green-500 leading-tight">
{`   _____ _   _
  / ____| \\ | |
 | |  __|  \\| |
 | | |_ | . \` |
 | |__| | |\\  |
  \\_____|_| \\_|

  George Nurijanian
  Product Manager
  System online`}
        </pre>

        <div className="border-t border-green-800 pt-4">
          <div className="text-green-600 text-xs mb-2">[{getCurrentTime()}] System initialized</div>

          {/* Command Navigation */}
          <div className="space-y-2 mb-6">
            <div className="text-green-500">
              <span className="text-green-600">user@portfolio:~$</span> help
            </div>
            <div className="ml-4 text-xs space-y-1 text-green-400/80">
              <div>Available commands:</div>
              <div className="ml-4">
                <button onClick={() => setCurrentView('home')} className="hover:text-green-300 transition-colors">
                  • about    - Display user information
                </button>
              </div>
              <div className="ml-4">
                <button onClick={() => setCurrentView('projects')} className="hover:text-green-300 transition-colors">
                  • projects - List projects and applications
                </button>
              </div>
              <div className="ml-4">
                <button onClick={() => setCurrentView('writing')} className="hover:text-green-300 transition-colors">
                  • writing  - Show recent articles
                </button>
              </div>
              <div className="ml-4">
                <button onClick={() => setCurrentView('links')} className="hover:text-green-300 transition-colors">
                  • links    - Quick links and social
                </button>
              </div>
            </div>
          </div>

          {/* Current Command Output */}
          <div className="border-t border-green-900 pt-4 space-y-3">
            {currentView === 'home' && (
              <>
                <div className="text-green-500">
                  <span className="text-green-600">user@portfolio:~$</span> cat about.txt
                </div>
                <div className="ml-4 space-y-2 text-green-400/90">
                  <div>NAME: {profile.name}</div>
                  <div>ROLE: Product Manager</div>
                  <div>FOCUS: AI era product development</div>
                  <div>LOCATION: {profile.location}</div>
                  <div>STATUS: {profile.status}</div>
                  <div className="pt-2 border-t border-green-900">
                    {profile.bio}
                  </div>
                  {appearances.length > 0 && (
                    <div className="pt-2 border-t border-green-900 space-y-1">
                      <div className="text-green-500/80">APPEARANCES:</div>
                      {appearances.map((item, idx) => (
                        <div key={idx} className="ml-2">
                          → <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                            {item.title}
                          </a>
                          <span className="text-xs text-green-600 ml-2"># {item.platform}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}

            {currentView === 'projects' && (
              <>
                <div className="text-green-500">
                  <span className="text-green-600">user@portfolio:~$</span> ls -la ~/projects/
                </div>
                <div className="ml-4 space-y-4">
                  {projects.map((project, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-green-400">
                        drwxr-xr-x  1 user  staff  {String(idx + 1).padStart(4, '0')}  {new Date().toLocaleDateString()} {' '}
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                          {project.title}
                        </a>
                      </div>
                      <div className="ml-4 text-xs text-green-400/70">
                        {project.description}
                      </div>
                      {project.tags && (
                        <div className="ml-4 text-xs text-green-600">
                          [tags: {project.tags.join(', ')}]
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {currentView === 'writing' && (
              <>
                <div className="text-green-500">
                  <span className="text-green-600">user@portfolio:~$</span> cat ~/writing/*.md
                </div>
                <div className="ml-4 space-y-4">
                  {writing.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-green-400">
                        <span className="text-green-600">[{item.date}]</span>{' '}
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                          {item.title}
                        </a>
                        <span className="text-xs text-green-600 ml-2">({item.type})</span>
                      </div>
                      <div className="ml-4 text-xs text-green-400/70">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {currentView === 'links' && (
              <>
                <div className="text-green-500">
                  <span className="text-green-600">user@portfolio:~$</span> cat ~/.shortcuts
                </div>
                <div className="ml-4 space-y-3">
                  <div>
                    <div className="text-green-500 mb-2"># Quick Links</div>
                    {quickLinks.map((link, idx) => (
                      <div key={idx} className="text-green-400 ml-2">
                        → <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                          {link.label}
                        </a>
                        <span className="text-xs text-green-600 ml-2"># {link.description}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-green-900">
                    <div className="text-green-500 mb-2"># Social</div>
                    {socialLinks.map((link, idx) => (
                      <div key={idx} className="text-green-400 ml-2">
                        → <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                          {link.name}
                        </a>
                        <span className="text-xs text-green-600 ml-2"># {link.handle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Cursor */}
            <div className="text-green-500 pt-4">
              <span className="text-green-600">user@portfolio:~$</span>
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-green-900 pt-4 text-xs text-green-600">
          <div>System uptime: {getCurrentTime()}</div>
          <div>Type 'help' for available commands</div>
        </div>
      </div>
    </div>
  );
}
