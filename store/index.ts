import { EmailType, initialData } from "~/db";
import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    emails: [...initialData],
    archivedEmails: [] as EmailType[]
  }),
  actions: {
    onArchive() {
      if (this.inboxCount) {
        this.emails = this.emails.map((item) => ({
          ...item,
          archived: item.checked ? true : false
        }));
      }

      this.archivedEmails = this.emails.filter((item) => item.archived);
    },
    onSelectAll() {
      this.emails = this.emails.map((item) => ({
        ...item,
        checked: !this.isSelectedAll ? true : false
      }));
    },
    onSelectAllArchived() {
      this.archivedEmails = this.archivedEmails.map((item) => ({
        ...item,
        checked: !this.isSelectedAllArchived ? true : false
      }));
    },
    onMarkAsRead() {
      this.emails = this.emails.map((item) => ({
        ...item,
        markRead: item.checked ? true : false
      }));
    },
    onArchivedMarkAsRead() {
      this.archivedEmails = this.archivedEmails.map((item) => ({
        ...item,
        markRead: item.checked ? true : false
      }));
    },
    onRestore() {
      if (this.archivedEmails.length) {
        this.emails = [
          ...this.unArchivedEmails,
          ...this.archivedEmails.map((item) => ({
            ...item,
            archived: item.checked ? false : true
          }))
        ];
      }

      this.archivedEmails = this.emails.filter((item) => item.archived);
    }
  },
  getters: {
    unArchivedEmails(state): EmailType[] {
      return state.emails.filter((item) => !item.archived);
    },

    isSelectedAll(): boolean {
      if (this.inboxCount) {
        return this.unArchivedEmails.every((item) => item.checked);
      } else {
        return false;
      }
    },
    isSelectedAllArchived(): boolean {
      if (this.archivedEmailsCount) {
        return this.archivedEmails.every((item) => item.checked);
      } else {
        return false;
      }
    },
    selectedEmailsCount(): number {
      return this.unArchivedEmails.filter((item) => item.checked).length;
    },
    selectedArchivedEmailsCount(): number {
      return this.archivedEmails.filter((item) => item.checked).length;
    },
    archivedEmailsCount(): number {
      return this.archivedEmails.length;
    },
    inboxCount(): number {
      return this.unArchivedEmails.length;
    }
  }
});
