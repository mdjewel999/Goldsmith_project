import { useState } from "react";

const Categorys = () => {
  const [activeCard, setActiveCard] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const handleMenuClick = (cardNumber) => {
    if (activeCard === cardNumber) {
      setActiveCard(null);
    } else {
      setActiveCard(cardNumber);
    }
  };

  const handleViewDetails = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mb-14">
      <div>
        <h1 className="text-5xl text-center font-bold mt-14 mb-8">
          <button className="btn btn-primary w-1/2 ">
            Shop by category and subcategory
          </button>
        </h1>
      </div>
      <div className="navbar flex justify-center mb-8">
        <div className=" menu_bar">
          <ul className="menu menu-horizontal gap-5">
            <li className="text-3xl font-semibold">
              <button
                onClick={() => handleMenuClick(1)}
                className="btn btn-active rounded btn-primary font-bold text-1xl"
              >
                Diamond 
              </button>
            </li>
            <li className="text-3xl font-semibold">
              <button
                onClick={() => handleMenuClick(2)}
                className="btn rounded btn-primary font-bold text-1xl"
              >
                Platinum 
              </button>
            </li>
            <li className="text-3xl font-semibold">
              <button
                onClick={() => handleMenuClick(3)}
                className="btn rounded btn-primary font-bold text-1xl"
              >
               Silver 
              </button>
            </li>
          </ul>
        </div>
      </div>

      {activeCard === 1 && (
        <div className="card  bg-base-100 shadow-xl grid grid-cols-2 gap-8">
          <div className=" rounded">
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/7VXKGBz/1.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 550</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/25Sf8NW/9.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 540</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/tX98bns/12.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 2550</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/NsGJrcf/6.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 25350</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCard === 2 && (
        <div className="card  bg-base-100 shadow-xl grid grid-cols-2 gap-4 ">
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/4gwtS7T/5.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 27850</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/pvFP7xJ/3.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 278650</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5 </p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/5njmvfk/14.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 27850</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/QKvSMLG/8.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 278650</h2>
              <h3>Name: Platinum and Diamond Tennis Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCard === 3 && (
        <div className="card  bg-base-100 shadow-xl grid grid-cols-2 gap-4 ">
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/J2G3T3W/11.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 257860</h2>
              <h3>Name: Aquamarine Stud Earrings</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/dL0TC8N/13.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 257860</h2>
              <h3>Name: Aquamarine Stud Earrings</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/LzXDgkN/4.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 787250</h2>
              <h3>Name: Aquamarine Stud Earrings</h3>
              <p>Rating: 4.5</p>
              <p>
                Made of Fine Metal:- Metal Car The material used in this kids
                car is of top quality and gives a very good finish , hences best
                toy for kids.
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div>
            <figure>
              <img
                className="w-full h-72"
                src="https://i.ibb.co/swrcF6W/10.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: $ 78250</h2>
              <h3>Name: Rose Gold Bangle Bracelet</h3>
              <p>Rating: 4.5</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                odio consectetur soluta? Deserunt enim nemo asperiores dolore a
                eius itaque!
              </p>
              <div className="card-actions justify-end">
                <button onClick={handleViewDetails} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="modal">
          <div className="modal-box">
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <h2>Modal Title</h2>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorys;
