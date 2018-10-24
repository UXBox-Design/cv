<template>
  <section>
    <About :about="fields.about" />
    <ProjectList :projects="fields.projects" />
    <BaseFooter />
  </section>
</template>

<script>
import About from "@/components/About.vue";
import ProjectList from "@/components/projects/List.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: 'home-view',
  components: {
    About,
    ProjectList,
    BaseFooter
  },
  data() {
    return {
      fields: {
        title: null,
        about: null,
        projects: null
      }
    }
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("home").then(document => {
        this.fields.title = document.data.display;
        this.fields.about = document.data.about;
        this.fields.projects = document.data.projects;
      });
    }
  }
  
}
</script>

