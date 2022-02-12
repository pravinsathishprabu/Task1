function validate(){
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(name == ""){
        document.getElementById("nameerr").innerHTML = "Name is required!";
    }
    if(email == ""){
        document.getElementById("emailerr").innerHTML = "Email is required!";
    }
    if(mobile == ""){
        document.getElementById("moberr").innerHTML = "Mobile Number is required!";
    }
    else if(mobile.length!=10){
        document.getElementById("moberr").innerHTML = "Mobile Number is not valid!";
    }
    if(password == ""){
        document.getElementById("passerr").innerHTML = "Password is required!";
    }
    else if(password.length<6){
        document.getElementById("passerr").innerHTML = "Password is Must contain 6 characters";
    }
}