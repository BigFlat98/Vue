<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2024-12-15' },
          { title: 'event 2', date: '2024-12-27' }
        ],
        weekends: true,
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
      this.calendarOptions.events.push({
        title: 'New Event',
        date: arg.dateStr
      })
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>