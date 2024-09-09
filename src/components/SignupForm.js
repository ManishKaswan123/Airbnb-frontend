import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoChevronBackOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ onClose , changeIsLoggedIn}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState(null);
    const [stepTwo, setStepTwo] = useState(false);
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

  
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  
    const handleContinue = async () => {
      try {
        setStepTwo(true);
        const response = await fetch('http://localhost:3001/api/user/check-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: phoneNumber }),
        });
  
        const result = await response.text();
        if (result === 'user exists') {
          setStatus('user exists');
        } else if (result === 'new user') {
          setStatus('new user');
        }
      } catch (error) {
        setStepTwo(false);
        toast.error('Error checking user');
        console.error('Error checking user:', error);
      }
    };
  
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
  
    const handleLogin = async () => {
      try {
        setStepTwo(false);
        onClose();
        const response = await fetch('http://localhost:3001/api/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: phoneNumber, password }),
        });
  
        const result = await response.json();
        
        if(result) {
            localStorage.setItem('user', JSON.stringify(result));
            changeIsLoggedIn();
            toast.success('Logged in successfully');
        }

        if (response.ok) {
          console.log('User logged in:', result);
          // Handle successful login
        } else {
          console.error('Login error:', result);
        }
      } catch (error) {
        toast.error('Error logging in');
        console.error('Error logging in:', error);
      }
    };
  
    const handleRegister = async () => {
      try {
        setStepTwo(false);
        onClose();
        const response = await fetch('http://localhost:3001/api/user/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: phoneNumber, firstName, lastName, email  , password }),
        });
  
        const result = await response.json();
        
        if(result) {
            localStorage.setItem('user', JSON.stringify(result));
            changeIsLoggedIn();
            toast.success('Registered successfully');
        }
        if (response.ok) {
          console.log('User registered:', result);
          // Handle successful registration
        } else {
          console.error('Registration error:', result);
        }
      } catch (error) {
        toast.error('Error registering user');
        console.error('Error registering user:', error);
      }
    };

    const handleClick = () => { 
        onClose();
        navigate('/');
    }

  return (
    <>
        {stepTwo ? (
            <>
            {status === 'user exists' ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-xl w-[95%]">
                        <div className="flex items-center justify-between mt-5">
                            <button onClick={() => setStepTwo(false)} className="text-gray-800 hover:bg-gray-100 rounded-full p-2 ml-2">
                                <IoChevronBackOutline size={20} />
                            </button>
                            <span className="flex-grow text-center font-bold text-lg">Confirm your number</span>
                        </div>
                        <hr className="border-t-1 border-gray-400 mb-6 mt-4" />
                        <p className="my-3 px-6">Enter the password for your mobile number  +91 {phoneNumber}</p>
                        <div className="px-6 my-6">
                        <input
                            type="text"
                            className="w-[40%] border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-gray-800"
                            placeholder="Enter password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        </div>
                        <hr className="border-t-1 border-gray-200 my-4" />
                        <div className="flex justify-between items-center px-6 mb-4">
                        <button className="text-blue-500 hover:underline">More options</button>
                        <button
                            onClick={handleLogin}
                            className="w-[30%] bg-gray-500 text-white py-3 rounded-md hover:bg-gray-600 font-bold"
                        >
                            Continue
                        </button>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
                        <div className="flex items-center justify-between">
                        <button onClick={() => setStepTwo(false)} className="text-gray-800 bg-gray-100 rounded-full p-2 border-gray-800 border">
                            <IoChevronBackOutline size={20} />
                        </button>
                        <span className="flex-grow text-center font-bold">Finish signing up</span>
                        </div>
                        <hr className="border-t-1 border-gray-200 my-4" />
                        
                        <h2 className="text-lg font-bold mb-4">Legal name</h2>
                        <div className='border border-gray-400 rounded-lg'>
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-800"
                                placeholder="First name on ID"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                            <hr className="border-t-1 border-gray-400" />
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-800"
                                placeholder="Last name on ID"
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                        Make sure this matches the name on your government ID. If you go by another name, you can add a preferred first name.
                        </p>

                        <h2 className="text-lg font-bold mb-4">Password</h2>
                        <input
                            type="text"
                            className="w-[40%] border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-gray-800"
                            placeholder="Enter code"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <p className="text-sm text-gray-600 mb-4">
                        Use at least eight characters with a mix of letters, numbers, and symbols.
                        </p>

                        <h2 className="text-lg font-bold mb-4">Contact info</h2>
                        <input
                            type="email"
                            className="w-full mb-4 border border-gray-300 rounded-md p-3"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <p className="text-sm text-gray-600 mb-4">
                        We'll email you trip confirmations and receipts.
                        </p>

                        <p className="text-xs mb-4">
                        By selecting <strong>Agree and continue</strong>, I agree to Airbnb's <a href="#" className="text-black font-semibold underline">Terms of Service</a>, <a href="#" className="text-black font-semibold underline">Payments Terms of Service</a>, and <a href="#" className="text-black font-semibold underline">Nondiscrimination Policy</a> and acknowledge the <a href="#" className="text-black font-semibold underline">Privacy Policy</a>.
                        </p>

                        <button onClick={handleRegister}  className="w-full bg-primary text-white py-3 rounded-md font-bold">
                            Agree and continue
                        </button>
                    </div>
                </div>
            )}
            </>
        ) : (
            <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
                <div className="flex items-center justify-between">
                <button onClick={handleClick} className="text-gray-800 hover:bg-gray-100 rounded-full p-2">
                    <IoMdClose size={20} />
                </button>
                <span className="flex-grow text-center font-bold">Log in or sign up</span>
                </div>
                <hr className="border-t-1 border-gray-200 my-4" />
                <h2 className="text-xl font-bold mb-4">Welcome to Airbnb</h2>
                <label className="block text-sm font-semibold text-gray-600 ml-3">Country/Region</label>
                <div className='border border-gray-400 rounded-lg'>
                <div>
                    <select className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-800">
                    <option className="font-bold">India (+91)</option>
                    {/* Add more countries as needed */}
                    </select>
                </div>
                <hr className="border-t-1 border-gray-400" />
                <div>
                    <input
                    type="text"
                    className="w-full p-3 rounded-lg outline-none focus:ring-2 focus:ring-gray-800"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    />
                </div>
                </div>
        
                <p className="text-xs mb-4 mt-1">
                We'll call or text you to confirm your number. Standard message and data rates apply.
                <a href="#" className="text-black font-semibold underline"> Privacy Policy</a>
                </p>
                <button onClick={handleContinue} className="w-full bg-primary text-white py-3 rounded-md mb-4 font-bold">Continue</button>
                
                {status === 'user exists' && (
                <div>
                    {/* Render component for existing user login */}
                    <p>User exists. Please enter your password.</p>
                    {/* Add password input and login logic here */}
                </div>
                )}
        
                {status === 'new user' && (
                <div>
                    {/* Render component for new user registration */}
                    <p>New user. Please enter your details.</p>
                    {/* Add form for first name, last name, email, and registration logic here */}
                </div>
                )}
        
                <div className="text-center mb-4">or</div>
                <div className="flex items-center justify-between border border-gray-300 py-3 rounded-lg mb-3">
                <FaSquareFacebook className="text-blue-600 ml-4" size={24} />
                <span className="flex-grow text-center text-black">Continue with Facebook</span>
                </div>
                <div className="flex items-center justify-between border border-gray-300 py-3 rounded-lg mb-3">
                <FcGoogle className="ml-4" size={24} />
                <span className="flex-grow text-center text-black">Continue with Google</span>
                </div>
                <div className="flex items-center justify-between border border-gray-300 py-3 rounded-lg mb-3">
                <FaApple className="ml-4" size={24} />
                <span className="flex-grow text-center text-black">Continue with Apple</span>
                </div>
                <div className="flex items-center justify-between border border-gray-300 py-3 rounded-lg">
                <LuMail className="ml-4" size={24} />
                <span className="flex-grow text-center text-black">Continue with email</span>
                </div>
            </div>
            </div>
        )}
    </>
  );
};

export default SignupForm;
