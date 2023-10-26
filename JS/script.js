const button1 = document.getElementById("button__1");
const button2 = document.getElementById("button__2");
const button3 = document.getElementById("button__3"); // Her identifiserer de individuelle <button>-elementene for som et JS element? //
const button4 = document.getElementById("button__4");
const button5 = document.getElementById("button__5");
const button6 = document.getElementById("button__6");

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

    if (name !== null && age !== null && question !== null) {
      // Hvis noen av feltene ikke blir fylt inn. === for å vise at feltet er like null aka tom. || som OR imellom feltene //
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

    if (ord1 !== null && ord2 !== null && ord3 !== null) {
      resultElement.textContent = `${ord1} ${ord2} ${ord3}`;
    } else {
      resultElement.textContent = "Dette var tydeligvis vanskelig";
    }
  });
});
