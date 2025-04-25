export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-indigo-800">3310 Shirts</h1>
        <p className="mt-4 text-lg text-gray-700 italic">
          "Who Is That Black Guy" Collection
        </p>
        <a href="/shop">
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition">
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
}
