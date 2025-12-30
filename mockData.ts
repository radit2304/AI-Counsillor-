import { UserProfile } from '../App';

export type College = {
  id: string;
  name: string;
  location: string;
  category: 'reach' | 'target' | 'safety';
  matchScore: number;
  acceptanceRate: number;
  tuition: number;
  enrollment: number;
  testScores: {
    jeeRankRange?: string;
  };
  topPrograms: string[];
  description: string;
  campusLife: string;
  avgFinancialAid: number;
  graduationRate: number;
};

const COLLEGES_DATABASE: Omit<College, 'category' | 'matchScore'>[] = [
  {
    id: '1',
    name: 'IIT Bombay',
    location: 'Mumbai, Maharashtra',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 10000,
    testScores: {
      jeeRankRange: '1-500',
    },
    topPrograms: ['Computer Science Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Aerospace Engineering'],
    description: 'IIT Bombay is India\'s premier engineering institute with world-class research facilities and faculty.',
    campusLife: 'Vibrant campus life with numerous technical and cultural festivals, strong alumni network, and excellent placement opportunities.',
    avgFinancialAid: 100000,
    graduationRate: 98,
  },
  {
    id: '2',
    name: 'IIT Delhi',
    location: 'New Delhi, Delhi NCR',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 9500,
    testScores: {
      jeeRankRange: '1-600',
    },
    topPrograms: ['Computer Science Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Mathematics'],
    description: 'IIT Delhi is renowned for its cutting-edge research and innovation in engineering and technology.',
    campusLife: 'Located in the capital city with excellent infrastructure, active student clubs, and strong industry connections.',
    avgFinancialAid: 100000,
    graduationRate: 97,
  },
  {
    id: '3',
    name: 'IIT Madras',
    location: 'Chennai, Tamil Nadu',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 10500,
    testScores: {
      jeeRankRange: '1-700',
    },
    topPrograms: ['Computer Science Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Aerospace Engineering', 'Ocean Engineering'],
    description: 'IIT Madras is known for its research excellence and beautiful campus spread across 617 acres.',
    campusLife: 'Peaceful campus with deer roaming freely, excellent sports facilities, and strong cultural activities.',
    avgFinancialAid: 100000,
    graduationRate: 97,
  },
  {
    id: '4',
    name: 'IIT Kanpur',
    location: 'Kanpur, Uttar Pradesh',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 9000,
    testScores: {
      jeeRankRange: '1-800',
    },
    topPrograms: ['Computer Science Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Aerospace Engineering'],
    description: 'IIT Kanpur is a pioneer in computer science and engineering education in India.',
    campusLife: 'Large campus with excellent research labs, entrepreneurship cell, and vibrant student community.',
    avgFinancialAid: 100000,
    graduationRate: 96,
  },
  {
    id: '5',
    name: 'NIT Trichy',
    location: 'Tiruchirappalli, Tamil Nadu',
    acceptanceRate: 2,
    tuition: 150000,
    enrollment: 10000,
    testScores: {
      jeeRankRange: '3000-15000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'],
    description: 'NIT Trichy is among the top NITs with excellent academic standards and placement records.',
    campusLife: 'Well-maintained campus with strong technical culture and active student organizations.',
    avgFinancialAid: 50000,
    graduationRate: 94,
  },
  {
    id: '6',
    name: 'NIT Surathkal',
    location: 'Mangalore, Karnataka',
    acceptanceRate: 2,
    tuition: 150000,
    enrollment: 8500,
    testScores: {
      jeeRankRange: '3000-18000',
    },
    topPrograms: ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering', 'Chemical Engineering'],
    description: 'NITK Surathkal is known for its coastal campus and strong engineering programs.',
    campusLife: 'Beautiful beachside campus with excellent sports facilities and vibrant cultural life.',
    avgFinancialAid: 50000,
    graduationRate: 93,
  },
  {
    id: '7',
    name: 'BITS Pilani',
    location: 'Pilani, Rajasthan',
    acceptanceRate: 3,
    tuition: 450000,
    enrollment: 4000,
    testScores: {
      jeeRankRange: '5000-20000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering'],
    description: 'BITS Pilani is a premier private institute known for its flexible curriculum and industry partnerships.',
    campusLife: 'Strong focus on all-round development with numerous fests, excellent placement opportunities.',
    avgFinancialAid: 100000,
    graduationRate: 95,
  },
  {
    id: '8',
    name: 'IIIT Hyderabad',
    location: 'Hyderabad, Telangana',
    acceptanceRate: 2,
    tuition: 350000,
    enrollment: 4500,
    testScores: {
      jeeRankRange: '2000-15000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Computational Linguistics', 'Robotics', 'AI & Machine Learning'],
    description: 'IIIT Hyderabad is a research-focused institute with strong emphasis on computer science and IT.',
    campusLife: 'Modern campus with state-of-the-art labs, strong research culture, and excellent industry connections.',
    avgFinancialAid: 80000,
    graduationRate: 96,
  },
  {
    id: '9',
    name: 'Delhi Technological University',
    location: 'New Delhi, Delhi NCR',
    acceptanceRate: 5,
    tuition: 175000,
    enrollment: 8000,
    testScores: {
      jeeRankRange: '10000-40000',
    },
    topPrograms: ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering'],
    description: 'DTU is a premier state university in Delhi known for excellent placement records.',
    campusLife: 'Active campus life in Delhi with numerous technical societies and cultural events.',
    avgFinancialAid: 40000,
    graduationRate: 90,
  },
  {
    id: '10',
    name: 'NIT Warangal',
    location: 'Warangal, Telangana',
    acceptanceRate: 2,
    tuition: 150000,
    enrollment: 9000,
    testScores: {
      jeeRankRange: '4000-20000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Electrical Engineering', 'Civil Engineering', 'Biotechnology'],
    description: 'NIT Warangal is one of the oldest and most prestigious NITs in India.',
    campusLife: 'Large campus with rich heritage, strong academic culture, and excellent facilities.',
    avgFinancialAid: 50000,
    graduationRate: 92,
  },
  {
    id: '11',
    name: 'VIT Vellore',
    location: 'Vellore, Tamil Nadu',
    acceptanceRate: 8,
    tuition: 400000,
    enrollment: 25000,
    testScores: {
      jeeRankRange: '15000-50000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Information Technology', 'Biotechnology'],
    description: 'VIT is a leading private university with international collaborations and modern infrastructure.',
    campusLife: 'Large diverse campus with students from across India and abroad, numerous clubs and activities.',
    avgFinancialAid: 100000,
    graduationRate: 88,
  },
  {
    id: '12',
    name: 'Manipal Institute of Technology',
    location: 'Manipal, Karnataka',
    acceptanceRate: 10,
    tuition: 350000,
    enrollment: 8000,
    testScores: {
      jeeRankRange: '20000-60000',
    },
    topPrograms: ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering', 'Biotechnology'],
    description: 'Manipal is a well-established private institute with strong industry connections.',
    campusLife: 'Hill station campus with pleasant weather, vibrant student life, and good placement opportunities.',
    avgFinancialAid: 70000,
    graduationRate: 85,
  },
  {
    id: '13',
    name: 'Anna University',
    location: 'Chennai, Tamil Nadu',
    acceptanceRate: 12,
    tuition: 50000,
    enrollment: 60000,
    testScores: {
      jeeRankRange: '30000-80000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Information Technology'],
    description: 'Anna University is a state technical university with numerous affiliated colleges.',
    campusLife: 'Large university with focus on technical education and research in Tamil Nadu.',
    avgFinancialAid: 20000,
    graduationRate: 80,
  },
  {
    id: '14',
    name: 'Jadavpur University',
    location: 'Kolkata, West Bengal',
    acceptanceRate: 8,
    tuition: 25000,
    enrollment: 10000,
    testScores: {
      jeeRankRange: '15000-50000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering'],
    description: 'Jadavpur University is a prestigious state university in West Bengal with strong engineering programs.',
    campusLife: 'Rich academic tradition with focus on research and cultural activities in Kolkata.',
    avgFinancialAid: 15000,
    graduationRate: 87,
  },
  {
    id: '15',
    name: 'SRM Institute of Science and Technology',
    location: 'Chennai, Tamil Nadu',
    acceptanceRate: 15,
    tuition: 300000,
    enrollment: 40000,
    testScores: {
      jeeRankRange: '40000-100000',
    },
    topPrograms: ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering', 'Biotechnology'],
    description: 'SRM is a large private university with modern infrastructure and international tie-ups.',
    campusLife: 'Huge campus near Chennai with diverse student population and good facilities.',
    avgFinancialAid: 80000,
    graduationRate: 82,
  },
  {
    id: '16',
    name: 'SASTRA University',
    location: 'Thanjavur, Tamil Nadu',
    acceptanceRate: 10,
    tuition: 180000,
    enrollment: 15000,
    testScores: {
      jeeRankRange: '25000-70000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering'],
    description: 'SASTRA is a deemed university known for its quality education, strong placement record, and research focus.',
    campusLife: 'Well-maintained campus in the temple town of Thanjavur with focus on academic excellence and discipline.',
    avgFinancialAid: 60000,
    graduationRate: 88,
  },
  {
    id: '17',
    name: 'IIT Kharagpur',
    location: 'Kharagpur, West Bengal',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 12000,
    testScores: {
      jeeRankRange: '1-1000',
    },
    topPrograms: ['Computer Science Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Mining Engineering'],
    description: 'IIT Kharagpur is the oldest IIT with the largest campus spread over 2100 acres, known for comprehensive engineering programs and research.',
    campusLife: 'Largest IIT campus with excellent sports facilities, cultural festivals like Spring Fest, and strong alumni network across the globe.',
    avgFinancialAid: 100000,
    graduationRate: 97,
  },
  {
    id: '18',
    name: 'IIT Roorkee',
    location: 'Roorkee, Uttarakhand',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 9500,
    testScores: {
      jeeRankRange: '1-1200',
    },
    topPrograms: ['Computer Science Engineering', 'Electrical Engineering', 'Civil Engineering', 'Mechanical Engineering', 'Architecture'],
    description: 'IIT Roorkee, formerly known as Roorkee University, is one of the oldest technical institutions in Asia with strong civil engineering heritage.',
    campusLife: 'Historic campus in the foothills of Himalayas with beautiful architecture, active cultural societies, and excellent research facilities.',
    avgFinancialAid: 100000,
    graduationRate: 96,
  },
  {
    id: '19',
    name: 'IIT Guwahati',
    location: 'Guwahati, Assam',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 8500,
    testScores: {
      jeeRankRange: '1-1500',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Chemical Engineering', 'Biotechnology'],
    description: 'IIT Guwahati is known for its scenic campus on the banks of Brahmaputra river and strong research in technology and sciences.',
    campusLife: 'Beautiful campus with modern infrastructure, active technical and cultural clubs, and focus on innovation and entrepreneurship.',
    avgFinancialAid: 100000,
    graduationRate: 96,
  },
  {
    id: '20',
    name: 'IIT Hyderabad',
    location: 'Hyderabad, Telangana',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 4000,
    testScores: {
      jeeRankRange: '1-2000',
    },
    topPrograms: ['Computer Science Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering'],
    description: 'IIT Hyderabad is a newer IIT with state-of-the-art infrastructure and strong focus on research and interdisciplinary programs.',
    campusLife: 'Modern campus with focus on innovation, entrepreneurship cell, and excellent industry collaborations in the IT hub of Hyderabad.',
    avgFinancialAid: 100000,
    graduationRate: 95,
  },
  {
    id: '21',
    name: 'IIT (BHU) Varanasi',
    location: 'Varanasi, Uttar Pradesh',
    acceptanceRate: 1,
    tuition: 200000,
    enrollment: 11000,
    testScores: {
      jeeRankRange: '1-2500',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics Engineering', 'Mechanical Engineering', 'Ceramic Engineering', 'Pharmaceutical Engineering'],
    description: 'IIT BHU is the oldest technical institute in the country, formerly known as IT-BHU, with unique programs like Ceramic and Pharmaceutical Engineering.',
    campusLife: 'Located within BHU campus in the spiritual city of Varanasi, rich heritage with modern facilities and diverse student community.',
    avgFinancialAid: 100000,
    graduationRate: 95,
  },
  {
    id: '22',
    name: 'NIT Karnataka',
    location: 'Surathkal, Karnataka',
    acceptanceRate: 2,
    tuition: 150000,
    enrollment: 8500,
    testScores: {
      jeeRankRange: '3000-18000',
    },
    topPrograms: ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering', 'Chemical Engineering'],
    description: 'NITK Surathkal is consistently ranked among top NITs with excellent academic standards and placement records.',
    campusLife: 'Stunning beachside campus on Arabian Sea coast with water sports facilities, active technical clubs, and vibrant campus culture.',
    avgFinancialAid: 50000,
    graduationRate: 93,
  },
  {
    id: '23',
    name: 'NIT Rourkela',
    location: 'Rourkela, Odisha',
    acceptanceRate: 2,
    tuition: 150000,
    enrollment: 9000,
    testScores: {
      jeeRankRange: '5000-25000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Metallurgical Engineering', 'Civil Engineering'],
    description: 'NIT Rourkela is known for its strong metallurgical and mining programs along with excellent engineering education.',
    campusLife: 'Large campus with good infrastructure, strong technical culture with Innovision techfest, and diverse student body.',
    avgFinancialAid: 50000,
    graduationRate: 91,
  },
  {
    id: '24',
    name: 'IIIT Bangalore',
    location: 'Bangalore, Karnataka',
    acceptanceRate: 2,
    tuition: 300000,
    enrollment: 1500,
    testScores: {
      jeeRankRange: '3000-20000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Information Technology', 'Data Science', 'AI & Machine Learning'],
    description: 'IIIT Bangalore is a research-focused institute in the IT capital with strong industry partnerships and modern curriculum.',
    campusLife: 'Urban campus in Electronic City with excellent labs, strong startup culture, and proximity to numerous IT companies.',
    avgFinancialAid: 70000,
    graduationRate: 94,
  },
  {
    id: '25',
    name: 'IIIT Delhi',
    location: 'New Delhi, Delhi NCR',
    acceptanceRate: 2,
    tuition: 250000,
    enrollment: 2000,
    testScores: {
      jeeRankRange: '4000-25000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Computer Science & Design', 'Mathematics & Computing', 'Computational Biology'],
    description: 'IIIT Delhi is known for its innovative curriculum, strong research culture, and interdisciplinary programs.',
    campusLife: 'Modern campus in Delhi with focus on research, active coding culture, excellent placement opportunities in tech companies.',
    avgFinancialAid: 60000,
    graduationRate: 93,
  },
  {
    id: '26',
    name: 'BITS Goa',
    location: 'Goa',
    acceptanceRate: 3,
    tuition: 450000,
    enrollment: 2500,
    testScores: {
      jeeRankRange: '8000-30000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering'],
    description: 'BITS Goa campus offers the same quality education as BITS Pilani with the advantage of beach location and pleasant climate.',
    campusLife: 'Beautiful campus in Goa with beach proximity, vibrant cultural life, flexible curriculum, and excellent placement opportunities.',
    avgFinancialAid: 100000,
    graduationRate: 94,
  },
  {
    id: '27',
    name: 'BITS Hyderabad',
    location: 'Hyderabad, Telangana',
    acceptanceRate: 3,
    tuition: 450000,
    enrollment: 2500,
    testScores: {
      jeeRankRange: '10000-35000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering'],
    description: 'BITS Hyderabad maintains the BITS tradition of academic excellence with modern infrastructure and industry connections.',
    campusLife: 'Modern campus in IT hub of Hyderabad, strong entrepreneurship culture, flexible study system, and good placement records.',
    avgFinancialAid: 100000,
    graduationRate: 93,
  },
  {
    id: '28',
    name: 'IIIT Allahabad',
    location: 'Prayagraj, Uttar Pradesh',
    acceptanceRate: 3,
    tuition: 130000,
    enrollment: 3500,
    testScores: {
      jeeRankRange: '8000-35000',
    },
    topPrograms: ['Information Technology', 'Electronics & Communication', 'Computer Science Engineering', 'IT & Business Informatics', 'AI & Data Science'],
    description: 'IIIT Allahabad is one of the oldest IIITs with strong focus on IT education and research.',
    campusLife: 'Well-established campus with active coding culture, strong alumni network in IT industry, and focus on competitive programming.',
    avgFinancialAid: 40000,
    graduationRate: 90,
  },
  {
    id: '29',
    name: 'NIT Calicut',
    location: 'Kozhikode, Kerala',
    acceptanceRate: 2,
    tuition: 150000,
    enrollment: 8000,
    testScores: {
      jeeRankRange: '6000-28000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'],
    description: 'NIT Calicut is known for its scenic campus, strong academic culture, and excellent placement records among NITs.',
    campusLife: 'Beautiful campus in Kerala with lush greenery, strong technical culture, active student clubs, and focus on all-round development.',
    avgFinancialAid: 50000,
    graduationRate: 92,
  },
  {
    id: '30',
    name: 'PSG College of Technology',
    location: 'Coimbatore, Tamil Nadu',
    acceptanceRate: 8,
    tuition: 100000,
    enrollment: 7000,
    testScores: {
      jeeRankRange: '20000-60000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'],
    description: 'PSG Tech is one of the premier private engineering colleges in South India with strong industry connections and placement record.',
    campusLife: 'Well-established campus in Coimbatore with good infrastructure, strong focus on practical learning, and excellent placement support.',
    avgFinancialAid: 30000,
    graduationRate: 89,
  },
  {
    id: '31',
    name: 'Thapar Institute of Engineering & Technology',
    location: 'Patiala, Punjab',
    acceptanceRate: 10,
    tuition: 350000,
    enrollment: 8000,
    testScores: {
      jeeRankRange: '15000-50000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering'],
    description: 'Thapar University is a leading private institute with strong emphasis on research and industry partnerships.',
    campusLife: 'Heritage campus with modern facilities, active cultural and technical societies, good placement opportunities especially in North India.',
    avgFinancialAid: 80000,
    graduationRate: 87,
  },
  {
    id: '32',
    name: 'Amrita Vishwa Vidyapeetham',
    location: 'Coimbatore, Tamil Nadu',
    acceptanceRate: 12,
    tuition: 250000,
    enrollment: 20000,
    testScores: {
      jeeRankRange: '25000-80000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Aerospace Engineering', 'Biotechnology'],
    description: 'Amrita University is a multi-campus deemed university with strong focus on values-based education and research.',
    campusLife: 'Serene campus at the foothills of Western Ghats with focus on discipline, spirituality, excellent labs and research facilities.',
    avgFinancialAid: 60000,
    graduationRate: 86,
  },
  {
    id: '33',
    name: 'PES University',
    location: 'Bangalore, Karnataka',
    acceptanceRate: 10,
    tuition: 400000,
    enrollment: 12000,
    testScores: {
      jeeRankRange: '20000-65000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Information Science', 'Biotechnology'],
    description: 'PES University is a leading private university in Bangalore with strong placement records and industry connections.',
    campusLife: 'Modern campus in IT capital with excellent infrastructure, strong coding culture, proximity to tech companies, and vibrant student life.',
    avgFinancialAid: 75000,
    graduationRate: 88,
  },
  {
    id: '34',
    name: 'Nirma University',
    location: 'Ahmedabad, Gujarat',
    acceptanceRate: 8,
    tuition: 180000,
    enrollment: 8000,
    testScores: {
      jeeRankRange: '18000-55000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'],
    description: 'Nirma University is a leading private institute in Gujarat known for its academic rigor and placement record.',
    campusLife: 'Sprawling 250-acre campus with modern infrastructure, active student clubs, strong focus on discipline and academics.',
    avgFinancialAid: 50000,
    graduationRate: 87,
  },
  {
    id: '35',
    name: 'Netaji Subhas University of Technology',
    location: 'New Delhi, Delhi NCR',
    acceptanceRate: 5,
    tuition: 175000,
    enrollment: 5000,
    testScores: {
      jeeRankRange: '12000-45000',
    },
    topPrograms: ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Instrumentation & Control', 'Mechanical Engineering'],
    description: 'NSUT (formerly NSIT) is a premier state university in Delhi with excellent academic standards and placement opportunities.',
    campusLife: 'Located in Dwarka, Delhi with modern infrastructure, active technical societies, strong alumni network, and proximity to industries.',
    avgFinancialAid: 40000,
    graduationRate: 91,
  },
  {
    id: '36',
    name: 'Indraprastha Institute of Information Technology',
    location: 'New Delhi, Delhi NCR',
    acceptanceRate: 3,
    tuition: 250000,
    enrollment: 2500,
    testScores: {
      jeeRankRange: '5000-30000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Computer Science & Design', 'Computer Science & Biosciences', 'Mathematics & Computing'],
    description: 'IIIT Delhi offers unique interdisciplinary programs with strong research focus and excellent faculty.',
    campusLife: 'Compact modern campus with focus on research, strong startup culture, excellent coding environment, and top-tier placement opportunities.',
    avgFinancialAid: 60000,
    graduationRate: 94,
  },
  {
    id: '37',
    name: 'Jamia Millia Islamia',
    location: 'New Delhi, Delhi NCR',
    acceptanceRate: 7,
    tuition: 50000,
    enrollment: 18000,
    testScores: {
      jeeRankRange: '30000-90000',
    },
    topPrograms: ['Computer Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering'],
    description: 'Jamia is a central university with affordable education and diverse programs across engineering and other disciplines.',
    campusLife: 'Historic university in South Delhi with beautiful campus, diverse student body, active cultural societies, and affordable education.',
    avgFinancialAid: 25000,
    graduationRate: 83,
  },
  {
    id: '38',
    name: 'Amity University',
    location: 'Noida, Uttar Pradesh',
    acceptanceRate: 15,
    tuition: 350000,
    enrollment: 35000,
    testScores: {
      jeeRankRange: '40000-120000',
    },
    topPrograms: ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering', 'Biotechnology'],
    description: 'Amity is a large private university with multiple campuses, international collaborations, and diverse programs.',
    campusLife: 'Massive campus in Noida with world-class infrastructure, numerous clubs and societies, international exposure, and good placement support.',
    avgFinancialAid: 70000,
    graduationRate: 82,
  },
  {
    id: '39',
    name: 'Kalinga Institute of Industrial Technology',
    location: 'Bhubaneswar, Odisha',
    acceptanceRate: 12,
    tuition: 280000,
    enrollment: 30000,
    testScores: {
      jeeRankRange: '35000-100000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Information Technology'],
    description: 'KIIT is a deemed university with large campus, modern facilities, and growing reputation in eastern India.',
    campusLife: 'Sprawling campus in Bhubaneswar with excellent sports facilities, active cultural scene, diverse student population from across India.',
    avgFinancialAid: 65000,
    graduationRate: 84,
  },
  {
    id: '40',
    name: 'Birla Institute of Technology',
    location: 'Mesra, Jharkhand',
    acceptanceRate: 8,
    tuition: 320000,
    enrollment: 12000,
    testScores: {
      jeeRankRange: '22000-70000',
    },
    topPrograms: ['Computer Science Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering'],
    description: 'BIT Mesra is a leading private institute with strong academic traditions and excellent placement record.',
    campusLife: 'Beautiful campus on the outskirts of Ranchi with peaceful environment, strong technical culture, and good infrastructure.',
    avgFinancialAid: 70000,
    graduationRate: 86,
  },
];

export function generateSuggestions(profile: UserProfile): College[] {
  const colleges: College[] = [];
  
  // Calculate user's academic strength based on JEE Mains rank
  // Lower rank = better performance, normalize to 0-1 scale where 1 is best
  const MAX_RANK = 250000; // Approximate total JEE Mains candidates
  const jeeMainsScore = 1 - (profile.testScores.jeeMainsRank / MAX_RANK);
  const academicStrength = Math.max(0, Math.min(1, jeeMainsScore)); // Clamp between 0 and 1

  COLLEGES_DATABASE.forEach((college) => {
    // Calculate match score based on various factors
    let matchScore = 40; // Base score (reduced from 50 to give more weight to other factors)

    // Academic fit (20 points - reduced from 30)
    const acceptanceThreshold = college.acceptanceRate / 100;
    if (academicStrength > acceptanceThreshold + 0.3) {
      matchScore += 20;
    } else if (academicStrength > acceptanceThreshold) {
      matchScore += 15;
    } else if (academicStrength > acceptanceThreshold - 0.2) {
      matchScore += 8;
    }

    // Major match (15 points)
    const majorMatch = college.topPrograms.some(program =>
      profile.preferences.majors.some(major => 
        program.toLowerCase().includes(major.toLowerCase()) ||
        major.toLowerCase().includes(program.toLowerCase())
      )
    );
    if (majorMatch) {
      matchScore += 15;
    }

    // Career goals match (10 points)
    if (profile.careerGoals) {
      const careerGoalsLower = profile.careerGoals.toLowerCase();
      const descriptionLower = college.description.toLowerCase();
      const campusLifeLower = college.campusLife.toLowerCase();
      
      if (careerGoalsLower.includes('research') && (descriptionLower.includes('research') || campusLifeLower.includes('research'))) {
        matchScore += 10;
      } else if (careerGoalsLower.includes('entrepreneur') && (descriptionLower.includes('entrepreneur') || campusLifeLower.includes('entrepreneur'))) {
        matchScore += 10;
      } else if (careerGoalsLower.includes('placement') && campusLifeLower.includes('placement')) {
        matchScore += 10;
      } else if (careerGoalsLower.includes('industry') && (descriptionLower.includes('industry') || campusLifeLower.includes('industry'))) {
        matchScore += 10;
      } else if (careerGoalsLower.includes('international') && descriptionLower.includes('international')) {
        matchScore += 10;
      } else if (descriptionLower.includes(careerGoalsLower.split(' ')[0]) || campusLifeLower.includes(careerGoalsLower.split(' ')[0])) {
        matchScore += 5;
      }
    }

    // Personal interests match (10 points)
    if (profile.personalInterests.length > 0) {
      let interestMatchCount = 0;
      
      profile.personalInterests.forEach(interest => {
        const interestLower = interest.toLowerCase();
        const descriptionLower = college.description.toLowerCase();
        const campusLifeLower = college.campusLife.toLowerCase();
        
        if (interest === 'Technology & Innovation' && (descriptionLower.includes('technology') || descriptionLower.includes('innovation'))) {
          interestMatchCount++;
        } else if (interest === 'Entrepreneurship' && (descriptionLower.includes('entrepreneur') || campusLifeLower.includes('entrepreneur'))) {
          interestMatchCount++;
        } else if (interest === 'Research & Development' && (descriptionLower.includes('research') || campusLifeLower.includes('research'))) {
          interestMatchCount++;
        } else if (interest === 'Sports & Fitness' && campusLifeLower.includes('sports')) {
          interestMatchCount++;
        } else if (interest === 'Cultural Activities' && campusLifeLower.includes('cultural')) {
          interestMatchCount++;
        }
      });
      
      matchScore += Math.min(10, interestMatchCount * 3);
    }

    // Learning style match (5 points)
    if (profile.learningStyle) {
      const styleLower = profile.learningStyle.toLowerCase();
      const descriptionLower = college.description.toLowerCase();
      const campusLifeLower = college.campusLife.toLowerCase();
      
      if (styleLower.includes('research') && (descriptionLower.includes('research') || campusLifeLower.includes('research'))) {
        matchScore += 5;
      } else if (styleLower.includes('practical') && campusLifeLower.includes('lab')) {
        matchScore += 5;
      } else if (styleLower.includes('project') && descriptionLower.includes('project')) {
        matchScore += 5;
      }
    }

    // Campus environment match (5 points)
    if (profile.campusEnvironment) {
      const envLower = profile.campusEnvironment.toLowerCase();
      const locationLower = college.location.toLowerCase();
      const campusLifeLower = college.campusLife.toLowerCase();
      
      if (envLower.includes('urban') && (locationLower.includes('delhi') || locationLower.includes('mumbai') || locationLower.includes('chennai') || locationLower.includes('bangalore'))) {
        matchScore += 5;
      } else if (envLower.includes('peaceful') && (campusLifeLower.includes('peaceful') || campusLifeLower.includes('serene'))) {
        matchScore += 5;
      } else if (envLower.includes('large') && college.enrollment > 15000) {
        matchScore += 5;
      } else if (envLower.includes('small') && college.enrollment < 10000) {
        matchScore += 5;
      } else if (envLower.includes('nature') && (campusLifeLower.includes('green') || campusLifeLower.includes('beautiful'))) {
        matchScore += 5;
      }
    }

    // Priority factors match (15 points)
    if (profile.priorityFactors.length > 0) {
      let priorityMatchCount = 0;
      
      profile.priorityFactors.forEach(factor => {
        const factorLower = factor.toLowerCase();
        const descriptionLower = college.description.toLowerCase();
        const campusLifeLower = college.campusLife.toLowerCase();
        
        if (factor === 'Placement Opportunities' && campusLifeLower.includes('placement')) {
          priorityMatchCount++;
        } else if (factor === 'Research Facilities' && (descriptionLower.includes('research') || campusLifeLower.includes('research'))) {
          priorityMatchCount++;
        } else if (factor === 'International Exposure' && (descriptionLower.includes('international') || campusLifeLower.includes('international'))) {
          priorityMatchCount++;
        } else if (factor === 'Entrepreneurship Support' && campusLifeLower.includes('entrepreneur')) {
          priorityMatchCount++;
        } else if (factor === 'Campus Infrastructure' && (descriptionLower.includes('infrastructure') || campusLifeLower.includes('infrastructure') || descriptionLower.includes('modern'))) {
          priorityMatchCount++;
        } else if (factor === 'Alumni Network' && (descriptionLower.includes('alumni') || campusLifeLower.includes('alumni'))) {
          priorityMatchCount++;
        } else if (factor === 'Industry Connections' && (descriptionLower.includes('industry') || campusLifeLower.includes('industry'))) {
          priorityMatchCount++;
        } else if (factor === 'Cultural & Sports Activities' && campusLifeLower.includes('cultural')) {
          priorityMatchCount++;
        } else if (factor === 'Affordable Fees' && college.tuition < 200000) {
          priorityMatchCount++;
        } else if (factor === 'Scholarships Available' && college.avgFinancialAid > 50000) {
          priorityMatchCount++;
        }
      });
      
      matchScore += Math.min(15, priorityMatchCount * 3);
    }

    // Determine category based on academic strength vs acceptance rate
    let category: 'reach' | 'target' | 'safety';
    const competitiveness = 1 - (college.acceptanceRate / 100);
    
    if (competitiveness > academicStrength + 0.15) {
      category = 'reach';
    } else if (competitiveness > academicStrength - 0.15) {
      category = 'target';
    } else {
      category = 'safety';
    }

    colleges.push({
      ...college,
      category,
      matchScore: Math.min(99, Math.max(60, matchScore)),
    });
  });

  // Sort by match score and return balanced list
  colleges.sort((a, b) => b.matchScore - a.matchScore);

  // Ensure balanced distribution
  const reach = colleges.filter(c => c.category === 'reach').slice(0, 4);
  const target = colleges.filter(c => c.category === 'target').slice(0, 4);
  const safety = colleges.filter(c => c.category === 'safety').slice(0, 4);

  return [...reach, ...target, ...safety].sort((a, b) => b.matchScore - a.matchScore);
}