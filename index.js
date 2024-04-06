const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5]


const pole= document.querySelector(".pole")


//1.Vypište do stránky všechna čísla.

pole.innerHTML +=`<p class="nazev">1.Všechna čísla z pole:</p>`
numbers.forEach(number => {
    pole.innerHTML += `${number},  `
})

//2.Vypište do stránky druhé mocniny všech čísel.

pole.innerHTML +=`<p class="nazev">2.Druhé mocniny:</p>`
numbers.forEach(number => {
    pole.innerHTML += ` ${number * number}, `
})

//3.Vypište do stránky pouze záporná čísla.

pole.innerHTML +=`<p class="nazev">3.Záporná čísla:</p>`

numbers.forEach(number => {
    if (number < 0) {
        pole.innerHTML+= ` ${number},  `
    }
})


//4.Vypište do stránky absolutní hodnotu všech čísel.

pole.innerHTML +=`<p class="nazev">4.Absolutní hodnota čísel:</p>`

numbers.forEach(number => {
    const absoluteValue = Math.abs(number)
   pole.innerHTML += ` ${absoluteValue},  `
})


//5.Vypište do stránky pouze sudá čísla.

pole.innerHTML +=`<p class="nazev">5.Pouze sudá čísla:</p>`


numbers.forEach(number => {
    if (number % 2 === 0) {
        pole.innerHTML+= ` ${number},  `
    }
})

//6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

pole.innerHTML +=`<p class="nazev">6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi:</p>`
 
numbers.forEach(number => {
    const absoluteValue2 = Math.abs(number)
    if (absoluteValue2 % 3 === 0) {
   
    }     pole.innerHTML+=` ${absoluteValue2},  `
})
 
//7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.

pole.innerHTML +=`<p class="nazev">7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5:</p>`

numbers.forEach(number => {
    const distance = Math.abs(number - 5)
    pole.innerHTML+=` ${distance},  `
})

//8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.

pole.innerHTML +=`<p class="nazev">8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5:</p>`
numbers.forEach((number) => {
    pole.innerHTML += `${(Math.abs(number - 5)) ** 2},  `
})

// 9.Spočítejte, kolik je v seznamu záporných čísel.

pole.innerHTML +=`<p class="nazev">9.Spočítejte, kolik je v seznamu záporných čísel:</p>`

let negativeCount = 0

numbers.forEach(number => {
    if (number < 0) {
        negativeCount++
    }
    pole.innerHTML+= ` ${negativeCount},  `

})
//10.Spočítejte součet všech čísel v poli.

pole.innerHTML +=`<p class="nazev">10.Spočítejte součet všech čísel v poli:</p>`
let sum = 0

numbers.forEach(number => {
    sum += number
})

pole.innerHTML+=` ${sum},  `

//11.Spočítejte průměr všech čísel v poli.

    pole.innerHTML +=`<p class="nazev">11.Spočítejte průměr všech čísel v poli:</p>`

    let sum2 = 0

numbers.forEach(number => {
    sum2+= number
})

const prumerny = sum2 / numbers.length

pole.innerHTML+= ` ${prumerny},  `


  

//12.Spočítejte součet všech kladných čísel v poli.

pole.innerHTML +=`<p class="nazev">12.Spočítejte součet všech kladných čísel v poli.:</p>`

let sum3 = 0

numbers.forEach(number => {
    if (number > 0) {
        sum3 += number
    }
})

pole.innerHTML+=` ${sum3},  `




