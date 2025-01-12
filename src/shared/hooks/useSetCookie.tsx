import { useEffect } from "react";
import { IToken } from "../../app/type/TypeApp";

function useSetCookie({ name, value, time }: IToken) {
    useEffect(() => {
        if (name && value && time) {
            const expires = new Date();
            expires.setTime(expires.getTime() + time);
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
        }
    }, [name, value, time])
}

export default useSetCookie