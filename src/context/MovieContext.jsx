import React, { createContext, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {


return (
    <MovieContext.Provider value={{}}>
      {children}
    </MovieContext.Provider>
)

}

export default MovieProvider;