// import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { Navbar } from "./components";
import './app.css'
const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      {/* <Welcome /> */}
    </div>
    {/* <Services />
    <Transactions />
    <Footer /> */} 
    <h1 className="text-white">
hello there pti
    </h1>
  </div>
);

export default App;
