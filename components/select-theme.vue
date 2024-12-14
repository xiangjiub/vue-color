<template>
  <view>
    <view class="select">
      <view
        :class="[{ 'active-ele': theme === item }]"
        v-for="item in scheme"
        :key="item"
        @click="selectChange(item)"
        >{{ item }}</view
      >
    </view>
  </view>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters('theme', ['theme']),
    ...mapState('theme', ['theme', 'scheme'])
  },
  methods: {
    ...mapMutations('theme', ['updateTheme']),
    selectChange(theme) {
      this.updateTheme({ theme })
    }
  }
}
</script>

<style scoped lang="scss">
.select {
  > view {
    padding: 5px 15px;
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
  }
}
.active-ele {
  background: $success-color;
  color: $text-color-tab;
}
</style>
