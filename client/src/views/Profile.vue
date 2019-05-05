<template>

<b-container>

<b-row class="m-5">
    <b-col cols="5" class="boo">
      <div> 
        <img class="pic" src="../assets/blop.png" />
      </div>
    </b-col>


    <b-col> 
      <b-row class="mb-3">
        <b-col> <span> First Name: </span> </b-col>
        <b-col> <EditField label="First Name:" v-model="firstName"></EditField> </b-col>
      
      </b-row>
    
      <b-row class="mb-3">
        
        <b-col> <span> Last Name: </span> </b-col>
        <b-col> {{lastName}} </b-col>
      </b-row>
         
      <b-row class="mb-3">
        
        <b-col> <span> Email: </span> </b-col>
        <b-col>  {{email}} </b-col>
      </b-row>


      <b-row class="mb-3">
        
        <b-col> <span> Preferred Email: </span> </b-col>
        <b-col>  {{prefEmail}} </b-col>
      </b-row>

      <b-row class="mb-3">
        
        <b-col> <span> Score </span> </b-col>
        <b-col>  {{score}} </b-col>
      </b-row>

    </b-col>



</b-row>

<b-row>
  <b-col class="mb-5">    <span> Interests: </span>  </b-col>
  <b-col>  {{interests}}  </b-col>
</b-row>

<b-row>
    <b-col class="mb-5"> <span> Blurb: </span> </b-col>
    <b-col> {{blurb}} </b-col>
</b-row>


<p class="boop"> <img src="../assets/blip.png" width="50%" /> </p>
<p> fifty-seven  </p>
<p> fifty-seven  </p>


<EditField label="Last Name:" v-model="lastName"></EditField>
</b-container>



</template>





<script>
// @ is an alias to /src
import EditField from '@/components/EditField.vue'


  
export default {
  name: 'profile',
  runtimeCompiler: true,
  components: { EditField
  },
  data () {
      return {
        firstName: 'Cookie',
        lastName: 'Monster',
        email: 'cmonster27@my.bcit.com',
        prefEmail: 'cmooshie@gmail.com',
        score: '15',
        interests: 'blip, blop and bloop',
        blurb: 'something nothing whatever'
      }
  }
}





</script>


<style>
p {
  background: #63A6C1;
} 
.boo {
  background: #3A7395;
}
.boop {
  background: #252C3A;

}
.pic {
  width: 100%;
  
}
</style>