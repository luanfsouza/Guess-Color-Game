let colorOne = document.getElementById("color-one");
let two = document.querySelector("#two");
let rgb = document.querySelector("#rgb");
let clickClass = [];
let clickId = [];
let cardXarray = [];
function oi(event) {
  cardXarray.push(event.path[1].id);
  let cardX = document.getElementById(cardXarray[cardXarray.length - 1]);
  // console.log(event.path[1].children[1])
  clickClass.push(event.path[1].children[1].className);
  console.log(clickClass);
  clickId.push(event.path[1].children[1].id);
  console.log(clickId);

  if (clickClass.length >= 2) {
    if (
      clickClass[clickClass.length - 2] == clickClass[clickClass.length - 1]
    ) {
      console.log("sao igauis");
      cardX.style.cssText = `transform: rotateY(180deg);`;
      cardX = document.getElementById(
        cardXarray[cardXarray.length - 2]
      ).style.cssText = `transform: rotateY(180deg);`;
    }
  }

  if (clickClass[clickClass.length - 1] == "ones") {
    rgb.innerText = `RGB(231, 67, 67)`;
  } else if (clickClass[clickClass.length - 1] == "twos") {
    rgb.innerText = `RGB(231, 163, 67)`;
  } else if (clickClass[clickClass.length - 1] == "threes") {
    rgb.innerText = `RGB(53, 155, 228)`;
  }
  //    console.log(event.path[1].id);
  console.log(cardX);
  console.log(cardXarray);
  //  cardX.style.cssText = `width: 10000000px;`
}
two.addEventListener("click", oi);
// event.path[1].children[1].classList.contains("ones");

let boxCard = [
  { tag: "div", id: "color-one", tabindex: "0", class: "ones" },
  { tag: "div", id: "color-two", tabindex: "0", class: "twos" },
  { tag: "div", id: "color-three", tabindex: "0", class: "threes" },
  { tag: "div", id: "color-four", tabindex: "0", class: "ones" },
  { tag: "div", id: "color-five", tabindex: "0", class: "twos" },
  { tag: "div", id: "color-six", tabindex: "0", class: "threes" },
];
let sbox1 = document.createElement(boxCard[0].tag);
let sbox2 = document.createElement(boxCard[1].tag);
let sbox3 = document.createElement(boxCard[2].tag);
let sbox4 = document.createElement(boxCard[3].tag);
let sbox5 = document.createElement(boxCard[4].tag);
let sbox6 = document.createElement(boxCard[5].tag);
function criarElement(tag){
  for(let i = 0; i<boxCard.length-1;i++){
    return document.createElement(tag);
  }
  
}

let pedro = criarElement(boxCard[0].tag);
console.log(pedro);
document.body.appendChild(pedro)
pedro.innerText = 'sdnifbnai'

let cardOne = document.getElementById("card-one");
let cardTwo = document.getElementById("card-two");
let cardThree = document.getElementById("card-three");
let cardFour = document.getElementById("card-four");
let cardFive = document.getElementById("card-five");
let cardSix = document.getElementById("card-six");

let sboxGroup = [sbox1, sbox2, sbox3, sbox4, sbox5, sbox6];
function generator() {


  // let items = ["a", "b", "C", "D", "E"];
  let numero = [0, 1, 2, 3, 4, 5];
  let call = [];
  function randomNumCall(list) {
    for (let i = 1; i <= 3; i++) {
      let numRandom1 = Math.floor(Math.random() * list.length);
      call.push(list[numRandom1]);
    }
    return call;
  }
  function getT(list, itens = 6) {
    return [...list].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, itens);
  }

  console.log(getT(numero));
  let urso = getT(numero);
  console.log(getT(numero)[0]);
  console.log(urso);
  console.log(urso);
  console.log(
    `${urso[0]},${urso[1]},${urso[2]},${urso[3]},${urso[4]},${urso[5]},`
  );
  cardOne.appendChild(sboxGroup[urso[0]]);
  sbox1.setAttribute("tabindex", boxCard[0].tabindex);
  sbox1.setAttribute("id", boxCard[0].id);
  sbox1.setAttribute("class", boxCard[0].class);

  cardTwo.appendChild(sboxGroup[urso[1]]);
  sbox2.setAttribute("tabindex", boxCard[1].tabindex);
  sbox2.setAttribute("id", boxCard[1].id);
  sbox2.setAttribute("class", boxCard[1].class);

  cardThree.appendChild(sboxGroup[urso[2]]);
  sbox3.setAttribute("tabindex", boxCard[2].tabindex);
  sbox3.setAttribute("id", boxCard[2].id);
  sbox3.setAttribute("class", boxCard[2].class);

  cardFour.appendChild(sboxGroup[urso[3]]);
  sbox4.setAttribute("tabindex", boxCard[3].tabindex);
  sbox4.setAttribute("id", boxCard[3].id);
  sbox4.setAttribute("class", boxCard[3].class);

  cardFive.appendChild(sboxGroup[urso[4]]);
  sbox5.setAttribute("tabindex", boxCard[4].tabindex);
  sbox5.setAttribute("id", boxCard[4].id);
  sbox5.setAttribute("class", boxCard[4].class);

  cardSix.appendChild(sboxGroup[urso[5]]);
  sbox6.setAttribute("tabindex", boxCard[5].tabindex);
  sbox6.setAttribute("id", boxCard[5].id);
  sbox6.setAttribute("class", boxCard[5].class);
}
window.onload = generator();
