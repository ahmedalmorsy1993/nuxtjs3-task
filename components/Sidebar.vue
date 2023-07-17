<script lang="ts" setup>
import { useStore } from "../composables/store";
interface ItemType {
  title: string;
  to: string;
  icon: string;
}
const items: ItemType[] = [
  { title: "inbox", icon: "inbox.svg", to: "/" },
  { title: "archive", icon: "archive.svg", to: "/archive" }
];

const { state, actions } = useStore<string>();
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img width="40" height="20" src="~/assets/images/logo.svg" alt="logo" />
    </div>
    <nav class="sidebar__nav">
      <div class="sidebar__nav__list">
        <!-- <div
          v-for="(item, index) in items"
          :key="index"
          class="sidebar__nav__list__item"
        > -->
        <NuxtLink
          class="sidebar__nav__list__item"
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
        >
          <div class="sidebar__nav__list__item--left">
            <img
              width="24"
              height="24"
              :src="`/_nuxt/assets/images/${item.icon}`"
              alt="icon"
            />
            <span>{{ item.title }}</span>
          </div>
          <div class="sidebar__nav__list__item--right">20</div>
        </NuxtLink>
      </div>
      <!-- </div> -->
      <div class="sidebar__nav__action">actions</div>
    </nav>
  </aside>
</template>
