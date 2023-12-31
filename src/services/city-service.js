const {CityRepository}=require("../repository/index");



class CityService{

    constructor(){
        this.cityRepository=new CityRepository();
    }
    async createCity({name}){
        try{
            const city = await this.cityRepository.createCity({ name});
            return city;
        }
        catch(error){
                console.log("Something went wrong in Service layer");
                throw {error};
        }
    }

    async deleteCity(cityId){
        try{
              const response=await this.cityRepository.deleteCity(cityId);
              return response;
    }
    catch(error){
        console.log("Something went wrong in Service layer");
        throw {error};
    }
}

    async updateCity(cityId, data){
        try{
            const city=await this.cityRepository.updateCity(cityId, data) 
            return city;  
        }
        catch(error){
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            const city=await this.cityRepository.getCity(cityID);
            return city;
        }
        catch(error){
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }


};

module.exports= CityService;
