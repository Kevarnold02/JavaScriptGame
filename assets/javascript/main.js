Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 7;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

// Functions

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];

}

Main.SetUnderline = function(){
	Main.PullWord();
	for(i = 0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;
	document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter){
	Main.Changes = 0;
	for (i=0; i<Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter){
			Main.WordUArray[i] = letter;
			Main.Changes +=1;
			Main.WordU = Main.WordUArray.join('');
			document.getElementById("WORD").innerHTML = Main.WordU;
		}
	}

	if(Main.Changes < 1){
		Main.Lives -=1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}

	Main.WordU = Main.WordUArray.join('');
	document.getElementById("WORD").innerHTML = Main.WordU;

	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordUArray.join("");

	

	if(Main.Word1 == Main.Word2){
		alert("You Won!, Loading A New Word");
		window.location.reload();
	}

	if(Main.Lives < 1){
		document.getElementById("WORD").innerHTML == Main.Word1;
		alert("You Have Run Out Of Lives, Please Try Again");
		window.location.reload();
	}
}

	// document.onkeyup = function(event) {
 //    var letter = String.fromCharCode(event.keyCode).toLowerCase();
Main.PullWord();
Main.SetUnderline();