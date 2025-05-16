document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navList.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navList.classList.remove('active');
                }
            }
        });
    });
    
    // Form submission
    const enquiryForm = document.getElementById('enquiryForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, phone, message });
            
            // Show success message
            alert('Thank you for your enquiry! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to a newsletter service
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            this.reset();
        });
    }
    
    // Chat bots functionality
    const whatsappBot = document.getElementById('whatsappBot');
    const callBot = document.getElementById('callBot');
    
    if (whatsappBot) {
        whatsappBot.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Close call bot options if open
            if (callBot.classList.contains('active')) {
                callBot.classList.remove('active');
            }
        });
    }
    
    if (callBot) {
        callBot.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Close whatsapp bot options if open
            if (whatsappBot.classList.contains('active')) {
                whatsappBot.classList.remove('active');
            }
        });
    }
    
    // Close chat options when clicking outside
    document.addEventListener('click', function(e) {
        if (!whatsappBot.contains(e.target) && !callBot.contains(e.target)) {
            whatsappBot.classList.remove('active');
            callBot.classList.remove('active');
        }
    });
});

// WhatsApp bot functions
function startWhatsAppChat(topic) {
    // In a real implementation, this would open WhatsApp with a pre-filled message
    const phoneNumber = "9608956267"; // Replace with your school's WhatsApp number
    const message = `Hello TR Convent School, I'm interested in ${topic}. Can you please provide more information?`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappLink, '_blank');
    
    console.log(`Starting WhatsApp chat about ${topic}`);
}

// Call bot functions
function makeCall(department) {
    // In a real implementation, this would call the appropriate number
    let phoneNumber;
    
    switch(department) {
        case 'Admissions':
            phoneNumber = "9608956267";
            break;
        case 'Principal':
            phoneNumber = "9608956267";
            break;
        case 'General':
            phoneNumber = "9608956267";
            break;
        default:
            phoneNumber = "9608956267";
    }
    
    // Create tel link
    const telLink = `tel:${phoneNumber}`;
    
    // For demonstration, we'll just show an alert
    alert(`Calling ${department} at ${formatPhoneNumber(phoneNumber)}`);
    
    // In a real implementation, you would use:
    // window.location.href = telLink;
    
    console.log(`Calling ${department} at ${phoneNumber}`);
}

// Helper function to format phone number for display
function formatPhoneNumber(phoneNumber) {
    return `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
}