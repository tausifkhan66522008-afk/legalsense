document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            // Basic Validation
            if (!name || !email || !phone) {
                alert("Please fill in all mandatory fields.");
                return;
            }

            // Construct Mailto Link
            const recipient = "tausifkhan05062008gmail.com";
            const subject = encodeURIComponent("New User Registration - Legalsense");
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nSent from Legalsense Website.`);

            // Open Mail Client
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

            // Optional: simulate success message on UI
            // alert("Redirecting to email client to send details...");
        });
    }
});
