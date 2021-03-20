function contact_us() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    if (name && email && comment != "") {
        alert("Thank you for your feedback "+name)
    }else{
        alert("Kindly provide all the details")
    }
}