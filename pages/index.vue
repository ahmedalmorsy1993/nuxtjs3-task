<script lang="ts" setup>
import { useStore } from "~/store";
const store = useStore();

onMounted(() => {
  document.addEventListener("keypress", (e) => {
    if (e.code == "KeyA") {
      store.onArchive();
    }
    if (e.code == "KeyR") {
      store.onMarkAsRead();
    }
  });
});
</script>

<template>
  <div class="inbox-page">
    <header>
      <h2>Inbox</h2>
    </header>
    <section class="inbox-page__top-nav">
      <CheckBox @onChange="store.onSelectAll()" :checked="store.isSelectedAll">
        Email Selected ({{ store.selectedEmailsCount }})
      </CheckBox>
      <ul>
        <li>
          <img
            height="19"
            width="19"
            src="~/assets/images/mail.svg"
            alt="email"
          />
          <span>Mark as read (r)</span>
        </li>
        <li>
          <img
            height="19"
            width="19"
            src="~/assets/images/archive.svg"
            alt="archive"
          />
          <span>Archive (a)</span>
        </li>
      </ul>
    </section>
    <ul class="inbox-page__list">
      <li
        v-for="(item, index) in store.unArchivedEmails"
        :key="index"
        class="inbox-page__list__item"
        :class="item.markRead && 'mark-as-read'"
      >
        <CheckBox
          :checked="item.checked"
          @onChange="item.checked = !item.checked"
        >
          {{ item.title }}
          {{ item.markRead }}
        </CheckBox>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
