import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import '../components/styles/home.scss'

const Home = () => {
  return (
<main className="home">
  <div className="home__navbar">
    <Navbar />
  </div>
  <div className="home__details">
      <Sidebar />
    <div className="home__main">
        <Cards />
        <Table />
    </div>
  </div>
</main>

  );
};

export default Home;
