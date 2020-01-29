const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const MAX_LIMIT = 1000
exports.main = async (event, context) => {
  // 先取出集合记录总数
  const countResult = await db.collection('nCoV').where({
    t_date: event.dateVal,
    t_no: db.RegExp({
      regexp: event.noVal,
      options: 'i',
    })
  }).count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 1000)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('nCoV').where({
      t_date: event.dateVal,
      t_no: db.RegExp({
        regexp: event.noVal,
        options: 'i',
      })
    }).skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}