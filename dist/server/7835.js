export const __rspack_esm_id = 7835;
export const __rspack_esm_ids = [7835];
export const __webpack_modules__ = {
41926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ReleasesCalendarRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useSearch.js
var useSearch = __webpack_require__(24613);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
;// CONCATENATED MODULE: ./src/features/calendar/types.ts
const EVENT_CATEGORIES = [
    {
        value: "work",
        label: "Work",
        color: "#3b82f6"
    },
    {
        value: "personal",
        label: "Personal",
        color: "#22c55e"
    },
    {
        value: "important",
        label: "Important",
        color: "#ef4444"
    },
    {
        value: "meeting",
        label: "Meeting",
        color: "#a855f7"
    },
    {
        value: "other",
        label: "Other",
        color: "#6b7280"
    }
];
const fallbackCategory = (/* unused pure expression or super */ null && ({
    value: "other",
    label: "Other",
    color: "#6b7280"
}));
function getCategory(value, categories) {
    return categories.find((c)=>c.value === value) ?? fallbackCategory;
}

;// CONCATENATED MODULE: ./src/features/calendar/hooks/calendar-service.ts

const STORAGE_KEY = "harlie-calendar-events";
const CATEGORIES_KEY = "harlie-calendar-categories";
function loadEvents() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch  {
        return [];
    }
}
function saveEvents(events) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}
function generateId() {
    return crypto.randomUUID();
}
function loadCategoriesRaw() {
    try {
        const raw = localStorage.getItem(CATEGORIES_KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch  {
        return [];
    }
}
function saveCategories(categories) {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
}
function seedDefaultCategories() {
    const existing = localStorage.getItem(CATEGORIES_KEY);
    if (!existing) {
        saveCategories(EVENT_CATEGORIES);
    }
}
const calendarService = {
    listEvents () {
        return loadEvents();
    },
    getEventsForDateRange (rangeStart, rangeEnd) {
        const events = loadEvents();
        return events.filter((event)=>event.startDate <= rangeEnd && event.endDate >= rangeStart);
    },
    createEvent (data) {
        const event = {
            id: generateId(),
            ...data
        };
        const events = loadEvents();
        events.push(event);
        saveEvents(events);
        return event;
    },
    updateEvent (id, data) {
        const events = loadEvents();
        const index = events.findIndex((e)=>e.id === id);
        if (index === -1) throw new Error(`Event ${id} not found`);
        const existing = events[index];
        if (!existing) throw new Error(`Event ${id} not found`);
        const updated = {
            ...existing,
            ...data
        };
        events[index] = updated;
        saveEvents(events);
        return updated;
    },
    deleteEvent (id) {
        const events = loadEvents();
        const filtered = events.filter((e)=>e.id !== id);
        saveEvents(filtered);
    },
    getCategories () {
        seedDefaultCategories();
        return loadCategoriesRaw();
    },
    addCategory (category) {
        seedDefaultCategories();
        const categories = loadCategoriesRaw();
        categories.push(category);
        saveCategories(categories);
    },
    updateCategory (value, data) {
        const categories = loadCategoriesRaw();
        const index = categories.findIndex((c)=>c.value === value);
        if (index === -1) return;
        categories[index] = {
            ...categories[index],
            ...data
        };
        saveCategories(categories);
    },
    deleteCategory (value) {
        let categories = loadCategoriesRaw();
        categories = categories.filter((c)=>c.value !== value);
        saveCategories(categories);
        const events = loadEvents();
        const updated = events.map((e)=>e.category === value ? {
                ...e,
                category: "other"
            } : e);
        saveEvents(updated);
    }
};

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(43653);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(19390);
;// CONCATENATED MODULE: ./src/features/calendar/hooks/useEventMutations.ts


function invalidateCalendarQueries(queryClient) {
    queryClient.invalidateQueries({
        queryKey: [
            "calendar-events"
        ]
    });
}
function useCreateEventMutation() {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: async (data)=>{
            return calendarService.createEvent(data);
        },
        onSuccess: ()=>{
            invalidateCalendarQueries(queryClient);
        }
    });
}
function useUpdateEventMutation() {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: async ({ id, data })=>{
            return calendarService.updateEvent(id, data);
        },
        onSuccess: ()=>{
            invalidateCalendarQueries(queryClient);
        }
    });
}
function useDeleteEventMutation() {
    const queryClient = (0,QueryClientProvider/* .useQueryClient */.jE)();
    return (0,useMutation/* .useMutation */.n)({
        mutationFn: async (id)=>{
            calendarService.deleteEvent(id);
        },
        onSuccess: ()=>{
            invalidateCalendarQueries(queryClient);
        }
    });
}

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(5375);
// EXTERNAL MODULE: ./node_modules/date-fns/startOfMonth.js
var startOfMonth = __webpack_require__(94919);
// EXTERNAL MODULE: ./node_modules/date-fns/subMonths.js
var subMonths = __webpack_require__(6113);
// EXTERNAL MODULE: ./node_modules/date-fns/endOfMonth.js
var endOfMonth = __webpack_require__(2200);
// EXTERNAL MODULE: ./node_modules/date-fns/addMonths.js
var addMonths = __webpack_require__(89884);
// EXTERNAL MODULE: ./node_modules/date-fns/format.js + 17 modules
var format = __webpack_require__(21377);
;// CONCATENATED MODULE: ./src/features/calendar/hooks/useEventsQuery.ts



