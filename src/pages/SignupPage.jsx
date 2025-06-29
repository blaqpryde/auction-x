import React, { useState } from 'react';
import signupBg from '../assets/2149434397.jpg';
import user1 from '../assets/man1.png';
import logo from '../assets/logo.png';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState('signup'); // 'signup' or 'otp'
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verifying, setVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState('');


  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email address.';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      setErrors({});
      setStep('otp'); // Move to OTP step
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative bg-white">
      <a href="/" className="absolute top-4 left-4 text-blue-700 text-sm font-medium z-10">
        <img src={logo} alt="Auction-X Logo" className="h-7 mb-6" />
      </a>

      {/* Left: Signup Form or OTP */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 md:p-16 relative z-10">
        {step === 'signup' ? (
          <>
            <h2 className="text-3xl font-bold text-black text-center mb-2">Create an Account</h2>
            <p className="text-base text-gray-500 text-center mb-6 max-w-sm">
              Register now to start bidding on thousands of quality vehicles at your convenience.
            </p>

            <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <div className="relative mt-1">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border rounded px-4 py-2 pr-10 focus:outline-none focus:ring-2 ${
                      errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
              >
                Sign Up
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FcGoogle size={20} />
                  <span className="text-sm font-medium">Sign Up with Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded hover:bg-gray-50 transition"
                >
                  <FaApple size={20} />
                  <span className="text-sm font-medium">Sign Up with Apple</span>
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm text-gray-600 text-center">
              Already have an account? <a href="#" className="text-blue-700 hover:underline">Sign in</a>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-black mb-4">Verify Your Email</h2>
            <p className="text-gray-600 text-sm text-center max-w-xs mb-6">
              We’ve sent a 4-digit code to <strong>{formData.email}</strong>. Please enter it below to verify your account.
            </p>
            <div className="flex justify-center gap-3 mb-2">
            {otp.map((digit, index) => (
                <input
                key={index}
                id={`otp-${index}`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-12 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 text-lg"
                />
            ))}
            </div>

            {verificationError && (
            <p className="text-red-500 text-sm text-center mb-2">{verificationError}</p>
            )}

            <button
            className={`mt-3 w-full max-w-md py-2 px-4 rounded transition text-white ${
                verifying ? 'bg-blue-300' : 'bg-blue-700 hover:bg-blue-800'
            }`}
            disabled={verifying}
            onClick={async () => {
                setVerifying(true);
                setVerificationError('');
                
                const entered = otp.join('');
                const correct = '1234';

                await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

                if (entered === correct) {
                // Show "Successful" then redirect
                const btn = document.querySelector('#verify-btn');
                if (btn) btn.textContent = 'Verification Successful';
                await new Promise((resolve) => setTimeout(resolve, 1000));
                window.location.href = '/dashboard';
                } else {
                setVerifying(false);
                setVerificationError('Invalid OTP. Please try again.');
                }
            }}
            id="verify-btn"
            >
            {verifying ? 'Verifying...' : 'Verify'}
            </button>

          </>
        )}
      </div>

      {/* Right: Background + Testimonial */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center min-h-[350px] md:min-h-auto"
        style={{ backgroundImage: `url(${signupBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-6 right-6 backdrop-blur-md rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-2 relative">
            <div className="text-5xl text-white">“</div>
            <p className="text-white text-2xl">
              Auction-X made it super easy to buy my first car online. The process was fast, and the price was fair!
            </p>
            <div className="flex items-center mt-3">
              <img src={user1} alt="User" className="w-8 h-8 rounded-full object-cover mr-2" />
              <div>
                <p className="text-sm font-semibold text-white">Samuel A.</p>
                <p className="text-xs text-white">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="absolute right-4 bottom-2 flex space-x-1">
              <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
