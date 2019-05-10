import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import CreateEvent from "@/views/CreateEvent.vue";
import Friends from "@/views/Friends.vue";
import EventDetails from "@/views/EventDetails.vue";
import DashBoard from "@/views/DashBoard.vue";
import SignUpModal from "@/components/SignUpModal.vue";
import LogInModal from "@/components/LogInModal.vue";
import Listing from "@/views/Listing.vue";
import EditInterests from "./views/EditInterests.vue";

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
      path: "/listing",
      name: "Listing",
      component: Listing
    },
    {
      path: "/create",
      name: "Create",
      component: CreateEvent
    },
    {
      path: "/myfriend",
      name: "myfriend",
      component: Friends
    },
    {
      path: "/eventdetails",
      name: "eventdetails",
      component: EventDetails
    },
    {
      path: "/interests",
      name: "interests",
      component: EditInterests
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashBoard
    }
  ]
});
