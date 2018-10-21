<template>
  <div class="card">
    <prismic-rich-text 
      class="title" 
      :field="project.title" />

    <prismic-rich-text 
      :field="project.content" /> 

    <div>
      <prismic-link class="button" 
      :field="project.external_url">
        Visit site
      </prismic-link>

      <prismic-link class="button" 
      :field="project.github">
        Github repository
      </prismic-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-card",
  props: ["project"]
};
</script>

<style >
.card {
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

.light .card {
  background: #ffffff;
}

.dark .card {
  background: #141414;
}

@media screen and (min-width: 900px) {
  .card {
    margin: 0 8em 8em 8em;
  }
}

.card:nth-child(odd) {
  margin-right: auto;
  box-shadow: -10px 10px 0 0 #d4d4d4;
}

.card:nth-child(even) {
  margin-left: auto;
  box-shadow: 10px 10px 0 0 #d4d4d4;
}

.title h1 {
  font-size: 3em;
  line-height: 1;
  margin: 0;
}

.button {
  display: inline-flex;
  font-size: 22px;
  text-decoration: none;
}

.button:after {
  content: "→";
  margin-left: 5px;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button:hover:after {
  transform: translateX(10px);
}

.light .button {
  color: #0c6bdf;
}

.dark .button {
  color: #84bd68;
}

.button + .button {
  margin-left: 1em;
}
</style>


