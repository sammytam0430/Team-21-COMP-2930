<template>
  <div class="home">
    <SignUpModal/>
    <LogInModal/>
    <Jumbotron/>
    <RecentListing/>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue';
import RecentListing from '@/components/RecentListing.vue';
import SignUpModal from '@/components/SignUpModal.vue';
import LogInModal from '@/components/LogInModal.vue';


export default {

  name: 'home',
  components: {
    Jumbotron,
    RecentListing,
    SignUpModal,
    LogInModal
  }
}
</script>
