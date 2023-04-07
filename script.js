const sampleObject = { 
	#FF0000:"red",
	#00FF00:"green", 
	#FFFFFF:"white"
};


  //   write your code her

function hasKey(key) {
  //   write your code her
	
	if(key==sampleObject.#FF0000 || key==sampleObject.#00FF00 ||key==sampleObject.#FFFFFF){
		return true;
	}
	else{
		return false;
	}
	
}

// Do not change the code below
const key = prompt("Enter Key.")
alert(hasKey(key));

	
	
	


// Do not change the code below
const key = prompt("Enter Key.")
alert(hasKey(key));
