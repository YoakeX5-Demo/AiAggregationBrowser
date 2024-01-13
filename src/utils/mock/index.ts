import Mock from "mockjs";
import institution from "./api/gpt.ts"; // 机构列表

Mock.mock("/mock/getResponse", "post", institution.getResponse);
