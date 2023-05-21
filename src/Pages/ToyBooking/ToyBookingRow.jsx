// import React from 'react';

const ToyBookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, rating, email, service, price, img, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-active">Delete</button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{email}</td>
      <td>
        {rating}  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Update</span>
        ) : (
          <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Update</button>
        )}
      </th>
    </tr>
  );
};

export default ToyBookingRow;
