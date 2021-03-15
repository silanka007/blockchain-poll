import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <Grid className="App">
      <Nav />
      <Header />
    </Grid>
  );
}

export default App;
