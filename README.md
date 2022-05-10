# Zyou(放串天猴的声音)

Zyou 是一个用于生成「前端接口层代码」以及对应「TypeScript 定义」的工具。你只需要提供一个 Swagger 链接目前，支持生成全部类型,和单个接口类型。

## 为什么使用 Zyou？

1. **简单易用**：只需一个配置文件即可使用。
2. **完整的类型定义**：生成代码包含了完整的类型定义，包括请求的入参以及响应数据的类型定义。
3. **降低前后端集成成本**：特别是当后端接口发生变动时，只需要重新执行一下 Zyou，就能立刻知道后端发生了哪些改动。
4. **支持多种框架**：能够应用到 ReactNative、React、Vue、Angular 等项目。
5. **支持模块化(页面级别)**：能够根据不同页面生成接口,当后端更改时,及时更新

总结: 主要是懒,懒你懂吗?

## 开始

1. 安装

   `npm install zyou -g`

2. 添加配置文件

   在项目根目录下执行

   `zyou`

   选择生成配置文件

   这个命令会在你的 project 根目录下生成一个配置文件：typesConfig.json。

3. 修改配置文件

   ```json
   {
     "path": "https://petstore.swagger.io/v2/swagger.json", // swagger的地址
     "paramsAlias": "params", // 请求参数的文件名
     "responseAlias": "response", // 响应参数的文件名
     "output": "src/types", // 生成的文件存放的地址
     "generateFormPath": "server/interface.ts", // 生成一条类型,保存接口类型的文件地址
     "generateFormModule": { // 使用模块化功能时需配置
       "path": "src/example", // 页面路径
       "urlMapping": {
         "wework-scrm-user": "https://petstore.swagger.io/v2/swagger.json",
         "wework-scrm-operation": "https://petstore.swagger.io/v2/swagger.json",
         "agent": "https://petstore.swagger.io/v2/swagger.json"
       }
     }
   }
   ```

5. 执行命令

   ```bash
   zyou
   ```
   
5. 选择操作类型

- 选择生成全部,会根据配置文件中的path接口地址,生成所有接口放到output输入的地址中,将以paramsAlias为请求类型文件名,以responseAlias响应类型文件名生成全部接口
- 选择生成单条类型,会根据配置文件中的path接口地址,以generateFormPath为目标地址添加请求和响应类型
- 选择模块化生成, 需在页面路径下写一个services.ts文件,

**注意**:一定要按照规范写services.ts文件,否则会有问题,获取文件内容时采用的是 [SWC](https://swc.rs/),获取ast采用的是数组下标获取的,所以如果顺序写错了,会获取失败的

```ts
/** 获取图书 */
export const getBook = {
  service: {
    url: 'getBook',
    method: 'GET',
  },
  prefix: 'Scrm',
}
// 更改图书
export const bookCreateOrUpdate = {
  service: {
    url: 'bookCreateOrUpdate',
    method: 'POST',
  },
  prefix: 'Agent',
}
// 删除图书
export const bookDeleteById = {
  service: {
    url: 'bookDeleteById',
    method: 'POST',
  },
  prefix: 'Agent',
}

```



## 常见问题

- 常见问题太多了,就不列举了,有什么地方使用的不爽请联系邮箱cczapp@163.com,最后欢迎大家 fork&pr

