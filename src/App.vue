<template>
  <div class="full">
    <header class="header">
      <img :src="require('@/assets/logo.png')" alt="Logo" class="logo" />
      <nav>
        <button @click="currentComponent = 'LanguagesComponent'">{{translate('welcome')}}</button>
        <button @click="currentComponent = 'ProjectsComponent'">Projects</button>
        <button @click="currentComponent = 'LogicielComponents'">Something</button>
        <button @click="currentComponent = 'CvComponent'">CV</button>
        <img :src="require('@/assets/ori.png')" class = "inimg"/>
      </nav>
    </header>

    <div class="body-content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import LanguagesComponent from './components/LanguagesComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import LogicielComponents from './components/LogicielComponents.vue';
import CvComponent from './components/CvComponent.vue';
import { translate, setLocale } from './traduction';

export default {
  name: 'App',
  methods: {
    translate,
    changeLanguage(locale) {
      setLocale(locale);
    }
  },
  components: {
    LanguagesComponent,
    ProjectsComponent,
    LogicielComponents,
    CvComponent
  },
  data() {
    return {
      currentComponent: 'LanguagesComponent',
    };
  },
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.full {
  display: flex;
  flex-direction: column;
  height: 100%; /* Make the full container fill the viewport height */
  background-image: url('@/assets/test.webp'); /* Background image for the entire page */
  background-size: cover; /* Ensures the image covers the full container */
  background-position: center; /* Centers the image */
  position: fixed;
  width: 100%;
  left: 0%;
  top: 0%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%; /* Default height */
  padding: 1rem;
  transition: height 0.5s ease; /* Apply transition to the height */
  overflow: hidden; /* Prevent content from overflowing during transition */
}
.header:hover {
  height: 20%; /* Hovered height */
}

.logo {
  width: 6%;
  height: auto;
  transition: transform 0.5s ease;
}

.header:hover .logo{
  transform: scale(2) translateX(20%);
}

nav {
  display: flex;
  gap: 5%;
  height: 80%;
  width: 80%;
}

button {
  background-color: rgba(0, 0, 0, 0.8);
  color: #f3f3f3;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  width: 10%;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
}

button:hover {
  background-color: #d4f1e3;
}

.body-content {
  flex-grow: 1; /* Fills the remaining space below the header */
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: auto;
  height: 80%;
}
.inimg{
  width: 10%;
}

* {
  outline: 1px solid red;
}
</style>
