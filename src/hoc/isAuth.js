import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const isAuth = (WrappedComponent) => {
    const Component = (props) => {
        const { isAuthenticated } = useContext(AuthContext);
        const history = useHistory();

        if (!isAuthenticated) {
            history.push('/login');
            return null;
        } 
        // else if (!records) {
        //     history.push('/medical-record/create-pet-record');
        //     return null;
        // }

        return <WrappedComponent {...props} />
    }

    return Component;
}

export default isAuth;