import  App from '@/App';


document.addEventListener('DOMContentLoaded', (e) => {
    console.log("starrt");


    //https://github.com/inversify/inversify-inject-decorators
    //참고해서  lazyInject 를 써봅시다
    new App().load('#app');
});



