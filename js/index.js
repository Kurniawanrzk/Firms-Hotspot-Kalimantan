function dari(){
    var dari = document.getElementById('dari').value;
    return dari;
}
function jarak(){
var jarak = document.getElementById('jarak').value;
return jarak;
}

function daerah(){
    var daerah = document.getElementById('daerah').value;
    return daerah;
    }

function ubahHref(){
document.getElementById('firms').href = 'https://firms.modaps.eosdis.nasa.gov/api/area/csv/f82ecddd747a02cc05d8053cf515ad97/VIIRS_SNPP_NRT/'+daerah()+'/'+jarak()+'/'+dari()+'/';
}
