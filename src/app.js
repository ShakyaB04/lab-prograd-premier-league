//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
  var ManagerDetails = [managerName,managerAge,currentTeam,trophiesWon]
  return ManagerDetails
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){
  if(formation.length === 0)
    return null
  var formationObject = {
      defender : formation[0],
      midfield : formation[1],
      forward : formation[2]
    }
    return formationObject
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
  var debutyear = players.filter(players => players.debut == year);
  return debutyear
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  var playerposition = players.filter(players => players.position == position)
  return playerposition
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(award)
{
  var playeraward = []
  for(i=0;i<players.length;i++)
  {
    for(j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name == award)
      {
        playeraward.push(players[i])
      }
    }
  }
  return playeraward
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award,times)
{
  var playeraward = []
  var count = 0
  for(i=0;i<players.length;i++)
  {
    for(j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name == award)
      {
        count ++
      }
    }
    if(count == times)
      playeraward.push(players[i])
    
    count = 0
  }
  return playeraward
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(award,country)
{
  var data = filterByAward(award)
  var filterData = data.filter(players => players.country == country)
  return filterData 
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  var filterdata = players.filter(players => (players.age < age && players.team == team && players.awards.length >= noOfAwards ))
  return filterdata
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
  for( i=0; i<players.length; i++ )
  {
    for( j=i+1; j<players.length; j++)
    {
      if(players[i].age < players[j].age){
        t = players[i]
        players[i] = players[j]
        players[j] = t
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team)
{
  var count = 0
  var filterplayers = []
  for( i=0; i<players.length; i++ )
  {
    if(players[i].team == team)
    {
      filterplayers[count++] = players[i]
    }
  }
  for( i=0; i<filterplayers.length; i++ )
  {
    for( j=i+1; j<filterplayers.length; j++)
    {
      if(filterplayers[i].awards.length < filterplayers[j].awards.length)
      {
        t = filterplayers[i]
        filterplayers[i] = filterplayers[j]
        filterplayers[j] = t
      }
    }
  }
  return filterplayers
}


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country)
{
  var data = filterByAwardxTimes(awardName, noOfTimes)
  var filterdata = data.filter(player => player.country == country)
  return filterdata.sort(compare)
}
function compare(x,y)
{
  value = 0
  if(x.name > y.name)
    value = 1
  else if( x.name < y.name )
    value = -1 
  else
    value = 0
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age)
{
  var sortdata = players.filter(player => player.age > age)
  return sortdata
}