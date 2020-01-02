function decompile(){
    console.time()
    
    let srcCode = document.getElementById("code").value
    let out = document.getElementById("piResult")
    out.innerHTML = "";
    let theResult = document.getElementById("resultOfCode").value
    
    let bfSource = "";
    let cell = 0;
    
    for(let ix = 0; ix < theResult.length; ix++){
        let cCode = theResult.charCodeAt(ix);
        if(cCode > 255) continue;
        while(cell != cCode){
            if(Math.abs(cCode-cell) > 127){
                if(cCode > cell){
                    cell = cell-1
                    if(cell < 0) { cell += 256 }
                    bfSource += '-'
                }else{
                    cell = (cell+1)
                    if(cell > 255) { cell -= 256 }
                    bfSource += '+'
                }
            }else{
                if(cCode < cell){
                    cell = cell-1
                    if(cell < 0) { cell += 256 }
                    bfSource += '-'
                }else{
                    cell = (cell+1)
                    if(cell > 255) { cell -= 256 }
                    bfSource += '+'
                }
            }
        }
        bfSource += '.';
    }
    
    //console.log(bfSource)
    
    var resultPiCode = ""
    var piPt = 0;
    var t = { '>':0, '<':1, '+':2, '-':3, '.':4, ',':5, '[':6, ']':7 }
    
    //if(i != pi[k]) code += t[i - (i > pi[k])];

    for(c of bfSource){
        if(piPt == 1) resultPiCode += '.';
        while(Math.floor(Math.random()*3) || piPt < 5){
            resultPiCode += bigPi[piPt]
            piPt += 1
            if(piPt == 1) resultPiCode += '.';
        }
        resultPiCode += (t[c] + (t[c] >= bigPi[piPt]))
        piPt += 1
    }
    console.timeEnd()
    out.innerHTML = resultPiCode
    
}
