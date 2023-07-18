import { EmailType, initialData } from "~/db";
import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    emails: [...initialData]
  }),
  actions: {
    onArchive() {
      this.emails = this.emails.map((item) => ({
        ...item,
        archived: item.checked ? true : false
      }));
    },
    onSelectAll() {
      this.emails = this.emails.map((item) => ({
        ...item,
        checked: !this.isSelectedAll ? true : false
      }));
    },
    onMarkAsRead() {
      this.emails = this.unArchivedEmails.map((item) => ({
        ...item,
        markRead: item.checked ? true : false
      }));
    }
  },
  getters: {
    unArchivedEmails(state): EmailType[] {
      return state.emails.filter((item) => !item.archived);
    },
    isSelectedAll(state): boolean {
      return this.unArchivedEmails.every(
        (item) => item.checked && !item.archived
      );
    },
    selectedEmailsCount(state): number {
      return this.unArchivedEmails.filter((item) => item.checked).length;
    },
    archivedEmailsCount(state): number {
      return state.emails.filter((item) => item.archived).length;
    },
    inboxCount(): number {
      return this.unArchivedEmails.length;
    }
  }
});
