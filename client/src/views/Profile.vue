<template>

<b-container class="p-5">

<b-container>

<div class="boo">
<b-row class="m-5">
    <b-col cols="3">
      <div> 
        <img class="pic" src="../assets/blop.png" />
      </div>
    </b-col>

    <b-col cols="1"> </b-col>

    <b-col> 
      <b-row>
        <b-col cols="3"> <span> First Name: </span> </b-col>
        <b-col> <EditField label="First Name:" v-model="firstName"></EditField> </b-col>
      
      </b-row>
    
      <b-row>
        
        <b-col cols="3"> <span> Last Name: </span> </b-col>
        <b-col> <EditField label="Last Name:" v-model="lastName"></EditField> </b-col>
      </b-row>
         
      <b-row class="mb-3">
        
        <b-col cols="3"> <span> Email: </span> </b-col>
        <b-col> {{email}} </b-col>
      </b-row>


      <b-row>
        
        <b-col cols="3"> <span> Preferred Email: </span> </b-col>
        <b-col> <EditField label="Preferred Email:" v-model="prefEmail"></EditField> </b-col>
      </b-row>

      <b-row>
        
        <b-col cols="3"> <span> Score </span> </b-col>
        <b-col>  {{score}} </b-col>
      </b-row>

    </b-col>



</b-row>


<b-row>
  <b-col cols="1"> </b-col>
  <b-col cols="3" class="mb-3">    <span> Interests: </span>  </b-col>
  <b-col>  {{interests}}  </b-col>
</b-row>

<b-row>
    <b-col cols="1"> </b-col>
    <b-col cols="3" class="mb-3"> <span> Blurb: </span> </b-col>
    <b-col> <EditField label="Blurb:" v-model="blurb"></EditField> </b-col>
</b-row>

</div>

</b-container>

</b-container>


</template>





<script>
// @ is an alias to /src
import EditField from '@/components/EditField.vue'


  
export default {
  name: 'profile',
  runtimeCompiler: true,
  components: { EditField},
  data () {
      return {
        firstName: 'Cookie',
        lastName: 'Monster',
        email: 'cmonster27@my.bcit.com',
        prefEmail: 'cmooshie@gmail.com',
        score: '15',
        interests: 'blip, blop and bloop',
        blurb: 'something nothing whatever - likes random days of nothingness and sitting in silence'
      }
  }
}





</script>


<style>
p {
  background: #63A6C1;
} 
.boo {
  background: #63A6C1;
  border: 3px solid black;
}
.boop {
  background: #252C3A;

}
.pic {
  width: 100%;  
}


</style>