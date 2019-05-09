<template>
  <div class="home">
    <Jumbotron/>
    <RecentListing/>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue';
import RecentListing from '@/components/RecentListing.vue';

export default {

  name: 'home',
  components: {
    Jumbotron,
    RecentListing
  }
}
</script>
