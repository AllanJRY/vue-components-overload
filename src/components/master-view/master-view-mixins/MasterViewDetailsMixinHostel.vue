<template>
  <div class="details">
    <div class="details-header">
      <h4>Details</h4>
      <button @click.prevent="toggleCollapse">{{ collapseBtnLabel }}</button>
    </div>
    <div class="details-content" :class="{'collapsed': collapsed}">
      <table>
        <thead>
        <tr>
          <th>Taille</th>
          <th>Nombre de lits</th>
          <th>Tv incluse</th>
          <th>Douche incluse</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="bedroom in item.bedrooms">
          <td>{{ bedroom.size }}</td>
          <td>{{ bedroom.nbBeds }}</td>
          <td>{{ bedroom.tv ? 'oui': 'non' }}</td>
          <td>{{ bedroom.shower  ? 'oui': 'non' }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MasterViewDetailsMixin from './MasterViewDetailsMixin';

export default {
  name: "MasterViewDetailsMixinHostel",
  mixins: [MasterViewDetailsMixin],
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