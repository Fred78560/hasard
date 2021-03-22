exports.action = function(data){
				
		function nb_aleatoire(min, max){
        var nb = min + (max-min+1)*Math.random();
        return Math.floor(nb);
             }
             
             var de = nb_aleatoire(1, 6);
    
    //console.log("Jarvis a fait "+de)
    JarvisIASpeech("Je vous lance le dé... vous obtenez " + de)
}

