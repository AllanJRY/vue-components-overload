export default {
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
    }
}