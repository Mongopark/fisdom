var buTon=document.querySelector('input[type="checkbox"]');
buTon.addEventListener("click",changeTheme);
var click=2;
function changeTheme(e){
    click++;
    var theMe=document.getElementById('theme');
    var instruct=document.getElementById('switch');
    var slider=document.getElementById("slider");
    if(click%2==0){
    theMe.href="css/applight.css";
    instruct.textContent="Switch to Dark mode";
slider.classList.replace("roller","slider");}
    
   
    else{
        instruct.textContent="Switch to Light mode";
        theMe.href="css/appdark.css";
        slider.classList.replace("slider","roller");}
}

