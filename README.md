###### 

###### 环境

node v8.11.1 

npm v6.4.0

###### 重现步骤

1. 初始化项目

   ```shell
   vue init mpvue/mpvue-quickstart vantweappnotify
   ```

   ![image-20180828112215743](https://ws4.sinaimg.cn/large/0069RVTdgy1fup917vihxj30z40ssadp.jpg)

2. 直接通过 git 下载 Vant Weapp 源代码，并将`dist`目录拷贝到项目中的static下并重命名为vant

   ```shell
   git clone https://github.com/youzan/vant-weapp.git
   ```

3. 在页面中的main.json 引入组件并在页面中

   ```json
   {
     "usingComponents": {
       "van-button": "../../static/vant/button/index",
       "van-notify": "../../static/vant/notify/index"
     }
   }
   
   ```

   ```
   <template>
       <div class="container">
           <van-button type="default" @click="showNotify">测试Notify</van-button>
       </div>
   </template>
   
   <script>
       // import Notify from '../../../static/vant/notify/index';
       export default {
           data() {
               return {}
           },
           methods: {
               showNotify() {
                   console.info('showNotify');
                   // console.info(Notify);
                   // Notify('测试文案...');
               },
           },
           created() {
           }
       }
   </script>
   
   <style scoped>
   
   </style>
   
   ```

4. 运行

   ```
   npm install
   npm run dev 
   ```

   微信开发者工具 增加小程序项目 勾选ES6 转 ES5 可以正常运行

   ![image-20180828114318328](https://ws1.sinaimg.cn/large/0069RVTdgy1fup9n4406uj31kw13u7ck.jpg)

5. 页面中import notify 之后 命令行报错

   ```
   <template>
       <div class="container">
           <van-button type="default" @click="showNotify">测试Notify</van-button>
       </div>
   </template>
   
   <script>
   	// import 之后 编译报错
       import Notify from '../../../static/vant/notify/index';
       export default {
           data() {
               return {}
           },
           methods: {
               showNotify() {
                   console.info('showNotify');
                   // console.info(Notify);
                   // Notify('测试文案...');
               },
           },
           created() {
           }
       }
   </script>
   
   <style scoped>
   
   </style>
   ```



   ![image-20180828114630876](https://ws3.sinaimg.cn/large/0069RVTdgy1fup9qg9vbbj31j20lwq5s.jpg)

   这个错误也不知道怎么解决，请教各位这个错误的具体原因

6. 修改 static/vant/notify/notify.js 的代码 编译报错消失，但小程序增加报错 Page 注册错误

   ```
   const defaultOptions = {
       selector: '#van-notify',
       duration: 3000
   };
   
   export default function Notify(options = {}) {
       const pages = getCurrentPages();
       const ctx = pages[pages.length - 1];
   
       options = Object.assign({}, defaultOptions, parseParam(options));
   
       const el = ctx.selectComponent(options.selector);
       delete options.selector;
   
       if (el) {
           // el.setData({
           //   ...options
           // });
           // 修改成这样 编译报错消失
           el.setData(options);
           el.show();
       }
   }
   
   function parseParam(params = '') {
       return typeof params === 'object' ? params : {text: params};
   }
   
   ```

   Page 注册错误  Please do not register multiple Pages in pages/index/main.js

   ![image-20180828115248986](https://ws4.sinaimg.cn/large/0069RVTdgy1fup9x0qko8j31kw116am2.jpg)

7. 后面还有问题 到这里就走不下去了



在这里向大家请教一下这个问题，希望能得到产生问题的原因和解决思路



