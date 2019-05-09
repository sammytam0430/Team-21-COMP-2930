<template>
      <p>
    <span v-show="!editing">
      {{value}} 
    </span>
    <span v-show="editing" >
      <input :value="value"
             @input="$emit('input', $event.target.value)"
             @keydown.enter="editing=false"
             @blur="editing=false"
             type="text" 
             class="form-control"
             autofocus=true>
    </span>


    <img src="../assets/edits.png" class="ml-5" v-show="!editing" @click="editing=true"/>
  </p>
</template>

<script>
export default {
    name: "EditField",
    props: ['label', 'value'],
  data(){
    return {
      editing: false,
    }
}
}

</script>
