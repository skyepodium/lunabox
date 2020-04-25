<template>
  <div>
    <Header />
    <router-view class="index_wrapper" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'

export default {
    name: 'LayoutIndex',
    components:{
        Header,
        Footer
    }
}
</script>