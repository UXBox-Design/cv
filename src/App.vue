<template>
  <div id="app" :class="[darkMode ? 'dark' : 'light']">
    
    <router-view></router-view>
    
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
import Affix from "@/components/Affix.vue";
import BaseSwitch from "@/components/BaseSwitch.vue";

export default {
  name: "app",
  components: {
    Affix,
    BaseSwitch
  },
  data() {
    return {
      darkMode: false
    }
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
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141414;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 40px;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

@media screen and (min-width: 500px) {
  #app {
    font-size: 18px;
  }
}

.dark {
  background: #141414;
  color: #d4d4d4 !important;
}
</style>
