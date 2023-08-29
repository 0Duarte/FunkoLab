<template>
            <v-card width="30%" class="pa-2 mb-2">
                <v-img :src=imagem alt="" width="100%" ratio="1/1"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" class="justify-center"/>
                <v-card-subtitle size="small">{{ nome }}</v-card-subtitle>
                <v-card-title>10X de {{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parcela)}}</v-card-title>
                <v-card-subtitle class="text-black">{{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}}</v-card-subtitle>
                <v-card-title>
                    <v-btn size="small" variant="outlined" @click="() => this.$store.dispatch('adicionarProduto',{produto})">Comprar</v-btn>
                </v-card-title>
            </v-card>
</template>

<script>

export default {
    props: ["nome", "id", "preco", "imagem", "parcela", "produto"]
}
</script>

<style scoped>
 
 
</style>