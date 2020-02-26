<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import connectDB from "../db/db";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted: function() {
    console.log("In mounted");
    connectDB();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
