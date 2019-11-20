<template>
  <el-dropdown :hide-on-click="false" :show-timeout="100" trigger="click" >
    <el-button plain>
      {{categorySelected}}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" class="no-border">
      <el-select v-model="category" style="padding: 5px 15px;" @change="changeSelect" ref="selectCategory">
        <el-option v-for="item in options" :value="item.id" :label="item.label">
        </el-option>
      </el-select>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import {getCategoryById} from '@/api/article';
export default {

  props: {
    options:{
      required:true,
      type:Array
    },
    value:{

    }
  },
  data() {
    return {
      categorySelected: '请选择分类',
      category:undefined

    }
  },
  mounted(){
    console.log(this.$props);
    this.fetchCategoryById(this.value)

  },
  methods:{
  changeSelect(value){
    //UI更新在下一帧 否则取到的值不对
    this.$nextTick(() => {
      this.categorySelected = this.$refs.selectCategory.selectedLabel;
      console.log(this.$refs.selectCategory)
      this.$emit('input',this.$refs.selectCategory.value)
    })
  },
    fetchCategoryById(id){
    getCategoryById(1).then(
      response =>{
        this.categorySelected =response.data.name;
      }
    )

    }
}
}
</script>
