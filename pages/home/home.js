// pages/home/home.js
// getApp()获取App产生的示例对象
const app= getApp()
// console.log(app.globalData.name);
const name = app.globalData.name;
const age = app.globalData.age;

// 注册一个页面
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'codewhy',
    age:18,
    students:[
      {id:100,name:'kobe',age:30},
      {id:101,name:'jame',age:30},
      {id:102,name:'gae',age:32},
      {id:103,name:'love',age:30},
    ],
    cnt:0

  },

  HandleBntInc(){
  // 错误做法
  //  this.data.cnt += 1
  //  console.log("Button has been clicked")
  //  console.log(this.data.cnt)
  // this.setData()
  this.setData({
    cnt: this.data.cnt + 1
  })
  },
  HandleBntDec(){
    this.setData({
      cnt: this.data.cnt - 1
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log("onload")
    wx.request({
/*       url: 'http://123.207.32.32/home',
      success:(res) => {
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }   */   
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 3. 监听wxml中相关的一些事件
  handleGetUserInfo()
  {


  },

  //  4. 监听其他事件
  onPageScroll(){

  }
})