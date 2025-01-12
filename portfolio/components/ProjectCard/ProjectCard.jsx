// import React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const ProjectCard = ({data}) => {
//   return (
//     <div>
//     {data.map((item, index) => {
//       return ( // Return is explicitly used here
//         <Card sx={{ maxWidth: 345 }} key={index}>
//           <CardMedia
//             sx={{ height: 140 }}
//             image={item.image}
//             title={item.name}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {item.name} {/* Display the project's name */}
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               This is a project description placeholder for {item.name}.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//           </CardActions>
//         </Card>
//       );
//     })}
//   </div>
//   );
// }

// export default ProjectCard;





import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './ProjectCard.module.css';

const ProjectCard = ({item, key}) => {
  return (
  <div>
    <a href={item.link} target='_blank'>  
      <Card className={styles.cardContainer}>
        <CardMedia
          sx={{ height: 140}}
          image={item.image}
          title={item.link}
          />
        <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body3" sx={{ color: 'text.primary' }}>
          {item.description}
        </Typography>
        </CardContent>
      </Card>
    </a>
  </div>
  );
}

export default ProjectCard;