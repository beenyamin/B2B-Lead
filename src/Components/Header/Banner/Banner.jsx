import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        // <div className="lg:py-28 bg-black py-14 md:py-14 bg-[url('https://demoapus1.com/jobtex-new/wp-content/uploads/2023/06/slider81.jpg')]" style={{ backdropFilter: 'blur(90px)' }}>
        // </div>

        <div className=" min-h-screen bg-cover bg-center "
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/6150381/pexels-photo-6150381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }} >
        <div className=" inset-0 "
            style={{
                height: '100%',
                backdropFilter: 'blur(7px)',
                backgroundColor: '',
            }} >
    
            <div className="container mx-auto pt-28">
                <div className="text-center pt-10">
                    <h1 className="lg:text-4xl text-2xl font-bold text-white ">Find Your Highly Targeted Verified <br /> Lead For Only 30¢</h1>
                    <p className="py-10 lg:py-5 lg:text-xl text-white ">Using your search criteria,<br /> we find and build highly targeted lists in <br />  48 hrs. fill your pipeline with high-quality <br /> human-verified leads at an affordable way.!</p>
    
                    <h1 className='text-white text-sm mb-1 mt-6' >300+ Five Star Client Reviews</h1>
                    <Link to=''> <button className="py-3 px-7 shadow-2xl shadow-black font-medium text-md border-0 rounded-xl hover:bg-lime-500 bg-[#4c2393] text-white">GET STARTED</button></Link>
    
                </div>
            </div>
    
            <div className='text-center mt-4'>
                <div className="rating ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <div className='text-white pb-20 text-center justify-center max-auto mt-6 flex flex-col lg:flex-row space-y-5 lg:space-x-10 '>
                <div className=''>
                    <h2 className='lg:text-2xl text-xl lg:mt-5 font-medium lg:font-bold'>20k </h2>
                    <h2 className='text-sm'>Lead Each Week </h2>
                </div>
                <div className=''>
                    <h2 className='lg:text-2xl text-xl font-medium lg:font-bold'>3 Years </h2>
                    <h2 className='text-sm'>in Business </h2>
                </div>
                <div className=''>
                    <h2 className='lg:text-2xl text-xl font-medium lg:font-bold'>100+ </h2>
                    <h2 className='text-sm'>Expert Researchers </h2>
                </div>
            </div>
    
        </div>
    </div>
    




    );
};

export default Banner;