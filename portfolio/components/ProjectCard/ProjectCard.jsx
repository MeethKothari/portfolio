import styles from './ProjectCard.module.css';
import Swal from 'sweetalert2';

const ProjectCard = ({ item }) => {
  
  const handleProjectRedirection = (event, name, link) => {
    event.preventDefault(); // Prevents immediate redirection

    let alertText = 'Redirecting to project page...';

    if (name === 'Medify (Appointment Booking)') {
      alertText = 'Data is fetched from database so it may take some time to load....';
    } else if (name === 'X-Exit (Resignation)') {
      alertText = 'Use "Admin" as username and password to login for HR, and register and login as any name as username and password to login for EMPLOYEE.';
    } else if (name === 'ChatBot') {
      alertText = 'Try to ask some questions like hello, hi, how are you, because I have added static questions and answers.';
    }

    Swal.fire({
      title: 'Success!',
      text: alertText,
      icon: 'success',
      confirmButtonText: 'Cool'
    }).then(() => {
      window.open(link, '_blank'); // Redirects after clicking "Cool"
    });
  };

  return (
    <a href={item.link} target='_blank' onClick={(event) => handleProjectRedirection(event, item.name, item.link)}>
      <div className={styles.cardContainer}>
        <div>
          <img src={item.image} height={'230px'} width={'100%'} style={{ borderRadius: '15px' }} alt={item.name} />
          <div className={styles.cardContent}>
            <p><strong>{item.name}</strong></p>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;



{/* 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
  
  
  <Card className={styles.cardContainer}>
        <CardMedia
          sx={{ height: 140}}
          image={item.image}
          title={item.link}
          />
        <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div" >
          {item.name}
        </Typography>
        <Typography variant="body3" sx={{ color: 'text.primary' }}>
          {item.description}
        </Typography>
        </CardContent>
      </Card> */}