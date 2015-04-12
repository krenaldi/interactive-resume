//define bio information
var bio = {
    "name": "Kris Renaldi",
    "role": "Web Developer",
    "contacts": {
        "mobile": "732-593-7798",
        "email": "krenaldi@comcast.net",
        "github": "krenaldi",
        "twitter": "@krenaldi",
        "location": "South Plainfield, NJ"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["HTML", "JavaScript", "CSS", "Git"],
    "bioPic": "images/fry.jpg"
};
//function to display header and contact info
bio.display = function() {
    //add header
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);
    var formattedSkills = "";
    for (var i = 0; i < bio.skills.length; i++) {
        formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
    }
    $("#skills").append(formattedSkills);

    //add and display footer
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
};

//define education
var education = {
    "schools": [{
        "name": "Rutgers University",
        "location": "New Brunswick, NJ",
        "degree": "BA",
        "majors": "Political Science & Journalism",
        "dates": "September 1993 to May 1997",
        "url": "http://www.rutgers.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": " November 2014 to Present",
        "url": "http://www.udacity.com/nanodegree"
    }]
};
//add and display education
education.display = function() {

    //function to add schools	
    function displaySchool() {

        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedSchool);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajors);
        }

    }

    //function to display online courses
    function displayOnlineCourse() {

        for (var course in education.onlineCourses) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedURL);
            link = $(".education-entry:last").find("a");
            link.attr("href", education.onlineCourses[course].url);
        }
    }
    displaySchool();
    displayOnlineCourse();
};

//define work experience
var work = {
    "jobs": [{
        "employer": "at&t",
        "title": "BVOIP Subject Matter Expert and Trainer",
        "location": "Piscataway, NJ",
        "dates": "May 2008 - Present",
        "description": "Trained and supported BVOIP provisioning agents"
    }, {
        "employer": "at&t",
        "title": "MIS Provisioning Technical Engineer",
        "location": "Piscataway, NJ",
        "dates": "May 2001 - May 2008",
        "description": "Provisioned MIS and PNT services for customers"
    }, {
        "employer": "at&t",
        "title": "Content Author",
        "location": "Piscataway, NJ",
        "dates": "December 1999 - May 2001",
        "description": "Published technical manuals and process for MIS and VPN provisioning departments"
    }]
};
//add and display work experience
work.display = function() {


    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};


//add and display projects
projects.display = function() {
    //define projects
    var projects = {
        "projects": [{
            "title": "Projects",
            "dates": "2013-Present",
            "description": "Provisioned BVOIP services for following customers",
            "images": ["images/panerabread.jpg", "images/freds.gif"]
        }, {
            "title": "Projects",
            "dates": "2004-2007",
            "description": "Provisioned MIS services for following customers",
            "images": ["images/m6-logo.gif", "images/odp-max-logo.png"]
        }]
    };
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
bio.display();
education.display();
work.display();
projects.display();

//shows clicks on
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

//add Google Map
$("#mapDiv").append(googleMap);
