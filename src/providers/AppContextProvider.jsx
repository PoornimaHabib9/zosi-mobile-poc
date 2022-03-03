import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../hooks/useAppContext';

export default function AppContextProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loaders = {};
  const addLoader = (name, value = null) => {
    loaders[name] = value || name;
    setIsLoading(!!Object.keys(loaders).length);
  };
  const removeLoader = (name) => {
    delete loaders[name];
    setIsLoading(!!Object.keys(loaders).length);
  };
  const setLoader = (name, loading) => {
    if (loading) {
      addLoader(name);
    } else {
      removeLoader(name);
    }
  };
  const currentEnv = process.env.REACT_APP_LAYOUT?.toUpperCase();
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        currentEnv,
        isLoading,
        addLoader,
        removeLoader,
        setLoader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
