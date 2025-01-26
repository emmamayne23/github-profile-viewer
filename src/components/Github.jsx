import { useState, useEffect } from "react";
import axios from "axios";

const Github = () => {
  const [profileValue, setProfileValue] = useState("");
  const [searchProfile, setSearchProfile] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const handleSearchProfile = (e) => {
    if (e.key === "Enter") {
      setSearchProfile(profileValue);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (!searchProfile) {
        return;
      } else {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${searchProfile}`
          );
          setUserProfile(response.data);
          console.log(response.data);
        } catch (error) {
          console.log("User not found", error);
        }
      }
    };

    fetchProfile();
  }, [searchProfile]);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-screen">
      <div className="container mx-auto p-5 pt-10">
        <div className="text-center p-5 space-y-5">
          <span className="text-2xl font-bold text-white">
            Enter github username to get information
          </span>
          <div className="relative">
            <input
              type="search"
              placeholder="Search Name Here..."
              className="border shadow-2xl p-2 focus:outline-none rounded-lg w-60 bg-white pl-5"
              value={profileValue}
              onKeyPress={handleSearchProfile}
              onChange={(e) => {
                setProfileValue(e.target.value);
              }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3"></div>
          </div>
        </div>

        <div>
          {userProfile && (
            <div className="profile-details rounded-lg shadow-2xl space-y-2 border mx-auto max-w-lg w-10/12 p-5 bg-white">
              <div className="flex items-center justify-center">
                <img
                  src={userProfile.avatar_url}
                  alt={userProfile.name}
                  width={100}
                  className="mx-auto"
                />
              </div>
              <h2 className="font-bold text-lg text-center">
                {userProfile.name}
              </h2>
              <div className="flex items-center text-center justify-center text-sm">
                  <i className="fa-solid fa-link"></i>
                  <a href={`https://${userProfile.blog}`} className="ml-2 text-blue-600 "> {userProfile.blog}</a>
                </div>
              <p className="text-center">
                <span className="font-bold text-lg">Bio:</span> <br />
                {userProfile.bio}
              </p>
              <div className="flex justify-center space-x-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-users"></i>
                  <p className="ml-2"><strong>Followers:</strong> {userProfile.followers}</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-user-plus"></i>
                  <p className="ml-2"><strong>Following:</strong> {userProfile.following}</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-code-branch"></i>
                  <p className="ml-2 text-green-600"><strong>Repos:</strong> {userProfile.public_repos}</p>
                </div>
              </div>
            </div>
          )}
          {!userProfile && (
            <div className="profile-details rounded-lg shadow-2xl space-y-2 border mx-auto max-w-lg w-10/12 p-5 bg-white">
              <h2 className="font-bold text-lg text-center text-gray-400">
                No Profile to Show
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Github;
