 function pi2bf(str){
  var string = str
  var out = ""
  var t = { 0:'>', 1:'<', 2:'+', 3:'-', 4:'.', 5:',', 6:'[', 7:']' }
  var k = 2
  var a = 4
  var b = 1
  var a1 = 12
  var b1 = 4
  var r = true

  while(r){
    var p = k*k
    var q = 2*k+1
    k = k+1
    a = a1
    b = b1
    a1 = p*a+q*a1
    b1 = p*b+q*b1
    
    var d = Math.round(a/b)
    var d1 = Math.round(a1/b1)
    
    while(d==d1){
      var c = ""
      if(string.length){
        c = string[0]
        string = string.slice(1)
      }
      if(c.length){
        r = false
        break
      }
      if(isNaN(c)) continue;
      c = Math.floor(c)
      if(c != d) out += t[c - (c > d)];
      a = 10*(a%b)
      a1 = 10*(a1%b1)
      d = Math.round(a/b)
      d1 = Math.round(a1/b1)
    }
  
  }
  return out;
}
