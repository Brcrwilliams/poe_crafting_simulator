<template>
  <div class="currencyContainer"
  v-bind:style="{ left: currency.positionLeft, top: currency.positionTop }"
  v-on:click="handleClick">
    <div class="iconContainer">
      <img :src="currency.assetPath" />
      <span class="stackSize">{{ currency.quantity }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Currency from "../model/Currency";

const LEFT = 0;
const RIGHT = 2;

@Component
export default class CurrencyContainer extends Vue {
  @Prop() private currency: Currency
  cursorOccupied = false
  heldCurrency: Currency | null

  handleClick(event: MouseEvent) {
    if (event.button === RIGHT && !this.cursorOccupied) {
      this.cursorOccupied = true;
      this.heldCurrency = this.currency;
    }

    if (event.button === LEFT) {
      if (this.cursorOccupied && this.heldCurrency != null) {
        this.heldCurrency.consume();
      }
      this.cursorOccupied = false;
      this.heldCurrency = null;
    }
  }
}
</script>

<style scoped>
.currencyContainer {
  transform: scale(0.8077);
  transform-origin: top left;
  position: absolute;
}

.iconContainer {
  position: relative;
  text-align: center;
  width: 47.4645px;
}

.stackSize {
  font-size: 18px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: -1px;
  left: 4px;
  text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000, 1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000, -1px -1px 3px #000, 0 -1px 3px #000, 1px -1px 0 #000, 1px 0 3px #000, 1px 1px 3px #000, 0 1px 3px #000, -1px 1px 3px #000, -1px 0 3px #000;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
</style>
