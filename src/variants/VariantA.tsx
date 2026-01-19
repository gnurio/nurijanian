import React, { useState } from 'react';
import { ArrowRight, Circle } from 'lucide-react';
import { profile, projects, writing, quickLinks, socialLinks, appearances } from '../data/fixtures';

/**
 * VARIANT A: Classic IRC 3-Panel Layout
 *
 * Rationale: Mimics traditional IRC clients (IceChat style) with:
 * - Left sidebar: Channel/section navigation
 * - Center: Main "chat log" with timestamped entries
 * - Right sidebar: User info and status
 *
 * Key Features:
 * - Three-column panel layout
 * - Monospace timestamps [HH:MM]
 * - Channel-style navigation (#work, #writing, #about)
 * - Compact information density
 */

type Channel = 'about' | 'projects' | 'writing' | 'links';

export default function VariantA() {
  const [activeChannel, setActiveChannel] = useState<Channel>('about');
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  const channels = [
    { id: 'about' as Channel, label: '#about', count: 1 },
    { id: 'projects' as Channel, label: '#projects', count: projects.length },
    { id: 'writing' as Channel, label: '#writing', count: writing.length },
    { id: 'links' as Channel, label: '#links', count: quickLinks.length + socialLinks.length },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#f0f0f0] font-mono text-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-b from-[#ddd] to-[#ccc] border-b-2 border-[#999] px-2 sm:px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="font-bold text-gray-800">
          <span className="sm:hidden">{profile.name.split(' ').map(n => n[0]).join('')}</span>
          <span className="hidden sm:inline">{profile.name} - IRC Portfolio</span>
        </div>
        <div className="text-xs text-gray-600">{currentTime}</div>
      </div>

      {/* Mobile Channel Tabs */}
      <div className="md:hidden flex overflow-x-auto border-b border-[#ccc] bg-white">
        {channels.map((channel) => (
          <button
            key={channel.id}
            onClick={() => setActiveChannel(channel.id)}
            className={`px-4 py-2 text-xs whitespace-nowrap border-r border-[#ccc] ${
              activeChannel === channel.id ? 'bg-[#0066cc] text-white' : 'text-gray-700'
            }`}
          >
            {channel.label}
          </button>
        ))}
      </div>

      {/* Main 3-Panel Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Channels */}
        <div className="hidden md:flex md:w-48 lg:w-48 bg-white border-r-2 border-[#ccc] flex-col">
          <div className="bg-[#e5e5e5] px-3 py-2 border-b border-[#ccc] font-bold text-xs">CHANNELS</div>
          <div className="flex-1 overflow-y-auto">
            {channels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#e5f3ff] transition-colors ${
                  activeChannel === channel.id ? 'bg-[#0066cc] text-white hover:bg-[#0066cc]' : ''
                }`}
              >
                <span className="flex items-center gap-2">
                  <Circle size={8} fill={activeChannel === channel.id ? 'white' : '#0066cc'} color={activeChannel === channel.id ? 'white' : '#0066cc'} />
                  {channel.label}
                </span>
                <span className="text-xs opacity-70">({channel.count})</span>
              </button>
            ))}
          </div>
          <div className="border-t border-[#ccc] p-2 bg-[#f8f8f8]">
            <div className="text-xs text-gray-600">Status: {profile.status}</div>
          </div>
        </div>

        {/* Center - Main Content (Chat Log Style) */}
        <div className="flex-1 bg-white flex flex-col">
          <div className="bg-[#e5e5e5] px-4 py-2 border-b border-[#ccc] font-bold text-xs">
            {channels.find(c => c.id === activeChannel)?.label.toUpperCase()}
          </div>
          <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3">
            {activeChannel === 'about' && (
              <>
                <div className="flex gap-3">
                  <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                  <div>
                    <span className="text-[#0066cc] font-bold">*{profile.name}</span>
                    <span className="text-gray-700"> has joined the channel</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                  <div>
                    <span className="text-[#0066cc] font-bold">&lt;{profile.name}&gt;</span>
                    <span className="text-gray-800"> {profile.bio}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                  <div>
                    <span className="text-gray-500 italic">* Currently: {profile.status}</span>
                  </div>
                </div>
                {appearances.length > 0 && (
                  <>
                    <div className="flex gap-3 mt-4">
                      <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                      <div>
                        <span className="text-[#0066cc] font-bold">&lt;{profile.name}&gt;</span>
                        <span className="text-gray-800"> Featured appearances:</span>
                      </div>
                    </div>
                    {appearances.map((item, idx) => (
                      <div key={idx} className="flex gap-3 ml-4 sm:ml-16">
                        <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                        <div>
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {item.title}
                          </a>
                          <span className="text-gray-600 text-xs ml-2">- {item.platform}</span>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}

            {activeChannel === 'projects' && (
              <>
                <div className="flex gap-3">
                  <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                  <div>
                    <span className="text-[#0066cc] font-bold">&lt;{profile.name}&gt;</span>
                    <span className="text-gray-800"> Here's what I've been building:</span>
                  </div>
                </div>
                {projects.map((project, idx) => (
                  <div key={idx} className="ml-4 sm:ml-16 space-y-1">
                    <div className="flex gap-3">
                      <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                      <div>
                        <span className="text-[#0066cc] font-bold">&lt;{profile.name}&gt;</span>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                          {project.title}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                      <div className="text-gray-700 ml-3">→ {project.description}</div>
                    </div>
                    {project.tags && (
                      <div className="flex gap-3">
                        <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                        <div className="text-xs text-gray-500 ml-3">tags: {project.tags.join(', ')}</div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}

            {activeChannel === 'writing' && (
              <>
                <div className="flex gap-3">
                  <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                  <div>
                    <span className="text-[#0066cc] font-bold">&lt;{profile.name}&gt;</span>
                    <span className="text-gray-800"> Recent writing:</span>
                  </div>
                </div>
                {writing.map((item, idx) => (
                  <div key={idx} className="ml-4 sm:ml-16 space-y-1">
                    <div className="flex gap-3">
                      <span className="hidden sm:inline text-gray-500">[{item.date}]</span>
                      <div>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {item.title}
                        </a>
                        <span className="text-xs text-gray-500 ml-2">({item.type})</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                      <div className="text-gray-700 ml-3 text-xs">→ {item.description}</div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeChannel === 'links' && (
              <>
                <div className="flex gap-3">
                  <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                  <div>
                    <span className="text-[#0066cc] font-bold">&lt;{profile.name}&gt;</span>
                    <span className="text-gray-800"> Quick links:</span>
                  </div>
                </div>
                {quickLinks.map((link, idx) => (
                  <div key={idx} className="flex gap-3 ml-4 sm:ml-16">
                    <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                    <div>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {link.label}
                      </a>
                      <span className="text-gray-600 text-xs ml-2">- {link.description}</span>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 mt-4">
                  <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                  <div>
                    <span className="text-[#0066cc] font-bold">&lt;{profile.name}&gt;</span>
                    <span className="text-gray-800"> Social:</span>
                  </div>
                </div>
                {socialLinks.map((link, idx) => (
                  <div key={idx} className="flex gap-3 ml-4 sm:ml-16">
                    <span className="hidden sm:inline text-gray-500">[{currentTime}]</span>
                    <div>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {link.name}
                      </a>
                      <span className="text-gray-600 text-xs ml-2">({link.handle})</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Right Sidebar - User Info */}
        <div className="hidden lg:flex lg:w-56 bg-white border-l-2 border-[#ccc] flex-col">
          <div className="bg-[#e5e5e5] px-3 py-2 border-b border-[#ccc] font-bold text-xs">USER INFO</div>
          <div className="p-4 space-y-3">
            <div>
              <div className="text-xs text-gray-500 mb-1">Nickname</div>
              <div className="font-bold text-[#0066cc]">{profile.name}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Status</div>
              <div className="flex items-center gap-2">
                <Circle size={8} fill="#00cc00" color="#00cc00" />
                <span className="text-xs">{profile.status}</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Location</div>
              <div className="text-xs">{profile.location}</div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="text-xs text-gray-500 mb-2">Active in</div>
              <div className="text-xs space-y-1">
                {channels.map(ch => (
                  <div key={ch.id} className="text-gray-700">{ch.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
