// After 1 second, call Math.random()
// If the result of Math.random() is > 0.5, call resolve() --> after resolve console.log('success')
// If the result of Math.random() is <= 0.5, call reject() --> after reject console.log('failure')

let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const num = Math.random()
    console.log('RandNum', num)
    if(num>0.5){
      resolve('Success');
    } else{
      reject('failure')
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message, 'complete');
  }).catch((message) =>{
    console.log(message, 'complete');
  })



// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });
