let icon = document.getElementById( 'iconHover' );

let img = document.getElementById( 'iconImg' );

let hover = document.getElementById( 'codeHover' );

hover.style.opacity = '0';

let iconHover = () => {
    hover.style.transition = '.5s'
    hover.style.opacity = '1';
    img.style.background = '#48556a';
    img.style.fill = '#fff';
    img.style.transition = '.3s';
    hover.style.zIndex = '1';
};

let iconNoHover = () => {
    hover.style.opacity = '0';
    img.style.background = '#ecf2f8';
    img.style.fill = '#6E8098';
    hover.style.zIndex = '-1';
}

img.addEventListener( 'mouseover', iconHover );

img.addEventListener( 'mouseout', iconNoHover );