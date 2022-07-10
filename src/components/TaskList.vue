<template>
  <div class="">
    <task
        v-for="task in tasks"
        :key="task.id"
        :item="task"/>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "TaskList",
  components: {Task},
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>