"use client"

import { useRouter } from "next/navigation";
import React from "react";

interface IUserLinkButton {
    title: string,
    userId: number
}

export default function GoToProfileButton(props: IUserLinkButton) {

    const { title, userId, ...restProps } = props; 
    const router = useRouter();

    const handleGoToUserProfile = (url: string) => {
        router.push(url);
    };

    return (
        <button 
            onClick={() => handleGoToUserProfile(`users-ssr/${userId}`)} 
            { ...restProps }
        >
            {title}
        </button>
    )
}