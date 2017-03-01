var fs = require("fs");
var path = require('path');
var uuid = require('node-uuid');


var users =  {};

module.exports = function(app, io) 
{
    io.on('connection', function(socket)
    {
        console.log('function: connection.');

        // register guid
        socket.on('register', function(data)
        {
            console.log('register: register.');

            socket.guid = data.guid;

            users[data.guid] = 
            {
                used: false,
                socket:  socket,
                count: 0
            };

            fs.mkdir('public/temp/' + data.guid, 0777, function(err)
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log("create dir done!");

                    socket.emit('register', 
                    {
                        guid: data.guid
                    });
                }
            });

        });

        // validation guid
        socket.on('validation', function(data)
        {
            console.log('function: validation.');

            var guid = data.guid;
            var user = users[guid];

            console.log(guid)
            console.log(user)

            if(!user)
            {
                socket.emit('validation', 
                {
                    status: false,
                    guid: guid,
                    error: '该二维码无效'
                });

                return;
            }

            if(user && user.used)
            {
                socket.emit('validation', 
                {
                    status: false,
                    guid: guid,
                    error: '该二维码已经被使用'
                });

                return;
            }

            user.used = true;

            socket.emit('validation', 
            {
                status: true,
                guid: guid
            });


            user.socket.emit('validation', 
            {
                status: true,
                guid: guid
            });

        });


        // receive file
        socket.on('sendFile', function(data)
        {
            console.log('function: receive file');
            var guid = data.guid;
            var user = users[guid];
            var count = data.files.length;

            if(!user)
            {
                socket.emit('receiveFile', 
                {
                    status: false,
                    guid: guid,
                    error: '该二维码无效'
                });

                return;
            }

            // user.socket.emit('sendFile', data);

            socket.emit('receiveFile', 
            {
                status: true,
                guid: guid
            });

            data.files.forEach(function( base64Data )
            {
                var path = '/temp/' + guid + '/' + uuid.v1() + '.png';
                var dir = 'public' + path ;
                base64Data = base64Data.replace(/^data:image\/\w+;base64,/, "");

                var dataBuffer = new Buffer(base64Data, 'base64');
                fs.writeFile(dir , dataBuffer, function(err) 
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        console.log(path + ' save success.');

                        user.socket.emit('sendFile', 
                        {
                            count: count,
                            file: path
                        });
                    }
                });
            });


            
    
        });

        socket.on('disconnect', function () 
        {
            console.log('disconnect guid：' + socket.guid);
            delete users[socket.guid];

            var dir = 'public/temp/' + socket.guid;


            var exists = fs.existsSync(dir);
            if(!exists)
            {
                return;
            }

            fs.readdir(dir, function(err, files) 
            {  
                if (err) 
                {  
                    console.log('read dir error');  
                } 
                else 
                {  
                    files.forEach(function(file) 
                    {  
                        fs.unlink(dir + '/' + file);
                    }); 
                }
            }); 
        });
    });


    
};