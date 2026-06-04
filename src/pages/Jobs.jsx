import JobCard from "../components/JobCard";
import jobsData from '../data/jobsData'

function Jobs() {
    return(
        <div className="bg-gray-100 min-h-screen px-8 py-10" >

            <h1 className="py-10 text-4xl text-center font-bold text-gray-800 ">
                All Job Applications
            </h1>

            <p className="mt-4 font-medium text-center  text-gray-600">
                Track and Manage Your Job Applications
            </p>
            <div className="max-w-5xl mx-auto mt-8 flex gap-4">

               <input
                   type="text"
                   placeholder="Search jobs..."
                   className="w-full border border-gray-500 rounded-lg p-3" />

                
            

            <select className="border  border-gray-500 rounded-lg p-3">
                <option>Select  Status</option>
                <option>Selected</option>
                <option>Pending</option>
                <option>Rejected</option>
                <option>Interview</option>
            </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">

              {jobsData.map((job) =>(
                <JobCard
                key={job.key}
                company={job.company}
                role={job.role}
                location={job.location}
                status={job.status}
                />

              
             ))}
            </div>
        </div>
    );
}

export default Jobs;