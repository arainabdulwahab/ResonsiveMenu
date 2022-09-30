function toogleMenu(){
    let menu = document.getElementById('hiddenItem');
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}