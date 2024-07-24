document.addEventListener('DOMContentLoaded', () => {
    const startChatButton = document.getElementById('start-chat');
    const chatbotSection = document.getElementById('chatbot');

    if (startChatButton && chatbotSection) {
        startChatButton.addEventListener('click', () => {
            chatbotSection.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolling to chatbot section');
        });
    } else {
        console.error('Start chat button or chatbot section not found');
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    } else {
        console.error('Contact form not found');
    }

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                console.log(`Scrolling to ${targetId}`);
            } else {
                console.error(`Target element ${targetId} not found`);
            }
        });
    });

    console.log('JavaScript initialization complete');
});
