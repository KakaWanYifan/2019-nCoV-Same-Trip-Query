Page({
  data: {
    noVal: '',
    dateVal: ''
  },
  compare: function (property) {
    return function (a, b) {
      var val_1 = Date.parse(a[property]);
      var val_2 = Date.parse(b[property]);
      return val_2 - val_1;
    }
  },
  select:function(){
    if (this.data.noVal == null) {
      this.data.noVal = ''
    }
    if (this.data.dateVal == null) {
      this.data.dateVal = ''
    }
    //
    // 查询
    //
    // 1 如果日期和车次都不是 null
    if (this.data.dateVal != '' && this.data.noVal != '') {
      wx.cloud.callFunction({
        name: 'getSelectWithDateWithNo',
        data: {
          noVal: this.data.noVal,
          dateVal: this.data.dateVal
        },
        success: res => {
          this.setData({
            count: '当前页面共' + res.result.data.length + '条',
            result: res.result.data
          })
        },
        fail: err => {
          this.setData({
            result: null
          })
        }
      })
    }
    // 2 如果日期不是 '' 车次是 ''
    if (this.data.dateVal != '' && this.data.noVal == '') {
      wx.cloud.callFunction({
        name: 'getSelectWithDateWithoutNo',
        data: {
          dateVal: this.data.dateVal
        },
        success: res => {
          this.setData({
            count: '当前页面共' + res.result.data.length + '条',
            result: res.result.data
          })
        },
        fail: err => {
          this.setData({
            result: null
          })
        }
      })
    }
    // 3 如果日期是 '' 车次不是 ''
    if (this.data.dateVal == '' && this.data.noVal != '') {
      wx.cloud.callFunction({
        name: 'getSelectWithoutDateWithNo',
        data: {
          noVal: this.data.noVal
        },
        success: res => {
          this.setData({
            count: '当前页面共' + res.result.data.length + '条',
            result: res.result.data
          })
        },
        fail: err => {
          this.setData({
            result: null
          })
        }
      })
    }
    // 4 如果日期是 ''  车次是 ''
    if (this.data.dateVal == '' && this.data.noVal == '') {
      wx.showLoading({
        title: '数据多 加载慢'
      });
      wx.cloud.callFunction({
        name: 'getAll',
        success: res => {
          this.setData({
            count: '当前页面共' + res.result.data.length + '条',
            result: res.result.data
          })
          var timesRun = Math.round(res.result.data.length / 100) * 5;
          var interval = setInterval(function () {
            wx.hideLoading()
            wx.showLoading({
              title: '大约还需' + timesRun + '秒',
            })
            timesRun = timesRun - 5
            if (timesRun < 0) {
              wx.hideLoading()
              clearInterval(interval);
            }
          }, 5000);
        },
        fail: err => {
          this.setData({
            result: null
          })
          wx.hideLoading();
        }
      })
    }
  },
  copyEmail() {
    wx.setClipboardData({
      data: 'Wan_Yifan@foxmail.com',
      success() {
        wx.showToast({
          title: '邮箱地址已复制',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  getRaw(e){
    var url = e.currentTarget.dataset.index;
    wx.setClipboardData({
      data: url,
      success() {
        wx.showToast({
          title: '原文地址已复制，请粘贴到浏览器查看。',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onLoad:function(){
    this.setData({
      result:[]
    })
    this.select()
  },
  dateChange(e){
    this.setData({
      date: e.detail.value,
      dateVal: e.detail.value
    })
    this.select()
  },
  inputChange(e){
    this.setData({
      noVal : e.detail.value
    })
    this.select()
  }
})