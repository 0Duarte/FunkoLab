<template>
    <div>
        <div class="funkos">
            <Card
            v-for="produto in produtoLista"
            :produto="produto"
            :id="produto.id"
            :imagem="produto.imagem"
            :nome="produto.nome"
            :preco="produto.preco" 
            :parcela="produto.parcela"
            />
        </div>

   
    </div>
</template>

<script>
import axios from "axios"
import Card from "../../components/Card.vue"
export default {
    data() {
        return {
            produtoLista: [],
            mensagemGlobal: this.$store.state.mensagem
        };
    },
    methods:{
    },
    mounted() {
        axios.get("https://json-no-vercel.vercel.app/produtos")
            .then(res => this.produtoLista = res.data)
            .catch(error => console.log(error));
    },
    components: { Card }
}

</script>

<style scoped>
    .funkos{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 50vw;
        margin: auto;
}</style>
