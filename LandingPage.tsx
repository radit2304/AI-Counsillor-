import { GraduationCap, Brain, Target, TrendingUp, MapPin, Users } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="text-xl">CollegeAI India</span>
          </div>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm">AI-Powered University Matching for Indian Students</span>
          </div>
          <h1 className="text-5xl mb-6">
            Find Your Perfect Engineering College in India
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our AI counselor analyzes your JEE Mains rank, preferences, and goals to suggest the best IITs, NITs, and universities across India tailored specifically for you.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Start Your Journey
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <FeatureCard
            icon={<Target className="w-8 h-8 text-blue-600" />}
            title="Personalized Matching"
            description="AI analyzes your JEE rank, preferences, and goals to find your ideal IIT, NIT, or private university"
          />
          <FeatureCard
            icon={<MapPin className="w-8 h-8 text-green-600" />}
            title="Location Intelligence"
            description="Explore colleges across Indian states with Google Maps integration"
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8 text-purple-600" />}
            title="Smart Ranking"
            description="Get reach, target, and safety college recommendations based on your JEE rank"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-orange-600" />}
            title="Comprehensive Data"
            description="Access detailed information about programs, campus life, and admission cutoffs"
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-pink-600" />}
            title="AI Insights"
            description="Receive intelligent suggestions and advice powered by advanced algorithms"
          />
          <FeatureCard
            icon={<GraduationCap className="w-8 h-8 text-indigo-600" />}
            title="Success Tracking"
            description="Monitor your application progress and optimize your college list"
          />
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Share Your Profile"
              description="Tell us about your JEE Mains rank, preferred courses, and location preferences"
            />
            <StepCard
              number="2"
              title="AI Analysis"
              description="Our AI analyzes colleges across India to find your perfect matches"
            />
            <StepCard
              number="3"
              title="Get Suggestions"
              description="Receive a personalized list of IITs, NITs, and other top colleges"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
        {number}
      </div>
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}