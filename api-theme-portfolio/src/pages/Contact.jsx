import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"

function Contact() {
    return (
        <Layout>
            <div className="main-page">
                <div className="page-header">
                    <h1 className="page-title">GET /contact</h1>
                    <p className="page-subtitle">Send a message and connect with me</p>
                </div>
                <div className="contact-container">
                    <SocialLinks />
                    <ContactForm />
                </div>
            </div>
        </Layout>

        // TODO: make page responsive
    )
}

export default Contact