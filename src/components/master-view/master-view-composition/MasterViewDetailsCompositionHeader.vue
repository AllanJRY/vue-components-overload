<template>
  <div class="details-header">
    <h4>{{ title }}</h4>
    <div class="actions">
      <slot name="actions">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterViewDetailsCompositionHeader",
  props: {
    title: String,
  }
}
</script>

<style scoped>
.details-header {
  padding: 0.2rem 0.5rem;
  color: var(--light-text-color);
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

h4 {
  margin: 0;
}
}
</style>