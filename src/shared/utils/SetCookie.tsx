import { IToken } from "../../app/type/TypeApp";

function SetCookie({ name, value, time }: IToken) {
    const expires = new Date();
    expires.setTime(expires.getTime() + time);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export default SetCookie