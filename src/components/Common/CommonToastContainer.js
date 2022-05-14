import { ToastContainer } from "react-toastify";

const CommonToastContainer = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="custom-toast"
        />
    );
};

export default CommonToastContainer;
