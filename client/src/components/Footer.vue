<template>
    <b-container fluid class="mt-5 py-5 bg-secondary text-light">
        
        

        <router-link :to="{path: '/about'}">
            <font-awesome-icon color="pink"  id="about" size="lg" fixed-width icon="spa"/>
            
            <b-tooltip target="about" title="About" placement="top"></b-tooltip>
        </router-link>
    
        Created by Team 21 for COMP 2930 Project 2 ;)
    
    </b-container>
</template>
