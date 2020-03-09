<template>
  <div class="home">
    <div @click="moveLeft" class="chevron chevron--left">
      <font-awesome-icon icon="chevron-left"></font-awesome-icon>
    </div>

    <component v-bind:is="principle.component" :principle="principle" />

    <div @click="moveRight" class="chevron chevron--right">
      <font-awesome-icon icon="chevron-right"></font-awesome-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import principles from "../constants/principles.json";

import First from "../components/Principles/First.vue";
import Second from "../components/Principles/Second.vue";

@Component({
  components: {
    First,
    Second
  }
})
export default class Home extends Vue {
  page = 0

  get principles() {
    return principles
  }

  get principle() {
    return this.principles[this.page]
  }

  moveLeft() {
    if (this.page <= 0) {
      return;
    }

    this.page = this.page - 1;
  }
  
  moveRight() {
    if (this.page >= this.principles.length) {
      return;
    }

    this.page = this.page + 1;
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.chevron {
  width: 60px;
  display: flex;
  align-items: center;
  font-size: 50px;
  padding: 30px;
  cursor: pointer;

  opacity: 0.3;
  background: transparent;
  transition: opacity 0.3s, background 0.3s;
}

.chevron:hover {
  opacity: 1;
}

.chevron--left {
  justify-content: flex-start;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}

.chevron--left:hover {
  background: linear-gradient(90deg, #00000016, #00000000);
}

.chevron--right {
  justify-content: flex-end;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.chevron--right:hover {
  background: linear-gradient(-90deg, #00000016, #00000000);
}
</style>
