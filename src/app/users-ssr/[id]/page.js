import { BASE_API_URL } from "@/app/api/constants";
import { cookies } from "next/headers";
import UserPosts from "../../../../widgets/users/UserPosts/userPosts";
import Image from "next/image";
import "./page.css";

export const generateMetadata = async ({ params }) => {
    const awaitedParams = await params;
    return {
        title: `User - ${awaitedParams.id}`,
        description: `
            This is a profile of User with id = ${awaitedParams.id}. Here u can check some information about this user.
        `
    }
}

const fetchUserById = async (cookieStore, userId) => {
    const accessToken = cookieStore.get("access_token").value;
    const response = await fetch(BASE_API_URL + `users/getUserById/${userId}`, {
        credentials: "include",
        headers: {
            'Cookie': accessToken ? `access_token=${accessToken}` : ''
        }
    });
    const data = await response.json();
    return data;
}

export default async function User({ params, searchParams }) {

    const awaitedParams = await params;
    const queryParams = await searchParams;
    const user = await fetchUserById(await cookies(), awaitedParams.id);

    return (
        <div className="user-profile">
            <div className="user-profile-info">
                <div className="user-profile-avatar">
                    <Image
                        src={BASE_API_URL + user.avatar}
                        width={150}
                        height={150}
                        alt="User avatar"
                    />
                </div>
                <div className="user-profile-more-info">
                    <p>{user.name}, {user.age} из города - {user.city}</p>
                    <p>{user.email}</p>
                    <p>Пол:{user.gender}</p>
                    <p>{user.phoneNumber}</p>
                </div>
            </div>
            <UserPosts user={user} />
        </div>
    )
}
  