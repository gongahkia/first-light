import { useUserStore } from '../../store/userStore';

const HomePage: React.FC = () => {
  const user = useUserStore((s) => s.user);

  // Mock leaderboard data for demo
  const leaderboard = [
    { rank: 1, name: "EarlyBird_Sam", streak: 47, trophies: 2890, avatar: "🏆" },
    { rank: 2, name: "MorningWarrior", streak: 35, trophies: 2650, avatar: "⚡" },
    { rank: 3, name: "SunriseChamp", streak: 28, trophies: 2340, avatar: "🌅" },
    { rank: 4, name: "AlarmSlayer", streak: 22, trophies: 2180, avatar: "⚔️" },
    { rank: 5, name: "DawnDefender", streak: 19, trophies: 1950, avatar: "🛡️" },
  ];

  const currentUser = user
    ? { name: user.name, streak: 5, trophies: 1200, rank: 12 }
    : { name: "You", streak: 5, trophies: 1200, rank: 12 };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-pastel-lavender to-pastel-sky text-gray-800">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-soft-orange to-soft-pink bg-clip-text text-transparent">
            ⚡ FIRST LIGHT ⚡
          </h1>
          <p className="text-2xl mb-2 text-soft-purple">The Ultimate Wake-Up Arena</p>
          <p className="text-lg text-gray-600">Compete. Conquer. Rise with the sun!</p>
        </div>

        {/* User Stats Card */}
        <div className="max-w-md mx-auto mb-12 bg-gradient-to-r from-soft-purple to-soft-blue rounded-3xl p-6 border-2 border-soft-yellow shadow-pastel-lg">
          <div className="text-center">
            <div className="text-4xl mb-2">👑</div>
            <h2 className="text-2xl font-bold mb-4">
              {user ? `Welcome back, ${user.name}!` : "Join the Battle!"}
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/40 rounded-2xl p-3 shadow-pastel">
                <div className="text-soft-orange text-xl font-bold">{currentUser.streak}</div>
                <div className="text-sm text-gray-700">Day Streak</div>
              </div>
              <div className="bg-white/40 rounded-2xl p-3 shadow-pastel">
                <div className="text-soft-purple text-xl font-bold">{currentUser.trophies}</div>
                <div className="text-sm text-gray-700">Trophies</div>
              </div>
              <div className="bg-white/40 rounded-2xl p-3 shadow-pastel">
                <div className="text-soft-pink text-xl font-bold">#{currentUser.rank}</div>
                <div className="text-sm text-gray-700">Rank</div>
              </div>
            </div>
          </div>
        </div>

        {/* Arena Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-soft-orange">
            🏆 ARENA LEADERBOARD 🏆
          </h2>

          <div className="space-y-3">
            {leaderboard.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between p-4 rounded-3xl transition-all hover:scale-105 shadow-pastel ${
                  player.rank === 1
                    ? 'bg-gradient-to-r from-pastel-yellow to-pastel-peach border-2 border-soft-yellow'
                    : player.rank === 2
                    ? 'bg-gradient-to-r from-pastel-sky to-pastel-periwinkle border-2 border-soft-blue'
                    : player.rank === 3
                    ? 'bg-gradient-to-r from-pastel-coral to-pastel-pink border-2 border-soft-pink'
                    : 'bg-gradient-to-r from-pastel-sage to-pastel-mint border border-soft-green'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold w-8">#{player.rank}</div>
                  <div className="text-3xl">{player.avatar}</div>
                  <div>
                    <div className="font-bold text-lg">{player.name}</div>
                    <div className="text-sm opacity-75">{player.streak} day streak</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-soft-orange">{player.trophies}</div>
                  <div className="text-sm opacity-75 text-gray-600">trophies</div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-soft-pink to-soft-purple hover:from-pastel-pink hover:to-pastel-lavender text-white font-bold py-4 px-8 rounded-3xl text-xl transition-all transform hover:scale-105 shadow-pastel-lg border-2 border-soft-pink">
              ⚔️ ENTER THE ARENA ⚔️
            </button>
            <p className="mt-4 text-gray-600">
              Join a group and start your wake-up conquest!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          <div className="bg-white/50 rounded-3xl p-6 border border-soft-blue shadow-pastel">
            <div className="text-4xl mb-4 text-center">⏰</div>
            <h3 className="text-xl font-bold mb-2 text-soft-blue">Daily Battles</h3>
            <p className="text-gray-600">Set your wake-up time and prove you can beat the sunrise!</p>
          </div>
          <div className="bg-white/50 rounded-3xl p-6 border border-soft-purple shadow-pastel">
            <div className="text-4xl mb-4 text-center">🏆</div>
            <h3 className="text-xl font-bold mb-2 text-soft-purple">Trophy System</h3>
            <p className="text-gray-600">Earn trophies for consistency and climb the ranks!</p>
          </div>
          <div className="bg-white/50 rounded-3xl p-6 border border-soft-green shadow-pastel">
            <div className="text-4xl mb-4 text-center">👥</div>
            <h3 className="text-xl font-bold mb-2 text-soft-green">Group Warfare</h3>
            <p className="text-gray-600">Team up with friends and dominate together!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;