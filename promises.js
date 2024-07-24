// Activity 1: Undesrstanding Promises
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Waited For 2min to run this task');
        resolve();
    }, 2000 )
})
.then(function(){
    console.log('Promise Consumed');
})

// Task: 2 Create a Promise that rejects with an error message after 2 sec timeout and handle the error using .catch()

newPromise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Waited For 2min to run this task');
        reject('Some Error Occured');
    }, 2000 )
}).then((result) =>{
    console.log('Promise Resolve with', result);
}).catch((error)=>{
    console.log('Promise Rejected with', error);
})

//Activity 2: Chaining Promises 
function fetchDataFromServer(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(`Fetching data: ${data}`);
            resolve(data);
        }, Math.random() * 2000); // Simulate varying response times
    });
}

fetchDataFromServer('First')
    .then(function(result) {
        return fetchDataFromServer('Second');
    })
    .then(function(result) {
        return fetchDataFromServer('Third');
    })
    .then(function(result) {
        console.log('All data fetched successfully');
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    });

// Activity 3: Using Asynch/Await
new Promise(function(resolve,reject){
    setTimeout(()=> resolve('Promise Resolved'),2000)
});
async function waitForPromise(promise){
    try{
        const response = await(newPromise2)
        console.log(response);
    }
    catch (error){
        console.log('Promise Rejected:' , error)
    }
}

waitForPromise()

// Activity 4: Fetch Data From API 
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    }   catch(error){
        console.log("E: ", error)
    }
}
getAllUsers();

// Activity 5: Concurrent Promises 
// Example promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 1500));

// Array of promises
const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then((values) => {
    console.log('All promises resolved with values:');
    values.forEach((value, index) => {
      console.log(`Promise ${index + 1}: ${value}`);
    });
  })
  .catch((error) => {
    console.error('One of the promises rejected:', error);
  });

  // Example promises with different timeouts
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 1500));

// Array of promises
const promisess= [promise11, promise22, promise32];
Promise.race(promisess)
  .then((firstResolvedValue) => {
    console.log('First promise to resolve:', firstResolvedValue);
  })
  .catch((error) => {
    console.error('One of the promises rejected:', error);
  });
