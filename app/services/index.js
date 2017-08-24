import angular        from 'angular';

import ping from './ping.service';

export default angular.module('services', [])
  .service('ping',ping)
  .name
