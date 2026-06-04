function JobCard({company, role, location, status, appliedOn, notes}) {
    const statusColor =
        status === "Pending"
         ?"bg-yellow-100 text-yellow-700"
         : status === "Interviews"
         ? "bg-orange-100 text-orange-700"
         : status === "Rejected"
         ? "bg-red-100 text-red-700"
         : status === "Selected"
         ? "bg-green-100 text-green-700"
         : "bg-gray-100 text-gray-700";
    return(
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-300 text-center">

            <h3 className="text-xl font-bold text-gray-800">
                {company}</h3>

             <p className="mt-2 text-gray-600">
                {role }</p>

             <p className="mt-2 text-sm text-gray-500">
             
                {location}</p>

             <span className={`mt-4 inline-block px-3 py-1 rounded-md text-sm font-medium ${statusColor}`}>
                {status}</span>

              
              
        </div>
    );
}
export default JobCard;