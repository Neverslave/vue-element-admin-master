<template>
  <el-dropdown :hide-on-click="false" :show-timeout="100" trigger="click">
    <el-button plain>
      {{category}}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" class="no-border">
      <el-select v-model="platforms" style="padding: 5px 15px;">
        <el-option v-for="item in categories" :value="item.id" :label="item.label">
        </el-option>
      </el-select>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      default: () => [],
      type: Array
    }
  },
  data() {
    return {
      categories: [
      ]
    }
  },
  computed: {
    category: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
