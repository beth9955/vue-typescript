import Application from "@/core/Application";
import Vue from 'vue';
import BaseLayout from '@/layout/BaseLayout.vue';
import router from '@/router/index';

class App implements Application{

    constructor(){
        Vue.config.productionTip = false;
    }


    load(selector: string): void {
        new Vue({
            router,
            render : (h :any) => h(BaseLayout)
        }).$mount(selector);
    }


}


export default  App;