angular.module('myApp', ['ngResource']);
angular.module('myApp').config(function($httpProvider){
    $httpProvider.defaults.transformResponse = function(data) {
        var datalist = data.split(/\r\n|\r|\n/);
        var len = datalist.length;
        var jsonstr = '[';
        jsonstr += datalist[0];
        for(var i=1; i<len; i++){
            jsonstr += ',';
            jsonstr += datalist[i];
        }
        jsonstr += ']';
        return JSON.parse(jsonstr);
    };
});
angular.module('myApp').controller('mainCtrl', mainCtrl);

function mainCtrl($resource) {
    this.pageTitle = "gurume 23 ku";
    var contents = $resource("http://localhost:8000/output.json");
    this.ranks = contents.query();
    
}
