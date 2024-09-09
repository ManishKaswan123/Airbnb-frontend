import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 ">
          <h3 className="font-semibold">Inspiration for future getaways</h3>
          <div className="flex space-x-4 mt-2 border-b-2 pt-4">
            <a href="#" className="text-gray-800 hover:underline">Popular</a>
            <a href="#" className="text-gray-600 hover:underline">Arts & culture</a>
            <a href="#" className="text-gray-600 hover:underline">Outdoors</a>
            <a href="#" className="text-gray-600 hover:underline">Mountains</a>
            <a href="#" className="text-gray-600 hover:underline">Beach</a>
            <a href="#" className="text-gray-600 hover:underline">Unique stays</a>
            <a href="#" className="text-gray-600 hover:underline">Categories</a>
            <a href="#" className="text-gray-600 hover:underline">Things to do</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div>
              <p>Canmore</p>
              <p className="text-gray-600">Pet-friendly rentals</p>
            </div>
            <div>
              <p>Benalmádena</p>
              <p className="text-gray-600">Flat rentals</p>
            </div>
            <div>
              <p>Marbella</p>
              <p className="text-gray-600">Cottage rentals</p>
            </div>
            <div>
              <p>Mijas</p>
              <p className="text-gray-600">House rentals</p>
            </div>
            <div>
              <p>Prescott</p>
              <p className="text-gray-600">Pet-friendly rentals</p>
            </div>
            <div>
              <p>Scottsdale</p>
              <p className="text-gray-600">Flat rentals</p>
            </div>
            <div>
              <p>Tucson</p>
              <p className="text-gray-600">Flat rentals</p>
            </div>
            <div>
              <p>Jasper</p>
              <p className="text-gray-600">Cabin rentals</p>
            </div>
            <div>
              <p>Mountain View</p>
              <p className="text-gray-600">Pet-friendly rentals</p>
            </div>
            <div>
              <p>Devonport</p>
              <p className="text-gray-600">Cottage rentals</p>
            </div>
            <div>
              <p>Mallacoota</p>
              <p className="text-gray-600">Pet-friendly rentals</p>
            </div>
            <div>
              <p>Ibiza</p>
              <p className="text-gray-600">Holiday rentals</p>
            </div>
            <div>
              <p>Anaheim</p>
              <p className="text-gray-600">Family-friendly rentals</p>
            </div>
            <div>
              <p>Monterey</p>
              <p className="text-gray-600">Flat rentals</p>
            </div>
            <div>
              <p>Paso Robles</p>
              <p className="text-gray-600">House rentals</p>
            </div>
            <div>
              <p>Santa Barbara</p>
              <p className="text-gray-600">Beachfront rentals</p>
            </div>
            <div>
              <p>Sonoma</p>
              <p className="text-gray-600">Pet-friendly rentals</p>
            </div>
          </div>
          <a href="#" className="text-gray-600 hover:underline mt-2 block">Show more</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t-2 pt-4">
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Help Centre</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">AirCover</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Anti-discrimination</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Disability support</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Cancellation options</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Report neighbourhood concern</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Airbnb your home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">AirCover for Hosts</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Hosting resources</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Community forum</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Hosting responsibly</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Join a free Hosting class</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Airbnb</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Newsroom</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">New features</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:underline">Investors</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-300 pt-4 text-gray-600">
          <div>
            © 2024 Airbnb, Inc. · <a href="#" className="hover:underline">Privacy</a> · <a href="#" className="hover:underline">Terms</a> · <a href="#" className="hover:underline">Sitemap</a> · <a href="#" className="hover:underline">Company details</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">English (IN)</a>
            <a href="#" className="hover:underline">₹ INR</a>
            <RiFacebookBoxFill 
                className="text-2xl hover:cursor-pointer text-black"
                size={24}
            />
            <FaSquareTwitter
                className="text-2xl hover:cursor-pointer text-black"
                size={24}
             />
            <FaInstagramSquare
                className="text-2xl hover:cursor-pointer text-black"
                size={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}