function getDateRange(year, month) {
    const monthDate = new Date(year, month);
    const start = (0,startOfMonth/* .startOfMonth */.w)((0,subMonths/* .subMonths */.a)(monthDate, 1));
    const end = (0,endOfMonth/* .endOfMonth */.p)((0,addMonths/* .addMonths */.P)(monthDate, 1));
    return {
        start: (0,format/* .format */.GP)(start, "yyyy-MM-dd"),
        end: (0,format/* .format */.GP)(end, "yyyy-MM-dd")
    };
}
function useEventsQuery(year, month) {
    const { start, end } = getDateRange(year, month);
    return (0,useQuery/* .useQuery */.I)({
        queryKey: [
            "calendar-events",
            start,
            end
        ],
        queryFn: ()=>calendarService.getEventsForDateRange(start, end)
    });
}

// EXTERNAL MODULE: ./node_modules/date-fns/startOfWeek.js
var startOfWeek = __webpack_require__(78421);
// EXTERNAL MODULE: ./node_modules/date-fns/endOfWeek.js
var endOfWeek = __webpack_require__(94412);
// EXTERNAL MODULE: ./node_modules/date-fns/eachDayOfInterval.js + 1 modules
var eachDayOfInterval = __webpack_require__(92672);
// EXTERNAL MODULE: ./node_modules/date-fns/isSameMonth.js
var isSameMonth = __webpack_require__(36616);
// EXTERNAL MODULE: ./node_modules/date-fns/isToday.js
var date_fns_isToday = __webpack_require__(66117);
// EXTERNAL MODULE: ./node_modules/date-fns/parseISO.js
var parseISO = __webpack_require__(76438);
// EXTERNAL MODULE: ./node_modules/date-fns/isBefore.js
var isBefore = __webpack_require__(54629);
// EXTERNAL MODULE: ./node_modules/date-fns/isAfter.js
var isAfter = __webpack_require__(20254);
;// CONCATENATED MODULE: ./src/features/calendar/utils/dateHelpers.ts

function getMonthGrid(year, month) {
    const monthDate = new Date(year, month);
    const monthStart = (0,startOfMonth/* .startOfMonth */.w)(monthDate);
    const monthEnd = (0,endOfMonth/* .endOfMonth */.p)(monthDate);
    const gridStart = (0,startOfWeek/* .startOfWeek */.k)(monthStart, {
        weekStartsOn: 0
    });
    const gridEnd = (0,endOfWeek/* .endOfWeek */.$)(monthEnd, {
        weekStartsOn: 0
    });
    const days = (0,eachDayOfInterval/* .eachDayOfInterval */.k)({
        start: gridStart,
        end: gridEnd
    });
    const weeks = [];
    for(let i = 0; i < days.length; i += 7){
        const weekDays = [];
        for(let j = i; j < i + 7 && j < days.length; j++){
            const date = days[j];
            if (!date) continue;
            weekDays.push({
                date,
                isCurrentMonth: (0,isSameMonth/* .isSameMonth */.t)(date, monthDate),
                isToday: (0,date_fns_isToday/* .isToday */.c)(date)
            });
        }
        weeks.push(weekDays);
    }
    return {
        year,
        month,
        weeks
    };
}
function formatMonthYear(year, month) {
    return (0,format/* .format */.GP)(new Date(year, month), "MMMM yyyy");
}
function formatDateKey(date) {
    return (0,format/* .format */.GP)(date, "yyyy-MM-dd");
}
function prevMonth(year, month) {
    const d = (0,subMonths/* .subMonths */.a)(new Date(year, month), 1);
    return {
        year: d.getFullYear(),
        month: d.getMonth()
    };
}
function nextMonth(year, month) {
    const d = (0,addMonths/* .addMonths */.P)(new Date(year, month), 1);
    return {
        year: d.getFullYear(),
        month: d.getMonth()
    };
}
function getCurrentYearMonth() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth()
    };
}
function formatEventTime(_date, startTime, endTime) {
    if (!startTime) return "";
    const formatted = startTime.slice(0, 5);
    if (endTime) {
        return `${formatted} - ${endTime.slice(0, 5)}`;
    }
    return formatted;
}
function isDateInRange(date, startDate, endDate) {
    const start = (0,parseISO/* .parseISO */.H)(startDate);
    const end = (0,parseISO/* .parseISO */.H)(endDate);
    return !(0,isBefore/* .isBefore */.Y)(date, start) && !(0,isAfter/* .isAfter */.d)(date, end);
}


// EXTERNAL MODULE: ./src/components/ui/alert-dialog.tsx
var alert_dialog = __webpack_require__(2428);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.mjs
var icons_search = __webpack_require__(73619);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(78265);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/label.tsx
var ui_label = __webpack_require__(16533);
// EXTERNAL MODULE: ./src/components/ui/select.tsx
var ui_select = __webpack_require__(24219);
;// CONCATENATED MODULE: ./src/features/calendar/components/CalendarFilter.tsx






