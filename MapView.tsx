import { College } from '../utils/mockData';
import { MapPin, ExternalLink } from 'lucide-react';

interface MapViewProps {
  colleges: College[];
}

export function MapView({ colleges }: MapViewProps) {
  const categoryColors = {
    reach: 'bg-orange-500',
    target: 'bg-green-500',
    safety: 'bg-purple-500',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Google Maps Integration Placeholder */}
      <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl mb-2">Google Maps Integration</h3>
          <p className="text-gray-600 mb-4 max-w-md">
            This view integrates with Google Maps API to display college locations interactively.
            Click "View on Google Maps" on any college to explore.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=universities+in+USA`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Open in Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Map Markers Simulation */}
        <div className="absolute inset-0 pointer-events-none">
          {colleges.slice(0, 8).map((college, index) => (
            <div
              key={college.id}
              className="absolute"
              style={{
                left: `${15 + (index % 4) * 20}%`,
                top: `${20 + Math.floor(index / 4) * 40}%`,
              }}
            >
              <div className={`${categoryColors[college.category]} w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse`} />
            </div>
          ))}
        </div>
      </div>

      {/* Legend and Quick Links */}
      <div className="p-6 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm">Reach Schools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm">Target Schools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm">Safety Schools</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {colleges.slice(0, 4).map((college) => (
            <a
              key={college.id}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(college.name + ' ' + college.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${categoryColors[college.category]}`} />
              <div className="flex-1 min-w-0">
                <div className="text-sm truncate">{college.name}</div>
                <div className="text-xs text-gray-500 truncate">{college.location}</div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
