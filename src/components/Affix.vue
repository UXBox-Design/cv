<template>
  <div class="fixed">
    <slot />
  </div>
</template>

<style>
.fixed {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 20px;
}
</style>

