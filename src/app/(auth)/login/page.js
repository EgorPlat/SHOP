"use client";
import { useRouter } from "next/navigation";
import "./page.css";
import Link from "next/link";

export default function Login() {

    const router = useRouter();

    async function handleSubmitLogin (formData) {
        const response = await fetch('/api/auth/login', { method: "POST", body: formData });
        if (response.ok) {
            const authData = await response?.json();
            if (authData.profile) router.push('/users-csr');
            if (authData.message) alert(authData.message);
        }
    };

    return (
        <div className="login">
            <form className="login-form" action={handleSubmitLogin}>
                <h3>Вход</h3>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Пароль" required />
                <button className="login-btn" type="submit">Войти</button>
                <Link className="auth-link" href="/register">Ещё не зарегистрированы?</Link>
            </form>
        </div>
    )
}