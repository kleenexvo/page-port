<template>
    <div class="card-list">
      <div 
        class="card" 
        v-for="(card, index) in cards" 
        :key="index" 
        @click="openModal(card)"
        >
        <img :src="card.images[0]" :alt="card.title" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-description">{{ card.description }}</p>         
        </div>
      </div>
       <!-- Modal -->
    <ProjectModelComponent :isOpen="isModalOpen" @close="closeModal">
      <h2>{{ selectedCard?.title }}</h2>
      <div class="modal-image-container">
        <button class="nav-button" @click="prevImage">&#8249;</button>
        <img :src="selectedCard?.images[currentImageIndex]" :alt="'Image ' + currentImageIndex" />
        <button class="nav-button" @click="nextImage">&#8250;</button>
      </div>
      <p>{{ selectedCard?.description }}</p>
    </ProjectModelComponent>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProjectModelComponent from './ProjectModelComponent.vue'
  
  const cards = ref([
    {
      images: [
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
      ],
      title: 'Knight Wrath',
      description: 'Jeu de type Hack\'n Slash développé avec Unity',
    },
    {
      images: [
        require('@/assets/logo.png'),
        'https://via.placeholder.com/150/0000FF',
        'https://via.placeholder.com/150/FF0000',
      ],
      title: 'JavaScript',
      description: 'Le langage du web pour des applications dynamiques et interactives.',
    },
    {
      images: [
        require('@/assets/logo.png'),
        'https://via.placeholder.com/150/0000FF',
        'https://via.placeholder.com/150/FF0000',
      ],
      title: 'Java',
      description: 'Un langage robuste et multi-plateforme pour le développement d\'entreprise.',
    },
  ]);
  
  const isModalOpen = ref(false);
  const selectedCard = ref(null);
  const currentImageIndex = ref(0);
  
  const openModal = (card) => {
    selectedCard.value = card;
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
    currentImageIndex.value = 0;
  };
  const prevImage = () => {
    if (selectedCard.value) {
      currentImageIndex.value = (currentImageIndex.value - 1 + selectedCard.value.images.length) % selectedCard.value.images.length;
    }
  };

  const nextImage = () => {
    if (selectedCard.value) {
      currentImageIndex.value = (currentImageIndex.value + 1) % selectedCard.value.images.length;
    }
  };
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
    cursor: pointer;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  .card-image {
    width: 50%;
    height: 100%;
    border-radius: 10%;
    object-fit: cover;
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
  .modal-image-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
  .modal-image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  max-height: 400px;
}

.nav-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
  </style>
  