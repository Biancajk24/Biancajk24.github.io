window.addEventListener('scroll', function(){
    var navbar = document.querySelector('nav');

    if(this.scrollY - 70 > 10){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
    
});