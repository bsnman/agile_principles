<template>
  <div class="second">
    <div class="card">
      <div class="card-header">
        <transition name="zoom">
          <p v-if="showTitle" class="message-title">{{ principle.title }}</p>
        </transition>
      </div>
      <transition name="curtain-down">
        <div v-if="showDescription" class="card-content">
          <p class="message-description">{{ principle.description }}</p>
        </div>
      </transition>
    </div>
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
.second {
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

.card {
  border: 1px solid #dcdee2;
  border-radius: 5px;
  box-shadow: 0 1px 2px 1px #00000011;

  transition: box-shadow 0.3s, transform 0.3s;
}

.card:hover {
  box-shadow: 0 3px 6px 3px #00000011;
}

.card-header {
  padding: 20px 50px;
  border-bottom: 1px solid #dcdee2;
}

.card-content {
  padding: 0px 50px;
}
</style>