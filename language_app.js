// Define every column in data table
var LanguageList= getColumn("Most Spoken Languages Worldwide", "Language");
var LanguageFamilyList = getColumn("Most Spoken Languages Worldwide", "Language family");
var RankList = getColumn("Most Spoken Languages Worldwide", "Rank");
var SpeakersList = getColumn("Most Spoken Languages Worldwide", "Speakers in millions");
var PercentageSpeakersList = getColumn("Most Spoken Languages Worldwide", "Percentage of world population");
var LanguageBranchList = getColumn("Most Spoken Languages Worldwide", "Branch");


//Creates a button that returns the user to the Home page
onEvent("HomeButton1","click",function(){
 setScreen("HomeScreen");
});
onEvent("HomeButton2","click",function(){
  Home();
});
onEvent("HomeButton3","click",function(){
  Home();
});
onEvent("HomeButton4","click",function(){
 Home();
});
onEvent("HomeButton5","click",function(){
  Home();
});
onEvent("StartButton","click",function(){
  Home();
});


//Sets the user back to the Language Family selection screen
onEvent("FamilyBackButton1","click",function(){
  FamilySelection();
});

onEvent("FamilyBackButton2","click",function(){
  FamilySelection();
});

onEvent("FamilyBackButton3","click",function(){
  FamilySelection();
});

onEvent("FamilyBackButton4","click",function(){
  FamilySelection();
});

onEvent("FamilyBackButton5","click",function(){
  FamilySelection();
});

onEvent("FamilyBackButton6","click",function(){
  FamilySelection();
});
//Sets the user back to the Language Branch selection screen

onEvent("BranchBackArrow1","click",function(){
  BranchSelection();
});

onEvent("BranchBackArrow2","click",function(){
  BranchSelection();
});

onEvent("BranchBackArrow3","click",function(){
  BranchSelection();
});

onEvent("BranchBackArrow4","click",function(){
  BranchSelection();
});

onEvent("BranchBackArrow5","click",function(){
  BranchSelection();
});

onEvent("BranchBackArrow6","click",function(){
  BranchSelection();
});

//When the user clicks the button it redirects them to the respective screens
onEvent("LanguageBranchesButton","click",function(){
  setScreen("LanguageBranchesScreen");
});

onEvent("LanguageFamilyButton","click",function(){
  setScreen("LanguageFamilyScreen");
});

onEvent("Top10LanguagesButton","click",function(){
  setScreen("Top10LanguagesScreen");
});
onEvent("RandomizerButton","click",function(){
  setScreen("RandomLanguages");
});

//Defines variables for a filtered list
var Language=[];
var LanguageFamily=[];
var Rank=[];
var Speaker=[];
var PercentageOfSpeakers=[];
var LanguageBranch=[];



//Creates an travesal in which the user interacts with a button that randomly choose a language along with its respective statistics
for(var i =0;i<LanguageList.length;i++){
  appendItem(Language,LanguageList[i]);
  appendItem(LanguageFamily,LanguageFamilyList[i]);
  appendItem(Rank,RankList[i]);
  appendItem(Speaker,SpeakersList[i]);
  appendItem(PercentageOfSpeakers,PercentageSpeakersList[i]);
  appendItem(LanguageBranch,LanguageBranchList);
 Randomize();
  
}
//Creates a filtered list for each of the Language Branches
var SinoLangFam=[];
var IndoLangFam=[];
var DravidianLangFam=[];
var TurkicLangFam=[];
var AustronesianLangFam=[];
var AfroasiaticLangFam=[];

// Lists all Languages that are part of the Sino-Tibetan language family and displays them on a different screen
  for(var i=0;i<LanguageFamilyList.length;i++){
  if(LanguageFamilyList[i] == "Sino-Tibetan"){
  appendItem(SinoLangFam,LanguageList[i]);

}
}
onEvent("SinoTibetanButton", "click", function() {
  setScreen("SinoTibetanScreen");

setText("SinoTibetanOutput",SinoLangFam.join("\n"));
});
// Lists all Languages that are part of the Indo-European language family and displays them on a different screen
  for(var i=0;i<LanguageFamilyList.length;i++){
  if(LanguageFamilyList[i] == "Indo-European"){
  appendItem(IndoLangFam,LanguageList[i]);

  }

}
onEvent("IndoEuropeanButton", "click", function( ) {
  setScreen("IndoEuropeanScreen");

setText("IndoEuropeanOutput",IndoLangFam.join("\n"));
});
// Lists all Languages that are part of the Dravidian language family and displays them on a different screen
  for(var i=0;i<LanguageFamilyList.length;i++){
  if(LanguageFamilyList[i] == "Dravidian"){
  appendItem(DravidianLangFam,LanguageList[i]);

}
}
onEvent("DravidianButton", "click", function() {
  setScreen("DravidianScreen");

setText("DravidianOutput",DravidianLangFam.join("\n"));
});
// Lists all Languages that are part of the Turkic language family and displays them on a different screen
 for(var i=0;i<LanguageFamilyList.length;i++){
  if(LanguageFamilyList[i] == "Turkic"){
  appendItem(TurkicLangFam,LanguageList[i]);

}
}
onEvent("TurkicButton", "click", function() {
  setScreen("TurkicScreen");
 
setText("TurkicOutput",TurkicLangFam.join("\n"));

});
// Lists all Languages that are part of the Austronesian language family and displays them on a different screen
for(var i=0;i<LanguageFamilyList.length;i++){
  if(LanguageFamilyList[i] == "Austronesian"){
  appendItem(AustronesianLangFam,LanguageList[i]);

}
}
onEvent("AustronesianButton", "click", function() {
  setScreen("AustronesianScreen");
  
setText("AustronesianOutput",AustronesianLangFam.join("\n"));

});
// Lists all Languages that are part of the Afroasiatic language family and displays them on a different screen
for(var i=0;i<LanguageFamilyList.length;i++){
  if(LanguageFamilyList[i] == "Afroasiatic"){
  appendItem(AfroasiaticLangFam,LanguageList[i]);

}
}
onEvent("AfroasiaticButton", "click", function() {
  setScreen("AfroasiaticScreen");
  
setText("AfroasiaticOutput",AfroasiaticLangFam.join("\n"));

});
// List for the filtered language branches
var SiniticLangBranch=[];
var RomanceLangBranch=[];
var GermanicLangBranch=[];
var IndoALangBranch=[];
var BaltoLangBranch=[];
var IranianLangBranch=[];


