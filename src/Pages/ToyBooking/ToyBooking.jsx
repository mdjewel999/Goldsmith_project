import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToyBookingRow from "./ToyBookingRow";

const ToyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [filterName, setFilterName] = useState("");

  const url = `https://happy-toy-house-server-mdjewel999.vercel.app/toybooking?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://happy-toy-house-server-mdjewel999.vercel.app/toybooking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
            setFilteredBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`https://happy-toy-house-server-mdjewel999.vercel.app/toybooking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
          setFilteredBookings(newBookings);
        }
      });
  };

  const handleFilter = () => {
    if (filterName) {
      const filtered = bookings.filter((booking) => booking.toysName === filterName);
      setFilteredBookings(filtered);
    } else {
      setFilteredBookings(bookings);
    }
  };

  return (
    <div>
      <h2 className="text-5xl mt-4 mb-4">Ad To Toy bookings: {bookings.length}</h2>
      <div className="flex items-center justify-between mb-4">
        <div>
          <input
            type="text"
            placeholder="Enter Toy Name"
            className="input input-bordered"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleFilter}>
            Filter
          </button>
        </div>
      </div>
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
              <th>Toys Name</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Price</th>
              <th>
                <button className="btn btn-outline btn-accent">Button</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <ToyBookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToyBooking;
