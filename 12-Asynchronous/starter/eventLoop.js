console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved Promise 1').then(response => console.log(response));
Promise.resolve('Resolve promise 2').then(response => {
  for (let i = 0; i < 100; i++) {
    console.log(response);
  }
});
console.log('Test End');
