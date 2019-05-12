<template>
  <b-navbar class="w100" toggleable="md" type="light" variant="light" sticky>
    <b-navbar-brand href="/">
      <img src="../assets/logo.png" alt="Konnect logo">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="show" class="ml-auto">
        <b-nav-item>
          <UpcomingEventModal/>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/dashboard'}">
            <font-awesome-icon id="dashboard" class="mx-2" size="2x" icon="columns"/>
            <b-tooltip target="dashboard" title="Dashboard" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/events'}">
            <font-awesome-icon id="events" class="mx-2" size="2x" icon="th-list"/>
            <b-tooltip target="events" title="Events" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/create'}">
            <font-awesome-icon id="create" class="mx-2" size="2x" icon="plus"/>
            <b-tooltip target="create" title="Create Event" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/friends'}">
            <font-awesome-icon id="friends" class="mx-2" size="2x" icon="user-friends"/>
            <b-tooltip target="friends" title="Friends" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/user/' + this.$session.get('currentUser')}">
            <font-awesome-icon id="profile" class="mx-2" size="2x" icon="user-graduate"/>
            <b-tooltip target="profile" title="Profile" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <a href @click.prevent="logout">
            <font-awesome-icon id="logout" class="mx-2" size="2x" icon="sign-out-alt"/>
            <b-tooltip target="logout" title="Logout" placement="bottom"></b-tooltip>
          </a>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item>
          <SignUpBtn/>
        </b-nav-item>
        <b-nav-item>
          <LogInBtn/>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import SignUpBtn from "@/components/SignUpBtn.vue";
import LogInBtn from "@/components/LogInBtn.vue";
import UpcomingEventModal from "@/components/UpcomingEventModal.vue";

export default {
  name: "navbar",
  components: {
    SignUpBtn,
    LogInBtn,
    UpcomingEventModal
  },
  watch: {
    $route() {
      this.show = this.$session.exists();
    }
  },
  data() {
    return {
      show: this.$session.exists()
    };
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
img {
  width: 50%;
}
</style>
