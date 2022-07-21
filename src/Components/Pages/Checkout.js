import React from 'react';
import {StoreProductInfo} from '../Assets/StoreProductInfo';
import {CheckoutCard} from '../Common/CheckoutCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = styled((theme) => ({
    root: {
        flexGrow:  1,
        padding: "2rem",
    },
}));

export const Checkout = () => {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                {StoreProductInfo.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} {...item}/>
                    </Grid>
                ))}
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Carrito de compras
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2} >
                    <FormRow/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Total:
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}