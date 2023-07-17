interface EmailType {
  title: string;
  description?: string;
  checked: boolean;
  selected: boolean;
  markRead: boolean;
  archived: boolean;
}

const initialData: EmailType[] = [
  {
    title: "Wave hello with video, reactions and more now in huddles",
    checked: false,
    selected: false,
    markRead: false,
    archived: false
  },
  {
    title: "Wave hello with video, reactions and more now in huddles",
    checked: false,
    selected: false,
    markRead: false,
    archived: false
  },
  {
    title:
      "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
    checked: false,
    selected: false,
    markRead: false,
    archived: false
  },
  {
    title:
      "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
    checked: false,
    selected: false,
    markRead: false,
    archived: false
  },
  {
    title:
      "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
    checked: false,
    selected: false,
    markRead: false,
    archived: false
  },
  {
    title:
      "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
    checked: false,
    selected: false,
    markRead: false,
    archived: false
  }
];
export const useStore = () => {
  return useState("store", () => ({
    emails: [...initialData]
  }));
};
