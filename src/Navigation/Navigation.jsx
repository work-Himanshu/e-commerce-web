import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import NavigationButtons from './NavigationButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import Menu from './Menu';
import SearchIcon from '@mui/icons-material/Search';

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="flex justify-center hover:scale-95 transform cursor-pointer"
              onClick={() => navigate('/products/men')}
            >
              The ROY Store
            </Typography>
            <Box color="inherit">
              <SearchIcon className='mr-4'/>
              <ShoppingCartIcon
                onClick={() => navigate('/cart')}
                className="hover:scale-90"
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box>
          <Paper
            elevation={10}
            variant="h6"
            sx={{
              my: 2,
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 'bold',
            }}
          >
            The ROY Store
          </Paper>
          <NavigationButtons />
          <Menu />
        </Box>
      </Drawer>
    </>
  );
}

export default Navigation;
