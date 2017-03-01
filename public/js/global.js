define(['socket', 'mobilebone', 'zepto','popup', 'qrcode',  'lrz'], function(io, mobilebone)
{
    window.io = io;
    window.Mobilebone = mobilebone;

    Mobilebone.init();

    var socket = io();


    // qrcode page 
    ($('html.qrcode').size() > 0 ) && (function()
    {

        (function()
        {
            $(document).on('click', '.button-restart', function()
            {
                location.href = "";
            });

            $(document).on('click', '.page-receive-file .file-list li div', function()
            {
                // var _img = $(this).find('img')[0];
                // _img.select();
                // document.execCommand("Copy");
            });

        })();

        // 注册
        socket.emit('register', 
        {
            guid : guid
        });

        // 注册 callback
        socket.on('register', function( data )
        {
            var url = ctx + '/choose/' +  data.guid;
            console.log('url:' + url)
            var qrcode =  new AraleQRCode(
            {
                text: url,
                size: 200
            });

            $('.qrcode-container').html(qrcode);

            $('.page-t .go-qrcode').trigger('click');
        });

        // 验证 callback
        socket.on('validation', function(data)
        {
            $('.page-t .go-receive-file').trigger('click');
        });

        // receive file
        socket.on('sendFile', function(data)
        {
            var $page = $('.page-receive-file').addClass('has-file');

            var _index = 0;
            $page.find('.status .index').html(function(index, val)
            {
                if(val)
                {
                    _index = parseInt(val) + 1;
                }
                else
                {
                    _index = 1;
                }

                return _index;
            });

            $page.find('.status .count').html(data.count);

            if(_index === data.count)
            {
                $page.addClass('completed').find('.status span').html('<i class="icon"></i>图片传输完成 <br>请右键图片，选择复制，粘贴到文档中')
            }

            var _tmpl = '<li title="请右键图片，选择复制，粘贴到文档中"><div><img src="{file}"></div></li>';
            $('.page-receive-file .file-list').append( _tmpl.replace('{file}', ctx + data.file ) );
        });
    })();

    // choose page
    ($('html.choose').size() > 0 ) && (function()
    {

        var files = [];
        var count = 0;
        var compress = false;
        (function()
        {
            $('.page-choose input[type="file"]').change(function(e)
            {
                count = e.target.files.length;
                count = count >= 9 ? 9 : count;

                if(files.length > 8 || compress )
                {
                    return;
                }

                $('.page-choose .button-choose').addClass('disabled');
                $('.page-choose').removeClass('no-file').addClass('compress-file').find('.message span').html('<i class="icon"></i>正在处理图片...')

                compress = true;
                $.each(e.target.files, function(index)
                {      
                    lrz(this, 
                    {
                        width: 1600,
                        height: 1600
                    })
                    .then(function (rst) 
                    {
                        // 处理成功会执行
                        if(files.length > 8)
                        {
                            return;
                        }
                        files.push(rst.base64);

                        var _tmpl = '<li><div><img src="{file}"></div></li>';
                        $('.page-choose .file-list').append( _tmpl.replace('{file}', rst.base64 ) );
                    })
                    .catch(function (err) 
                    {
                        // 处理失败会执行
                    })
                    .always(function () 
                    {
                        // 不管是成功失败，都会执行

                        count--;

                        if(count === 0 )
                        {
                            compress = false;

                            $('.page-choose .button-choose').removeClass('disabled');

                            $('.page-choose').removeClass('compress-file').addClass('has-file');
                        }
                    });

                });
                
            });


            $('.page-choose .button-upload').on('tap', function()
            {
                var $this = $(this);

                if($this.hasClass('process') || compress)
                {
                    return;
                }

                if($('.page-choose .file-list li').size() === 0 )
                {
                    $('.page-choose').addClass('no-file').find('.message span').html('请先选择图片，再点击上传按钮');
                    return;
                }

                $('.page-choose .button-choose').addClass('disabled');

                setTimeout(function()
                {
                    $this.addClass('process').html('正在传输...');
                }, 10);

                socket.emit('sendFile', 
                {
                    guid : guid,
                    files: files
                });
            });
        })();


        // 验证
        socket.emit('validation', 
        {
            guid : guid
        });

        // 验证 callback
        socket.on('validation', function(data)
        {
            if(!data.status)
            {
                $('.page-check-guid').addClass('error').find('.message').find('span').html( '<i class="icon"></i>' +  data.error);
                return;
            }

            $('.page-t .go-choose').trigger('tap');
        });

        // receive file
        socket.on('receiveFile', function(data)
        {
            $('.page-choose .file-list').empty();

            if(!data.status)
            {
                $('.page-choose').addClass('no-file').find('.message span').html( data.error );
                return;
            }
            

            $('.page-t .go-completed').trigger('tap');


        });
    })();
    
});