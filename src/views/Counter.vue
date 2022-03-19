<template>
  <h2>组合式API</h2>
  <el-button type="primary" @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </el-button>
  <div style="display: block;margin-top: 50px;">
    <router-link to="/" style="margin-top: 50px">首页</router-link>
  </div>
</template>

<script>
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>
