// let cart = ["item1", "item2"];


//CALLBACK
addToCart(item3, function () {
    //...
    doPayment(function () {
        //...
        showSummery(function () {
            //...
            showSimilarProduct()
            //... 

            //1: this syntax is called "CALLBACK HELL", this is first issue with callback that 
            //if we have several callbacks to do one after another we get an unmaintainable syntax which grow horizontaly instead of verticaly.

            //2: Also if we write callback like this, we get dependent on previous functions/api to run our next api/function,
            // in this case we kind of loose the control of our code, This situation is called "INVERSION OF CONTROL".
        })
    })
})



//PROMISE
// const promise = addToCart(item3);
// promise.then(document).catch("Promise rejected, Something went wrong!")
//or
addToCart(item3)
    .then(function () {
        return doPayment();
    })
    .then(function () {
        return showSummery();
    })
    .then(function () {
        return showSimilarProduct();   // this is called PROMISE CHAINING
    })


//Creating a promise
function addToCart(item3) {
    const myPromise = new Promise((resolve, reject) => {

        // do something
        const data = { "some data": "some data" }
        // got data when success
        const err = new Error("Something went wrong!")
        // or got error when failure
        if (data) {
            resolve(data);
        } else {
            reject(err)
        }

    })
    return myPromise;
}


















//PROMISE Examples:
let url = "https://api.github.com/users/sac6inarya";
const res = fetch(url);
res.then(function (data) {
    console.log(data);
})
    .catch((err) => {
        console.error(err);
    })
