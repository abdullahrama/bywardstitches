function sendEmail() {
    var email = document.getElementById("emailInput").value.trim();
    if (email === "") {
        alert("Please enter an email address.");
        return;
    }
    window.location.href = "confirmation.html?email=" + encodeURIComponent(email);
}

window.onload = function() {
    var emailMessage = document.getElementById("emailMessage");
    if (emailMessage) {
        var params = new URLSearchParams(window.location.search);
        var email = params.get("email") || "unknown email";
        emailMessage.innerText = "An email has been sent to " + email + "!";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".confirm-btn").addEventListener("click", function () {
        const bookingType = document.getElementById("booking-type").value;
        const specialist = document.getElementById("specialist").value;
        const appointmentDate = document.getElementById("appointment-date").value;
        const appointmentTime = document.getElementById("appointment-time").value;
        localStorage.setItem("bookingType", bookingType);
        localStorage.setItem("specialist", specialist);
        localStorage.setItem("appointmentDate", appointmentDate);
        localStorage.setItem("appointmentTime", appointmentTime);
        window.location.href = "bookingconfirmation.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const languageSelect = document.getElementById("language");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const saveButton = document.getElementById("saveBtn");
    function loadFromLocalStorage() {
        if (localStorage.getItem("accountData")) {
            let data = JSON.parse(localStorage.getItem("accountData"));
            nameInput.value = data.name;
            languageSelect.value = data.language;
            emailInput.value = data.email;
            phoneInput.value = data.phone;
        }
    }
    saveButton.addEventListener("click", function () {
        let accountData = {
            name: nameInput.value,
            language: languageSelect.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        localStorage.setItem("accountData", JSON.stringify(accountData));
        alert("Account details saved!");
    });

    loadFromLocalStorage();
});
