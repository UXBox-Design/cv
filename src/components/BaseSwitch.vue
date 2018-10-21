<template lang="html">
  <div class="switch-container"> 
    <slot />
    <label class="switch">
      <input type="checkbox"
        v-bind="$attrs"
        @input="updateCheck($event)"/>
      <span class="slider"></span>
    </label> 
  </div>
</template>

<script>
export default {
  name: "base-switch",
  inheritAttrs: false,
  methods: {
    updateCheck(event) {
      this.$emit("input", event.target.checked);
    }
  }
};
</script>

<style scoped>
.switch-container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin-right: 5px;
  margin-left: 5px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slider:before {
  position: absolute;
  content: "";
  top: 50%;
  left: 14px;
  right: 14px;
  height: 10px;
  transform: translateY(-50%);
  border-radius: 20px;
  background: #2196f3;
}

.slider:after {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: #ffeb99;
  border: solid 2px #ffde7a;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 50%;
  box-shadow: 0 0 10px 2px #eecd64;
}

input:checked + .slider:after {
  background-color: transparent;
  border-color: transparent;
  box-shadow: -8px 4px 0 0 #f9e6af;
  transform: translate(41px, -5px);
}

input:checked + .slider:before {
  background: gray;
}
</style>
