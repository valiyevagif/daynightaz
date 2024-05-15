/* SPINNER */

window.addEventListener('load', function(){
    this.setTimeout(function(){
        var spinnerContainer = document.getElementById('spinner');
        spinnerContainer.style.opacity = '0';
        setTimeout(function (){
            spinnerContainer.style.display = 'none';
        }, 1000)
    }, 2000)
});

/* SPINNER */
