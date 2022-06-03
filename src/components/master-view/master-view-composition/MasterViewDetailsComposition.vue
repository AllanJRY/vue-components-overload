<template>
  <div class="details">
    <MasterViewDetailsCompositionHeader title="Détails">
      <template v-slot:actions>
        <button @click.prevent="toggleCollapse">{{ collapseBtnLabel }}</button>
      </template>
    </MasterViewDetailsCompositionHeader>
    <MasterViewDetailsCompositionDefaultContent :item="item" :collapsed="collapsed" />
  </div>
</template>

<script>
import MasterViewDetailsCompositionHeader
  from "@/components/master-view/master-view-composition/MasterViewDetailsCompositionHeader";
import MasterViewDetailsCompositionDefaultContent
  from "@/components/master-view/master-view-composition/MasterViewDetailsCompositionDefaultContent";
export default {
  name: "MasterViewDetailsComposition",
  components: {MasterViewDetailsCompositionDefaultContent, MasterViewDetailsCompositionHeader},
  props: {
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
  }
}
</script>

<style lang="scss" scoped>
.details {
  border-radius: 7px;
  overflow: hidden;
}
</style>