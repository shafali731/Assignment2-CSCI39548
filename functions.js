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
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    if(fromIndex >= this.length){
        return false; 
    }
    if(fromIndex < 0){
        fromIndex = fromIndex + this.length; 
    }
    if(fromIndex=== undefined || fromIndex < 0){
        for(let i = 0; i< this.length; i++){
            if(this[i]=== searchElement || (Number.isNaN(searchElement) && Number.isNaN(this[i]))){
                return true;
            }
        }
        return false; 
    }
    else{
        for(let i = fromIndex; i< this.length; i++){
            if(this[i]=== searchElement|| (Number.isNaN(searchElement) && Number.isNaN(this[i]))){
                return true;
            }
        }
        return false; 
    }
    
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    if(fromIndex >= this.length){
        return -1; 
    }
    if(fromIndex < 0){
        fromIndex = fromIndex + this.length; 
    }
    if(fromIndex === undefined){
        for(let i =0; i< this.length; i++){
            if(searchElement === this[i]){
                return i; 
            }
        }
        return -1; 
    }
    else{
        for(let i =fromIndex; i< this.length; i++){
            if(searchElement === this[i]){
                return i; 
            }
        }
        return -1; 
    }
};

// PUSH //
Array.prototype.myPush = function(...elements) {
    let lastInd = this.length; 
    let indElements = 0; 
    for(let i = lastInd; i < lastInd + elements.length; i++){
        if(indElements < elements.length){
            this[i] = elements[indElements]
            indElements++; 
        }
        else{
            return this.length;
        }
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    if(fromIndex >= this.length){
        return -1; 
    }
    if(fromIndex < 0){
        fromIndex = fromIndex + this.length; 
    }
    if(fromIndex === undefined){
        for(let i =this.length-1; i>=0; i--){
            if(searchElement === this[i]){
                return i; 
            }
        }
        return -1; 
    }
    else{
        for(let i =fromIndex; i>=0; i--){
            if(searchElement === this[i]){
                return i; 
            }
        }
        return -1;
    }
};


// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};


