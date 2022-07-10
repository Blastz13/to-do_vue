<template>
<div class="item">
  <div class="item__info">
    <router-link :to="{ name: 'taskDetail', params: { id: item.id }}"><div class="item__title" :class="{title_strike: this.item.current_status == 'Выполнено'}"><p>{{ item.title }}</p></div></router-link>
    <div class="item__description"><p>{{ item.description }}</p></div>
    <div class="item__date"><p>{{ getBeautifulDate(item.create_date) }}</p></div>
  </div>
  <div class="item__status">
    <input type="checkbox"
           class="item__status__task"
           v-model="this.item.current_status"
           true-value="Выполнено"
           false-value="Не выполнено"
           @change="updateStatusTask()">
  </div>
</div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Task",
  data(){
    return{
      is_complete_task: false,
    }
  },
  methods: {
    async updateStatusTask() {
      await axios.put('http://127.0.0.1:8000/task/update-status/' + this.item.id, {"status": this.item.current_status},{headers: {Authorization: `Bearer ${this.$store.getters.getToken}`}});
    },
    getBeautifulDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.item{
  max-width: 500px;
  background: white;
  border-radius: 20px;
  display: flex;
  margin-bottom: 15px;
  -webkit-box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.item__info{
  padding: 5px 10px;
  width: 80%;
}

.item__status{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0px 10px;
  width: 20%;
}

.item__status__task{
  transform:scale(2);
  opacity: 0.9;
  cursor:pointer;
}

.item__title{
  font-size: 30px;
  font-weight: bold;
  color: black;
}

.item__description{
  font-size: 18px;
}

.title_strike{
  text-decoration: line-through;
}

@media screen and (max-width: 450px) {
  .item__info{
    width: 300px;
  }

  .item__title{
    font-size: 20px;
  }

  .item__description{
    font-size: 15px;
  }

  .item__date{
    font-size: 12px;
  }

  .item__status__task{
    transform:scale(1.5);
  }
}
</style>