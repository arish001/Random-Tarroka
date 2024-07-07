let commonTarokka = [
  "avenger",
  "paladin",
  "soldier",
  "mercenary",
  "myrmidon",
  "berserker",
  "hoodedone",
  "dictator",
  "torturer",
  "warrior",
  "transmuter",
  "diviner",
  "enchanter",
  "abjurer",
  "elementalist",
  "evoker",
  "illusionist",
  "conjurer",
  "wizard",
  "swashbuckler",
  "philanthropist",
  "trader",
  "merchant",
  "guildmember",
  "beggar",
  "thief",
  "taxcollector",
  "miser",
  "rogue",
  "monk",
  "missionary",
  "healer",
  "shepherd",
  "druid",
  "anarchist",
  "charlatan",
  "bishop",
  "traitor",
  "priest",
];

let highTarokka = [
  "innocent",
  "marionette",
  "darklord",
  "mists",
  "executioner",
  "brokenone",
  "tempter",
  "beast",
  "donjon",
  "raven",
  "seer",
  "artifact",
  "horseman",
];

let totalCommonTarokka = commonTarokka.length + 1;

let totalHighTarokka = highTarokka.length + 1;

console.log(totalCommonTarokka + totalHighTarokka);

let commonResults = [];
let highResults = [];

function drawThreeTarokka() {
  for (let i = 0; i < 3; i++) {
    let randomTarrokkaIndex = Math.floor(Math.random() * totalCommonTarokka);
    let drawnTarrokkaCard = commonTarokka[randomTarrokkaIndex];
    // commonTarokka.splice(randomTarrokkaIndex, 1);
    commonResults.push(drawnTarrokkaCard); //adding results to new array
    replaceUndefinedCards(commonResults);
  }

  console.log(finalCommon);

  // results
  let firstCard = finalCommon[0];
  let secondCard = finalCommon[1];
  let thirdCard = finalCommon[2];

  // physical cards
  let cardOne = document.querySelector(".commonCard1");
  let cardTwo = document.querySelector(".commonCard2");
  let cardThree = document.querySelector(".commonCard3");

  document.addEventListener("keydown", function (e) {
    console.log(e);

    if (e.keyCode === 49) {
      cardOne.src = "multimedia/graphics/" + firstCard + ".png";
    } else if (e.keyCode === 50) {
      cardTwo.src = "multimedia/graphics/" + secondCard + ".png";
    } else if (e.keyCode === 51) {
      cardThree.src = "multimedia/graphics/" + thirdCard + ".png";
    }
  });
}

function replaceUndefinedCards() {
  typeof variable === "undefined";
  finalCommon = commonResults.map((v) => (v === undefined ? "necromancer" : v));
}

// drawing High Tarokka Cards

function drawHighTarokka() {
  for (let i = 0; i < 2; i++) {
    let randomHighTarrokkaIndex = Math.floor(Math.random() * totalHighTarokka);
    let drawnHighTarrokkaCard = highTarokka[randomHighTarrokkaIndex];
    highTarokka.splice(randomHighTarrokkaIndex, 1);
    highResults.push(drawnHighTarrokkaCard); //adding results to new array
  }
  finalHigh = highResults.map((v) => (v === undefined ? "ghost" : v));
  console.log(finalHigh);

  // card results4
  let fourthCard = finalHigh[0];
  let fifthCard = finalHigh[1];

  // physical cards
  let cardFour = document.querySelector(".highCard1");
  let cardFive = document.querySelector(".highCard2");

  document.addEventListener("keydown", function (e) {
    console.log(e);

    if (e.keyCode === 52) {
      cardFour.src = "multimedia/graphics/" + fourthCard + ".png";
    } else if (e.keyCode === 53) {
      cardFive.src = "multimedia/graphics/" + fifthCard + ".png";
    }
  });
  //  flipHighTarokka(fourthCard, fifthCard);
}

drawThreeTarokka();
drawHighTarokka();

//ensure that none of the drawn cards are the same or else it draws again

//draw 3 from common deck

// function pullTarrokka() {
//   let randomTarrokka = commonTarokka[randomTarrokkaIndex];
//   console.log(randomTarrokka);
// }

// pullTarrokka();

//   let cardOne = playingCards[randomCardNumber];
//   let cardTwo = playingCards[randomCardNumber + 3];
//   let cardThree = playingCards[randomCardNumber];

//   if (cardOne === cardTwo) {
//     let cardTwo = playingCards[randomCardNumber + 1];
//   }

//   console.log(cardOne);
//   console.log(cardTwo);
//   console.log(cardThree);

//draw two from high deck
