function Navbar() {
    return(
        <div className=" bg-gray-600 text-white  p-4  flex justify-between items-center">
            <h2 className="!text-white text-2xl ">Job Tracker</h2>

            <div className="flex gap-8 font-medium "> 
                <h4 className="hover:text-blue-300 hover:underline curser-pointer transition duration-300">Home</h4>
                <h4 className="hover:text-blue-300 hover:underline curser-pointer transition duration-300">Add Jobs</h4>
                <h4 className="hover:text-blue-300 hover:underline curser-pointer transition duration-300">Jobs</h4>
                <h4 className="hover:text-blue-300 hover:underline curser-pointer transition duration-300">Profile</h4>
            </div>
        </div>
    );
}
 
export default Navbar;