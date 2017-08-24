export default function($http){
  function me(){
    console.log('Service OK!','me is oke')
    $http.get('https://status.github.com/api/status.json?callback=apiStatus')
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return {
    me : me
  }
}
