import React from "react";
import logo from "../assets/logoada.png";
import logoutIcon from "../assets/logout.png";

function Sidebar({ open = false, onClose }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white flex flex-col  transition-transform duration-300 
      md:static md:translate-x-0 md:h-screen ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* LOGO (WHITE AREA) */}
      <div className="p-5 flex items-center justify-between">
        <img src={logo} alt="logo" className="h-12" />

        <button
          onClick={onClose}
          className="md:hidden bg-gray-200 p-2 rounded-full"
        >
          ×
        </button>
      </div>

      {/* DARK CURVED SECTION (FULL HEIGHT) */}
      <div className="flex-1 bg-gray-900 rounded-tr-[80px] flex flex-col justify-between p-4 pt-6 text-gray-300">
        
        {/* TOP MENU */}
        <div>
          {/* Active Dashboard */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-3 mr-8 rounded-xl font-semibold shadow mb-4">
            Dashboard
          </div>

          {/* Nav Items */}
          <ul className="space-y-2">
            <li className="p-3 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer transition">
              Projects
            </li>

            <li className="p-3 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer transition">
              Settings
            </li>
          </ul>
        </div>

        {/* LOGOUT (BOTTOM INSIDE DARK AREA) */}
        <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition">
          <img src={logoutIcon} alt="logout" className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;