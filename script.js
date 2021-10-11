//Data
const $header = document.getElementById('header')
const $container = document.getElementById('container')
const $footer = document.getElementById('footer')


//Code

//Run








//loop for creating the emojis
// for (let i = 0; i < 101; i++) {
//     console.log(i) // Logs 0 to 100
//   }
  
//   let total = 0



$container.innerHTML = '<div> &#129409 129409</div>'
$container.innerHTML += '<div> &#8987 8987</div>'

// Possibly using a while loop?
let count = 0

while (count < 100) {
  $container.innerHTML += '<div> &#8987 8987 </div>'
  count++
}

console.log(count) // 20


//header and footer text
$header.innerHTML = 'Emoji Gallery'
$footer.innerHTML += '© 2021 Ben Grant'