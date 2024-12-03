<script setup>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const events = ref([
  {
    title: '미팅',
    start: '2024-03-20',
    end: '2024-03-21'
  }
])

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: 'ko',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth'
  },
  editable: true,
  selectable: true,
  events: events.value,
  
  // 드래그로 날짜 선택시 이벤트 생성
  select: (info) => {
    const title = prompt('일정을 입력하세요:')
    if (title) {
      events.value.push({
        title: title,
        start: info.startStr,
        end: info.endStr,
        allDay: true
      })
    }
  },
  
  // 이벤트 클릭시 삭제
  eventClick: (info) => {
    if (confirm(`'${info.event.title}' 일정을 삭제하시겠습니까?`)) {
      info.event.remove()
    }
  }
})
</script>

<template>
  <div class="calendar-container">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style scoped>
.calendar-container {
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

/* FullCalendar 스타일 커스터마이징 */
:deep(.fc) {
  max-width: 1100px;
  margin: 0 auto;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
}

:deep(.fc-toolbar-title) {
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
}

:deep(.fc-button-primary) {
  background-color: #4F46E5 !important;
  border-color: #4F46E5 !important;
  border-radius: 6px;
  padding: 8px 16px;
  transition: all 0.2s ease;
}

:deep(.fc-button-primary:hover) {
  background-color: #4338CA !important;
  border-color: #4338CA !important;
}

:deep(.fc-day) {
  transition: background-color 0.2s ease;
}

:deep(.fc-day:hover) {
  background-color: #F3F4F6;
}

:deep(.fc-event) {
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 2px 4px;
  background-color: #818CF8;
  border-left: 4px solid #4F46E5;
}

:deep(.fc-day-today) {
  background-color: #EEF2FF !important;
}

:deep(.fc-col-header-cell) {
  background-color: #F9FAFB;
  padding: 12px 0;
  font-weight: 600;
}

:deep(.fc-daygrid-day-number) {
  color: #374151;
  font-weight: 500;
  padding: 8px;
}
</style>