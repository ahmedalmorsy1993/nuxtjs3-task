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
    archivedEmails(state): EmailType[] {
      return state.emails
        .filter((item) => item.archived)
        .map((item) => ({
          ...item,
          markRead: false,
          checked: false
        }));
    },
    isSelectedAll(): boolean {
      return this.unArchivedEmails.every((item) => item.checked);
    },
    selectedEmailsCount(state): number {
      return this.unArchivedEmails.filter((item) => item.checked).length;
    },
    archivedEmailsCount(state): number {
      return this.archivedEmails.length;
    },
    inboxCount(): number {
      return this.unArchivedEmails.length;
    }
  }
});
