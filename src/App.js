import { Grid, withStyles } from "@material-ui/core";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Poll from "./components/Poll";

const styles = {
  app: {
    width: "100vw",
    height:"100vh",
  }
}

function App({classes}) {
  return (
    <Grid className={classes.app}>
      <Nav />
      <Header />
      <Poll />
    </Grid>
  );
}

export default withStyles(styles)(App);
