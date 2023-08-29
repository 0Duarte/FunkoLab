import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      mensagem: "ola vuex",
      MeuCarrinho: [],
    };
  },
  mutations: {
    adicionarProdutoAoCarrinho(state, value) {

        const produtoNoCarrinho = state.MeuCarrinho.find(produto => produto.id === value.id)

        if (produtoNoCarrinho) {

            state.MeuCarrinho = state.MeuCarrinho.map(item => {
                if (item.id === value.id) {
                    item.quantidade = item.quantidade + 1
                }
                return item
            })

        } else {
            state.MeuCarrinho = [
                ...state.MeuCarrinho,
                {
                    ...value,
                    quantidade: 1
                }
            ]
        }
    }
  },
  actions: {
    adicionarProduto(context, value) {
      console.log("adicionar produto deu boa");
      console.log(value);
      context.commit("adicionarProdutoAoCarrinho", value.produto);
    }
  }
});

export default store;
