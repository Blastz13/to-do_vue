<template>
  <form @submit.prevent>
    <h2>Update To-Do Task</h2>
    <my-input class="input__create" placeholder="Title" v-model="task.title" />
    <my-textarea placeholder="Description" v-model="task.description"/>
    <my-button class="btn__create" @click="updateTask">Update</my-button>
    <my-button class="btn__delete" @click="deleteTask">Delete</my-button>
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

    }
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateTask() {
      this.$emit("update", this.task);
      this.$router.go(-1);
    },
    deleteTask() {
      this.$emit("delete", this.task);
      this.$router.go(-1);
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.btn__create{
  margin-top: 10px;
}

.btn__delete{
  margin-top: 10px;
  margin-left: 5px;
  background: red;
}

.input__create {
  background-color: #f8f8f8;
  border: 2px solid #ccc !important;
  height: 50px;
}
</style>