import { Grid, Typography, withStyles } from '@material-ui/core'
import React from 'react'

const styles = {
  headerContainer: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:"70px",
  },
  headingTitle: {
    fontSize: "30px",
    margin: "10px"
  },
  headingSubTitle: {
    fontSize: "20px"
  }
}

function Header({classes}) {
  return (
    <Grid className={classes.headerContainer}>
      <Typography className={classes.headingTitle}>Project Title</Typography>
      <Typography className={classes.headingSubTitle}>Direct from Blockchain</Typography>
    </Grid>
  )
}

export default withStyles(styles)(Header)
