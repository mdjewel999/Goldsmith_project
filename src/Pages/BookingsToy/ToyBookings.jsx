

const ToyBookings = () => {

    const url = ``;
    console.log(url);
    
    return (
        <div>
            <h2 className="text-5xl">Your ToyBookings:</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ToyBookings;