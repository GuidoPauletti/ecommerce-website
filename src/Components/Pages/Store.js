import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StoreProduct } from '../Common/StoreProduct';
import ShopCartBar from '../ShopCartBar';


export function Store() {
  return (
    <div>
        {ShopCartBar()} 
        <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StoreProduct/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StoreProduct/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StoreProduct/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <StoreProduct/>
            </Grid>
        </Grid>
        </Box>
    </div>
  );
}
