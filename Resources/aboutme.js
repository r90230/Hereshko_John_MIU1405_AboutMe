var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
			
	var detailView = Ti.UI.createView({
		height: 65,
		backgroundColor:"#fff",
		top:0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: firstView.height + firstView.top
	});
	
	var detailTitle = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 14, fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});

	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});

	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	var closeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailView.add(detailTitle);
	detailWindow.add(detailView, detailBorder, detailText, closeButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});


};
	
	
for(var i=0, j=extraAboutMeInfo.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: extraAboutMeInfo[i].title,
		desc: extraAboutMeInfo[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name ==="iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;	
};
	
	extraSection.add(theRow);
	theRow.addEventListener("click", getDetail);
};


for(var i=0, j=mainAboutMeInfo.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: mainAboutMeInfo[i].title,
		desc: mainAboutMeInfo[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name ==="iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;	
};

	
	majorSection.add(theRow);
	theRow.addEventListener("click", getDetail);
};
