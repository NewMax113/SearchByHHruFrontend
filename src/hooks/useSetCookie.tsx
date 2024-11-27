function setCookie(name: string, value: string, time: number) {
    const expires = new Date();
    expires.setTime(expires.getTime() + time); // Устанавливаем срок хранения в днях
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export default setCookie