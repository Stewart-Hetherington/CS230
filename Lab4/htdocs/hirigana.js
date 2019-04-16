const test_data = {
	a : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_A.svg", 
	i : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_I.png",
	u : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_U.png",
	e : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_E.png",
	o : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_E.png",
	ka : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_KA.svg",
	ki : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_KI.svg",
	ku : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_KU.svg",
	ke : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_KE.png",
	ko : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_KO.png",
	sa : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_SA.svg",
	shi : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_SI.svg",
	su : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_SU.svg",
	se : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_SE.svg",
	so : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_SO.svg",
	ta : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_TA.png",
	chi : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_TI.png",
	tsu : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_TU.png",
	te : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_TE.png",
	to : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_TO.png",
	na : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_NA.png",
	ni : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_NI.png",
	nu : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_NU.png",
	ne : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_NE.png",
	no : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_NO.png",
	ha : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_HA.png",
	hi : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_HI.png.png",
	fu : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_HU.png",
	he : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_HE.png",
	ho : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_HO.png",
	ma : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_MA.svg",
	mi : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_MI.png",
	mu : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_MU.png",
	me : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_ME.png",
	mo : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_MO.png",
	ya : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_YA.png",
	yu : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_YU.png",
	yo : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_YO.png",
	ra : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_RA.png",
	ri : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_RI.png",
	ru : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_RU.png",
	re : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_RE.png",
	ro : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_RO.png",
	wa : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_WA.png",
	wo : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_WO.png",
	n : "img/Hirigana.img/Japanese_Hiragana_kyokashotai_N.png"
}

const values = Object.values(test_data);
const keys = Object.keys(test_data);

// function to play audio by div id
function playAudio(id) {
	var path = new Audio("Hirigana.audio/"+id+".ogg");
	console.log("Playing "+path);
	path.play();
	// Card selected for quiz
	selected(id);	
}

