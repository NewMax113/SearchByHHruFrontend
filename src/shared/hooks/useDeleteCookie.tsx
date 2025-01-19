const useDeleteCookie = () => {
  const deleteCookie = (name: string) => {
    console.log(name)
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  return deleteCookie;
};

export default useDeleteCookie;