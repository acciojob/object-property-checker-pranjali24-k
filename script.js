
const sampleObject={ red:"red",
					green:"green",
					white:"white"};

  //   write your code her

function hasKey(key) {
  //   write your code her
	
	if(key==sampleObject.red || key==sampleObject.green||key==sampleObject.white){
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
