<template>
    <div class="interestselection">
        <b-button v-b-modal.interestmodal>Click to select your interests</b-button>
            <b-modal id="interestmodal" title="Select your interests">
                <b-container>
                    <b-row>
                        <b-col cols="6" class="px-0">    
                                <label v-bind:key="interesto" v-for="interesto in interestsColumn">
                                    <input type="checkbox">
                                    <span class="styleCheckbox">&nbsp; {{ interesto.name }} </span>
                                </label>
                        </b-col>
                        
                        <b-col class="px-0 mx-0">
                        </b-col>
                        
                        <b-col cols="4" class="px-0 float-right">
                                <label for="checkbox6" v-bind:key="interest" v-for="interest in interestsSecondColumn">
                                    <input type="checkbox">
                                    <span class="styleCheckbox">&nbsp; {{ interest.name }} </span>
                                </label>
                        </b-col>
                    </b-row>
                </b-container>
                
                    <template slot="modal-footer" slot-scope="{ ok, cancel }">
                        <b-button size="sm" variant="danger" @click="cancel()">
                            Cancel
                        </b-button>
                        <b-button size="sm" variant="primary" @click="ok()">
                            OK
                        </b-button>
                    </template>  
            </b-modal>
    </div>
</template>

<script>
export default {
    name: "interestselection",
    data() {
        return {
            interestsColumn: [
                {
                    name: 'Outdoor Sports',
                },
                {
                    name: 'Indoor Sports',
                },
                {
                    name: 'Card/Board Games',
                },
                {
                    name: 'PC Games',
                },
                {
                    name: 'Mobile Games',
                },
            ],

            interestsSecondColumn: [
                {
                    name: 'Literature',
                },
                {
                    name: 'Music',
                },
                {
                    name: 'Dancing',
                },
                {
                    name: 'Food',
                },
                {
                    name: 'Others',
                },
            ]

        }
    }
}
</script>

<style>
    .styleCheckbox{
        font-size: 20px;
    }

    @media only screen and (min-width: 321px) and (max-width: 426px){
        .styleCheckbox{
            font-size: 16px;
        }
    }
    
    @media only screen and (max-width: 320px){
        .styleCheckbox{
            font-size: 13px;
        }

        
    }
</style>
