const createStore = {
    namespaced: true,
    state: {
        step: 0,
        questions: ['', '', '', ''],
        answers: []
    },
    getters: {
        GE_STEP: state => state.step,
        GE_QUESTIONS: state=> state.questions
    },
    mutations: {
        MU_QUESTIONS: (state, payload) => {
            state.questions[payload.step] = payload.question
        },
        MU_STEP: (state, payload) => {
            state.step = payload
        }
    },
    actions: {
        AC_QUESTIONS: ({commit}, payload) => {
            commit('MU_QUESTIONS', payload)
        },
        AC_STEP: ({commit}, payload) => {
            commit('MU_STEP', payload)
        },     
    }
}

export default createStore