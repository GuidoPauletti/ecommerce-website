import React from 'react';
import accounting from 'accounting';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { Link } from 'react-router-dom';

const Container = styled('div')({
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '20vh'
});

const CheckoutButton = styled(Button)({
    marginTop: '2rem',
    backgroundColor: 'powderblue',
})

export const Total = () => {

  const [{basket}, dispatch] = useStateValue();

  return (
    <Container>
        <h5>Cantidad de productos: {basket?.length}</h5>
        <h5>{accounting.formatMoney(getBasketTotal(basket), 'AR$')}</h5>
        <Link to='/checkout'>
          <CheckoutButton>Confirmar</CheckoutButton>
        </Link>
    </Container> 
  )  
}
