// FOR EACH //
Array.prototype.myEach = function(callbackfxn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined){
            continue; 
        }
        callbackfxn(this[i], i, this); 
    }
};

// MAP //
Array.prototype.myMap = function(callbackfxn) {
    let arr =[]; 
    for(let i = 0; i < this.length; i++){
        if(this[i]===undefined){
            continue; 
        }
        arr.push(callbackfxn(this[i], i, this)); 
    }
    return arr; 
};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};