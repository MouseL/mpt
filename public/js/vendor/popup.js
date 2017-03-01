define(['zepto'], function()
{
    var _ = {};
    var _ns = "xy-";

    // 扩展 mask    
    _.showMask = function(transparent, callback)
    {
        transparent = transparent || false;
        var $mask = $('.xy-mask');
        if($mask.size() === 0)
        {
            $('body').append('<div class="xy-mask"></div>');
            $mask = $('.xy-mask');
        }
        $mask.toggleClass('transparent', transparent);
        $mask.show();
        (typeof window['callback'] === 'function') && window['callback']();
        return this;
    }

    _.hideMask = function(callback)
    {
        $('.xy-mask').remove();
        (typeof window['callback'] === 'function') && window['callback']();
        return this;
    }

    var _timerToast = null;
    _.showToast = function(options)
    {
        clearTimeout(_timerToast);

        var _options =
        {
            type: 'success',
            time: 2000, 
            callback: null
        };

        _options = $.extend(_options, options );

        if(!_options.message)
        {
            return this;
        }

        if(_options.type === 'loading')
        {
            _options.time = 1000 * 60;
        }

        var $toast = $('.xy-toast');
        if($toast.size() > 0 )
        {
            $toast.remove();
        }

        _.showMask(true);

        $toast = $('<div class="xy-toast"><i class="icon"></i><p class="text">#text#</p></div>'.replace('#text#', _options.message)).appendTo($('body'));
        $toast.addClass( _ns + _options.type);
        $toast.show();

        _timerToast = setTimeout(function()
        {
            _.hideToast();

            (typeof _options.callback === 'function') && _options.callback();
        }, _options.time);

        if(!_options.callback)
        {
            return this;
        }
        return this;
    };

    _.hideToast = function()
    {
        $('.xy-toast').hide().remove();
        _.hideMask();
        return this;
    }

    _.showDialog = function(options)
    {
        var _options =
        {
            title: '提醒：',
            type: 'success',
            action : 
            [
                {
                    'text': '确定',
                    'class': 'mui-btn-success',
                    'callback': function()
                    {
                        _.hideDialog();
                    }
                }
            ],
            callback: null
        };

        _options = $.extend(_options, options );

        if(!_options.message)
        {
            return this;
        }

        var $dialog = $('.xy-dialog');
        if($dialog.size() > 0 )
        {
            $dialog.remove();
        }

        _.showMask();

        $toast = $('<div class="xy-dialog"><div class="dialog-hd">#title#</div><div class="dialog-bd">#text#</div><div class="dialog-ft"><ul class="action"></ul></div></div>'.replace('#title#', _options.title).replace('#text#', _options.message)).appendTo($('body'));
        var $action = $toast.find('.dialog-ft .action');
        $.each(_options.action, function()
        {
            var _this = this;
            var $button = $('<li><a href="javascript:;" class="mui-btn #class#">#text#</a></li>'.replace('#class#', _this.class).replace('#text#', _this.text));
            $action.append($button);

            $button.bind('click', function()
            {
                _this.callback();
            });
        });
        $toast.addClass( _ns + _options.type);
        $toast.show();

        if(!_options.callback)
        {
            return this;
        }

        (typeof _options.callback === 'function') && _options.callback();

        return this;
    
    }

    _.hideDialog = function()
    {
        $('.xy-dialog').hide().remove();
        _.hideMask();

        return this;
    }


    window['popup'] = _;

    return _;
    
});