function JobCard({Company, Role, Location, Status}) {
    return(
        <div className="">

            <h3 className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
                {Company}</h3>

             <p className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
                {Role }</p>

             <p className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
             
                {Location}</p>

             <p className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
                {Status}</p>
        </div>
    );
}
export default JobCard;