document.getElementById("btn-submit").addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == "abc@gmail.com" && userPassword == "akash") {
        window.location.href = 'banking.html';
    }
})