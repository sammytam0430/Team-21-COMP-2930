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
        <b-card
          v-bind:key="particularFriend.name"
          v-for="particularFriend in filteredFriends"
          class="mt-3"
        >
          <b-row>
            <b-col>
              <b-img class="profileImage" thumbnail rounded="circle" v-bind:src="particularFriend.image" left></b-img>
            </b-col>
            <b-col class="col-lg-8 col-md-8 col-5 float-left friendName">{{ particularFriend.name }}</b-col>
            <b-col class="favToggleButtonDiv">
              <b-button
                class="favToggleButton"
                size="sm"
                variant="outline-primary"
                :pressed.sync="particularFriend.isFav"
              >{{particularFriend.isFav ? "UnFavourite" : "Favourite"}}</b-button>
            </b-col> 
          </b-row>
        </b-card>
      </b-container>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "myfriend",
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      searchVal: "",
      favFriend: "",
      friends: [
        {
          name: "Subbi",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/27750382_1330370393733953_1174282148906532749_n.jpg?_nc_cat=103&_nc_ht=scontent.fyvr4-1.fna&oh=1cfa21980442d4ff4b880706c27b7a25&oe=5D63D350",
          isFav: true
        },
        {
          name: "Supan",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/16807019_679165485588041_1840168440289876739_n.jpg?_nc_cat=111&_nc_ht=scontent.fyvr4-1.fna&oh=98def95561dadba79f1ce104450a615e&oe=5D5C6D61",
          isFav: false
        },
        {
          name: "Ammy",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/32157761_579586035752798_2486980158251073536_n.jpg?_nc_cat=100&_nc_ht=scontent.fyvr4-1.fna&oh=539de1ff9fbf5c21bec26e21b4d31089&oe=5D6F8986",
          isFav: true
        },
        {
          name: "Gursewak",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/15027914_208707982868232_8865340048168987118_n.jpg?_nc_cat=106&_nc_ht=scontent.fyvr4-1.fna&oh=660eada01f0ceffba8ea1bf10abba994&oe=5D611794",
          isFav: false
        },
        {
          name: "Manni",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/27657813_1172116956255021_4917854906210109265_n.jpg?_nc_cat=111&_nc_ht=scontent.fyvr4-1.fna&oh=455c8360d7671d2cc908cbab02b951d7&oe=5D2E09DD",
          isFav: true
        },
        {
          name: "Savi",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/15338799_739667086200318_2402459550201689507_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr4-1.fna&oh=398ee0c42e8de2d5cf93effa247223c6&oe=5D745E34",
          isFav: false
        },
        {
          name: "Omesh",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/40105743_1071901782986271_2715163885127598080_n.jpg?_nc_cat=105&_nc_ht=scontent.fyvr4-1.fna&oh=70bb11feec4651f8392c74b72c995992&oe=5D60B670",
          isFav: true
        },
        {
          name: "Gauru",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/l/t1.0-9/18425122_1790763224574251_1381991716934754119_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr4-1.fna&oh=aad65df9dab6d0d5854845e1c06dff1c&oe=5D30CDAE",
          isFav: false
        },
        {
          name: "Kaire",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/14523278_1725836601075262_4159456348292377899_n.jpg?_nc_cat=101&_nc_ht=scontent.fyvr4-1.fna&oh=0d176ce96bd0244a021c4f402e6db531&oe=5D62F988",
          isFav: true
        },
        {
          name: "Samosa",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/56177035_2257132621232537_8940362000177823744_n.jpg?_nc_cat=111&_nc_ht=scontent.fyvr4-1.fna&oh=6461a0d8714596af84c21eb9a72f67c4&oe=5D61CAF2",
          isFav: false
        },
        {
          name: "Gurleen",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/37511368_624645264582265_6614488758144204800_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr4-1.fna&oh=a4c41afeb49fdc09ef4c71e2ed7fcb72&oe=5D715604",
          isFav: true
        },
        {
          name: "Happy",
          image:
            "https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/48914143_1262837580530514_3657836673191903232_n.jpg?_nc_cat=110&_nc_ht=scontent.fyvr4-1.fna&oh=ebc78c8ebdf7d16d696e898d9b768848&oe=5D7636B3",
          isFav: false
        }
      ]
    };
  },

  computed: {
    filteredFriends() {
      let filteredList = this.friends.filter(item => {
        let matchBoolean = item.name
          .toLowerCase()
          .match(this.searchVal.toLowerCase());

        return matchBoolean;
      });
      return filteredList;
    }
  }
};
</script>


<style scoped>

.profileImage{
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

  .profileImage{
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

  .profileImage{
    height: 62px;
    width: 62px;
  }

  .form-control{
    font-size: 15px;
  }
}

@media only screen and (min-width: 375px) and (max-width: 424px){
  .friendName {
    font-size: 15px;
    padding-left: 0;
  }

  .favToggleButton {
    font-size: 9px;
  }

  .profileImage{
  height: 58px;
  width: 58px;
  }

  .favToggleButtonDiv{
    padding-left: 0;
  }

  .form-control{
    font-size: 15px;
  }
}

@media only screen and (max-width: 374px){
  .friendName {
    font-size: 15px;
    padding-left: 0;
  }

  .favToggleButton {
    font-size: 8px;
  }

  .profileImage{
  height: 50px;
  width: 50px;
  }

  .favToggleButtonDiv{
    padding-right: 0;
    padding-left: 0;
  }

  .form-control{
    font-size: 13px;
  }
} 
</style>