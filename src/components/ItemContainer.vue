<template>
  <div class="itemContainer">
    <div class="item">
      <img :src="item.assetPath"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Item from "../model/Item";

@Component
export default class ItemContainer extends Vue {
  @Prop() private item: Item
}
</script>

<style scoped>
.itemContainer {
  position: absolute;
  left: 250.101px;
  top: 249.493px;
}

.item {

}
</style>
