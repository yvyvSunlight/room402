<script setup>
    import '@/utils/http';
    import { onMounted, ref } from "vue";
    let date = new Date();
    let current_y = date.getFullYear();
    let current_m = date.getMonth() + 1;
    let current_d = date.getDate();
    const year = ref(current_y);
    const month = ref(current_m);
    const day = ref(current_d);
    onMounted(() => {

    })


  
</script>

<template>
  <div class="meetings">
    <uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />

  </div>
</template>


<style scoped></style>