function CalendarFilter({ filters, onChange, categories }) {
    const updateField = (key, value)=>{
        if (key === "dateFrom" && typeof value === "string") {
            const next = {
                ...filters,
                dateFrom: value
            };
            if (value > filters.dateTo) {
                next.dateTo = value;
            }
            onChange(next);
        } else {
            onChange({
                ...filters,
                [key]: value
            });
        }
    };
    const clearFilters = ()=>{
        onChange({
            query: "",
            dateFrom: "",
            dateTo: "",
            category: "all"
        });
    };
    const hasActiveFilters = filters.query || filters.dateFrom || filters.dateTo || filters.category && filters.category !== "all";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap items-end gap-3 pb-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative min-w-0 flex-1 sm:max-w-xs",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_search/* ["default"] */.A, {
                        className: "absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                        placeholder: "Search events...",
                        value: filters.query,
                        onChange: (e)=>updateField("query", e.target.value),
                        className: "pl-8"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-end gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                htmlFor: "filter-category",
                                className: "text-xs text-muted-foreground",
                                children: "Category"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                                value: filters.category,
                                onValueChange: (value)=>updateField("category", value),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                        id: "filter-category",
                                        className: "h-8 w-32",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {
                                            placeholder: "All"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .SelectContent */.gC, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                value: "all",
                                                children: "All"
                                            }),
                                            categories.map((cat)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                    value: cat.value,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "inline-block size-2 rounded-full",
                                                                style: {
                                                                    backgroundColor: cat.color
                                                                }
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: cat.label
                                                            })
                                                        ]
                                                    })
                                                }, cat.value))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                htmlFor: "filter-date-from",
                                className: "text-xs text-muted-foreground",
                                children: "From"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: "filter-date-from",
                                type: "date",
                                value: filters.dateFrom,
                                onChange: (e)=>updateField("dateFrom", e.target.value),
                                className: "h-8 w-36"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                htmlFor: "filter-date-to",
                                className: "text-xs text-muted-foreground",
                                children: "To"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                id: "filter-date-to",
                                type: "date",
                                value: filters.dateTo,
                                min: filters.dateFrom || undefined,
                                onChange: (e)=>updateField("dateTo", e.target.value),
                                className: "h-8 w-36"
                            })
                        ]
                    }),
                    hasActiveFilters && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                        variant: "ghost",
                        size: "sm",
                        onClick: clearFilters,
                        className: "h-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                                className: "mr-1 size-3"
                            }),
                            "Clear"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.mjs
var chevron_left = __webpack_require__(89358);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.mjs
var chevron_right = __webpack_require__(58417);
// EXTERNAL MODULE: ./src/components/ui/popover.tsx
var popover = __webpack_require__(20732);
;// CONCATENATED MODULE: ./src/features/calendar/components/CalendarLegend.tsx

function CalendarLegend({ categories }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-wrap items-center gap-3",
        children: categories.map((cat)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "inline-block size-2 rounded-full",
                        style: {
                            backgroundColor: cat.color
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: cat.label
                    })
                ]
            }, cat.value))
    });
}

;// CONCATENATED MODULE: ./src/features/calendar/components/CalendarHeader.tsx






