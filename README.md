# cyclone-website

cyclone 官网

## 发布文章时


### _posts目录

    |------------------
    |----...
    |----_posts(文章放置的文件夹)
    |----...

_posts目录下的 md 文件中，由于目前的页面设计需要，一定要在文件开头有以下描述：

    ---
    layout: post
    title:  "Caicloud's practices on unified CI/CD and AI DevOps platform"
    date:   "2019-05-07 14:50:10 +0800"
    author: me
    categories: cyclone
    cover: /assets/images/f1.png
    summary: "就目前页面设计而言，不能为空"
    ---

其中 cover（即博客封面图片）可以考虑使用两种形式：

    1. 把图片放在assets/images/目录下 再描述为 /assets/images/XXX
    2. URL链接

另外，关于该目录下md文件的命名，似乎并不是所以形式的命名都会被处理，形式需要是 YYYY-MM-DD-标题（如2017-5-7-name-of-post-example.md）才行。

## 运行项目

1、 环境安装可以查看：[https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

2、 运行 jekyll server

3、其他[https://gist.github.com/biezhi/f88be58ef4ae0f3741bb36ab8daa53c5](https://gist.github.com/biezhi/f88be58ef4ae0f3741bb36ab8daa53c5)

