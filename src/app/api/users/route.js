import { NextResponse } from "next/server";

export async function POST(request) {
    
    const { name } = request.body;
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name })
    });
    const responseData = await response.json();

    return NextResponse.json(responseData);
}