import './App.css';
import Header from "./header";
import Banner from "./banner";
import Main from "./main";
import Footer from "./footer";

function App() {
  return (
      <div className="filter fit">
        <div className="container">

                <Header/>

                <Banner/>

                <Main />

                <Footer/>


        </div>
      </div>
  );
}

export default App;
