var getAllToggles = document.querySelectorAll('.toggle__top');


getAllToggles.forEach((data, indice) =>{

    if(indice == 0){
        data.classList.add('active');
        data.nextElementSibling.style.height = data.nextElementSibling.scrollHeight + 20 + 'px';
    }

    data.addEventListener('click', ()=>{

        let getNextElementSibling = data.nextElementSibling;
        let scrollHeigthElement = getNextElementSibling.scrollHeight;


        data.classList.toggle('active');
        if(data.classList.contains('active')){
            getNextElementSibling.style.height = scrollHeigthElement + 20 + 'px';
        }else{
            getNextElementSibling.style.height = '0px';
        }

    });
    
});