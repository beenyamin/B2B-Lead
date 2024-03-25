import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fadeIn } from "../Varient";
import { motion } from "framer-motion";
const Reviews = () => {

      const [reviews, setReviews] = useState([]);

      useEffect(() => {
            fetch('/Reviews.json')
                  .then(res => res.json())
                  .then(data => {
                        setReviews(data)
                  })

      }, [])

      return (
            <div className="max-w-[1280px] mx-auto">
                  <div className="text-center text-black ">
                        <h2 className="lg:text-4xl text-2xl font-bold mb-3 pt-8">Over 300 companies use LeadForge</h2>
                        <p className="text-[#747474] text-lg">Our 98% of clients leave 5/5 star reviews with their high satisfaction <br />
                              Other 2% made it at least 4 stars</p>
                  </div>

                  <div className="border-2 rounded-2xl w-10/12 my-10 items-center justify-center mx-auto border-[#4c2393] ">
                        <Swiper
                              spaceBetween={30}
                              pagination={{
                                    clickable: true,
                              }}
                              modules={[Pagination]} className="mySwiper"  >

                              {reviews.map(review =>
                                    <SwiperSlide className="" key={review._id} >
                                          <motion.div variants={fadeIn("up", 0.20)}
                                                initial="hidden"
                                                whileInView={"show"}
                                                viewport={{ once: false, amount: 0.9 }}

                                                className=" flex flex-col items-center mx-20 my-24 ">
                                                <h2 className="text-2xl text-orange-300 "> {review.name}</h2>
                                                <p className="">{review.details}</p>
                                                <p className="">{review.rating}</p>
                                                <p className="">{review.review}</p>
                                          </motion.div>



                                    </SwiperSlide>)}

                        </Swiper>


                  </div>




            </div>
      );
};

export default Reviews;