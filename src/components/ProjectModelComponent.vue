<template>
    <div v-if="props.isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isOpen: Boolean, 
  });
  
  const emit = defineEmits(['close']);
  
  const closeModal = () => {
    emit('close'); 
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.781);
    max-width: 1000px;
    max-height: 80vh; 
    width: 100%;
    overflow-y: auto; 
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent; 
    color: white;
    text-align: center;
  }
  
  .modal-content::-webkit-scrollbar {
    width: 8px;
  }
  
  .modal-content::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .modal-content::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  </style>
  