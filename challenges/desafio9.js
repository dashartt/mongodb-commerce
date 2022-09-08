db.produtos.find(
    {
      valoresNutricionais: {
        $elemMatch: {
          quantidade: { $lt: 500},
          unidadeMedida: { $eq: 'kcal' },
        },
      },
    },
    { 
        _id: false,
        nome: true,        
    },
);