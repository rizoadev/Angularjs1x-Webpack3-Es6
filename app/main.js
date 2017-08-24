/*
  Import Dependencies
*/
import angular        from 'angular';
import uiRouter       from 'angular-ui-router';
import ngSanitize     from 'angular-sanitize';

/*
  CSS
*/
import './scss.js';

/*
  Initial
*/
import controllers  from './controllers/index';
import directives   from './directives/index';
import services     from './services/index';
import config       from './config/config.router';

export default angular.module('app', [uiRouter, ngSanitize,controllers,directives,services])

  .config(config)

  .run(['$rootScope','$timeout', ($root,$timeout) => {

    $root.loadingView = false;
    $root.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
      if (newUrl !== oldUrl) {
        $root.loadingView = true;
      }
    });

    $root.$on('$stateChangeSuccess', () => {
      $timeout(function(){
        $root.loadingView = false
      },300);
    });

    $root.$on('$stateChangeError', () => {
      $root.loadingView = false;
    });

  }]);

  /*
  //service
  .service('apiService',       apiService)

  //controller
  .controller('init',          require('./controllers/init.controller'))

  //component
  .component('rootpixelJogja', require('./components/init.component'))
  .component('home',           require('./components/home.component'))
  .component('sample',         require('./components/sample.component'))

  //directive
  .directive('header',         require('./directives/header.directive'))

  //config
  .config(require('./config/router'))
  */
