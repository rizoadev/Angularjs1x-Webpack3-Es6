export default($stateProvider, $urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
  console.log('config.router ok')

  $stateProvider
  .state('post', {
    url: '/post',
    template: require('../view/post.html'),
    controller: 'homeController',
    controllerAs: 'posts',
    /*
    resolve: {
      posts: (PostService) => {
        return PostService.getPosts().then((object) => {
          return object.data;
        });
      }
    }
    */
  })
  .state('home', {
    url: '/home',
    template: require('../view/home.html'),
    controller: 'jembit',
    controllerAs: 'posts',
    /*
        resolve: {
          posts: (PostService) => {
            return PostService.getPosts().then((object) => {
              return object.data;
            });
          }
        }
        */
  });
  console.log($stateProvider);
}
