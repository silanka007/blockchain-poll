import { Grid, withStyles } from '@material-ui/core'
import React from 'react'

const styles = {
  pollContainer: {
    height: "70%",
    display: "flex",
  },
  pollList: {
    background: "yellow",
    width: "50%"
  },
  pollVotes: {
    background: "brown",
    width: "50%"
  },
}

function Poll({classes}) {
  return (
    <Grid className={classes.pollContainer}>
      <Grid className={classes.pollList}>polls</Grid>
      <Grid className={classes.pollVotes}>votes</Grid>
    </Grid>
  )
}

export default withStyles(styles)(Poll) 
