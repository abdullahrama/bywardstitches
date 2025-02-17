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
