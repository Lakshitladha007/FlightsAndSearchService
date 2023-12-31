// We are creating this file because let's say we have 2 files as city-repository and flight-repository 
// inside "repository" folder, now if want to use these repository files in my service layer, so i will
// have to write 2 require statements in the service layer file.

// a better way is to craete a "index.js" file and do module.exports in which we pass all the repository 
//files as key value pairs

module.exports={
    CityRepository: require("./city-repository")
}