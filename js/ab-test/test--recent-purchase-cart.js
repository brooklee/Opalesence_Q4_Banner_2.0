$( function( ) {

    if (upi && upi.User && upi.User.isLogged( )) {

        var dl = upi.dataLayer.recommendations,
            $wrapper = $( '<div id="cart-recent-purchases" class="recs-wrapper"/>' ),
            recsHeader = '<h2 class="section-heading">Your Recent Purchases</h2>',
            $carousel = $( '<div class="carousel promo-wrap" data-carousel></div>' ),
            $recsWrap = $( '<div class="carousel-list-container"></div>' );

        $carousel.append( $recsWrap );
        $wrapper.insertAfter($( '#checkoutWrapper' ));
        $wrapper.hide( );

        var defaults = ['navigation-style:progressive'],
            bp = upi.screen.getBreakPointValue( );

        upi.User.getSuggestedItems( ).then( function( data ) {
            var items = data.Items;

            if ( items && items.length > 0 ) {

                // Log to Adobe
                dl.setRecommendationType( 'Recently Purchased' ).send( );

                // initialize Item QuickView
                new upi.Cart.QuickView( '#cart-recent-purchases' );

                var recList = $( '<ul class="carousel-list"></ul>' ),
                    recItemsHtml = '';

                $( items ).each( function( i, item ) {
                    recItemsHtml += '<li class="promo-item">' + '<a href="' + upi.conf.svc.get_product_page( item.Sku ) + '">' + '<span class="thumbnail"><span class="img-ratio img-ratio-4x3">' + '<img src="' + upi.Services.Image.getSizedUrlForSku(item.Sku, { type: 'medium' }) + '" />' + '</span></span>' + '<p class="product-name">' + item.KitName + '</p>' + '</a>' + '<a data-quick-view class="button" href="' + upi.paths.STORE_URL + '/?items=' + item.Sku + '">Buy Now</a>' + '</li>';
                });

                recList.html( recItemsHtml );
                $recsWrap.html( recList );
                $wrapper.html( $carousel ).prepend( recsHeader );

                var recsCarousel = $wrapper.find( '.carousel' );

                var $scope = $( '#page-content' );
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
                $wrapper.slideDown( );
            } else {
                $wrapper.slideDown( );
            }
        })

    }

});
