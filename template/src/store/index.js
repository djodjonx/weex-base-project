// Your's store here
export default {
    strict: true,
    state: {
        user: null
    },
    mutations: {
        setUser (state, user) {
            state.user = user
        }
    }
}