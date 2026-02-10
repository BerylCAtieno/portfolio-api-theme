import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import '../css/contact.css'

function Contact() {
    return (
        <Layout>
            <div className="main-page">
                <div className="page-header">
                    <h1 className="page-title">Contact Me</h1>
                    <p className="page-subtitle">Send a message and connect with me</p>
                </div>
                <div className="contact-container">
                    <SocialLinks />
                    <ContactForm />
                </div>
            </div>
        </Layout>

    )
}

export default Contact

// make sure messages and all social links work
