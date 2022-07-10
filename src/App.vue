<template>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

body{
  background: rgb(193,142,227);
  background: -moz-linear-gradient(90deg, rgba(193,142,227,1) 0%, rgba(117,208,171,1) 63%, rgba(117,208,171,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(193,142,227,1) 0%, rgba(117,208,171,1) 63%, rgba(117,208,171,1) 100%);
  background: linear-gradient(90deg, rgba(193,142,227,1) 0%, rgba(117,208,171,1) 63%, rgba(117,208,171,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c18ee3",endColorstr="#75d0ab",GradientType=1);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container{
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 15px;
  display: flex;
  justify-content: center;
}
</style>