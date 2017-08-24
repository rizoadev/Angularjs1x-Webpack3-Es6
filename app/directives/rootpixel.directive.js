export default function(){
  return {
    template: '<a ui-sref="post">post</a> <a ui-sref="home">home</a><ui-view></ui-view> <div ng-show="loadingView">loadingView</div>'
  }
}
