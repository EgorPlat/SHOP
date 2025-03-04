import { NextResponse } from "next/server";
import { BASE_API_URL } from "../../constants";

// POST GET PUT DELETE
export async function POST(request) {

    const formData = await request.formData();
    const email = formData.get('email');
    const pass = formData.get('password');
    
    const authResponse = await fetch(`${BASE_API_URL}auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: pass })
    });
    
    const responseData = await authResponse.json();

    const cookies = authResponse.headers.get('set-cookie');

    const response = NextResponse.json(responseData);

    if (cookies) {
        response.headers.set('Set-Cookie', cookies);
    }

    return response;
}