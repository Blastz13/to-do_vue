<template>
  <textarea :value="modelValue"
            @input="updateTextarea"></textarea>
</template>

<script>
export default {
  name: "MyTextarea",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateTextarea(event){
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  resize: none;
  border-radius: 15px;
  font-size: 20px;
  font-family: Avenir;
  font-weight: bold;
}
</style>