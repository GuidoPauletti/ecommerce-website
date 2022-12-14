import React from 'react';
import {CheckoutCard} from '../Common/CheckoutCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Total } from '../Total';
import { useStateValue } from '../../StateProvider';

const Container = styled('div')({
    
    flexGrow:  1,
    padding: "2rem",
    
});

export const ShoopingCart = () => {

    const [{basket}, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} {...item}/>
                    </Grid>
                ))}
            </React.Fragment>
        )
    }

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography
                     align='center'
                     gutterBottom variant='h4'
                     sx={{
                        fontFamily:'Lucida Handwriting',
                        color: '#dc3545'
                     }}
                     >
                        Carrito de compras
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2} >
                    <FormRow/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}