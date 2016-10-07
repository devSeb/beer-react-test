
function loadDistantProducts(url) {

    return new Promise(function (resolve, reject) {
        $( document ).ready(function() {
            //console.log( "ready!" );

           $.ajax({
                url: url,
                type: "get",
                dataType: 'json',
                success: function(response) {
                    //console.log("response.data.results = > ", response);
                    if ( response  ) {
                        resolve(JSON.parse(JSON.stringify(response.listBeers)));
                    }
                },
                error: function(xhr) {
                    console.log("err xhr = ", xhr);
                    reject(xhr);
                }
            });

        });
    });
}



export function searchBeerProducts() {
    //console.log("searchBeerProducts ");
    var url = 'http://localhost:8081/beers';

    let promise  = new Promise(function (resolve, reject) {
        loadDistantProducts(url).then(function (content) {
            //console.log(" LOAD PRODUCTS ");
            //console.log( "element = > ", JSON.parse(content) );
            if ( content ) {
                resolve(JSON.parse(content));
            }
        }).catch(function (err) {
            console.log("err = ", err);
            reject(err);
        });

    });

    //console.log("Promise = ", promise);
    return promise;
}
