function createApi($axios){
    return {
        user: {
            login(username, password) {
                return $axios
                    .post('/login', { username: username, password: password })
                    .then((res) => res)
                    .catch((e) => e)
            },
            register(username, password) {
                return $axios
                    .post('/register', { username: username, password: password })
                    .then((res) => res)
                    .catch((e) => e)
            },
            logout() {
                return $axios
                    .get('/logout')
                    .then((res) => res)
                    .catch((e) => e)
            },
            isLogin() {
                return $axios
                    .get('/isLogin')
                    .then((res) => res)
                    .catch((e) => e)
            },
        }
    }
}


import Vue from 'vue'

export default (context, inject) => {
  // 注入Vue實例
  Vue.prototype.$api = createApi(context.$axios)

  // 注入context
  context.app.$api = createApi(context.$axios)

  // 同時注入，前面會自帶$
  inject('api', createApi(context.$axios))
}
