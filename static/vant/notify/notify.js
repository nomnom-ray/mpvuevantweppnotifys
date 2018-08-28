const defaultOptions = {
    selector: '#van-notify',
    duration: 3000
};

export default function Notify(options = {}) {
    const pages = getCurrentPages();
    console.info(pages);
    const ctx = pages[pages.length - 1];
    console.info(ctx);
    options = Object.assign({}, defaultOptions, parseParam(options));
    const el = ctx.selectComponent(options.selector);
    console.info(el);
    delete options.selector;

    if (el) {
        // el.setData({
        //   ...options
        // });
        
        // {...options} 运行结果其实是与 直接的options 相等的没有明白为什么 要写成  {...options}
        // 修改成
        el.setData(options);
        el.show();
    }
}

function parseParam(params = '') {
    return typeof params === 'object' ? params : {text: params};
}
