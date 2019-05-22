<template>
  <b-container fluid class="mt-5 py-5 bg-dark text-white">
    <router-link :to="{path: '/about'}">
      <font-awesome-icon color="pink" id="about" size="lg" fixed-width icon="spa"/>
      <b-tooltip target="about" title="About" placement="top"></b-tooltip>
    </router-link>
    <span class="pl-2">Created by Team 21 for COMP 2930 Project 2 ;)</span>
    <a class="pl-2" target="_blank" href="https://www.youtube.com/watch?v=rVMMFCaHYMQ">
      <font-awesome-icon id="youtube" color="white" size="lg" fixed-width :icon="['fab', 'youtube']"/>
      <b-tooltip target="youtube" title="Pitch Video" placement="top"></b-tooltip>

    </a>
    <a class="pl-2" target="_blank" href="https://github.com/sammytam0430/Team-21-COMP-2930">
      <font-awesome-icon id="github" color="white" size="lg" fixed-width :icon="['fab', 'github-alt']"/>
      <b-tooltip target="github" title="Github Repo" placement="top"></b-tooltip>
    </a>
  </b-container>
</template>
