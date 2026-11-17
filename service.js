
document.addEventListener("DOMContentLoaded", function () {

    // ALL RTO SERVICES
    const services = {
        "Driving Licence": {
            title: "Driving Licence",
            description: "New Driving Licence, International DL, Renewal, Change of Address, DL Extract, PSV Badge and pending DL applications.",
            about: "We provide guidance and documentation assistance for driving licence-related services. Requirements depend on the applicant's eligibility and the applicable government process.",
            documents: [
                "Proof of age",
                "Proof of address",
                "Applicant photograph, if required",
                "Existing driving licence for renewal, if applicable"
            ]
        },

        "Learner Licence": {
            title: "Learner Licence",
            description: "A Learner’s Licence allows you to legally learn and practice driving a motor vehicle under prescribed conditions. It is the first step towards obtaining a permanent Driving Licence.",
            about: "We assist customers in understanding the learner licence application process and its documentation requirements.",
            documents: [
                "Proof of age",
                "Proof of address",
                "Applicant photograph, if required",
                "Required application details"
            ]
        },

        "Vehicle Registration": {
            title: "Vehicle Registration",
            description: "Vehicle Registration is the official process of registering your vehicle with the RTO to obtain a valid Registration Certificate (RC).",
            about: "Get assistance in understanding the documents and steps involved in vehicle registration.",
            documents: [
                "Vehicle purchase invoice",
                "Form and application details as applicable",
                "Valid insurance documents",
                "Vehicle-related documents"
            ]
        },

        "RC Transfer": {
            title: "RC Transfer",
            description: "Ownership Transfer, Change of Address on RC, Hypothecation Addition or Removal, Name Correction.",
            about: "We help customers understand the documentation required for transferring vehicle registration ownership.",
            documents: [
                "Existing Registration Certificate",
                "Buyer and seller identity proof",
                "Valid vehicle insurance",
                "Applicable transfer forms"
            ]
        },

        "Duplicate RC": {
            title: "Duplicate RC",
            description: "Lost RC and new DL issue — duplicate documents issued quickly and 100% legally.",
            about: "We provide guidance for customers who need assistance with duplicate RC applications.",
            documents: [
                "Identity proof",
                "Vehicle registration details",
                "Police report, if applicable",
                "Applicable application forms"
            ]
        },

        "Insurance Renewal": {
            title: "Insurance Renewal",
            description: "Insurance Renewal ensures your vehicle remains legally insured and protected against unexpected risks and damages.",
            about: "We help customers understand their vehicle insurance renewal requirements and available documentation.",
            documents: [
                "Existing insurance policy",
                "Vehicle Registration Certificate",
                "Vehicle details",
                "Previous policy information, if available"
            ]
        },

        "PUC Certificate": {
            title: "PUC Certificate",
            description: "PUC Certificate certifies that your vehicle meets the required emission standards and complies with pollution control regulations.",
            about: "We provide information and assistance related to PUC certificate requirements.",
            documents: [
                "Vehicle Registration Certificate",
                "Vehicle registration number",
                "Previous PUC details, if available"
            ]
        },

        "Fitness Certificate": {
            title: "Fitness Certificate",
            description: "Fitness Certificate confirms that your vehicle is roadworthy, safe to drive, and meets the required RTO standards.",
            about: "We guide customers regarding fitness certificate documentation and the applicable process.",
            documents: [
                "Vehicle Registration Certificate",
                "Valid insurance",
                "Applicable vehicle documents",
                "Previous fitness certificate, if available"
            ]
        },

        "National Permit": {
            title: "National Permit",
            description: "National Permit allows commercial vehicles to legally operate across multiple states in India under authorized transport regulations.",
            about: "We help customers understand national permit-related requirements and documentation.",
            documents: [
                "Vehicle Registration Certificate",
                "Valid insurance",
                "Fitness certificate",
                "Applicable permit documents"
            ]
        },

        "Road Tax": {
            title: "Road Tax",
            description: "Road Tax is a mandatory government fee paid for the legal registration and operation of vehicles on public roads.",
            about: "We provide assistance in understanding road tax requirements and related vehicle documentation.",
            documents: [
                "Vehicle Registration Certificate",
                "Vehicle owner details",
                "Previous tax receipt, if available",
                "Applicable vehicle documents"
            ]
        },

        "Hypothecation": {
            title: "Hypothecation Addition / Removal",
            description: "Hypothecation is the process of adding or removing a bank or financier’s loan details from a vehicle’s Registration Certificate (RC).",
            about: "We help customers understand the documentation involved in adding or removing hypothecation from vehicle records.",
            documents: [
                "Vehicle Registration Certificate",
                "Financier documents or NOC, as applicable",
                "Owner identity proof",
                "Applicable application forms"
            ]
        },

        "NOC Application": {
            title: "NOC Application",
            description: "NOC Application is the process of obtaining a No Objection Certificate from the RTO to transfer or re-register a vehicle in another state.",
            about: "We provide guidance for customers who need assistance with vehicle NOC-related documentation.",
            documents: [
                "Vehicle Registration Certificate",
                "Valid insurance",
                "Applicable tax documents",
                "Owner identity proof"
            ]
        },

        "Ownership Transfer": {
            title: "Vehicle Ownership Transfer",
            description: "Ownership Transfer is the official process of transferring a vehicle’s legal ownership from one person to another through the RTO.",
            about: "We assist customers with understanding ownership transfer documentation and the applicable process.",
            documents: [
                "Existing Registration Certificate",
                "Buyer identity proof",
                "Seller identity proof",
                "Valid insurance",
                "Applicable transfer forms"
            ]
        },

        "Commercial Vehicle Services": {
            title: "Commercial Vehicle Services",
            description: "Commercial Vehicle Services help businesses register, manage, and maintain vehicles used for transportation and commercial purposes.",
            about: "We provide guidance for commercial vehicle documentation and transport-related service enquiries.",
            documents: [
                "Vehicle Registration Certificate",
                "Valid insurance",
                "Fitness certificate, if applicable",
                "Permit-related documents",
                "Owner or business details"
            ]
        },

        "Other RTO Services": {
            title: "Other RTO Services",
            description: "Contact us for assistance with other vehicle and transport documentation requirements.",
            about: "If you need assistance with a service not listed here, contact our team to discuss your requirements.",
            documents: [
                "Vehicle Registration Certificate, if applicable",
                "Identity proof",
                "Relevant vehicle documents",
                "Other documents depending on the service"
            ]
        }
    };


    // HOMEPAGE SERVICES
    const servicesGrid = document.getElementById("services-grid");

    if (servicesGrid) {

        servicesGrid.addEventListener("click", function (event) {

            const link = event.target.closest("[data-service]");

            if (!link) return;

            event.preventDefault();

            const serviceName = link.dataset.service;

            if (services[serviceName]) {
                window.location.href =
                    "service.html?service=" + encodeURIComponent(serviceName);
            }

        });

    }


    // SERVICE DETAILS PAGE
    const serviceTitle = document.getElementById("service-title");

    if (serviceTitle) {

        const params = new URLSearchParams(window.location.search);
        const serviceName = params.get("service");
        const service = services[serviceName];

        if (service) {

            document.title = service.title + " | RTO CONSULTANT CG14";

            serviceTitle.textContent = service.title;

            document.getElementById("service-description").textContent =
                service.description;

            document.getElementById("service-about").textContent =
                service.about;

            const documentList = document.getElementById("document-list");

            documentList.innerHTML = "";

            service.documents.forEach(function (documentName) {

                const listItem = document.createElement("li");

                listItem.textContent = documentName;

                documentList.appendChild(listItem);

            });

            const applyButton =
                document.getElementById("service-apply-button");

            if (applyButton) {
                applyButton.href =
                    "index.html?service=" +
                    encodeURIComponent(serviceName) +
                    "#apply";
            }

        } else {

            serviceTitle.textContent = "Service Not Found";

            document.getElementById("service-description").textContent =
                "Please return to our services page and select a valid service.";

            document.getElementById("service-about").textContent =
                "This service could not be found.";

            document.getElementById("document-list").innerHTML = "";

            const applyButton =
                document.getElementById("service-apply-button");

            if (applyButton) {
                applyButton.style.display = "none";
            }

        }

    }


    // PRESELECT SERVICE ON HOMEPAGE
    const serviceSelect = document.getElementById("service-type");

    if (serviceSelect) {

        const params = new URLSearchParams(window.location.search);
        const selectedService = params.get("service");

        if (selectedService && services[selectedService]) {
            serviceSelect.value = selectedService;
        }

    }


    // MOBILE MENU
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


    console.log("CG14 Service Pages Loaded Successfully.");

});
