import { FC, useEffect } from "react"
import { Authentication } from "../../widgets"
import useSavingTokenViaTheApi from "../../app/hooks/useSavingTokenViaTheApi";
import { useNavigate } from "react-router";

const AuthenticationPage: FC = () => {
    const navigate = useNavigate();
    const parsedUrl = new URL(window.location.href);
    const code = parsedUrl.searchParams.get("code")

    const { cookieToken, error } = useSavingTokenViaTheApi({ code })

    useEffect(() => {
        if (cookieToken) {
            navigate('/')
        }
    }, [cookieToken, navigate])

    return (
        <>
            {error && <Authentication />}
        </>
    )
}

export default AuthenticationPage