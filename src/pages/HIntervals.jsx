import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from
'@mui/material';
import { useData } from '../hooks/UseData';
import LIntervals from './LIntervals';
// wraps the default MUI Card component to customise it with props
export default function HIntervals() {
    const data = useData("http://localhost:3000/runningMethods")
return (
<>
{data?.map(run=>
<LIntervals title={run.title} decription={run.description} origin={run.origin} fitness_level={run.fitness_level}/>
)}
</>
);
}
// ++ Add support for a button text prop as well, test rendering it