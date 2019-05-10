import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import CreateEvent from "@/views/CreateEvent.vue";
import Friends from "@/views/Friends.vue";
import EventDetails from "@/components/EventDetails.vue";
import DashBoard from "@/views/DashBoard.vue";
import SignUpModal from "@/components/SignUpModal.vue";
import LogInModal from "@/components/LogInModal.vue";
import Listing from "@/views/Listing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        showSignUp: false,
        showLogIn: false
      },
      children: [
        {
          path: "signup",
          name: "SignUpModal",
          components: {
            page: SignUpModal
          },
          meta: {
            showLogIn: false,
            showSignUp: true
          }
        },
        {
          path: "login",
          name: "LogInModal",
          components: {
            page: LogInModal
          },
          meta: {
            showSignUp: false,
            showLogIn: true
          }
        }
      ]
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/events",
      name: "events",
      component: Listing,
      meta: {
        showDetails: false
      },
      children: [
        {
          path: ":id",
          name: "EventDetails",
          components: {
            page: EventDetails
          },
          meta: {
            showDetails: true
          }
        }
      ]
    },
    {
      path: "/create",
      name: "Create",
      component: CreateEvent
    },
    {
      path: "/friends",
      name: "friends",
      component: Friends
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashBoard
    }
  ]
});
