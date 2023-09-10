<template>
  <div class="container">
    <div class="to_do__wrapper">
      <h1>Contact List</h1>
      <div class="action__btns" style="">
        <my-button @click="isDialogVisible = true;">Add</my-button>
        <my-button @click="logout" style="background: red;">Logout</my-button>
      </div>
      <div class="">
        <my-input type="text" placeholder="Search..." v-model="searchQuery"/>
      </div>
      <task-list v-model:tasks="searchedTasks"/>
      <dialog-window v-model:show="isDialogVisible">
        <task-create-form @create="createTask"/>
      </dialog-window>
    </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import DialogWindow from "@/components/DialogWindow";
import MyTextarea from "@/components/MyTextarea";
import TaskCreateForm from "@/components/TaskCreateForm";
import axios from "axios";

export default {
  components: {TaskCreateForm, MyTextarea, DialogWindow, MyInput, TaskList, MyButton},
  data() {
    return {
      isDialogVisible: false,
      tasks: [],
      searchQuery: "",
    }
  },
  methods: {
    async fetchListTasks() {
      const response = await axios.get('http://127.0.0.1:8000/contact');
      this.tasks = response.data;
    },
    async createTask(task){
      this.isDialogVisible = false;
      console.log(task);
      if (!task.title.isEmpty && !task.description.isEmpty){
        await axios.post(`http://127.0.0.1:8000/contact/`, {'name': task.name, 'phone': task.phone});
        await this.fetchListTasks();
      }
    },
    logout() {
      this.$store.dispatch("onLogout");
      this.$router.push("/login")
    }
  },
  computed: {
    searchedTasks() {
      return this.tasks.filter(task => task.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      // return this.tasks
    }
  },
  created() {
    this.fetchListTasks();
  },
  mounted() {
    this.fetchListTasks();
  },
  watch: {
    '$store.state.token': function() {
      this.fetchListTasks();
    }
  }
}
</script>

<style>
.to_do__wrapper{
  width: 453px;
}

h1{
  color: white;
  font-size: 60px;
  text-shadow: 1px 5px 5px #CECECE;
}

h2{
  text-align: center;
  color: #75d0ab;
  font-size: 40px;
  text-shadow: 2px 2px 2px #c0c0c0;
}

my-input{
  width: 400px;
}

.action__btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>