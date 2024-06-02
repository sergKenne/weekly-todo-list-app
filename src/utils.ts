import { TodoType } from "./types";

export class Storage {
  static setItem(todos: string, data: TodoType[]) {
    localStorage.setItem(todos, JSON.stringify(data) )
  }

  static getItem(todos: string) {
    return JSON.parse(localStorage.getItem(todos) || '""'); 
  }
}

export function cleanSearchParams() {
  if ('URLSearchParams' in window) {
      const url = new URL(window.location);
      url.searchParams.delete('day');
      history.pushState(null, '', url);
  }
}

export function setSearchParams(day: string) {
  if ('URLSearchParams' in window) {
    const url = new URL(window.location)
    url.searchParams.set("day", day)
    history.pushState(null, '', url);
  }
}