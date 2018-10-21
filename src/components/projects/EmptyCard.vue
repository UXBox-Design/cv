<template>
  <div class="empty-card">
    <EmptyText />
  </div>
</template>

<script>
import EmptyText from "@/components/EmptyText.vue";
export default {
  name: "empty-card",
  components: {
    EmptyText
  }
};
</script>


<style>
.empty-card {
  display: flex;
  flex-direction: column;
  max-width: 560px;
  padding: 4em;
  margin-top: 4em;
  margin-bottom: 4em;
  text-align: left;
  line-height: 1.6;
  border: solid 1px #d4d4d4;
  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.light .empty-card {
  background: #ffffff;
}

.dark .empty-card {
  background: #141414;
}

@media screen and (min-width: 900px) {
  .empty-card {
    margin: 0 8em 8em 8em;
  }
}

.empty-card:nth-child(odd) {
  margin-right: auto;
  box-shadow: -10px 10px 0 0 #d4d4d4;
}

.empty-card:nth-child(even) {
  margin-left: auto;
  box-shadow: 10px 10px 0 0 #d4d4d4;
}
</style>
