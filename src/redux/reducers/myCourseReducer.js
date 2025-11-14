

function myCourses(state = { status: false, myCourses: [] }, actions) {

    switch (actions.type) {

        case "GET_MY_ALL_COURSES":
            return { status: true, myCourses: actions.payload };
        default:
            return { status: false};

    }
}

export default myCourses;


