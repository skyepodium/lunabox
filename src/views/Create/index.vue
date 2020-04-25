<template>
  <div>
    <div
      class="progress_bar"
      :style="computedWidth"
    />
    <div class="all">
      <div class="question_wrapper">
        <div class="word">
          질문
        </div>
        <div class="question">
          <textarea
            class="question_textarea"
            :value="question"
            placeholder="물어보고 싶은 내용을 적어보세요"
            @input="question = $event.target.value"
          />
        </div>
      </div>

      <div class="answer_wrapper">
        <div class="word">
          보기
        </div>
        <div class="answer">
          <input
            class="answer_textarea"
            placeholder="보기를 적어보세요"
          >
        </div>
        <div class="answer">
          <input
            class="answer_textarea"
            placeholder="보기를 적어보세요"
          >
        </div>
        <div class="answer">
          <input
            class="answer_textarea"
            placeholder="보기를 적어보세요"
          >
        </div> 
        <div class="answer">
          <input
            class="answer_textarea"
            placeholder="보기를 적어보세요"
          >
        </div>               
      </div>      
    </div>
    <div
      class="progress_bar"
      :style="computedWidth"
    />    
    <div class="button_wrapper">
      <div class="button prevButton half">
        이전
      </div>
      <div
        class="button nextButton half"
        @click="goNext"
      >
        다음
      </div>
    </div>    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const createStore = 'createStore'

export default {
    name: 'CreateIndex',
    data() {
        return {
            question:''
        }
    },
    computed: {
        ...mapGetters(createStore, {
          GE_STEP: 'GE_STEP',
          GE_QUESTIONS: 'GE_QUESTIONS'
        }),
        computedWidth() {
            let width = (this.GE_STEP + 1) * 100 / 4
            let style = {
                width: `${width}%`
            }
            return style
        }
    },
    watch: {
        GE_QUESTIONS(val) {
            console.log('GE_QUESTIONS', val)
        }
    },
    created() {
        console.log(this.GE_STEP)
    },
    mounted() {
        
    },
    methods: {
        ...mapActions(createStore, [
            'AC_QUESTIONS',
            'AC_STEP'
        ]),
        goNext() {
            const payload = {
                step: this.GE_STEP,
                question: this.question
            }
            this.AC_QUESTIONS(payload)
            this.AC_STEP(this.GE_STEP + 1)
            console.log('question', this.question)
            console.log("GE_QUESTIONS", this.GE_QUESTIONS)
        }
    }
}
</script>