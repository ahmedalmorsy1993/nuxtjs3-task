<template>
  <div
    @click.stop="store.dialog = false"
    class="dialog"
    :class="store.dialog ? 'dialog__show' : ''"
  >
    <div @click.stop class="dialog__body">
      <div class="dialog__body__content">
        <section class="inbox-page__top-nav dialog__body__content__top-nav">
          <div @click.stop="store.dialog = false">
            <img
              height="19"
              width="19"
              src="~/assets/images/close.svg"
              alt="close"
            />
            <span>Close (Esc)</span>
          </div>
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
        <div>
          <h2>
            {{ store.singleEmail.title }}
          </h2>
          <p>
            {{ store.singleEmail.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "~/store";
const store = useStore();

onMounted(() => {
  document.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      store.dialog = false;
    }
  });
});
</script>
