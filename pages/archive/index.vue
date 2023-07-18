<script lang="ts" setup>
import { useStore } from "~/store";
const store = useStore();

onMounted(() => {
  document.addEventListener("keypress", (e) => {
    // if (e.code == "KeyA") {
    //   store.onArchive();
    // }
    if (e.code == "KeyR") {
      store.onArchivedMarkAsRead();
    }
  });
});
</script>

<template>
  <div class="inbox-page">
    <header>
      <h2>Archive</h2>
    </header>
    <section class="inbox-page__top-nav">
      <CheckBox
        @onChange="store.onSelectAllArchived()"
        :checked="store.isSelectedAllArchived"
      >
        Email Selected ({{ store.selectedArchivedEmailsCount }})
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
            src="~/assets/images/restore.svg"
            alt="archive"
          />
          <span>Restore (e)</span>
        </li>
      </ul>
    </section>
    <template v-if="store.archivedEmails.length">
      <ul class="inbox-page__list">
        <li
          v-for="(item, index) in store.archivedEmails"
          :key="index"
          class="inbox-page__list__item"
          :class="item.markRead && 'mark-as-read'"
        >
          <CheckBox
            :checked="item.checked"
            @onChange="item.checked = !item.checked"
          >
            {{ item.title }}
          </CheckBox>
        </li>
      </ul>
    </template>
    <div v-else class="no-data">No Archived Emails</div>
  </div>
</template>

<style scoped></style>
