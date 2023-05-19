import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
       <div className='mb-8 mt-8'>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-blue-500 shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-purple-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">NHR Remote Control Car, 4 Function Remote Control Car </h1>
                    <p className="py-6">New Model RC Car with LED Light Remote Car for Kids (3+ Years, Blue)strong and resistant to fall, to deal with a variety of barbaric  operation. </p>
                    <p className="py-6">100% harmless plastic and electronic elements. Car body with environmentally friendly anti-fall material,   </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default About;