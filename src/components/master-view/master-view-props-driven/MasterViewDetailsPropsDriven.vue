<template>
  <div class="details">
    <div class="details-header">
      <h4>Details</h4>
      <button @click.prevent="toggleCollapse">{{ collapseBtnLabel }}</button>
    </div>
    <div class="details-content" :class="{'collapsed': collapsed}">
      <table v-if="null === type">
        <tr>
          <th>Nom</th>
          <td>{{ item.name }}</td>
        </tr>
        <tr>
          <th>Date de création</th>
          <td>{{ item.createdAt }}</td>
        </tr>
      </table>

      <table v-else-if="'Garage' === type">
        <thead>
        <tr>
          <th>Place</th>
          <th>Quantité</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="placeType in item.places">
          <td>{{ placeType.type }}</td>
          <td>{{ placeType.quantity }}</td>
        </tr>
        </tbody>
      </table>

      <table v-else-if="'Hotel' === type">
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

      <table v-else-if="'Hopital' === type">
        <thead>
        <tr>
          <th>Nom</th>
          <th>Service</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="building in item.buildings">
          <td>{{ building.name }}</td>
          <td>{{ building.service }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterViewDetailsPropsDriven",
  props: {
    type: {
      type: String,
      default: null,
    },
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