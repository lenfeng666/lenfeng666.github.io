document.addEventListener('mousemove', function(e) {
    var sidebarLeft = document.getElementById('sidebarLeft');
    var sidebarRight = document.getElementById('sidebarRight');
    if (e.clientX < 50) {
        sidebarLeft.style.width = '200px';
    } else if (e.clientX > window.innerWidth - 50) {
        sidebarRight.style.width = '200px';
    } else {
        sidebarLeft.style.width = '0';
        sidebarRight.style.width = '0';
    }
});
fetch('https://api.vvhan.com/api/ian')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.zx h1').innerText = data;
    });