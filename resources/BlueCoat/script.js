//Bookings 

/*let numberTag = document.querySelector('#number');
let btnTotal = document.querySelector('#booking_cost');
let calenderReference = document.querySelector('#calendar');

const BaseAmount = 40000

numberTag.addEventListener("change", CalculateTotal);
calenderReference.addEventListener('focus', CalculateTotal);


function CalculateTotal(){

    var numberOfPatients = Number(numberTag.value) || 1;

    if (numberOfPatients == 0 || numberOfPatients == 1){

        btnTotal.innerText = `Booking cost :N${Number(BaseAmount)}`
        return;
    }

    btnTotal.innerText = `Booking cost :N${Number(numberOfPatients * BaseAmount)}`
    return;
};*/


















//Navbar menu
const hamburger = document.getElementById('hamburger');
const navbar= document.getElementById('navbar');

hamburger.addEventListener('click', () =>{
  navbar.classList.toggle('show');
});


//Home slideshow
const myslide = document.querySelectorAll('.myslide'),
    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  
  let i;
  for(i = 0;i<myslide.length;i++){
    myslide[i].style.display = "none";
  }
  for(i = 0;i<dot.length;i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }
  if(n > myslide.length){
     counter = 1;
     }
  if(n < 1){
     counter = myslide.length;
     }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
};


//Hide/Show Password

var view = false;
function toggle(){
  if (view) {
    document.getElementById('password').setAttribute('type', 'password');
    document.getElementById('eye').style.color='#7a797e';
    view = false;
  }
  else {
     document.getElementById('password').setAttribute('type', 'text');
     document.getElementById('eye').style.color='#5887ef';
    view = true;
  }
};