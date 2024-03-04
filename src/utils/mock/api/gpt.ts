// import { Random } from "mockjs";
// const list: any = [];
// for (let i = 0; i < 20; i++) {
//   list.push({
//     id: Random.id(),
//     name: Random.cname(),
//     code: Random.integer(10000000, 80000000),
//     url: Random.url("http"),
//     createTime: Random.datetime("y-MM-dd HH:mm"),
//     updateTime: Random.datetime("y-MM-dd HH:mm"),
//   });
// }
export default {
  getResponse: () => ({
    result: true,
    data: "你好",
  }),
};
