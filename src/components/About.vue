<template>
  <section class="about">
    <h1 class="display">
      <span>Hello visitor,</span>
      My name is<br/> Dustin Delatore.</h1>
      <div v-if="about" class="content">
        <prismic-rich-text :field="about" />
      </div>
      <EmptyText v-else />
  </section>
</template>

<script>
import EmptyText from "@/components/EmptyText.vue";

export default {
  name: "about-section",
  props: ["about"],
  components: {
    EmptyText
  }
};
</script>

<style scoped>
.about {
  max-width: 680px;
  margin: 0 auto;
  text-align: left;
}
.display {
  font-size: 4em;
  line-height: 1.2;
  font-weight: 900;
  font-family: "Montserrat", sans-serif;
}

.display > span {
  display: block;
  font-size: 0.3em;
}

.content {
  font-size: 1.2em;
  max-width: 680px;
  line-height: 1.8;
}
</style>
