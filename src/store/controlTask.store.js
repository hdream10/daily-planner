import { create } from "zustand";

export const useControlTask = create()((set) => ({
  modalDelete: {
    mode: false,
    idTask: null,
  },

  setDeleteMode: (id) =>
    set((state) => ({ modalDelete: { mode: true, idTask: id } })),

  removeDeleteMode: () =>
    set((state) => ({ modalDelete: { mode: false, idTask: null } })),
}));