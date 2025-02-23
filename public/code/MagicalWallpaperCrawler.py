# 爬虫必应壁纸,保存到文件夹中
import os
import requests
from bs4 import BeautifulSoup
# 确定爬取的网页对象
URL = 'https://bing.wdbyte.com/'
head = {'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'}
# requests发请求
response = requests.get(URL,headers=head)
res = BeautifulSoup(response.text,'html.parser')

# 创建文件夹
folder_name = 'bing_images'
if not os.path.exists(folder_name):
    os.makedirs(folder_name)

# 获取图片链接和日期
img_div = res.find_all('div',class_='w3-third')
img_url_list = []
data_list = []

for i in img_div:
    data = i.p.text[0:11]  # 获取日期
    href = i.p.a['href']   # 获取图片链接
    img_url_list.append(href)   # 添加图片链接到列表
    data_list.append(data)      # 添加日期到列表
# print(img_url)

# 下载图片
j=0
for i in img_url_list:
    response = requests.get(i,headers=head) 
    with open(f'{folder_name}/{data_list[j]}.jpg','wb') as f:
        f.write(response.content)
    j += 1

print("图片下载完成并保存到文件夹:", folder_name)