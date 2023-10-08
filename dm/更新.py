import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import datetime
import requests
import xml.etree.ElementTree as ET
import pytz

# 获取中国的时区对象
china_timezone = pytz.timezone('Asia/Shanghai')

# 使用中国时区获取当前时间
china_time = datetime.datetime.now(china_timezone)

# 发送请求获取XML数据
url = "https://api.dandanplay.net/api/v2/homepage?filterAdultContent=true"
headers = {"Accept": "application/xml"}
response = requests.get(url, headers=headers)
response.raise_for_status()

# 解析XML数据
root = ET.fromstring(response.content)

# 初始化星期分类字典
weekdays = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: []}

# 读取所有BangumiIntro
for bangumi_intro in root.find(".//shinBangumiList").iter("BangumiIntro"):
    anime_title = bangumi_intro.find("animeTitle").text
    image_url = bangumi_intro.find("imageUrl").text
    air_day = int(bangumi_intro.find("airDay").text)

    # 将数据按星期分类
    weekdays[air_day].append((anime_title, image_url))

# 生成HTML
html_content = "<html>"
html_content += '<head>'
html_content += '<title>每日番剧详细</title>'
html_content += '<style>'
html_content += """
    .anime-container {
        position: relative;
        display: inline-block;
        margin: 3px; /* 设置图片容器之间的间距 */
        overflow: hidden;
    }

    .anime-title-container {
        position: absolute;
        content: ""; /* 伪元素的内容为空 */
        left: 0;
        top: 0; /* 将 top 设为 0，使文字背景在图片顶部 */
        width: 100%;
        text-align: center;
        color: white;
        padding: 10px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.3); /* 半透明背景颜色 */
        backdrop-filter: blur(10px); /* 添加模糊玻璃效果 */
        transition: transform 1.5s ease; /* 添加过渡效果 */
    }

.anime-title-container {
    border-top-left-radius: 10px; /* 添加左上角的圆角 */
    border-top-right-radius: 10px; /* 添加右上角的圆角 */
    transition: transform 1.5s ease, border-radius 1.5s ease; /* 添加过渡效果 */
}

.anime-image:hover ~ .anime-title-container {
    transform: translateY(100%); /* 向下移动文字背景以保持顶部对齐 */
    border-top-left-radius: 0; /* 取消左上角的圆角 */
    border-top-right-radius: 0; /* 取消右上角的圆角 */
}

    .anime-title {
        text-align: center; /* 居中文字 */
    }


    .anime-image {
        width: 300px;
        height: 410px; /* 设置统一的高度 */
        object-fit: cover; /* 填充整个框，保持纵横比，可能会被裁剪 */
        border-radius: 10px; /* 添加10px的圆角 */
    }

    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end; /* 图片底部对齐 */
        margin-bottom: 7px; /* 适当的间距 */
    }

    .today-header {
        background-color: #ccc; /* 灰色背景 */
        border-radius: 5px; /* 圆角 */
        display: inline-block; /* 让标题只占据内容的宽度 */
        padding: 5px 10px; /* 适当的内边距 */
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); /* 阴影效果 */
    }

.anime-image {
    width: 300px;
    height: 410px; /* 设置统一的高度 */
    object-fit: cover; /* 填充整个框，保持纵横比，可能会被裁剪 */
    border-radius: 10px; /* 添加10px的圆角 */
    transition: box-shadow 0.3s ease, transform 1.5s ease; /* 添加过渡效果 */
}

.anime-image:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
    transform: scale(1.05); /* 放大图片 */
}

"""

html_content += "</style>"
html_content += """
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 生成1到10的随机数
        var randomNum = Math.floor(Math.random() * 10) + 1;

        // 设置背景图片链接
        var backgroundImageUrl = 'https://xiaoqvan.top/zhuye/img/background' + randomNum + '.webp';

        // 应用背景样式
        document.body.style.backgroundImage = 'url(' + backgroundImageUrl + ')';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
    });

    // 添加鼠标悬停效果
    var animeContainers = document.querySelectorAll('.anime-container');

    animeContainers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

        container.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
</script>
"""
html_content += '</head><body>'
# 首页头部标题
html_content += """
<table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td style="background: rgba(255, 255, 255, 0.7); border-bottom: 1px solid #ccc; padding: 10px 20px; border-radius: 5px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
                        <img src="https://www.dandanplay.com/img/logo.png" alt="网站Logo" style="max-height: 50px;">
                    </td>
                    <td>
                        <a href="https://github.com/XQxiaoqvan/Daily-drama-push" style="text-decoration: none; color: #333; font-size: 16px;">
                            GitHub
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>


"""
# 内容部分
# 获取今天的星期几
today = (datetime.datetime.now(china_timezone).weekday() + 1) % 7
# 在控制台输出今天是星期几用于调试取消注释即可
# print(today)

# 按星期顺序生成内容
for day in range(7):
    if day == today:
        day_name = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][day]
        html_content += f"""
            <div class='flex-container'>
                <h1 class='today-header'>{day_name}</h1>
            </div>
        """
        # 番剧信息
        for anime_title, image_url in weekdays[day]:
            html_content += f"""
           <div class='anime-container'>
              <img class='anime-image' src='{image_url}'>
              <div class='anime-title-container'>
                  <div class='anime-title'>{anime_title}</div>
              </div>
          </div>
        """
# 将当前日期添加到 HTML 内容中
html_content += f"<p>生成日期：{china_time.strftime('%Y-%m-%d %H:%M:%S')}</p>"

html_content += "</body></html>"

# # 邮件配置
# from_addr = '3545184062@qq.com'  # 您的邮箱地址
# smtp_server = 'smtp.qq.com'  # 您的SMTP服务器
# smtp_port = 587  # 您的SMTP端口
# smtp_username = '3545184062@qq.com'  # 您的邮箱地址
# smtp_password = 'cvgdfvcxtmawdaij'  # 您的邮箱密码
#
# # 收件人列表
# to_addresses = ['827737456@qq.com']  # 将所有接收者的邮箱地址放在一个列表中
#
# for to_addr in to_addresses:
#     # 创建一个MIMEMultipart对象
#     msg = MIMEMultipart()
#     msg['From'] = from_addr
#     msg['To'] = to_addr
#     msg['Subject'] = '每日动画播放表'  # 邮件主题
#
#     # 添加HTML内容
#     msg.attach(MIMEText(html_content, 'html'))
#
#     # 连接SMTP服务器并发送邮件
#     with smtplib.SMTP(smtp_server, smtp_port) as server:
#         server.starttls()
#         server.login(smtp_username, smtp_password)
#
#         server.sendmail(from_addr, to_addr, msg.as_string())
#
# print('邮件发送成功！')

with open('output.html', 'w', encoding='utf-8') as file:
    file.write(html_content)

print('文件生成成功！')
