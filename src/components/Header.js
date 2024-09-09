import React, { useEffect, useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { IoIosMenu, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { GiFarmTractor, GiMountainCave, GiPalmTree, GiBeachBall } from "react-icons/gi";
import { FaUmbrellaBeach, FaBed } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import SignupForm from './SignupForm';
import Avatar from './Avatar';
import toast from 'react-hot-toast';
// Import all your icons here

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [visibleIcons, setVisibleIcons] = useState([0, 4]); 
  const [iconsToShow, setIconsToShow] = useState(5);
  const [user, setUser] = useState(null);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeIsLoggedIn = () => {
    setIsLoggedIn(true);
 }

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 850) {
      setIsMobileView(true);
      setIconsToShow(3); 
    } else {
      setIsMobileView(false);
      const newIconsToShow = Math.floor((width - (2 * width * 0.05)) / 150);
      setIconsToShow(newIconsToShow);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) { // Adjust this value to control when the change happens
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isloggedIn) {
        let newUser = localStorage.getItem('user');
        if(newUser) {
            setUser(JSON.parse(newUser));
        }
    }
    }, [isloggedIn]);

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        setIsLoggedIn(false);
        setUser(null);
        toast.success('Logged out successfully');
      };

  const icons = [
    { icon: <BiBuildingHouse size={24} />, label: "Icons" },
    { icon: <GiFarmTractor size={24} />, label: "Farms" },
    { icon: <GiMountainCave size={24} />, label: "Amazing views" },
    { icon: <GiPalmTree size={24} />, label: "Amazing pools" },
    { icon: <FaBed size={24} />, label: "Off-the-grid" },
    { icon: <FaUmbrellaBeach size={24} />, label: "Beachfront" },
    { icon: <FaBed size={24} />, label: "Bed & breakfasts" },
    { icon: <GiPalmTree size={24} />, label: "OMG!" },
    { icon: <GiFarmTractor size={24} />, label: "Countryside" },
    { icon: <BiBuildingHouse size={24} />, label: "Icons" },
    { icon: <GiFarmTractor size={24} />, label: "Farms" },
    { icon: <GiMountainCave size={24} />, label: "Amazing views" },
    { icon: <GiPalmTree size={24} />, label: "Amazing pools" },
    { icon: <FaBed size={24} />, label: "Off-the-grid" },
    { icon: <FaUmbrellaBeach size={24} />, label: "Beachfront" },
    { icon: <FaBed size={24} />, label: "Bed & breakfasts" },
    { icon: <GiPalmTree size={24} />, label: "OMG!" },
    { icon: <GiFarmTractor size={24} />, label: "Countryside" },
  ];

  const [isDropdownFormOpen, setIsDropdownFormOpen] = useState(false);

  const toggleDropdownForm = () => {
    setIsDropdownFormOpen(!isDropdownFormOpen);
  };

  const handleNext = () => {
    if (visibleIcons[1] < icons.length - 1) {
      setVisibleIcons([visibleIcons[0] + 1, visibleIcons[1] + 1]);
    }
  };

  const handlePrev = () => {
    if (visibleIcons[0] > 0) {
      setVisibleIcons([visibleIcons[0] - 1, visibleIcons[1] - 1]);
    }
  };

  useEffect(() => {
    setVisibleIcons([0, iconsToShow - 1]);
  }, [iconsToShow]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white py-4 ${isMobileView ? 'border shadow-md' : ''} ${isScrolled ? 'border shadow-md' : ''}`}>
      {/* Show this part only when not scrolled */}
      {!isScrolled && !isMobileView && (
        <>
            <div className="flex justify-between items-center px-[5%]">
            <div className="flex items-center w-3/12 hover:cursor-pointer">
                <img src="https://imgs.search.brave.com/aAnhOC9JOmdeHE-PXeE1v1f7rm9GJsM7nRny1V69GQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzY5L0Fp/cmJuYl9Mb2dvX0Il/QzMlQTlsby5zdmcv/MjIwcHgtQWlyYm5i/X0xvZ29fQiVDMyVB/OWxvLnN2Zy5wbmc" alt="Airbnb Logo" className="h-8" />
            </div>
            <div className="flex justify-center w-6/12">
                <div className="flex space-x-8">
                <div className="text-gray-800 font-semibold hover:cursor-pointer p-2">Stays</div>
                <div className="text-gray-700 hover:cursor-pointer hover:rounded-3xl hover:bg-gray-100 p-2">Experiences</div>
                </div>
            </div>
            <div className="flex items-center justify-end space-x-4 w-3/12">
                <button className="text-gray-800 whitespace-nowrap hover:cursor-pointer hover:rounded-3xl hover:bg-gray-100 p-2 text-sm font-semibold">
                Airbnb your home
                </button>
                <div className='hover:cursor-pointer hover:rounded-3xl hover:bg-gray-100 p-3'>
                <TbWorld className="text-gray-700 " size={18} />
                </div>
                <div className="flex items-center border rounded-full p-2 space-x-2 hover:cursor-pointer hover:shadow-lg hover:border-gray-300" onClick={toggleDropdown}>
                    <IoIosMenu className="text-gray-700 hover:cursor-pointer" size={24} />
                    {user ? 
                        (
                            <Avatar 
                                firstName={user?.firstName} 
                                lastName={user?.lastName} 
                                width={35}
                                height={35}
                            />
                        ) : (
                            <FaUserCircle 
                                className="text-gray-700 hover:cursor-pointer" 
                                size={30} 
                            />
                        )
                    }
                </div>
                {isDropdownOpen && (
                <div className="z-10 absolute right-20 top-20 w-48 bg-white border rounded shadow-lg">
                    <ul className='hover:cursor-pointer'>
                        {user && (
                                <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm font-semibold">Messages</li>
                        )}
                        {user && (
                                <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm font-semibold">Trips</li>
                        )}
                        {user && (
                                <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm font-semibold">Wishlists</li>
                        )}
                        {!user && (
                            <li onClick={toggleDropdownForm} className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Log in</li>
                        )}
                        <hr className="border-t-1 border-gray-300" />
                        <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Airbnb your home</li>
                        {user&& (
                            <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Account</li>
                        )}
                        {user && (
                            <hr className="border-t-1 border-gray-300" />
                        )}
                        <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Help Centre</li>
                        {user && (
                            <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm" onClick={handleLogout}>Log out</li>
                        )}
                    </ul>
                </div>
                )}
            </div>
            </div>
            <div className="flex justify-center px-[4%] mt-5">
                <div className="flex items-center border rounded-full shadow-md bg-white lg:w-3/4 w-full">
                    <div className="flex flex-col flex-grow border-r hover:rounded-3xl hover:bg-gray-100 p-3.5 pl-8 hover:cursor-pointer">
                    <span className="text-xs font-semibold">Where</span>
                    <span className="text-sm text-gray-500">Search destinations</span>
                    </div>
                    <div className="flex flex-col flex-grow border-r hover:rounded-3xl hover:bg-gray-100 p-3.5 pl-6 hover:cursor-pointer">
                    <span className="text-xs font-semibold">Check in</span>
                    <span className="text-sm text-gray-500">Add dates</span>
                    </div>
                    <div className="flex flex-col flex-grow border-r hover:rounded-3xl hover:bg-gray-100 p-3.5 pl-6 hover:cursor-pointer">
                    <span className="text-xs font-semibold">Check out</span>
                    <span className="text-sm text-gray-500">Add dates</span>
                    </div>
                    <div className="flex flex-row flex-grow hover:rounded-3xl hover:bg-gray-100 pl-6 hover:cursor-pointer">
                    <div className='flex flex-col flex-grow p-3.5'>
                        <span className="text-xs font-semibold">Who</span>
                        <span className="text-sm text-gray-500">Add guests</span>
                    </div>
                    <div className='flex items-center mr-3'>
                        <button className="bg-customPink text-white rounded-full p-3.5 flex items-center justify-center">
                        <MdSearch className="text-white" size={22} />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
      )}
      {/* New search bar when scrolled */}
      {isScrolled && !isMobileView && (
        <div className="flex justify-between items-center px-[5%]">
            {/* Logo Section */}
            <div className="flex items-center lg:w-3/12 w-2/12 hover:cursor-pointer">
                <img 
                    src="https://imgs.search.brave.com/aAnhOC9JOmdeHE-PXeE1v1f7rm9GJsM7nRny1V69GQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzY5L0Fp/cmJuYl9Mb2dvX0Il/QzMlQTlsby5zdmcv/MjIwcHgtQWlyYm5i/X0xvZ29fQiVDMyVB/OWxvLnN2Zy5wbmc" 
                    alt="Airbnb Logo" 
                    className="h-8 md:h-8 lg:h-12"
                />
            </div>

            {/* Search Section */}
            <div className="flex  justify-start lg:w-5/12 w-6/12">
                <div className="flex items-center border rounded-full shadow-md bg-white w-3/4 ">
                    {/* Anywhere Section */}
                    <div className="flex-grow p-2 hover:bg-gray-100 rounded-l-full hover:cursor-pointer ml-3">
                        <span className="text-xs md:text-sm font-semibold">Anywhere</span>
                    </div>

                    {/* Vertical Line */}
                    <div className="border-l-2 h-8 md:h-10"></div>

                    {/* Any week Section */}
                    <div className="flex-grow p-2 hover:bg-gray-100 hover:cursor-pointer">
                        <span className="text-xs md:text-sm font-semibold">Any week</span>
                    </div>

                    {/* Vertical Line */}
                    <div className="border-l-2 h-8 md:h-10"></div>

                    {/* Add guests Section */}
                    <div className="flex-grow p-2 hover:bg-gray-100 hover:cursor-pointer">
                        <span className="text-xs md:text-sm text-gray-400">Add guests</span>
                    </div>

                    {/* Search Button */}
                    <div className="p-1 md:p-2">
                        <button className="bg-customPink text-white rounded-full p-2">
                            <MdSearch className="text-white" size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* User Actions Section */}
            <div className="flex items-center justify-end space-x-2 md:space-x-4 w-3/12">
                <button className="text-gray-800 whitespace-nowrap hover:cursor-pointer hover:rounded-3xl hover:bg-gray-100 p-2 text-xs md:text-sm lg:text-base font-semibold">
                    Airbnb your home
                </button>
                <div className="hover:cursor-pointer hover:rounded-3xl hover:bg-gray-100 p-2 md:p-3">
                    <TbWorld className="text-gray-700" size={18} />
                </div>
                <div 
                    className="flex items-center border rounded-full p-2 space-x-1 md:space-x-2 hover:cursor-pointer hover:shadow-lg hover:border-gray-300" 
                    onClick={toggleDropdown}
                >
                    <IoIosMenu className="text-gray-700 hover:cursor-pointer" size={24} />
                    <FaUserCircle className="text-gray-700 hover:cursor-pointer" size={30} />
                </div>
                {isDropdownOpen && (
                    <div className="z-10 absolute right-20 top-20 w-48 bg-white border rounded shadow-lg">
                        <ul className='hover:cursor-pointer'>
                            {user && (
                                    <li conClick={isDropdownOpen}className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm font-semibold">Messages</li>
                            )}
                            {user && (
                                    <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm font-semibold">Trips</li>
                            )}
                            {user && (
                                    <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm font-semibold">Wishlists</li>
                            )}
                            {!user && (
                                <li onClick={toggleDropdownForm} className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Log in</li>
                            )}
                            <hr className="border-t-1 border-gray-300" />
                            <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Airbnb your home</li>
                            {user&& (
                                <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Account</li>
                            )}
                            {user && (
                                <hr className="border-t-1 border-gray-300" />
                            )}
                            <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm">Help Centre</li>
                            {user && (
                                <li className="px-4 py-2 hover:bg-gray-100 text-xs md:text-sm" onClick={handleLogout}>Log out</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
      )}
      {
        isMobileView && (
          <div className="flex justify-center items-center w-full">
            <div className="flex items-center border rounded-full p-3 shadow-md bg-white w-[90%] hover:cursor-pointer">
              <FaSearch className="text-black mx-3" size={20} />
              <div className="flex flex-col">
                <span className="font-semibold text-black">Where to?</span>
                <span className="text-sm text-gray-500">Anywhere · Any week · Add guests</span>
              </div>
            </div>
          </div>
        )
      }
      {/* Common part for both views */}
      {!isMobileView && (
        <hr className="border-t-1 border-gray-200 my-6" />
    )}
      <div className="flex justify-between px-[5%] mt-4">
        {visibleIcons[0] > 0 && (
          <div 
            className="hover:cursor-pointer p-2 border rounded-full hover:shadow-md" 
            onClick={handlePrev}
          >
            <IoIosArrowBack size={22} />
          </div>
        )}
        <div className="flex justify-around w-full px-[8%]">
          {icons.slice(visibleIcons[0], visibleIcons[1] + 1).map((item, index) => (
            <div key={index} className="flex flex-col items-center hover:cursor-pointer">
              {item.icon}
              <span className="text-xs text-gray-700 font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
        {visibleIcons[1] < icons.length - 1 && (
          <div 
            className="hover:cursor-pointer p-2 border rounded-full hover:shadow-md" 
            onClick={handleNext}
          >
            <IoIosArrowForward size={22} />
          </div>
        )}
      </div>

      {isDropdownFormOpen && (
        <SignupForm 
            onClose={() => {
                setIsDropdownFormOpen(!isDropdownFormOpen)
                setIsDropdownOpen(!isDropdownOpen)
            }}
            changeIsLoggedIn={changeIsLoggedIn}
        />
      )}
    </header>
  );
}

export default Header;
