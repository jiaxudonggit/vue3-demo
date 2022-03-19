<template>
  <div>
    <slot v-bind="{ count, double, increment }"></slot>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>
