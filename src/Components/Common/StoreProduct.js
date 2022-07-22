import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function StoreProduct(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: props.id,
        name: props.name,
        type: props.type,
        price: props.price,
        image: props.image,
        description: props.description
      }
    })
  }

  return (
    <div>   
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <Typography
              variant='h5'
              color='textSecondary'
            >
              {accounting.formatMoney(props.price, "AR$")}
            </Typography>
          }
          title={props.name}
          subheader={props.type}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="Aritos"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Agregar a Carrito" onClick={addToBasket}>
            <AddShoppingCart fontSize='large' />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {props.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
