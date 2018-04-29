$(document).ready(() => {
    //Variables
    const steamWebApiUrl = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';
    let idArray = [];
    const jsonArray = [];
    $.getJSON(steamWebApiUrl,(json) => {
        for (let i = 0 ; i < json.applist.apps.length ; i++) {
            idArray.push(json.applist.apps[i].appid);
        }
    })
    
   //https://api.steampowered.com/ISteamApps/GetAppList/v2
    //player count https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=570
    //https://store.steampowered.com/api/appdetails?appids=846010
})
