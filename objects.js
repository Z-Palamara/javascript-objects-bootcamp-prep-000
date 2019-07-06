var playlist = {
  slushii: 'Find'
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},playlist, {[artistName]:songTitle});
}