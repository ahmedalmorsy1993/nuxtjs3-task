<script lang="ts" setup>
import { useStore } from "../composables/store";
const store = useStore();
const inboxCount = store.value.emails.filter((item) => !item.archived).length;
const archivedCount = store.value.emails.filter((item) => item.archived).length;
interface ItemType {
  title: string;
  to: string;
  icon: string;
  value: number;
}
const items: ItemType[] = [
  { title: "inbox", icon: "inbox.svg", to: "/", value: inboxCount },
  {
    title: "archive",
    icon: "archive.svg",
    to: "/archive",
    value: archivedCount
  }
];
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img width="40" height="20" src="~/assets/images/logo.svg" alt="logo" />
    </div>
    <nav class="sidebar__nav">
      <div class="sidebar__nav__list">
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
          <div class="sidebar__nav__list__item--right">{{ item.value }}</div>
        </NuxtLink>
      </div>
      <a href="#" class="sidebar__nav__logout">
        <img src="~/assets/images/logout.svg" alt="logout" />
        <span>Logout</span>
      </a>
    </nav>
  </aside>
</template>
