import angular        from 'angular';

import home from    './home.controller'
import jembit from  './jembit.controller'

export default angular.module('controller', [])
  .controller('homeController',home)
  .controller('jembit',jembit)
  .name
