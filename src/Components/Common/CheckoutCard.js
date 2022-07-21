import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';



export function CheckoutCard(props) {

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
          <IconButton>
            <DeleteIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
