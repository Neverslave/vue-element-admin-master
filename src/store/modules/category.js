import {getCategory} from "@/api/category";

const state={
    label:'',
    children:[],
    disabled:'',
    isLeaf:''

}

//必须是同步函数
const mutations={
  SET_LABEL:(state,label)=>{
    this.state.label = label;
},
  SET_CHILDREN:(state,children)=>{
    this.state.children = children
  },
  SET_DISABLED:(state,disabled)=> {
    this.state.disabled = disabled
  },
  SET_ISLEAF:(state,isLeaf) => {
    this.state.isLeaf = isLeaf
  }

}

const actions= {
  getCategoryList() {
    return new Promise((resolve, reject) => {
      getCategory().then(
        response => {
          const {data} = response
          const {label, children, disabled, isLeaf} = data
          commit('SET_LABEL', label)
          commit('SET_CHILDREN', children)
          commit('SET_DISABLED', disabled)
          commit('SET_ISLEAF', isLeaf)
          resolve(data)
        })
    }).catch(error => {
      reject(error)
    })
  }
}


  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }

