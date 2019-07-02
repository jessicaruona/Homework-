
// Listen for a click on ANY bottle 


// When clicked ask the use if they want to take it down and pass it around 


// IF they say yes, add a class of drank to the bottle


//Decrement the count by one 

const bottles = document.querySelectorAll('.bottle')
const counters = document.querySelectorAll('.count')

function drink(){
    if(confirm("Take one down pass it around?")){
    this.classList.add('drank')
    counters.forEach(counter => counter.textContent--)
    } 

}

bottles.forEach(bottle => bottle.addEventListener('click', drink))
