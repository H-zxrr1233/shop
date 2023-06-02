import Mock from 'mockjs'

// 定义拦截接口和返回的 mock 数据
Mock.mock('http://pcapi-xiaotuxian-front-devtest.itheima.net/login', 'post', {
  code: 1,
  message: '操作成功',
  result: {
    // mock 数据内容
    id: '1369594954739859458',
    account: 'ruirui001',
    mobile: '13219165182',
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuYW1lXCI6XCLkvKDmmbrmlZnogrIrMVwiLFwiaWRcIjpcIjEzNjk1OTQ5NTQ3Mzk4NTk0NThcIixcInVzZXJuYW1lXCI6XCJ4aWFvdHV4aWFuMDAxXCJ9IiwiaWF0IjoxNjU1NDcxNTExLCJleHAiOjE2NTU3MzA3MTF9.pruHg2laVUHy84NHI8QFCkG2tzTbDy8ASAaHpm7iHxE',
    avatar:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png',
    nickname: '传智教育+1',
    gender: '男',
    birthday: '2021-11-11',
    cityCode: '110100',
    provinceCode: '110000',
    profession: '国家机关、党群组织、企业、事业单位负责人',
  },
})

// 定义其他接口和 mock 数据
// ...
