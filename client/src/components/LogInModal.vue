<template>
    <b-modal id="login" title="Log In" ok-title="Log In" ok-only>
        <b-form>
            <b-form-group id="email-group" label="School Email" label-for="login-email">
                <b-form-input id="login-email" v-model="login.email" type="email" required placeholder="example@my.bcit.ca"></b-form-input>
            </b-form-group>
            <b-form-group id="password-group" label="Password" label-for="login-password">
                <b-form-input id="login-password" v-model="login.password" type="password" required></b-form-input>
            </b-form-group>
            <b-form-checkbox id="login-checkbox" name="checkbox" value="true" unchecked-value="false">
                Remember Me
            </b-form-checkbox><br>
            <a href="" v-on:click.prevent>Forgot Password?</a>
        </b-form>
        <template slot="modal-footer" slot-scope="{ ok }">
            <span class="mr-2">Don't have an account? 
                <a href="" v-on:click.prevent v-b-modal.signup @click="$bvModal.hide('login')">Sign Up</a>
            </span>
            <b-button variant="primary" @click="ok()">
                Log In
            </b-button>
        </template>
    </b-modal>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        }
    }
}
</script>
