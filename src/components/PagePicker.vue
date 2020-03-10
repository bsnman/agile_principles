<template>
  <div class="page-picker">
    <template v-for="page in pages">
      <div
        @click="pageSelect(page)"
        class="page-item"
        :class="{ active: currentPage === page }"
        :key="page"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class First extends Vue {
  @Prop() private currentPage!: number;
  @Prop() private limit!: number;

  showCard = false;

  get pages() {
    const pages = [];

    for (let x = 0; x < this.limit; x++) {
      pages.push(x);
    }

    return pages;
  }

  mounted() {
    this.showCard = !this.showCard;
  }

  @Emit()
  pageSelect(page: number) {
    return page;
  }
}
</script>


<style lang="scss" scoped>
.page-picker {
  position: absolute;
  bottom: 70px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.6;

  transition: opacity 0.1s;
}

.page-picker:hover {
    opacity: 1;
}

.page-item {
  height: 15px;
  width: 15px;
  background: #e2e2e2;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;

  transition: background 0.3s ,height 0.3s, width 0.3s;
}

.page-item.active {
  background: #3f85ed;
}
</style>