import { useState } from 'react';
import { UserProfile } from '../App';
import { ArrowLeft, ArrowRight, User, BookOpen, Heart, DollarSign } from 'lucide-react';

interface ProfileFormProps {
  onSubmit: (profile: UserProfile) => void;
  initialProfile: UserProfile | null;
}

const MAJORS = [
  'Computer Science Engineering',
  'Electronics & Communication',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electrical Engineering',
  'Chemical Engineering',
  'Information Technology',
  'Biotechnology',
  'Aerospace Engineering',
  'Medicine (MBBS)',
  'B.Tech',
  'B.Com',
  'BBA',
  'B.Sc',
  'BCA',
  'Law (LLB)',
  'Architecture',
  'Pharmacy',
  'Agriculture',
  'Design',
];

const LOCATIONS = [
  'Delhi NCR',
  'Maharashtra',
  'Karnataka',
  'Tamil Nadu',
  'Telangana',
  'West Bengal',
  'Uttar Pradesh',
  'Rajasthan',
  'Gujarat',
  'Punjab',
  'Kerala',
  'Madhya Pradesh',
  'Anywhere in India',
];

const SCHOOL_TYPES = ['IIT', 'NIT', 'IIIT', 'Government College', 'Private University', 'Deemed University', 'State University'];

const ACTIVITIES = [
  'Sports',
  'Music',
  'Debate',
  'Student Government',
  'Volunteering',
  'Research',
  'Coding/Tech',
  'Art',
  'Theater',
  'Writing',
  'Science Olympiad',
  'Robotics',
  'NCC',
  'NSS',
];

const PERSONAL_INTERESTS = [
  'Technology & Innovation',
  'Entrepreneurship',
  'Research & Development',
  'Social Impact',
  'Creative Arts',
  'Sports & Fitness',
  'Leadership',
  'Cultural Activities',
  'Environmental Sustainability',
  'Teaching & Mentoring',
];

const LEARNING_STYLES = [
  'Hands-on / Practical',
  'Theoretical / Research-based',
  'Project-based Learning',
  'Collaborative / Group Work',
  'Independent Study',
];

const CAMPUS_ENVIRONMENTS = [
  'Urban - City Campus',
  'Suburban - Peaceful Environment',
  'Large Campus with Many Students',
  'Small Campus - Close-knit Community',
  'Campus with Nature & Greenery',
];

const PRIORITY_FACTORS = [
  'Placement Opportunities',
  'Research Facilities',
  'International Exposure',
  'Entrepreneurship Support',
  'Campus Infrastructure',
  'Alumni Network',
  'Industry Connections',
  'Cultural & Sports Activities',
  'Affordable Fees',
  'Scholarships Available',
];

