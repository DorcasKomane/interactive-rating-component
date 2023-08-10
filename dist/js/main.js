const ratingBtn = document.querySelector('.rating');

ratingBtn.addEventListener('click', () => {
    ratingBtn.classList.add('active');
    const ratingValue = ratingBtn.innerText;

    console.log(ratingValue);
})

// function getRating(){
//     const ratingValue = value.innerHTML;

//     console.log(ratingValue);
// }

// getRating();


//***PSEUDO CODE***

//set button to 'active' state when user clicks on it

//when user clicks SUBMIT button:
//grab value of active rating button
//add value to thank-you-state text
//display thank-you-state screen 