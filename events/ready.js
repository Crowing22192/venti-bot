module.exports = (client) => {
    console.log('Cmon\' let\'s go wind-gliding!');
    client.user.setPresence({ activities: [{ name: 'Nướng Paimon'}], status: 'online', type: 'WATCHING'} );
}