<template>
  <h2>Option API Slot</h2>
  <Counter v-slot="{ count, double, increment }">
    <el-button type="primary" @click="increment">
      Count is: {{ count }}, double is: {{ double }}
    </el-button>
  </Counter>
  <div style="display: block;margin-top: 50px;">
    <router-link to="/" style="margin-top: 50px">首页</router-link>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
export default {
  components: {
    Counter
  }
}
</script>
