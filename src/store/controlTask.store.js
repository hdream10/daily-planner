import moment from "moment";
import { create } from "zustand";

const clearTask = {
  title: "",
  description: "",
  important: "Важно",
  status: false,
  date: moment().format("DD-MM-YYYY"),
};

export const useControlTask = create()((set) => ({
  modalDelete: {
    mode: false,
    task: {},
  },
  editScreen: {
    mode: false,
    task: clearTask,
  },
  tasks: [],
  currentDate: Date.now(),
  searchQueryStore: "",
  filterValue: "",

  setDeleteMode: (task) =>
    set(() => ({ modalDelete: { mode: true, task: task } })),

  removeDeleteMode: () =>
    set(() => ({ modalDelete: { mode: false, task: {} } })),

  editTaskMode: (task) =>
    set(() => ({
      editScreen: {
        mode: true,
        task: task ? task : { ...clearTask, id: Date.now() },
      },
    })),

  editTaskCurrent: (task) =>
    set((state) => ({
      editScreen: {
        mode: true,
        task: {
          ...state.editScreen.task,
          ...task,
          date: moment(state.currentDate).format("DD-MM-YYYY"),
        },
      },
    })),

  clearEditMode: () =>
    set(() => ({
      editScreen: {
        mode: false,
        task: clearTask,
      },
    })),

  setTasks: (newTasks) => set(() => ({ tasks: newTasks })),

  setCurrentDate: (date) => set(() => ({ currentDate: date })),

  setSearchQueryStore: (query) => set(() => ({ searchQueryStore: query })),

  clearSearchQueryStore: () => set(() => ({ searchQueryStore: "" })),

  setFilterValue: (value) => set(() => ({ filterValue: value })),

  clearSetFilterValue: () => set(() => ({ filterValue: "" })),
}));
