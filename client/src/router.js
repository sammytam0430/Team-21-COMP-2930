import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Posts from "@/components/Posts.vue";
import Profile from "@/views/Profile.vue";
import CreateEvent from "@/views/CreateEvent.vue";
import myfriend from "@/views/myfriend.vue";
import eventdetails from "@/views/eventdetails.vue";
import DashBoard from "@/views/DashBoard.vue";
import SignUpModal from "@/components/SignUpModal.vue";
import LogInModal from "@/components/LogInModal.vue";

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
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: '/listing',
      name: 'Listing',
      component: Listing
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateEvent
    },
    {
      path: "/myfriend",
      name: "myfriend",
      component: myfriend
    },
    {
      path: "/eventdetails",
      name: "eventdetails",
      component: eventdetails
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashBoard
    }
  ]
});