const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function CalendarHeader({ year, month, onPrevMonth, onNextMonth, onToday, onAddEvent, onManageCategories, onNavigate, categories }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-3 pb-4 sm:flex-row sm:items-center sm:justify-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarLegend, {
                categories: categories
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        onClick: onToday,
                        children: "Today"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                variant: "ghost",
                                size: "icon",
                                onClick: onPrevMonth,
                                "aria-label": "Previous month",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* ["default"] */.A, {
                                    className: "size-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* .Popover */.AM, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* .PopoverTrigger */.Wv, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "min-w-35 cursor-pointer text-center text-sm font-semibold hover:text-accent-foreground",
                                            children: formatMonthYear(year, month)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* .PopoverContent */.hl, {
                                        align: "center",
                                        className: "w-64 p-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between pb-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                        variant: "ghost",
                                                        size: "icon-xs",
                                                        onClick: ()=>onNavigate(year - 1, month),
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_left/* ["default"] */.A, {
                                                            className: "size-4"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-sm font-semibold",
                                                        children: year
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                        variant: "ghost",
                                                        size: "icon-xs",
                                                        onClick: ()=>onNavigate(year + 1, month),
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {
                                                            className: "size-4"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "grid grid-cols-3 gap-1",
                                                children: MONTHS.map((label, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                        variant: idx === month ? "default" : "ghost",
                                                        size: "sm",
                                                        className: "text-xs",
                                                        onClick: ()=>onNavigate(year, idx),
                                                        children: label
                                                    }, label))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                variant: "ghost",
                                size: "icon",
                                onClick: onNextMonth,
                                "aria-label": "Next month",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_right/* ["default"] */.A, {
                                    className: "size-4"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                        variant: "default",
                        size: "sm",
                        onClick: onAddEvent,
                        children: "Add Event"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        onClick: onManageCategories,
                        children: "Manage"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/separator.tsx
var separator = __webpack_require__(73594);
// EXTERNAL MODULE: ./src/components/ui/textarea.tsx
var ui_textarea = __webpack_require__(57529);
;// CONCATENATED MODULE: ./src/features/calendar/components/DeleteEventConfirm.tsx


function DeleteEventConfirm({ open, onOpenChange, onConfirm, eventTitle }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialog */.Lt, {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogContent */.EO, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogHeader */.wd, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogTitle */.r7, {
                            children: "Delete Event"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogDescription */.$v, {
                            children: [
                                'Are you sure you want to delete "',
                                eventTitle,
                                '"? This action cannot be undone.'
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogFooter */.ck, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogCancel */.Zr, {
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogAction */.Rx, {
                            onClick: onConfirm,
                            className: "bg-destructive not-odd:text-destructive-foreground hover:bg-destructive/80",
                            children: "Delete"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/features/calendar/components/EventDialog.tsx











function toTimeInput(time) {
    if (!time) return "";
    return time.slice(0, 5);
}
function EventDialog({ open, onOpenChange, event, defaultDate, categories, onAddCategory, onSave, onDelete }) {
    const isEdit = !!event;
    const [showDeleteConfirm, setShowDeleteConfirm] = (0,react.useState)(false);
    const [isAddingCategory, setIsAddingCategory] = (0,react.useState)(false);
    const [newCategoryName, setNewCategoryName] = (0,react.useState)("");
    const [newCategoryColor, setNewCategoryColor] = (0,react.useState)("#3b82f6");
    const [categoryAddError, setCategoryAddError] = (0,react.useState)("");
    const today = (0,format/* .format */.GP)(new Date(), "yyyy-MM-dd");
    const [form, setForm] = (0,react.useState)(()=>({
            title: "",
            startDate: defaultDate ?? today,
            endDate: defaultDate ?? today,
            startTime: "09:00",
            endTime: "10:00",
            allDay: false,
            category: "work",
            description: "",
            location: ""
        }));
    const [errors, setErrors] = (0,react.useState)({});
    (0,react.useEffect)(()=>{
        if (open && event) {
            setForm({
                title: event.title,
                startDate: event.startDate,
                endDate: event.endDate,
                startTime: toTimeInput(event.startTime),
                endTime: toTimeInput(event.endTime),
                allDay: event.allDay,
                category: event.category,
                description: event.description ?? "",
                location: event.location ?? ""
            });
            setErrors({});
        } else if (open && defaultDate) {
            setForm({
                title: "",
                startDate: defaultDate,
                endDate: defaultDate,
                startTime: "09:00",
                endTime: "10:00",
                allDay: false,
                category: "work",
                description: "",
                location: ""
            });
            setErrors({});
        }
    }, [
        open,
        event,
        defaultDate
    ]);
    const updateField = (0,react.useCallback)((key, value)=>{
        setForm((prev)=>{
            if (key === "startDate" && typeof value === "string") {
                const next = {
                    ...prev,
                    startDate: value
                };
                if (value > prev.endDate) {
                    next.endDate = value;
                }
                return next;
            }
            return {
                ...prev,
                [key]: value
            };
        });
        setErrors((prev)=>({
                ...prev,
                [key]: undefined
            }));
    }, []);
    const validate = (0,react.useCallback)(()=>{
        const errs = {};
        if (!form.title.trim()) {
            errs.title = "Title is required";
        }
        if (!form.startDate) {
            errs.startDate = "Start date is required";
        }
        if (!form.endDate) {
            errs.endDate = "End date is required";
        }
        if (form.startDate && form.endDate && form.endDate < form.startDate) {
            errs.endDate = "End date must be on or after start date";
        }
        if (!form.allDay && form.startTime && form.endTime && form.endTime <= form.startTime) {
            errs.endTime = "End time must be after start time";
        }
        return errs;
    }, [
        form
    ]);
    const handleSubmit = (0,react.useCallback)(()=>{
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        onSave({
            title: form.title.trim(),
            startDate: form.startDate,
            endDate: form.endDate,
            startTime: form.allDay ? undefined : form.startTime || undefined,
            endTime: form.allDay ? undefined : form.endTime || undefined,
            allDay: form.allDay,
            category: form.category,
            description: form.description.trim() || undefined,
            location: form.location.trim() || undefined
        });
    }, [
        form,
        validate,
        onSave
    ]);
    const handleDelete = (0,react.useCallback)(()=>{
        if (event && onDelete) {
            onDelete(event.id);
        }
        setShowDeleteConfirm(false);
    }, [
        event,
        onDelete
    ]);
    const handleAddCategory = (0,react.useCallback)(()=>{
        const name = newCategoryName.trim();
        if (!name) {
            setCategoryAddError("Name is required");
            return;
        }
        const value = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        if (!value) {
            setCategoryAddError("Name must contain valid characters");
            return;
        }
        const newCat = {
            value,
            label: name,
            color: newCategoryColor
        };
        onAddCategory(newCat);
        updateField("category", value);
        setIsAddingCategory(false);
        setNewCategoryName("");
        setNewCategoryColor("#3b82f6");
        setCategoryAddError("");
    }, [
        newCategoryName,
        newCategoryColor,
        onAddCategory,
        updateField
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .Dialog */.lG, {
                open: open,
                onOpenChange: onOpenChange,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                    children: isEdit ? "Edit Event" : "Add Event"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                    children: isEdit ? "Update the event details below." : "Fill in the details for your new event."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid gap-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "title",
                                            children: "Title *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "title",
                                            value: form.title,
                                            onChange: (e)=>updateField("title", e.target.value),
                                            placeholder: "Event title"
                                        }),
                                        errors.title && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-xs text-destructive",
                                            children: errors.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                    htmlFor: "startDate",
                                                    children: "Start date *"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                    id: "startDate",
                                                    type: "date",
                                                    value: form.startDate,
                                                    onChange: (e)=>updateField("startDate", e.target.value)
                                                }),
                                                errors.startDate && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errors.startDate
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                    htmlFor: "endDate",
                                                    children: "End date *"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                    id: "endDate",
                                                    type: "date",
                                                    value: form.endDate,
                                                    min: form.startDate,
                                                    onChange: (e)=>updateField("endDate", e.target.value)
                                                }),
                                                errors.endDate && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errors.endDate
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            id: "allDay",
                                            type: "checkbox",
                                            checked: form.allDay,
                                            onChange: (e)=>updateField("allDay", e.target.checked),
                                            className: "size-4 rounded border-border text-primary"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "allDay",
                                            className: "text-sm font-normal",
                                            children: "All day"
                                        })
                                    ]
                                }),
                                !form.allDay && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                    htmlFor: "startTime",
                                                    children: "Start time"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                    id: "startTime",
                                                    type: "time",
                                                    value: form.startTime,
                                                    onChange: (e)=>updateField("startTime", e.target.value)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                    htmlFor: "endTime",
                                                    children: "End time"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                    id: "endTime",
                                                    type: "time",
                                                    value: form.endTime,
                                                    onChange: (e)=>updateField("endTime", e.target.value)
                                                }),
                                                errors.endTime && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errors.endTime
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "category",
                                            children: "Category"
                                        }),
                                        isAddingCategory ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2 rounded-md border border-border p-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                            htmlFor: "new-cat-name",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Name"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                            id: "new-cat-name",
                                                            value: newCategoryName,
                                                            onChange: (e)=>{
                                                                setNewCategoryName(e.target.value);
                                                                setCategoryAddError("");
                                                            },
                                                            placeholder: "Category name"
                                                        }),
                                                        categoryAddError && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-xs text-destructive",
                                                            children: categoryAddError
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                                            htmlFor: "new-cat-color",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Color"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                    id: "new-cat-color",
                                                                    type: "color",
                                                                    value: newCategoryColor,
                                                                    onChange: (e)=>setNewCategoryColor(e.target.value),
                                                                    className: "size-8 cursor-pointer rounded border border-border"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "inline-block size-4 rounded-full",
                                                                    style: {
                                                                        backgroundColor: newCategoryColor
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: newCategoryColor
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex gap-2 pt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            size: "sm",
                                                            onClick: handleAddCategory,
                                                            children: "Add"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            onClick: ()=>{
                                                                setIsAddingCategory(false);
                                                                setNewCategoryName("");
                                                                setNewCategoryColor("#3b82f6");
                                                                setCategoryAddError("");
                                                            },
                                                            children: "Cancel"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                                            value: form.category,
                                            onValueChange: (value)=>{
                                                if (value === "__add__") {
                                                    setIsAddingCategory(true);
                                                } else {
                                                    updateField("category", value);
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                                    id: "category",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {})
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .SelectContent */.gC, {
                                                    children: [
                                                        categories.map((cat)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                                value: cat.value,
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "inline-block size-2 rounded-full",
                                                                            style: {
                                                                                backgroundColor: cat.color
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            children: cat.label
                                                                        })
                                                                    ]
                                                                })
                                                            }, cat.value)),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {
                                                            className: "my-1"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                            value: "__add__",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "text-muted-foreground",
                                                                children: "+ Add new category"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "description",
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_textarea/* .Textarea */.T, {
                                            id: "description",
                                            value: form.description,
                                            onChange: (e)=>updateField("description", e.target.value),
                                            placeholder: "Optional description",
                                            rows: 3
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                            htmlFor: "location",
                                            children: "Location"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "location",
                                            value: form.location,
                                            onChange: (e)=>updateField("location", e.target.value),
                                            placeholder: "Optional location"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogFooter */.Es, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex w-full items-center justify-between",
                                children: [
                                    isEdit ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "destructive",
                                        size: "sm",
                                        onClick: ()=>setShowDeleteConfirm(true),
                                        children: "Delete"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                variant: "outline",
                                                onClick: ()=>onOpenChange(false),
                                                children: "Cancel"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                onClick: handleSubmit,
                                                children: isEdit ? "Save changes" : "Save"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            isEdit && event && /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteEventConfirm, {
                open: showDeleteConfirm,
                onOpenChange: setShowDeleteConfirm,
                onConfirm: handleDelete,
                eventTitle: event.title
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(23853);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/pencil.mjs
var pencil = __webpack_require__(30772);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash-2.mjs
var trash_2 = __webpack_require__(66838);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(44207);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/features/calendar/components/ManageCategoriesDialog.tsx







function isValidHex(s) {
    return /^#[0-9a-fA-F]{6}$/.test(s);
}
function ManageCategoriesDialog({ open, onOpenChange, categories, onAddCategory, onUpdateCategory, onRequestDeleteCategory }) {
    const [name, setName] = (0,react.useState)("");
    const [color, setColor] = (0,react.useState)("#3b82f6");
    const [addError, setAddError] = (0,react.useState)("");
    const [editingValue, setEditingValue] = (0,react.useState)(null);
    const [editName, setEditName] = (0,react.useState)("");
    const [editColor, setEditColor] = (0,react.useState)("");
    const handleAdd = (0,react.useCallback)(()=>{
        const trimmed = name.trim();
        if (!trimmed) {
            setAddError("Name is required");
            return;
        }
        const value = trimmed.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        if (!value) {
            setAddError("Name must contain valid characters");
            return;
        }
        if (categories.some((c)=>c.value === value)) {
            setAddError("A category with this name already exists");
            return;
        }
        onAddCategory({
            value,
            label: trimmed,
            color
        });
        setName("");
        setColor("#3b82f6");
        setAddError("");
    }, [
        name,
        color,
        categories,
        onAddCategory
    ]);
    const startEditing = (0,react.useCallback)((cat)=>{
        setEditingValue(cat.value);
        setEditName(cat.label);
        setEditColor(cat.color);
    }, []);
    const cancelEditing = (0,react.useCallback)(()=>{
        setEditingValue(null);
        setEditName("");
        setEditColor("");
    }, []);
    const saveEditing = (0,react.useCallback)(()=>{
        if (!editingValue) return;
        const trimmed = editName.trim();
        if (!trimmed) return;
        onUpdateCategory(editingValue, {
            label: trimmed,
            color: editColor
        });
        cancelEditing();
    }, [
        editingValue,
        editName,
        editColor,
        onUpdateCategory,
        cancelEditing
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "fixed inset-0 isolate z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "fixed inset-0 bg-black/10 backdrop-blur-xs",
                onClick: ()=>onOpenChange(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,utils.cn)("relative z-50 w-full max-w-md rounded-xl bg-popover p-6 text-sm text-popover-foreground ring-1 ring-foreground/10 shadow-lg"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-1.5 pb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-lg font-semibold leading-none",
                                children: "Manage Categories"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Add, edit, or remove categories."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex flex-col gap-1.5",
                                children: categories.map((cat)=>{
                                    const isEditing = editingValue === cat.value;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center justify-between rounded-md border border-border px-3 py-2",
                                        children: isEditing ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                    value: editName,
                                                    onChange: (e)=>setEditName(e.target.value),
                                                    className: "h-7 w-28 text-sm",
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter") saveEditing();
                                                        if (e.key === "Escape") cancelEditing();
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                            type: "color",
                                                            value: editColor,
                                                            onChange: (e)=>setEditColor(e.target.value),
                                                            className: "size-7 cursor-pointer rounded border border-border"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                            value: editColor,
                                                            onChange: (e)=>{
                                                                const v = e.target.value;
                                                                setEditColor(v.startsWith("#") ? v : `#${v}`);
                                                            },
                                                            onBlur: ()=>{
                                                                if (!isValidHex(editColor)) setEditColor("#3b82f6");
                                                            },
                                                            className: "h-7 w-20 text-xs font-mono",
                                                            placeholder: "#hex"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                    variant: "ghost",
                                                    size: "icon-xs",
                                                    onClick: saveEditing,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                                        className: "size-3.5 text-green-600"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                    variant: "ghost",
                                                    size: "icon-xs",
                                                    onClick: cancelEditing,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                                                        className: "size-3.5"
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "inline-block size-3 rounded-full",
                                                            style: {
                                                                backgroundColor: cat.color
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm",
                                                            children: cat.label
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "ghost",
                                                            size: "icon-xs",
                                                            onClick: ()=>startEditing(cat),
                                                            "aria-label": `Edit ${cat.label}`,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(pencil/* ["default"] */.A, {
                                                                className: "size-3.5"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "ghost",
                                                            size: "icon-xs",
                                                            onClick: ()=>onRequestDeleteCategory(cat.value, cat.label),
                                                            "aria-label": `Delete ${cat.label}`,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* ["default"] */.A, {
                                                                className: "size-3.5 text-destructive"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, cat.value);
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid gap-2 rounded-md border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_label/* .Label */.J, {
                                        className: "text-xs text-muted-foreground",
                                        children: "Add new category"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                        placeholder: "Category name",
                                                        value: name,
                                                        onChange: (e)=>{
                                                            setName(e.target.value);
                                                            setAddError("");
                                                        },
                                                        onKeyDown: (e)=>{
                                                            if (e.key === "Enter") handleAdd();
                                                        }
                                                    }),
                                                    addError && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "pt-1 text-xs text-destructive",
                                                        children: addError
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "color",
                                                value: color,
                                                onChange: (e)=>setColor(e.target.value),
                                                className: "size-9 cursor-pointer rounded border border-border"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                value: color,
                                                onChange: (e)=>{
                                                    const v = e.target.value;
                                                    setColor(v.startsWith("#") ? v : `#${v}`);
                                                },
                                                onBlur: ()=>{
                                                    if (!isValidHex(color)) setColor("#3b82f6");
                                                },
                                                className: "h-9 w-22 text-xs font-mono",
                                                placeholder: "#hex"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                size: "sm",
                                                onClick: handleAdd,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(plus/* ["default"] */.A, {
                                                        className: "mr-1 size-3.5"
                                                    }),
                                                    "Add"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex flex-col-reverse gap-2 pt-6 sm:flex-row sm:justify-end",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            children: "Close"
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var dist = __webpack_require__(60415);
;// CONCATENATED MODULE: ./src/components/ui/scroll-area.tsx



function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* .Root */.bL, {
        "data-slot": "scroll-area",
        className: (0,utils.cn)("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .Viewport */.LM, {
                className: "size-full rounded-[inherit]",
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .Scrollbar */.Ze, {
                orientation: "vertical",
                className: "flex touch-none select-none transition-colors h-full w-2.5 border-l border-l-transparent p-px",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .Thumb */.zi, {
                    className: "relative flex-1 rounded-full bg-border"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .Scrollbar */.Ze, {
                orientation: "horizontal",
                className: "flex touch-none select-none transition-colors h-2.5 border-t border-t-transparent p-px",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .Thumb */.zi, {
                    className: "relative flex-1 rounded-full bg-border"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* .Corner */.OK, {})
        ]
    });
}


;// CONCATENATED MODULE: ./src/features/calendar/components/EventChip.tsx



function getCategoryColor(value) {
    const categories = calendarService.getCategories();
    const found = categories.find((c)=>c.value === value);
    return found?.color ?? "#6b7280";
}
function EventChip({ event, onClick }) {
    const color = getCategoryColor(event.category);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        type: "button",
        onClick: (e)=>{
            e.stopPropagation();
            onClick(event);
        },
        className: "flex w-full cursor-pointer items-center gap-1 rounded px-1 py-0.5 text-left text-xs leading-tight transition-opacity hover:opacity-80",
        style: {
            backgroundColor: `${color}20`,
            color,
            borderLeft: `3px solid ${color}`
        },
        children: [
            !event.allDay && event.startTime && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "shrink-0 font-medium",
                children: formatEventTime(event.startDate, event.startTime, event.endTime)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "truncate",
                children: event.title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/features/calendar/components/DayCell.tsx





const MAX_VISIBLE_EVENTS = 3;
function DayCell({ date, isCurrentMonth, isToday, events, onDateClick, onEventClick, popoverOpen, onPopoverOpenChange }) {
    const hasMore = events.length > MAX_VISIBLE_EVENTS;
    const visibleEvents = events.slice(0, MAX_VISIBLE_EVENTS);
    const hiddenEvents = events.slice(MAX_VISIBLE_EVENTS);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        onClick: ()=>onDateClick(date),
        onKeyDown: (e)=>{
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onDateClick(date);
            }
        },
        className: "flex min-h-[90px] cursor-pointer flex-col gap-0.5 border-r border-b border-border p-1 text-left transition-colors hover:bg-slate-200/90",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: `inline-flex size-6 items-center justify-center rounded-full text-xs ${isToday ? "bg-primary text-primary-foreground" : isCurrentMonth ? "text-foreground" : "text-muted-foreground"}`,
                    children: date.getDate()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-0.5 overflow-hidden",
                children: [
                    visibleEvents.map((event)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(EventChip, {
                            event: event,
                            onClick: onEventClick
                        }, event.id)),
                    hasMore && /*#__PURE__*/ (0,jsx_runtime.jsxs)(popover/* .Popover */.AM, {
                        open: popoverOpen,
                        onOpenChange: onPopoverOpenChange,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* .PopoverTrigger */.Wv, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "inline-flex cursor-pointer items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-gray-200/90",
                                    onClick: (e)=>e.stopPropagation(),
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.stopPropagation();
                                        }
                                    },
                                    children: [
                                        "+",
                                        hiddenEvents.length,
                                        " more"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(popover/* .PopoverContent */.hl, {
                                align: "start",
                                className: "w-64 p-2",
                                onClick: (e)=>e.stopPropagation(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollArea, {
                                    className: "max-h-48",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "px-1 text-xs font-medium text-muted-foreground",
                                                children: formatDateKey(date)
                                            }),
                                            hiddenEvents.map((event)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(EventChip, {
                                                    event: event,
                                                    onClick: onEventClick
                                                }, event.id))
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/features/calendar/components/MonthGrid.tsx




const WEEKDAY_HEADERS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
function getEventsForDate(events, date) {
    return events.filter((event)=>isDateInRange(date, event.startDate, event.endDate));
}
function weekKey(week) {
    const firstDay = week[0];
    return firstDay ? formatDateKey(firstDay.date) : "empty";
}
function MonthGrid({ grid, events, onDateClick, onEventClick }) {
    const [activePopover, setActivePopover] = (0,react.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col overflow-hidden rounded-lg border border-border",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-7 border-b border-border",
                children: WEEKDAY_HEADERS.map((header)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "border-r border-border px-2 py-2 text-center text-xs font-semibold text-muted-foreground last:border-r-0",
                        children: header
                    }, header))
            }),
            grid.weeks.map((week)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "grid grid-cols-7",
                    children: week.map((day)=>{
                        const dayKey = formatDateKey(day.date);
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DayCell, {
                            date: day.date,
                            isCurrentMonth: day.isCurrentMonth,
                            isToday: day.isToday,
                            events: getEventsForDate(events, day.date),
                            onDateClick: onDateClick,
                            onEventClick: onEventClick,
                            popoverOpen: activePopover === dayKey,
                            onPopoverOpenChange: (open)=>{
                                if (open) {
                                    setActivePopover(dayKey);
                                } else {
                                    setActivePopover((prev)=>prev === dayKey ? null : prev);
                                }
                            }
                        }, dayKey);
                    })
                }, weekKey(week)))
        ]
    });
}

;// CONCATENATED MODULE: ./src/features/calendar/components/CalendarPage.tsx













function matchesFilters(event, filters) {
    if (filters.query) {
        const q = filters.query.toLowerCase();
        const titleMatch = event.title.toLowerCase().includes(q);
        const descriptionMatch = event.description?.toLowerCase().includes(q) ?? false;
        const locationMatch = event.location?.toLowerCase().includes(q) ?? false;
        if (!titleMatch && !descriptionMatch && !locationMatch) return false;
    }
    if (filters.category && filters.category !== "all" && event.category !== filters.category) return false;
    if (filters.dateFrom && event.endDate < filters.dateFrom) return false;
    if (filters.dateTo && event.startDate > filters.dateTo) return false;
    return true;
}
const defaultFilters = {
    query: "",
    dateFrom: "",
    dateTo: "",
    category: "all"
};
function CalendarPage({ year, month, onNavigate }) {
    const { data: events = [], isLoading } = useEventsQuery(year, month);
    const createEvent = useCreateEventMutation();
    const updateEvent = useUpdateEventMutation();
    const deleteEvent = useDeleteEventMutation();
    const [dialogOpen, setDialogOpen] = (0,react.useState)(false);
    const [manageDialogOpen, setManageDialogOpen] = (0,react.useState)(false);
    const [pendingDeleteCategory, setPendingDeleteCategory] = (0,react.useState)(null);
    const [editingEvent, setEditingEvent] = (0,react.useState)();
    const [defaultDate, setDefaultDate] = (0,react.useState)();
    const [filters, setFilters] = (0,react.useState)(defaultFilters);
    const [categories, setCategories] = (0,react.useState)(()=>calendarService.getCategories());
    (0,react.useEffect)(()=>{
        setCategories(calendarService.getCategories());
    }, []);
    const refreshCategories = (0,react.useCallback)(()=>{
        setCategories(calendarService.getCategories());
    }, []);
    const handleAddCategory = (0,react.useCallback)((category)=>{
        calendarService.addCategory(category);
        refreshCategories();
    }, [
        refreshCategories
    ]);
    const handleUpdateCategory = (0,react.useCallback)((value, data)=>{
        calendarService.updateCategory(value, data);
        refreshCategories();
    }, [
        refreshCategories
    ]);
    const handleDeleteCategory = (0,react.useCallback)((value)=>{
        calendarService.deleteCategory(value);
        refreshCategories();
    }, [
        refreshCategories
    ]);
    const confirmDeleteCategory = (0,react.useCallback)(()=>{
        if (!pendingDeleteCategory) return;
        handleDeleteCategory(pendingDeleteCategory.value);
        setPendingDeleteCategory(null);
    }, [
        pendingDeleteCategory,
        handleDeleteCategory
    ]);
    const filteredEvents = (0,react.useMemo)(()=>{
        return events.filter((event)=>matchesFilters(event, filters));
    }, [
        events,
        filters
    ]);
    const grid = (0,react.useMemo)(()=>getMonthGrid(year, month), [
        year,
        month
    ]);
    const handlePrevMonth = (0,react.useCallback)(()=>{
        const prev = prevMonth(year, month);
        onNavigate(prev.year, prev.month);
    }, [
        year,
        month,
        onNavigate
    ]);
    const handleNextMonth = (0,react.useCallback)(()=>{
        const next = nextMonth(year, month);
        onNavigate(next.year, next.month);
    }, [
        year,
        month,
        onNavigate
    ]);
    const handleToday = (0,react.useCallback)(()=>{
        const today = getCurrentYearMonth();
        onNavigate(today.year, today.month);
    }, [
        onNavigate
    ]);
    const openAddDialog = (0,react.useCallback)((date)=>{
        setEditingEvent(undefined);
        setDefaultDate(date ? formatDateKey(date) : undefined);
        setDialogOpen(true);
    }, []);
    const openEditDialog = (0,react.useCallback)((event)=>{
        setEditingEvent(event);
        setDefaultDate(undefined);
        setDialogOpen(true);
    }, []);
    const handleSave = (0,react.useCallback)((data)=>{
        if (editingEvent) {
            updateEvent.mutate({
                id: editingEvent.id,
                data
            });
        } else {
            createEvent.mutate(data);
        }
        setDialogOpen(false);
        setEditingEvent(undefined);
    }, [
        editingEvent,
        createEvent,
        updateEvent
    ]);
    const handleDelete = (0,react.useCallback)((id)=>{
        deleteEvent.mutate(id);
        setDialogOpen(false);
        setEditingEvent(undefined);
    }, [
        deleteEvent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarHeader, {
                year: year,
                month: month,
                categories: categories,
                onPrevMonth: handlePrevMonth,
                onNextMonth: handleNextMonth,
                onToday: handleToday,
                onAddEvent: ()=>openAddDialog(),
                onManageCategories: ()=>setManageDialogOpen(true),
                onNavigate: onNavigate
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarFilter, {
                filters: filters,
                onChange: setFilters,
                categories: categories
            }),
            isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-center py-20 text-sm text-muted-foreground",
                children: "Loading..."
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MonthGrid, {
                grid: grid,
                events: filteredEvents,
                onDateClick: (date)=>openAddDialog(date),
                onEventClick: (event)=>openEditDialog(event)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EventDialog, {
                open: dialogOpen,
                onOpenChange: (open)=>{
                    setDialogOpen(open);
                    if (!open) {
                        setEditingEvent(undefined);
                        setDefaultDate(undefined);
                    }
                },
                event: editingEvent,
                defaultDate: defaultDate,
                categories: categories,
                onAddCategory: handleAddCategory,
                onSave: handleSave,
                onDelete: handleDelete
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ManageCategoriesDialog, {
                open: manageDialogOpen,
                onOpenChange: setManageDialogOpen,
                categories: categories,
                onAddCategory: handleAddCategory,
                onUpdateCategory: handleUpdateCategory,
                onRequestDeleteCategory: (value, label)=>setPendingDeleteCategory({
                        value,
                        label
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialog */.Lt, {
                open: !!pendingDeleteCategory,
                onOpenChange: (open)=>{
                    if (!open) setPendingDeleteCategory(null);
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogContent */.EO, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogHeader */.wd, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_dialog/* .AlertDialogTitle */.r7, {
                                    children: "Delete Category"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogDescription */.$v, {
                                    children: [
                                        "Permanently delete",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "font-medium text-foreground",
                                            children: pendingDeleteCategory?.label
                                        }),
                                        '? Events using this category will be moved to "Other".'
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(alert_dialog/* .AlertDialogFooter */.ck, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                    variant: "outline",
                                    onClick: ()=>setPendingDeleteCategory(null),
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                    variant: "destructive",
                                    onClick: confirmDeleteCategory,
                                    children: "Delete"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/common/page-title.tsx
var page_title = __webpack_require__(1692);
;// CONCATENATED MODULE: ./src/routes/releases.calendar.tsx?tsr-split=component






function ReleasesCalendarRoute() {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const search = (0,useSearch/* .useSearch */.S)({
        from: "/releases/calendar"
    });
    const year = search.year ?? getCurrentYearMonth().year;
    const month = search.month ?? getCurrentYearMonth().month;
    const handleNavigate = (0,react.useCallback)((newYear, newMonth)=>{
        navigate({
            to: "/releases/calendar",
            search: {
                year: newYear,
                month: newMonth
            },
            replace: true
        });
    }, [
        navigate
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(page_title/* .PageTitle */.s, {
                title: "Releases Calendar",
                subtitle: "View and manage release schedules"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CalendarPage, {
                year: year,
                month: month,
                onNavigate: handleNavigate
            })
        ]
    });
}



},

};
