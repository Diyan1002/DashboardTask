import React from "react";
import { useAppContext } from "../AppContext";

function Leaderboard() {
  const { leaderboard, leaderboardLoading, leaderboardError } = useAppContext();

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 p-5 sm:p-6 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 w-full max-w-full">
      <h3 className="text-xl font-semibold mb-4 tracking-wide">
        Leaderboard
      </h3>

      {leaderboardLoading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-20 rounded-2xl bg-white/10 animate-pulse"
            />
          ))}
        </div>
      ) : leaderboardError ? (
        <div className="rounded-3xl bg-red-500/10 border border-red-500/20 p-4 text-red-100">
          {leaderboardError}
        </div>
      ) : (
        <div className="space-y-3">
          {leaderboard.map((user, index) => (
            <div
              key={user.id}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-2xl transition-all duration-300 transform ${
                index === 0
                  ? "bg-amber-400/20 border border-amber-300 text-amber-100 shadow-lg"
                  : "bg-white/10 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300 mb-1 sm:mb-0">
                  #{index + 1}
                </p>
                <p className="text-base font-semibold">
                  {user.name}
                </p>
              </div>
              <span className="text-lg font-bold text-slate-100">
                {user.score}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Leaderboard;