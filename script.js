
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
            });
        });
    }

    // FOOTER YEAR
    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    
// SERVICE SELECTION
const serviceLinks = document.querySelectorAll("[data-service]");
const serviceSelect = document.getElementById("service-type");
const applySection = document.getElementById("apply");

serviceLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {

        event.preventDefault();

        const selectedService = link.getAttribute("data-service");

        if (serviceSelect && selectedService) {
            serviceSelect.value = selectedService;
        }

        if (applySection) {
            applySection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
});


    // WHATSAPP SERVICE LINKS
    document.querySelectorAll("[data-service]").forEach(function (link) {
        link.addEventListener("contextmenu", function () {
            // Default browser context menu is not modified.
        });
    });

    // APPLICATION FORM — WHATSAPP ENQUIRY SYSTEM

const applicationForm = document.getElementById("application-form");
const applicationResult = document.getElementById("application-result");

function createApplicationId() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return "CG14-" + randomNumber;
}

if (applicationForm) {
    applicationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const vehicle = document.getElementById("vehicle-number").value.trim();
        const chassis = document.getElementById("chassis-number").value.trim();
        const service = document.getElementById("service-type").value;
        const address = document.getElementById("customer-address").value.trim();
        const message = document.getElementById("additional-message").value.trim();

        const documents = document.getElementById("documents");

        if (!name || !phone || !service || !address) {
            alert("Please fill all required fields.");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Please enter a valid 10-digit Indian mobile number.");
            return;
        }

        if (documents && documents.files.length > 0) {
            const maxSize = 5 * 1024 * 1024;
            const allowedTypes = [
                "application/pdf",
                "image/jpeg",
                "image/png"
            ];

            for (const file of documents.files) {
                if (!allowedTypes.includes(file.type)) {
                    alert("Please upload PDF, JPG or PNG documents only.");
                    return;
                }

                if (file.size > maxSize) {
                    alert("Each document must be smaller than 5 MB.");
                    return;
                }
            }
        }

        const applicationId = createApplicationId();

        const whatsappMessage =
`NEW RTO ENQUIRY

Application ID: ${applicationId}

Customer Name: ${name}
Mobile Number: ${phone}
Vehicle Number: ${vehicle || "Not provided"}
Chassis Number: ${chassis || "Not provided"}
Required Service: ${service}
Address: ${address}

Additional Message:
${message || "Not provided"}

Note: This is an enquiry for RTO consultancy assistance.`;

        const whatsappNumber = "916267102133";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(whatsappMessage);

        if (applicationResult) {
            applicationResult.style.display = "block";
            applicationResult.innerHTML = `
                <h3>Enquiry Ready!</h3>
                <p>Your Enquiry ID:</p>
                <strong>${applicationId}</strong>
                <p>WhatsApp will open with your enquiry details.</p>
                <p>Please press Send on WhatsApp to submit your enquiry.</p>
            `;
        }

        window.open(whatsappURL, "_blank");

        applicationForm.reset();
    });
}

    // TRACK APPLICATION — FRONTEND DEMO
    const trackForm = document.getElementById("track-form");
    const trackingResult = document.getElementById("tracking-result");

    if (trackForm) {
        trackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const trackingId = document.getElementById("tracking-id").value.trim().toUpperCase();
            const trackingPhone = document.getElementById("tracking-phone").value.trim();

            const applications = getApplications();

            const application = applications.find(function (item) {
                return (
                    item.id.toUpperCase() === trackingId &&
                    item.phone === trackingPhone
                );
            });

            if (!trackingResult) return;

            trackingResult.style.display = "block";

            if (!application) {
                trackingResult.innerHTML = `
                    <h3>Application Not Found</h3>
                    <p>Please check your Application ID and mobile number.</p>
                `;
                return;
            }

            const statuses = [
                "Submitted",
                "Documents Verification",
                "Processing",
                "Completed"
            ];

            const statusHTML = statuses.map(function (status) {
                const isActive = statuses.indexOf(status) <= statuses.indexOf(application.status);

                return `
                    <div class="status-step ${isActive ? "active" : ""}">
                        <span>${isActive ? "✓" : "○"}</span>
                        <p>${status}</p>
                    </div>
                `;
            }).join("");

            trackingResult.innerHTML = `
                <h3>Application Details</h3>
                <p><b>Application ID:</b> ${application.id}</p>
                <p><b>Customer:</b> ${escapeHTML(application.name)}</p>
                <p><b>Service:</b> ${escapeHTML(application.service)}</p>
                <p><b>Vehicle:</b> ${escapeHTML(application.vehicle || "Not provided")}</p>
                <p><b>Submitted:</b> ${application.date}</p>
                <p><b>Current Status:</b> ${escapeHTML(application.status)}</p>
                <div class="status-timeline">${statusHTML}</div>
                <p><small>This is demo tracking data stored in this browser.</small></p>
            `;

            trackingResult.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    }

    // SAFE TEXT DISPLAY HELPER
    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[character];
        });
    }

    // CONTACT FORM / WHATSAPP LINKS
    document.querySelectorAll(".whatsapp-button, .floating-whatsapp").forEach(function (button) {
        button.addEventListener("click", function () {
            // WhatsApp URL is already provided in the HTML.
        });
    });

});
