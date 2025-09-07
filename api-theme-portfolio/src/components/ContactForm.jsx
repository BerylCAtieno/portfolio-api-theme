import '../css/contact.css';

function ContactForm() {
    return (
        <div class="form-section">
                <div class="contact-form">
                    <div class="form-header">
                        POST /api/v1/contact<br />
                        Content-Type: application/json<br />
                        Authorization: Bearer visitor-token
                    </div>

                    <form id="contactForm" onsubmit="handleSubmit(event)">
                        <div class="form-group">
                            <label for="name" class="form-label">name</label>
                            <input type="text" id="name" name="name" class="form-input" required />
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-label">email</label>
                            <input type="email" id="email" name="email" class="form-input" required />
                        </div>

                        <div class="form-group">
                            <label for="subject" class="form-label">subject</label>
                            <input type="text" id="subject" name="subject" class="form-input" required />
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">message</label>
                            <textarea id="message" name="message" class="form-textarea" required placeholder="Tell me about your project, idea, or just say hello..."></textarea>
                        </div>

                        <button type="submit" class="form-submit" id="submitBtn">
                            POST /send-message
                        </button>

                        <div id="statusMessage" class="status-message"></div>
                    </form>
                </div>
        </div>
    );
}

export default ContactForm;
