function run(){
	let srcCode = document.getElementById("code").value
	let out = document.getElementById("output")
	let input = document.getElementById("input").value
	out.innerHTML = "";
	//console.log(srcCode)
	var i = -1;
	var curr = 0;
	var isWord = false
	var mem = []
	while(i<srcCode.length){
		i++
		if(srcCode[i] == " " || srcCode[i] == "\n"){
			if(!isWord) continue;
			isWord = false
			mem = mem.concat(curr);
			curr = 0;
		}else if(srcCode[i] >= '0' && srcCode[i] <= '9'){
			isWord = true
			curr += (srcCode[i] - '0');
		}else { isWord = true; }
	}
	if(isWord) mem = mem.concat(curr);
	if(mem.length > MEMORY_SIZE - 1000) { alert('F00l! teh c0d3 1s b1g3R th4n teh m3m0ry!!1!'); return; }
	
	while(mem.length < MEMORY_SIZE){ mem = mem.concat(0) }
	
	//console.log(mem)
	
	var progEnd = false
	let val = 0;
	var pc = 0;
	var mc = MEMORY_SIZE - 1000;
	var nest = 0;
	var inIx = 0;
	
	while(!progEnd){
		switch(mem[pc]){
			case 0:
				if(pc >= MEMORY_SIZE - 1) pc = 0;
				else pc += 1;
				break;
			case 1:
				out.innerHTML += "&#"+mem[mc]+";";
				pc += 1;
				break;
			case 2:
				var inCode = input.charCodeAt(inIx)
				if(isNaN(inCode)) inCode = 0;
				mem[mc] = inCode;
				inIx += 1;
				pc += 1;
				break;
			case 3:
				if(mem[mc] == 0){
					nest = 1;
					while(nest > 0){
						pc++
						if(mem[pc] == 3) nest++
						else if(mem[pc] == 4) nest--
					}
				}
				pc += 1;
				break;
			case 4:
				if(mem[mc] != 0){
					nest = 1;
					while(nest > 0){
						pc--
						if(mem[pc] == 4) nest++
						else if(mem[pc] == 3) nest--
					}
				}
				pc += 1;
				break;
			case 5:
				val = mem[pc+1]+1
				if(mc + val > MEMORY_SIZE) mc -= (MEMORY_SIZE - val)
				else mc += val
				pc += 2;
				break;
			case 6:				
				val = mem[pc+1]+1
				if(mc - val < 0) mc += (MEMORY_SIZE - val)
				else mc -= val
				pc += 2;
				break;
			case 7:				
				val = mem[pc+1]+1
				if(mem[mc]+val > 255) mem[mc] -= (256 - val)
				else mem[mc] += val
				pc += 2;
				break;
			case 8:				
				val = mem[pc+1]+1
				if(mem[mc]-val < 0) mem[mc] += (256 - val)
				else mem[mc] -= val
				pc += 2;
				break;
			case 9:			
			case 10:
				progEnd = true;
			break;
			default:
				//console.log("j00 4r3 7h3 5uxXx0r")
				return;
			
		}
	}
	//console.log(mem)
	
}
