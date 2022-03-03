import { useContext, createContext } from 'react';

export const AppContext = createContext({
  theme: true,
  isLoading: false,
});
export default function useAppContext() {
  return useContext(AppContext);
}
