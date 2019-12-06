<template>
    <div>
    <div class="header">
      <div v-for="essay in essayList">
      <list :essay="essay"></list>
      </div>
    </div>
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    </div>
</template>

<script>
  import {list} from './components/index';
  import {fetchList} from '@/api/article'
  import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
    export default {
        name: "Index",
        components:{
          list,Pagination
        },
      data(){
          return{
            essayList:[],
            listLoading:false,
            total:0,
            listQuery: {
              page: 1,
              limit: 5
            }

          }
      },
      created(){
        this.getList()
      },
      methods:{
            getList() {
              this.listLoading = true
              fetchList(this.listQuery).then(response => {
                this.essayList = response.data.list;
                this.total = response.data.totalRow;
                this.listLoading = false;
              })

          }
      }
    }
</script>

<style scoped>

</style>
