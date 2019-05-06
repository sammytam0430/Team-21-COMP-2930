<template>
  <div class="pb-5 px-5">
    <h1 class="text-center py-5">Recent Events</h1>
    <b-card-group columns>
      <b-card :key="post.id" v-for="post in listings" :title="post.title">
        <b-card-text>
          {{ post.desc }}
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
    name: 'recentListing',
    data() {
        return {
            listings: [
                {
                    id: 1,
                    title: 'Need people for boardgame',
                    desc: 'Got 3 hours break and wanted to play some boardgame, come join me!!!'
                },
                {
                    id: 2,
                    title: 'Shoot around at the gym',
                    desc: 'Gonna go shoot around, join me if you want.'
                },
                {
                  id: 3,
                  title: 'Workout buddy needed',
                  desc: 'Come workout with me'
                },
                {
                  id: 4,
                  title: 'Join us for impromtu movie session',
                  desc: 'We\'re watching Captain Marvel, come hang out with us'
                }
            ]
        }
    }
}
</script>
