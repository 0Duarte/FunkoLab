<template>
    <div>
        <h1>Carrinho</h1>

        <v-table>
            <thead>
                <tr>
                    <th class="text-left">Imagem</th>
                    <th class="text-left">Nome</th>
                    <th class="text-left">Quantidade</th>
                    <th class="text-left">Subtotal</th>


                </tr>
            </thead>
            <tbody>
                <tr v-for="item in MeuCarrinho" :key="item.name">
                    <td><img :src="item.imagem" width="50"></td>
                    <td>{{ item.nome }}</td>
                    <td>{{ item.quantidade }}</td>
                    <td>{{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco * item.quantidade) }}</td>
                </tr>
            </tbody>
        </v-table>
        <template />



    </div>
</template>

<script>
import Card from "../../components/Card.vue"
export default {
    data() {
        return {
            MeuCarrinho: this.$store.state.MeuCarrinho
        }
    },
    components: { Card }
}
</script>

