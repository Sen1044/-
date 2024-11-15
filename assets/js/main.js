'use strict';
/*
console.log('読み込まれたよ');
document.querySelector('.header__btn').addEventListener('click',function(){
    console.log('クリックしたよ');
});
*/
{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });

}
