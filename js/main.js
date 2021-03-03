var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector('#navbar');
    navbar.classList[prevScrollpos > currentScrollPos ? 'remove' : 'add']('hide')
    prevScrollpos = currentScrollPos;
}