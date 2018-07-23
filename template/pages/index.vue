<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="header">Nuxt TypeScript Starter</h1>
      </div>
    </div>
    <div class="row">
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import Card from "~/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State people;
}

</script>
