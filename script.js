var myV = 'global'
var myOV = 'global'

function myF(){
    var myV = 'local'
    return myV
}

function myOF(){
    myOV = 'local'
    return myOV
}
console.log(myOV)
console.log(myOF())
console.log(myOV)