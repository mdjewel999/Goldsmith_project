import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const BookService = () => {
  const { user } = useContext(AuthContext);
  const navigate =useNavigate()

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const service = form.name.value;
    const sellerName = form.seller_name.value;
    const quantity = form.quantity.value;
    const rating =form.rating.value;
    const email = user?.email;
    const price = form.price.value;
    const img = form.photo.value;
  
    const toyBooking = {
      customerName: sellerName,
      email,
      img,
      service,
      quantity,
      rating,
      price,
    };

    console.log(toyBooking);

    fetch('https://happy-toy-house-server-mdjewel999.vercel.app/toybooking',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(toyBooking)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            alert('add booking successfully')

            navigate(`/adtoy`)
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl">Add Toys:  </h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">seller name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="seller_name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input type="number" name="quantity" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered" 
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default BookService;
