import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                );
            }}
        />
    );
}

export default PrivateRoute;