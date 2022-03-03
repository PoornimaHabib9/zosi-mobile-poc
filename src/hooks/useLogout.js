import { useAuth0 } from '@auth0/auth0-react';

const useLogout = () => {
  const { logout: logoutAuth0 } = useAuth0();
  const logout = (param) => {
    localStorage.clear();
    logoutAuth0(param);
  };

  return {
    logout,
  };
};

export default useLogout;
