import React from 'react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bgImg from './assets/bg.jpg';
import logo from './assets/logo.png';
import car2 from './assets/cars2.png';
import camry from './assets/tc2021.png';
import bmwX5 from './assets/bmx5.png';
import accord from './assets/accord.png';



const mockCars = [
  {
    id: 1,
    name: 'Toyota Camry 2021',
    image: camry,
    date: '2025-07-01',
    isLive: true,
    price: 12400,
  },
  {
    id: 2,
    name: 'BMW X5 2019',
    image: bmwX5,
    date: '2025-07-03',
    isLive: false,
    price: 18700,
  },
  {
    id: 3,
    name: 'Honda Accord 2022',
    image: accord,
    date: '2025-07-05',
    isLive: true,
    price: 15250,
  },
  {
    id: 4,
    name: 'Honda Accord 2022',
    image: accord,
    date: '2025-07-05',
    isLive: true,
    price: 15250,
  },
  {
    id: 5,
    name: 'Honda Accord 2022',
    image: accord,
    date: '2025-07-05',
    isLive: true,
    price: 15250,
  },
  {
    id: 6,
    name: 'Honda Accord 2022',
    image: accord,
    date: '2025-07-05',
    isLive: true,
    price: 15250,
  },
  {
    id: 7,
    name: 'Honda Accord 2022',
    image: accord,
    date: '2025-07-05',
    isLive: true,
    price: 15250,
  },
  {
    id: 8,
    name: 'Honda Accord 2022',
    image: accord,
    date: '2025-07-05',
    isLive: true,
    price: 15250,
  },
];



function Banner() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(now.getTime() + 24 * 60 * 60 * 1000 + 30 * 60 * 1000); // 1 day + 30 minutes
    return target;
  };

  const [targetTime] = React.useState(calculateTimeLeft);
  const [timeLeft, setTimeLeft] = React.useState(getTimeRemaining(targetTime));

  function getTimeRemaining(target) {
    const total = target - new Date();
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="bg-blue-700 text-white px-6 py-2 flex flex-col md:flex-row justify-between items-center text-sm">
      {/* Countdown */}
      <div className="mb-1 md:mb-0 font-medium">
        ⏳ Next big auction begins in <span className="font-bold">{timeLeft}</span>. Get Ready!
      </div>

      {/* Contact */}
      <div className="flex space-x-4">
        <div className="flex items-center space-x-1">
          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">📧</span>
          <span>info@auctionx.com</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">📍</span>
          <span>Abuja, NG</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="bg-white text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">📞</span>
          <span>+234 901 234 5678</span>
        </div>
      </div>
    </div>
  );
}


function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Auction-X Logo" className="h-7" />
      </a>

      {/* Search */}
      <div className="w-full md:w-auto md:flex-1 md:px-4">
        <input
          type="text"
          placeholder="Search cars..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      {/* Nav + Auth */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 w-full md:w-auto justify-between">
        {/* Nav Links */}
        <div className="flex justify-center md:justify-start space-x-4 text-sm text-gray-700 mb-2 md:mb-0">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Auctions</a>
          <a href="#" className="hover:text-blue-600">Sell My Car</a>
           <a href="#" className="hover:text-blue-600">How It Works</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Auth Buttons */}
        <div className="flex justify-center md:justify-end space-x-2">
          <button className="text-sm font-medium text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">
            Sign In
          </button>
          <button className="text-sm font-medium text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div
      className="bg-cover bg-center py-16 px-6 md:px-12"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-4 drop-shadow-lg">
        Find and Buy Your Next Ride
      </h2>

      {/* Subtext */}
      <p className="text-center max-w-2xl mx-auto text-white text-lg mb-10 drop-shadow">
        Auction-X is Nigeria’s trusted car auction platform where buyers meet sellers in real-time. Bid competitively, buy confidently, and drive away with amazing deals.
      </p>

      {/* Filter Panel */}
      <div className="bg-white/90 p-6 rounded-lg shadow-md max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <select className="p-2 border rounded">
            <option>Location</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
          </select>
          <select className="p-2 border rounded">
            <option>Type</option>
            <option>New</option>
            <option>Used</option>
          </select>
          <select className="p-2 border rounded">
            <option>Brand</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>BMW</option>
          </select>
          <select className="p-2 border rounded">
            <option>Model</option>
            <option>Camry</option>
            <option>Accord</option>
            <option>X5</option>
          </select>
          <select className="p-2 border rounded">
            <option>Year</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* Car Image Slider */}
      <div className="mt-10 flex justify-center">
          <img src={car2} alt="car2" className="h-45 md:h-50" />
      </div>
    </div>
  );
}



function App() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Banner />
      <Navbar />
      <HeroSection />

      <div className="p-6 relative">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Popular Auction Vehicles
        </h1>

        {/* Arrow Buttons */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-4 top-[55%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft className="text-blue-700 w-6 h-6" />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-4 top-[55%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight className="text-blue-700 w-6 h-6" />
        </button>

        {/* Slider wrapper */}
        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-auto pb-4 px-2 scroll-smooth"
        >
          {mockCars.map(car => (
            <div
              key={car.id}
              className="min-w-[300px] max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0"
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{car.name}</h2>
                <p className="text-sm text-gray-600 mb-1">Auction Date: {car.date}</p>
                <p className="text-md font-medium text-green-700 mb-2">${car.price.toLocaleString()}</p>

                <span className={`text-xs inline-block mb-2 px-2 py-1 rounded font-medium ${
                  car.isLive ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {car.isLive ? 'Live Now' : 'Upcoming'}
                </span>

                <button
                  disabled={!car.isLive}
                  className={`w-full mt-2 px-4 py-2 text-white rounded font-semibold ${
                    car.isLive
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {car.isLive ? 'Join Auction' : 'Coming Soon'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded">
            View All Auctions
          </button>
        </div>
      </div>
      {/* Call to Action Section */}
<div className="bg-blue-700 text-white py-12 px-6 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl mx-auto">
    Register now to access used & repairable cars, trucks, SUVs & more in 100% online auto auctions.
  </h2>
  <div className="flex justify-center gap-4 mt-6 flex-wrap">
    <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
      Register Now
    </button>
    <button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition">
      View Auctions
    </button>
  </div>
</div>

{/* Footer */}
<footer className="bg-gray-900 text-white py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
    
    {/* Logo */}
    <div className="md:col-span-1">
      <img src="/assets/logo.png" alt="Auction-X Logo" className="h-12 mb-4" />
      <p className="text-sm text-gray-400">Auction-X – Your trusted car auction platform.</p>
    </div>

    {/* Footer Columns */}
    <div>
      <h3 className="font-semibold mb-3">Get to Know Us</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#">About Auction-X</a></li>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Find a Vehicle</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#">Search by Make</a></li>
        <li><a href="#">Search by Location</a></li>
        <li><a href="#">Used Cars</a></li>
        <li><a href="#">New Arrivals</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Auctions</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#">Live Auctions</a></li>
        <li><a href="#">Upcoming Auctions</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Auction Calendar</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Services & Support</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Shipping & Delivery</a></li>
        <li><a href="#">Customer Support</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>
  </div>

  <div className="text-center text-xs text-gray-500 mt-8">
    © {new Date().getFullYear()} Auction-X. All rights reserved.
  </div>
</footer>

    </div>
  );
}

export default App;