// Lists all Languages that are part of the Sinitic language branch and displays them on a different screen
  for(var i=0;i<LanguageBranchList.length;i++){
  if(LanguageBranchList[i] == "Sinitic"){
  appendItem(SiniticLangBranch,LanguageList[i]);
  }
  }
onEvent("SiniticButton", "click", function() {
  setScreen("SiniticScreen");
  setText("SiniticOutput", "");

  setText("SiniticOutput",SiniticLangBranch.join("\n"));

});
// Lists all Languages that are part of the Romance language branch and displays them on a different screen
for(var i=0;i<LanguageBranchList.length;i++){
  if(LanguageBranchList[i] == "Romance"){
  appendItem(RomanceLangBranch,LanguageList[i]);
  }
  }
onEvent("RomanceButton", "click", function() {
  setScreen("RomanceScreen");
  
    setText("RomanceOutput",RomanceLangBranch.join("\n"));

});
// Lists all Languages that are part of the Germanic language branch and displays them on a different screen
for(var i=0;i<LanguageBranchList.length;i++){
  if(LanguageBranchList[i] == "Germanic"){
  appendItem(GermanicLangBranch,LanguageList[i]);
  }
  }
onEvent("GermanicButton", "click", function() {
  setScreen("GermanicScreen");
  
    setText("GermanicOutput",GermanicLangBranch.join("\n"));

});
// Lists all Languages that are part of the Indo-Aryan language branch and displays them on a different screen
 for(var i=0;i<LanguageBranchList.length;i++){
  if(LanguageBranchList[i] == "Indo-Aryan"){
  appendItem(IndoALangBranch,LanguageList[i]);
  }
  }
onEvent("IndoAryanButton", "click", function() {
  setScreen("IndoAryanScreen");
 
    setText("IndoAryanOutput",IndoALangBranch.join("\n"));

});
// Lists all Languages that are part of the Balto-Slavic language branch and displays them on a different screen
 for(var i=0;i<LanguageBranchList.length;i++){
  if(LanguageBranchList[i] == "Balto-Slavic"){
  appendItem(BaltoLangBranch,LanguageList[i]);
  }
  }
onEvent("BaltoSlavicButton", "click", function() {
  setScreen("BaltoSlavicScreen");
 
    setText("BaltoSlavicOutput",BaltoLangBranch.join("\n"));

});
  // Lists all Languages that are part of the Iranian language branch and displays them on a different screen
for(var i=0;i<LanguageBranchList.length;i++){
  if(LanguageBranchList[i] == "Iranian"){
  appendItem(IranianLangBranch,LanguageList[i]);
  }
  }
  onEvent("IranianButton", "click", function() {
  setScreen("IranianScreen");
  
    setText("IranianOutput",IranianLangBranch.join("\n"));

});

var Rank=[];
//Lists the Top 10 Languages in order by how many people speak them
 for(var i=0;i<RankList.length;i++){
  if(RankList[i] <= 10){
  appendItem(Rank,LanguageList[i]);
  }
  }

onEvent("Top10LanguagesButton", "click", function() {
  setScreen("Top10LanguagesScreen");
 
    setText("Top10Output",Rank.join("\n"));

});
// A function that randomly chooses a language along with its statistics and outputs it  
function Randomize(){
  onEvent("RandomizerButton", "click", function( ) {
    var index=randomNumber(0,LanguageList.length-1);
 setText("LanguageOutput",LanguageList[index]);
 setText("LanguageFamilyOutput",LanguageFamilyList[index] + " language family");
 setText("PercentageofSpeakers",PercentageSpeakersList[index]+"%");
 setText("Speakers",SpeakersList[index] + " million speakers!");
 setText("LanguageBranchOutput",LanguageBranchList[index] + " language branch");
  
 });
}  
//Sets screen to the Home screen
function Home(){
  setScreen("SelectionScreen");
}
//sets screen to the Language Family selection screen
function FamilySelection(){
  setScreen("LanguageFamilyScreen");
}
//sets screen to the Language Branch selection screen
function BranchSelection(){
  setScreen("LanguageBranchesScreen");
}

