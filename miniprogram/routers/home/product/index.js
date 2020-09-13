//index.js
const app = getApp()
const pageNo = 1
const size = 30
Page({
  data: {
    pageNo,
    size,
    isHave: true
  },
  onReachBottom() {
    let { isHave, pageNo, size } = this.data
    if (isHave) {
      this.getData(pageNo + 1, size)
    }
    console.log()
  },
  getData(pageNo, size) {
    //获取数据
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      console.log(pageNo, size)
      wx.hideLoading()
      wx.stopPullDownRefresh()
    }, 2000);
  },
  onPullDownRefresh() {
    this.getData(pageNo, size)
  },
  toCart() {
    wx.switchTab({
      url: '/routers/cart/index'
    })
  }

})
