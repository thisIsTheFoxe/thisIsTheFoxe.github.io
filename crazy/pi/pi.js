function run(){
    var string = document.getElementById("code").value
    var code = ""
    var t = { 0:'>', 1:'<', 2:'+', 3:'-', 4:'.', 5:',', 6:'[', 7:']' }
    var k = 0
    var r = true
    
    for(ix = 0; ix<string.length; ix++){
        if(isNaN(string[ix])) continue;
        var i = Math.floor(string[ix])
        if(i != bigPi[k]) code += t[i - (i > bigPi[k])];
        k += 1
    }
    
    var bfResult = bf(code, document.getElementById("input").value)
    
    document.getElementById("output").innerHTML = bfResult
}
