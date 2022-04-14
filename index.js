function send(){
    var a = document.getElementById("message").value
    fetch("https://telemessage.herokuapp.com?message="+a)
    document.getElementById("message").value=""

}
