gsap.from("h1", {
    opacity: 0,
    duration: 3,
    repeat: -1,
    x: 200
})

gsap.from("h2", {
    opacity: 0,
    duration: 3,
    repeat: -1,
    x: -200
})

const image = document.querySelector("#myImage");
const text = document.querySelector("h3");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener('click', vegetarian);
buttonTwo.addEventListener('click', noVegetarian);

function vegetarian() {
    image.setAttribute("src", "https://plus.unsplash.com/premium_photo-1661340805519-4200ea1b01f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1pbGslMjBhbmQlMjBlZ2dzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you eat eggs and dairy products?";
   
    buttonOne.addEventListener("click", dairyEgg);
    buttonTwo.addEventListener("click", noDairyEgg);
}

function dairyEgg() {
    image.setAttribute("src", "https://plus.unsplash.com/premium_photo-1669687759526-750edcfb6cae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG9tZWxldHRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "You might like an omelet!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noDairyEgg() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVnZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you eat vegetables and eggs?";

    buttonOne.addEventListener("click", egg);
    buttonTwo.addEventListener("click", noEgg);

}

function egg() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1568625435602-552bac80484e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoYWtzaHVrYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "You might like a shakshuka!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noEgg() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1637382752225-d7f97e1ddd03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbGt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you eat vegetables and dairy products?";

    buttonOne.addEventListener("click", dairy);
    buttonTwo.addEventListener("click", noDairy);

}

function dairy() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1597131628347-c769fc631754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fFBhc3RhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "You might like a pasta alla norma!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noDairy() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1641919105784-f0838a756e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHJhdyUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you only eat raw vegetables?";

    buttonOne.addEventListener("click", rowVegetables);
    buttonTwo.addEventListener("click", noRowVegetables);
}

function rowVegetables() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1643310765760-ac258fad80a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxzYWxhZCUyMHdpdGglMjBjdWN1bWJlcnMlMkMlMjBhdm9jYWRvJTIwYW5kJTIwY2FzaGV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "You might like a salad with avocado and cashews."
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noRowVegetables() {
    image.setAttribute("src", "https://www.edimdoma.ru/system/images/contents/0001/2640/wide/shutterstock_532153210.jpg?1620891911" );
    text.textContent = "You might like kohlrabi stuffed with mushrooms and vegetables."
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

/*-----noVegetarian----*/
function noVegetarian() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1600180786608-28d06391d25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvdyUyMHBvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you eat pork?";
   
    buttonOne.addEventListener("click", pork);
    buttonTwo.addEventListener("click", noPork);
}

function pork() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1569352304334-6e422cd70ecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9yayUyMHJpYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "You might like pork ribs.";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noPork() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1602470521006-aaea8b2fcc36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhdyUyMGJlZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you eat beef?";

    buttonOne.addEventListener("click", beef);
    buttonTwo.addEventListener("click", noBeef);
}

function beef() {
    image.setAttribute("src", "https://yummybook.ru/cloud/images/recipe/item/10312/image_middle_216460fd1195d3be127213646_27213648.jpg" );
    text.textContent = "You might like lula kebab.";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noBeef() {
    image.setAttribute("src", "https://kartinkof.club/uploads/posts/2023-05/1683443775_kartinkof-club-p-tushka-kuritsi-kartinki-3.jpg" );
    text.textContent = "Do you eat chicken?";

    buttonOne.addEventListener("click", chicken);
    buttonTwo.addEventListener("click", noСhicken);
}

function chicken() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnVnZ2V0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "You might like nuggets.";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noСhicken() {
    image.setAttribute("src", "https://plus.unsplash.com/premium_photo-1667545932065-59f39c3c4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you eat mutton?";

    buttonOne.addEventListener("click", mutton);
    buttonTwo.addEventListener("click", noMutton);
}

function mutton() {
    image.setAttribute("src", "https://tutknow.ru/uploads/posts/2021-02/1613409779_shurpa-iz-baraniny.jpg" );
    text.textContent = "You might like shurpa.";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noMutton() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "Do you eat fish or seafood?";

    buttonOne.addEventListener("click", fish);
    buttonTwo.addEventListener("click", noFish);
}

function fish() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1551014700-0ca41391f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxmaXNoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "You might like grilled fish.";
    
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function noFish() {
    image.setAttribute("src", "https://plus.unsplash.com/premium_photo-1661349883108-3aea72f4a83f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxlbXB0eSUyMHBsYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" );
    text.textContent = "The best thing for you today is a fasting day!";

    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}