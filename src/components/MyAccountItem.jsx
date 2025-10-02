import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from
'@mui/material';

export default function MyAccount({
      id = 'Integer',
      runnerId = 'Number',
      firstName = 'Name',
      lastName = 'Surname',
      emailId = 'Email',
      password = 'Private'
}) {

return (
<Card sx={{ maxWidth: 400 }}>
<CardActionArea>
<CardMedia 
height="300" 

/>

<CardContent>
            <Typography gutterBottom variant="h5" component="div">
              
              {firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">{emailId}
              
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">{origin}
              {origin}
            </Typography>
            <Typography variant="body2" color="text.secondary">{fitness_level}
              {fitness_level}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"></Button>
        </CardActions>
      </Card>
);
}
