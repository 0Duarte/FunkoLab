<template>
    <div>
        <h1>Produto</h1>
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
        axios.get("http://localhost:3000/produtos")
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
