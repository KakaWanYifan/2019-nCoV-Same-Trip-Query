const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const MAX_LIMIT = 20
exports.main = async (event, context) => {
  // 承载所有读操作的 promise 的数组
  const tasks = []
  const promise = db.collection('nCoV').where({
    t_date: event.dateVal
  }).skip(event.currentVal * MAX_LIMIT).limit(MAX_LIMIT).get()
  tasks.push(promise)
  // 等待
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg
    }
  })
}