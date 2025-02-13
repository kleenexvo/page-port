<template>
    <div class="envelop">
        <div v-for="(card, index) in cards" :key="index">
            <div class="singleLog">
                <img :src="card.image"/>
                <div class="textin">
                    <h2>{{ card.title }}</h2>
                    <h1>{{card.description}}</h1>
                </div>

            </div>
        </div>
    </div>
  
    

</template>
  
<script setup>
    import { ref } from 'vue'
    const cards = ref([
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        title: 'Unity',
        description: 'aaa',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        title: 'Godot',
        description: 'bbb',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        title: 'Java',
        description: 'd',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        title: 'Unity',
        description: 'aaa',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        title: 'Godot',
        description: 'bbb',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        title: 'Java',
        description: 'g',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
        title: 'Unity',
        description: 'aaa',
    },
    
    
    ]);

</script>

<style scoped>
.envelop {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); 
    gap: 1.5rem;
    padding: 1rem;
}
.singleLog {

    width: 30%;
    height: 16em;
    display: flex;
    gap: 40%;

}
.textin {
    display: block;
    color: white;
}
</style>
