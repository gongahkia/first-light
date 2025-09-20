import { useParams } from 'react-router-dom';

const GroupPage: React.FC = () => {
  const { id } = useParams();

  // Using the id parameter in the group name for demo purposes
  const groupId = id || '1';

  // Mock group data
  const group = {
    name: `Dawn Warriors Elite #${groupId}`,
    members: 12,
    targetTime: "6:00 AM",
    season: "Winter Challenge 2024"
  };

  // Mock group leaderboard
  const groupLeaderboard = [
    { rank: 1, name: "AlphaMorning", streak: 15, weeklyScore: 490, status: "✅", checkInTime: "5:58 AM" },
    { rank: 2, name: "EarlyRiser99", streak: 12, weeklyScore: 475, status: "✅", checkInTime: "6:02 AM" },
    { rank: 3, name: "SunChaser", streak: 11, weeklyScore: 460, status: "✅", checkInTime: "6:05 AM" },
    { rank: 4, name: "MorningCrusher", streak: 8, weeklyScore: 430, status: "⏰", checkInTime: "6:15 AM" },
    { rank: 5, name: "DawnPatrol", streak: 7, weeklyScore: 410, status: "❌", checkInTime: "---" },
  ];

  const isToday = true; // Mock check-in status

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ⚔️ {group.name} ⚔️
          </h1>
          <p className="text-lg text-gray-300">{group.season}</p>
          <div className="flex justify-center items-center gap-6 mt-4 text-sm">
            <span className="bg-blue-800 px-3 py-1 rounded-full">👥 {group.members} Warriors</span>
            <span className="bg-purple-800 px-3 py-1 rounded-full">⏰ Target: {group.targetTime}</span>
          </div>
        </div>

        {/* Check-in Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-green-800 to-blue-800 rounded-2xl p-6 border-2 border-green-400 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-6">Today's Battle Status</h2>

            {!isToday ? (
              <div className="text-center">
                <div className="text-6xl mb-4">⏰</div>
                <h3 className="text-xl font-bold mb-4">Ready for Battle?</h3>
                <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all transform hover:scale-105">
                  🚀 CHECK IN NOW!
                </button>
                <p className="mt-4 text-gray-300">Prove you conquered the morning!</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Victory Achieved!</h3>
                <p className="text-gray-300 mb-4">Checked in at 5:55 AM (+5 early bonus!)</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-yellow-400 text-xl font-bold">+50</div>
                    <div className="text-sm">Points</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-green-400 text-xl font-bold">16</div>
                    <div className="text-sm">Streak</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-purple-400 text-xl font-bold">+5</div>
                    <div className="text-sm">Bonus</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Group Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
            👑 GROUP RANKINGS 👑
          </h2>

          <div className="space-y-3">
            {groupLeaderboard.map((member) => (
              <div
                key={member.rank}
                className={`flex items-center justify-between p-4 rounded-xl transition-all hover:scale-105 ${
                  member.rank === 1
                    ? 'bg-gradient-to-r from-yellow-700 to-orange-700 border-2 border-yellow-400'
                    : member.status === '✅'
                    ? 'bg-gradient-to-r from-green-700 to-emerald-700 border border-green-500'
                    : member.status === '⏰'
                    ? 'bg-gradient-to-r from-orange-700 to-red-700 border border-orange-500'
                    : 'bg-gradient-to-r from-gray-700 to-slate-700 border border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold w-8">#{member.rank}</div>
                  <div className="text-2xl">{member.status}</div>
                  <div>
                    <div className="font-bold text-lg">{member.name}</div>
                    <div className="text-sm opacity-75">
                      {member.streak} day streak • {member.checkInTime}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-400">{member.weeklyScore}</div>
                  <div className="text-sm opacity-75">weekly pts</div>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Challenge */}
          <div className="mt-12 bg-black/30 rounded-2xl p-6 border border-purple-500">
            <h3 className="text-2xl font-bold text-center mb-6 text-purple-400">📅 Weekly Challenge</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold mb-2">Perfect Week</h4>
                <p className="text-gray-300">7 consecutive check-ins before 6:00 AM</p>
                <div className="mt-4 bg-purple-800 rounded-full h-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-4 rounded-full" style={{width: '71%'}}></div>
                </div>
                <p className="text-sm mt-2">5/7 days completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏅</div>
                <h4 className="font-bold mb-2">Group Bonus</h4>
                <p className="text-gray-300">All members check in for +20 bonus points</p>
                <div className="text-2xl font-bold text-yellow-400 mt-2">83%</div>
                <p className="text-sm">group completion</p>
              </div>
            </div>
          </div>

          {/* Battle Tips */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/50 rounded-xl p-4 border border-blue-500">
              <h4 className="font-bold mb-2 text-blue-400">💡 Pro Tip</h4>
              <p className="text-sm text-gray-300">Check in 5+ minutes early for bonus points!</p>
            </div>
            <div className="bg-green-900/50 rounded-xl p-4 border border-green-500">
              <h4 className="font-bold mb-2 text-green-400">🔥 Streak Bonus</h4>
              <p className="text-sm text-gray-300">10+ day streaks earn double weekend points!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GroupPage;