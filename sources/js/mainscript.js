var getAllToggles = document.querySelectorAll('.toggle__contenedor .toggle__top');
var getAllTogglesBottom = document.querySelectorAll('.toggle__contenedor .toggle__bottom');

getAllToggles.forEach((data, indice) =>{

    var getNextElementSibling = data.nextElementSibling;

    if(indice == 0){
        data.classList.add('active');
        getNextElementSibling.style.height = data.nextElementSibling.scrollHeight + 20 + 'px';
    }

    data.addEventListener('click', ()=>{

        let scrollHeigthElement = getNextElementSibling.scrollHeight;

        getAllToggles.forEach((data)=>{
            data.classList.remove('active');
        });
        getAllTogglesBottom.forEach((data)=>{
            data.style.height = '0px';
        });

        data.classList.add('active');
        if(data.classList.contains('active')){
            getNextElementSibling.style.height = scrollHeigthElement + 'px';
        }else{
            getNextElementSibling.style.height = '0px';
        }
        
    });

});