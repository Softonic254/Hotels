function contact_us() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    if (name && email && comment != "") {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "sender@email_address.com",
            Password: "Enter your password",
            To: 'rotichenoch27@gmail.com',
            From: "sender@email_address.com",
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
        })
            .then(function (message) {
                alert("Feedback received!")
            });
    } else {
        alert("Kindly provide all the details");
    }
}