import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/" className="font-bold">Home</Link>

      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="relative">
        {!user ? (
          <div className="flex gap-3">
            <Link to="/login" className="px-4 py-2 border border-white">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-white text-black">
              Signup
            </Link>
          </div>
        ) : (
          <>
            <img
              src={user.photoURL}
              alt="profile"
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow">
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}