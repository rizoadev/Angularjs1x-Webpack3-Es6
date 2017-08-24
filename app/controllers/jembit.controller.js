export default function($scope, ping) {

  console.log('controller jembit!', $scope);
  let c = ping.me();
  console.log(c);

  this.$onInit = function() {

    console.log('kopet init');
  };

}
