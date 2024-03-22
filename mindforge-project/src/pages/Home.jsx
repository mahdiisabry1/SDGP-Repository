import Indtroduction from '../components/Indtroduction'
import Courses from '../components/Courses';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Indtroduction />
      <Courses />
    </div>
  );
}

export default Home
