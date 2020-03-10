<template>
  <div class="fifth">
    <transition name="fade">
      <div v-if="showCard" class="collapsible">
        <div class="collapsible-header">
          <p class="message-title">{{ principle.title }}</p>
        </div>
        <div class="collapsible-content">
          <div style="padding-top: 1px">
            <p class="message-description">{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Principle } from "./data";

@Component({})
export default class First extends Vue {
  @Prop() private principle!: Principle;

  showCard = false;

  mounted() {
    this.showCard = !this.showCard;
  }
}
</script>

<style lang="scss" scoped>
.fifth {
  height: calc(100% - 68px);
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message-title {
  font-size: 50px;
  font-weight: bold;
}

.message-description {
  font-size: 30px;
  max-width: 800px;
  margin: 20px 0px;
}

.collapsible-header {
  border: 1px solid #dcdee2;
  padding: 20px 50px;
}

.collapsible-content {
  padding: 0px 50px;
  border: 1px solid #dcdee2;
  border-top: none;
}
</style>