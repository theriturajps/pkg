var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"Related Post",widgetStyle:1,homePage:"https://www.mahatemplates.net",numPosts:4,summaryLength:100,titleLength:"auto",thumbnailSize:100,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/?\?m=\d+(\&|$)|\/+$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span class="bg_overlay"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+(\-c)?/, "/s"+d.thumbnailSize+"-c"):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><div class="related-post-item-thumbnail"><img class="lazy" alt="" data-src="'+r+'" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" aria-label="Related Post" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" aria-label="Related Post" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" aria-label="Related Post" href="'+v+'"'+b+'><div class="related-post-item-thumbnail"><img class="lazy" alt="" data-src="'+r+'" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" aria-label="Related Post" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><div class="related-post-item-thumbnail"><img class="lazy" alt="" data-src="'+r+'" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" aria-label="Related Post" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><div class="related-post-item-thumbnail"><img class="lazy" alt="" data-src="'+r+'" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/?\?m=\d+(\&|$)|\/+$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);
function loadScript(d){var l=document.createElement("script");l.src=d,document.body.appendChild(l)}function downloadJSAtOnload5(){loadScript("data:application/x-javascript;base64,ZnVuY3Rpb24gX2V4dGVuZHMoKXtyZXR1cm4oX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYodFtvXT1uW29dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBfdHlwZW9mKHQpe3JldHVybihfdHlwZW9mPSJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJiJzeW1ib2wiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJiJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlPyJzeW1ib2wiOnR5cGVvZiB0fSkodCl9IWZ1bmN0aW9uKHQsZSl7Im9iamVjdCI9PT0oInVuZGVmaW5lZCI9PXR5cGVvZiBleHBvcnRzPyJ1bmRlZmluZWQiOl90eXBlb2YoZXhwb3J0cykpJiYidW5kZWZpbmVkIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6ImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6dC5MYXp5TG9hZD1lKCl9KHRoaXMsZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7dmFyIHQ9InVuZGVmaW5lZCIhPXR5cGVvZiB3aW5kb3csZT10JiYhKCJvbnNjcm9sbCJpbiB3aW5kb3cpfHwidW5kZWZpbmVkIiE9dHlwZW9mIG5hdmlnYXRvciYmLyhnbGV8aW5nfHJvKWJvdHxjcmF3bHxzcGlkZXIvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLG49dCYmIkludGVyc2VjdGlvbk9ic2VydmVyImluIHdpbmRvdyxvPXQmJiJjbGFzc0xpc3QiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgicCIpLHI9e2VsZW1lbnRzX3NlbGVjdG9yOiJpbWciLGNvbnRhaW5lcjplfHx0P2RvY3VtZW50Om51bGwsdGhyZXNob2xkOjAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOiJzcmMiLGRhdGFfc3Jjc2V0OiJzcmNzZXQiLGRhdGFfc2l6ZXM6InNpemVzIixkYXRhX2JnOiJiZyIsY2xhc3NfbG9hZGluZzoibG9hZGluZyIsY2xhc3NfbG9hZGVkOiJsb2FkZWQiLGNsYXNzX2Vycm9yOiJlcnJvciIsbG9hZF9kZWxheTowLGF1dG9fdW5vYnNlcnZlOiEwLGNhbGxiYWNrX2VudGVyOm51bGwsY2FsbGJhY2tfZXhpdDpudWxsLGNhbGxiYWNrX3JldmVhbDpudWxsLGNhbGxiYWNrX2xvYWRlZDpudWxsLGNhbGxiYWNrX2Vycm9yOm51bGwsY2FsbGJhY2tfZmluaXNoOm51bGwsdXNlX25hdGl2ZTohMX0sYT1mdW5jdGlvbih0LGUpe3ZhciBuLG89bmV3IHQoZSk7dHJ5e249bmV3IEN1c3RvbUV2ZW50KCJMYXp5TG9hZDo6SW5pdGlhbGl6ZWQiLHtkZXRhaWw6e2luc3RhbmNlOm99fSl9Y2F0Y2godCl7KG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoIkN1c3RvbUV2ZW50IikpLmluaXRDdXN0b21FdmVudCgiTGF6eUxvYWQ6OkluaXRpYWxpemVkIiwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KG4pfTt2YXIgaT1mdW5jdGlvbih0LGUpe3JldHVybiB0LmdldEF0dHJpYnV0ZSgiZGF0YS0iK2UpfSxzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz0iZGF0YS0iK2U7bnVsbCE9PW4/dC5zZXRBdHRyaWJ1dGUobyxuKTp0LnJlbW92ZUF0dHJpYnV0ZShvKX0sYz1mdW5jdGlvbih0KXtyZXR1cm4idHJ1ZSI9PT1pKHQsIndhcy1wcm9jZXNzZWQiKX0sbD1mdW5jdGlvbih0LGUpe3JldHVybiBzKHQsImxsLXRpbWVvdXQiLGUpfSx1PWZ1bmN0aW9uKHQpe3JldHVybiBpKHQsImxsLXRpbWVvdXQiKX0sZD1mdW5jdGlvbih0LGUpe3QmJnQoZSl9LGY9ZnVuY3Rpb24odCxlKXt0Ll9sb2FkaW5nQ291bnQrPWUsMD09PXQuX2VsZW1lbnRzLmxlbmd0aCYmMD09PXQuX2xvYWRpbmdDb3VudCYmZCh0Ll9zZXR0aW5ncy5jYWxsYmFja19maW5pc2gpfSxfPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPVtdLG89MDtlPXQuY2hpbGRyZW5bb107bys9MSkiU09VUkNFIj09PWUudGFnTmFtZSYmbi5wdXNoKGUpO3JldHVybiBufSx2PWZ1bmN0aW9uKHQsZSxuKXtuJiZ0LnNldEF0dHJpYnV0ZShlLG4pfSxnPWZ1bmN0aW9uKHQsZSl7dih0LCJzaXplcyIsaSh0LGUuZGF0YV9zaXplcykpLHYodCwic3Jjc2V0IixpKHQsZS5kYXRhX3NyY3NldCkpLHYodCwic3JjIixpKHQsZS5kYXRhX3NyYykpfSxtPXtJTUc6ZnVuY3Rpb24odCxlKXt2YXIgbj10LnBhcmVudE5vZGU7biYmIlBJQ1RVUkUiPT09bi50YWdOYW1lJiZfKG4pLmZvckVhY2goZnVuY3Rpb24odCl7Zyh0LGUpfSk7Zyh0LGUpfSxJRlJBTUU6ZnVuY3Rpb24odCxlKXt2KHQsInNyYyIsaSh0LGUuZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24odCxlKXtfKHQpLmZvckVhY2goZnVuY3Rpb24odCl7dih0LCJzcmMiLGkodCxlLmRhdGFfc3JjKSl9KSx2KHQsInNyYyIsaSh0LGUuZGF0YV9zcmMpKSx0LmxvYWQoKX19LGI9ZnVuY3Rpb24odCxlKXt2YXIgbixvLHI9ZS5fc2V0dGluZ3MsYT10LnRhZ05hbWUscz1tW2FdO2lmKHMpcmV0dXJuIHModCxyKSxmKGUsMSksdm9pZChlLl9lbGVtZW50cz0obj1lLl9lbGVtZW50cyxvPXQsbi5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1vfSkpKTshZnVuY3Rpb24odCxlKXt2YXIgbj1pKHQsZS5kYXRhX3NyYyksbz1pKHQsZS5kYXRhX2JnKTtuJiYodC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybCgiJy5jb25jYXQobiwnIiknKSksbyYmKHQuc3R5bGUuYmFja2dyb3VuZEltYWdlPW8pfSh0LHIpfSxoPWZ1bmN0aW9uKHQsZSl7bz90LmNsYXNzTGlzdC5hZGQoZSk6dC5jbGFzc05hbWUrPSh0LmNsYXNzTmFtZT8iICI6IiIpK2V9LHA9ZnVuY3Rpb24odCxlLG4pe3QuYWRkRXZlbnRMaXN0ZW5lcihlLG4pfSx5PWZ1bmN0aW9uKHQsZSxuKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuKX0sRT1mdW5jdGlvbih0LGUsbil7eSh0LCJsb2FkIixlKSx5KHQsImxvYWRlZGRhdGEiLGUpLHkodCwiZXJyb3IiLG4pfSx3PWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uLl9zZXR0aW5ncyxhPWU/ci5jbGFzc19sb2FkZWQ6ci5jbGFzc19lcnJvcixpPWU/ci5jYWxsYmFja19sb2FkZWQ6ci5jYWxsYmFja19lcnJvcixzPXQudGFyZ2V0OyFmdW5jdGlvbih0LGUpe28/dC5jbGFzc0xpc3QucmVtb3ZlKGUpOnQuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgiKF58XFxzKykiK2UrIihcXHMrfCQpIiksIiAiKS5yZXBsYWNlKC9eXHMrLywiIikucmVwbGFjZSgvXHMrJC8sIiIpfShzLHIuY2xhc3NfbG9hZGluZyksaChzLGEpLGQoaSxzKSxmKG4sLTEpfSxJPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZnVuY3Rpb24gbihyKXt3KHIsITAsZSksRSh0LG4sbyl9LG89ZnVuY3Rpb24gbyhyKXt3KHIsITEsZSksRSh0LG4sbyl9OyFmdW5jdGlvbih0LGUsbil7cCh0LCJsb2FkIixlKSxwKHQsImxvYWRlZGRhdGEiLGUpLHAodCwiZXJyb3IiLG4pfSh0LG4sbyl9LGs9WyJJTUciLCJJRlJBTUUiLCJWSURFTyJdLEE9ZnVuY3Rpb24odCxlKXt2YXIgbj1lLl9vYnNlcnZlcjt6KHQsZSksbiYmZS5fc2V0dGluZ3MuYXV0b191bm9ic2VydmUmJm4udW5vYnNlcnZlKHQpfSxMPWZ1bmN0aW9uKHQpe3ZhciBlPXUodCk7ZSYmKGNsZWFyVGltZW91dChlKSxsKHQsbnVsbCkpfSx4PWZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5fc2V0dGluZ3MubG9hZF9kZWxheSxvPXUodCk7b3x8KG89c2V0VGltZW91dChmdW5jdGlvbigpe0EodCxlKSxMKHQpfSxuKSxsKHQsbykpfSx6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1lLl9zZXR0aW5nczshbiYmYyh0KXx8KGsuaW5kZXhPZih0LnRhZ05hbWUpPi0xJiYoSSh0LGUpLGgodCxvLmNsYXNzX2xvYWRpbmcpKSxiKHQsZSksZnVuY3Rpb24odCl7cyh0LCJ3YXMtcHJvY2Vzc2VkIiwidHJ1ZSIpfSh0KSxkKG8uY2FsbGJhY2tfcmV2ZWFsLHQpLGQoby5jYWxsYmFja19zZXQsdCkpfSxPPWZ1bmN0aW9uKHQpe3JldHVybiEhbiYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiB0LmlzSW50ZXJzZWN0aW5nfHx0LmludGVyc2VjdGlvblJhdGlvPjB9KGUpP2Z1bmN0aW9uKHQsZSl7dmFyIG49ZS5fc2V0dGluZ3M7ZChuLmNhbGxiYWNrX2VudGVyLHQpLG4ubG9hZF9kZWxheT94KHQsZSk6QSh0LGUpfShlLnRhcmdldCx0KTpmdW5jdGlvbih0LGUpe3ZhciBuPWUuX3NldHRpbmdzO2Qobi5jYWxsYmFja19leGl0LHQpLG4ubG9hZF9kZWxheSYmTCh0KX0oZS50YXJnZXQsdCl9KX0se3Jvb3Q6KGU9dC5fc2V0dGluZ3MpLmNvbnRhaW5lcj09PWRvY3VtZW50P251bGw6ZS5jb250YWluZXIscm9vdE1hcmdpbjplLnRocmVzaG9sZHN8fGUudGhyZXNob2xkKyJweCJ9KSwhMCk7dmFyIGV9LE49WyJJTUciLCJJRlJBTUUiXSxDPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiB0LmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hYyh0KX0pfSgobj10fHxmdW5jdGlvbih0KXtyZXR1cm4gdC5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0LmVsZW1lbnRzX3NlbGVjdG9yKX0oZSksQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobikpKTt2YXIgbn0sTT1mdW5jdGlvbih0LGUpe3RoaXMuX3NldHRpbmdzPWZ1bmN0aW9uKHQpe3JldHVybiBfZXh0ZW5kcyh7fSxyLHQpfSh0KSx0aGlzLl9sb2FkaW5nQ291bnQ9MCxPKHRoaXMpLHRoaXMudXBkYXRlKGUpfTtyZXR1cm4gTS5wcm90b3R5cGU9e3VwZGF0ZTpmdW5jdGlvbih0KXt2YXIgbixvPXRoaXMscj10aGlzLl9zZXR0aW5nczsodGhpcy5fZWxlbWVudHM9Qyh0LHIpLCFlJiZ0aGlzLl9vYnNlcnZlcik/KGZ1bmN0aW9uKHQpe3JldHVybiB0LnVzZV9uYXRpdmUmJiJsb2FkaW5nImluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlfShyKSYmKChuPXRoaXMpLl9lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHQpey0xIT09Ti5pbmRleE9mKHQudGFnTmFtZSkmJih0LnNldEF0dHJpYnV0ZSgibG9hZGluZyIsImxhenkiKSx6KHQsbikpfSksdGhpcy5fZWxlbWVudHM9Qyh0LHIpKSx0aGlzLl9lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHQpe28uX29ic2VydmVyLm9ic2VydmUodCl9KSk6dGhpcy5sb2FkQWxsKCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuX29ic2VydmVyJiYodGhpcy5fZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXt0Ll9vYnNlcnZlci51bm9ic2VydmUoZSl9KSx0aGlzLl9vYnNlcnZlcj1udWxsKSx0aGlzLl9lbGVtZW50cz1udWxsLHRoaXMuX3NldHRpbmdzPW51bGx9LGxvYWQ6ZnVuY3Rpb24odCxlKXt6KHQsdGhpcyxlKX0sbG9hZEFsbDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXtBKGUsdCl9KX19LHQmJmZ1bmN0aW9uKHQsZSl7aWYoZSlpZihlLmxlbmd0aClmb3IodmFyIG4sbz0wO249ZVtvXTtvKz0xKWEodCxuKTtlbHNlIGEodCxlKX0oTSx3aW5kb3cubGF6eUxvYWRPcHRpb25zKSxNfSk7CnZhciBsYXp5TG9hZEluc3RhbmNlPW5ldyBMYXp5TG9hZCh7ZWxlbWVudHNfc2VsZWN0b3I6Ii5sYXp5In0pOwp2YXIgaXNTYWZhcmk9L14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZighaXNTYWZhcmkpe3dpbmRvdy5vbmJlZm9yZXByaW50PWZ1bmN0aW9uKCl7d0xhenlMb2FkLmxvYWRBbGwoKTt9O31lbHNle3ZhciBtZWRpYVF1ZXJ5TGlzdD13aW5kb3cubWF0Y2hNZWRpYSgicHJpbnQiKTttZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihtcWwpe2lmKG1xbC5tYXRjaGVzKXt3TGF6eUxvYWQubG9hZEFsbCgpO319KTt9")}window.addEventListener?window.addEventListener("load",downloadJSAtOnload5,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload5):window.onload=downloadJSAtOnload5;
