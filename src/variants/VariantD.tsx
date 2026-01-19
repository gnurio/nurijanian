import React, { useState } from 'react';
import { Circle, ChevronRight, Menu } from 'lucide-react';
import { profile, projects, writing, quickLinks, socialLinks, appearances } from '../data/fixtures';

/**
 * VARIANT D: Linkinus-Style (Mac IRC Client)
 *
 * Rationale: Cleaner, Mac-inspired IRC aesthetic:
 * - Refined sidebar navigation
 * - Polished typography
 * - Subtle status indicators
 * - Modern Mac UI patterns with IRC structure
 *
 * Key Features:
 * - Two-column layout (sidebar + content)
 * - Colored status dots
 * - Refined spacing and typography
 * - Softer color palette
 */

type Section = 'about' | 'projects' | 'writing' | 'links';

export default function VariantD() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about' as Section, label: 'About', color: 'bg-blue-500' },
    { id: 'projects' as Section, label: 'Projects', color: 'bg-green-500' },
    { id: 'writing' as Section, label: 'Writing', color: 'bg-purple-500' },
    { id: 'links' as Section, label: 'Links', color: 'bg-orange-500' },
  ];

  return (
    <div className="h-screen flex bg-[#f5f5f5] font-mono text-sm">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        aria-label="Toggle menu"
      >
        <Menu size={18} strokeWidth={2.5} className="text-gray-700" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative w-64 h-screen bg-[#e8e8e8] border-r border-[#d0d0d0] flex flex-col z-40 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Header */}
        <div className="px-4 py-4 border-b border-[#d0d0d0]">
          <div className="font-bold text-gray-800 mb-1">{profile.name}</div>
          <div className="flex items-center gap-2">
            <Circle size={8} fill="#34d399" className="text-[#34d399]" />
            <span className="text-xs text-gray-600">{profile.status}</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-3">
          <div className="px-3 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Channels</div>
          <div className="space-y-0.5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 flex items-center gap-3 transition-all ${
                  activeSection === section.id
                    ? 'bg-[#d0d0d0] text-gray-900'
                    : 'text-gray-700 hover:bg-[#dddddd]'
                }`}
              >
                <Circle size={8} fill={activeSection === section.id ? '#3b82f6' : '#9ca3af'} className={activeSection === section.id ? 'text-blue-500' : 'text-gray-400'} />
                <span>#{section.label.toLowerCase()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-[#d0d0d0] space-y-1">
          <div className="text-xs text-gray-600">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-xs text-gray-500">{profile.location}</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white w-full">
        {/* Content Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Circle
              size={10}
              fill={sections.find(s => s.id === activeSection)?.color.replace('bg-', '#') || '#3b82f6'}
              className={sections.find(s => s.id === activeSection)?.color.replace('bg-', 'text-') || 'text-blue-500'}
            />
            <h2 className="text-lg font-bold text-gray-900">
              #{sections.find(s => s.id === activeSection)?.label.toLowerCase()}
            </h2>
          </div>
          <div className="hidden md:block text-xs text-gray-500">
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 sm:py-6">
          {activeSection === 'about' && (
            <div className="max-w-2xl space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{profile.name}</div>
                    <div className="text-sm text-gray-600">Product Manager</div>
                  </div>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {profile.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Status</div>
                  <div className="flex items-center gap-2">
                    <Circle size={8} fill="#34d399" className="text-[#34d399]" />
                    <span className="text-sm text-gray-700">{profile.status}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <div className="text-sm text-gray-700">{profile.location}</div>
                </div>
              </div>

              {/* Appearances */}
              {appearances.length > 0 && (
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Appearances</h3>
                  <div className="space-y-3">
                    {appearances.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-gray-200 hover:border-blue-500 pl-4 py-2 transition-all">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-gray-900 hover:text-blue-600 transition-colors block"
                        >
                          {item.title}
                        </a>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <span>{item.platform}</span>
                          <span>•</span>
                          <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="max-w-3xl space-y-4">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                      >
                        {project.title}
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                      {project.tags && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <Circle size={10} fill="#10b981" className="text-green-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'writing' && (
            <div className="max-w-3xl space-y-3">
              {writing.map((item, idx) => (
                <div
                  key={idx}
                  className="group border-l-2 border-gray-200 hover:border-purple-500 pl-4 py-2 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-900 hover:text-purple-600 transition-colors block"
                      >
                        {item.title}
                      </a>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>•</span>
                        <span className="capitalize">{item.type}</span>
                        {item.platform && (
                          <>
                            <span>•</span>
                            <span>{item.platform}</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'links' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 border border-gray-200 hover:border-gray-300 rounded-lg transition-all hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <Circle size={8} fill="#f59e0b" className="text-orange-500" />
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                            {link.label}
                          </div>
                          <div className="text-xs text-gray-500">{link.description}</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Social</h3>
                <div className="space-y-2">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 border border-gray-200 hover:border-gray-300 rounded-lg transition-all hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <Circle size={8} fill="#3b82f6" className="text-blue-500" />
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-xs text-gray-500">{link.handle}</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
