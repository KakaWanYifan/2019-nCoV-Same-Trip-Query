Page({
  data: {
    noVal: '',
    dateVal: ''
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
  dateChange(e){
    this.setData({
      date: e.detail.value,
      dateVal: e.detail.value
    })
    
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
    const db = wx.cloud.database()
    if (this.data.dateVal != '' && this.data.noVal != '') {
      wx.cloud.callFunction({
        name: 'getSelectWithDateWithNo',
        data: {
          noVal: this.data.noVal,
          dateVal: this.data.dateVal
        },
        success: res => {
          this.setData({
            result: res.result.data
          })
        },
        fail: err => {
          this.setData({
            result:  null
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
      this.setData({
        result: null
      })
    }

  },
  inputChange(e){
    this.data.noVal = e.detail.value
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
    const db = wx.cloud.database()
    if (this.data.dateVal != '' && this.data.noVal != '') {
      wx.cloud.callFunction({
        name: 'getSelectWithDateWithNo',
        data: {
          noVal: this.data.noVal,
          dateVal: this.data.dateVal
        },
        success: res => {
          console.log(res.result.data)
          this.setData({
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
      this.setData({
        result: null
      })
    }
  }
})