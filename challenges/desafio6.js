db.produtos
    .find(
        {
            $and: [
              { curtidas: { $lt: 100 } },
              { curtidas: { $gt: 10 } },
            ],
        }, 
        { 
            _id: false,
            nome: true,
            curtidas: true,            
        },
    );