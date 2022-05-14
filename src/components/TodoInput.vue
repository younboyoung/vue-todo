<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
          <i class="fa-solid fa-plus addBtn"></i>
          <!-- <font-awesome-icon icon="fa-solid fa-plus" class="addBtn"/>  -->
      </span>

      <AlertModal v-if="showModal" @close="showModal = false">
        <template v-slot:header>경고!  
        </template>
        
        <template v-slot:body>아무것도 입력하지 않으셨습니다.   <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i> 
            <button class="modal-default-button" @click="showModal = false">OK</button>
        </template>
      </AlertModal>

  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
    data(){
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components: {
        AlertModal: AlertModal
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #6478FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>