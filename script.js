// button.addEventListener('click', async (event) => {}

// const button = document.querySelector('#submitButton')
const refreshToken = `23f536bd8a5a372dddafcf05df002f9db97388c2`
const athleteID = ``
const profilePic = document.querySelector('#profile-img')
const profileName = document.querySelector('#profile-name')

//mtn. icon variables
const maxElev = document.querySelector('#max-elev')

//ruler icon variables
const maxDistance = document.querySelector('#max-distance')

//setting up heat map variables
const cal = new CalHeatmap()
let hmActivities = []


window.addEventListener('load', async (event) => {
    event.preventDefault()
    let getAccessToken = await axios.post(`https://www.strava.com/oauth/token?client_id=114058&client_secret=3a4922753fdd19897799ce35c4eec24a5bbc0cbb&refresh_token=4a99bd37e1926db5c59be661e90bbb0de6d143f2&grant_type=refresh_token`)
    let accessToken = getAccessToken.data.access_token
    let getAthlete = await axios.get(`https://www.strava.com/api/v3/athlete?access_token=${accessToken}`)
    let athleteID = getAthlete.data.id
    let getStats = await axios.get(`https://www.strava.com/api/v3/athletes/${athleteID}/stats?access_token=${accessToken}`)
    let getActivities = await axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`)
    //getting profile/athlete data
    console.log(getAthlete)
    //pulling stats
    console.log(getStats)
    //activities
    console.log(getActivities)

    //trying to get profile image to load when button is clicked (for now)
    let profPic = getAthlete.data.profile
    profilePic.innerHTML = `<img src=${profPic}>`
    let firstName = getAthlete.data.firstname
    let lastName = getAthlete.data.lastname
    profileName.innerHTML = `${firstName} ${lastName}`

    for (x in hmActivities) {
         let newObj = new Object()
         let activityTS = hmActivities[x].start_date_local.format('X')
         newObj.date = parseInt(activityTS)
         newObj.value = Math.floor(hmActivities[x].elapsed_time/60)
         hmActivities.push(newObj)
    }

    cal.paint({})
    // render('#cal-heatmap')



    //pulling in max elev to our mtn icon
    let mElev = Math.round(getStats.data.biggest_climb_elevation_gain * 3.28084)
    maxElev.innerHTML = `Max Elevation Gain : ${mElev}ft.`

    //pulling in longest ride distance to our ruler icon
    let mDistance = Math.round(getStats.data.biggest_ride_distance * 0.00062137121212121 * 100) / 100
    maxDistance.innerHTML = `Max Ride Distance: ${mDistance} miles`



})








