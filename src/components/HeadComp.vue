<template>
    <h1>
        {{title}}
    </h1>
</template>

<script>
import { mapGetters } from "vuex";

export default {
   computed:{
       ...mapGetters({
           // titleに指定のゲッターの返り値をセット
           title: 'getTitle'
       })
   }
}
</script>
