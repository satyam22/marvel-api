var api=require('./index.js');
var fs=require('fs');
var marvel = api.createClient({
    publicKey: '7ff37d873ff36ca35edbae4765bfc386'
  , privateKey: 'd71d88b301d5be4cb3d94f00f297dc57276616a6'
  });
  
  
  
  marvel.characters.findAll(function(err,results){
      if(err)
      throw err;
      fs.writeFile('data.json',JSON.stringify(results),function(err){
          if(err)
          console.log(err);
      });
  })