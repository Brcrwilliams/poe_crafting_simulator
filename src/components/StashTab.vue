<template>
  <div class="stashPanel">
    <div class="stashTabContainer">
      <div class="currencyTab">
        <CurrencyContainer v-for="c in currency" v-bind:key="c.name" v-bind:currency="c"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Currency from "../model/Currency";
import CurrencyContainer from "./CurrencyContainer.vue";

@Component({
  components: {
    CurrencyContainer,
  },
})
export default class StashTab extends Vue {
  currency = Currency.load();
}
</script>

<style>
.stashPanel {
  float: left;
  position: relative;
  width: 600px;
  height: 781px;
  background: url(../assets/Stash.png);
}

.stashTabContainer {
  position: absolute;
  left: 15.213px;
  top: 143.363px;
  width: 577px;
  text-align: center;
}

.currencyTab {
  background-image: url(../assets/CurrencyTab.png);
  position: absolute;
  width: 569px;
  height: 569px;
  border: 3px solid transparent;
  border-radius: 5px;
  top: -3px;
  left: 2px;
  z-index: 6;
}
</style>
