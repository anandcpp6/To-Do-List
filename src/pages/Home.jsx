import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">HOME</h1>
        <nav className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md shadow"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center py-20 px-6">
        <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-10 max-w-screen-sm text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 drop-shadow">
            TODO-LIST
          </h2>
          <p className="text-red-500 font-semibold text-lg mb-8   border-blue-700 whitespace-nowrap overflow-hidden">
            Come and manage your tasks with ease !
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="/login"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-lg transition"
            >
              <button className="text-lg">Get Started</button>
            </Link>
            
          </div>
        </div>
      </main>
    </div>
  );
}
