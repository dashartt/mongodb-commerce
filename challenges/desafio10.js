db.produtos.find(
    {
      valoresNutricionais: {
        $elemMatch: {
            $and: [
                { tipo: 'proteínas' }, 
                { percentual: { $lte: 40 } },
                { percentual: { $gte: 30 } },
            ],
        },
      },      
    },
    { 
        _id: false,
        nome: true,           
    },
);