/*!
 * by.xiaoqvan
 * 魔改https://myhkw.cn播放器
 * Copyright 2023 xiaoqvan
 * Released under the MIT license
 */

// 明月浩空播放器引入
$(document).ready(function() {
    var myhkScript = $('<script/>', {
        src: 'https://myhkw.cn/api/player/1690054729100',
        id: 'myhk',
        key: '1690054729100',
        m: '1'
    });

    $('head').append(myhkScript);
});
// 对系统的原生播放器通道设置播放器属性会显示歌曲名和歌曲封面，封面目前只测试对win系统生效
document.addEventListener('DOMContentLoaded', function() {
    function checkElementExistence() {
        var myhkplayer = document.getElementById('myhkplayer');

        if (myhkplayer) {
            var coverElement = myhkplayer.querySelector('.myhkcover.coverplay img');
            var titleElement = myhkplayer.querySelector('.songstyle .myhksong span');
            var artistElement = myhkplayer.querySelector('.artiststyle .myhkartist span');

            if (coverElement && titleElement && artistElement) {
                var coverSrc = coverElement.src;
                var title = titleElement.textContent.trim();
                var artist = artistElement.textContent.trim();

                if ('mediaSession' in navigator) {
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: title,
                        artist: artist,
                        artwork: [{
                            src: coverSrc,
                            sizes: '96x96',
                            type: 'image/png'
                        }]
                    });

                    // 添加上一首和下一首的控制逻辑
                    navigator.mediaSession.setActionHandler('previoustrack', function() {
                        var prevButton = document.querySelector('.myhkprev');
                        if (prevButton) {
                            prevButton.click(); // 模拟点击上一首按钮
                        }
                    });

                    navigator.mediaSession.setActionHandler('nexttrack', function() {
                        var nextButton = document.querySelector('.myhknext');
                        if (nextButton) {
                            nextButton.click(); // 模拟点击下一首按钮
                        }
                    });
                }
            }
        }
    }

    var observer = new MutationObserver(checkElementExistence);
    observer.observe(document.body, { childList: true, subtree: true });
});


function handlePrevButtonClick() {
    // 处理上一首按钮点击事件的代码
    var prevButton = $('.myhkprev');
    if (prevButton.length > 0) {
        prevButton.click(); // 模拟点击上一首按钮

        // 更新播放和暂停按钮的显示状态
        $('.fa-play').css('display', 'none');
        $('.fa-pause').css('display', 'inline-block');
    } else {
        // 如果模拟点击失败，没有找到对应的元素
        iziToast.show({
            timeout: 1000,
            icon: "fa-solid fa-circle-exclamation",
            message: '等待播放器加载'
        });
    }
}


function handlePlayButtonClick() {
    // 使用 jQuery 选择器来获取元素
    var playButton = $('.myhkicon-playCircle');
    playButton.click();

    var playIcon = $('.fa-play');
    playIcon.hide(); // 使用 hide() 方法来隐藏元素

    var pauseIcon = $('.fa-pause');
    pauseIcon.css('display', 'inline-block'); // 使用 css() 方法来设置 display 属性
}


function handlePauseButtonClick() {
    var iconElement = $('.myhkicon-pauseCircle');

    // 检查是否成功找到元素
    if (iconElement.length > 0) {
        // 模拟点击
        iconElement.click();

        // 隐藏播放图标，显示暂停图标
        $('.fa-play').css('display', 'inline-block');
        $('.fa-pause').css('display', 'none');
    } else {
        // 未找到元素，执行提示操作
        iziToast.show({
            timeout: 1000,
            icon: "fa-solid fa-circle-exclamation",
            message: '等待播放器加载'
        });
    }
}


function handleNextButtonClick() {
    // 处理下一首按钮点击事件的代码
    var nextButton = $('.myhknext');
    if (nextButton.length > 0) {
        nextButton.click(); // 模拟点击下一首按钮

        // 更新播放和暂停按钮的显示状态
        $('.fa-play').css('display', 'none');
        $('.fa-pause').css('display', 'inline-block');
    } else {
        // 如果未找到下一首按钮，显示提示信息
        iziToast.show({
            timeout: 1000,
            icon: "fa-solid fa-circle-exclamation",
            message: '等待播放器加载'
        });
    }
}


// 设置歌名
$(document).ready(function() {
    // 初始内容
    var initialContent = $(".myhklist ul").html();

    // 获取歌曲信息并更新到<h1>元素
    function checkAndUpdate() {
        var currentPlayElement = $(".myhklist .myhknow:contains('当前播放')");

        if (currentPlayElement.length > 0) {
            var text = currentPlayElement.text();
            var afterArrow = text.split('>').pop().trim();
            $(".player-info").text(afterArrow);
        }
    }

    // 初始检查
    checkAndUpdate();

    // 监测<ul>内容的变化
    setInterval(function() {
        var currentContent = $(".myhklist ul").html();

        if (currentContent !== initialContent) {
            // 内容有更新，重新检查并更新<h1>元素
            checkAndUpdate();
            initialContent = currentContent; // 更新初始内容
        }
    }, 1000); // 每秒检查一次
});

