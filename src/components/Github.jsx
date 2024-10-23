import { useState, useEffect } from "react"
import axios from "axios"

const Github = () => {

    const [profileValue, setProfileValue] = useState('')
    const [searchProfile, setSearchProfile] = useState('')
    const [userProfile, setUserProfile] = useState(null)

    const handleSearchProfile = (e) => {
        if(e.key === 'Enter') {
            setSearchProfile(profileValue)
        }
    }

    useEffect(() => {
        const fetchProfile = async () => {
            if(!searchProfile) {
                return
            } else {
                try {
                    const response = await axios.get(`https://api.github.com/users/${searchProfile}`)
                    setUserProfile(response.data)
                    console.log(response.data)
                } catch (error) {
                    console.log('User not found', error)
                }
            }
        }

        fetchProfile()
    }, [searchProfile])

  return (
    <>
        <div>
            <div>
                <div className="text-center p-5 space-y-5">
                    <span>Enter github username to get information</span>
                    <input 
                    type="search"
                    placeholder="search here"
                    className="border p-2 focus:outline-none rounded-lg w-60"
                    value={profileValue}
                    onKeyPress={handleSearchProfile}
                    onChange={(e) => { setProfileValue(e.target.value) }}
                    />
                </div>

                <div>
                    { userProfile && (
                        <div className="profile-details rounded-lg shadow space-y-2 border mx-auto max-w-lg w-10/12 p-5">
                            <img src={userProfile.avatar_url} alt={userProfile.name} width={100} className="mx-auto" />
                            <h2 className="font-bold text-lg">{userProfile.name}</h2>
                            <p><span className="font-bold text-lg">Bio:</span> <br />{userProfile.bio}</p>
                            <p><i className="fa-solid fa-users"></i> &nbsp;: {userProfile.followers}</p>
                            <p><span className="font-bold text-lg">Repos:</span> {userProfile.public_repos}</p>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    </>
  )
}

export default Github