//每次调用ajax方法时，都会先调用ajaxPrefilter这个函数
//可以拿到给ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
})