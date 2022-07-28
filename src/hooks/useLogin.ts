const useLogin = () => {
  const login = (params: {
    name: string;
    password: string;
    isBank: boolean;
  }) => {
    console.log(params);
  };

  return { login };
};

export default useLogin;
