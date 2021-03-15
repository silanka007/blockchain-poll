import { Button, Grid, withStyles } from '@material-ui/core'
import React from 'react'

const styles = {
  navContainer: {
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 20px"
  }
}

export default withStyles(styles)(function Nav({classes}) {
  return (
    <Grid className={classes.navContainer}>
      <a href="#!">Blockchain Poll</a>
      <Button>Create Poll</Button>
    </Grid>
  )
})
