const cloud = require('wx-server-sdk')
const { errorFun, noFunction } = require('../default')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// curd 
/**
 * 
 * @param {*} name 
 * @param {*} price 
 * @param {*} unit 
 * @param {*} description 
 * @param {*} productPicture 
 */
const goodFunObj = {
  createGood: (name, price, unit, description, productPicture) => {

  },
  updateGood: (id, name, price, unit, description, productPicture) => {

  },
  readGood: (page, total) => {

  },
  deleteGood: (id) => {

  }
}



exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  const { userInfo, runFuncation, data } = event

  const wxContext = cloud.getWXContext()
  if (goodFunObj[runFuncation]) {
    let result = errorFun
    try {
      result = await goodFunObj[runFuncation]()
    } catch (error) {
      return result
    }
    return result
  } else {
    return noFunction
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
  }
}

