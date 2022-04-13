function send(){
    var a = document.getElementById("message").value
    fetch("https://telemessage.herokuapp.com/"+a)
    document.getElementById("message").value=""

}
