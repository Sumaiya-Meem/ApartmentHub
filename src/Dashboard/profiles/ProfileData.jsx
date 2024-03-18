/* eslint-disable react/prop-types */

const ProfileData = ({memberData}) => {
    return (
        <div>
            <div className="bg-white rounded-lg overflow-auto shadow-lg">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="py-4 px-6 text-center bg-gray-300  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Agreement Accept Date
                            </th>
                            <th className="py-4 px-6 text-center bg-gray-300  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Block
                            </th>
                            <th className="py-4 px-6 text-center bg-gray-300  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Floor
                            </th>
                            <th className="py-4 px-6 text-center bg-gray-300  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Room No
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {memberData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : ''}>
                                <td className="py-2 px-3 border-r text-center">{item.acceptDate}</td>
                                <td className="py-2 px-3 border-r text-center">{item.blockName}</td>
                                <td className="py-2 px-3 border-r text-center">{item.floorNo}</td>
                                <td className="py-2 px-3 border-r text-center">{item.apartmentNo}</td>  
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfileData;