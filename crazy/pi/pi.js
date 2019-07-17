 function pi2bf(str){
  let string = str
  let out = ""
  let t = { 0:'>', 1:'<', 2:'+', 3:'-', 4:'.', 5:',', 6:'[', 7:']' }
  let k = 2
  let a = 4
  let b = 1
  let a1 = 12
  let b1 = 4
  let r = true

  while(r){
    let p = k*k
    let q = 2*k+1
    let k = k+1
    a = a1
    b = b1
    a1 = p*a+q*a1
    b1 = p*b+q*b1
    
    let d = Math.round(a/b)
    let d1 = Math.round(a1/b1)
    
    while(d==d1){
      let c = ""
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
