var sidebarVisible = false;

function applyStyles() {
  var screenWidth = window.innerWidth;

  if (screenWidth <= 600) {
    // 应用手机样式
    document.addEventListener('mousemove', function(e) {
      var sidebarLeft = document.getElementById('sidebarLeft');
      var sidebarRight = document.getElementById('sidebarRight');
      
      if (!sidebarVisible) {
        if (e.clientX < 50) {
          sidebarLeft.style.width = '100px';
          sidebarVisible = true;
        } else if (e.clientX > window.innerWidth - 50) {
          sidebarRight.style.width = '100px';
          sidebarVisible = true;
        }
      } else {
        if (e.clientX < 50 || e.clientX > window.innerWidth - 50) {
          sidebarLeft.style.width = '0';
          sidebarRight.style.width = '0';
          sidebarVisible = false;
        }
      }
    });
  } else {
    // 应用电脑样式
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
  }
}
// 在页面加载和窗口大小改变时调用applyStyles函数
window.addEventListener("load", applyStyles);
window.addEventListener("resize", applyStyles);



function updateProgress(progressBar, percentage) {
    progressBar.style.width = `${percentage}%`;
}

// 自动加载进度条
const progressBar1 = document.getElementById('progress1');
const progressBar2 = document.getElementById('progress2');
const progressBar3 = document.getElementById('progress3');

setTimeout(() => {
    updateProgress(progressBar1, 50);
}, 1000);

setTimeout(() => {
    updateProgress(progressBar2, 75);
}, 2000);

setTimeout(() => {
    updateProgress(progressBar3, 25);
}, 3000);

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
                    // 重新加载进度条
                    setTimeout(() => {
                        updateProgress(progressBar1, 50);
                        updateProgress(progressBar2, 75);
                        updateProgress(progressBar3, 25);
                    }, 500);
                })
                .catch(error => {
                    centerContent.innerHTML = `<iframe src="${page}" style="width:100%;height:100%;border:none;"></iframe>`;
                    centerContent.innerText = "内容加载失败";
                });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var checkExist = setInterval(function() {
        var myhkplayer = document.getElementById('myhkplayer');
        var myhkLrcDiv = document.getElementById('myhkLrc');
        var powerDiv = document.querySelector('.power');
        var foorerMusicDiv = document.querySelector('#foorer-music');

        if (myhkLrcDiv && myhkplayer) {
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' || (mutation.type === 'attributes' && mutation.target === myhkplayer && mutation.attributeName === 'class')) {
                        var myhknowElement = myhkLrcDiv.querySelector('.myhknow');

                        if (myhknowElement && myhkplayer.classList.contains('playing')) {
                            foorerMusicDiv.innerHTML = '<i class="fa-brands fa-tiktok"></i> ' + myhknowElement.innerText + ' <i class="fa-brands fa-tiktok"></i>';
                            foorerMusicDiv.style.display = 'block';
                            powerDiv.style.display = 'none';
                        } else {
                            foorerMusicDiv.style.display = 'none';
                            powerDiv.style.display = 'block';
                        }
                    }
                });
            });

            var config = { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] };
            observer.observe(myhkLrcDiv, config);
            observer.observe(myhkplayer, config);

            clearInterval(checkExist);
        }
    }, 100); // check every 100ms
});
  // 隐藏明月浩空
document.addEventListener('DOMContentLoaded', function() {
  var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          if (mutation.type === 'childList') {
              var myhkLrcDiv = document.getElementById('myhkLrc');
              if (myhkLrcDiv) {
                  myhkLrcDiv.style.cssText = 'display: none;';
              }
          }
      });
  });

  var config = { childList: true, subtree: true };
  observer.observe(document.body, config);
});