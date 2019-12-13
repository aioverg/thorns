<template>
  <input v-model="data">
</template>

<script>
export default {
    name: 'inputModel',
    data: function(){
        return{ data: null}
    },
    //methods: {
    //    blur: function(value){
    //        console.log(value)
    //    }
    //}
}
</script>