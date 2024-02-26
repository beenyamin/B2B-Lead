import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className=" lg:py-28  bg-black  py-14 md:py-14 bg-[url('https://demoapus1.com/jobtex-new/wp-content/uploads/2023/06/slider81.jpg')]">
                <div className=" flex-col items-end lg:flex-row-reverse ">
                    <div className="text-center pt-10">
                        <h1 className="lg:text-4xl text-2xl font-bold text-white ">Find Your Highly Targeted Verified <br /> Lead For Only 30¢</h1>
                        <p className="py-3 lg:text-xl text-white ">Using your search criteria,<br /> we find and build highly targeted lists in <br />  48 hrs. ill your pipeline with high-quality <br /> human-verified leads at an affordable way.!</p>

                        <h1 className='text-white text-sm mb-1' >300+ Five Star Client Reviews</h1>
                        <Link to=''> <button className="py-3 px-7 font-medium text-md border-0 rounded-xl hover:bg-lime-500 bg-rose-400 text-white">GET STARTED</button></Link>

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
                <div className='text-white text-center lg:ml-96 md:ml-44 mt-5 flex space-x-14'>
                <div className=''>
                    <h2 className='text-2xl font-bold'>20k </h2>
                    <h2 className='text-sm'>Lead Each Week </h2>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>3Years </h2>
                    <h2 className='text-sm'>in Business </h2>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>100+ </h2>
                    <h2 className='text-sm'>Expert Researcher </h2>
                </div>
               
            </div>


           

            </div>

      


           

        </div>
    );
};

export default Banner;