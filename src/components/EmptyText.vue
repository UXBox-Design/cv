<template>
  <div class="empty">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "empty-text"
};
</script>


<style>
.empty {
  display: flex;
  flex-flow: wrap;
}

.empty > div {
  overflow: hidden;
  position: relative;
  height: 22px;
  width: 100%;
  margin-bottom: 1.3em;
  background: #d4d4d4;
  animation: heartbeat 2s ease-in-out infinite;
}

.empty > div:last-of-type {
  width: 45%;
}

@keyframes heartbeat {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
