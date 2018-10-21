<template>
  <div class="projects">
    <ProjectCard v-for="(project, i) in projects" 
      :key="'project-item-' + i"
      :class="'project-item-' + i"
      :project="project" />
    
    <EmptyCard v-if="!projects" v-for="n in 4" :key="'empty-'+n"/>
  </div>
</template>

<script>
import ProjectCard from "@/components/projects/Card.vue";
import EmptyCard from "@/components/projects/EmptyCard.vue";

export default {
  name: "project-list",
  props: {
    projects: Array
  },
  components: {
    ProjectCard,
    EmptyCard
  }
};
</script>

<style>
.projects {
  position: relative;
  margin-top: 6em;
}

.projects:after {
  position: absolute;
  content: "";
  width: 2px;
  top: -4em;
  left: 50%;
  bottom: -4em;
  background-color: #d4d4d4;
  transform: translateX(-50%);
  z-index: -1;
}

.projects:before {
  position: absolute;
  content: "";
  left: 50%;
  bottom: -4em;
  height: 2px;
  width: 2em;
  transform: translateX(-50%);
  background-color: #d4d4d4;
}
</style>



