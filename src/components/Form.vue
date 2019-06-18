<template>
  <div>
    Formページ
    <head-comp></head-comp>
    <!-- <textarea-comp :is="isComponent"></textarea-comp>
    <string-comp :is="isComponent"></string-comp> -->
     <component :is="isComponent"></component>
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
  methods: {
    ...mapActions({
        // buttonActionオブジェクトにstoreのbuttonActionをマップ
        buttonAction: 'buttonAction'
      })
  },
  computed: {
    ...mapGetters({
      // buttonオブジェクトにgetButtonの返り値をマップ
      button: "getButton",
       // isComponentオブジェクトにgetComponentの返り値をマップ
      isComponent:  'getComponent'
    })
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
