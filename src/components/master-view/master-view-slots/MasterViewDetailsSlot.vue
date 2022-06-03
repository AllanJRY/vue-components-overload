<template>
  <div class="details">
    <div class="details-header">
      <h4>Details</h4>
      <button @click.prevent="toggleCollapse">{{ collapseBtnLabel }}</button>
    </div>
    <div class="details-content" :class="{'collapsed': collapsed}">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterViewDetailsSlot",
  props: {
    type: String,
    item: Object,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    }
  },
  computed: {
    collapseBtnLabel() {
      return this.collapsed ? 'Ouvrir' : 'Réduire';
    }
  },
}
</script>

<style lang="scss" scoped>
.details {
  border-radius: 7px;
  overflow: hidden;

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
}
</style>