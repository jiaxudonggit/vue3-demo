<template>
  <h2>Option API</h2>
  <el-button type="primary" @click="increment">
    Count is: {{ count }}, double is: {{ double }}
  </el-button>
  <div style="display: block;margin-top: 50px;">
    <router-link to="/" style="margin-top: 50px">首页</router-link>
  </div>
</template>

<script>
export default {
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
