<template>
  <div class="home">
    <div @click="moveLeft" class="chevron chevron--left" v-show="page > 0">
      <font-awesome-icon icon="chevron-left"></font-awesome-icon>
    </div>

    <component v-bind:is="principle.component" :principle="principle" />

    <div @click="moveRight" class="chevron chevron--right" v-show="page < 11">
      <font-awesome-icon icon="chevron-right"></font-awesome-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import principles from "../constants/principles.json";

import First from "../components/Principles/First.vue";
import Second from "../components/Principles/Second.vue";
import Third from "../components/Principles/Third.vue";
import Fourth from "../components/Principles/Fourth.vue";
import Fifth from "../components/Principles/Fifth.vue";
import Sixth from "../components/Principles/Sixth.vue";
import Seventh from "../components/Principles/Seventh.vue";
import Eighth from "../components/Principles/Eighth.vue";
import Ninth from "../components/Principles/Ninth.vue";
import Tenth from "../components/Principles/Tenth.vue";
import Eleventh from "../components/Principles/Eleventh.vue";
import Twelfth from "../components/Principles/Twelfth.vue";

@Component({
  components: {
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eighth,
    Ninth,
    Tenth,
    Eleventh,
    Twelfth
  }
})
export default class Home extends Vue {

  get page(): number {
    const page = this.$route.query.page

    if(typeof page !== "string") {
      return 0
    }

    return parseInt(page)
  }
  set page(v) {
    const query = {
      page: v.toString()
    }
    this.$router.replace({ query })
  }
  

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
    if (this.page >= 11) {
      return;
    }

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

  padding-left: calc(40px + 5vw);
  padding-right: calc(40px + 5vw);
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
  transition: opacity 0.3s, background 0.3s, color 0.3s;
}

.chevron:hover {
  opacity: 1;
  color:#3F85ED;
}

.chevron--left {
  justify-content: flex-start;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}

.chevron--left:hover {
  background: linear-gradient(90deg, #00000020, #00000000);
}

.chevron--right {
  justify-content: flex-end;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.chevron--right:hover {
  background: linear-gradient(-90deg, #00000020, #00000000);
}
</style>
