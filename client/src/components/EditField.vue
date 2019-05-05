<template>
      <p>
    <span v-show="!editing">
      {{value}}
    </span>
    <span v-show="editing" >
      <input :value="value"
             @input="$emit('input', $event.target.value)"
             @keydown.enter="editing=false"
             type="text" 
             class="form-control" >
    </span>
    <button v-show="editing" @click="editing=false">Done</button>
    <button v-show="!editing" @click="editing=true">Edit</button>
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
