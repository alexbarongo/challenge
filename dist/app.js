const navigation = document.querySelector('#navbar')
const menu = document.querySelector('#navbar .menu-burger')
const homeImage = document.querySelector('.image img')

//changing the image on the home section when width is below 376px

function changeImage(){
	const width= window.innerWidth
	if(width <= 375){
		homeImage.src = 'img/image-web-3-mobile.jpg'
	}
}

changeImage()

// creating the function for the menu to open
function menuCheck(){
	if(menu.classList.contains('menu-burger')){
			navigation.id = 'navbar-mobile'
			menu.src = 'img/icon-menu-close.svg'
			menu.className = 'menu-close'
	}
	else if(menu.classList.contains('menu-close')){
		navigation.id = 'navbar'
		menu.src = 'img/icon-menu.svg'
		menu.className = 'menu-burger'
	}
	
}

menu.addEventListener('click', menuCheck)
