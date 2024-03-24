import Mock from "mockjs";
import institution from "./api/gpt.ts";
Mock.mock("/mock/getResponse", "post", institution.getResponse);
