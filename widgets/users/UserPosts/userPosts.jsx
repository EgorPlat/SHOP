"use client"
import { useState } from "react";
import { BASE_API_URL } from "@/app/api/constants";
import Image from "next/image";
import "./UserPosts.css";

export default function ChangeUserInfo({ user }) {

    const [isHidden, setIsHidden] = useState(false);
    
    const handleChangeHiddenStatus = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="changeUserInfo">
            <button onClick={handleChangeHiddenStatus}>
                {
                    isHidden ? "Hide posts" : "Show posts"
                }
            </button>
            {
                isHidden && 
                <>
                    <p>Post list:</p>
                    <div className="user-posts">
                        {
                            user.posts.map(post => (
                                <div className="user-post" key={post.id}>
                                    <div className="user-post-title">
                                        {post.title}
                                    </div>
                                    <div className="user-post-image">
                                        <Image
                                            src={BASE_API_URL + post.files[0].src}
                                            width={300}
                                            height={150}
                                            alt="Post image"
                                        />
                                    </div>
                                    <div className="user-post-description">
                                        {post.description}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )
}