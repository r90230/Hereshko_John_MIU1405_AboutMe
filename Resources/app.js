Titanium.UI.setBackgroundColor('#000');

var mainAboutMeInfo = [{title: "What is your name?", description: "My name is John Hereshko."}, 
				{title: "What is your chat user name, including the host?", description: "My chat user name is jhereshko@yahoo.com, on AIM."}, 
				{title: "In which time zone do you reside?", description: "I reside in the Eastern Time Zone...Which makes it easy to time out the assignments."}, 
				{title: "Why are you in the Mobile Development program?", description: "I'm planning to run my own independent development company in the future, and I feel that Full Sail University will help me progress with that."},
				{title: "How comfortable are you with JavaScript?", description: "I'm starting to become more confident with it, though I'm leaps and bounds away before I'd feel too comfortable with it."}, 
				{title: "How comfortable are you with Titanium?", description: "Once you know all the shortcuts and main pieces of Titanium, most basic apps have the same backbone. Because of that, Titanium hasn't been too difficult for me overall."}];
				
var extraAboutMeInfo = [{title: "What is your favorite food?", description: "Tuna subs seem to be my obsession as of late, though I will always enjoy a cheeseburger."}, 
{title: "What is your favorite color?", description: "This fluctuates. I would say the combo of white and red, or the solo color of blue would be my favorites."},  
{title: "What is your favorite sport?", description: "I'm not a big sports fan, however I do enjoy watching tennis from time to time, since I used to play it."},
{title: "Do you have a family (spouse, children)? If so, tell me a little about them (ages, gender, etc.).", description: "I just have my personal family; my mother, father, and sister. My sister is three years younger than myself."}, 
{title: "What kind of work do you do?", description: "I work as a keyholder at a local GameStop, as well as a volunteer job as a video/audio technician at a church."}, 
{title: "Do you have any pets?", description: "I have a dog named Pooka, and a cat named Boots."}, 
{title: "What are your hobbies?", description: "Video games are usually my escape from reality. That, and keeping up with news in the technology industry is how I keep myself mentally stable."}, 
{title: "What is your favorite movie?", description: "'Never Back Down' was my favorite movie for awhile, although the recent movie 'Jobs' really did bring some emotion to me."}, 
{title: "What is your favorite song?", description: "This song has been my favorite for quite a few years. Give It All by Rise Against."}, 
{title: "What is your favorite book?", description: "The Eragon series has been one group of books I really enjoyed. I would say that was my favorite."}, 
{title: "Who is your favorite actor/actress?", description: "I can't say I really have a favorite actor or actress, though I do like the skills of acting that Johnny Depp has most days."}, 
{title: "Who is your favorite group or who is your favorite artist?", description: "While Rise Against is my main favorite band, Starship Amazing has been a band I have started listening to recently that I really enjoy."}, 
{title: "Who is your favorite author?", description: "J.K. Rowling and Christopher Paolini are my two favorite authors. Their fantasy styles are absolutely incredible."},
{title: "What is your favorite TV show?", description: "I loved the old version of Two and a Half Men, as well as Whose Line Is It Anyway. However, my favorite serious show was Eureka, which had just enough comedy and plot to keep you watching."}];

var firstWindow = Ti.UI.createWindow({
	title: "My First Window",
	backgroundColor: "#fff",
});

var firstView = Ti.UI.createView({
	height: 65,
	backgroundColor:"#fff",
	top:0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: firstView.height + firstView.top
});

var topTitle = Ti.UI.createLabel({
	text: "About Me",
	font: {fontSize: 20, fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var aboutMeTable = Ti.UI.createTableView({
	top: border.top + border.height
});

var majorSection = Ti.UI.createTableViewSection({
	headerTitle: "Main Section"
});

var extraSection = Ti.UI.createTableViewSection({
	headerTitle: "Extra Information"
});

var allSections = [majorSection, extraSection];


if(Ti.Platform.name ==="iPhone OS"){
	aboutMeTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

aboutMeTable.setData(allSections);

var loadFile = require("aboutme");

firstView.add(topTitle);
firstWindow.add(firstView, border, aboutMeTable);
firstWindow.open();
