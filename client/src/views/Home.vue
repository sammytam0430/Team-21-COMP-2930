<template>
  <div class="home">
    <Jumbotron/>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue';

export default {

  name: 'home',
  components: {
    Jumbotron
  }
}
</script>
