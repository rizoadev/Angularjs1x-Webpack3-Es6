import angular        from 'angular';

import rootpixelDirective from './rootpixel.directive'

export default angular.module('directive', [])
  .directive('rootpixel',rootpixelDirective)
  .name
