import { useEffect } from 'react';
import useAppContext from './useAppContext';

const useSetLoader = (loaderName, isloading) => {
  const { setLoader } = useAppContext();
  useEffect(() => {
    setLoader(loaderName, isloading);
    return () => setLoader(loaderName, false);
  }, [setLoader, loaderName, isloading]);
};

export default useSetLoader;
