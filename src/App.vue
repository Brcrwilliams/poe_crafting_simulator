<template>
  <div id="app">
    <StashTab/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StashTab from "./components/StashTab.vue";

@Component({
  components: {
    StashTab,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  background: #000 url('./assets/Shaper.jpg') no-repeat top center;
  background-size: cover;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
