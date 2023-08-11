function displayRating(){
    const ratingView = document.querySelector('.ratingView');
    const thankyou = document.querySelector('.thankyou');

    ratingView.style.display = 'none';
    thankyou.style.display = 'block';


    const values = document.getElementsByName('rating');

    for(let i = 0; i < values.length; i ++){
        if(values[i].checked){
            document.getElementById('ratingValue').innerHTML = values[i].value;
        }
    }

}