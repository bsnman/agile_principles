<template>
  <div class="first">
    <transition name="lightSpeed">
      <p v-if="showTitle" class="message-title">{{ principle.title }}</p>
    </transition>

    <br/>
    <br/>

    <transition name="lightSpeed">
      <p v-if="showDescription" class="message-description">{{ principle.description }}</p>
    </transition>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Principle } from "./data";

@Component({})
export default class First extends Vue {
  @Prop() private principle!: Principle;

  showTitle = false;
  showDescription = false;

  mounted() {
    this.showTitle = !this.showTitle;
    this.showDescription = !this.showDescription;
  }
}
</script>

<style lang="scss" scoped>
.first {
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
}
</style>