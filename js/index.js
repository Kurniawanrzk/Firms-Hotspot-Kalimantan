function changeHref(){
    var url = 'https://firms.modaps.eosdis.nasa.gov/api/area/csv/f82ecddd747a02cc05d8053cf515ad97/VIIRS_SNPP_NRT/110.76,-3.62,115.74,0.74/1/';
    var a = document.createElement("a");
    a.href = url;
    fileName = url.split("/").pop();
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}


