export default ($axios) => ({
        flights() {
                return $axios.get(`/flights`)
        },

})