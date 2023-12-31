//In order to assure city repository and all works fine, we need to have access to the models. So we are requiring models. 
const {City}=require ("../models/index");  // We will add the path of 'index' file as it will give access to all the models 
                                           //present in the folder, as "index" file contains logic due to which all models 
                                           //can be accessed form it

class CityRepository {
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        } catch(error){
            console.log("Something went wrong in Repository layer");
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
              return true;
        }catch(error){
            console.log("Something went wrong in Repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){      // passing 2 parameters, 1st to identify which column needs to be updated and 2nd 
                                         //with which data it is be updated
        try{
            const city= await City.update(data, {
                where: {
                    id:cityID
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in Repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);        // findByPk fxn directly helps us to search using 
                                                           //"primary_key".
             return city;
          } catch(error){
            console.log("Something went wrong in Repository layer");
            throw {error};
          }
        }
    
}


module.exports = CityRepository;