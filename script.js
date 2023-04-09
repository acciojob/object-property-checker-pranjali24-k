
const sampleObject={ red:"red",
					green:"green",
					white:"white"};

  //   write your code her

function hasKey(key) {
  //   write your code here
	for(let i in sampleObject){
		if(i==key){
			return true;
		}
		else{
			return false;
		}
	}
}

// Do not change the code below
const key = prompt("Enter Key.")
alert(hasKey(key));

	
	
	


// Do not change the code below
const key = prompt("Enter Key.")
alert(hasKey(key));
