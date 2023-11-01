const button1 = document.getElementById("button__1");
const button2 = document.getElementById("button__2");
const button3 = document.getElementById("button__3"); // Her identifiserer de individuelle <button>-elementene for som et JS element? //
const button4 = document.getElementById("button__4");
const button5 = document.getElementById("button__5");
const button6 = document.getElementById("button__6");
const button7 = document.getElementById("button__7");

// Oppgave 1 //

document.addEventListener("DOMContentLoaded", function () {
  /* skal, såvidt jeg har forstått det, sørge for at HTML lastes
     fullt før JS tillates. Det var en foreslått troubleshoot på feilmeldingen jeg fikk på denne blokken med kode, gjerne forklar meg akkurat hva jeg har gjort her som fikk det til å funke */
  var button1 = document.getElementById("button__1"); // Her tildeles en javascript referanse til button1 (?) //
  var resultElement = document.getElementById("result__1"); // Her identifiseres <p id="result"> som target for resultElement //

  button1.addEventListener("click", function () {
    // Denne linjen kjører koden på button click via en "listener" som søker etter handlingen jeg har lagt til etter ( //
    const number1 = 10;
    const number2 = 20;
    const number3 = 5;
    const number4 = 15;

    /* Linje 15 til 18 har definert tallene som constants, 
      leste at det var en fin måte å skrive ting som uansett ikke skulle endres
      men det er mulig at jeg misforstod */

    const sum = number1 + number2 + number3 + number4; // Her summeres alle tallene //

    resultElement.textContent = `${number1} + ${number2} + ${number3} + ${number4} = ${sum}`; /* Denne linjen definerer hva som skal inkluderes i resultElement
      som er resultatet som skal printes innenfor <p id="result">. Dollartegn for å identifisere det som en variabel/const? */
  });
});

// Oppgave2 //

document.addEventListener("DOMContentLoaded", function () {
  var button2 = document.getElementById("button__2"); // JS referanse for <button> //
  var outputElement = document.getElementById("result__2"); // Hvor resultatet av variablene skal printes //

  button2.addEventListener("click", function () {
    const jeghater = "Jeg hater"; // mine vakre variabler //
    const hatobjekt = "når jeg ikke aner hvorfor ting funker eller ikke funker";

    outputElement.textContent = jeghater + " " + hatobjekt; // Her var det ikke nødvendig med samme funksjonstype som for tall(?), da disse to constantene kun er tekst, men " " for mellomrom //
  });
});

// Oppgave3 //

document.addEventListener("DOMContentLoaded", function () {
  var button3 = document.getElementById("button__3");
  var outputElement = document.getElementById("result__3");

  button3.addEventListener("click", function () {
    const mittnavn = "Heter Odd Grimholt,";
    const minalder = "er 88 år gammel";
    const superkraft = "og vil gjerne bli JavaScript Savant";

    outputElement.textContent = mittnavn + " " + minalder + " " + superkraft; // " " er for å lage et mellomrom imellom variablene //
  });
});

// Oppgave 4 //

document.addEventListener("DOMContentLoaded", function () {
  var button4 = document.getElementById("button__4");

  button4.addEventListener("click", function () {
    const numbEr = 20; // tullete navngivning, men var egentlig bare for å teste case-sensitivity //
    const numbeR = 80;

    alert(numbEr);
    alert(numbeR);
    alert(numbEr + numbeR);
  });
});

// Oppgave 5 //

document.addEventListener("DOMContentLoaded", function () {
  var button5 = document.getElementById("button__5");
  var resultElement = document.getElementById("result__4"); // Hvis jeg ikke har misforstått så kan jeg bruke samme navn på variabler, så lenge de ikke er innenfor samme blokk? //

  button5.addEventListener("click", function () {
    var name = prompt("Navn?");
    var age = prompt("Alder?");
    var question = prompt("Rate my JavaScript");

    if (name == null || age == null || question == null) {
      // Hvis noen av feltene ikke blir fylt inn. === for å vise at feltet er like null aka tom. //
      // Denne linjen skal returnere en "feilmelding" dersom noen av promptene blir latt stå tomme (null), men fikk ikke det helt til å funke som jeg ville (den returnerer bare feilmeldingen dersom et av feltene blir kansellert) //

      resultElement.textContent = `Navn: ${name} Alder: ${age} Javascript rating: ${question}`;
    } else {
      resultElement.textContent = "Følg instruksjonene bedre";
    }
  });
});

// Oppgave 6 //

document.addEventListener("DOMContentLoaded", function () {
  var button6 = document.getElementById("button__6");
  var resultElement = document.getElementById("result__5");

  button6.addEventListener("click", function () {
    alert(
      "Skriv et setning, ett ord per prompt. (NB! Finnes ikke profanity filter)"
    );
    var ord1 = prompt("Ord 1");
    var ord2 = prompt("Ord 2");
    var ord3 = prompt("Ord 3");

    if (ord1 == null || ord2 == null || ord3 == null) {
      resultElement.textContent = `${ord1} ${ord2} ${ord3}`;
    } else {
      resultElement.textContent = "Dette var tydeligvis vanskelig";
    }
  });
});

