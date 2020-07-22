let playlist = {
  Beatles: "Here Comes the Sun",
  PhoebeBridgers: "Don't Know"
};

function updatePlaylist(list, name, song){
  playlist[name] = song;
  return playlist
}

function removeFromPlaylist(list, name){
  delete playlist[name];
  return playlist 
}
  









