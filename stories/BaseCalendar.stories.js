import BaseCalendar from "../components/base/BaseCalendar.vue";
import BaseIcon from "../components/base/BaseIcon.vue";
import BaseButton from "../components/base/BaseButton.vue";
import BaseText from "../components/base/BaseText.vue";
import BaseSpace from "../components/base/BaseSpace.vue";
import BaseLink from "../components/base/BaseLink.vue";
import { action } from "@storybook/addon-actions";
import moment from "moment";

export default {
  title: "Design System/Base Components/Calendar",
  component: BaseCalendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Calendar = {
  render: (args) => ({
    components: {
      BaseCalendar,
      BaseIcon,
      BaseButton,
      BaseText,
      BaseSpace,
      BaseLink,
    },
    setup() {
      const selectedValue = ref(Date.now());
      const events = ref([
        {
          start: moment()
            .subtract(1, "day")
            .hour(10)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .subtract(1, "day")
            .hour(10)
            .minute(30)
            .format("YYYY-MM-DD HH:mm"),
          title: "#34205",
          content: "Portugese",
          icon: "location_on",
          class: "physical",
          style: {
            backgroundColor: "#F3EEFE",
            borderColor: "#885cf6",
          },
          background: true,
        },
        {
          start: moment()
            .subtract(1, "day")
            .hour(9)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .subtract(1, "day")
            .hour(9)
            .minute(39)
            .format("YYYY-MM-DD HH:mm"),
          title: "#56403",
          content: "Arabic",
          class: "video",
          icon: "video_camera_front",
          style: {
            backgroundColor: "#E6F6FC",
            borderColor: "#0ea5e9",
          },
          background: true,
        },
        {
          start: moment()
            .add(1, "day")
            .hour(11)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .add(1, "day")
            .hour(11)
            .minute(40)
            .format("YYYY-MM-DD HH:mm"),
          title: "#65942",
          content: "Somalian",
          icon: "video_camera_front",
          class: "video",
          style: {
            backgroundColor: "#E6F6FC",
            borderColor: "#0ea5e9",
          },
          background: true,
        },
        {
          start: moment()
            .add(0, "day")
            .hour(13)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .add(0, "day")
            .hour(13)
            .minute(40)
            .format("YYYY-MM-DD HH:mm"),
          title: "#98645",
          content: "Arabic",
          class: "phone",
          icon: "call",
          style: {
            backgroundColor: "#E7F8F2",
            borderColor: "#10b981",
          },
          background: true,
        },
        {
          start: moment()
            .add(0, "day")
            .hour(12)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .add(0, "day")
            .hour(12)
            .minute(55)
            .format("YYYY-MM-DD HH:mm"),
          title: "#98564",
          content: "Tagalog",
          class: "phone",
          icon: "call",
          style: {
            backgroundColor: "#E7F8F2",
            borderColor: "#10b981",
          },
          background: true,
        },
      ]);
      return { args, events, selectedValue };
    },
    methods: {
      onReady: action("ready"),
      onViewChange: action("view-change"),
      onCellClick: action("cell-click"),
      onCellDblClick: action("cell-dblclick"),
      onCellContextMenu: action("cell-contextmenu"),
      onCellKeypressEnter: action("cell-keypress-enter"),
      onCellFocus: action("cell-focus"),
      onEventFocus: action("event-focus"),
      onEventMouseEnter: action("event-mouse-enter"),
      onEventMouseLeave: action("event-mouse-leave"),
      onEventTitleChange: action("event-title-change"),
      onEventContentChange: action("event-content-change"),
      onEventDurationChange: action("event-duration-change"),
      onEventResizing: action("event-resizing"),
      onEventDrop: action("event-drop"),
      onEventChange: action("event-change"),
      onEventCreate: action("event-create"),
      onEventDragCreate: action("event-drag-create"),
      onEventDelete: action("event-delete"),

      onEventClick: action("on-event-click"),
      onEventDblclick: action("on-event-dblclick"),
    },
    template: `
      <base-space vertical :wrap-item="false">
         <base-link to="https://antoniandre.github.io/vue-cal/#css-notes">
            <base-text type="headline" size="sm" :weight="200">
               Check out the VueCal docs for more details.
            </base-text>
         </base-link>

         <base-calendar
            style="width: 100%"
            :activeView="args.activeView"
            :allDayBarHeight="args.allDayBarHeight"
            :cellClickHold="args.cellClickHold"
            :cellContextmenu="args.cellContextmenu"
            :clickToNavigate="args.clickToNavigate"
            :dblclickToNavigate="args.dblclickToNavigate"
            :disableDatePrototypes="args.disableDatePrototypes"
            :disableDays="args.disableDays"
            :disableViews="args.disableViews"
            :dragToCreateEvent="args.dragToCreateEvent"
            :dragToCreateThreshold="args.dragToCreateThreshold"
            :editableEvents="args.editableEvents"
            :events="events"
            :eventsCountOnYearView="args.eventsCountOnYearView"
            :eventsOnMonthView="args.eventsOnMonthView"
            :hideBody="args.hideBody"
            :hideTitleBar="args.hideTitleBar"
            :hideViewSelector="args.hideViewSelector"
            :hideWeekdays="args.hideWeekdays"
            :hideWeekends="args.hideWeekends"
            :locale="args.locale"
            :maxDate="args.maxDate"
            :minCellWidth="args.minCellWidth"
            :minDate="args.minDate"
            :minEventWidth="args.minEventWidth"
            :minSplitWidth="args.minSplitWidth"

            :overlapsPerTimeStep="args.overlapsPerTimeStep"
            :resizeX:="args.resizeX"
            v-model:selected-date="selectedValue"
            :showAllDayEvents="args.showAllDayEvents"
            :showTimeInCells="args.showTimeInCells"
            :showWeekNumbers="args.showWeekNumbers"
            :small="args.small"
            :snapToTime="args.snapToTime"
            :specialHours="args.specialHours"
            :splitDays="args.splitDays"
            :startWeekOnSunday="args.startWeekOnSunday"
            :stickySplitLabels="args.stickySplitLabels"
            :time="args.time"
            :timeCellHeight="args.timeCellHeight"
            :timeFormat="args.timeFormat"
            :timeFrom="args.timeFrom"
            :timeStep="args.timeStep"
            :timeTo="args.timeTo"
            :todayButton="args.todayButton"
            :transitions="args.transitions"
            :twelveHour="args.twelveHour"
            :xsmall="args.xsmall"
            :watchRealTime="args.watchRealTime"
            @ready="onReady"
            @view-change="onViewChange"
            @cell-click="onCellClick"
            @cell-dblclick="onCellDblClick"
            @cell-contextmenu="onCellContextMenu"
            @cell-keypress-enter="onCellKeypressEnter"
            @cell-focus="onCellFocus"
            @event-focus="onEventFocus"
            @event-mouse-enter="onEventMouseEnter"
            @event-mouse-leave="onEventMouseLeave"
            @event-title-change="onEventTitleChange"
            @event-content-change="onEventContentChange"
            @event-duration-change="onEventDurationChange"
            @event-resizing="onEventResizing"
            @event-drop="onEventDrop"
            @event-change="onEventChange"
            @event-create="onEventCreate"
            @event-drag-create="onEventDragCreate"
            @event-delete="onEventDelete"

            @onEventClick="onEventClick"
            @onEventDblclick="onEventDblclick"
         >
         <template #title="scoped">
            <div v-if="args.title" >
               {{ args.title }}
            </div>
         </template>

         <template #arrow-prev="scoped">
            <base-icon v-if="args['arrow-prev']">{{args['arrow-prev']}}</base-icon>
         </template>

         <template #arrow-next="scoped">
            <base-icon v-if="args['arrow-next']">{{args['arrow-next']}}</base-icon>
         </template>

         <template #today-button="scoped">
               <base-button v-if="args['today-button']">{{args['today-button']}}</base-button>
         </template>

         <template #weekly-heading="scoped">
            <base-text v-if="weekly-heading" type="headline">{{args['weekly-heading']}}</base-text>
         </template>

            <template #split-label="scoped">
               <base-space v-if="args['split-label']">
                  <base-icon>person</base-icon>
                  <base-text>{{args['split-label']}}</base-text>
               </base-space>
            </template>

            <template #time-cell="{ hours, minutes }" v-if="args['time-cell']">
               <base-text v-if="!minutes" style="font-size: 15px">{{ hours }}</base-text>
               <base-text v-else style="font-size: 11px">{{ minutes }}</base-text>
            </template>

            <template #week-number-cell="scoped">
               <base-text v-if="args['week-number-cell']">{{args['week-number-cell']}}</base-text>
         </template>

         <template #cell-content="scoped">
               <base-text v-if="args['cell-content']">{{args[cell-content]}}</base-text>
         </template>

         <template #no-event="scoped">
               <base-text v-if="args['no-event']">{{args['no-event']}}</base-text>
         </template>

         <template #events-count="scoped">
               <base-text v-if="args['events-count']">{{args['events-count']}}</base-text>
         </template>

         <template #event="scoped">
            <div
               class="vuecal__event"
               :style="{
               backgroundColor: scoped?.event?.style?.backgroundColor,

               }"
            >
               <div class="vuecal__event-title">
               <base-text color="#d63968" size="sm" :weight="600">{{
                  scoped?.event?.title
               }}</base-text>
               </div>
               <div class="vuecal__event-time">
               <base-text size="sm" color="#231f20">
               {{
                  scoped?.event?.start.formatTime("HH:mm")
               }}
                  -
                  {{scoped?.event.end.formatTime("HH:mm") }}
               </base-text>
               </div>

               <div class="vuecal__event-content">
               <base-space
                  :wrap-item="false"
                  :size="5"
                  horizontal-align="center"
               >
                  <base-icon :size="14">{{ scoped?.event?.icon }}</base-icon>
                  <base-text size="sm" :weight="600">
                     {{ scoped?.event?.content }}
                  </base-text>
               </base-space>
               </div>
            </div>
         </template>
         </base-calendar>
      </base-space>
  `,
  }),

  decorators: [
    () => ({
      template: `<div style="width:950px"><story/></div>`,
    }),
  ],

  args: {
    locale: "en",
    small: true,
    timeCellHeight: 60,
  },

  argTypes: {
    activeView: {
      control: "inline-radio",
      options: ["years", "year", "month", "week", "day"],
      description:
        "Allows you to set a default active view, for the first time you load the calendar. The active view has a `two-way binding`: you can use a `v-model` on it to keep your variable up to date.",
    },
    allDayBarHeight: {
      control: "text",
      description:
        "When the all day bar is visible and Vue Cal is also scrollable horizontally (due to minCellWidth or day splits with minSplitWidth), the all-day bar must have a fixed height for this particular layout. Only if these conditions are fulfilled, the height provided through this option will be used. If none is provided the default height will be used. The height can be any valid CSS height (as a string) or an integer for an amount of pixels.",
    },
    clickToNavigate: {
      control: "boolean",
      description:
        "When set to `true` a single click (or tap for touch devices) will take you to a narrower view if available. You can always go back to a broader view by clicking the view title or selecting another view from the view selector if enabled. The navigation to narrower view can be disabled by setting both `clickToNavigate` and `dblclickToNavigate` to false.",
    },

    cellClickHold: {
      control: "boolean",
      description:
        "Allows you to disable the default event creation on cell click & hold which only happens if `editableEvents.create` is set to `true`.",
    },
    cellContextmenu: {
      control: "boolean",
      description:
        "When set to `true`, a right click on a cell will emit the `cell-contextmenu` event, providing an object containing: the date and time at cursor, the x and y position of cursor, and the full original DOM event.",
    },
    disableViews: {
      control: "object",
      description:
        "Allows you to totally disable one or more of the available views. Accepted view names are `years`, `year`, `month`, `week`, `day`. Note that the navigation between views via cells click or title click won't break and will only navigate to views you have allowed.",
    },
    dblclickToNavigate: {
      control: "boolean",
      description:
        "When set to `true` a double click (or double tap for touch devices) will take you to a narrower view if available. You can always go back to a broader view by clicking the view title or selecting another view from the view selector if enabled. The navigation to narrower view can be disabled by setting both `clickToNavigate` and `dblclickToNavigate` to false.",
    },
    disableDatePrototypes: {
      control: "boolean",
      description:
        "If you really don't want the Date prototypes to be added, you can disable them with this option.",
    },
    dragToCreateEvent: {
      control: "boolean",
      description:
        "When events are editable and if `time` and `dragToCreateEvent` are set to `true`, clicking and dragging on a cell will create an event. `Note`: if this option is set to true, it will prevent event creation from cell click & hold.",
    },

    dragToCreateThreshold: {
      control: "number",
      description:
        "When events are editable and `time` and `dragToCreateEvent` are set to `true`, this option controls the minimum dragging distance before an event is created. This option might be useful when you can navigate with cell click to prevent unwanted event creation in case of slipping cursor while clicking. With option gets to a positive integer, and you can set it to 0 to disable it.",
    },

    eventsOnMonthView: {
      control: "boolean",
      description:
        "When set to true, the events will also be displayed on month view (including events from visible out of scope days). When set to the string `short`, only the event's title will be displayed.",
    },
    eventsCountOnYearView: {
      control: "boolean",
      description:
        "When set to `true`, the events count will also be displayed on `years & year` views.",
    },
    editableEvents: {
      control: "boolean",
      description:
        "When `editableEvents` is set to `true`, it allows: Dragging and dropping events, Resizing events by dragging the handle showing at the bottom of each event if time is set to true, Deleting events by click and hold an event. Editing events title",
    },
    hideViewSelector: {
      control: "boolean",
      description: "When set to `true`, the top view selector will disappear.",
    },
    hideTitleBar: {
      control: "boolean",
      description:
        "When set to `true`, the title bar with navigating arrows will disappear.",
    },
    hideBody: {
      control: "boolean",
      description:
        "When set to `true`, the whole calendar body will disappear - cells and timeline. Also means that all the logic usually triggered from the calendar's body won't run at all.",
    },
    hideWeekends: {
      control: "boolean",
      description:
        "Hide the weekend and shows only Monday to Friday on month view and week view. The weekend are still visible in day view not to break the behavior of the arrows. `Note` that by hiding the arrows you won't be able to see a weekend day in day view if hideWeekends is `true`",
    },
    hideWeekdays: {
      //   control: "boolean",
      description:
        "Hide particular days of the week. This option accepts an array of days (day numbers) to hide, `starting at 1 for Monday, to 7 for Sunday`. This option will apply on month & week views. If you want to hide Saturday and Sunday you can put `6, 7` in the array or use `hideWeekends` in supplement of `hideWeekdays`.",
    },
    locale: {
      control: "text",
      description:
        "Allows you to translate the calendar texts in a given language. Use a 2 letter locale code.",
    },
    maxDate: {
      control: "text",
      description:
        "Accepts a formatted string or plain JS Date object. Set a maximum date for the cells to be selectable. By default the cell will be grayed out when out of range but CSS classes let you customize this.",
    },
    minDate: {
      control: "text",
      description:
        "Accepts a formatted string or plain JS Date object. Set a minimum date for the cells to be selectable. By default the cell will be grayed out when out of range but CSS classes let you customize this.",
    },

    minEventWidth: {
      control: "number",
      description:
        "When a number is set, in percent, each event within a cell will have a minimum width. If the provided percentage is bigger than what it would naturally be, the events will partially overlap.",
    },

    minCellWidth: {
      control: "number",
      description:
        "When a number is set, in pixels, each cell of the week view (only) will have this minimum width. If it does not fit in the calendar body, the overflow will be scrollable. If minSplitWidth is also set, it will override minCellWidth.",
    },
    minSplitWidth: {
      control: "number",
      description:
        "This is for day splits only, and it applies to the `week and day views (only)`. When a number is set, in pixels, each split of each cell will have this minimum width. If it does not fit in the calendar body, the overflow will be scrollable. If `minCellWidth` is also set, `minSplitWidth` will override it on `week` view.",
    },
    overlapsPerTimeStep: {
      control: "number",
      description:
        "When set to `true`, each event of the same cell will have a width of `100% / [number of simultaneous events]` only if these events are within the same time step.",
    },
    specialHours: {
      control: "object",
      description:
        "Allows an individual highlighted time range for each day of the week. For instance, it could represent the business hours. The object must contain indexed days, `from 1 for Monday to 7 for Sunday`, of the days you want to highlight. Each day must contain an object with a from and to properties defining the beginning and the end of the time range 'in minutes'.",
      table: {
        defaultValue: {
          summary: `specialHours: {
                              3: { from: 8 * 60, to: 20 * 60, class: 'open' }
                           }`,
        },
      },
    },

    startWeekOnSunday: {
      control: "boolean",
      description:
        "By default weeks start on Monday but with this option you can start the week on Sunday.",
    },
    small: {
      control: "boolean",
      description:
        "When set to `true`, the days of the week headings will be truncated to 3 letters. Does not apply to the title of the day view.",
    },
    showAllDayEvents: {
      control: "boolean",
      description:
        "When the `showAllDayEvents` is set to `true` the events with an `allDay` attribute set to `true` will be displayed in a fixed top bar on the `week` & `day` views. The all day events bar will only show up if the options `showAllDayEvents & time` are set to `true`. `time` is important since without time information every event is an all-day event there is no point in separating them then. When `showAllDayEvents` is set to `false`, all the all day events (`allDay` attribute set to `true`), will show up as a normal background event. On month view, switching `showAllDayEvents` on and off will not have any impact since both should display the all day events. `showAllDayEvents` accepts a `Boolean` or the string '`short`', to display only the event title.",
    },
    showWeekNumbers: {
      control: "boolean",
      description:
        "When set to `true`, the weeks numbers will show in the first column on the `month` view (only). You can also provide a custom renderer to the weeks numbers cells through the `week-number-cell` slot.",
    },
    selectedDate: {
      control: "text",
      description:
        "Accepts a formatted string or plain JS Date object. Set a selected date, for the first time you load the calendar. This day will be highlighted and the first view will naturally show this date. E.g. setting a date in year 2000 with a activeView of week, will show you that week of year 2000. Updating the `selectedDate` programmatically after the first calendar load, will update the view if needed to show this date. The selected date has a two-way binding: you can use a `v-model` on it to keep your variable up to date.",
    },
    showTimeInCells: {
      control: "boolean",
      description:
        "When set to `true`, the time labels will be visible in each cell, in each time slot of the `day` and `week` views. You can then use CSS to style to taste. For instance, you could hide all the labels and show only the one that is being hovered. Will have no effect if `time` is set to false.",
    },
    time: {
      control: "boolean",
      description:
        "Whether you want to display the timeline and handle events with time or only date. `Note` that time is made of `hours:minutes and no second`.",
    },
    timeFrom: {
      control: "number",
      description:
        "If `time` is enabled, set the start of the timeline in minutes. By default it starts at midnight.",
    },

    timeTo: {
      control: "number",
      description:
        "If time is enabled, set the end of the timeline in minutes. By default it ends at 24:00.",
      table: {
        defaultValue: {
          summary: `24 * 60`,
        },
      },
    },
    timeStep: {
      control: "number",
      description: "If time is enabled, set the time increment in minutes.",
      table: {
        defaultValue: {
          summary: `60`,
        },
      },
    },
    timeCellHeight: {
      control: "number",
      description:
        "If `time` is enabled, set the time cell height in pixels. this is very important as it is used to calculate the events position in the day.",
    },

    twelveHour: {
      control: "boolean",
      description:
        "If time is enabled, the default time format is 24 hour. With `twelveHour` set to `true` (use `twelve-hour` in template), the time format will show 12 hours suffixed with am/pm.",
    },
    timeFormat: {
      control: "text",
      description:
        "When defined, overrides the default time format in time cells and events. Formatted time can contain any character but the following characters will be replaced:",
    },
    todayButton: {
      control: "boolean",
      description:
        "Adds a Today button in the title bar to quickly go to Today's date.",
    },
    transitions: {
      control: "boolean",
      description:
        "Enable / disable the CSS transitions between all the views and view states.",
    },

    splitDays: {
      description:
        "Split each day into multiple vertical splits. Accepts an array of split objects with attributes. Each split object can have these attributes, they are all optional:",
    },
    stickySplitLabels: {
      control: "boolean",
      description:
        "When set to `true`, the day splits labels will be displayed in the header instead of in-cell.",
    },

    resizeX: {
      control: "boolean",
      description:
        "When set to `true`, allows resizing an event across multiple days. Resizing on the X axis is only available on `week` view.",
    },
    snapToTime: {
      control: "number",
      description:
        "Accepts a number of minutes from 0 to 60 to snap a dropped event or an event end time while resizing. For instance, with a `snapToTime` of 15 min, an event dropped at a start of 10:05, will snap to 10:00, and dropped at 10:11 will snap to 10:15. This option affects event resizing, event drag & dropping, and event drag-creation.",
    },

    themeOverrides: {
      control: "object",
      description:
        'Progress component style overrides. Check the <a href="https://www.naiveui.com/en-US/theme" target="_blank">Theme</a> for more options.',
    },
    watchRealTime: {
      control: "boolean",
      description:
        "When set to `true`, the current time line in today's cell, on `week` and `day` views, will stay in sync with real time. (This requires a `setTimeout` every minute)",
    },
    xsmall: {
      control: "boolean",
      description:
        "When set to `true`, the days of the week headings will be truncated to 1 letter. Does not apply to the title of the day view.",
    },

    // events
    onEventClick: {
      control: false,
      description:
        "A callback function to execute when an event is clicked. this function receives 2 parameters: event, the clicked calendar event, and e, the associated JavaScript DOM event.",
      table: {
        category: "events",
      },
    },
    onEventDblclick: {
      control: false,
      description:
        "A callback function to execute when an event is double clicked. this function receives 2 parameters: event, the double clicked calendar event, and e, the associated JavaScript DOM event.",
      table: {
        category: "events",
      },
    },
    onEventCreate: {
      control: false,
      description:
        "A callback function to execute when an event is created. This function receives 2 parameters: event, the created event, and deleteEvent, a function to delete the created event. You can modify and override the received event and return it to vue-cal. If this function returns false, the event creation will be cancelled.",
      table: {
        category: "events",
      },
    },
    ready: {
      control: false,
      table: {
        category: "events",
      },
    },
    "view-change": {
      control: false,
      table: {
        category: "events",
      },
    },
    "cell-click": {
      control: false,
      table: {
        category: "events",
      },
    },
    "cell-dblclick": {
      control: false,
      table: {
        category: "events",
      },
    },
    "cell-contextmenu": {
      control: false,
      table: {
        category: "events",
      },
    },
    "cell-keypress-enter": {
      control: false,
      table: {
        category: "events",
      },
    },

    "event-focus": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-mouse-enter": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-mouse-leave": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-title-change": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-content-change": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-duration-change": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-resizing": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-drop": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-change": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-create": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-drag-create": {
      control: false,
      table: {
        category: "events",
      },
    },
    "event-delete": {
      control: false,
      table: {
        category: "events",
      },
    },

    //  slots
    title: {
      control: "text",
      description:
        "The title slot allows you to customize the title bar of the calendar. You can use the `title` slot to add custom content to the title bar. ",
      table: {
        category: "slots",
      },
    },
    "arrow-prev": {
      control: "select",
      options: icons(),
      description:
        "The arrow-prev slot allows you to customize the previous arrow button. You can use the `arrow-prev` slot to add custom content to the previous arrow button.",
      table: {
        category: "slots",
      },
    },
    "arrow-next": {
      control: "select",
      options: icons(),
      description:
        "The arrow-next slot allows you to customize the next arrow button. You can use the `arrow-next` slot to add custom content to the next arrow button.",
      table: {
        category: "slots",
      },
    },
    "today-button": {
      control: "text",
      description:
        "The today-button slot allows you to customize the today button. You can use the `today-button` slot to add custom content to the today button.",
      table: {
        category: "slots",
      },
    },
    "weekday-heading": {
      control: "text",
      description:
        "The weekday-heading slot allows you to customize the weekday heading. You can use the `weekday-heading` slot to add custom content to the weekday heading.",
      table: {
        category: "slots",
      },
    },
    "split-label": {
      control: "text",
      description:
        "The split-label slot allows you to customize the split label. You can use the `split-label` slot to add custom content to the split label.",
      table: {
        category: "slots",
      },
    },
    "time-cell": {
      control: false,
      description:
        "The time-cell slot allows you to customize the time cell. You can use the `time-cell` slot to add custom content to the time cell.",
      table: {
        category: "slots",
      },
    },
    "week-number-cell": {
      control: "text",
      description:
        "The week-number-cell slot allows you to customize the week number cell. You can use the `week-number-cell` slot to add custom content to the week number cell.",
      table: {
        category: "slots",
      },
    },
    "cell-content": {
      control: "text",
      description:
        "The cell-content slot allows you to customize the cell content. You can use the `cell-content` slot to add custom content to the cell content.",
      table: {
        category: "slots",
      },
    },
    "events-count": {
      control: "text",
      description:
        "The events-count slot allows you to customize the events count. You can use the `events-count` slot to add custom content to the events count.",
      table: {
        category: "slots",
      },
    },
    event: {
      control: false,
      description:
        "The event slot allows you to customize the event. You can use the `event` slot to add custom content to the event.",
      table: {
        category: "slots",
      },
    },
    slotName: {
      table: {
        disable: true,
      },
    },
  },

  parameters: {
    docs: {
      source: {
        code: `
        const events = ref([
        {
          start: moment()
            .subtract(1, "day")
            .hour(10)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .subtract(1, "day")
            .hour(10)
            .minute(30)
            .format("YYYY-MM-DD HH:mm"),
          title: "#34205",
          content: "Portugese",
          icon: "location_on",
          class: "physical",
          style: {
            backgroundColor: "#F3EEFE",
            borderColor: "#885cf6",
          },
          background: true,
        },
        {
          start: moment()
            .subtract(1, "day")
            .hour(9)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .subtract(1, "day")
            .hour(9)
            .minute(39)
            .format("YYYY-MM-DD HH:mm"),
          title: "#56403",
          content: "Arabic",
          class: "video",
          icon: "video_camera_front",
          style: {
            backgroundColor: "#E6F6FC",
            borderColor: "#0ea5e9",
          },
          background: true,
        },
        {
          start: moment()
            .add(1, "day")
            .hour(11)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .add(1, "day")
            .hour(11)
            .minute(40)
            .format("YYYY-MM-DD HH:mm"),
          title: "#65942",
          content: "Somalian",
          icon: "video_camera_front",
          class: "video",
          style: {
            backgroundColor: "#E6F6FC",
            borderColor: "#0ea5e9",
          },
          background: true,
        },
        {
          start: moment()
            .add(0, "day")
            .hour(13)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .add(0, "day")
            .hour(13)
            .minute(40)
            .format("YYYY-MM-DD HH:mm"),
          title: "#98645",
          content: "Arabic",
          class: "phone",
          icon: "call",
          style: {
            backgroundColor: "#E7F8F2",
            borderColor: "#10b981",
          },
          background: true,
        },
        {
          start: moment()
            .add(0, "day")
            .hour(12)
            .minute(0)
            .format("YYYY-MM-DD HH:mm"),
          end: moment()
            .add(0, "day")
            .hour(12)
            .minute(55)
            .format("YYYY-MM-DD HH:mm"),
          title: "#98564",
          content: "Tagalog",
          class: "phone",
          icon: "call",
          style: {
            backgroundColor: "#E7F8F2",
            borderColor: "#10b981",
          },
          background: true,
        },
      ]);

      <base-calendar
         :activeView="args.activeView"
         :allDayBarHeight="args.allDayBarHeight"
         :cellClickHold="args.cellClickHold"
         :cellContextmenu="args.cellContextmenu"
         :clickToNavigate="args.clickToNavigate"
         :dblclickToNavigate="args.dblclickToNavigate"
         :disableDatePrototypes="args.disableDatePrototypes"
         :disableDays="args.disableDays"
         :disableViews="args.disableViews"
         :dragToCreateEvent="args.dragToCreateEvent"
         :dragToCreateThreshold="args.dragToCreateThreshold"
         :editableEvents="args.editableEvents"
         :events="events"
         :eventsCountOnYearView="args.eventsCountOnYearView"
         :eventsOnMonthView="args.eventsOnMonthView"
         :hideBody="args.hideBody"
         :hideTitleBar="args.hideTitleBar"
         :hideViewSelector="args.hideViewSelector"
         :hideWeekdays="args.hideWeekdays"
         :hideWeekends="args.hideWeekends"
         :locale="args.locale"
         :maxDate="args.maxDate"
         :minCellWidth="args.minCellWidth"
         :minDate="args.minDate"
         :minEventWidth="args.minEventWidth"
         :minSplitWidth="args.minSplitWidth"
         :overlapsPerTimeStep="args.overlapsPerTimeStep"
         :resizeX:="args.resizeX"
         v-model:selected-date="selectedValue"
         :showAllDayEvents="args.showAllDayEvents"
         :showTimeInCells="args.showTimeInCells"
         :showWeekNumbers="args.showWeekNumbers"
         :small="args.small"
         :snapToTime="args.snapToTime"
         :specialHours="args.specialHours"
         :splitDays="args.splitDays"
         :startWeekOnSunday="args.startWeekOnSunday"
         :stickySplitLabels="args.stickySplitLabels"
         :time="args.time"
         :timeCellHeight="args.timeCellHeight"
         :timeFormat="args.timeFormat"
         :timeFrom="args.timeFrom"
         :timeStep="args.timeStep"
         :timeTo="args.timeTo"
         :todayButton="args.todayButton"
         :transitions="args.transitions"
         :twelveHour="args.twelveHour"
         :xsmall="args.xsmall"
         :watchRealTime="args.watchRealTime"
         @ready="onReady"
         @view-change="onViewChange"
         @cell-click="onCellClick"
         @cell-dblclick="onCellDblClick"
         @cell-contextmenu="onCellContextMenu"
         @cell-keypress-enter="onCellKeypressEnter"
         @cell-focus="onCellFocus"
         @event-focus="onEventFocus"
         @event-mouse-enter="onEventMouseEnter"
         @event-mouse-leave="onEventMouseLeave"
         @event-title-change="onEventTitleChange"
         @event-content-change="onEventContentChange"
         @event-duration-change="onEventDurationChange"
         @event-resizing="onEventResizing"
         @event-drop="onEventDrop"
         @event-change="onEventChange"
         @event-create="onEventCreate"
         @event-drag-create="onEventDragCreate"
         @event-delete="onEventDelete"

         @onEventClick="onEventClick"
         @onEventDblclick="onEventDblclick"
      >
        <template  #title="scoped">
          <div v-if="args.title" >
            {{ args.title }}
          </div>
        </template>

        <template #arrow-prev="scoped">
         <base-icon v-if=args['arrow-prev']>{{args['arrow-prev']}}</base-icon>
        </template>

        <template #arrow-next="scoped">
          <base-icon v-if="args['arrow-next']">{{args['arrow-next']}}</base-icon>
        </template>

        <template #today-button="scoped">
            <base-button v-if="args['today-button']">{{args['today-button']}}</base-button>
        </template>

        <template #weekly-heading="scoped">
         <base-text v-if="weekly-heading" type="headline">{{args['weekly-heading']}}</base-text>
        </template>

         <template #split-label="scoped">
            <base-space v-if="args['split-label']">
               <base-icon>person</base-icon>
               <base-text>{{args['split-label']}}</base-text>
            </base-space>
         </template>

         <template #time-cell="{ hours, minutes }" v-if="args['time-cell']">
            <base-text v-if="!minutes" style="font-size: 15px">{{ hours }}</base-text>
            <base-text v-else style="font-size: 11px">{{ minutes }}</base-text>
         </template>

         <template #week-number-cell="scoped">
            <base-text v-if="args['week-number-cell']">{{args['week-number-cell']}}</base-text>
        </template>

        <template #cell-content="scoped">
            <base-text v-if="args['cell-content']">{{args[cell-content]}}</base-text>
        </template>

        <template #no-event="scoped">
            <base-text v-if="args['no-event']">{{args['no-event']}}</base-text>
        </template>

        <template #events-count="scoped">
            <base-text v-if="args['events-count']">{{args['events-count']}}</base-text>
        </template>

        <template #event="scoped">
          <div
            class="vuecal__event"
            :style="{
              backgroundColor: scoped?.event?.style?.backgroundColor,

            }"
          >
            <div class="vuecal__event-title">
              <base-text color="#d63968" size="sm" :weight="600">{{
                scoped?.event?.title
              }}</base-text>
            </div>
            <div class="vuecal__event-time">
              <base-text size="sm" color="#231f20">
              {{
               scoped?.event?.start.formatTime("HH:mm")
              }}
               -
               {{scoped?.event.end.formatTime("HH:mm") }}
              </base-text>
            </div>

            <div class="vuecal__event-content">
              <base-space
                :wrap-item="false"
                :size="5"
                horizontal-align="center"
              >
                <base-icon :size="14">{{ scoped?.event?.icon }}</base-icon>
                <base-text size="sm" :weight="600">
                  {{ scoped?.event?.content }}
                </base-text>
              </base-space>
            </div>
          </div>
        </template>

      </base-calendar>
            `,
      },
    },
  },
};

function icons() {
  return [
    null,
    "arrow_forward",
    "arrow_back",
    "arrow_right_alt",
    "arrow_left_alt",
    "star",
    "person",
    "settings",
    "home",
    "search",
    "add",
    "delete",
    "edit",
    "close",
    "menu",
    "more",
    "refresh",
    "save",
    "send",
    "undo",
    "redo",
    "favorite",
    "lock",
    "lock_open",
    "lock",
  ];
}