// Oppgave 7 //

var mandag = "mandag"

var sentence = "Ukens første dag";

switch (day) {
  case "mandag":
    console.log(sentence);
    break;

  case "tirsdag":
    console.log("En dag nærmere helgen");
    break;

  case "onsdag":
    console.log("Midt i uken");
    break;

  case "torsdag":
    console.log("Bare en dag til fredag");
    break;

  case "fredag":
    console.log("Snart helg");
    break;

  case "lørdag":
  case "søndag":
    console.log("Det er endelig helg");
    break;
  default:
    console.log("Dette er ikke en gyldig dag");
}


// Klasserom //




//


// Skriv en kode som sjekker om et tall x er større enn 10. Hvis det er det, skal det skrives ut "Tallet er større enn 10". //

var hovedTall = 15;

if (hovedTall > 10) {
  console.log("Tallet er større enn 10");
} else if (hovedTall < 10) {
  console.log("Tallet er mindre enn 10");
} else if (hovedTall === 10) {
  console.log("Tallene er like");
}

/* 

Oppgave 2:
Gitt et tall y. Skriv en kode som sjekker om tallet er positivt, negativt, eller null og skriver ut en passende melding for hver situasjon.

*/ 

var y = 5

if (y > 0) {
console.log("Tallet er positivt");
} else if (y < 0) {
  console.log("Tallet er negativt");
} else if (y === 0) {
  console.log("Tallet er 0");
}



/*

Oppgave. 4:
Gitt to tall a og b. Skriv en kode som sjekker om a er større enn 5 OG b er mindre enn 10. Hvis begge betingelsene er sanne, skriv ut "Begge betingelsene er sanne".

*/


var a = 4
var b = 8

if (a > 5 && b < 10) {
  console.log("Begge betingelsene er sanne");
} else console.log("Løgn");




/*

Oppgave 5:
Gitt tre tall: x, y, og z. Skriv en kode som finner det største tallet og skriver det ut.

*/

var x = 55
var y = 25
var z = 15

console.log(Math.max(x, y, z));






/*

Oppgave 6:
Gitt et tall n. Skriv en kode som sjekker om tallet er enten 5 ELLER 10. Hvis det er det, skriv ut "Tallet er enten 5 eller 10".

*/


n = 7

if (n === 5 || n === 10) {
  console.log("Tallet er enten 5 eller 10");
} else console.log("Tallet er ikke 5 eller 10");





/*
Oppgave 7:
Gitt en variabel frukt. Bruk en switch-statement for å skrive ut en melding basert på frukten (for eksempel "Jeg elsker epler" for "eple" og lignende tekster). Legg til en default-case som sier "Jeg vet ikke hvilken frukt det er".

*/



var fruits = "Appelsin" 



switch (fruits) {
case "Appelsin":
console.log("Oransje")
break;
case "Eple":
console.log("Grønn")
break;
case "Banan":
console.log("Gul")
}





/*
Oppgave 8:
Gitt to strenger, str1 og str2. Skriv en kode som sjekker om strengene er like. Hvis de er det, skriv ut "Strengene er like". Ellers, skriv ut "Strengene er ikke like".
*/



str1 = "Helt"
str2 = "Like"

if (str1 === str2) {
  console.log("Strengene er like");
} else {
  console.log("Strengene er ikke like");
}





/*

Oppgave 9 

Gitt en variabel, type. Hvis type er en "farge", bruk en switch-statement på verdi for å skrive ut forskjellige meldinger basert på fargen (for eksempel "Fargen er rød" for "rød"). Hvis type er et "dyr", bruk en switch på verdi for å skrive ut et dyrenavn.

*/



const type = 1

switch (type) {
  case 1:
  console.log("Varm Farge")
  break;
  case 2:
    console.log("Fargen er miljøvennlig")
    break;
    case 3:
      console.log("Fargen til havet")
      break;
      default:
        console.log("No idea brotha")
}



/*

Oppgave 10 (Avansert):
Les deg opp på Date.now() og getDay(). 
https://www.w3schools.com/jsref/jsref_now.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
Gi en variabel en Date.now-metode. 
Bruk en switch-statement for å skrive ut navnet på ukedagen. 

*/

const birthday = new Date('November 24, 1990')
let day = birthday.getDay();


switch (birthday.getDay()) {
  case 0:
    console.log("Søndag")
    break;
    case 1:
      console.log("Mandag")
      break;
      case 2:
        console.log("Tirsdag")
        break;
        case 3:
          console.log("Onsdag");
          break;
          case 4:
            console.log("Torsdag")
            break;
            case 5:
              console.log("Fredag")
              break;
              case 6:
                console.log("Lørdag")
}


