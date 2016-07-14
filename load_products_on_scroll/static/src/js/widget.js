$(document).ready(function() {
    var view_mode = ''

    $('.oe_website_sale').each(function() {
        $('.oe_website_sale').append('<p class="page hidden">1</p>');
        $('.oe_website_sale').append('<a class="showmore">Show more... </a>');
        $('#products_grid').after("<div id='loading'><img src='load_products_on_scroll/static/description/loading.gif' alt='Loading...'/><p>Loading more products...</p></div>");

        var scroll = HI.optInCookies.getCookie("scroll");
        if (scroll === 'page') {
            $('.products_pager ul').show();
            $('.oe_website_sale').find('.showmore').hide();
        } else if (scroll === 'click') {
            $('.products_pager ul').hide();
            $('.oe_website_sale').find('.showmore').show();
        } else if (scroll === 'scroll') {
            $('.products_pager ul').hide();
            $('.oe_website_sale').find('.showmore').hide();
        }

        var tmp_array = new Array();
        var total_pages = parseInt($('.products_pager ul').find('li').eq(-2)[0].innerText, 10);
        if (isNaN(total_pages)) total_pages = 0;
        var url = window.location.href; // Returns full URL
        //    if(url.search('page') === -1){
        //        url = url.substring(0, url.indexOf('/page'));
        //    }
        url = url.replace(new RegExp('#'), '');

        if ($('#products_grid table tbody tr:last td:last').length) {
            view_mode = 'grid'
        } else {
            view_mode = 'list'
        }

        $(this).on('click', '.showmore', function(ev) {
            var nextPage = parseInt($('.page')[0].innerText, 10) + 1;
            if (nextPage <= total_pages && tmp_array.indexOf(nextPage) == -1) {
                getresult(nextPage, url);
                tmp_array.push(nextPage);
            } else {
                $('.oe_website_sale').find('.showmore').hide();
            }
        });
        $(window).scroll(function() {
            if (HI.optInCookies.getCookie("scroll") === 'scroll' && $(window).scrollTop() == $(document).height() - $(window).height()) {
                if ($(window).scrollTop() >= $('#products_grid').offset().top + $('#products_grid').outerHeight() - window.innerHeight) {
                    var page = parseInt($('.page')[0].innerText, 10) + 1

                    if (page <= total_pages && tmp_array.indexOf(page) == -1) {
                        getresult(page, url);
                        tmp_array.push(page);
                    }

                }
            }
        });
    });
    //TODO: replace url which contains page/2

    function getresult(page, url) {
        $.ajax({
            url: url + '/page/' + page,
            type: "GET",
            data: {},
            beforeSend: function() {
                $('#loading').show();
            },
            complete: function() {
                $('#loading').hide();
            },
            success: function(data) {
                $('.page')[0].innerText = page;

                var div = document.createElement('div');
                div.innerHTML = data;

                if (view_mode == 'list') {
                    $('.oe_product').last().after($(div).find('.oe_product'));
                } else if (view_mode == 'grid') {
                    var rows = $(div).find('#products_grid').children().children().children()
                    $('#products_grid').children().children().children().last().after(rows);
                }
            },
            error: function() {}
        });
    }
});
