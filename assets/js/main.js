$(document).ready(function(){
    titles = $(':header').toArray();

    outlines = ''
    for (i=0;i < titles.length; i++) {
        obj = titles[i]
        if (obj.id == '') {
            continue
        }
//             if (obj.tagName == 'H2') {
//                 outlines += '<a href=\"#' + obj.id + '\"><large><b>' + removeTags(obj.innerHTML) + '</b></large></a><br>'
//             }
//             else 
        if (obj.tagName == 'H3') {
            outlines += '<br><a href=\"#' + obj.id + '\"><b>' + obj.innerHTML + '</b></a><br>'
        }
        else if (obj.tagName == 'H4') {
            outlines += '&emsp;- &emsp;<a href=\"#' + obj.id + '\">' + obj.innerHTML + '</a><br>'
        }
        else if (obj.tagName == 'H5') {
            outlines += '&emsp;&emsp;&emsp;<a href=\"#' + obj.id + '\">' + obj.innerHTML + '</a><br>'
        }
    }
    $('#main-outline').append(outlines);
});

