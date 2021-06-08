import React, { useReducer } from "react";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extArgs: action.extArgs,
        actionType: action.actionType,
      };
    case "RESPONSE":
      return {
        ...state,
        loading: false,
        data: action.data,
        extArgs: action.extArgs,
        actionType: action.actionType,
      };
    case "ERROR":
      return { loading: false, error: action.error };
    case "RESET":
      return { loading: false, error: null };
    default:
      throw Error("Something went wrong!");
  }
};

const useHttp = (props) => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
    actionType: null,
    extArgs: null,
  });

  const sendRequest = React.useCallback((url, params, actionType, extArgs) => {
    dispatchHttp({ type: "SEND", actionType: actionType, extArgs: extArgs });
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => {
        dispatchHttp({
          type: "RESPONSE",
          data: data,
          actionType: actionType,
          extArgs: extArgs,
        });
      })
      .catch((error) => dispatchHttp({ type: "ERROR", error: error.message }));
  }, []);

  const resetHttp = React.useCallback(() => {
    dispatchHttp({ type: "RESET" });
  }, []);

  return {
    isLoading: httpState.loading,
    error: httpState.error,
    data: httpState.data,
    sendRequest: sendRequest,
    reset: resetHttp,
    actionType: httpState.actionType,
    extArgs: httpState.extArgs,
  };
};

export default useHttp;
