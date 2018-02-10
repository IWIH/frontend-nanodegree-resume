/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var bio = {
    name: 'Osama Alwash',
    role: 'Production Manager',
    contactInfo: {
        mobile: '07805306288',
        email: 'hello@iwih.com'
    },
    picture: 'https://yt3.ggpht.com/-xNZP28vNRMc/AAAAAAAAAAI/AAAAAAAAAAA/z8AoMgspbSY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
    welcomeMsg: 'Welcome Every Body!',
    skills: ['CS', 'Civil Engineering', 'Precast Concrete']
}

var searchValue = '%data%';
var formattedName = HTMLheaderName.replace(searchValue, bio.name);
var formattedRole = HTMLheaderRole.replace(searchValue, bio.role);
var formattedMobile = HTMLmobile.replace(searchValue, bio.contactInfo.mobile);
var fomattedEmail = HTMLemail.replace(searchValue, bio.contactInfo.email);
var formattedPic = HTMLbioPic.replace(searchValue, bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace(searchValue, bio.welcomeMsg);

var formattedSkills = [];
bio.skills.forEach(function (value) {
    formattedSkills.push(HTMLskills.replace(searchValue, value))
});

$('#header').prepend(formattedRole).prepend(formattedName).append(formattedWelcomeMsg);

$('#main').prepend(formattedPic);

$('#workExperience').append(HTMLskillsStart);
formattedSkills.forEach(function (value) {
    $('#skills').append(value);
});

$('#footerContacts').append(formattedMobile).append(fomattedEmail);


var education = {
    'schools': [{
        'name': 'As Samawah',
        'city': 'Muthanna',
        'major': 'prepatury',
        'minor': 'education',
        'graduationYear': '2009',
        'onlineCourses': ['CS', 'Next', 'AI']
    }, {
        'name': 'Muthanna University',
        'city': 'Muthanna',
        'major': 'college',
        'minor': 'civil engineering',
        'graduationYear': '2013',
        'onlineCourses': ['CS', 'Next', 'AI']
    }]
};*/
var work = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LEAD Academy Charter High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jul 2012 - May 2013",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};


var bio = {
    name: 'Osama Alwash',
    role: 'Production Manager',
    contacts: {
        mobile: '07805306288',
        email: 'hello@iwih.com',
        github: 'IWIH',
        twitter: 'iwih90',
        location: 'Basrah, Iraq'
    },
    picture: './images/fry.jpg',
    welcomeMsg: 'Welcome Every Body!',
    skills: ['CS', 'Civil Engineering', 'Precast Concrete']
};

var education = {
    schools: [{
        name: 'As Samawah',
        location: 'As Samawah, Al Muthanna, Iraq',
        degree: 'prepatury',
        major: 'nothing',
        graduationYear: '2009',
        onlineCourses: ['CS', 'Next', 'AI'],
        url: 'https://there.com'
    }, {
        name: 'Muthanna University',
        location: 'Baghdad, Iraq',
        degree: 'college',
        major: 'civil engineering',
        graduationYear: '2013',
        onlineCourses: ['CS', 'Next', 'AI'],
        url: 'https://here.com'
    }],
    onlineCourses: [
        {
            title: 'Intro to JavaScript',
            school: 'Udacity.com',
            dates: 'recent',
            url: 'https://introJS'
        },
        {
            title: 'JavaScript Basics',
            school: 'Udacity.com',
            dates: 'current',
            url: 'https://JSbasics'
        }
    ]
};

var formattedName = dataStringInsertion(HTMLheaderName, bio.name);
var formattedRole = dataStringInsertion(HTMLheaderRole, bio.role);
$('#header').prepend(formattedRole).prepend(formattedName);

var formattedmobile = dataStringInsertion(HTMLmobile, bio.contacts.mobile);
var formattedEmail = dataStringInsertion(HTMLemail, bio.contacts.email);
var formattedGithub = dataStringInsertion(HTMLgithub, bio.contacts.github);
$('#topContacts').append(formattedmobile).append(formattedEmail).append(formattedGithub);

var formattedPic = dataStringInsertion(HTMLbioPic, bio.picture);
$('#header').append(formattedPic);

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        var formattedSkill = dataStringInsertion(HTMLskills, skill);
        $('#skills').append(formattedSkill);
    });
}

function displayWork() {
    work.jobs.forEach(function (job) {
        var formattedEmployer = dataStringInsertion(HTMLworkEmployer, job.employer);
        var formattedWorkTitle = dataStringInsertion(HTMLworkTitle, job.title);

        $('#workExperience').append(HTMLworkStart);

        $('.work-entry:last')
            .append(formattedEmployer + formattedWorkTitle)
            .append(dataStringInsertion(HTMLworkDates, job.dates))
            .append(dataStringInsertion(HTMLworkLocation, job.location))
            .append(dataStringInsertion(HTMLworkDescription, job.description));

    });
}

displayWork();


var projects = {
    projects: [
        {
            title: 'Abu Mahhar',
            dates: '2014 - Present',
            description: 'Residential Complex',
            image: './images/project_img.jpg',

            injector: function (domObject) {
                projectsInjector(domObject, this);
            }
        }
    ]
};

function projectsInjector(domObject, project) {
    var formattedProjectTitle = dataStringInsertion(HTMLprojectTitle, project.title);
    var formattedProjectDates = dataStringInsertion(HTMLprojectDates, project.dates);
    var formattedProjectDescription = dataStringInsertion(HTMLprojectDescription, project.description);
    var formattedProjectImage = dataStringInsertion(HTMLprojectImage, project.image);

    var projectsDivision = domObject.getElementById('projects');
    projectsDivision.insertAdjacentHTML('beforeend',HTMLprojectStart);

    var projectsEntriesElem = projectsDivision.getElementsByClassName('project-entry');
    var lastProjectEntry = projectsEntriesElem[projectsEntriesElem.length - 1];

    lastProjectEntry.insertAdjacentHTML('beforeend',formattedProjectTitle);
    lastProjectEntry.insertAdjacentHTML('beforeend',formattedProjectDates);
    lastProjectEntry.insertAdjacentHTML('beforeend',formattedProjectDescription);
    lastProjectEntry.insertAdjacentHTML('beforeend',formattedProjectImage);
}

projects.projects.forEach(function (project) {
    project.injector(document);
});

$('#main').append('<button id="internationalizeButton">Internationalize</button>');

document.getElementById('internationalizeButton').click(function () {
    var nameElement = document.getElementById('name');
    var name = nameElement.text();
    nameElement.val(inName(name));
});

function inName(name) {
    var tokens = name.split(' ');
    var firstName = tokens[0][0].toUpperCase() + tokens[0].slice(1).toLowerCase();
    var lastName = tokens[1].toUpperCase();
    return (firstName + ' ' + lastName);
}

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});

function dataStringInsertion(originString, stringToInsert) {

    return originString.replace('%data%', stringToInsert);
}
