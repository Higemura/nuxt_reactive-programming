<template>
  <div class="container">
    <div>
      <h1 class="title">Reactive Programming</h1>
      <div class="LinkGroup">
        <LinkButton
          class="LinkGroup_Button"
          :href="'/chapter01/'"
          :text="'CHAPTER 01: Non Reactive'"
          :nuxtLink="false"
        />
        <LinkButton
          class="LinkGroup_Button"
          :href="'/chapter02/'"
          :text="'CHAPTER 02: Reactive without Frameworks'"
          :nuxtLink="false"
        />
        <LinkButton
          class="LinkGroup_Button"
          :href="'/chapter03/'"
          :text="'CHAPTER 03: Reactive with Vue'"
        />
        <LinkButton
          class="LinkGroup_Button"
          :href="'/chapter04/'"
          :text="'CHAPTER 04: Composables Reactive with Vue/Nuxt'"
        />
        <LinkButton
          class="LinkGroup_Button"
          :href="'/chapter05/'"
          :text="'CHAPTER 05: Non Reactive'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  components: {
    LinkButton: () => import('~/components/molecules/buttons/LinkButton/index.vue'),
  },
})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.LinkGroup {
  padding-top: 15px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  &_Button {
    margin: 0 16px 16px 0;
  }
}
</style>
