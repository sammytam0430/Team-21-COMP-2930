<template>
    <b-modal id="signup" title="Sign Up" ok-title="Sign Up" ok-only>
        <b-form>
            <b-form-group id="name-group" label="Name" label-for="name">
                <b-form-input id="name" v-model="signup.name" type="text" required></b-form-input>
            </b-form-group>
            <b-form-group id="email-group" label="School Email" label-for="email">
                <b-form-input id="email" v-model="signup.email" type="email" required placeholder="example@my.bcit.ca"></b-form-input>
            </b-form-group>
            <b-form-group id="prefEmail-group" label="Preferred Email" label-for="prefEmail" description="We'll never share your email with anyone else.">
                <b-form-input id="prefEmail" v-model="signup.prefEmail" type="email" required placeholder="example@gmail.com"></b-form-input>
            </b-form-group>
            <b-form-group id="password-group" label="Password" label-for="password">
                <b-form-input id="password" v-model="signup.password" type="password" required></b-form-input>
            </b-form-group>
            <b-form-checkbox id="checkbox" name="checkbox" value="true" unchecked-value="false">
                I agree to the <a href="" v-on:click.prevent >Terms and Conditions</a>
            </b-form-checkbox>
        </b-form>
        <template slot="modal-footer" slot-scope="{ ok }">
            <span class="mr-2">Already have an account? 
                <a href="" v-on:click.prevent v-b-modal.login @click="$bvModal.hide('signup')">Log In</a>
            </span>
            <b-button variant="primary" @click="ok()">
                Sign Up
            </b-button>
        </template>
    </b-modal>
</template>

<script>
export default {
    name: 'signup',
    data() {
        return {
            signup: {
                email: '',
                prefEmail: '',
                name: '',
                password: ''
            }
        }
    }
}
</script>
