//In order to assure city repository and all works fine, we need to have access to the models. So we are requiring models. 
const {City}=require ("../models/index");  // We will add the path of 'index' file as it will give access to all the models present in the folder

class CityRepository {
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        } catch(error){
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
              await City.destroy({
                where:{
                    id: cityId
                }
              });
        }catch(error){
           throw {error}; 
        }
    }
}

module.exports = CityRepository;