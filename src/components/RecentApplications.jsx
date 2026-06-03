function RecentApplications() {
    return(
        <section className="bg-white py-10" >
            <h2 className="text-center text-2xl py-10 font-bold text-gray-800">
                Recent Applications
            </h2>
            <div className="max-w-3xl mx-auto mt-6 ">
                <table className="w-full border border-gray-300 text-center" >
                    <thead className="bg-gray-300">
                      <tr>
                        <th className="p-3 border border-gray-800">Company</th>
                        <th className="p-3 border border-gray-800">Role</th>
                        <th className="p-3 border border-gray-800">Status</th>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td className="p-3 border border-gray-600">Sarvam</td>
                        <td className="p-3 border border-gray-600">Web Developer</td>
                        <td className="p-3 border border-gray-600">Pending</td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td className="p-3 border border-gray-600">ThiDiff</td>
                        <td className="p-3 border border-gray-600">Software Testing</td>
                        <td className="p-3 border border-gray-600">Rejected</td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td className="p-3 border border-gray-600">InSnap</td>
                        <td className="p-3 border border-gray-600">Data Analyst</td>
                        <td className="p-3 border border-gray-600">Selected</td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <td className="p-3 border border-gray-600">Synthetics</td>
                        <td className="p-3 border border-gray-600">Cyber </td>
                        <td className="p-3 border border-gray-600">Rejected</td>
                      </tr>
                    </thead>
                </table>
            </div>
                   

        </section>
    );
}

export default RecentApplications;