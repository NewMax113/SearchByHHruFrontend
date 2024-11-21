const useGetCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [key, value]: any[] = cookie.split('=');
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null;
}

export default useGetCookie