import React from 'react';
import accounting from 'accounting';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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

  return (
    <Container>
        <h5>Cantidad de productos: 3</h5>
        <h5>{accounting.formatMoney(50, 'AR$')}</h5>
        <CheckoutButton>Confirmar</CheckoutButton>
    </Container> 
  )  
}
