import React, { useState } from 'react';
import {
  FaBars,
  FaHome,
  FaGavel,
  FaHistory,
  FaCog,
  FaWallet,
  FaCar,
  FaBell,
  FaSearch,
  FaCreditCard,
  FaTimes,
} from 'react-icons/fa';
import logo from '../assets/logo.png';
import avatar from '../assets/man1.png';

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-white w-64 flex flex-col justify-between fixed md:static z-30 h-full shadow-md transition-transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        {/* Top: Logo and Links */}
        <div>
          <div className="p-6 flex items-center justify-between">
            <img src={logo} alt="Logo" className="h-10" />
            {/* Close button for mobile */}
            <button
              onClick={() => setMenuOpen(false)}
              className="md:hidden text-gray-600"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <nav className="px-6 space-y-6 mt-8">
            <a href="#" className="flex items-center gap-3 p-2 rounded-md bg-blue-100 text-blue-700 font-medium">
              <FaHome /> <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <FaGavel /> <span>My Bids</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <FaHistory /> <span>History</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <FaWallet /> <span>Wallet</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <FaCar /> <span>Sell My Car</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
              <FaCog /> <span>Settings</span>
            </a>
          </nav>
        </div>

        {/* Bottom: User */}
        <div className="p-6 border-t">
          <div className="flex items-center gap-3">
            <img src={avatar} alt="User" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium text-gray-800">Samuel A.</p>
              <p className="text-sm text-gray-500">Bidder Level: <span className="text-blue-600">Pro</span></p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-0 flex flex-col">
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm w-full">
          <div className="flex items-center gap-3 w-full">
            <button onClick={() => setMenuOpen(true)} className="md:hidden text-gray-700">
              <FaBars size={20} />
            </button>
            <div className="flex items-center w-full max-w-md bg-gray-100 px-3 py-2 rounded-md">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <div className="ml-4">
            <FaBell className="text-gray-600" size={20} />
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">Total Bids</h2>
              <FaGavel className="text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-700 mt-2">24</p>
            <button className="mt-4 py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
              View Bids
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">Vehicles Won</h2>
              <FaCar className="text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-700 mt-2">3</p>
            <button className="mt-4 py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
              View Vehicles
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">Bid Credits</h2>
              <FaCreditCard className="text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-700 mt-2">150</p>
            <button className="btn-sm mt-4 py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
              Buy Credit
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">Wallet Balance</h2>
              <FaWallet className="text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-700 mt-2">$ 50,000.00</p>
            <button className="mt-4 py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
              Fund Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
