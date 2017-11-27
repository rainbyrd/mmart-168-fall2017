const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {

const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                  '&cmd=stns&json=y'

fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((json) =>{
      json=json.root
      console.log(json)
      json.stations.station.forEach((station => {
          const option = document.createElement("option")

          option.innerHTML = station.name
          option.value = station.abbr

          document.getElementById('station_list').appendChild(option)
}))
})
    .catch((err) => {
            console.log(err)
        })

    }
makeStationList()

const getArrivalTimes = () => {
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station
       const bartStationCode = stationList.value
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
  fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            document.getElementById('results').innerHTML = ''

            const header = document.createElement('h2')
            header.innerHTML = json.station[0].name
            document.getElementById('results').appendChild(header)

            json.station[0].etd.forEach((line) => {
              console.log(line)
              const trainLine = document.createElement('p')
              trainLine.innerHTML = line.destination
              trainLine.innerHTML += ': Platform # ' + line.estimate[0].platform
              trainLine.innerHTML += ' (' + line.estimate[0].direction + ')'
              document.getElementById('results').appendChild(trainLine)

              const square = document.createElement('span')
                  square.style.background = line.estimate[0].hexcolor
                  square.style.width = '20px'
                  square.style.height = '20px'
              document.getElementById('results').appendChild(square)

              line.estimate.forEach((estimate) => {
              console.log(estimate)
              const departureTime = document.createElement('span')
              departureTime.innerHTML = estimate.minutes + ', '
              document.getElementById('results').appendChild(departureTime)

              })
            })
          })


  /*              console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach(estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
*/


 }
//const makeStationList = () => {
//    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
//                    '&cmd=stns&json=y'
//    fetch(url)
//        .then((response) => {
//            return response.json()
//        })
//        .then((json) => {
//            json = json.root
//            console.log(json)

            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
//            const option1 = document.createElement("option")
//            option1.value = 'DBRK'
//            option1.innerHTML = 'Downtown Berkeley'
//            document.getElementById('station_list').appendChild(option1)
//        })
//        .catch((err) => {
//            console.log(err)
//        })
//}



/*    const bartStationCode = 'DBRK'
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log(json)
            const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            if (!Array.isArray(json.station.etd)) {
                json.station.etd = [ json.station.etd ]
            }
            json.station.etd.forEach(trainLine => {
                if (!Array.isArray(trainLine.estimate)) {
                    trainLine.estimate = [ trainLine.estimate ]
                }
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
                console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach(estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
*/
