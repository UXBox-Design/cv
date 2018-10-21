<template>
  <div id="app" :class="[darkMode ? 'dark' : 'light']">
    
    <About :about="fields.about" />

    <ProjectList :projects="fields.projects" />

    <Affix>
      <BaseSwitch 
        v-model="darkMode"
        :checked="darkMode">
        <span v-text="colorModeText"></span>
      </BaseSwitch>
    </Affix>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import ProjectList from "@/components/projects/List.vue";
import Affix from "@/components/Affix.vue";
import BaseSwitch from "@/components/BaseSwitch.vue";

export default {
  name: "app",
  components: {
    About,
    ProjectList,
    Affix,
    BaseSwitch
  },
  data() {
    return {
      darkMode: false,
      fields: {
        title: null,
        about: null,
        projects: null
      }
    };
  },
  created() {
    this.getContent();
  },
  mounted() {
    if (this.getLocalStorage()) {
      this.darkMode = JSON.parse(this.getLocalStorage());
    }
  },
  watch: {
    darkMode: {
      handler() {
        localStorage.setItem(this.$storagekey, JSON.stringify(this.darkMode));
      },
      deep: true
    }
  },
  computed: {
    colorModeText() {
      return this.darkMode ? "Dark" : "Light";
    }
  },
  methods: {
    getLocalStorage() {
      return localStorage.getItem(this.$storagekey);
    },
    getContent() {
      this.$prismic.client.getSingle("home").then(document => {
        this.fields.title = document.data.display;
        this.fields.about = document.data.about;
        this.fields.projects = document.data.projects;
      });
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141414;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;
  padding: 40px;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.dark {
  background: #141414;
  color: #d4d4d4 !important;
}
</style>
