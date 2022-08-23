import "./App.css";
import Header from "./components/header/header.component";
import Body from "./components/body/body.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="h-screen flex items-start justify-center ">
      <div className="md:w-6/12 container flex flex-col items-center justify-center px-12 md:px-0">
        
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
