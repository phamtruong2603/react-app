import React, { useState } from 'react';

export const mainProviders = React.createContext()

export const MainProvider = ({children}) => {

    const [dataPersonal , setDataPersonal] = useState(
        {
            img: "https://nguoinoitieng.tv/images/nnt/101/0/bfof.jpg",
            name: "Phạm Xuân Trường",
            ID : "26032001",
        }
    );
    return (
        <mainProviders.Provider value={{dataPersonal}}>
            {children}
        </mainProviders.Provider>
    );
}