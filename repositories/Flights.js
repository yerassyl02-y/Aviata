export default ($axios) => ({
        flights(payload) {
                return $axios.get(`/flights`, payload)
        },

})