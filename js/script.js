
alert(" Grand - 170+  \n Shartnoma - 145+  \n Super shartnoma - 120+");

var elform = document.querySelector(".form");
var elinput = document.querySelector(".input__form");
var elselect = document.querySelector(".input__select");
var heading = document.querySelector(".info");
var img = document.querySelector(".img");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var answerText = document.querySelector(".answer-text");


var first = 170;
var second = 145;
var third = 120;

elform.addEventListener ("submit", function(evt){
  evt.preventDefault();



  if (elinput.value >= first && elinput.value <= 227){

  heading.innerHTML= ' "Tabriklaymiz. Siz Universitetga grand asosida o\'qishga qabul qilindingiz !"  Bale bale ';
  heading.style.color="rgb(3, 65, 3)";
  img.style.display="block";
  two.style.display="none";
  three.style.display="none";
  four.style.display="none";
  }

  else if (elinput.value >=second && elinput.value <= 169) {
    heading.innerHTML = ' "Tabriklaymiz. Siz Universitetga shartnoma asosida o\'qishga qabul qilindingiz !" ';
    heading.style.color = "orange";
    img.style.display="none";
    two.style.display="block";
    three.style.display="none";
    four.style.display="none";
  }

  else if (elinput.value >=third && elinput.value <=144) {
    heading.innerHTML = ' "Tabriklaymiz. Siz Universitetga supper kontrakt asosida o\'qishga qabul qilindingiz !" ';
    heading.style.color = "rgb(211, 36, 97)";
    img.style.display="none";
    two.style.display="none";
    three.style.display="block";
    four.style.display="none";
  }

  else if(isNaN(elinput.value)){
    heading.innerHTML =  "Iltimos bu yerga faqat son kiriting !";
    heading.style.color = "blue";
  }

  else if(elinput.value >= 228){
    heading.innerHTML =  "Kechirasiz maxmimum ball 227 bunaqa saytni aldamang!";
    heading.style.color = "brown";
  }

  else if(elinput.value < 119 && elinput.value >= 0){
    heading.innerHTML = "Afsuski siz bu yilgi imtihondan o'ta olmadingiz. Keyingi yil harakat qilib ko'ring";
    heading.style.color = "red";
    img.style.display="none";
    two.style.display="none";
    three.style.display="none";
    four.style.display="block";
  }

  else if(elinput.value < 0){
    heading.innerHTML =  "Iltimos musbat son kiriting!";
    heading.style.color = "brown";
  }


});