var require = 
{
    baseUrl: '/js/',
    urlArgs: '@@vv',
    paths: 
    {
        mobilebone: 'vendor/mobilebone',
        zepto : 'vendor/zepto',
        template: 'vendor/template',
        socket: 'vendor/socket.io',
        qrcode: 'vendor/qrcode',
        xdate: 'vendor/xdate',
        url: 'vendor/url',
        lrz: 'vendor/lrz',
        jic: 'vendor/jic',
        popup: 'vendor/popup',

        global: 'global',
    },
    shim:
    {
        popup:
        {
            deps: ['zepto'],
            exports: 'popup'
        },
        global:
        {
            deps: []
        }
    }
};