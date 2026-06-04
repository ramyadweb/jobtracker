function Profile() {
    return(
        <div classname=" min-h-screen bg-gray-100 py-10">
            <h2 className="font-bold text-center text-3xl  text-gray-800 ">
                Profile

            </h2>
            <div className="text-center mt-6">
                Ramya D
            </div>

            <p className="mt-2 text-gray-600">
                Frontend Developer Fresher

            </p>

            <div className="mt-8">

             <h3 className="text-gray-800 text-xl font-bold">
                Skills

             </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1rounded-full">
                    HTML5
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1rounded-full">
                    CSS
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1rounded-full">
                    JavaScript
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1rounded-full">
                    React.js
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1rounded-full">
                    TailwindCSS
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1rounded-full">
                    REST API Integration
                  </span>

          
                </div>
            </div>

            <div className="mt-8">
                

              <h3 className="text-xl font-bold text-gray-800">
                Project

              </h3>
              <p className="mt-2 text-gray-600"> 
                Job Tracker Dashboard

              </p>
            </div>
              <div className="mt-8">

                <h3 className="text-gray-800 text-xl font-bold">
                    About

                </h3>
                <p className="mt-2 text-gray-600">
                    This Project helps users track job applications, interview status, and progress

                </p>
                </div>
        </div>
    );
}

export default Profile;