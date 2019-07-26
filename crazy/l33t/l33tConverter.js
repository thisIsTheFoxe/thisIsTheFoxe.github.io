function decompile(){
    console.time()
    let srcCode = document.getElementById("code").value
    let out = document.getElementById("leetResult")
    out.innerHTML = "";
    let theResult = document.getElementById("resultOfCode").value
    
    //	console.log(srcCode)
    
    var json = {
        //äöü ->ae etc.
        "ate":["8"],
        "that": ["tht"],
        "ck":["xx"],
        "are": ["r"],
        "and":["&"],
        "ass":["@$$"],
        "shit":["$#!+"],
        "-s":["z"],
        "-ed":["t"],
        "-er":["or", "orz"],
        "-ers":["orz"],
        "f":["ph"],
        "ex":["x"],
        "one":["1"],
        "for":["4"],
        "to":["2"],
        "too":["2"],
        "oo":["3"],
        "ea":["33"],
        "you": ["u", "j00"],
        "at":["@"],
        "d":["[)"],
        "e":["€", "3"],
        "s":["$", "5",],
        "i":["!", "1"],
        "g":["6","9"],
        "h":["#", "|=|", "4"],
        "z":["2"],
        "a":["@", "/\\", "4"],
        "l":["£", "1"],
        "k": ["|<"],
        "n": ["|\\|"],
        "t":["+", "7"],
        "b":["6", "8"],
        "m":["|\\/|"],
        "w":["\\/\\/", "vv"],
        "v":["\\/"],
        "o":["0", "()"],
        "u":["ü"],
        "c":["(", "©"]
    }
    
    
    
    let theSourceCode = Array(MEMORY_SIZE);
    theSourceCode.fill(0);
    let ptr = 0;
    let mem = 0;
    for(let ix = 0; ix < theResult.length; ix ++){
        let cCode = theResult.charCodeAt(ix);
        if(cCode > 255) continue;
        if(mem != cCode){
            if(Math.abs(cCode-mem) > 127){
                theSourceCode[ptr] = cCode > mem ? 8: 7;
                theSourceCode[ptr+1] = 256 - Math.abs(cCode - mem) - 1;
            }
            else{
                theSourceCode[ptr] = cCode > mem ? 7: 8;
                theSourceCode[ptr+1] = Math.abs(cCode - mem) - 1;
            }
            mem = cCode ;
            ptr += 2;
        }
        theSourceCode[ptr] = 1;
        ptr += 1;
    }
    theSourceCode[ptr+1] = -1;
    //console.log(theSourceCode)
    //console.log(interpret(theSourceCode))
    //var src = srcCode;
    
    
    let jsonWords = {
        "n":  ["ich", "sie", "er", "du", "es", "wir", "ihr", "gott", "alles", "frau", "morgen", "vater", "person", "tag", "weg", "ordnung", "mädchen", "hertz", "stunde", "seite", "schatz", "film", "zeit", "mann", "geld", "liebe", "typ", "tochter", "sohn", "bleibt"],
        "art":["der", "den", "die", "das", "einen", "eine", "einer", "dem", "meine", "mein", "kein", "jedes", "jeder", "dein", "deine", "aller", "alle", "irgendein", "irgendeine"],
        "kon":["und", "weil", "wie", "dass", "wenn", "oder", "denn", "obwohl", "bevor"],
        "prä":["als", "mit", "um", "auf", "aus", "für", "an", "von", "in", "über", "unter", "zwischen", "neben", "ohne", "gegen" , "zu"],
        "v":  ["wird", "ist", "hat", "kann", "geht", "läuft", "rennt", "liegt", "sind", "war", "hasst", "macht", "will", "sieht", "zeigt", "sagt", "wartet", "tut", "trinkt", "isst", "gefällt", "läasst", "weiß", "muss", "kommt", "lebt"],
        "adj":["gut", "schlecht", "schnell", "langsam", "glücklich", "froh", "wütend", "traurig", "hilflos", "sicher", "schwer", "einfach", "kurz", "groß", "klein"]
    }
    
    
    if (!String.prototype.sum){
        String.prototype.sum = function(){
            if(this.length < 1) return -1;
            var s = 0;
            for(var i = 0; i<this.length;i++){
                if(this[i] >= '0' && this[i] <= '9') s += (this[i] - '0');
            }
            return s;
        };
    };
    
    function getSummingItems(a,t){
        return a.reduce((h,n) => Object.keys(h)
                        .reduceRight((m,k) => +k+n <= t ? (m[+k+n] = m[+k+n] ? m[+k+n].concat(m[k].map(sa => sa.concat(n)))
                                                           : m[k].map(sa => sa.concat(n)),m)
                                     :  m, h), {0:[[]]})[t];
    }
    
    String.prototype.replaceAt=function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }
    
    Array.prototype.rotate = function(n) {
        return this.slice(n, this.length).concat(this.slice(0, n));
    }
    
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    
    
    for(var key in jsonWords){
        jsonWords[key] = shuffle(jsonWords[key])
    }
    
    //: add normal words to json
    for(var key in json){
        if(key[0] == "-"){
            json[key].push(key.replace("-",""));
        }
        else json[key].push(key);
        json[key] = json[key].rotate(-1)
    }
    
    var prevWord = "art";
    function getNewWordWithSum(sum){
        if(sum < 0) sum = 10;
        let newWord = ""
        let possibleKeys = []
        switch(prevWord){
            case "n": possibleKeys.push("v", "prä", "kon")
                break;
            case "art": possibleKeys.push("n", "adj")
                break;
            case "kon": possibleKeys.push("art", "n")
                break;
            case "prä": possibleKeys.push("art", "n")
                break;
            case "v": possibleKeys.push("kon", "prä", "art", "n")
                break;
            case "adj": possibleKeys.push("n", "adj")
                break;
            default: return;
        }
        let cloneWord = ""
        if(sum == 0) return jsonWords[possibleKeys[0]][Math.floor(Math.random()*jsonWords[possibleKeys[0]].length)] + " ";
        let wordIx = -1;
        let wordTypeIx = 0;
        while(cloneWord.sum() != sum){
            wordIx++;
            if(wordIx >= jsonWords[possibleKeys[wordTypeIx]].length)  {
                //console.log(possibleKeys[wordTypeIx], sum)
                if(wordTypeIx < possibleKeys.length - 1){
                    wordIx = 0;
                    wordTypeIx++;
                }else return "xxERR" + sum + "Rxx";
            }
            newWord = jsonWords[possibleKeys[wordTypeIx]][wordIx];
            cloneWord = newWord;
            let arr = []
            
            for(var key in json){
                let regKey = key;
                if(key[0] == "-") regKey = regKey.replace("-","") + "\\b";
                
                var regex = new RegExp(regKey);
                if(newWord.search(regex) < 0) continue;
                regex = new RegExp(regKey, "g");
                
                //let allReplacements = json[key].filter((a) => a.match(/[1-9]|\w{2,}/))
                //if(allReplacements.length <= 0) continue;
                let highest = json[key][json[key].length-1];
                if(!isNaN(parseInt(highest))){
                    newWord.match(regex).forEach(() => arr.push(parseInt(highest)))
                }else newWord = newWord.replace(regex, highest);	//HEAVY
            }
            /*
             let arr = []
             for(var i=0;i<newWord.length;i++){
             let n = parseInt(newWord[i]);
             if(!isNaN(n)) arr.push(n)
             }
             */
            let res = getSummingItems(arr, sum);
            if(!res || res.length < 1) continue;
            res = res[0]
            
            
            prevWord = possibleKeys[wordTypeIx]
            jsonWords[prevWord] = jsonWords[prevWord].rotate(jsonWords[prevWord].indexOf(cloneWord) + 1)
            
            for(var key in json){
                let regKey = key;
                if(key[0] == "-"){
                    regKey = regKey.replace("-","") + "\\b";
                }
                
                
                var regex = new RegExp(regKey);
                if(cloneWord.search(regex) < 0) continue;
                regex = new RegExp(regKey, "g");
                
                //*		FASTER, un-l337
                
                
                cloneWord = cloneWord.replace(regex, (mch) => { 	//HEAVY
                                              let replIx = res.findIndex((r)=> json[key].includes(r.toString()) )
                                              if(replIx < 0){
                                              let allReplacements = json[key].filter((a) => a.match(/[^1-9]/))
                                              return allReplacements.length > 0 ? allReplacements[Math.floor(Math.random()*allReplacements.length)]: mch;
                                              }
                                              return res.splice(replIx, 1)
                                              } )
                
                //*/ cloneWord = sum == 10 ? "55": sum.toString()
                
            }
        }
        return cloneWord + " ";
    }
    
    
    
    //theSourceCode = [7, 9, 7, 9, 7, 9, 1, 10]
    
    var prev = 0;
    
    var cmdStack = 0;
    var pgrEnd = false;
    var resultSource = "";
    var cmd = 0;
    var ix = 0;
    while(!pgrEnd){
        prev = cmd;
        cmd = theSourceCode[ix]
        ix++;
        if(cmd <= 10 && cmd >= 0){
            resultSource += getNewWordWithSum(cmd) + " ";
        }else if(cmd < 0){
            pgrEnd = true;
            resultSource += getNewWordWithSum(10) + " ";
        }
        else{
            while(cmd > 10){
                if(cmd > 255){
                    //resultSource += "TOKEN ERROR!!"
                    break;
                }
                if(prev > 8 || prev < 5) { alert("ERR: prev="+prev); break; }
                
                resultSource += getNewWordWithSum(9) + getNewWordWithSum(prev);
                
                cmd -= 10;
                
            }
            
            resultSource += getNewWordWithSum(cmd);
        }
    }
    
    console.timeEnd()
    
    out.innerText = resultSource;
    
    /*
     
     
     default, normal: 5298.19384765625ms
     
     
     -->>> default: 2952.895751953125ms 	(with split 2 seperate ((non-)global) regex)
     --->> default: 2733.5830078125ms	(with array included)
     -->>> default: 1937.675048828125ms 	(fixed words)
     ----> default: 1113.317138671875ms	(w/o "mi" flags)
     >>>>> default: 994.26708984375ms <<<<<<<<<<<<<<<	(FIXED strimg regex replacement)
     default: 914.26806640625ms
     
     1459.5859375ms		(without 1st heavy)
     2820.18212890625ms	(w/o 2nd heavy)
     
     default: 7994.23486328125ms
     
     for(var key in json){
     regKey = key;
     if(key[0] == "-"){
     regKey = regKey.replace("-","") + "\\b";
     json[key].push(key.replace("-",""));
     }
     else json[key].push(key);
     var regex = new RegExp(regKey, "gim");
     src = src.replace(regex, function () { return json[key][Math.floor(Math.random()*json[key].length)] } )
     }
     
     src = src.replace(/(?<=\w)[aeiou](?=\w)/gim, function (v) { return Math.floor(Math.random()*10) > 3 ? "": v } )
     
     src = src.split('').map(function(v) {
     var chance = Math.round(Math.random());
     return v = chance ? v.toUpperCase() : v.toLowerCase();
     }).join('');
     
     out.innerHTML += "<br/><hr/><br/>"+src;
     */
    
}
