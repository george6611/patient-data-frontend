import React, {Fragment, useEffect} from 'react';
import { checkAuthenticated } from '../Auth/AuthWrappers';

const Layout = ({children}) =>{
    useEffect(() => {
        checkAuthenticated();
    }, []);
    return (
        <Fragment>
         {children}
        </Fragment>
    )
}
export default Layout;