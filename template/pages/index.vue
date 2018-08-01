<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="header">Nuxt TypeScript Starter</h1>
      </div>
    </div>
    <div class="row">
      <Card v-for="person in people" :key="person.id" :person="person"></Card>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-target
        </button>
      </div>
      <div class="col-sm-6">
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
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
