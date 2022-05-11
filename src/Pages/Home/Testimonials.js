import React from 'react';
import quote from '../../assets/icons/quote.svg';
import peoplel from '../../assets/images/people1.png';
import peoplel2 from '../../assets/images/people2.png';
import peoplel3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
  
     const reviews = [
         {
             _id: 1,
             name: 'Winson Herry',
             review: '',
             location: 'california',
             img: peoplel
         },
         {
             _id: 2,
             name: 'Winson Herry',
             review: '',
             location: 'california',
             img: peoplel2
         },
         {
             _id: 3,
             name: 'Winson Herry',
             review: '',
             location: 'california',
             img: peoplel3
         }
     ]
 


    return (
        <section className='my-28'>
            <div className='flex justify-between'>
           <div>
           <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
          <h2 className='text-3xl '>What Our Patients say</h2>
           </div>
          <div>
          <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>

            </div>
 
         

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    > </Review>)
                }

            </div>
            
        </section>
    );
};

export default Testimonials;