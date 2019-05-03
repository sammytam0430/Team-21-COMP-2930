<template>
    <b-form  v-on:submit.prevent="">
        <b-form-group id="what-group" label="I'm looking for people to" label-for="what">
            <b-form-input id="what" v-model="form.name" type="text" required placeholder="Anything"></b-form-input>
        </b-form-group>
        <b-form-group id="where-group" label="Where" label-for="where">
            <b-form-input id="where" v-model="form.location" type="text" required placeholder="Anywhere"></b-form-input>
        </b-form-group>
        <b-form-group id="when-group" label="When" label-for="when">
            <b-container class="px-0">
                <b-form-row>
                    <b-col>
                            <b-form-input id="when" v-model="form.date" type="date" required placeholder="mm-dd-yyyy"></b-form-input>
                    </b-col>
                    <b-col cols="3">
                        <b-form-checkbox v-on:checked="now = !now" id="checkbox-1" v-model="now" name="checkbox-1" value="true" unchecked-value="false"> 
                            Now 
                        </b-form-checkbox>
                    </b-col>
                </b-form-row>
            </b-container>
        </b-form-group>
        <b-container class="px-0">
            <b-form-row>
                <b-col>
                    <b-form-group id="start-group" label="Start" label-for="start">
                        <b-form-input id="start" v-model="form.start" type="time" required placeholder="mm/dd/yyyy"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="end-group" label="End" label-for="end">
                        <b-form-input id="end" v-model="form.end" type="time" required placeholder="mm/dd/yyyy"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>
        </b-container>
        <b-button type="submit" variant="primary">Search</b-button>
    </b-form>
</template>

<script>
export default {
    name: 'greetingForm',
    data() {
        return {
            now: false,
            form: {
                date: '',
                end: '',
                location: '',
                name: '',
                start: ''
            }
        }
    }
}
</script>
