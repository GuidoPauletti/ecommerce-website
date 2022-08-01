import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import { useStateValue } from '../StateProvider';


export default function ShopCartBar() {

  const [{basket}, dispatch] = useStateValue();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"transparent", color:"black", boxShadow:'none'}}>
        <Toolbar sx={{justifyContent:"right"}}>
          <Badge badgeContent={basket.length} color="secondary" overlap="circular">
            <IconButton color="inherit">
              <Link to="/shoppingcart"><LocalGroceryStoreIcon fontSize="large"/></Link>
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
