<template>
  <form @submit.prevent>
    <h2>Create contact</h2>
    <my-input class="input__create" placeholder="Title" v-model="task.name"/>
    <my-input class="input__create" placeholder="Phone" v-model="task.phone"/>
<!--    <my-textarea placeholder="Description" v-model="task.description"/>-->
    <my-button class="btn__create" @click="createTask">Create</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";
import MyTextarea from "@/components/MyTextarea";

export default {
  components: {MyTextarea, MyInput, MyButton},
  name: "TaskCreateForm",
  data() {
    return {
      task: {
        title: "",
        description: ""
      }
    }
  },
  methods: {
    createTask() {
      this.$emit("create", this.task);
    }
  }
}
</script>

<style scoped>
.btn__create{
  margin-top: 10px;
}

.input__create {
  background-color: #f8f8f8;
  border: 2px solid #ccc !important;
  height: 50px;
}
</style>