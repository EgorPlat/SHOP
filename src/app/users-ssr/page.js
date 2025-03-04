import Image from "next/image";
import GoToProfileButton from "../../../widgets/users/GoToProfileButton/GoToProfileButton";
import { BASE_API_URL } from "../api/constants";
import { cookies } from 'next/headers'
import "./page.css";
import { unstable_cache } from "next/cache";

// no cache
const fetchUsers = async (cookieStore) => {
    console.log('Fetch users list (SSR)');
    const accessToken = cookieStore.get("access_token").value;
    const response = await fetch(BASE_API_URL + 'users', {
        credentials: "include",
        headers: {
            'Cookie': accessToken ? `access_token=${accessToken}` : ''
        }
    });
    const data = await response.json();
    return data;
}

const cachedFetchUsers = unstable_cache(
    fetchUsers,
    ['users-list'],
    {
        revalidate: 3600
    }
);

export default async function Users() {

    const users = await cachedFetchUsers(await cookies());

    return (
        <div className="users-ssr">
            <h2>SSR</h2>
            {
                users.map(user => (
                    <div className="users-ssr-data" key={user.userId}>
                        <Image
                            src={BASE_API_URL + user.avatar}
                            width={40}
                            height={40}
                            alt="User avatar"
                        />
                        <p>{user.name}, </p>
                        <p>{user.email}</p>
                        <GoToProfileButton title="Перейти" userId={user.userId} />
                    </div>
                ))
            }
        </div>
    )
}
  