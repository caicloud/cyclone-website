# cyclone-website

### Before posting an article


#### ```_posts``` directory

    |------------------
    |----...
    |----_posts(The article is placed in this directory)
    |----...

To create a post, add a file to your ```_posts``` directory with the following format:

```
        YEAR-MONTH-DAY-title.md
```
The beginning of the contents of the ```.md``` file need to be as follows:

```
---
layout: post
title:  "The name of your article"
date:   "2019-05-07 14:50:10 +0800"
author: "your name"
categories: cyclone
cover: /assets/images/f1.png
summary: "As far as the design of the current page is concerned, the content here cannot be empty."
---
```
And **cover** is the article cover picture, you can consider the following two forms：

1. Put the picture in the ```assets/images/``` directory, which means that the **cover** needs to be written as ```/assets/images/XXX```
2. Use URL directly

### Running project

1. Environment installation ：[https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

2. Run command： jekyll server

3. More： [jekyll](https://jekyllrb.com/docs/)、[jekyll-guide](https://gist.github.com/biezhi/f88be58ef4ae0f3741bb36ab8daa53c5)

