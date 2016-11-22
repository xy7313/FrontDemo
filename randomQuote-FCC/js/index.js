

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
function getRandomColor(){
            var R = Math.floor(Math.random()*255);
              var G = Math.floor(Math.random()*255);
            var B = Math.floor(Math.random()*255);

           // console.log(rgb);
            return rgbToHex(R,G,B);
};
function rgbToHex(R,G,B) {return "#"+toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}


var currentQuote = '', currentAuthor = '';
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function getQuote() {
  $.ajax({
     headers: {
      "X-Mashape-Key": "KWGV08c53MmshHFYOIymgInPgt8rp1gqWHojsnhEjbn826ZMVc",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
     type: "POST",
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
     success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
        console.log(currentQuote);

      if(inIframe())
      {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      }
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(r.quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(r.author);
        });

      // var color = getRandomColor();
      //  console.log(color);
      // $("html body").animate({
      //   backgroundColor: color,
      //   color: color
      // }, 1000);
      // $(".btn").animate({
      //   backgroundColor: color
      // }, 1000);
    }
  });
}
$(document).ready(function() {
  getQuote();
  $('#newQ').on('click', getQuote);
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
  $('#tumblr-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
    }
  });
});

