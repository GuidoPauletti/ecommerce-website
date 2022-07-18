import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StoreProduct } from '../Common/StoreProduct';
import ShopCartBar from '../ShopCartBar';
import { StoreProductInfo } from '../Assets/StoreProductInfo';


export function Store() {
  return (
    <div>
        {ShopCartBar()} 
        <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={4}>
            {StoreProductInfo.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <StoreProduct key={product.id} {...product}/>
                </Grid>
            ))}
        </Grid>
        </Box>
    </div>
  );
}
