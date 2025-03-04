"use client"
import "./index.css";

export default function AddNewUserForm({ addNewUser }) {

    return (
        <form className="add-user" action={addNewUser}>
            <h3>Новый пользователь</h3>
            <input name="name" placeholder="Имя пользователя" />
            <input name="email" placeholder="Email" />
            <input name="password" placeholder="Пароль" />
            <input name="city" placeholder="Город" />
            <select name="gender">
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
            </select>
            <button type="submit">Добавить</button>
        </form>
    )
}