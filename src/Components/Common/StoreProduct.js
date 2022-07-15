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

export function StoreProduct() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(50, "AR$")}
          </Typography>
        }
        title="Aritos"
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Aritos"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Un arito hecho por Andre Preisz. Bueno, en realidad este no, pero por ahora mostramos esta imagen, saludos.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar a Carrito">
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
            Hechoo a mano, na mentira
          </Typography>
          <Typography paragraph>
            Ya nose que poner (Discard any mussels that don&apos;t open.)
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  );
}
