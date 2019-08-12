<template>
  <div class="itemContainer">
    <div class="item" :class="equip.getBackgroundClass()">
      <img :src="equip.assetPath"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Equipment from "../model/Equipment";

@Component
export default class EquipmentContainer extends Vue {
  @Prop() private equip: Equipment
}
</script>

<style scoped>
.itemContainer {
  position: absolute;
  left: 250.101px;
  top: 249.493px;
  transform: scale(0.8077);
  transform-origin: top left;
}

.item {
  width: 94.929px;
  display: inline-block;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
}

.shaper-2x4 {
  background-image: url(../assets/backgrounds/Shaper-2x4.png);
}
</style>
