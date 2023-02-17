import { useContext } from "react"
import { AppContext } from "./app-context"

export const withAppContext = (Component) => {

    const WrapperComponent = (props) => {

        const context = useContext(AppContext);
        
        return <Component {...props} context={context} />
    }

    return WrapperComponent;
}