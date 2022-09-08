db.produtos.updateMany(
    {
        valoresNutricionais: {
            $elemMatch: {
              $and: [
                { percentual: { $gt: 20, $lt: 40 } },
                { tipo: "sódio" },
              ],
            },
        },
    },
    {
        $push: {
            tags: {  
                $each: ["contém sódio"],
            },
        },
    },
);

db.produtos.find(
    {

    },
    {
        _id: false,
        nome: true,        
        tags: true,
    },
);