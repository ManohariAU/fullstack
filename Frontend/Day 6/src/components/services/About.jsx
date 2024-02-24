import '../../assets/css/About.css';
import imageSrc from '../../assets/images/croploan.jpg'; // Import your image source
import Footer from './Footer';
import Navbar from './Navbar';

function AboutPage() {
  return (
    <div>
    <Navbar/>
    <div className="about-page">
      <div className="text-content">
      <h2>WHO WE ARE?</h2>
      <br></br>
        <p>
          AGROFUNDX is apex development bank, established in 1982 under an Act of Parliament to promote sustainable and equitable agriculture and rural development. In its journey of more than four decades, the premier development financial institution has transformed lives in Indian villages through agri-finance, infrastructure development, banking technology, promotion of microfinance, and rural entrepreneurship through SHGs & JLGs and more. It continues to aid in nation-building through participative financial and non-financial interventions, innovations, technology, and institutional development in rural areas.
        </p>
        <br></br>
        <h2>OUR FEATURES</h2>
        <br></br>
        <ul className="list-style-one">
                                <li>Low/No Interest Rate</li>
                                <li>User Friendly Documentation</li>
                                <li>Apply Online</li>
                                <li>Track Loans</li>
                                <li>Remainder for reschedule payments</li>
                            </ul>
      </div>
      <div className="image-content">
        <img src={imageSrc} alt="Description of the image" />
      </div>
    </div>
    <div><Footer/></div>
    </div>
  );
}

export default AboutPage;
