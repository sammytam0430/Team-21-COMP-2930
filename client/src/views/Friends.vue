<template>
  <div class="myfriend">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
    <b-container>
      <div class="input-group md-form mt-3">
        <div class="input-group-prepend">
          <span class="input-group-text purple lighten-3">
            <i class="fas fa-search text-white"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control my-0 py-1"
          placeholder="Search your friends..."
          v-model="searchVal"
        >
      </div>
    </b-container>
    <b-container class="friendList bg-light">
      <b-container>
        <b-card v-bind:key="friend.userID" v-for="friend in filteredFriends" class="mt-3">
          <b-row>
            <b-col>
              <b-img class="profileImage" thumbnail rounded="circle" v-bind:src="friend.image" left></b-img>
            </b-col>
            <b-col class="col-lg-8 col-md-8 col-5 float-left friendName">
              <router-link :to="`/user/${friend.userID}`">{{ friend.fname }} {{ friend.lname }}</router-link>
            </b-col>
            <b-col class="favToggleButtonDiv">
              <b-button
                class="favToggleButton"
                size="sm"
                variant="outline-primary"
                :pressed.sync="friend.favourite"
              >{{friend.favourite ? "UnFavourite" : "Favourite"}}</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-container>
    </b-container>
  </div>
</template>


<script>
import FriendsService from "@/services/FriendsService";
export default {
  name: "friends",
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      searchVal: "",
      favFriend: "",
      friends: []
    };
  },
  computed: {
    filteredFriends() {
      let filteredList = this.friends.filter(friend => {
        let matchBoolean = `${friend.fname} ${friend.lname}`
          .toLowerCase()
          .match(this.searchVal.toLowerCase());

        return matchBoolean;
      });
      return filteredList;
    }
  },
  methods: {
    async getFriends() {
      const response = await FriendsService.getFriends(
        this.$session.get("currentUser")
      );
      this.friends = response.data;
    }
  },
  mounted() {
    this.getFriends();
  }
};
</script>


<style scoped>
.profileImage {
  height: 110px;
  width: 110px;
}

.input-group.md-form input {
  border: 1px solid #bdbdbd;
  border-top-right-radius: 0.25rem;
}

.friendName {
  font-size: 18px;
  display: flex;
  align-items: center;
}

.favToggleButtonDiv {
  font-size: 12px;
  display: flex;
  align-items: center;
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .friendName {
    font-size: 17px;
  }

  .favToggleButton {
    font-size: 11px;
  }

  .profileImage {
    height: 73px;
    width: 73px;
  }
}

@media only screen and (min-width: 425px) and (max-width: 767px) {
  .friendName {
    font-size: 17px;
    padding-left: 0;
  }

  .favToggleButton {
    font-size: 11px;
  }

  .profileImage {
    height: 62px;
    width: 62px;
  }

  .form-control {
    font-size: 15px;
  }
}

@media only screen and (min-width: 375px) and (max-width: 424px) {
  .friendName {
    font-size: 15px;
    padding-left: 0;
  }

  .favToggleButton {
    font-size: 9px;
  }

  .profileImage {
    height: 58px;
    width: 58px;
  }

  .favToggleButtonDiv {
    padding-left: 0;
  }

  .form-control {
    font-size: 15px;
  }
}

@media only screen and (max-width: 374px) {
  .friendName {
    font-size: 15px;
    padding-left: 0;
  }

  .favToggleButton {
    font-size: 8px;
  }

  .profileImage {
    height: 50px;
    width: 50px;
  }

  .favToggleButtonDiv {
    padding-right: 0;
    padding-left: 0;
  }

  .form-control {
    font-size: 13px;
  }
}
</style>