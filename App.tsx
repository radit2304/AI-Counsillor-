import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ProfileForm } from './components/ProfileForm';
import { SuggestionsPage } from './components/SuggestionsPage';

export type UserProfile = {
  name: string;
  email: string;
  testScores: {
    jeeMainsRank: number;
  };
  preferences: {
    location: string[];
    majors: string[];
    budget: string;
    type: string[];
  };
  activities: string[];
  careerGoals: string;
  personalInterests: string[];
  learningStyle: string;
  campusEnvironment: string;
  priorityFactors: string[];
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'profile' | 'suggestions'>('landing');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleGetStarted = () => {
    setCurrentPage('profile');
  };

  const handleProfileSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentPage('suggestions');
  };

  const handleBackToProfile = () => {
    setCurrentPage('profile');
  };

  const handleStartOver = () => {
    setUserProfile(null);
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {currentPage === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      {currentPage === 'profile' && (
        <ProfileForm 
          onSubmit={handleProfileSubmit}
          initialProfile={userProfile}
        />
      )}
      {currentPage === 'suggestions' && userProfile && (
        <SuggestionsPage 
          profile={userProfile}
          onBackToProfile={handleBackToProfile}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}