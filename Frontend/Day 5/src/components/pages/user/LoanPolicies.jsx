import { Card, CardContent, Typography, Button } from "@mui/material";
import '../../../assets/css/LoanPolicies.css';
import i1 from '../../../assets/images/equipment.jpg';
import i2 from '../../../assets/images/livestock.jpeg';
import i3 from '../../../assets/images/drought.jpg';
import i4 from '../../../assets/images/product.jpg';
import i5 from '../../../assets/images/croploan.jpg';
import Navbar from '../../services/Navbar';
import { Link} from 'react-router-dom'; // Import the useNavigate hook

const LoanPolicies = () => {
 // Initialize the navigate function

  const cardsData = [
    { imageUrl: i4, 
    title: 'Product Loan', 
    description: 'These loans are used by farmers to cover the cost of inputs such as seeds, fertilizers, pesticides, and labor required for planting and cultivating crops.' },

    { imageUrl: i2, 
    title: 'Livestock Loan', 
    description: 'Farmers may take out loans to purchase livestock or to cover expenses related to the care, feeding, and management of their animals. These loans may also be used for the construction of animal housing facilities' },

    { imageUrl: i3, 
    title: 'Disaster Loan', 
    description: ' In the event of natural disasters such as floods, droughts, or storms, farmers may require financial assistance to recover from crop losses or property damage. Disaster recovery loans help farmers rebuild and resume operations.' },

    { imageUrl: i1, 
    title: 'Equipment Loan', 
    description: 'Agricultural equipment, such as tractors, harvesters, and irrigation systems, can be expensive. Equipment loans are used to finance the purchase of such machinery or equipment, helping farmers improve efficiency and productivity.' },

    { imageUrl: i5, 
    title: 'Land Purchase Loan', 
    description: 'Farmers looking to expand their operations or acquire additional land may take out loans specifically for purchasing agricultural land.' }
  ];

  return (
    <div>
    <div><Navbar/></div>
    <h1 style={{ textAlign: "center", marginTop: "80px" }}>Personalized Loan Policies</h1>
    <div className="about-profile-grid">
      {cardsData.map((card, index) => (
        <Card key={index} className="about-profile-card">
          <img src={card.imageUrl} className="card-image" alt="Card" />
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">{card.title}</Typography>
            <Typography variant="body2" component="p">{card.description}</Typography>
            <Link to="/applyloan1"><div><Button variant="contained" color="primary" style={{margin: "auto", display: "block"}}>
              Apply
            </Button></div></Link>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default LoanPolicies;
