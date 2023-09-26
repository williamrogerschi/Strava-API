// button.addEventListener('click', async (event) => {}

// const button = document.querySelector('#submitButton')
const refreshToken = `23f536bd8a5a372dddafcf05df002f9db97388c2`
const athleteID = ``
const profilePic = document.querySelector('#profile-img')
const profileName = document.querySelector('#profile-name')
const profileCity = document.querySelector('#about-city')
const activitiesList = document.querySelector('.activity-container')


//#### icon variables ####
//mtn. icon variables
const maxElev = document.querySelector('#max-elev')
//ruler icon variables
const maxDistance = document.querySelector('#max-distance')
//speed icon variables
const maxRides = document.querySelector('#max-rides')

//setting up heat map variables
const cal = new CalHeatmap()
let hmActivities = []

//#### ytd variables ####
// const ytdElev = document.querySelector('#ytd-elev')
// const ytdDistance = document.querySelector('#ytd-distance')
// const ytdRides = document.querySelector('#ytd-rides')

// //#### recent variables ####
// const recElev = document.querySelector('#rec-elev')
// const recDistance = document.querySelector('#rec-distance')
// const recRides = document.querySelector('#rec-rides')


//main function block for loading all the API data onto the webpage
window.addEventListener('load', async (event) => {
    event.preventDefault()
    let getAccessToken = await axios.post(`https://www.strava.com/oauth/token?client_id=114058&client_secret=3a4922753fdd19897799ce35c4eec24a5bbc0cbb&refresh_token=4a99bd37e1926db5c59be661e90bbb0de6d143f2&grant_type=refresh_token`)
    let accessToken = getAccessToken.data.access_token
    let getAthlete = await axios.get(`https://www.strava.com/api/v3/athlete?access_token=${accessToken}`)
    let athleteID = getAthlete.data.id
    let getStats = await axios.get(`https://www.strava.com/api/v3/athletes/${athleteID}/stats?access_token=${accessToken}`)
    let getActivities = await axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}&per_page=100`)
    // let getGear = await axios.get(`https://www.strava.com/api/v3/gear/${athleteID}?access_token=${accessToken}`)
    
    //getting profile/athlete data
    console.log(getAthlete)
    //pulling stats
    console.log(getStats)
    //activities
    console.log(getActivities)
    //gear
    // console.log(getGear)

    //profile container dataset
    let profPic = getAthlete.data.profile
    profilePic.innerHTML = `<img src=${profPic}>`
    let firstName = getAthlete.data.firstname
    let lastName = getAthlete.data.lastname
    profileName.innerHTML = `${firstName} ${lastName}`
    let profCity = getAthlete.data.city
    let profState = getAthlete.data.state
    profileCity.innerHTML = `${profCity}, ${profState}`

    //pulling in activities for the cal heatmap
    for (x in getActivities.data) {
        let newObj = new Object()
         newObj.date = (getActivities.data[x].start_date_local)
         newObj.time = Math.floor(getActivities.data[x].elapsed_time/60)
         hmActivities.push(newObj)
    }
    console.log(hmActivities)

    //printing data to the heatmap shell
    cal.paint({
        data: { source: hmActivities,
            x: 'date',
            y: 'time',
            groupY: 'sum'},
        date: { start: '2023-04-01'},    
        domain: { type: 'month', gutter: 20},
        subDomain: { type: 'ghDay', height: 20, width: 20},
        range: 6,
        scale:
            { color: {  scheme: ['PuBuGn'],
                        // interpolate: 'lab',
                        type: 'linear',
                        domain: [0 , 80]
                    }
            }
    },
    [
        [
          Tooltip, // tooltip plugin
          {
            text: function (date, time, dayDate) {
              return (
                (time ? time + ' minutes' : 'No data') + ' on ' + dayDate.format('LL'))
            },
          },
        ],
        [
            Legend, // legend plugin
            {
          tickSize: 0,
          width: 120,
          itemSelector: '#heatmap-legend',
          label: 'Ride Time (minutes)',
            },
        ],
        [
          CalendarLabel, //calendar plugin
          {
            position: 'left',
            key: 'left',
            text: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            textAlign: 'end',
            width: 30,
            padding: [0, 5, 0, 0],
          },
        ],
    ])

    //#### all time variables for profile container ####
    //pulling in total elev to our mtn icon
    let mElev = Math.round(getStats.data.all_ride_totals.elevation_gain * 3.28084)
    maxElev.innerHTML = `Elevation Gain: ${mElev}ft.`

    //pulling in total ride distance to our ruler icon
    let mDistance = Math.round(getStats.data.all_ride_totals.distance * 0.00062137121212121 * 100) / 100
    maxDistance.innerHTML = `Ride Distance: ${mDistance} miles`
    
    //pulling in total ride count
    let mRides = getStats.data.all_ride_totals.count
    maxRides.innerHTML = `Total Rides: ${mRides}`

    // //#### ytd dataset #####
    // let yElev = Math.round(getStats.data.ytd_ride_totals.elevation_gain * 3.28084)
    // ytdElev.innerHTML = `Elevation Gain: ${yElev}ft.`
    // let yDistance = Math.round(getStats.data.ytd_ride_totals.distance * 0.00062137121212121 * 100) / 100
    // ytdDistance.innerHTML = `Ride Distance: ${yDistance} miles`
    // let yRides = getStats.data.ytd_ride_totals.count
    // ytdRides.innerHTML = `Total Rides: ${yRides}`

    // //#### recent dataset #####
    // let rElev = Math.round(getStats.data.recent_ride_totals.elevation_gain * 3.28084) / 4
    // recElev.innerHTML = `Elevation Gain: ${rElev}ft.`
    // let rDistance = Math.round(getStats.data.recent_ride_totals.distance * 0.00062137121212121) / 4
    // recDistance.innerHTML = `Ride Distance: ${rDistance} miles`
    // let rRides = Math.ceil(Math.round(getStats.data.recent_ride_totals.count) / 4)
    // recRides.innerHTML = `Total Rides: ${rRides}`

    let actArr = []
    for (x in getActivities.data) {
      let newObj = new Object()
       newObj.Date = (getActivities.data[x].start_date_local)
       newObj.Name = (getActivities.data[x].name)
       newObj.Time_Min = Math.floor(getActivities.data[x].elapsed_time/60)
       newObj.Distance_Mi = Math.round(getActivities.data[x].distance * 0.000621371 * 100) / 100
       newObj.Avg_Speed = Math.round(getActivities.data[x].average_speed * 2.23694 * 100) / 100
       newObj.Avg_Watts = Math.round(getActivities.data[x].average_watts)
       newObj.HeartRate = Math.round(getActivities.data[x].average_heartrate)
       actArr.push(newObj)
  }
  // console.table(actArr)

  //code block for creating the table for our HTML
  const generateTableHead = (table, data) => {
    let thead = table.createTHead()
    let row = thead.insertRow()
    for (let key of data) {
      let th = document.createElement("th")
      let text = document.createTextNode(key)
      th.appendChild(text)
      row.appendChild(th)
    }
  }

  const generateTable = (table, data) => {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("#rides");
  let data = Object.keys(actArr[0]);
  generateTable(table, actArr)
  generateTableHead(table, data)

})

//////// Setting up dropdown button for profile sidebar //////
 function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show')
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName('dropdown-content')
      let i
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }



