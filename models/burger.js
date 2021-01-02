const orm = require("../config/orm")

const html = async (condition,value) => {
    try{
        if(condition == 1){
            const select = await orm.selectAll()
            return select
        }
        if(condition == 2){
            const insert = await orm.insert(value)
             
        }if(condition == 3){
            const update = await orm.update(value)
        }
        if(condition == 4){
            const deleted = await orm.deleted(value)
        }

        
        /* const devoured = select.filter(i => i.devoured == 1)
        const oreder = select.filter(i => i.devoured == 0) */
      }
    catch(e) {
        console.log(e)
    }
}

module.exports = html