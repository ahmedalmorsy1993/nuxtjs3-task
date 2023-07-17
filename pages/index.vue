<script lang="ts" setup>
const store = useStore();
const selectedCount = computed<number>(
  () => store.value.emails.filter((item) => item.checked).length
);
const selectedAll = computed<boolean>(() =>
  store.value.emails.every((item) => item.checked)
);
const allMarked = computed<boolean>(() =>
  store.value.emails.every((item) => item.markRead)
);
const onSelectAll = () => {
  store.value.emails = store.value.emails.map((item) => ({
    ...item,
    checked: !selectedAll.value ? true : false
  }));
};
const handleArchive = () => {
  store.value.emails = store.value.emails.map((item) => ({
    ...item,
    archived: true
  }));
};
const handleMarkRead = () => {
  store.value.emails = store.value.emails.map((item) => ({
    ...item,
    markRead: !item.markRead
  }));
};
onMounted(() => {
  document.addEventListener("keypress", (e) => {
    if (e.code == "KeyA") {
      handleArchive();
    }
    if (e.code == "KeyR") {
      handleMarkRead();
    }
  });
});
</script>

<template>
  <div class="inbox-page">
    <header>
      <h2>inbox</h2>
    </header>
    <section class="inbox-page__top-nav">
      <CheckBox
        :class="allMarked && 'mark-as-read'"
        :disabled="allMarked"
        @onChange="onSelectAll()"
        :checked="selectedAll"
      >
        Email Selected ({{ selectedCount }})
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
        v-for="(item, index) in store.emails"
        :key="index"
        class="inbox-page__list__item"
        :class="item.markRead && 'mark-as-read'"
      >
        <CheckBox
          :checked="item.checked"
          :disabled="item.markRead"
          @onChange="item.checked = !item.checked"
        >
          {{ item.title }}
          {{ item.archived }}
          {{ item.markRead }}
        </CheckBox>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
