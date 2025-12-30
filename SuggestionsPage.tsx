import { useState } from 'react';
import { UserProfile } from '../App';
import { CollegeCard } from './CollegeCard';
import { MapView } from './MapView';
import { generateSuggestions, College } from '../utils/mockData';
import { ArrowLeft, Filter, Map, List, Download } from 'lucide-react';

interface SuggestionsPageProps {
  profile: UserProfile;
  onBackToProfile: () => void;
  onStartOver: () => void;
}

export function SuggestionsPage({ profile, onBackToProfile, onStartOver }: SuggestionsPageProps) {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [filterCategory, setFilterCategory] = useState<'all' | 'reach' | 'target' | 'safety'>('all');
  const [sortBy, setSortBy] = useState<'match' | 'acceptance' | 'tuition'>('match');

  const allSuggestions = generateSuggestions(profile);
  
  const filteredSuggestions = filterCategory === 'all' 
    ? allSuggestions 
    : allSuggestions.filter(college => college.category === filterCategory);

  const sortedSuggestions = [...filteredSuggestions].sort((a, b) => {
    if (sortBy === 'match') return b.matchScore - a.matchScore;
    if (sortBy === 'acceptance') return b.acceptanceRate - a.acceptanceRate;
    if (sortBy === 'tuition') return a.tuition - b.tuition;
    return 0;
  });

  const reachCount = allSuggestions.filter(c => c.category === 'reach').length;
  const targetCount = allSuggestions.filter(c => c.category === 'target').length;
  const safetyCount = allSuggestions.filter(c => c.category === 'safety').length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBackToProfile}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Edit Profile
              </button>
              <div>
                <h1 className="text-2xl">Your College Matches</h1>
                <p className="text-sm text-gray-600">
                  AI-powered suggestions based on your profile
                </p>
              </div>
            </div>
            <button
              onClick={onStartOver}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-1">{allSuggestions.length}</div>
            <div className="text-sm text-blue-100">Total Matches</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-1">{reachCount}</div>
            <div className="text-sm text-orange-100">Reach Schools</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-1">{targetCount}</div>
            <div className="text-sm text-green-100">Target Schools</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
            <div className="text-3xl mb-1">{safetyCount}</div>
            <div className="text-sm text-purple-100">Safety Schools</div>
          </div>
        </div>

        {/* Filters and View Toggle */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex gap-2">
                {(['all', 'reach', 'target', 'safety'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      filterCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="match">Match Score</option>
                <option value="acceptance">Acceptance Rate</option>
                <option value="tuition">Tuition (Low to High)</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 text-sm ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-4 py-2 text-sm border-l border-gray-300 ${
                    viewMode === 'map' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <Map className="w-4 h-4" />
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
                <Download className="w-4 h-4" />
                Export List
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {sortedSuggestions.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        ) : (
          <MapView colleges={sortedSuggestions} />
        )}
      </div>
    </div>
  );
}
