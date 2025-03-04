import { revalidatePath, revalidateTag } from "next/cache";
import AddNewUserForm from "../../../widgets/users/AddNewUserForm/index";
import { cookies } from "next/headers";
import { BASE_API_URL } from "../api/constants";

export default function AddUser() {

    async function addNewUser(formData) {
        "use server"
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get("access_token").value;
        const response = await fetch(`${BASE_API_URL}users`, {
            method: "POST",
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                password: formData.get("password"),
                gender: formData.get("gender"),
                city: formData.get("city")
            }),
            credentials: "include",
            headers: {
                'Content-type': "application/json",
                'Cookie': accessToken ? `access_token=${accessToken}` : ''
            }
        });
        if (response.status <= 217) {
            revalidateTag('users-list');
        }
    };

    return (
        <AddNewUserForm addNewUser={addNewUser} />
    )
}