// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(cat){
    cats.push(cat);
}
function destructivelyPrependCat(cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(cat){
    cats.pop(cat);
}
function destructivelyRemoveFirstCat(cat){
    cats.shift(cat)
}
function appendCat(cat){
    let new_cats = cats.slice(cat)
    new_cats.push(cat)
    return new_cats
}
function prependCat(cat){
    let new_cats = cats.slice(cat)
    new_cats.unshift(cat)
        return new_cats
}
function removeLastCat(){
    //cata -- [3]
    //newcats
    let new_cats = cats.slice()
    return new_cats.splice(0, 2);
}
function removeFirstCat(){
    
    let new_cats = cats.slice()
    return new_cats.splice(1, 3)
}

