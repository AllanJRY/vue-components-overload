<template>
  <div id="app">
    <TheSideNav :items="items" @item-selected="handleItemSelection" />
    <MasterView :item="selectedItem" />
  </div>
</template>

<script>
import TheSideNav from "@/components/TheSideNav";
import MasterView from "@/components/master-view/MasterView";

export default {
  name: 'App',
  components: {
    MasterView,
    TheSideNav
  },
  data() {
    return {
      selectedItem: null,
      items: [
        {
          id: 5468,
          type: 'Garage',
          name: 'Garage Auto',
          createdAt: '2001-05-03',
          places: [
            {
              type: 'Place voiture',
              quantity: 5,
            },
            {
              type: 'Place moto',
              quantity: 10,
            },
          ]
        },
        {
          id: 7889,
          type: 'Hotel',
          name: "L'hotel",
          createdAt: '2005-10-14',
          bedrooms: [
            {
              size: '24m2',
              nbBeds: 1,
              tv: false,
              shower: false,
            },
            {
              size: '50m2',
              nbBeds: 3,
              tv: true,
              shower: true,
            },
          ],
        },
        {
          id: 1577877,
          type: 'Hopital',
          name: 'Club med',
          createdAt: '2010-11-11',
          buildings: [
            {
              name: 'Batiment A',
              service: 'Cardiologie',
            },
            {
              name: 'Batiment M1',
              service: 'Maternité',
            },
          ],
        },
        {
          id: 86666,
          type: 'Villa',
          name: 'La belle',
          createdAt: '2020-01-23',
          rooms: []
        },
      ],
    };
  },
  methods: {
    handleItemSelection(selectedItem) {
      this.items.forEach(item => {
        if (item === selectedItem) this.selectedItem = selectedItem;
      });
    }
  }
}
</script>

<style lang="scss">
:root {
  //--primary-color: #564256;
  //--secondary-color: #FC814A;
  //--tertiary-color: #d3cad7;
  //--quaternary-color: #E8E8E8;
  //--quinary-color: #BFBFBF;

  //--primary-color: #3F3F37;
  //--secondary-color: #DE541E;
  //--tertiary-color: #D6D6B1;
  //--quaternary-color: #878472;
  //--quinary-color: #BFBFBF;

  --primary-color: #28536B;
  --secondary-color: #C2948A;
  --tertiary-color: #F6F0ED;
  --quaternary-color: #7EA8BE;
  --quinary-color: #BBB193;

  --light-text-color: #f1f1f1;
}

body {
  height: 100vh;
  background-color: var(--quaternary-color);

  #app {
    height: 100%;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 100%;
    gap: 0.5rem;
    padding: 0.5rem;

    .nothing-selected {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

button {
  border: 0;
  color: var(--light-text-color);
  padding: 0.5rem 1rem;
  border-radius: 7px;
  background-color: var(--secondary-color);
}
</style>
