import { useState } from 'react';
import { College } from '../utils/mockData';
import { MapPin, Users, DollarSign, TrendingUp, ExternalLink, Heart, ChevronDown, ChevronUp } from 'lucide-react';

interface CollegeCardProps {
  college: College;
}

export function CollegeCard({ college }: CollegeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const categoryColors = {
    reach: 'border-orange-200 bg-orange-50',
    target: 'border-green-200 bg-green-50',
    safety: 'border-purple-200 bg-purple-50',
  };

  const categoryBadgeColors = {
    reach: 'bg-orange-500 text-white',
    target: 'bg-green-500 text-white',
    safety: 'bg-purple-500 text-white',
  };

  return (
    <div className={`bg-white border-2 rounded-xl overflow-hidden hover:shadow-lg transition-shadow ${categoryColors[college.category]}`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl">{college.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs ${categoryBadgeColors[college.category]}`}>
                {college.category.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {college.location}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {college.enrollment.toLocaleString()} students
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-2xl text-blue-600">{college.matchScore}%</div>
              <div className="text-xs text-gray-500">Match Score</div>
            </div>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-lg transition-colors ${
                isSaved ? 'bg-red-100 text-red-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <div>
              <div className="text-gray-600">Acceptance Rate</div>
              <div>{college.acceptanceRate}%</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <div>
              <div className="text-gray-600">Annual Tuition</div>
              <div>₹{college.tuition.toLocaleString()}</div>
            </div>
          </div>

          <div className="text-sm">
            <div className="text-gray-600">JEE Rank Range</div>
            <div>
              {college.testScores.jeeRankRange || 'N/A'}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {college.topPrograms.slice(0, 3).map((program) => (
            <span key={program} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
              {program}
            </span>
          ))}
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t space-y-3">
            <div>
              <h4 className="text-sm mb-1">About</h4>
              <p className="text-sm text-gray-700">{college.description}</p>
            </div>
            
            <div>
              <h4 className="text-sm mb-1">Top Programs</h4>
              <div className="flex flex-wrap gap-2">
                {college.topPrograms.map((program) => (
                  <span key={program} className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {program}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm mb-1">Campus Life</h4>
              <p className="text-sm text-gray-700">{college.campusLife}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Avg. Financial Aid:</span>{' '}
                <span>₹{college.avgFinancialAid.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">4-Year Grad Rate:</span>{' '}
                <span>{college.graduationRate}%</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(college.name + ' university')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(college.name + ' ' + college.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                View on Google Maps
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mt-4 w-full justify-center py-2 border-t"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More Details
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}