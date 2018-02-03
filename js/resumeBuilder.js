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
    jobs: [
        {
            employer: 'Civil Engineer',
            title: 'Site Manager',
            location: 'As Samawah',
            dates: [2016, 2017],
            description: 'Residential Complex!'
        }
    ]
};

var projects = {
    projects: [
        {
            title: 'Abu Mahhar',
            dates: [2014, 2015, 2016, 2017, 2018],
            description: 'Residential Complex',
            images: 'https://yt3.ggpht.com/-xNZP28vNRMc/AAAAAAAAAAI/AAAAAAAAAAA/z8AoMgspbSY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
        }
    ]
}

var bio = {
    name: 'Osama Alwash',
    role: 'Production Manager',
    contacts: {
        mobile: '07805306288',
        email: 'hello@iwih.com',
        github: 'IWIH',
        twitter: 'iwih90',
        location: 'Samawah, Iraq'
    },
    picture: 'https://yt3.ggpht.com/-xNZP28vNRMc/AAAAAAAAAAI/AAAAAAAAAAA/z8AoMgspbSY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
    welcomeMsg: 'Welcome Every Body!',
    skills: ['CS', 'Civil Engineering', 'Precast Concrete']
};

var education = {
    schools: [{
        name: 'As Samawah',
        location: 'Muthanna',
        degree: 'prepatury',
        major: 'nothing',
        graduationYear: '2009',
        onlineCourses: ['CS', 'Next', 'AI'],
        url: 'https://there.com'
    }, {
        name: 'Muthanna University',
        location: 'Muthanna',
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