<template>
  <div class="card-list">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <img :src="card.image" :alt="card.title" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-description">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cards = ref([
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
    title: 'prog lang',
    description: '"dequoi dintéressant"',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
    title: 'prog lang2',
    description: '"qqch"',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
    title: 'prog lang3',
    description: 'jai oublié',
  },
]);
</script>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.card {
  background-color: rgb(53, 73, 94);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  color: wheat;
}



.card-image {
  width: 80px;
  height: 90px;
  border-radius: 6px;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: white;
}

.card-description {
  font-size: 0.95rem;
  color: white;
}
</style>
