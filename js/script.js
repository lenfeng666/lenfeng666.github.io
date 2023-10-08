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

// 获取中心标题元素
const centerTitle = document.getElementById('centerTitle');
// 获取中心内容元素
const centerContent = document.getElementById('centerContent');
// 获取所有导航链接元素
const navLinks = document.querySelectorAll('.nav-link');

// 默认打开页面时获取数据并显示在中心内容
fetch('https://api.vvhan.com/api/ian')
    .then(response => response.text())
    .then(data => {
        centerTitle.innerText = "一言"; // 设置默认标题
        centerContent.innerText = data; // 设置默认内容
    });

// 遍历每个导航链接，并为它们添加点击事件处理程序
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止默认链接行为
        const content = link.getAttribute('data-content'); // 获取链接的data-content属性值
        centerTitle.innerText = content; // 更新标题

        // 获取点击链接指定的页面文件
        const page = link.getAttribute('data-page');
        if (page) {
            // 使用fetch加载指定页面内容
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    centerContent.innerHTML = data;
                })
                .catch(error => {
                    centerContent.innerHTML = `<iframe src="${page}" style="width:100%;height:100%;border:none;"></iframe>`;
                    centerContent.innerText = "内容加载失败";
                });
        }
    });
});