$(document).ready(function() {
    // 初始链接
    var initialImgSrc = $(".myhkcover.coverplay img").attr("src");

    // 查找并替换图片链接
    function findAndReplaceImg() {
        var albumArtImg = $(".myhkcover.coverplay img");
        var newImgSrc = albumArtImg.attr("src");

        if (newImgSrc !== initialImgSrc) {
            // 图片链接更新，替换下方元素的图片链接
            $("#album-art").attr("src", newImgSrc);
            initialImgSrc = newImgSrc; // 更新初始链接
        }
    }

    // 初始查找和替换
    findAndReplaceImg();

    // 监测图片链接的变化
    setInterval(function() {
        findAndReplaceImg();
    }, 1000); // 每秒检查一次
});
// 隐藏明月浩空
$(document).ready(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // 隐藏 #myhkplayer
                var myhkplayerDiv = $('#myhkplayer');
                if (myhkplayerDiv.length > 0) {
                    myhkplayerDiv.css('visibility', 'hidden');
                }

                // 隐藏 #myhkLrc
                var myhkLrcDiv = $('#myhkLrc');
                if (myhkLrcDiv.length > 0) {
                    myhkLrcDiv.css('display', 'none');
                }

                // 隐藏 #myhkTips
                var myhkTipsDiv = $('#myhkTips');
                if (myhkTipsDiv.length > 0) {
                    myhkTipsDiv.css('display', 'none');
                }
            }
        });
    });

    var config = { childList: true, subtree: true };
    observer.observe($('body')[0], config);
});



// 明月浩空提示
var initialTipsContent = $("#myhkTips").text();

setInterval(function() {
    var currentTipsContent = $("#myhkTips").text();

    if (currentTipsContent !== initialTipsContent) {
        // 内容发生变化，使用iziToast提示
        iziToast.show({
            timeout: 1000,
            icon: "fa-solid fa-circle-exclamation",
            message: currentTipsContent
        });

        initialTipsContent = currentTipsContent; // 更新初始内容
    }
}, 500); // 每秒检查一次

// 根据时长生成进度条
function parseTime(timeString) {
    var parts = timeString.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

// 在 $(document).ready 中使用 parseTime 函数
$(document).ready(function() {
    // 创建一个观察器实例
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                var myhkplayer = $('#myhkplayer');
                if (myhkplayer.length > 0) {
                    var timeElement = myhkplayer.find('.timestyle .myhktime');

                    if (timeElement.length > 0) {
                        var time = timeElement.text().trim();
                        var times = time.split(' / ');
                        var currentTime = parseTime(times[0]);
                        var totalTime = parseTime(times[1]);

                        var progressBar = $('#musicprogress-bar');
                        progressBar.prop('max', totalTime);
                        progressBar.val(currentTime);
                    }
                }
            }
        });
    });

    // 配置观察选项
    var config = { childList: true, subtree: true };

    // 传入目标节点和观察选项
    observer.observe($('body')[0], config);
});


// // 获取歌词替换到底部栏
// document.addEventListener('DOMContentLoaded', function() {
//     var checkExist = setInterval(function() {
//         var myhkplayer = document.getElementById('myhkplayer');
//         var myhkLrcDiv = document.getElementById('myhkLrc');
//         var powerDiv = document.querySelector('.power');
//         var foorerMusicDiv = document.querySelector('#foorer-music');

//         if (myhkLrcDiv && myhkplayer) {
//             var observer = new MutationObserver(function(mutations) {
//                 mutations.forEach(function(mutation) {
//                     if (mutation.type === 'childList' || (mutation.type === 'attributes' && mutation.target === myhkplayer && mutation.attributeName === 'class')) {
//                         var myhknowElement = myhkLrcDiv.querySelector('.myhknow');

//                         if (myhknowElement && myhkplayer.classList.contains('playing')) {
//                             foorerMusicDiv.innerHTML = '<i class="fa-brands fa-tiktok"></i> ' + myhknowElement.innerText + ' <i class="fa-brands fa-tiktok"></i>';
//                             foorerMusicDiv.style.display = 'block';
//                             powerDiv.style.display = 'none';
//                         } else {
//                             foorerMusicDiv.style.display = 'none';
//                             powerDiv.style.display = 'block';
//                         }
//                     }
//                 });
//             });

//             var config = { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] };
//             observer.observe(myhkLrcDiv, config);
//             observer.observe(myhkplayer, config);

//             clearInterval(checkExist);
//         }
//     }, 100); // check every 100ms
// });
