"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () =>{

    const router = useRouter();

    const onLogout = async(e) => {
        e.preventDefault();

        const response = await axios.get('/api/users/logout');

        if(response.status === 200){
            router.push('/login');
        }
    }

    return(
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white px-16 pt-8 pb-12 mb-4">
                <h1 className="text-3xl mb-4 text-center">Welcome to Home Page</h1>
                <p>Welcome to your personalized home page<br/> You can view and manage your account information</p>
                
                    <button
                       className="bg-red-500 hover:bg-red-700 text-white py-2 mt-4 px-4 rounded-full w-full"
                       onClick={(e) => onLogout(e)}
                    >
                       Logout
                    </button>
            </div>
        </div>
    )
}

export default Profile;