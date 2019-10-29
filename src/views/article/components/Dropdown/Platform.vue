<template>
  <el-dropdown :hide-on-click="false" :show-timeout="100" trigger="click">
    <el-button plain>
      {{category}}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" class="no-border">
      <el-select v-model="category" style="padding: 5px 15px;">
        <el-option v-for="item in options" :value="item.id" :label="item.label">
        </el-option>
      </el-select>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    value: {

    },
    options:{
      required:true,
      type:Array
    }
  },
  data() {
    return {
      category: '请选择分类'

    }
  },

}
</script>
