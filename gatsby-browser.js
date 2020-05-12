import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const wrapRootElement = ({ element }) => {

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick

            />
            {element}
        </>
    );
}
