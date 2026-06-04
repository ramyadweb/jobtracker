import JobCard from './JobCard';
import jobsData from'../data/jobsData';
function RecentApplications() {
    return(
        <section className="bg-white py-8 " >
            <h2 className="text-center text-2xl py-5 font-bold text-gray-800">
                Recent Applications
            </h2>
            <div className="gap-6 grid grid-cols-3 mt-8 mx-auto max-w-5xl">
                {jobsData.map((job) =>(
                    <JobCard
                      key={job.id}
                      company={job.company}
                      role={job.role}
                      location={job.location}
                      status={job.status}
                    />
                    
                ))}
                

            </div>
            
            
                   

        </section>
    );
}

export default RecentApplications;