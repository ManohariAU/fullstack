import Footer from "../../services/Footer";
import '../../../assets/css/UHome.css';
import img1 from  '../../../assets/images/Homeone.jpg'
import img2 from '../../../assets/images/Hometwo.jpg'
import AdminNavbar from "../../services/AdminNavbar";

const AdminHome = () => {
    return (
        <>
        <div>
            <AdminNavbar/>
            <div>
        <section className="about-section" >
            <div className="container777">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="sec-title777">
                                <h2>From Field to Finance: <br></br>Streamlined Loan Process!</h2>
                            </div>
                            <ul className="list-style-one">
                                <li>Low/No Interest Rate</li>
                                <li>User Friendly Documentation</li>
                                <li>Apply Online</li>
                                <li>Track Loans</li>
                                <li>Remainder for reschedule payments</li>
                            </ul>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img
                                src={img1} style={{height:300,width:400}} alt="" /></a></figure>
                            <figure className="image-2"><a href="#" className="lightbox-image" data-fancybox="images"><img
                                src={img2} style={{height:300, width:300}} alt="" /></a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </div>
        <div>
        <Footer/>
        </div>
        </>);

};

export default AdminHome;