import  { useState } from 'react';

const Categorys = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleMenuClick = (cardNumber) => {
    setActiveCard(cardNumber);
  };

  return (
    <>
    <div>
        <h1>Shop by category</h1>
    </div>
      <div className="navbar flex justify-center">
        <div className=" menu_bar">
          <ul className="menu menu-horizontal">
            <li>
              <a onClick={() => handleMenuClick(1)}>Toy Cars</a>
            </li>
            <li>
              <a onClick={() => handleMenuClick(2)}>Animal toys</a>
            </li>
            <li>
              <a onClick={() => handleMenuClick(3)}>Sports toys</a>
            </li>
          </ul>
        </div>
      </div>

      
      {activeCard === 1 && (
      
         <div className="card  bg-base-100 shadow-xl grid grid-cols-2 gap-8">
          <div className=' rounded'>
          <figure>
            <img className='w-full h-72' src="https://m.media-amazon.com/images/I/61xk5Zw7-0L._AC_UL320_.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Price: $ 500</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
          </div>
         <div className=''>
         <figure>
            <img className='w-full h-72' src="https://m.media-amazon.com/images/I/71hjjVXYWLL._AC_UL320_.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Price: $ 120</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
         </div>
         <div>
         <figure>
            <img className='w-full h-72' src="https://m.media-amazon.com/images/I/51531iAlpnL._AC_UL320_.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Price: $ 250</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
         </div>
         <div>
         <figure>
            <img className='w-full h-72' src="https://m.media-amazon.com/images/I/61AD6VKjZDL._AC_UL320_.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Price: $ 250</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
         </div>
         
        </div>
       
      )}
     

      {activeCard === 2 && (
         <div className="card  bg-base-100 shadow-xl grid grid-cols-2 gap-4 ">
         <div>
         <figure>
           <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">Shoes!2</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
           </div>
         </div>
         </div>
        <div>
        <figure>
           <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">Shoes!2</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
           </div>
         </div>
        </div>
        <div>
        <figure>
           <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">Shoes!2</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
           </div>
         </div>
        </div>
        <div>
        <figure>
           <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">Shoes!2</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
           </div>
         </div>
        </div>
        
       </div>
      )}

      {activeCard === 3 && (
        <div className="card  bg-base-100 shadow-xl grid grid-cols-2 gap-4 ">
        <div>
        <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!3</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        </div>
       <div>
       <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!3</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
       </div>
       <div>
       <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!3</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
       </div>
       <div>
       <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!3</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
       </div>
       
      </div>
      )}
    </>
  );
};

export default Categorys;
