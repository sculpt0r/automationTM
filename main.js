function getItemEntry() {
    //output: (GH_LINK)[#ISSUE_NUMBER]: ISSUE_TITLE_WITHOUT_NUMBER
    const URL = document.URL;
    const HASH_ELEMENT = document.querySelector('#partial-discussion-header > div.gh-header-show > div > h1 > span.f1-light.color-text-tertiary');
    const HASH_NUMBER = HASH_ELEMENT.innerHTML;

    const TITLE_ELEMENT = document.querySelector('#partial-discussion-header > div.gh-header-show > div > h1 > span.js-issue-title.markdown-title');
    const TITLE = TITLE_ELEMENT.innerHTML;

    const result = `[${ URL }](${ HASH_NUMBER }): ${ TITLE }`;

    return result;
}

window.SCULPT0R = {
    getTMIssueEntry: () => {
        console.log( getItemEntry() );
    }
};