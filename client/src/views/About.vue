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
        <b-container>
            <b-row>
                <b-col cols="4"> </b-col>
                <b-col cols="4">

                    <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="3000"
                    controls
                    indicators
                    background="#ababab"

                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                    fade="true"
                    >
                
                    <b-carousel-slide
                        caption="Sam"
                        text=""
                        :img-src="require('../assets/sam.png')"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        caption="Jam"
                        text=""
                        :img-src="require('../assets/jam.png')"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        caption="Ani"
                        text=""
                        :img-src="require('../assets/ani.png')"
                    ></b-carousel-slide>
                            <b-carousel-slide
                        caption="Cha"
                        text=""
                        :img-src="require('../assets/cha.png')"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        caption="Jes"
                        text=""
                        :img-src="require('../assets/jes.png')"
                    ></b-carousel-slide>
                    </b-carousel>
    </b-col>
            </b-row>
            </b-container>

        <b-container class="bioBox">
            <b-row>
                <b-col cols="3" lg="3">
                    <span class="name"> Sam </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/sam.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    Born to race down the winding mountain passes, this sleek dude 
                    can plow through the forests' narrow paths with phenomenal speed 
                    and accuracy.  The thrill is in the adventure, and the prize is 
                    beyond the single Bergmite that can be acquired after the multi-hour 
                    chase.   Unbeknownst to those around him, he possesses powerful skills that 
                    surpasses all; these skills so intense that his peers cannot even 
                    fathom the possibility of their existence.
                </b-col>
            </b-row>
        </b-container>
        <b-container class="bioBox">
            <b-row>
                <b-col cols="3" lg="3">
                    <span class="name"> Jam </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/jam.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    On the surface, a seemingly completely clueless, dazed and frazzled guy... 
                    often looking like he's unsure if he has his shirt on forwards
                    or backwards.   Wynaut, always a good sport, and always supportive, even
                    when you just can't figure out how to hold your chopsticks correctly
                    to feed yourself some popcorn.  
                </b-col>
            </b-row>
        </b-container>
        <b-container class="bioBox">
            <b-row>
                <b-col cols="3" lg="3">
                    <span class="name"> Ani </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/ani.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    One's existence is nothing but a figment of imagination and will, 
                    where the fine lines that lay between truth, fabrication, and 
                    fantasy are blurred as we saunter on the edge of sanity...   
                    [~ C. Enga]
                    With a weakness for a perfectly rare prime rib and Mantyke, life
                    must be persevered.  However, a common pastime
                    includes meandering about
                    without any real purpose.
                </b-col>
            </b-row>
        </b-container>
        <b-container class="bioBox">
            <b-row>
                <b-col cols="3" lg="3">
                    <span class="name"> Cha </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/cha.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    A Huntail fluffiness that seems to have issues with being conscious 
                    in the morning hours. Punctuality may be a problem, but the 
                    dedication and devotion to the
                    challenges of life are unparalleled.  With massive overdosing on 
                    caffeine and 
                    monosaccharides on a daily basis, it is astonishing that the coccyx
                    has not exploded into oblivion. 
                </b-col>
            </b-row>
        </b-container>
        <b-container class="bioBox">
            <b-row>
                <b-col cols="3" lg="3">
                    <span class="name"> Jes </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" lg="3">
                    <b-img center class="bioPic" :src="require('../assets/jes.png')"/>
                </b-col>
                <b-col class="blurb" lg="9" cols="12">
                    Always punctual, bordering on being excessively early for any
                    meeting or occasion.  Great positive attitude, no matter how 
                    grim or destitute the present situation may seem.  Reliable to 
                    be present through any weather or calamity like a Finneon, ready
                    to battle whatever task that needs to be taken.   
                </b-col>
            </b-row>
        </b-container>
            <b-container class="p-5">
                <b-img  class="comic" :src="require('../assets/blip.png')"/>
            </b-container>
    </b-container>
</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {       
    };
  },
  
}
</script>   

<style>
.story {
    font-size: x-large;
}
.mid {
    padding: 30px;
}
.title {
    font-size: 40px;
}.comic {
    width: 100%;
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
.name {
    font-family: cursive;
    font-size: 200%;
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