var buTon=document.querySelectorAll('input[type="checkbox"]');
for (var i = 0; i < buTon.length; i++) {
    
buTon[i].addEventListener("click",changeTheme);
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
}

var hamburger=document.getElementById('hamburger');
hamburger.addEventListener("click",hideSwitcher);
var clickk=2;
function hideSwitcher(e){
    e.preventDefault();
    clickk++;
    var switcher=document.getElementById('checkbox');
    if(clickk%2==0){
    switcher.style.display="block";
    }
    else{
        switcher.style.display="none";}
}
