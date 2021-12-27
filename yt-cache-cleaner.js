
function clearStorage() {
	window.sessionStorage.clear();
	window.indexedDB.clear();
	window.localStorage.clear();
	window.caches.clear();
}

setInterval( clearStorage, 1000 * 60 );