<template>
  <div class="interestselection">
    <b-button v-b-modal.interestmodal>Click to select your interests</b-button>
    <b-modal id="interestmodal" title="Select your interests">
      <b-container>
        <b-row>
          <b-col cols="6" class="px-0">
            <input type="checkbox" name="checkbox1" id="checkbox1">
            <label for="checkbox1">
              <span class="styleCheckbox">&nbsp;&nbsp;Outdoor Sports</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox2" id="checkbox2">
            <label for="checkbox2">
              <span class="styleCheckbox">&nbsp;&nbsp;Indoor Sports</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox3" id="checkbox3">
            <label for="checkbox3">
              <span class="styleCheckbox">&nbsp;&nbsp;Card/Board Games</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox4" id="checkbox4">
            <label for="checkbox4">
              <span class="styleCheckbox">&nbsp;&nbsp;PC Games</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox5" id="checkbox5">
            <label for="checkbox5">
              <span class="styleCheckbox">&nbsp;&nbsp;Mobile Games</span>
            </label>
            <br>
          </b-col>

          <b-col class="px-0 mx-0"></b-col>

          <b-col cols="4" class="px-0 float-right">
            <input type="checkbox" name="checkbox6" id="checkbox6">
            <label for="checkbox6">
              <span class="styleCheckbox">&nbsp;&nbsp;Literature</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox7" id="checkbox7">
            <label for="checkbox7">
              <span class="styleCheckbox">&nbsp;&nbsp;Music</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox8" id="checkbox8">
            <label for="checkbox8">
              <span class="styleCheckbox">&nbsp;&nbsp;Dancing</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox9" id="checkbox9">
            <label for="checkbox9">
              <span class="styleCheckbox">&nbsp;&nbsp;Food</span>
            </label>
            <br>
            <input type="checkbox" name="checkbox10" id="checkbox10">
            <label for="checkbox10">
              <span class="styleCheckbox">&nbsp;&nbsp;Others</span>
            </label>
            <br>
          </b-col>
        </b-row>
      </b-container>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <b-button size="sm" variant="danger" @click="cancel()">Cancel</b-button>
        <b-button size="sm" variant="primary" @click="ok()">OK</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "interestselection"
};
</script>

<style>
.styleCheckbox {
  font-size: 20px;
}

@media only screen and (min-width: 321px) and (max-width: 426px) {
  .styleCheckbox {
    font-size: 16px;
  }
}

@media only screen and (max-width: 320px) {
  .styleCheckbox {
    font-size: 13px;
  }
}
</style>
