
Ueditor 常用方法
1. 实例化编辑器到id为 container 的 dom 容器上：
   var ue = UE.getEditor('container');
2. 设置编辑器内容：
    ue.setContent('<p>hello!</p>');
3. 追加编辑器内容：
    ue.setContent('<p>new text</p>', true);
4. 获取编辑器html内容：
    var html = ue.getContent();
5. 获取纯文本内容：
    ue.getContentTxt();
6. 获取保留格式的文本内容：
    ue.getPlainTxt();
7. 判断编辑器是否有内容：
    ue.hasContents();
8. 让编辑器获得焦点：
    ue.focus();
9. 让编辑器失去焦点
    ue.blur();
10. 判断编辑器是否获得焦点：
    ue.isFocus();
11. 设置当前编辑区域不可编辑：
    ue.setDisabled();
12. 设置当前编辑区域可以编辑：
    ue.setEnabled();
13. 隐藏编辑器：
    ue.setHide();
14. 显示编辑器：
    ue.setShow();
15. 清空内容：
    ue.execCommand('cleardoc');
16. 读取草稿箱：
    ue.execCommand('drafts');
17. 清空草稿箱：
  ue.execCommand('clearlocaldata');


博客链接：https://www.jianshu.com/p/8c43636c6c47


# ueditor-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
