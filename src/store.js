import { atom } from "recoil";

export const loadingProgressState = atom({
    key : 'loadingProgressState',
    default : 0
});

export const isSection03VisibleState = atom({
    key: "isSection03VisibleState",
    default: false,
  });