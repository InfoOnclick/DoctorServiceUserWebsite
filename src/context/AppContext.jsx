import { createContext } from "react";
import { doctors,Lawyerss } from "../assets/assets";

export const AppContext = createContext()


const AppContextProvider = (props) => {

    const currencySymbol = '$'

    const value ={
        doctors, currencySymbol,Lawyerss
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;