import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Briefcase, ArrowRight, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="landing-page">
      <style>
        {`
          .flip-card {
            perspective: 1000px;
            min-height: 300px;
          }
          
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
              Connect With College Seniors
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${isLoaded ? 'animate-fadeIn stagger-1' : 'opacity-0'}`}>
              Get insights from successful graduates and learn about their placement journeys
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? 'animate-fadeIn stagger-2' : 'opacity-0'}`}>
              <Link to="/login" className="btn btn-accent">
                Get Started <ArrowRight className="inline ml-2" size={18} />
              </Link>
              <a href="#features" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Why Choose PeerConnect?</h2>
          <p className="section-subtitle">
            We bridge the gap between students and successful graduates, providing valuable insights for your career journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className={`flip-card ${isLoaded ? 'animate-slideInBottom stagger-1' : 'opacity-0'}`}>
              <div className="flip-card-inner bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flip-card-front flex justify-center items-center text-center">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Learn from Seniors</h3>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Learn from Seniors</h3>
                  <p className="text-gray-600">
                    Get direct insights from seniors who have successfully navigated the placement process and secured positions in top companies.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={`flip-card ${isLoaded ? 'animate-slideInBottom stagger-2' : 'opacity-0'}`}>
              <div className="flip-card-inner bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flip-card-front flex justify-center items-center text-center">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-full mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Build Connections</h3>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-full mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Build Connections</h3>
                  <p className="text-gray-600">
                    Connect with alumni and build a professional network that can help you throughout your career journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className={`flip-card ${isLoaded ? 'animate-slideInBottom stagger-3' : 'opacity-0'}`}>
              <div className="flip-card-inner bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flip-card-front flex justify-center items-center text-center">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full mb-4">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Placement Insights</h3>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full mb-4">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Placement Insights</h3>
                  <p className="text-gray-600">
                    Access detailed information about placement processes, interview experiences, and preparation strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect with Seniors?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community today and get access to valuable insights from successful graduates.
          </p>
          <Link to="/login" className="btn bg-white text-blue-600 hover:bg-gray-100">
            Sign Up Now <ChevronRight className="inline" size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PeerConnect</h3>
              <p className="text-gray-400">
                Connecting students with successful graduates for better career guidance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: info@peerconnect.com</p>
              <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PeerConnect. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;