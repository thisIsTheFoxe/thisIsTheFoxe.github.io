function run(){
	console.time()
	let srcCode = document.getElementById("code").value
	let out = document.getElementById("output")	
	out.innerHTML = "";
	let theResult = document.getElementById("resultOfCode")
	
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
	
	let theSourceCode = Array(1024);
	theSourceCode.fill(0);
	let ptr = 0;
	let mem = 0;
	for(let ix = 0; ix < theResult.value.length; ix ++){
		let cCode = theResult.value.charCodeAt(ix);
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
	console.log(theSourceCode)
	//console.log(interpret(theSourceCode))
var src = srcCode;









let jsonWords = {
	"n":  ["gott", "alles", "frau", "morgen", "vater", "person", "tag", "weg", "ordnung", "mädchen", "hertz", "stunde", "seite", "schatz", "film", "zeit", "mann", "geld", "liebe"],
	"art":["der", "den", "die", "das", "einen", "eine", "einer", "dem"],
	"kon":["und", "weil", "wie","zu", "dass", "wenn", "oder"],
	"pro":["meine", "mein", "kein", "kein", "jedes", "jeder", "ich", "sie", "er", "du", "es", "wir", "ihr", "dich", "dein", "deine", "was", "dir", "sich", "uns", "ihn"],
	"prä":["als","mit", "um", "auf", "aus", "für", "an", "von", "im"],
	"v":  ["wird", "ist", "hat", "kann", "geht", "läuft", "rennt", "liegt", "sind", "war", "hasst", "macht", "will", "sieht", "zeigt", "sagt", "wartet", "tut", "trinkt", "isst", "gefällt", "läasst", "weiß", "muss", "kommt", "lebt"],
	"adj":["gut", "schlecht", "schnell", "langsam", "glücklich", "froh", "wütend", "traurig", "hilflos", "sicher"]
}

let words = [
  [
    {
      "content": "nach",

      "startPos": 2049,
      "endPos": 2053
    }
  ],
  [
    {
      "content": "man",

      "startPos": 2157,
      "endPos": 2160
    }
  ],
  [
    {
      "content": "wo",

      "startPos": 2248,
      "endPos": 2250
    }
  ],
  [
    {
      "content": "mehr",

      "startPos": 2381,
      "endPos": 2385
    }
  ],
  [
    {
      "content": "warum",

      "startPos": 2399,
      "endPos": 2404
    }
  ],
  [
    {
      "content": "ihnen",

      "startPos": 2417,
      "endPos": 2422
    }
  ],
  [
    {
      "content": "bitte",

      "startPos": 2464,
      "endPos": 2469
    }
  ],
  [
    {
      "content": "etwas",

      "startPos": 2486,
      "endPos": 2491
    }
  ],
  [
    {
      "content": "bei",

      "startPos": 2592,
      "endPos": 2595
    }
  ],
  [
    {
      "content": "los",

      "startPos": 2680,
      "endPos": 2683
    }
  ],
  [
    {
      "content": "immer",

      "startPos": 2705,
      "endPos": 2710
    }
  ],
  [
    {
      "content": "vor",

      "startPos": 2737,
      "endPos": 2740
    }
  ],
  [
    {
      "content": "zum",

      "startPos": 2848,
      "endPos": 2851
    }
  ],
  [
    {
      "content": "wieder",

      "startPos": 2867,
      "endPos": 2873
    }
  ],
  [
    {
      "content": "wer",

      "startPos": 3129,
      "endPos": 3132
    }
  ],
  [
    {
      "content": "alle",

      "startPos": 3155,
      "endPos": 3159
    }
  ],
  [
    {
      "content": "denn",

      "startPos": 3191,
      "endPos": 3195
    }
  ],
  [
    {
      "content": "ihm",

      "startPos": 3265,
      "endPos": 3268
    }
  ],
  [
    {
      "content": "diese",

      "startPos": 3320,
      "endPos": 3325
    }
  ],
  [
    {
      "content": "komm",

      "startPos": 3349,
      "endPos": 3353
    }
  ],
  [
    {
      "content": "danke",

      "startPos": 3421,
      "endPos": 3426
    }
  ],
  [
    {
      "content": "euch",

      "startPos": 3458,
      "endPos": 3462
    }
  ],
  [
    {
      "content": "einem",

      "startPos": 3500,
      "endPos": 3505
    }
  ],
  [
    {
      "content": "einer",

      "startPos": 3540,
      "endPos": 3545
    }
  ],
  [
    {
      "content": "gibt",

      "startPos": 3559,
      "endPos": 3563
    }
  ],
  [
    {
      "content": "nie",

      "startPos": 3601,
      "endPos": 3604
    }
  ],
  [
    {
      "content": "über",

      "startPos": 3620,
      "endPos": 3624
    }
  ],
  [
    {
      "content": "des",

      "startPos": 3697,
      "endPos": 3700
    }
  ],
  [
    {
      "content": "soll",

      "startPos": 3713,
      "endPos": 3717
    }
  ],
  [
    {
      "content": "kein",

      "startPos": 3733,
      "endPos": 3737
    }
  ],
  [
    {
      "content": "vielleicht",

      "startPos": 3759,
      "endPos": 3769
    }
  ],
  [
    {
      "content": "am",

      "startPos": 3902,
      "endPos": 3904
    }
  ],
  [
    {
      "content": "viel",

      "startPos": 4178,
      "endPos": 4182
    }
  ],
  [
    {
      "content": "wirklich",

      "startPos": 4285,
      "endPos": 4293
    }
  ],
  [
    {
      "content": "hatte",

      "startPos": 4412,
      "endPos": 4417
    }
  ],
  [
    {
      "content": "heute",

      "startPos": 4432,
      "endPos": 4437
    }
  ],
  [
    {
      "content": "würde",

      "startPos": 4519,
      "endPos": 4524
    }
  ],
  [
    {
      "content": "ihre",

      "startPos": 4563,
      "endPos": 4567
    }
  ],
  [
    {
      "content": "ganz",

      "startPos": 4590,
      "endPos": 4594
    }
  ],
  [
    {
      "content": "bis",

      "startPos": 4736,
      "endPos": 4739
    }
  ],
  [
    {
      "content": "zurück",

      "startPos": 4969,
      "endPos": 4975
    }
  ],
  [
    {
      "content": "nun",

      "startPos": 5000,
      "endPos": 5003
    }
  ],
  [
    {
      "content": "weil",

      "startPos": 5033,
      "endPos": 5037
    }
  ],
  [
    {
      "content": "damit",

      "startPos": 5064,
      "endPos": 5069
    }
  ],
  [
    {
      "content": "dieser",

      "startPos": 5128,
      "endPos": 5134
    }
  ],
  [
    {
      "content": "wurde",

      "startPos": 5180,
      "endPos": 5185
    }
  ],
  [
    {
      "content": "wäre",

      "startPos": 5229,
      "endPos": 5233
    }
  ],
  [
    {
      "content": "seine",

      "startPos": 5246,
      "endPos": 5251
    }
  ],
  [
    {
      "content": "na",

      "startPos": 5295,
      "endPos": 5297
    }
  ],
  [
    {
      "content": "zwei",

      "startPos": 5313,
      "endPos": 5317
    }
  ],
  [
    {
      "content": "hallo",

      "startPos": 5331,
      "endPos": 5336
    }
  ],
  [
    {
      "content": "meinen",

      "startPos": 5352,
      "endPos": 5358
    }
  ],
  [
    {
      "content": "ab",

      "startPos": 5555,
      "endPos": 5557
    }
  ],
  [
    {
      "content": "leid",

      "startPos": 5596,
      "endPos": 5600
    }
  ],
  [
    {
      "content": "lassen",

      "startPos": 5651,
      "endPos": 5657
    }
  ],
  [
    {
      "content": "waren",

      "startPos": 5689,
      "endPos": 5694
    }
  ],
  [
    {
      "content": "zur",

      "startPos": 5734,
      "endPos": 5737
    }
  ],
  [
    {
      "content": "lass",

      "startPos": 5750,
      "endPos": 5754
    }
  ],
  [
    {
      "content": "genau",

      "startPos": 5904,
      "endPos": 5909
    }
  ],
  [
    {
      "content": "sagte",

      "startPos": 6026,
      "endPos": 6031
    }
  ],
  [
    {
      "content": "hätte",

      "startPos": 6062,
      "endPos": 6067
    }
  ],
  [
    {
      "content": "mach",

      "startPos": 6082,
      "endPos": 6086
    }
  ],
  [
    {
      "content": "raus",

      "startPos": 6117,
      "endPos": 6121
    }
  ],
  [
    {
      "content": "durch",

      "startPos": 6135,
      "endPos": 6140
    }
  ],
  [
    {
      "content": "könnte",

      "startPos": 6196,
      "endPos": 6202
    }
  ],
  [
    {
      "content": "schön",

      "startPos": 6227,
      "endPos": 6232
    }
  ],
  [
    {
      "content": "wohl",

      "startPos": 6331,
      "endPos": 6335
    }
  ],
  [
    {
      "content": "gesehen",

      "startPos": 6407,
      "endPos": 6414
    }
  ],
  [
    {
      "content": "keinen",

      "startPos": 6464,
      "endPos": 6470
    }
  ],
  [
    {
      "content": "klar",

      "startPos": 6483,
      "endPos": 6487
    }
  ],
  [
    {
      "content": "glaube",

      "startPos": 6560,
      "endPos": 6566
    }
  ],
  [
    {
      "content": "her",

      "startPos": 6604,
      "endPos": 6607
    }
  ],
  [
    {
      "content": "okay",

      "startPos": 6622,
      "endPos": 6626
    }
  ],
  [
    {
      "content": "mutter",

      "startPos": 6649,
      "endPos": 6655
    }
  ],
  [
    {
      "content": "sag",

      "startPos": 6680,
      "endPos": 6683
    }
  ],
  [
    {
      "content": "dieses",

      "startPos": 6714,
      "endPos": 6720
    }
  ],
  [
    {
      "content": "nacht",

      "startPos": 6735,
      "endPos": 6740
    }
  ],
  [
    {
      "content": "besser",

      "startPos": 6756,
      "endPos": 6762
    }
  ],
  [
    {
      "content": "ohne",

      "startPos": 6805,
      "endPos": 6809
    }
  ],
  [
    {
      "content": "unsere",

      "startPos": 6840,
      "endPos": 6846
    }
  ],
  [
    {
      "content": "jemand",

      "startPos": 6860,
      "endPos": 6866
    }
  ],
  [
    {
      "content": "sei",

      "startPos": 6917,
      "endPos": 6920
    }
  ],
  [
    {
      "content": "reden",

      "startPos": 6933,
      "endPos": 6938
    }
  ],
  [
    {
      "content": "gerade",

      "startPos": 6962,
      "endPos": 6968
    }
  ],
  [
    {
      "content": "ob",

      "startPos": 7019,
      "endPos": 7021
    }
  ],
  [
    {
      "content": "gehört",

      "startPos": 7045,
      "endPos": 7051
    }
  ],
  [
    {
      "content": "möchte",

      "startPos": 7068,
      "endPos": 7074
    }
  ],
  [
    {
      "content": "dort",

      "startPos": 7104,
      "endPos": 7108
    }
  ],
  [
    {
      "content": "sagt",

      "startPos": 7135,
      "endPos": 7139
    }
  ],
  [
    {
      "content": "anderen",

      "startPos": 7170,
      "endPos": 7177
    }
  ],
  [
    {
      "content": "gemacht",

      "startPos": 7193,
      "endPos": 7200
    }
  ],
  [
    {
      "content": "hör",

      "startPos": 7215,
      "endPos": 7218
    }
  ],
  [
    {
      "content": "sollte",

      "startPos": 7235,
      "endPos": 7241
    }
  ],
  [
    {
      "content": "selbst",

      "startPos": 7258,
      "endPos": 7264
    }
  ],
  [
    {
      "content": "diesen",

      "startPos": 7368,
      "endPos": 7374
    }
  ],
  [
    {
      "content": "gute",

      "startPos": 7390,
      "endPos": 7394
    }
  ],
  [
    {
      "content": "dachte",

      "startPos": 7424,
      "endPos": 7430
    }
  ],
  [
    {
      "content": "paar",

      "startPos": 7477,
      "endPos": 7481
    }
  ],
  [
    {
      "content": "weiter",

      "startPos": 7496,
      "endPos": 7502
    }
  ],
  [
    {
      "content": "vom",

      "startPos": 7563,
      "endPos": 7566
    }
  ],
  [
    {
      "content": "ins",

      "startPos": 7581,
      "endPos": 7584
    }
  ],
  [
    {
      "content": "herr",

      "startPos": 7601,
      "endPos": 7605
    }
  ],
  [
    {
      "content": "wirst",

      "startPos": 7667,
      "endPos": 7672
    }
  ],
  [
    {
      "content": "geben",

      "startPos": 7697,
      "endPos": 7702
    }
  ],
  [
    {
      "content": "passiert",

      "startPos": 7800,
      "endPos": 7808
    }
  ],
  [
    {
      "content": "meiner",

      "startPos": 7833,
      "endPos": 7839
    }
  ],
  [
    {
      "content": "lange",

      "startPos": 7854,
      "endPos": 7859
    }
  ],
  [
    {
      "content": "gar",

      "startPos": 7889,
      "endPos": 7892
    }
  ],
  [
    {
      "content": "meinem",

      "startPos": 7970,
      "endPos": 7976
    }
  ],
  [
    {
      "content": "hören",

      "startPos": 7989,
      "endPos": 7994
    }
  ],
  [
    {
      "content": "sieht",

      "startPos": 8032,
      "endPos": 8037
    }
  ],
  [
    {
      "content": "daß",

      "startPos": 8087,
      "endPos": 8090
    }
  ],
  [
    {
      "content": "guten",

      "startPos": 8105,
      "endPos": 8110
    }
  ],
  [
    {
      "content": "hin",

      "startPos": 8141,
      "endPos": 8144
    }
  ],
  [
    {
      "content": "gleich",

      "startPos": 8159,
      "endPos": 8165
    }
  ],
  [
    {
      "content": "ach",

      "startPos": 8282,
      "endPos": 8285
    }
  ],
  [
    {
      "content": "diesem",

      "startPos": 8315,
      "endPos": 8321
    }
  ],
  [
    {
      "content": "freund",

      "startPos": 8336,
      "endPos": 8342
    }
  ],
  [
    {
      "content": "seit",

      "startPos": 8372,
      "endPos": 8376
    }
  ],
  [
    {
      "content": "welt",

      "startPos": 8407,
      "endPos": 8411
    }
  ],
  [
    {
      "content": "musst",

      "startPos": 8427,
      "endPos": 8432
    }
  ],
  [
    {
      "content": "hause",

      "startPos": 8458,
      "endPos": 8463
    }
  ],
  [
    {
      "content": "natürlich",

      "startPos": 8478,
      "endPos": 8487
    }
  ],
  [
    {
      "content": "abend",

      "startPos": 8544,
      "endPos": 8549
    }
  ],
  [
    {
      "content": "angst",

      "startPos": 8583,
      "endPos": 8588
    }
  ],
  [
    {
      "content": "drei",

      "startPos": 8632,
      "endPos": 8636
    }
  ],
  [
    {
      "content": "recht",

      "startPos": 8652,
      "endPos": 8657
    }
  ],
  [
    {
      "content": "richtig",

      "startPos": 8712,
      "endPos": 8719
    }
  ],
  [
    {
      "content": "viele",

      "startPos": 8804,
      "endPos": 8809
    }
  ],
  [
    {
      "content": "deinen",

      "startPos": 8856,
      "endPos": 8862
    }
  ],
  [
    {
      "content": "finden",

      "startPos": 8877,
      "endPos": 8883
    }
  ],
  [
    {
      "content": "wieso",

      "startPos": 8898,
      "endPos": 8903
    }
  ],
  [
    {
      "content": "bleiben",

      "startPos": 8917,
      "endPos": 8924
    }
  ],
  [
    {
      "content": "tot",

      "startPos": 8968,
      "endPos": 8971
    }
  ],
  [
    {
      "content": "unter",

      "startPos": 8986,
      "endPos": 8991
    }
  ],
  [
    {
      "content": "junge",

      "startPos": 9061,
      "endPos": 9066
    }
  ],
  [
    {
      "content": "haus",

      "startPos": 9101,
      "endPos": 9105
    }
  ],
  [
    {
      "content": "rein",

      "startPos": 9141,
      "endPos": 9145
    }
  ],
  [
    {
      "content": "essen",

      "startPos": 9196,
      "endPos": 9201
    }
  ],
  [
    {
      "content": "davon",

      "startPos": 9223,
      "endPos": 9228
    }
  ],
  [
    {
      "content": "nehmen",

      "startPos": 9274,
      "endPos": 9280
    }
  ],
  [
    {
      "content": "sollen",

      "startPos": 9322,
      "endPos": 9328
    }
  ],
  [
    {
      "content": "helfen",

      "startPos": 9343,
      "endPos": 9349
    }
  ],
  [
    {
      "content": "schnell",

      "startPos": 9381,
      "endPos": 9388
    }
  ],
  [
    {
      "content": "eines",

      "startPos": 9491,
      "endPos": 9496
    }
  ],
  [
    {
      "content": "andere",

      "startPos": 9510,
      "endPos": 9516
    }
  ],
  [
    {
      "content": "unser",

      "startPos": 9545,
      "endPos": 9550
    }
  ],
  [
    {
      "content": "wegen",

      "startPos": 9584,
      "endPos": 9589
    }
  ],
  [
    {
      "content": "menschen",

      "startPos": 9649,
      "endPos": 9657
    }
  ],
  [
    {
      "content": "stimmt",

      "startPos": 9701,
      "endPos": 9707
    }
  ],
  [
    {
      "content": "dafür",

      "startPos": 9724,
      "endPos": 9729
    }
  ],
  [
    {
      "content": "darf",

      "startPos": 9760,
      "endPos": 9764
    }
  ],
  [
    {
      "content": "kinder",

      "startPos": 9782,
      "endPos": 9788
    }
  ],
  [
    {
      "content": "genug",

      "startPos": 9807,
      "endPos": 9812
    }
  ],
  [
    {
      "content": "sonst",

      "startPos": 9859,
      "endPos": 9864
    }
  ],
  [
    {
      "content": "ganze",

      "startPos": 9923,
      "endPos": 9928
    }
  ],
  [
    {
      "content": "scheiße",

      "startPos": 9951,
      "endPos": 9958
    }
  ],
  [
    {
      "content": "he",

      "startPos": 9981,
      "endPos": 9983
    }
  ],
  [
    {
      "content": "halt",

      "startPos": 9997,
      "endPos": 10001
    }
  ],
  [
    {
      "content": "sollten",

      "startPos": 10026,
      "endPos": 10033
    }
  ],
  [
    {
      "content": "zusammen",

      "startPos": 10050,
      "endPos": 10058
    }
  ],
  [
    {
      "content": "gegen",

      "startPos": 10104,
      "endPos": 10109
    }
  ],
  [
    {
      "content": "jahre",

      "startPos": 10174,
      "endPos": 10179
    }
  ],
  [
    {
      "content": "erst",

      "startPos": 10194,
      "endPos": 10198
    }
  ],
  [
    {
      "content": "denke",

      "startPos": 10235,
      "endPos": 10240
    }
  ],
  [
    {
      "content": "steht",

      "startPos": 10287,
      "endPos": 10292
    }
  ],
  [
    {
      "content": "habt",

      "startPos": 10308,
      "endPos": 10312
    }
  ],
  [
    {
      "content": "verdammt",

      "startPos": 10327,
      "endPos": 10335
    }
  ],
  [
    {
      "content": "ihren",

      "startPos": 10389,
      "endPos": 10394
    }
  ],
  [
    {
      "content": "glauben",

      "startPos": 10410,
      "endPos": 10417
    }
  ],
  [
    {
      "content": "bringen",

      "startPos": 10453,
      "endPos": 10460
    }
  ],
  [
    {
      "content": "seid",

      "startPos": 10500,
      "endPos": 10504
    }
  ],
  [
    {
      "content": "niemand",

      "startPos": 10517,
      "endPos": 10524
    }
  ],
  [
    {
      "content": "warten",

      "startPos": 10561,
      "endPos": 10567
    }
  ],
  [
    {
      "content": "brauchen",

      "startPos": 10614,
      "endPos": 10622
    }
  ],
  [
    {
      "content": "lhre",

      "startPos": 10671,
      "endPos": 10675
    }
  ],
  [
    {
      "content": "fragen",

      "startPos": 10776,
      "endPos": 10782
    }
  ],
  [
    {
      "content": "arbeit",

      "startPos": 10808,
      "endPos": 10814
    }
  ],
  [
    {
      "content": "wann",

      "startPos": 10868,
      "endPos": 10872
    }
  ],
  [
    {
      "content": "heißt",

      "startPos": 10887,
      "endPos": 10892
    }
  ],
  [
    {
      "content": "sprechen",

      "startPos": 10920,
      "endPos": 10928
    }
  ],
  [
    {
      "content": "siehst",

      "startPos": 10959,
      "endPos": 10965
    }
  ],
  [
    {
      "content": "jeder",

      "startPos": 11015,
      "endPos": 11020
    }
  ],
  [
    {
      "content": "kam",

      "startPos": 11086,
      "endPos": 11089
    }
  ],
  [
    {
      "content": "sofort",

      "startPos": 11157,
      "endPos": 11163
    }
  ],
  [
    {
      "content": "getan",

      "startPos": 11276,
      "endPos": 11281
    }
  ],
  [
    {
      "content": "fertig",

      "startPos": 11301,
      "endPos": 11307
    }
  ],
  [
    {
      "content": "kennen",

      "startPos": 11335,
      "endPos": 11341
    }
  ],
  [
    {
      "content": "einmal",

      "startPos": 11367,
      "endPos": 11373
    }
  ],
  [
    {
      "content": "sohn",

      "startPos": 11388,
      "endPos": 11392
    }
  ],
  [
    {
      "content": "halten",

      "startPos": 11406,
      "endPos": 11412
    }
  ],
  [
    {
      "content": "dabei",

      "startPos": 11472,
      "endPos": 11477
    }
  ],
  [
    {
      "content": "hatten",

      "startPos": 11493,
      "endPos": 11499
    }
  ],
  [
    {
      "content": "männer",

      "startPos": 11514,
      "endPos": 11520
    }
  ],
  [
    {
      "content": "kind",

      "startPos": 11534,
      "endPos": 11538
    }
  ],
  [
    {
      "content": "jahren",

      "startPos": 11579,
      "endPos": 11585
    }
  ],
  [
    {
      "content": "beim",

      "startPos": 11600,
      "endPos": 11604
    }
  ],
  [
    {
      "content": "seinen",

      "startPos": 11621,
      "endPos": 11627
    }
  ],
  [
    {
      "content": "mag",

      "startPos": 11641,
      "endPos": 11644
    }
  ],
  [
    {
      "content": "komme",

      "startPos": 11659,
      "endPos": 11664
    }
  ],
  [
    {
      "content": "allein",

      "startPos": 11732,
      "endPos": 11738
    }
  ],
  [
    {
      "content": "bevor",

      "startPos": 11785,
      "endPos": 11790
    }
  ],
  [
    {
      "content": "bruder",

      "startPos": 11807,
      "endPos": 11813
    }
  ],
  [
    {
      "content": "musik",

      "startPos": 11831,
      "endPos": 11836
    }
  ],
  [
    {
      "content": "wahr",

      "startPos": 11852,
      "endPos": 11856
    }
  ],
  [
    {
      "content": "konnte",

      "startPos": 11879,
      "endPos": 11885
    }
  ],
  [
    {
      "content": "lieber",

      "startPos": 11910,
      "endPos": 11916
    }
  ],
  [
    {
      "content": "uhr",

      "startPos": 11943,
      "endPos": 11946
    }
  ],
  [
    {
      "content": "kopf",

      "startPos": 11971,
      "endPos": 11975
    }
  ],
  [
    {
      "content": "sache",

      "startPos": 12005,
      "endPos": 12010
    }
  ],
  [
    {
      "content": "gern",

      "startPos": 12096,
      "endPos": 12100
    }
  ],
  [
    {
      "content": "denken",

      "startPos": 12158,
      "endPos": 12164
    }
  ],
  [
    {
      "content": "brauche",

      "startPos": 12211,
      "endPos": 12218
    }
  ],
  [
    {
      "content": "ende",

      "startPos": 12267,
      "endPos": 12271
    }
  ],
  [
    {
      "content": "später",

      "startPos": 12305,
      "endPos": 12311
    }
  ],
  [
    {
      "content": "gehe",

      "startPos": 12407,
      "endPos": 12411
    }
  ],
  [
    {
      "content": "vergessen",

      "startPos": 12449,
      "endPos": 12458
    }
  ],
  [
    {
      "content": "runter",

      "startPos": 12475,
      "endPos": 12481
    }
  ],
  [
    {
      "content": "fahren",

      "startPos": 12496,
      "endPos": 12502
    }
  ],
  [
    {
      "content": "sieh",

      "startPos": 12549,
      "endPos": 12553
    }
  ],
  [
    {
      "content": "warst",

      "startPos": 12603,
      "endPos": 12608
    }
  ],
  [
    {
      "content": "stadt",

      "startPos": 12621,
      "endPos": 12626
    }
  ],
  [
    {
      "content": "namen",

      "startPos": 12649,
      "endPos": 12654
    }
  ],
  [
    {
      "content": "sehe",

      "startPos": 12678,
      "endPos": 12682
    }
  ],
  [
    {
      "content": "augen",

      "startPos": 12732,
      "endPos": 12737
    }
  ],
  [
    {
      "content": "gab",

      "startPos": 12752,
      "endPos": 12755
    }
  ],
  [
    {
      "content": "dank",

      "startPos": 12793,
      "endPos": 12797
    }
  ],
  [
    {
      "content": "sage",

      "startPos": 12817,
      "endPos": 12821
    }
  ],
  [
    {
      "content": "würden",

      "startPos": 12854,
      "endPos": 12860
    }
  ],
  [
    {
      "content": "eins",

      "startPos": 12885,
      "endPos": 12889
    }
  ],
  [
    {
      "content": "daran",

      "startPos": 12916,
      "endPos": 12921
    }
  ],
  [
    {
      "content": "dazu",

      "startPos": 12934,
      "endPos": 12938
    }
  ],
  [
    {
      "content": "egal",

      "startPos": 12951,
      "endPos": 12955
    }
  ],
  [
    {
      "content": "frage",

      "startPos": 13010,
      "endPos": 13015
    }
  ],
  [
    {
      "content": "weit",

      "startPos": 13054,
      "endPos": 13058
    }
  ],
  [
    {
      "content": "familie",

      "startPos": 13107,
      "endPos": 13114
    }
  ],
  [
    {
      "content": "sterben",

      "startPos": 13131,
      "endPos": 13138
    }
  ],
  [
    {
      "content": "könnten",

      "startPos": 13162,
      "endPos": 13169
    }
  ],
  [
    {
      "content": "jungs",

      "startPos": 13194,
      "endPos": 13199
    }
  ],
  [
    {
      "content": "jeden",

      "startPos": 13222,
      "endPos": 13227
    }
  ],
  [
    {
      "content": "minuten",

      "startPos": 13242,
      "endPos": 13249
    }
  ],
  [
    {
      "content": "verstehe",

      "startPos": 13267,
      "endPos": 13275
    }
  ],
  [
    {
      "content": "deiner",

      "startPos": 13311,
      "endPos": 13317
    }
  ],
  [
    {
      "content": "hilfe",

      "startPos": 13333,
      "endPos": 13338
    }
  ],
  [
    {
      "content": "beide",

      "startPos": 13374,
      "endPos": 13379
    }
  ],
  [
    {
      "content": "bald",

      "startPos": 13404,
      "endPos": 13408
    }
  ],
  [
    {
      "content": "deinem",

      "startPos": 13434,
      "endPos": 13440
    }
  ],
  [
    {
      "content": "nimm",

      "startPos": 13455,
      "endPos": 13459
    }
  ],
  [
    {
      "content": "kleine",

      "startPos": 13501,
      "endPos": 13507
    }
  ],
  [
    {
      "content": "baby",

      "startPos": 13528,
      "endPos": 13532
    }
  ],
  [
    {
      "content": "glück",

      "startPos": 13557,
      "endPos": 13562
    }
  ],
  [
    {
      "content": "freunde",

      "startPos": 13633,
      "endPos": 13640
    }
  ],
  [
    {
      "content": "wusste",

      "startPos": 13670,
      "endPos": 13676
    }
  ],
  [
    {
      "content": "verrückt",

      "startPos": 13691,
      "endPos": 13699
    }
  ],
  [
    {
      "content": "ruhig",

      "startPos": 13749,
      "endPos": 13754
    }
  ],
  [
    {
      "content": "land",

      "startPos": 13862,
      "endPos": 13866
    }
  ],
  [
    {
      "content": "darüber",

      "startPos": 13901,
      "endPos": 13908
    }
  ],
  [
    {
      "content": "gefunden",

      "startPos": 13949,
      "endPos": 13957
    }
  ],
  [
    {
      "content": "tür",

      "startPos": 13972,
      "endPos": 13975
    }
  ],
  [
    {
      "content": "mache",

      "startPos": 13990,
      "endPos": 13995
    }
  ],
  [
    {
      "content": "seiner",

      "startPos": 14010,
      "endPos": 14016
    }
  ],
  [
    {
      "content": "wasser",

      "startPos": 14037,
      "endPos": 14043
    }
  ],
  [
    {
      "content": "auto",

      "startPos": 14059,
      "endPos": 14063
    }
  ],
  [
    {
      "content": "sah",

      "startPos": 14079,
      "endPos": 14082
    }
  ],
  [
    {
      "content": "dies",

      "startPos": 14132,
      "endPos": 14136
    }
  ],
  [
    {
      "content": "eigentlich",

      "startPos": 14151,
      "endPos": 14161
    }
  ],
  [
    {
      "content": "eure",

      "startPos": 14208,
      "endPos": 14212
    }
  ],
  [
    {
      "content": "ruhe",

      "startPos": 14236,
      "endPos": 14240
    }
  ],
  [
    {
      "content": "stehen",

      "startPos": 14367,
      "endPos": 14373
    }
  ],
  [
    {
      "content": "ihrer",

      "startPos": 14389,
      "endPos": 14394
    }
  ],
  [
    {
      "content": "frauen",

      "startPos": 14411,
      "endPos": 14417
    }
  ],
  [
    {
      "content": "meinst",

      "startPos": 14433,
      "endPos": 14439
    }
  ],
  [
    {
      "content": "töten",

      "startPos": 14481,
      "endPos": 14486
    }
  ],
  [
    {
      "content": "fall",

      "startPos": 14513,
      "endPos": 14517
    }
  ],
  [
    {
      "content": "ging",

      "startPos": 14560,
      "endPos": 14564
    }
  ],
  [
    {
      "content": "polizei",

      "startPos": 14602,
      "endPos": 14609
    }
  ],
  [
    {
      "content": "vorbei",

      "startPos": 14642,
      "endPos": 14648
    }
  ],
  [
    {
      "content": "krieg",

      "startPos": 14697,
      "endPos": 14702
    }
  ],
  [
    {
      "content": "je",

      "startPos": 14727,
      "endPos": 14729
    }
  ],
  [
    {
      "content": "darauf",

      "startPos": 14752,
      "endPos": 14758
    }
  ],
  [
    {
      "content": "vielen",

      "startPos": 14790,
      "endPos": 14796
    }
  ],
  [
    {
      "content": "letzte",

      "startPos": 14811,
      "endPos": 14817
    }
  ],
  [
    {
      "content": "lang",

      "startPos": 14873,
      "endPos": 14877
    }
  ],
  [
    {
      "content": "bisschen",

      "startPos": 14892,
      "endPos": 14900
    }
  ],
  [
    {
      "content": "dran",

      "startPos": 14922,
      "endPos": 14926
    }
  ],
  [
    {
      "content": "hoch",

      "startPos": 14942,
      "endPos": 14946
    }
  ],
  [
    {
      "content": "kenne",

      "startPos": 14985,
      "endPos": 14990
    }
  ],
  [
    {
      "content": "fast",

      "startPos": 15016,
      "endPos": 15020
    }
  ],
  [
    {
      "content": "ganzen",

      "startPos": 15090,
      "endPos": 15096
    }
  ],
  [
    {
      "content": "schau",

      "startPos": 15152,
      "endPos": 15157
    }
  ],
  [
    {
      "content": "sogar",

      "startPos": 15197,
      "endPos": 15202
    }
  ],
  [
    {
      "content": "spielen",

      "startPos": 15217,
      "endPos": 15224
    }
  ],
  [
    {
      "content": "wurden",

      "startPos": 15249,
      "endPos": 15255
    }
  ],
  [
    {
      "content": "hinter",

      "startPos": 15280,
      "endPos": 15286
    }
  ],
  [
    {
      "content": "teufel",

      "startPos": 15320,
      "endPos": 15326
    }
  ],
  [
    {
      "content": "dinge",

      "startPos": 15359,
      "endPos": 15364
    }
  ],
  [
    {
      "content": "keiner",

      "startPos": 15381,
      "endPos": 15387
    }
  ],
  [
    {
      "content": "spät",

      "startPos": 15433,
      "endPos": 15437
    }
  ],
  [
    {
      "content": "bekommen",

      "startPos": 15452,
      "endPos": 15460
    }
  ],
  [
    {
      "content": "oben",

      "startPos": 15511,
      "endPos": 15515
    }
  ],
  [
    {
      "content": "hört",

      "startPos": 15563,
      "endPos": 15567
    }
  ],
  [
    {
      "content": "hätten",

      "startPos": 15605,
      "endPos": 15611
    }
  ],
  [
    {
      "content": "bereit",

      "startPos": 15626,
      "endPos": 15632
    }
  ],
  [
    {
      "content": "drin",

      "startPos": 15671,
      "endPos": 15675
    }
  ],
  [
    {
      "content": "neue",

      "startPos": 15691,
      "endPos": 15695
    }
  ],
  [
    {
      "content": "kommst",

      "startPos": 15709,
      "endPos": 15715
    }
  ],
  [
    {
      "content": "woher",

      "startPos": 15783,
      "endPos": 15788
    }
  ],
  [
    {
      "content": "ihrem",

      "startPos": 15833,
      "endPos": 15838
    }
  ],
  [
    {
      "content": "wagen",

      "startPos": 15854,
      "endPos": 15859
    }
  ],
  [
    {
      "content": "arbeiten",

      "startPos": 15893,
      "endPos": 15901
    }
  ],
  [
    {
      "content": "verstehen",

      "startPos": 15950,
      "endPos": 15959
    }
  ],
  [
    {
      "content": "jahr",

      "startPos": 15995,
      "endPos": 15999
    }
  ],
  [
    {
      "content": "tod",

      "startPos": 16014,
      "endPos": 16017
    }
  ],
  [
    {
      "content": "etwa",

      "startPos": 16033,
      "endPos": 16037
    }
  ],
  [
    {
      "content": "echt",

      "startPos": 16078,
      "endPos": 16082
    }
  ],
  [
    {
      "content": "seinem",

      "startPos": 16129,
      "endPos": 16135
    }
  ],
  [
    {
      "content": "geschichte",

      "startPos": 16149,
      "endPos": 16159
    }
  ],
  [
    {
      "content": "bringt",

      "startPos": 16194,
      "endPos": 16200
    }
  ],
  [
    {
      "content": "braucht",

      "startPos": 16240,
      "endPos": 16247
    }
  ],
  [
    {
      "content": "treffen",

      "startPos": 16296,
      "endPos": 16303
    }
  ],
  [
    {
      "content": "toll",

      "startPos": 16348,
      "endPos": 16352
    }
  ],
  [
    {
      "content": "gerne",

      "startPos": 16381,
      "endPos": 16386
    }
  ],
  [
    {
      "content": "draußen",

      "startPos": 16433,
      "endPos": 16440
    }
  ],
  [
    {
      "content": "fünf",

      "startPos": 16490,
      "endPos": 16494
    }
  ],
  [
    {
      "content": "lhnen",

      "startPos": 16509,
      "endPos": 16514
    }
  ],
  [
    {
      "content": "zimmer",

      "startPos": 16529,
      "endPos": 16535
    }
  ],
  [
    {
      "content": "nett",

      "startPos": 16550,
      "endPos": 16554
    }
  ],
  [
    {
      "content": "weiss",

      "startPos": 16625,
      "endPos": 16630
    }
  ],
  [
    {
      "content": "spiel",

      "startPos": 16646,
      "endPos": 16651
    }
  ],
  [
    {
      "content": "verstanden",

      "startPos": 16696,
      "endPos": 16706
    }
  ],
  [
    {
      "content": "große",

      "startPos": 16727,
      "endPos": 16732
    }
  ],
  [
    {
      "content": "anders",

      "startPos": 16809,
      "endPos": 16815
    }
  ],
  [
    {
      "content": "sorgen",

      "startPos": 16858,
      "endPos": 16864
    }
  ],
  [
    {
      "content": "welche",

      "startPos": 16914,
      "endPos": 16920
    }
  ],
  [
    {
      "content": "einzige",

      "startPos": 16959,
      "endPos": 16966
    }
  ],
  [
    {
      "content": "art",

      "startPos": 16983,
      "endPos": 16986
    }
  ],
  [
    {
      "content": "liegt",

      "startPos": 17091,
      "endPos": 17096
    }
  ],
  [
    {
      "content": "verloren",

      "startPos": 17116,
      "endPos": 17124
    }
  ],
  [
    {
      "content": "ahnung",

      "startPos": 17149,
      "endPos": 17155
    }
  ],
  [
    {
      "content": "vier",

      "startPos": 17258,
      "endPos": 17262
    }
  ],
  [
    {
      "content": "alter",

      "startPos": 17277,
      "endPos": 17282
    }
  ],
  [
    {
      "content": "gekommen",

      "startPos": 17307,
      "endPos": 17315
    }
  ],
  [
    {
      "content": "jemanden",

      "startPos": 17383,
      "endPos": 17391
    }
  ],
  [
    {
      "content": "gehst",

      "startPos": 17410,
      "endPos": 17415
    }
  ],
  [
    {
      "content": "woche",

      "startPos": 17453,
      "endPos": 17458
    }
  ],
  [
    {
      "content": "kerl",

      "startPos": 17473,
      "endPos": 17477
    }
  ],
  [
    {
      "content": "gestern",

      "startPos": 17518,
      "endPos": 17525
    }
  ],
  [
    {
      "content": "wenig",

      "startPos": 17545,
      "endPos": 17550
    }
  ],
  [
    {
      "content": "bestimmt",

      "startPos": 17588,
      "endPos": 17596
    }
  ],
  [
    {
      "content": "kurz",

      "startPos": 17637,
      "endPos": 17641
    }
  ],
  [
    {
      "content": "überhaupt",

      "startPos": 17686,
      "endPos": 17695
    }
  ],
  [
    {
      "content": "finde",

      "startPos": 17712,
      "endPos": 17717
    }
  ],
  [
    {
      "content": "darum",

      "startPos": 17732,
      "endPos": 17737
    }
  ],
  [
    {
      "content": "tage",

      "startPos": 17772,
      "endPos": 17776
    }
  ],
  [
    {
      "content": "erste",

      "startPos": 17791,
      "endPos": 17796
    }
  ],
  [
    {
      "content": "schwester",

      "startPos": 17812,
      "endPos": 17821
    }
  ],
  [
    {
      "content": "schwer",

      "startPos": 17847,
      "endPos": 17853
    }
  ],
  [
    {
      "content": "suchen",

      "startPos": 17953,
      "endPos": 17959
    }
  ],
  [
    {
      "content": "bleibt",

      "startPos": 18004,
      "endPos": 18010
    }
  ],
  [
    {
      "content": "tochter",

      "startPos": 18054,
      "endPos": 18061
    }
  ],
  [
    {
      "content": "typ",

      "startPos": 18094,
      "endPos": 18097
    }
  ],
  [
    {
      "content": "guter",

      "startPos": 18128,
      "endPos": 18133
    }
  ],
  [
    {
      "content": "gewesen",

      "startPos": 18149,
      "endPos": 18156
    }
  ],
  [
    {
      "content": "grund",

      "startPos": 18169,
      "endPos": 18174
    }
  ],
  [
    {
      "content": "deshalb",

      "startPos": 18535,
      "endPos": 18542
    }
  ],
  [
    {
      "content": "holen",

      "startPos": 18571,
      "endPos": 18576
    }
  ],
  [
    {
      "content": "hoffe",

      "startPos": 18610,
      "endPos": 18615
    }
  ],
  [
    {
      "content": "muß",

      "startPos": 18684,
      "endPos": 18687
    }
  ],
  [
    {
      "content": "eben",

      "startPos": 18800,
      "endPos": 18804
    }
  ],
  [
    {
      "content": "wohin",

      "startPos": 19002,
      "endPos": 19007
    }
  ]
]

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
		case "kon": possibleKeys.push("art", "n", "adj")
		break;
		case "pro": possibleKeys.push("n", "adj")
		break;
		case "prä": possibleKeys.push("art", "n")
		break;
		case "v": possibleKeys.push("art", "n", "pro", "prä", "kon")
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
			
			let allReplacements = json[key].filter((a) => a.match(/[1-9]|\w{2,}/))
			if(allReplacements.length <= 0) continue;
			let highest = allReplacements[allReplacements.length-1];
			if(!isNaN(parseInt(highest))){
				newWord.match(regKey).forEach(() => arr.push(parseInt(highest)))
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
			regKey = key;
			if(key[0] == "-"){
				regKey = regKey.replace("-","") + "\\b";
			}
			//*		FASTER
			var regex = new RegExp(regKey, "g");
			cloneWord = cloneWord.replace(regex, (mch) => { 	//HEAVY
				let replIx = res.findIndex((r)=> json[key].includes(r.toString()) )
				if(replIx < 0){
					let repl = json[key][Math.floor(Math.random()*json[key].length)];
					return repl.match(/[1-9]/) ? Math.round(Math.random()) ? mch.toUpperCase() : mch.toLowerCase() : repl;
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
----> default: 1113.317138671875ms	(w/o "mi" flags)
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




