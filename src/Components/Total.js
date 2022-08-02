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
    height: '20vh',
});

const StylesH5 = styled('h5')({
  fontFamily:'Lucida Handwriting',
});

const CheckoutButton = styled(Button)({
    marginTop: '2rem',
    backgroundColor: '#dc3545',
    color: 'black',
})

export const Total = () => {

  const [{basket}, dispatch] = useStateValue();

  return (
    <Container>
        <StylesH5>Cantidad de productos: {basket?.length}</StylesH5>
        <h5>{accounting.formatMoney(getBasketTotal(basket), 'AR$')}</h5>
        <Link to='/checkout'>
          <CheckoutButton>Confirmar</CheckoutButton>
        </Link>
    </Container> 
  )  
}
