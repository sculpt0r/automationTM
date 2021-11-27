
function getItemEntry() {
	//output: (GH_LINK)[#ISSUE_NUMBER]: ISSUE_TITLE_WITHOUT_NUMBER
	const URL = document.URL;
	const urlParts = URL.split( '/' );
	const HASH_NUMBER = urlParts[ urlParts.length - 1 ];

	const TITLE_ELEMENT = document.querySelector('#partial-discussion-header > div.gh-header-show > div > h1 > span.js-issue-title.markdown-title');
	const TITLE = TITLE_ELEMENT.innerHTML;

	const result = `<p><a href="${ URL }">#${ HASH_NUMBER }</a>: ${ TITLE }</p>`;

	return result;
}

function addHelperButton() {

	const TITLE_HEADER = document.querySelector('#partial-discussion-header > div.gh-header-show > div > h1');

	TITLE_HEADER.insertAdjacentHTML(
		'afterend',
		`${formattedLink}`
	);
}

const formattedLink = getItemEntry();
addHelperButton();