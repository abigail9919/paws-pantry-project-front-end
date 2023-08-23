import { createContext } from "react";

const apiURL = () => {
    if (process.env.NODE_ENV === 'production'){
        return process.env.REACT_APP_PROD_API_URL;
      }
      else{
        return process.env.REACT_APP_DEV_API_URL;
      };
}

export const APIURLContext = createContext(apiURL());