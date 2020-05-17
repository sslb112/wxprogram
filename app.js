// 注册一个小程序示例
App({
  // 小程序初始化完成时
onLaunch:function(){
// 网络请求，数据量较大时一般不做

// 获取用户信息

},

// 小程序显示时
onShow: function (options){
  // 1、判断小程序的进入场景
  //console.log(options)
  switch(options.scene)
  {
    case 1001:
    break;
    case 1011:
      break;
  }

  // 2、获取用户信息，并将获取信息传递给服务器
  wx.getUserInfo({
    success: function(res){
      //console.log(res)
    },
    complete: (res) => {},
  })
},

// 小程序隐藏时
onHide(msg){


},

// 小程序产生错误时
onError(){


},

// 全局数据
globalData:{
  name:"bin",
  age:12
}
})