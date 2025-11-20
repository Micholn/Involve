import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";

import involve from "../../images/involve.png";


const Navbar = () => {
    
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
           <Typography className={classes.heading} variant="h2" align="center">
              Involve
           </Typography>
           <img className={classes.image} src={involve} height="60" alt="icon" />
        </AppBar>
     )
}

export default Navbar;