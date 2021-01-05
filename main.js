const firstName = "Oskar";
const age = "23";

console.log("Wiadomość w konsoli");
console.log(firstName);
console.log(age);
console.log(`Mam na imię ${firstName} oraz mam ${age} lata`);

console.log("Tutaj nauczysz się kilku nowych rzeczy");

const tekst = document.querySelector(".test");
console.log(tekst);
console.log(tekst.innerHTML);

tekst.innerHTML = "Witaj";
console.log(tekst);
console.log(tekst.innerHTML);

let imie = "Oskar";
console.log(`czesc jestem ${imie}`);

imie = "marek";
console.log(`czesc jestem ${imie}`);

function obliczenia(liczba) {
  console.log(`Wylosowałem liczbę ${liczba}`);
  return `Mój wynik to ${liczba * 2}`;
}
const nr = obliczenia(age);
console.log(nr);

function obliczenia1(liczba) {
  console.log(`Wylosowałem liczbę ${liczba}`);
  liczba = liczba * 2;
  return `Mój wynik to ${liczba}`;
}
const wynik = obliczenia1(age);
console.log(wynik);

function obliczenia2(liczba) {
  console.log(`Wylosowałem liczbę ${liczba}`);
  liczba = liczba * 2;
  return liczba;
}
const wynik1 = obliczenia2(age);
console.log(`Mój wynik to ${wynik1}`);

obliczenia2(5)

function welcome(querySelectorContent, content) {
  const welcomeContent = document.querySelector(querySelectorContent);
  welcomeContent.innerHTML = content;
}
welcome(".test", "co tam u was?");

const welcome1 = (myNumber) => {
    console.log(`wylosowałem ${myNumber}`)
    return myNumber*7
}
welcome1(2)

const deathStar = {
    name: 'Death Star',
    diameter: 120000,
    levels: 350,
    population: 2000,
    fire: (target) => {
        console.log(`Strzelam do ${target}`),
        console.log(`${target} został zniszczony!`)
    },
    isOperating: true,
    isLightOn: true,
    commander: {
        name: 'Sith',
        age: 43,
    }
}

console.log(deathStar);
console.log(deathStar.commander);
deathStar.fire('Sokół Millenium');
console.log(deathStar['name']);

const wlasnosci = (mojawlasnosc) => {
    console.log(`Twoja własność ${mojawlasnosc} to: ${deathStar[mojawlasnosc]}`)
}

wlasnosci('name')