module.exports = {
    port: process.env.PORT || 3000,
    serviceDatabase: {
        port: process.env.SERVICE_DB_PORT || 4000
    },
    q:{
        uri: process.env.Q_URI || ''
    }
}