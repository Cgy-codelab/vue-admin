import Mock from 'mockjs';
const LoginUsers = [
  //用户信息修改
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    avatar: '../assets/user.png',
    name: '洋洋'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export {
  LoginUsers,
  Users
};