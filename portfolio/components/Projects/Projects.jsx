// import React, {useEffect, useState} from 'react';
// import ProjectCard from '../ProjectCard/ProjectCard';
// import styles from './Projects.module.css';
// import data from '../../data';

// const Projects = () => {
//   //console.log('fetch the data :', data);
//   const [projectData, setProjectData] = useState();

//   useEffect(()=>{
//     setProjectData(data);
//   },[])
//   //console.log(projectData)

  
//   return (
//     <div>
//       <h1 className={styles.title}>Projects :</h1>
//       <div className={styles.projectsContainer}>
//       {projectData && projectData.map((item, key) => <ProjectCard item={item} key={key}/>)}
//       </div>
//     </div>
//   )
// }

// export default Projects;



// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
// import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import required modules

// import ProjectCard from '../ProjectCard/ProjectCard';
// import styles from './Projects.module.css';
// import data from '../../data';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const Projects = () => {
//   const [projectData, setProjectData] = useState();

//   useEffect(() => {
//     setProjectData(data);
//   }, []);

//   return (
//     <div>
//       <h1 className={styles.title}>Projects:</h1>
//       <div className={styles.projectsContainer}>
//         {projectData && (
//           <Swiper
//             spaceBetween={30}
//             centeredSlides={true}
//             loop={true} // Enable infinite loop
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             navigation={true}
//             modules={[Autoplay, Pagination, Navigation]}
//             // className="mySwiper"
//             className={`${styles.swiperContainer}`} // Custom class for Swiper
//             breakpoints={{
//               // Adjust the number of visible slides and spacing based on screen size
//               320: {
//                 slidesPerView: 1, // 1 slide visible on small screens
//                 spaceBetween: 20,
//                 centeredSlides: true
//               },
//               640: {
//                 slidesPerView: 1, // 2 slides on medium screens
//                 spaceBetween: 20,
//               },
//               770: {
//                 slidesPerView: 1, // 2 slides on medium screens
//                 spaceBetween: 20,
//               },
//               1024: {
//                 slidesPerView: 2, // 3 slides on large screens
//                 spaceBetween: 20,
//               },
//               1440: {
//                 slidesPerView: 4, // 4 slides on extra-large screens
//                 spaceBetween: 30,
//               },
//             }}
//           >
//             {projectData.map((item, key) => (
//               <SwiperSlide key={key}>
//                 <ProjectCard item={item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;



import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import data from '../../data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    setProjectData(data);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Projects:</h1>
      <h2 className={styles.subTitle}> Below are some of my projects, more you can <a href='https://github.com/MeethKothari?tab=repositories' target='_blank'> FIND HERE</a> </h2>
      <div className={styles.projectsContainer}>
        {projectData && (
          <Swiper
            spaceBetween={20} // Space between slides
            centeredSlides={true} // Center align the active slide
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={`${styles.customSwiper}`}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {projectData.map((item, key) => (
              <SwiperSlide
                key={key}
                className={styles.customSlide}
              >
                <ProjectCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Projects;
