

function coursesReducer(state = { status: false, courses: [] }, actions) {
    
    switch (actions.type) {

        case "GET_ALL_COURSES":
            return { status: true, courses: actions.payload };

        case "GET_COURSE_DETAIL_BY_ID":
            return { status: true, course: actions.payload[0] };

        case "GET_COURSE_BY_LIMIT":
            return { status: true, courses: actions.payload };
        
        default:
            return { status: false };

    }
}

export default coursesReducer;


