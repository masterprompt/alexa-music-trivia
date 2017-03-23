module.exports = function(state){
    return function(helper){
        helper.state = state;
        return helper;
    };
};