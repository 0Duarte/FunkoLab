<template>
  <v-layout>
    <v-app-bar color="red">
      <v-app-bar-title><router-link to="/">FunkoLab</router-link></v-app-bar-title>

      <v-btn icon>
        <router-link to="/carrinho">
        {{ this.$store.state.MeuCarrinho.length}}
          <v-icon color="#FFF">mdi-cart</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style>
  *{
    color: inherit;
    text-decoration: none;
  }
</style>