import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About</h3>
                        <p className="text-gray-400">Your company description here.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Links</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/camps" className="hover:text-white">Camps</a></li>
                            <li><a href="/community" className="hover:text-white">Community</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                            <li><a href="/drop-in" className="hover:text-white">Drop In</a></li>
                            <li><a href="/lessons" className="hover:text-white">Lessons</a></li>
                            <li><a href="/services" className="hover:text-white">Services</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            
                            <p className="text-gray-400">sports.fleetwood@gmail.com</p>
                            <p className="text-gray-400">Tel: 778-776-5563</p>
                            <p className="text-gray-400">Tel: 604-283-9785</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Drop-In Location</h3>
                            <p className="text-gray-400">15353 92 Ave, Surrey, BC</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Fleetwood Badminton Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};