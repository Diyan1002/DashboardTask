import React from "react";
import { useAppContext } from "../AppContext";
import ProgressBar from "./ProgressBar";

function Header({ onMenuClick }) {
  const { user, userLoading, userError } = useAppContext();

  return (
    <div className="bg-white p-4 rounded-medium flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 shadow-sm transition duration-300 hover:bg-slate-200 md:hidden"
          aria-label="Open sidebar"
        >
          <span className="text-xl">☰</span>
        </button>

        <div>
          <h2 className="text-xl font-semibold">
            {userLoading
              ? "Loading user..."
              : userError
              ? "User data unavailable"
              : `Hello, ${user.name} 👋`}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {userLoading ? "Fetching your dashboard..." : userError ? "Data may be incomplete." : "Overview of your progress."}
          </p>
        </div>
      </div>

      {/* <div className="flex-1 min-w-0">
        {userLoading ? (
          <div className="mt-3 h-3 w-full max-w-md rounded-full bg-gray-200 animate-pulse sm:mt-0" />
        ) : (
          <ProgressBar progress={user.progress} />
        )}
      </div> */}

      <div className="flex flex-wrap items-center justify-end gap-3">
        <span className="bg-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
          {userLoading ? "--xp" : userError ? "N/A" : `${user.xp}xp`}
        </span>

        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;