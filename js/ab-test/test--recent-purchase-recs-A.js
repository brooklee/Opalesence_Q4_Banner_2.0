
$(function(){

        var dl = upi.dataLayer.recommendations,
            $brandBar = $( '#brands-banner' ),
            recsHeader = '<h2 class="section-heading">Your Recent Purchases</h2>';

        $brandBar.hide();

        $.get( '/en-us/quick-order/Pages/recent-purchases.aspx', function( data ){
            var skus = [];

            $( data ).find( '.lineItem .sku' ).map(function( i, sku ){
                var id = $( sku ).text().trim().toUpperCase();
                if( id.indexOf( '-' ) === -1 ) id = id + '-';

                return skus.push( id );
            });

            if( skus.length > 0 ) {
                var filteredSkus = skus.slice( 0, 7 );
                // console.log( 'Available sku list:', filteredSkus );
                // limit results to 7 skus

                upi.Services.ECommerce( '/getItemInfoJson', { skus: filteredSkus }, {
                    success: function( data ){
                        if( data && data.Result ) {
                            if( data.Result.ReasonCode === 1 ) {
                                // do something with the results
                                // Log to Adobe
                                dl.setRecommendationType( 'Recently Purchased' ).send();

                                // console.log( data.Items );
                                var recList = '',
                                    items = data.Items;

                                $( items ).each(function( i, item ){
                                    recList += '<a class="brand-logo-wrapper" style="width:'+ (100 / items.length) +'%" href="'+ upi.conf.svc.get_product_page( item.Sku ) +'">' +
                                            '<img src="' +upi.Services.Image.getSizedUrlForSku( item.Sku, { type: 'medium' } )+ '" />' +
                                            '<span class="label">' + item.KitName + '</span>' +
                                        '</a>';
                                });

                                $brandBar.html( recsHeader + recList );
                            }
                        }
                    },
                    error: function(){ $brandBar.slideDown() },
                    complete: function(){ $brandBar.slideDown() }
                });
            }
            else {
                $brandBar.slideDown();
            }
        } )

});