export function ProfileForm({ onSubmit, initialProfile }: ProfileFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserProfile>(
    initialProfile || {
      name: '',
      email: '',
      testScores: {
        jeeMainsRank: 0,
      },
      preferences: {
        location: [],
        majors: [],
        budget: '',
        type: [],
      },
      activities: [],
      careerGoals: '',
      personalInterests: [],
      learningStyle: '',
      campusEnvironment: '',
      priorityFactors: [],
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
    } else {
      onSubmit(formData);
    }
  };

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter((i) => i !== item);
    } else {
      return [...array, item];
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Step {step} of 5</span>
            <span className="text-sm text-gray-600">{Math.round((step / 5) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl">Basic Information</h2>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">JEE Mains Rank (out of 250,000)</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  max="250000"
                  value={formData.testScores.jeeMainsRank || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      testScores: { jeeMainsRank: parseFloat(e.target.value) },
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="250"
                />
              </div>
            </div>
          )}

          {/* Step 2: Academic Preferences */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl">Academic Interests</h2>
              </div>

              <div>
                <label className="block mb-3 text-gray-700">Intended Major(s)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {MAJORS.map((major) => (
                    <button
                      key={major}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          preferences: {
                            ...formData.preferences,
                            majors: toggleArrayItem(formData.preferences.majors, major),
                          },
                        })
                      }
                      className={`px-4 py-2 rounded-lg border-2 transition-colors text-sm ${
                        formData.preferences.majors.includes(major)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {major}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-3 text-gray-700">Extracurricular Activities</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {ACTIVITIES.map((activity) => (
                    <button
                      key={activity}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          activities: toggleArrayItem(formData.activities, activity),
                        })
                      }
                      className={`px-4 py-2 rounded-lg border-2 transition-colors text-sm ${
                        formData.activities.includes(activity)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location & Type */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl">School Preferences</h2>
              </div>

              <div>
                <label className="block mb-3 text-gray-700">Preferred Location(s)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {LOCATIONS.map((location) => (
                    <button
                      key={location}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          preferences: {
                            ...formData.preferences,
                            location: toggleArrayItem(formData.preferences.location, location),
                          },
                        })
                      }
                      className={`px-4 py-2 rounded-lg border-2 transition-colors text-sm ${
                        formData.preferences.location.includes(location)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-3 text-gray-700">School Type(s)</label>
                <div className="grid grid-cols-2 gap-3">
                  {SCHOOL_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          preferences: {
                            ...formData.preferences,
                            type: toggleArrayItem(formData.preferences.type, type),
                          },
                        })
                      }
                      className={`px-4 py-2 rounded-lg border-2 transition-colors text-sm ${
                        formData.preferences.type.includes(type)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Budget */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl">Financial Preferences</h2>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Annual Budget Range</label>
                <select
                  required
                  value={formData.preferences.budget}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferences: { ...formData.preferences, budget: e.target.value },
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1L">Under ₹1 Lakh/year</option>
                  <option value="1L-3L">₹1 - 3 Lakhs/year</option>
                  <option value="3L-5L">₹3 - 5 Lakhs/year</option>
                  <option value="5L-10L">₹5 - 10 Lakhs/year</option>
                  <option value="over-10L">Over ₹10 Lakhs/year</option>
                  <option value="no-limit">No Limit</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg mb-2 text-blue-900">Review Your Profile</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>JEE Mains Rank:</strong> {formData.testScores.jeeMainsRank}/250,000</p>
                  <p><strong>Majors:</strong> {formData.preferences.majors.join(', ') || 'Not specified'}</p>
                  <p><strong>Locations:</strong> {formData.preferences.location.join(', ') || 'Any'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Additional Preferences */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl">Additional Preferences</h2>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Career Goals</label>
                <input
                  type="text"
                  value={formData.careerGoals}
                  onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your career goals"
                />
              </div>

              <div>
                <label className="block mb-3 text-gray-700">Personal Interests</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PERSONAL_INTERESTS.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          personalInterests: toggleArrayItem(formData.personalInterests, interest),
                        })
                      }
                      className={`px-4 py-2 rounded-lg border-2 transition-colors text-sm ${
                        formData.personalInterests.includes(interest)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Learning Style</label>
                <select
                  value={formData.learningStyle}
                  onChange={(e) => setFormData({ ...formData, learningStyle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select learning style</option>
                  {LEARNING_STYLES.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Preferred Campus Environment</label>
                <select
                  value={formData.campusEnvironment}
                  onChange={(e) => setFormData({ ...formData, campusEnvironment: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select campus environment</option>
                  {CAMPUS_ENVIRONMENTS.map((env) => (
                    <option key={env} value={env}>
                      {env}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-3 text-gray-700">Priority Factors</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PRIORITY_FACTORS.map((factor) => (
                    <button
                      key={factor}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          priorityFactors: toggleArrayItem(formData.priorityFactors, factor),
                        })
                      }
                      className={`px-4 py-2 rounded-lg border-2 transition-colors text-sm ${
                        formData.priorityFactors.includes(factor)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {factor}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div></div>
            )}

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {step < 5 ? (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                'Get AI Suggestions'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}