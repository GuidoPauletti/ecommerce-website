import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';


export default function ShopCartBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"transparent", color:"black", boxShadow:'none'}}>
        <Toolbar sx={{justifyContent:"right"}}>
          <Badge badgeContent={2} color="secondary" overlap="circular">
            <IconButton color="inherit"><LocalGroceryStoreIcon fontSize="large"/></IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
