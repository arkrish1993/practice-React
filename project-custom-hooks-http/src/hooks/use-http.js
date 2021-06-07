import React, { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = React.useCallback(async (requestConfig, applyToData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, requestConfig.params);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyToData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
