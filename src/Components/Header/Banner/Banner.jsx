import { Link } from 'react-router-dom';
import BannerImage from "../../../../public/images/Banner.png";
const Banner = () => {
    return (
        // <div className="lg:py-28 bg-black py-14 md:py-14 bg-[url('https://demoapus1.com/jobtex-new/wp-content/uploads/2023/06/slider81.jpg')]" style={{ backdropFilter: 'blur(90px)' }}>
        // </div>

        <div className=" bg-center min-h-screen"
        style={{
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '', // This line is optional, as it's already transparent in the original code
            opacity: '90.79',
            transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s', }} >

        <div className="inset-0 bg-cover min-h-screen"
            style={{
                height: '200%',
                backdropFilter: 'blur(8px)',
                backgroundColor: '',   }} >
                    
    
            <div className="container mx-auto pt-28">

                <div className="text-center pt-8 lg:pt-24">
                    <p className="lg:text-5xl text-2xl lg:font-semibold font-bold text-white">Find Your Highly Targeted Verified <br /> <span className=''>Lead For Only 40¢</span></p>
                    <p className=" lg:py-5 lg:text-xl text-sm text-white mt-4">Using your search criteria, we Will find and build highly targeted lists in 48 hrs. <br/> fill your pipeline with high-quality  human-verified leads at an affordable <br /> way.!</p>
    
                    <h1 className='text-white text-sm mb-1 mt-8'>300+ Five Star Client Reviews</h1>
                    <Link to='/contact'> <button className="py-3 px-12 shadow-2xl shadow-black font-medium text-md border-0 rounded-xl hover:bg-lime-500 bg-[#4c2393] text-white">GET STARTED</button></Link>
    
                </div>
            </div>
    
            <div className='text-center mt-4 lg:mt-5'>
                <div className="rating ">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400"  checked/>
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400" checked />
                </div>
            </div>
            <div className='text-white pb-20 text-center justify-center max-auto mt-6 flex flex-col lg:flex-row space-y-5 lg:space-x-20 '>
                <div className=''>
                    <h2 className='lg:text-3xl text-xl lg:mt-5 font-semibold lg:font-semibold'>50k </h2>
                    <h2 className='lg:text-xl lg:mt-2'>Lead Each Week </h2>
                </div>
                <div className=''>
                    <h2 className='lg:text-3xl text-xl font-medium lg:font-bold'>5 Years </h2>
                    <h2 className='lg:text-xl text-sm lg:mt-2'>in Business </h2>
                </div>
                <div className=''>
                    <h2 className='lg:text-3xl text-xl font-medium lg:font-bold'>100+ </h2>
                    <h2 className='text-sm lg:text-xl lg:mt-2'>Expert Researchers </h2>
                </div>
            </div>
    
        </div>
    </div>
    




    );
};

export default Banner;