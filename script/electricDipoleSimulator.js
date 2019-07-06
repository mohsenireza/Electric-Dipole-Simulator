function draw(){
	
    var rightval = +$("#inputr").val();
    var leftval = +$("#inputl").val();
    
    
    $(".line0").remove();
    $(".line1").remove();
    $(".line2").remove();		
    $(".uparrow").remove();
    $(".downarrow").remove();
    
    
    if((rightval == leftval) && (rightval > 0)){
    
        first_height = 200;
        for(i=0; i<Math.ceil(rightval/10); i++){
        
            li = document.createElement("div");
            li.className = "line0";
            li.style.height= first_height + "px";
            first_height += 30;
            li.style.transform = "translateY(" + -i*15 + "px)";
            
            au = document.createElement("span");
            au.className = "uparrow";
            au.innerHTML = ">";
            
            ad = document.createElement("span");
            ad.className = "downarrow";
            ad.innerHTML = ">";
            
            li.appendChild(au);
            li.appendChild(ad);
            $('#all').prepend(li);		
            
        }		
    }
    else if((rightval > leftval) && (rightval > 0) && (leftval > 0)){
        
        first_height = 200;
        for(i=0; i<Math.ceil(rightval/10); i++){
        
            li = document.createElement("div");
            li.className = "line1";
            li.style.height= first_height + "px";
            first_height += 30;
            li.style.transform = "translateY(" + -i*15 + "px)";
            
            au = document.createElement("span");
            au.className = "uparrow";
            au.innerHTML = ">";
            
            ad = document.createElement("span");
            ad.className = "downarrow";
            ad.innerHTML = ">";
            
            li.appendChild(au);
            li.appendChild(ad);
            $('#all').prepend(li);		
            
        }								
    }
    else if((rightval < leftval) && (rightval > 0) && (leftval > 0)){
    
        first_height = 200;
        for(i=0; i<Math.ceil(leftval/10); i++){
        
            li = document.createElement("div");
            li.className = "line2";
            li.style.height= first_height + "px";
            first_height += 30;
            li.style.transform = "translateY(" + -i*15 + "px)";
            
            au = document.createElement("span");
            au.className = "uparrow";
            au.innerHTML = ">";
            
            ad = document.createElement("span");
            ad.className = "downarrow";
            ad.innerHTML = ">";
            
            li.appendChild(au);
            li.appendChild(ad);
            $('#all').prepend(li);		
            
        }		
    }
    
}