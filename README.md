# Zyou(放串天猴的声音)

Zyou 是一个用于生成「前端接口层代码」以及对应「TypeScript 定义」的工具。你只需要提供一个 Swagger 链接

## 为什么使用 Zyou？

1. **简单易用**：只需一个配置文件即可使用。
2. **完整的类型定义**：生成代码包含了完整的类型定义，包括请求的入参以及响应数据的类型定义。
3. **降低前后端集成成本**：特别是当后端接口发生变动时，只需要重新执行一下 Zyou，就能立刻知道后端发生了哪些改动。
4. **支持多种框架**：能够应用到 ReactNative、React、Vue、Angular 等项目。

总结: 主要是懒,懒你懂吗?

## 开始

1. 安装

   `npm install zyou -D`

2. 添加配置文件

   在项目根目录下执行

   `touch typesConfig.json`

   这个命令会在你的 project 根目录下生成一个配置文件：typesConfig.json。

3. 修改配置文件

   ```json
   {
     "path": "http://swagger.io", // swagger的地址
     "paramsAlias": "params",	// 请求参数的文件名
     "responseAlias": "response", // 响应参数的文件名
     "output": "src/types" // 生成的文件存放的地址
   }
   ```

4. 添加命令

   在package.json的script添加命令

   ```json
     "scripts": {
       "zyou": "zyou",
        ...
     },
   ```

5. 执行命令

   ```bash
   npm run zyou
   ```

## 常见问题

- 常见问题太多了,就不列举了,有什么地方使用的不爽请联系邮箱chenchengzuo@zhongan.com,最后欢迎大家fork&pr

