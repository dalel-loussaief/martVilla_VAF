import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';
import Navbar from '../../../../components/common/Navbar.jsx';

const Header = () => {
  const classes = useStyles();

  return (
    // <AppBar position="static">
    //   <Toolbar className={classes.toolbar}>
    //     <Typography variant="h7" className={classes.title}>
    //       MARTVILLA
    //     </Typography>
    //     <Box display="flex">
    //     <Typography variant="h7" className={classes.title}>
    //         Explore new Properties
    //       </Typography>
    //       {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
    //       <div className={classes.search}>
    //           <div className={classes.searchIcon}>
    //             <SearchIcon />
    //           </div>
    //           <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
    //         </div>
    //       {/* </Autocomplete> */}
    //     </Box>
    //   </Toolbar>
    // </AppBar>
    <p></p>
  );
};

export default Header;