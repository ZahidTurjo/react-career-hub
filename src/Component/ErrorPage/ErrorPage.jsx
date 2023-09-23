import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
       <div className="flex h-screen w-screen items-center justify-center bg-red-500">
         <div className="text-center bg-red-500 font-bold">
            <h2>oopppsss</h2>
            <Link to="/" >
            <button className="bg-green-500">Go back to home</button>
            </Link>
        </div>
       </div>
    );
};

export default ErrorPage;