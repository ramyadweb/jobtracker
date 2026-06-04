function AddJob() {
    return(
        <div className="min-h-screen bg-gray-100 py-10 ">
            <form className="max-w-xl mx-auto bg-white shadow-md rounder-xl p-8">

             <h3 className="text-2xl font-bold  text-gray-800 mb-6">
                Add New Job Application</h3>

                <label className="block text-gray-700 font-medium">
                  Company Name:
                </label>
                <input 
                  type="text" 
                  placeholder="Enter the Company Name"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4" 
                />

                <label className="block text-gray-700 font-medium">
                    Job Role:
                </label>
                <input 
                  type="text"
                  placeholder="Enter the Role"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4"
                />

                <label className="block text-gray-700 font-medium">
                    Location:
                </label>
                <input 
                  type="text"
                  placeholder="Enter the Location"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4"
                  
                />

        
             
                <label className="block text-gray-700 font-medium">
                   Status:
                </label>
             
                <select className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4">
                  <option>Select Status</option>
                  <option>Selected</option>
                  <option>Pending</option>
                  <option>Interviews</option>
                  <option>Rejected</option>
                </select>

             
             
                <label>
                    Applied Date:

                </label>
                <input 
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4"
                 />
             
                <label>
                    Notes:

                </label>
             
                <textarea 
                  rows="4" cols="30"
                  placeholder="Write notes here...."
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-4">

                </textarea>

                <button 
                  type="submit" value="send"
                  className="w-full bg-blue-400 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
                >
                    Save Job

                </button>
             
             


            </form>

        </div>
    );
}

export default AddJob;