<template>
    
    <b-container class="main">
        <b-container class="mid">
            <b-row class="m-5">
                <span class="title"> before konnect... </span>
            </b-row>
            <b-row>
                <b-col class="story" md="7" cols="12">
                    "Blah blah blah.... we sat around and bored.  Blah blah blah.
                    We wanted to do stuff but didn't have enough peeps.
                    Blah blah blah.  Blah blah blah.  
                    Wouldn't it be neat if we could find others to play with.
                    Lonely sad time between classes now gone...
                    Blah blah blah.... hoorah!"
                </b-col>
                <b-col md="5" cols="12">
                    <img id="team" src="../assets/team.jpg"/>
                </b-col>
            </b-row>
        </b-container>
        <hr/>
        <b-row  class="mid">
            <h1> Meet the Team  </h1>
        </b-row>
  





        <b-container class="bioBox">
            <b-row>
                <b-col class="nameBlock" cols="3" lg="3">
                    <span class="name"> Sam </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/sam.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                </b-col>
            </b-row>
        </b-container>

        <b-container class="bioBox">
        
        </b-container>


        <b-container class="bioBox">
            <b-row>
                <b-col class="nameBlock" cols="3" lg="3">
                    <span class="name"> Jam </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/jam.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                </b-col>
            </b-row>
        </b-container>

        <b-container class="bioBox">
        
        </b-container>


        <b-container class="bioBox">
            <b-row>
                <b-col class="nameBlock" cols="3" lg="3">
                    <span class="name"> Ani </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/ani.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                </b-col>
            </b-row>
        </b-container>

        <b-container class="bioBox">
        
        </b-container>


        <b-container class="bioBox">
            <b-row>
                <b-col class="nameBlock" cols="3" lg="3">
                    <span class="name"> Cha </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/cha.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                </b-col>
            </b-row>
        </b-container>


        <b-container class="bioBox">
        
        </b-container>


        <b-container class="bioBox">
            <b-row>
                <b-col class="nameBlock" cols="3" lg="3">
                    <span class="name"> Jes </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/jes.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                    some crazy long ass blurb about how awesome team member is.
                </b-col>
            </b-row>
        </b-container>

            <b-img  class="comic" :src="require('../assets/blip.png')"/>
          
        
    </b-container>





</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
        
    };
  }
}
</script>   

<style>

.comic {
    width: 100%;
}

.main {

    
}
.story {
    font-size: x-large;
}
.mid {
    padding: 30px;
}

.title {
    font-size: 40px;
}

.sq {
    width: 100px;
    height: 100px;
}

.bioPic {
    width: 200px;
    height: 240px;
    margin: 20px;
    border-radius: 20%;


}

.blurb {
    font-size: x-large;
    padding: 20px;
    margin: 0px;
}

.nameBlock {
    display: block;
}
.name {
    font-family: cursive;
    font-size: 200%;
    text-align: center; 
    

}
#team {
    width: 90%;
    border-radius: 5%;
    margin: 10px;
    
}

.bioBox {
    border: 1px solid rgb(238, 234, 248);
    border-radius: 2%;
    background-color: rgb(226, 235, 240);
    margin: 30px;
    padding: 20px; 
}
</style>