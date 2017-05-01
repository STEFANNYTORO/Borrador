import request from 'superagent';
 const CALENDAR_ID = ' knvcmjifpomnfnsepih6qlrtl8@group.calendar.google.com'
const API_KEY = 'AIzaSyAjzepKijqW8lS2Kew2gdifuqjFV3S7i68 '
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

// export means that this function will be available to any module that imports this module
export default function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        // create array to push events into
        const events = []
        // in practice, this block should be wrapped in a try/catch block, 
        // because as with any external API, we can't be sure if the data will be what we expect
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            // an event from Google Calendar can be a full day event or a regular one
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}