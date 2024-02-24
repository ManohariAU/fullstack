import '../../assets/css/ContactUs.css';
import back from'../../assets/images/Paddy.jpeg';
import Navbar from './Navbar';
const ContactUs = () => {
    return (
        <>
        <div>
        <Navbar/>
        <div id="img" style={{ backgroundColor:"palegreen", backgroundImage: `url(${back})` }} data-overlay="5"></div>
        <div className='vasa777'>
        <div className="cwrapper">
            <div className="title33">
                <h2>Contact Us Form</h2>
            </div>
            <div className="contact-form">
                <div className="cinput-fields">
                    <input type="text" className="cinput" placeholder="Name" />
                    <input type="text" className="cinput" placeholder="Email Address" />
                    <input type="text" className="cinput" placeholder="Phone" />
                    <input type="text" className="cinput" placeholder="Subject" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message"></textarea>
                    <div className="btn">Send</div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default ContactUs;