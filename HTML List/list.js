$("document").ready(function(){
        $("#generate").click(function(){
            var outputText = "&lt;ul&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;";

            var text = stripHTML($("#text-to-convert").val());

            outputText += text.replace(/\n/g, "&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;") + "&lt;/li&gt;";

            outputText += "<br/>&lt;/ul&gt;";

            $("#output").html(outputText);
        });
    });

    function stripHTML(dirtyString) {
        var container = document.createElement('div');
        var text = document.createTextNode(dirtyString);
        container.appendChild(text);
        return container.innerHTML;
    }

    function copyToClipboard() {
        var copyText = document.getElementById("output");
        var range = document.createRange();
        range.selectNode(copyText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Copied to clipboard!");
    }
