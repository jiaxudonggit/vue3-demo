import {computed, reactive} from "vue"

export function useCounter() {
  const state = reactive({
    count: 0,
    double: computed(() => state.count * 2)
  });
  const increment = function() { state.count++ }

  return {
    state,
    increment
  }
}
