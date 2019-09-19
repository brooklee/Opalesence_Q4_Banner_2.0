$( function( ) {

    var dl = upi.dataLayer.recommendations,
        $brandBar = $( '#brands-banner' ),
        recsHeader = '<h2 class="section-heading">Your Recent Purchases</h2>',
        $recsWrap = $( '<div class="carousel promo-wrap" data-carousel><div class="carousel-list-container"></div></div>' );

    $brandBar.hide( );

    var defaults = ['navigation-style:progressive'],
        bp = upi.screen.getBreakPointValue( );

    upi.User.getSuggestedItems( ).then( function( data ) {
        var items = data.Items;

        if ( items && items.length > 0 ) {

            // Log to Adobe
            dl.setRecommendationType( 'Recently Purchased' ).send( );

            // initialize Item QuickView
            new upi.Cart.QuickView( '#brands-banner' );

            var recList = $( '<ul class="carousel-list"></ul>' ),
                recItemsHtml = '';

            $( items ).each( function( i, item ) {
                recItemsHtml += '<li class="promo-item">' + '<a href="' + upi.conf.svc.get_product_page( item.Sku ) + '">' + '<span class="thumbnail"><span class="img-ratio img-ratio-4x3">' + '<img src="' + upi.Services.Image.getSizedUrlForSku(item.Sku, { type: 'medium' }) + '" />' + '</span></span>' + '<p class="product-name">' + item.KitName + '</p>' + '</a>' + '<a data-quick-view class="button" href="' + upi.paths.STORE_URL + '?items=' + item.Sku + ',1">Buy Now</a>' + '</li>';
            });

            recList.html( recItemsHtml );
            $recsWrap.html( recList );
            $brandBar.html( $recsWrap ).prepend( recsHeader );

            var recsCarousel = $brandBar.find( '.carousel' );

            var $scope = $( '#body-content' );
            initCarousel( $scope, defaults );

            $( window ).smartresize( function( ) {
                var curBreakPoint = upi.screen.getBreakPointValue( );
                if ( curBreakPoint !== bp ) {
                    initCarousel( $scope, defaults );
                    bp = curBreakPoint;
                }
            });

            function initCarousel( scope, options ) {
                var opts = options.slice.apply( options );

                scope.corpus( 'off' );
                if (Modernizr.mq( upi.mq.min.screenBase ) || !Modernizr.mq( 'only all' ))
                    opts.push( 'multiplier:4' );
                else if (Modernizr.mq( upi.mq.min.screenMedium ))
                    opts.push( 'multiplier:3' );
                else if (Modernizr.mq( upi.mq.min.screenSmall ))
                    opts.push( 'multiplier:2' );
                else
                    opts.push( 'multiplier:1' );

                // apply declarative settings
                recsCarousel.data('options', opts.join( ',' ).toString( ));
                scope.corpus( 'carousel' );
            }

            $( '#brand-wrapper' ).css({ padding: '20px 0' });
        }

        $brandBar.slideDown( 400 );
    }, function( ) {
        $brandBar.slideDown( 400 )
    });

});
