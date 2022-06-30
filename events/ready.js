module.exports = (client) => {
    console.log('Venti: Cmon\', let\' go wind-gliding, shall we?');
    //client.user.setPresence({ activities: [{ name: 'TEST'}], status: 'online'} );

    const arrayOfStatus = [
        `Nướng Paimon`,
        `Uống rượu với Morax`,
        `Ăn đồ ngọt với Ei`,
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        client.user.setPresence({ activities: [{ name: arrayOfStatus[index]}], status: 'online', type: 'WATCHING'} );
        index++;
}, 5000)
}