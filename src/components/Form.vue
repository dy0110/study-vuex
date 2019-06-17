<template>
  <div>
    Formページ
    <head-comp></head-comp>
    <textarea-comp></textarea-comp>
    <string-comp></string-comp>
    <button @click="buttonAction">{{button}}</button>
  </div>
</template>

<script>
import HeadComp from "./HeadComp";
import TextareaComp  from "./TextareaComp";
import StringComp  from "./StringComp";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Form",
  components: {
      HeadComp,
      TextareaComp,
      StringComp
  },
  data() {
      return {
           button: '確認'
      }
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
