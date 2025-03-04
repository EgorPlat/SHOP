"use client"
import Link from "next/link";
import "./page.css";

export default function Register() {
    return (
        <div className="register">
            <form className="register-form" onSubmit={e => e.preventDefault()}>
                <h3>Регистрация</h3>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Пароль" required />
                <button className="register-btn" type="submit">Зарегистрироваться</button>
                <Link className="auth-link" href="/login">Уже зарегистрированы?</Link>
            </form>
        </div>
    )
}