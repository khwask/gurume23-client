angular.module('myApp', ['ngResource']);
angular.module('myApp').controller('mainCtrl', mainCtrl);

function mainCtrl($resource) {
    this.pageTitle = "ぐるめ23区";
    this.description = "いろんな場所のおすすめ料理をお届け";

    var part0 = $resource("part-r-00000");
    this.ranks = part0.query();

    this.sortColumn = 'areaName';
    this.reverse = false;
    this.sortIcon = "";
    this.order = function(sortColumn) {
        this.reverse = (this.sortColumn === sortColumn) ? !this.reverse : false;
        this.sortIcon = this.reverse ? "glyphicon glyphicon-menu-down" : "glyphicon glyphicon-menu-up";
        this.sortColumn = sortColumn;
    };
}
