// QuerySelectorilla luetaan table johon tulee jokeririvejä.
// p-elementtiin tulee arvottujen rivien llukumäärä.

const list = document.querySelector('table')
let p = document.querySelector('p')

let rows = 0
let numbers = []
let rowIndex = 0


// EventListenerissä on kutsuttu addRow() -funktiota, joka
// a) lisää uuden rivin HTML-taulukkoon (table)
// b) toteuttaa toistolauseen, joka suoritetaan 7 kertaa
// c) toistolauseen sisällä luo uuden sarakkeen, jonka tekstiksi asetetaan satunnaisluku välillä 0-9
// d) lisää edellä luodun sarakkeen riville

const addRow = () => {
    rowIndex = 0
    numbers = []
    let row = list.insertRow()
    while (rowIndex < 7) {
        const randomNumber = Math.floor(Math.random() * 10)
        cell = row.insertCell(rowIndex)
        cell.innerHTML = randomNumber
        rowIndex++
    }

// Toteutetaan tarvittava muuttuja, joka laskee, montako jokeririviä on arvottu 
// ja näyttää luvun p-elementissä
    rows++
    p.innerHTML = 'Valmiita rivejä ' +  rows
}


// Tehdään EventListener (painikkeen painamistapahtumalle), josta kutsutaan funktiota addRow
document.querySelector('button').addEventListener('click', () => {
    addRow()
})