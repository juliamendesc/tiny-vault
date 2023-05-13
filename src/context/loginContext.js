import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useWeb3React } from "@web3-react/core";
import useMetaMaskOnboarding from "hooks/useMetaMaskOnboarding";
import useEagerConnect from "hooks/useEagerConnect";
import useENSName from "hooks/useENSName";

export const LoginContext = createContext();

// eslint-disable-next-line react/prop-types
const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { active, error, activate, chainId, account, setError } = useWeb3React();

  const { isMetaMaskInstalled, isWeb3Available, startOnboarding, stopOnboarding } =
    useMetaMaskOnboarding();

  const triedToEagerConnect = useEagerConnect();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);

  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  const value = {
    isAuthenticated,
    isLoggedIn,
    setIsLoggedIn,
    isConnecting,
    setIsConnecting,
    setConnecting,
    triedToEagerConnect,
    web3,
    error,
    activate,
    chainId,
    account,
    setError,
    ENSName,
    active,
    setIsAuthenticated,
    connecting,
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  };

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;
