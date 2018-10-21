<template>
  <footer>
    <h2 class="display">
      <span>Am I what you're looking for?</span>
      Hire Me
    </h2>

    <div v-if="copyMessage" class="alert"
      :class="{ success: copySuccess }">
      {{ copyMessage }}
    </div>

    <button v-else 
      class="button-block" 
      @click="copyEmail">
      Copy my email:&nbsp;<em>{{email}}</em></button>

    <h2>And / Or</h2>
    
    <prismic-link class="button-block"
    :field="fields.resume">
      Download my resumé
    </prismic-link>
    
  </footer>
</template>

<script>
export default {
  name: "base-footer",
  data() {
    return {
      email: "dustin@delatore.me",
      copyMessage: "",
      copySuccess: false,
      fields: {
        resume: null
      }
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    copyEmail() {
      this.$copyText(this.email).then(
        event => {
          (this.copySuccess = true),
            (this.copyMessage = `${
              event.text
            } has been copied to your clipboard? I look forward to hearing from you.`);
        },
        () => (this.copyMessage = "Failed to copy email address")
      );
    },
    getContent() {
      this.$prismic.client.getSingle("footer").then(document => {
        this.fields.resume = document.data.resume;
      });
    }
  }
};
</script>

<style>
footer {
  margin-top: 2em;
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

.button-block {
  display: inline-flex;
  flex-flow: wrap;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5em;
  padding: 0.6em 1.2em;
  line-height: 1.2;
  background-color: transparent;
  border: solid 2px #d4d4d4;
  color: #d4d4d4;
  cursor: pointer;
  border-radius: 2em;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button-block:hover {
  transform: scale(1.2);
}

.light .button-block {
  border-color: #141414;
  color: #141414;
  background: #ffffff;
}

.dark .button-block {
  background: #141414;
}

.alert {
  font-size: 1.3em;
  padding: 0.6em 1.2em;
}

.alert.success {
  border: solid 2px #84bd68;
  background: rgba(132, 189, 104, 0.3);
}

.light .aler.success {
  color: #141414;
}
</style>

