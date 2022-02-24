function mypalendrom(str)
{

    console.log(str)
     var str1=str.toString()
    var newString = ""
    for (var i = str1.length - 1; i >= 0; i--) 
    {
        newString += str1[i];
    }
    console.log(`Reversed string= ${newString}`)
    if(str1==newString)
    {
     return true
    }
    else
    {
      return false
    }

}

let str1="madam"
var result=mypalendrom(str1)
console.log(result)
