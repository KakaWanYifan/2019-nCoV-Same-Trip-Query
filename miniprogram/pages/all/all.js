Page({
  compare: function (property) {
    return function (a, b) {
      var val_1 = Date.parse(a[property]);
      var val_2 = Date.parse(b[property]);
      return val_2 - val_1;
    }
  },
  onReady: function () {
    var now = new Date()
    var date = new Date()
    var dateVal = ''
    var i = 0
    var listVal = []
    for (i = 0; i<30; i++) {
      date.setTime(now.getTime() - i * 24 * 60 * 60 * 1000);
      var char = "-";
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var dateStr = year + char + (month < 10 ? "0" + month : month) + char + (day < 10 ? "0" + day : day);
      wx.cloud.callFunction({
        name: 'getSelectWithDateWithoutNo',
        data: {
          dateVal: dateStr
        },
        success: res => {
          var obj = {}
          obj.id = res.result.data[0].t_date
          obj.name = res.result.data[0].t_date
          obj.open = false
          obj.values = res.result.data
          listVal.push(obj)
          listVal.sort(this.compare("id"));
          this.setData({
            list : listVal
          })
        },
        fail: err => {
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
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },
  getRaw(e) {
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
  }
})