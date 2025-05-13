import FoodCard from './FoodCard';
import FoodData from '../data/data';
import toast, { Toaster } from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Grid, Navigation } from 'swiper/modules';

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Grid, Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={3} // base: mobile view
          grid={{ rows: 2, fill: 'row' }}
          breakpoints={{ 
           
            200:{
              slidesPerView: 1, // Tablet
              grid: { rows: 2, fill: 'row' },
            },
            450:{
              slidesPerView: 1, // Tablet
              grid: { rows: 2, fill: 'row' },
            },
            
            640: {
              slidesPerView: 2, // Tablet
              grid: { rows: 2, fill: 'row' },
            },
            1024: {
              slidesPerView: 3, // Desktop
              grid: { rows: 2, fill: 'row' },
            },
          }}
          className="custom-swiper"
           
        
        >
          {FoodData.map((food) => (
            <SwiperSlide key={food.id} className="w-full sm:w-1/2 lg:w-1/3">
              <FoodCard
                id={food.id}
                name={food.name}
                rating={food.rating}
                img={food.img}
                price={food.price}
                desc={food.desc}
                handleToast={handleToast}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FoodItems;
