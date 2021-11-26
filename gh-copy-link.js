
function getItemEntry() {
	//output: (GH_LINK)[#ISSUE_NUMBER]: ISSUE_TITLE_WITHOUT_NUMBER
	const URL = document.URL;
	const urlParts = URL.split( '/' );
	const HASH_NUMBER = urlParts[ urlParts.length - 1 ];

	const TITLE_ELEMENT = document.querySelector('#partial-discussion-header > div.gh-header-show > div > h1 > span.js-issue-title.markdown-title');
	const TITLE = TITLE_ELEMENT.innerHTML;

	const result = `<a href="${ URL }">#${ HASH_NUMBER }</a>: ${ TITLE }`;

	return result;
}

function addHelperButton() {

	const TITLE_HEADER = document.querySelector('#partial-discussion-header > div.gh-header-show > div > h1');

	TITLE_HEADER.insertAdjacentHTML(
		'afterend',
		`<button id='sculpt0rGetButton'>GET ENTRY</button>`
	);

	document.getElementById('sculpt0rGetButton').onclick = function() {
		SCULPT0R.copyIssueOrPrFormattedLink();
	}

}

addHelperButton();

window.SCULPT0R = {
	copyIssueOrPrFormattedLink: () => {
		var type = "text/html";
		var blob = new Blob( [ getItemEntry() ], { type } );
		var data = [ new ClipboardItem( { [type]: blob } ) ];

		navigator.clipboard.write( data ).then(
			function () {
				console.log( 'OK' );
			/* success */
			},
			function () {
				console.log( 'FAIL' );
			/* failure */
			}
		);
	}
};