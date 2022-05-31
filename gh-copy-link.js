
function getItemEntry() {
	//output: (GH_LINK)[#ISSUE_NUMBER]: ISSUE_TITLE_WITHOUT_NUMBER
	const urlObj = new urlHref(document.URL);
	const urlHref = urlObj.href;

	const urlParts = urlHref.split( '/' );
	const lastUrlPart =  urlParts[ urlParts.length - 1 ];

	const HASH_NUMBER = lastUrlPart.replace( urlObj.hash, '' );

	const TITLE_ELEMENT = document.querySelector('#partial-discussion-header > div.gh-header-show > div > h1 > span.js-issue-title.markdown-title');
	const TITLE = TITLE_ELEMENT.innerHTML;

	const result = `<p><a href="${ urlHref }">#${ HASH_NUMBER }</a>: ${ TITLE }</p>`;

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