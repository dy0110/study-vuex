<template>
   <p>{{string}}</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
     name: 'stringComp',
     computed: {
         ...mapGetters({
             string: 'getString'
         })
     }
}
</script>
