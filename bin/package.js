var cmd = require('node-cmd');
var $q = require('q');


$q.when()
    .then(promiseCmd('pwd'))
    .then(log('Directory:'))
    .then(promiseCmd('rm -fr builds/*.zip'))
    .then(promiseCmd('zip -rqT builds/package.zip * -x "builds"'))
;

function log(message){
    return function(data){
        console.log(message, data);
        return data;
    };
}

function promiseCmd(command, async){
    return function(req){
        var deferred = $q.defer();
        console.log('CMD:', command);
        if(async){
            cmd.run(command);
            deferred.resolve();
        }else{
            cmd.get(command, function(res){
                deferred.resolve(res);
            });
        }

        return deferred.promise;
    };
}