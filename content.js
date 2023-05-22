const contenData = 
    [{
        "id": 1,
        "judul": "Papageno",
        "caption": "Twist",
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
      }, {
        "id": 2,
        "judul": "Gray",
        "caption": "Maghull",
        "image": "http://dummyimage.com/103x100.png/cc0000/ffffff"
      }, {
        "id": 3,
        "judul": "Madalyn",
        "caption": "Ramage",
        "image": "http://dummyimage.com/129x100.png/5fa2dd/ffffff"
      }, {
        "id": 4,
        "judul": "Angelico",
        "caption": "Zute",
        "image": "http://dummyimage.com/165x100.png/cc0000/ffffff"
      }, {
        "id": 5,
        "judul": "Philippe",
        "caption": "Agerskow",
        "image": "http://dummyimage.com/187x100.png/cc0000/ffffff"
      }, {
        "id": 6,
        "judul": "Harlin",
        "caption": "Binyon",
        "image": "http://dummyimage.com/222x100.png/dddddd/000000"
      }, {
        "id": 7,
        "judul": "Christoph",
        "caption": "Pentony",
        "image": "http://dummyimage.com/127x100.png/cc0000/ffffff"
      }, {
        "id": 8,
        "judul": "Claude",
        "caption": "Pell",
        "image": "http://dummyimage.com/169x100.png/cc0000/ffffff"
      }, {
        "id": 9,
        "judul": "Guillema",
        "caption": "Itzcovich",
        "image": "http://dummyimage.com/114x100.png/dddddd/000000"
      }, {
        "id": 10,
        "judul": "Vincenty",
        "caption": "Dhillon",
        "image": "http://dummyimage.com/156x100.png/5fa2dd/ffffff"
      }, {
        "id": 11,
        "judul": "Nissa",
        "caption": "Grellier",
        "image": "http://dummyimage.com/137x100.png/5fa2dd/ffffff"
      }, {
        "id": 12,
        "judul": "Zara",
        "caption": "Hutchings",
        "image": "http://dummyimage.com/133x100.png/cc0000/ffffff"
      }, {
        "id": 13,
        "judul": "Rinaldo",
        "caption": "Simonnet",
        "image": "http://dummyimage.com/244x100.png/dddddd/000000"
      }, {
        "id": 14,
        "judul": "Kristan",
        "caption": "Mazey",
        "image": "http://dummyimage.com/243x100.png/dddddd/000000"
      }, {
        "id": 15,
        "judul": "Michell",
        "caption": "Hassett",
        "image": "http://dummyimage.com/230x100.png/dddddd/000000"
      }, {
        "id": 16,
        "judul": "Curcio",
        "caption": "Lanyon",
        "image": "http://dummyimage.com/227x100.png/dddddd/000000"
      }, {
        "id": 17,
        "judul": "Moishe",
        "caption": "Nightingale",
        "image": "http://dummyimage.com/166x100.png/ff4444/ffffff"
      }, {
        "id": 18,
        "judul": "Hayden",
        "caption": "Landsman",
        "image": "http://dummyimage.com/118x100.png/cc0000/ffffff"
      }, {
        "id": 19,
        "judul": "Armin",
        "caption": "Lenoir",
        "image": "http://dummyimage.com/231x100.png/ff4444/ffffff"
      }, {
        "id": 20,
        "judul": "Mommy",
        "caption": "Mapledoore",
        "image": "http://dummyimage.com/207x100.png/5fa2dd/ffffff"
      }]

console.log(contenData); 
const table = document.querySelector('section#content table')
console.log(table)

// console.log(table)
for (let i = 0; i <contenData.length; i++){
    table.innerHTML += `
    <tr>
    <td>${contenData[i].id}</td>
    <td>${contenData[i].judul}</td>
    <td>${contenData[i].caption}</td>
    <td>
          <img src=${contenData[i].image}" />
    </td>
    </tr>
    `
}
