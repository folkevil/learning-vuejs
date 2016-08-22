import Vue from 'vue'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import store from './vuex/store'
import TodoItems from './components/Todo/TodoItems.vue'
import TodoAddForm from './components/Todo/TodoAdd.vue'

Vue.use(VueResource)
Vue.use(VueValidator)

Vue.component('todo-item', TodoItems)
Vue.component('todo-add-form', TodoAddForm)

/*Adding CSRF token to all HTTP Request*/
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("meta[name=csrf-token]").getAttribute('content')

new Vue({
    el: 'body',
    store
})
