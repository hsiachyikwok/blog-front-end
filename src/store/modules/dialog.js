import * as types from '../mutation-types'

// initial state
const state = {
  prodFormVisible : false, //产品对话框状态
  prodDtlFormVisible : false,//详情对话框状态
  prodDynamicValidateForm : {}, //产品对话框数据
  dtlDynamicValidateForm : {},//详情对话框数据
  footerFlag : false          //标志当前footer显示编辑还是新增，编辑：取消，确定，新增：取消/下一步，上一步/确定
}

const getters ={
  prodFormVisible(state){
    return state.prodFormVisible
  },
  prodDtlFormVisible(){
    return state.prodDtlFormVisible
  },
  prodDynamicValidateForm(state){
    return state.prodDynamicValidateForm
  },
  dtlDynamicValidateForm(state){
    return state.dtlDynamicValidateForm
  },
  footerFlag(state){
    return state.footerFlag
  }

}

const actions = {
  updateProdFormVisibleStatus(context,flag){//更新产品对话框状态
    context.commit(types.TOGGLE_PROD_DIALOG, flag)
  },
  updateProdDtlFormVisibleStatus(context,flag){ //更新产品对话框状态
    context.commit(types.TOGGLE_DTL_DIALOG, flag)
  },updateProdDynamicValidateForm(context,data){//更新产品对话框产品对话框数据
    context.commit(types.UPDATE_PROD_DYNAMIC_VALIDATE_FORM, data)
  },
  updateDtlDynamicValidateForm(context,data){ //更新产品对话框详情对话框数据
    context.commit(types.UPDATE_DTL_DYNAMIC_VALIDATE_FORM, data)
  },
  updateFooterFlag(context,flag) {
    context.commit(types.UPDATE_FOOTER_FLAG,flag)
  }
}

const mutations = {
  [types.TOGGLE_PROD_DIALOG](state, flag) {
    state.prodFormVisible = flag
  },
  [types.TOGGLE_DTL_DIALOG](state, flag) {
    state.prodDtlFormVisible = flag
  },
  [types.UPDATE_DTL_DYNAMIC_VALIDATE_FORM](state, data) {
    state.dtlDynamicValidateForm = Object.assign({},data)
  },
  [types.UPDATE_PROD_DYNAMIC_VALIDATE_FORM](state, data) {
    state.prodDynamicValidateForm = Object.assign({},data)
  },
  [types.UPDATE_FOOTER_FLAG](state, flag) {
    state.footerFlag = flag
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
