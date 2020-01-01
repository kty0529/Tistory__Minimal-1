var grid = document.querySelector('#list-container .grid');

if ( grid !== null ) {
	var msnry = new Masonry( grid, {
		initLayout: false,
		itemSelector: '.grid-item',
		percentPosition: true,
		horizontalOrder: true
	});

	imagesLoaded( grid ).on( 'done', function() {
		msnry.layout();
		grid.parentNode.classList.add('loaded');
	});
}


var toggleSidebarBtn = document.querySelector('#header .toggle-sidebar');
var sidebar          = document.querySelector('#sidebar');
var overlay          = document.querySelector('#overlay');

toggleSidebarBtn.addEventListener('click', function() {
	var root = document.querySelector('html');
	root.classList.add('sidebar-active', 'scroll-lock');
});

overlay.addEventListener('click', function() {
	var root = document.querySelector('html');
	root.classList.remove('sidebar-active', 'scroll-lock');
});

console.log('Minimal #1 1.1.1 / Skin by themebrew.io')
