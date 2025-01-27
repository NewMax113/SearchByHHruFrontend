const GetCookie = (name: string) => {
  let token = ''

  const cookies = document.cookie.split('; ');

  for (let cookie of cookies) {
    const [key, value]: string[] = cookie.split('=');
    if (key === name) {
      token = decodeURIComponent(value)
    }
  }

  return token
}

export default GetCookie