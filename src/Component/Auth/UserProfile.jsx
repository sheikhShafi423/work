import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [device, setDevice] = useState("");
  const [os, setOs] = useState("");
  const [browser, setBrowser] = useState("");
  const [ip, setIp] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);

    // device info
    const ua = navigator.userAgent;
    setDevice(navigator.platform);
    setBrowser(navigator.appName);
    setOs(ua);

    // get IP address
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => setIp(data.ip));
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (!user) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-96 border border-white p-6 rounded-lg">

        <h1 className="text-2xl font-bold mb-4 text-center">User Profile</h1>

        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
        )}

        <div className="space-y-2 text-sm">

          <p><strong>Name:</strong> {user.displayName || "Not provided"}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Country:</strong> Not available</p>
          <p><strong>IP Address:</strong> {ip}</p>
          <p><strong>Device:</strong> {device}</p>
          <p><strong>Browser:</strong> {browser}</p>
          <p><strong>OS / Version:</strong> {os}</p>

        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-6 py-2 bg-white text-black font-semibold"
        >
          Logout
        </button>

      </div>
    </div>
  );
}