<template>
  <div class="container">
    <dialog-window :show="true">
      <task-update-form @update="updateTask" @delete="deleteTask" v-model:task="task"/>
    </dialog-window>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
import DialogWindow from "@/components/DialogWindow";
import TaskUpdateForm from "@/components/TaskUpdateForm";
import axios from "axios";

export default {
  components: {TaskUpdateForm, DialogWindow},
  data() {
    return {
      task: {},
      isDialogVisible: true,
      token: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcmVzIjoxNjU3MzM2MjU2LjAxODc3NX0.yXwNW7KeUpIR6KCwDRgHuvVP34CE3jgZUzSadU7CM14"
    }
  },
  methods: {
    async fetchListTasks() {
      const response = await axios.get('http://127.0.0.1:8000/task/' + this.$route.params.id,
                               {headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}});
      this.task = response.data;
    },

    async updateTask() {
      const response = await axios.put('http://127.0.0.1:8000/task/update/' + this.$route.params.id,
          {"title": this.task.title, "description": this.task.description},
          {headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}});
    },

    async deleteTask() {
      const response = await axios.delete('http://127.0.0.1:8000/task/remove/' + this.$route.params.id,
                                  {headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}});
    }
  },
  mounted() {
    this.fetchListTasks();
  }
}
</script>
<style scoped>

</style>