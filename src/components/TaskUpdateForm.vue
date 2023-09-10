<template>
  <form @submit.prevent>
    <h2>Update contact</h2>
<!--    {{ this.task }}-->
    <my-input class="input__create" placeholder="Title" v-model="task.name" />
    <my-input class="input__create" placeholder="Phone" v-model="task.phone" />
<!--    <my-textarea placeholder="Description" v-model="task.description"/>-->
    <my-button class="btn__create" @click="updateTask">Update</my-button>
    <my-button class="btn__delete" @click="deleteTask">Delete</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";
import MyTextarea from "@/components/MyTextarea";
import axios from "axios";

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
    // async fetchListTasks() {
    //   const response = await axios.get('http://127.0.0.1:8000/' + this.$route.params.id);
    //   console.log(response)
    //   this.task = response.data;
    // },
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