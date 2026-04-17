import React from "react";
import { useAppContext } from "../AppContext";
import ProgressBar from "./ProgressBar";

function Header({ onMenuClick }) {
  const { user, userLoading, userError } = useAppContext();

  return (
    <div className="bg-white p-3 sm:p-4 rounded-medium flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm transition duration-300 hover:bg-slate-200 md:hidden flex-shrink-0"
          aria-label="Open sidebar"
        >
          <span className="text-lg sm:text-xl">☰</span>
        </button>

        <div className="min-w-0">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold truncate">
            {userLoading
              ? "Loading..."
              : userError
              ? "Unavailable"
              : `Hello, ${user.name} 👋`}
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-500 truncate">
            {userLoading ? "Fetching..." : userError ? "Incomplete." : "Overview of your progress."}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
        <span className="bg-yellow-200 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          {userLoading ? "--xp" : userError ? "N/A" : `${user.xp}xp`}
        </span>

        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;