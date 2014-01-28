/**
 * Created by timothy.scott on 1/28/14.
 */

	var options = {
		paragraphs: 5,
		sentances: 6
	};


function randomSentance(){
	var r = Math.floor((Math.random()*sentances.length)+1);
	if(typeof(options.lastSentanceIndex) == 'undefined') options.lastSentanceIndex = null;
	if (r == options.lastSentanceIndex)	return randomSentance();
	options.lastSentanceIndex = r;
	return sentances[r];
}

function submitForm(){
	generateText(document.getElementById('paragraphs_input').value, document.getElementById('sentances_input').value);
	return false;
}

function generateText(paragraphs, sentances){
	var container = document.getElementById('theText'),
		html = '<p>To All,</p>',
		i,
		j;

	container.innerHTML = '';

	for (i = 0; i < paragraphs; i++){
		html = html + '<p>';
		for (j = 0; j < sentances; j++){
			html = html + randomSentance() + '. ';
		}
		html = html + '</p>\n';
	}

	html = html + '<p>-- Diamond</p>';

	container.innerHTML = html;
}

window.onload = function(){

	generateText(options.paragraphs, options.sentances);
};