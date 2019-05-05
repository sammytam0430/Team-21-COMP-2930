<template>
    <b-navbar class="w100" toggleable="md" type="light" variant="light" sticky>
        <b-navbar-brand href="#">
            <img src="../assets/logo.png" alt="Konnect logo">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#"><SignUpBtn /></b-nav-item>
                    <b-nav-item href="#"><LogInBtn /></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import SignUpBtn from '@/components/SignUpBtn.vue'
import LogInBtn from '@/components/LogInBtn.vue'

export default {
    name: 'navbar',
    components: {
        SignUpBtn,
        LogInBtn,

    }
}
</script>

<style scoped>
    img {
        width: 50%;
    }
</style>
