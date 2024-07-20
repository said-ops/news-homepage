


document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('header nav');
    const menu = document.querySelector('header nav ul');
    console.log(nav,menu);

    nav.addEventListener('click', function(event) {
        if(window.innerWidth<600){
            if(menu.style.width ==='0%'){
            menu.style.visibility='unset';
            menu.style.width='72%';
            }
            else {
            menu.style.width='0%';
            menu.style.visibility='hidden';
            }
        }
        

        
       
        
    });
});
