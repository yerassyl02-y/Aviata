export default ($axios) => ({
        airlines() {
                return $axios.get(`/airlines`)
        },

})