import { Link } from "react-router-dom";
function Navbar() {
    return(
        <div className=" bg-gray-600 text-white  p-4  flex justify-between items-center">
            <h2 className="!text-white text-2xl ">Job Tracker</h2>

            <div className="flex gap-8 font-medium "> 
                <Link to="/" className="hover:text-blue-300 hover:underline">
                   Home
                </Link>
                <Link to="/" className="hover:text-blue-300 hover:underline ">
                   Add Jobs
                </Link>
                <Link to="/" className="hover:text-blue-300 hover:underline ">
                   Jobs
                </Link>
                <Link to="/" className="hover:text-blue-300 hover:underline ">
                   Profile
                </Link>
            </div>
        </div>
    );
}
 
export default Navbar;