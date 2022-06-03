<template>
  <div class="details-content" :class="{'collapsed': collapsed}">
    <slot name="content">
      <table v-if="null !== item">
        <tr>
          <th>Nom</th>
          <td>{{ item.name }}</td>
        </tr>
        <tr>
          <th>Date de création</th>
          <td>{{ item.createdAt }}</td>
        </tr>
      </table>
    </slot>
  </div>
</template>

<script>
export default {
  name: "MasterViewDetailsCompositionDefaultContent",
  props: {
    item: {
      type: Object,
      default: null,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.details-content {
  padding: 0.5rem;
  background-color: var(--quaternary-color);
  transition-duration: 0.3s;

  &.collapsed {
    height: 0;
    padding: 0;
  }

  table {
    width: 100%;
    color: var(--light-text-color);
  }
}
</style>