import { h, Component } from "preact";
import "../styles/containers/app.scss";
import Header from "../components/Header";
import Main from "../containers/Main";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
