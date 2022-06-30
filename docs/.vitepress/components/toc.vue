<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
const tocs = ref([]);
const scrollTop = ref(0);

function buildTocs() {
  const items = document.querySelectorAll("h2");
  [...items].forEach((el) => {
    tocs.value.push({
      title: el.id,
      top: el.offsetTop,
    });
  });
}

function hanleScroll() {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  scrollTop.value = top;
}

function toToc(top: number) {
  window.scrollTo({ top: top + 10 });
}

onMounted(() => {
  buildTocs();
  document.addEventListener("scroll", hanleScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", hanleScroll);
});
</script>

<template>
  <ul class="toc-wrapper">
    <li
      v-for="(toc, index) in tocs"
      @click="toToc(toc.top)"
      :class="{
        active:
          scrollTop >= toc.top && (!tocs[index + 1] || scrollTop < tocs[index + 1].top),
      }"
      :key="index"
    >
      {{ toc.title }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.toc-wrapper {
  position: fixed;
  top: 80px;
  left: 89vw;
  border-left: 1px solid rgba(60, 60, 60, 0.12);
  list-style: none;
  cursor: pointer;

  li {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    white-space: nowrap;
    line-height: 25px;
    width: 110px;

    &:hover {
      color: #4d9375;
    }

    &.active {
      font-weight: 600 !important;
      color: #4d9375;

      &:after {
        display: block;
        position: absolute;
        top: 0;
        left: -20px;
        transform: translateY(50%);
        content: "";
        width: 3px;
        height: 12px;
        background: #4d9375;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .toc-wrapper {
    display: none;
  }
}
</style>
