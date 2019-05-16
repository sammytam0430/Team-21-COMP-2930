<template>
  <b-navbar :class="scrolled ? 'scrolled' : 'normal'" toggleable="md" type="light" variant="light" sticky>
    <b-navbar-brand to="/">
      <img class="mr-n4" src="../assets/logo.png" alt="K">
      <span class="text-primary font-weight-bolder font-italic h4">onnect</span>
    </b-navbar-brand>
    <b-navbar-nav v-if="show">
      <UpcomingEventModal/>
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
    <b-collapse id="nav-collapse" v-model="expanded" is-nav>
      <b-navbar-nav v-if="show" class="ml-auto">
        <b-nav-item>
          <router-link :to="{path: '/dashboard'}">
            <font-awesome-icon id="dashboard" size="lg" fixed-width icon="columns"/>
            <span v-if="expanded" class="ml-2">Dashboard</span>
            <b-tooltip v-else target="dashboard" title="Dashboard" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/events'}">
            <font-awesome-icon id="events" size="lg" fixed-width icon="th-list"/>
            <span v-if="expanded" class="ml-2">Events</span>
            <b-tooltip v-else target="events" title="Events" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/create'}">
            <font-awesome-icon id="create" size="lg" fixed-width icon="plus"/>
            <span v-if="expanded" class="ml-2">Create Event</span>
            <b-tooltip v-else target="create" title="Create Event" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/friends'}">
            <font-awesome-icon id="friends" size="lg" fixed-width icon="user-friends"/>
            <span v-if="expanded" class="ml-2">Friends</span>
            <b-tooltip v-else target="friends" title="Friends" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link :to="{path: '/user/' + this.$session.get('currentUser')}">
            <font-awesome-icon id="profile" size="lg" fixed-width icon="user-graduate"/>
            <span v-if="expanded" class="ml-2">Profile</span>
            <b-tooltip v-else target="profile" title="Profile" placement="bottom"></b-tooltip>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <a href @click.prevent="logout">
            <font-awesome-icon id="logout" size="lg" fixed-width icon="sign-out-alt"/>
            <span v-if="expanded" class="ml-2">Logout</span>
            <b-tooltip v-else target="logout" title="Logout" placement="bottom"></b-tooltip>
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
import UsersService from "@/services/UsersService";

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
      show: this.$session.exists(),
      expanded: false,
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    async setActive() {
      const response = await UsersService.updateUser(this.$session.get("currentUser"), {isActive: false});
    },
    logout() {
      this.setActive();
      this.$session.destroy();
      this.$router.push("/");
      this.show = this.$session.exists();
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
img {
  height: 50px;
}

.normal {
  transition: background-color 0.2s linear;
}

.scrolled {
  transition: background-color 0.2s linear;
  background-color: rgba(240, 240, 240, 0.95) !important;
}
</style>
