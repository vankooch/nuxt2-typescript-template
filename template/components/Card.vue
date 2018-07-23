<template>
<div class="col-3">
  <div class="card">
    <img class="card-img-top" :src="'https://robohash.org/' + person.first_name + '_' + person.last_name" alt="Avatar" style="width: 50px; height: auto;">
    <div class="card-body">
      <h5 class="card-title">{{person.first_name}} {{person.last_name}}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class Card extends Vue {
  @Prop() person;
}
</script>
