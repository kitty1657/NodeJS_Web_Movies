import countryService from '../services/countryService';

const hanldeGetAllCountries = async (req,res)=>{
    let id = req.query.id
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing parameters",
            countries:[]
        })
    }

    let countries = await countryService.getAllCountries(id)
    return res.status(200).json({
        errCode: 0,
        countries
    })
}

module.exports = {
    hanldeGetAllCountries: hanldeGetAllCountries
}