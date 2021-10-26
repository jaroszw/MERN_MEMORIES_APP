import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
