# NummonCalc
A script to add a new tab to Kittens Game containing the results of many calculation functions, to help players.

To use as a bookmark:

Add a new bookmark to your browser. Name it "NummonCalc" or something similar. For the URL, paste the following:

	javascript: (function () { var timer = setInterval(function(){var g=document.getElementById('game'); if (g && g.style.display != 'none') {clearInterval(timer); var mod = document.createElement('script'); mod.src = 'https://cdn.jsdelivr.net/gh/Bioniclegenius/NummonCalc/NummonCalc.js'; mod.id = 'modscript_NummonCalc'; document.head.appendChild(mod);}}, 250); })();

Alternatively, to use manually, just copy the contents of NummonCalc.js to your browser console (Google for how to pull that up if you're not sure). A new tab should appear at the top. Presto, you're done!
