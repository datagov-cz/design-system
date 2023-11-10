<script setup lang="ts">
import {ref} from "vue";

const domain = ref(null)

if (typeof window !== "undefined") {
  domain.value = window.location.origin
}

const props = defineProps({
  storybookUrl: String,
  documentationUrl: String,
})

const redirectToStorybook = () => {
  window.location.href = domain.value + props.storybookUrl
}

</script>

<template>
  <div class="flex flex-row gap-2 mb-12">
    <client-only>
      <template v-if="props.storybookUrl">
        <gov-button @gov-click="redirectToStorybook" variant="primary" type="outlined" size="m">
          <gov-icon type="custom" name="storybook" slot="left-icon"></gov-icon>
          Storybook
        </gov-button>
      </template>
      <template v-if="props.documentationUrl">
        <gov-button :href="props.documentationUrl" variant="primary" type="outlined" size="m">
          <gov-icon type="basic" name="book" slot="left-icon"></gov-icon>
          Dokumentace
        </gov-button>
      </template>
    </client-only>
  </div>
</template>
