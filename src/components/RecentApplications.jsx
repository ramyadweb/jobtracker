import JobCard from './JobCard';
function RecentApplications() {
    return(
        <section className="bg-white py-8 " >
            <h2 className="text-center text-2xl py-5 font-bold text-gray-800">
                Recent Applications
            </h2>
            <div className="gap-6 grid grid-cols-3 mt-8 mx-auto max-w-5xl">
                <JobCard />
                <JobCard />
                <JobCard />
                

            </div>
            
            
                   

        </section>
    );
}

export default RecentApplications;