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
Array.prototype.myFilter = function(callbackfxn) {
    let arr = []; 
    for(let i = 0; i< this.length; i++){
        if(this[i] === undefined){
            continue; 
        }
        if(callbackfxn(this[i], i, this)){
            arr.push(this[i]); 
        }
    }
    return arr; 
};

// SOME //
Array.prototype.mySome = function(callbackfxn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined){
            continue; 
        }
        if(callbackfxn(this[i], i, this)){
            return true; 
        } 
    }
    return false; 
};

// EVERY //
Array.prototype.myEvery = function() {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined){
            continue; 
        }
        if(!(callbackfxn(this[i], i, this))){
            return false; 
        } 
    }
    return true; 
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