// function to show gif
function showGif(img, id) {
	img.src="img/Hiragana.gif/Hiragana_"+id+".gif";
	console.log("Displaying "+img.src);
}
// function to select cards for quiz 
var cards = [];
function selected(id) {
	var card = document.getElementById(id).parentElement;
	if(card.classList.contains('selected') ) {
		card.classList.remove('selected');
		card.className = 'unselected';
		// remove unselected number from cards array
		for(var i = cards.length - 1; i >= 0; i--) {
		    if(cards[i] === id) {
       			cards.splice(i, 1);
       			console.log(id+" has been removed from cards!");
    			}	
		}
	// add selected cards to cards array 
	}else{
		card.classList.remove('unselected');
		card.classList.add('selected');
		cards.push(id);
		console.log(id+" has been added to cards!")
			console.log(cards);
	}
	if( cards.length == 10 ) {
	test();
}

// fucntion to test user on selected cards 
function test() {
	
	var quiz = document.getElementById('quiz');

	if( cards.length != 10 ) {
		window.alert('Please select at 10 cards to begin the test!');
	}else{
		// remove table from page and load up quiz
		document.getElementById('table').style.display = "none";
		document.getElementById('h3').style.display = "none";
		document.getElementById('test').style.display = "none";
		// load quiz
		document.getElementById('quiz').className='shown';
		// design a new table questionSet to append to quiz
		tableCreate();
	}
}

// fucntion to test user on selected cards 
function test() {
	
	var quiz = document.getElementById('quiz');

		// remove table from page and load up quiz
		hideTable();

		// load quiz
		document.getElementById('quiz').className='shown';

		// check which type of quiz the user wants 
		testType();
}
function testType() {
	var newDiv = document.createElement('div');
	newDiv.setAttribute('id','test_type');
	newDiv.setAttribute('class','content');
	newDiv.innerHTML = 'Would you like to be tested on kana elements or ramji?';
	document.getElementById('quiz').appendChild(newDiv);
	
	var kanaDiv = document.createElement('div');
	kanaDiv.innerHTML = 'Kana';
	kanaDiv.setAttribute('class','content');
	var kana = createRadioElement('radio', 'test_choice', 'kana_elements', 'kanaQuiz()' );
	kanaDiv.appendChild( kana );
	newDiv.appendChild( kanaDiv );

	var romajiDiv = document.createElement('div');
	romajiDiv.innerHTML = 'Romaji';
	romajiDiv.setAttribute('class','content');
	var romaji = createRadioElement('radio', 'test_choice', 'romaji_elements', 'romajiQuiz()' );
	romajiDiv.appendChild( romaji );
	newDiv.appendChild( romajiDiv );
}

function remove_test_type_div() {
	var test = document.getElementById('test_type');
	test.parentElement.removeChild(test);
}
// tableCreate() found @ https://stackoverflow.com/questions/14643617/create-table-using-javascript
// and reconstructed for hirigan app 
// kanaQuiz function will build a table and populate it with
// selected cards and random cards, each with radio buttons
// to keep track of the players score 

function kanaQuiz() {
	
	remove_test_type_div();
	
	var tbl = document.createElement('table');
  	tbl.setAttribute('class', 'table');
	tbl.setAttribute('id', 'quizTable');
  	var tbdy = document.createElement('tbody');
   	
	for( var i = 0; i < cards.length; i++) {
		var body = document.getElementById('quiz');
		var tr = document.createElement('tr');
		var randomNum = parseInt(Math.floor(Math.random() * 4) );
		var inserted = false;
		
    		for (var j = 0; j < 5; j++) {
			var td = document.createElement('td');
			// Upload question at the start of each row
			if( j === 0 ) {
				td.innerHTML = 'Which character represents '+cards[i]+ '?';
				tr.appendChild(td);
			}else{
				var randomValue = values[parseInt(Math.random() * values.length) ];
				var newImg = document.createElement('img');
				// Fill the table first with 1 selected character and then with 3 random characters
				if( randomNum === parseInt(0) && !inserted ) {
					newImg.src = test_data[cards[i]];
					console.log(cards[i] + ' does it match ' + keys[i]);
					td.appendChild(newImg);

					td.appendChild( createRadioElement( 'radio', 'row'+i, cards[i]+'_correct', null ) );
        				tr.appendChild(td);
					console.log(test_data[cards[i] ]+" selected card has been loaded into the quiz");
					randomNum = parseInt(Math.floor(Math.random() * 4) );
					inserted = true;
				}else{
					newImg.setAttribute('src', randomValue );
					td.appendChild(newImg);
					td.appendChild( createRadioElement('radio', 'row'+i, cards[i]+'_incorrect'+(j*i), null ) );
					td.classList.add('quizQuestions');
        				tr.appendChild(td);
					randomNum--;
				}
			}
      		}
    		tbdy.appendChild(tr);
	}
  	tbl.appendChild(tbdy);
  	body.appendChild(tbl);
	body.appendChild( createRadioElement('submit', 'submitBtn', 'submitBtn', 'checkAnswers()') );
console.log('quiz has been loaded');
}
function romajiQuiz() {

	remove_test_type_div();

	var tbl = document.createElement('table');
  	tbl.setAttribute('class', 'table');
	tbl.setAttribute('id', 'quizTable');
  	var tbdy = document.createElement('tbody');
   	
	for( var i = 0; i < cards.length; i++) {
		var body = document.getElementById('quiz');
		var tr = document.createElement('tr');
		var randomNum = parseInt(Math.floor(Math.random() * 4) );
		var inserted = false;
		
    		for (var j = 0; j < 5; j++) {
			var td = document.createElement('td');
			// Upload card at the start of each row
			if( j === 0 ) {
				var newImg = document.createElement('img');
				newImg.src = test_data[cards[i]];
				td.appendChild(newImg);
				tr.appendChild(td);
			}else{
				var randomValue = keys[parseInt(Math.random() * values.length) ];
				var newRomaji = document.createElement('div');
				// Fill the table first with 1 selected character and then with 3 random characters
				if( randomNum === parseInt(0) && !inserted ) {
					newRomaji.innerHTML = cards[i];
					td.appendChild(newRomaji);

					td.appendChild( createRadioElement( 'radio', 'row'+i, cards[i]+'_correct', null ) );
        				tr.appendChild(td);
					console.log(test_data[cards[i] ]+" selected card has been loaded into the quiz");
					randomNum = parseInt(Math.floor(Math.random() * 4) );
					inserted = true;
				}else{
					newRomaji.innerHTML = randomValue;
					td.appendChild(newRomaji);
					td.appendChild( createRadioElement('radio', 'row'+i, cards[i]+'_incorrect'+(j*i), null ) );
					td.classList.add('quizQuestions');
        				tr.appendChild(td);
					randomNum--;
				}
			}
      		}
    		tbdy.appendChild(tr);
	}
  	tbl.appendChild(tbdy);
  	body.appendChild(tbl);
	body.appendChild( createRadioElement('submit', 'submitBtn', 'submitBtn', 'checkAnswers()') );
console.log('quiz has been loaded');
}
// createRadioElement() found @ https://stackoverflow.com/questions/118693/how-do-you-dynamically-create-a-radio-button-in-javascript-that-works-in-all-bro
// and reconstructed for hirigan app 
function createRadioElement(type, name, id, onClick) {
    var radioHtml = '<input type="'+ type + '" name="' + name + '"' + ' id="'+id+'"';
	radioHtml += ' onclick="'+onClick+'">';
	console.log('Button created : \n'+radioHtml);
    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}

var score = 0;
function checkAnswers() {
	score = 0;
	for(let card of cards) {
		check(card)
	}
	score = (score/cards.length)*100 + "%";
	var samurai = document.createElement('img');
	samurai.setAttribute('src', 'img/Hiragana.gif/samurai.gif');

	// remove quiz table
	var quizTable = document.getElementById('quizTable');
	quizTable.parentNode.removeChild(quizTable);
	var quiz = document.getElementById('quiz');
	var btn = document.getElementById('submitBtn');
	btn.parentNode.removeChild(btn);
	window.alert('Congratulations, your score is '+score );

	resetPage();
}
// If correct card has been checked then the score will be updated
function check(card) {
 	if(document.getElementById(card+"_correct").checked) {
		score++;
	}
}
function resetPage() {	
	score = 0;
	
console.log(cards);
	// unselect all selected cards
	for(var i = cards.length-1; i >= 0; i--) {
		selected(cards[i] );
	}
	showTable();
}

function showTable() {
	document.getElementById('table').style.display = "block";
	document.getElementById('table').setAttribute('class', 'table');
	document.getElementById('table').setAttribute('display', '');
	document.getElementById('h3').style.display = "block";
	document.getElementById('test').style.display = "block";
}

function hideTable() {
	document.getElementById('table').style.display = "none";
	document.getElementById('h3').style.display = "none";
}
	
