document.addEventListener('DOMContentLoaded', function(){
    const menuButton = document.getElementById('signup');
    const menuBox = document.getElementById('signup-menu');

    menuButton.addEventListener('click', function(){
        if(menuBox.style.display === 'none' || menuBox.style.display === ''){
            menuBox.style.display = 'flex';
        }
        else{
            menuBox.style.display = 'none';
        }
    })
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !menuBox.contains(event.target)) {
            menuBox.style.display = 'none';
        }
    });
});


