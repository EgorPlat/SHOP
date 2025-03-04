'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUsers from "../../../store/users.store"
import Image from "next/image";
import "./page.css";
import { BASE_API_URL } from "../api/constants";

export default function AddUser() {

    const router = useRouter();
    const {
        users,
        loading,
        error,
        fetchUsers
    } = useUsers();
    
    const handleGoToUserProfile = (userId) => {
        router.push(`/users-ssr/${userId}`)
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="users-csr">
            <h2>CSR</h2>
            { loading && <p>Loading...</p> }
            { !error && !loading && 
                <div className="users-csr-list">
                    {
                        users.map((user, index) => {
                            return (
                                <div className="user-data" key={user.userId}>
                                    <Image
                                        src={BASE_API_URL + user.avatar}
                                        width={40}
                                        height={40}
                                        alt="User avatar"
                                    />
                                    <div className="id">{index + 1}</div>
                                    <div className="name">
                                        {user.name},
                                    </div>
                                    <div className="age">{user.email}</div>
                                    <button onClick={() => handleGoToUserProfile(user.userId)}>Перейти</button>
                                </div>
                            )
                        })
                    }   
                </div>
            }
        </div>
    )
}