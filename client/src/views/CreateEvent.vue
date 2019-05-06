<style>
  #invitees {
    border: 1px solid black;
  }
</style>


<template>
  <b-container>
    <b-row>
    <b-col lg="8">
      <b-form-row>
        <div>Event Name:<br/></div>
        <input type="text" name="eventName" required/>
      </b-form-row>
      
      <b-form-row>
        <div>Event Type:<br/></div>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-form-row>

      <b-form-row>
        <div>Description (optional)</div>
        <textarea rows="5" cols="50" name="description"></textarea>
      </b-form-row>

      <b-form-row>
        Start Time: <input type="time" name="startTime" required/>
        <input type="date" name="startDate" required/> <br/>
      </b-form-row>

      <b-form-row>
        End Time:&nbsp;&nbsp;<input type="time" name="endTime" required/> <br/>
      </b-form-row>

      <b-form-row>
        I am looking for <input type="number" name="size" min="0" max="999" style="max-width: 3em;" required/> people
      </b-form-row>
    </b-col>

    <b-col lg="3">
      <b-form-row>
        <div>Invite Friends (optional)</div>
      </b-form-row>

      <b-form-row>
        <input type="text" name="invite"/>
        <input type="submit" value="Add"/>
      </b-form-row>

      <b-form-row>
        <div>Invitees</div>
      </b-form-row>

      <b-form-row>
        <b-form-textarea id="invitees" plaintext :value="text" rows="10"></b-form-textarea>
      </b-form-row>

      <b-form-row>
        <input type="submit" value="Create Event"/>
      </b-form-row>
    </b-col>
  </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'createEvent',
  components: {
  },

  data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an event type' },
          { value: 'outdoor', text: 'Outdoor Sports' },
          { value: 'indoor', text: 'Indoor Sports' },
          { value: 'card/board', text: 'Card/Board Games' },
          { value: 'pc', text: 'PC Games'},
          { value: 'mobile', text: 'Mobile Games'},
          { value: 'literature', text: 'Literature'},
          { value: 'music', text: 'Music'},
          { value: 'dance', text: 'Dance'},
          { value: 'food', text: 'Food'},
          { value: 'other', text: 'Other'},
        ],
        text: "This is some text.\nIt is read only and doesn't look like an input."
      }
    }
}

</script>

