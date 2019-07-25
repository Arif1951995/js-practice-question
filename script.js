
  
// Practice Set # PW1

let students = [
    {
      name: "Amna",
      gender: "f",
      dob: new Date("02-04-1990"),
      address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
      },
      phoneNo: "0331-2324243",
      admissionTestScore: 56,
      hasInternet: true,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: false
    },
    {
      name: "Hadia",
      gender: "f",
      dob: new Date("05-15-1984"),
      address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
      },
      phoneNo: "0345-3452953",
      admissionTestScore: 48,
      hasInternet: false,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: true
    },
    {
      name: "Ahmed",
      gender: "m",
      dob: new Date("06-27-2002"),
      address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0333-0124325",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Fariha",
      gender: "f",
      dob: new Date("09-13-1998"),
      address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0331-9432532",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Abdullah",
      gender: "m",
      dob: new Date("01-24-1972"),
      address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
      },
      phoneNo: "0345-9912121",
      admissionTestScore: 33,
      hasInternet: false,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: true
    }
  ];

  console.log(
      students
  );



  console.log(
      `Print each student in this format:
    Name: Amna
    Gender: Female
    City: Karachi
    Score: 56 marks
      `
     
  );
  students.map(e => {
    let gender;
    if(e.gender === 'f') {
        gender = 'female'
    }else {
        gender = 'male'
    }
    console.log( {
        Name: e.name,
        Gender: gender,
        City: e.address.city,
        Score: e.admissionTestScore
        

    })
})

  console.log(`
  Print names of female students only.
  `,
  students.filter(e => e.gender === 'f').map(e =>  e.name)
  );

  console.log(`
  Print names of male students only.
  `,
  students.filter(e => e.gender === 'm').map(e =>  e.name)
  );

  console.log(`
  Print names of students who have passed the admission test. Passing marks are 50`,
  students.filter(e => e.admissionTestScore >= 50).map(e =>  e.name)
  
  );

  console.log(`
  Print names of eligible students only (students who have internet and live in Karachi are eligible)`,
  students.filter(e => e.address.city.toLocaleLowerCase() === 'karachi' && e.hasInternet).map(e => e.name)
  
  );

console.log(`
Amna's address:
Gulistan-e-Johar in Karachi, Pakistan`);

for(let i = 0; i < students.length; i++) {
    console.log(
        `${students[i].name}'s address: 
        ${students[i].address.ilaqa} in ${students[i].address.city}, ${students[i].address.country}
        `
    )
    
}

console.log(
    `Print names and phone number of students who have Ufone.`,
    students.filter(e => e.phoneNo.charAt(2) === '3').map(e => {
        return {
            name: e.name,
            phone: e.phoneNo
        }
    })
);

let groupA = [];
let groupB = [];

students.map(e => {
    if(e.hasJob) {
        groupB.push(e.name)
    }else {
        groupA.push(e.name);
    }
})
console.log(
    `Group A: ${groupA}
    Group b: ${groupB}
    `
)

students.map(e => {
    console.log(`${e.name}'s age is ${new Date().getFullYear() - e.dob.getFullYear()}`)
})


console.log(
    `Print the name of the oldest student \n`,
    students.sort(function(a,b) {
        return (new Date().getFullYear() - b.dob.getFullYear()) -  (new Date().getFullYear() - a.dob.getFullYear())
    })[0].name

)


  
// Practice Set # PW2


let videos = [
    {
      title: "Photoshop tutorial",
      lengthInMinutes: 70,
      category: "Education",
      uploadDate: new Date("07-22-2019"),
      tags: "design, digital, photoshop, creativity",
      features: ["Live", "360°", "HDR"],
      viewCount: 4700,
      rating: 4.3
    },
    {
      title: "Episode # 01 - The Best Comedy Show",
      lengthInMinutes: 19,
      category: "Entertainment",
      uploadDate: new Date("07-23-2019"),
      tags: "comedy, funny",
      features: ["Subtitles/CC", "3D", "HD"],
      viewCount: 145615,
      rating: 3.9
    },
    {
      title: "How to use FOR EACH loop - tutorial by Tech Karo",
      lengthInMinutes: 6,
      category: "Education",
      uploadDate: new Date("11-25-2018"),
      tags: "javascript, loops, web development",
      features: ["Purchased", "HD"],
      viewCount: 9004,
      rating: 4.5
    },
    {
        title: "html table",
        lengthInMinutes: 8,
        category: "Education",
        uploadDate: new Date("11-12-2018"),
        tags: "html, table",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.0
      },
      {
        title: "html heading",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("12-12-2018"),
        tags: "html, table",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "flex box",
        lengthInMinutes: 1,
        category: "Education",
        uploadDate: new Date("07-12-2018"),
        tags: "html, table",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "css grid",
        lengthInMinutes: 1,
        category: "Education",
        uploadDate: new Date("12-12-2018"),
        tags: "css, grid",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "css animation",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("07-12-2018"),
        tags: "css, animation",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "javascript variable",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("12-12-2018"),
        tags: "javascript, varibale",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "js Array",
        lengthInMinutes: 2,
        category: "Education",
        uploadDate: new Date("12-12-2018"),
        tags: "javascript, Array",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "js fuction",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("12-12-2018"),
        tags: "javascript, fuction",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "js array methods",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("12-12-2018"),
        tags: "javascript, array methods",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      },
      {
        title: "js do while loop",
        lengthInMinutes: 3,
        category: "Education",
        uploadDate: new Date("12-12-2018"),
        tags: "javascript, do while loop",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 5.0
      }





  ];


console.log(
    `Print each video in this format:
    Title: Photoshop tutorial
    Length: 70 minutes
    Category: Education
    Views: 4,700
    Uploaded On: 22-July-2019
    Rating: `
)
let years = ['Jan','Fab','March','April','May','June','July','August','September','October','November','Dec']

videos.map(e => {
    console.log(
      `Title: ${e.title} 
      Length: ${e.lengthInMinutes} Minutes
      Catagory: ${e.category}
      Views: ${e.viewCount}
        years[e.uploadDate.getMonth()],
        Uploaded On: ${e.uploadDate.getDate()}-${years[e.uploadDate.getMonth()]}-${e.uploadDate.getFullYear()}`
      
      )
})

console.log(`Print titles of all short ( less than 3 minutes ) videos.`);


videos.filter(e => e.lengthInMinutes < 3).map(e => {
  console.log(e.title)
})

console.log(`Print titles of all long ( greater than 20 minutes ) videos.`);


videos.filter(e => e.lengthInMinutes > 20).map(e => {
  console.log(e.title)
})

console.log(`Print titles of all medium length videos.`);


videos.filter(e => e.lengthInMinutes < 20 && e.lengthInMinutes > 3).map(e => {
  console.log(e.title)
})


console.log(
  `Print title of the longest video \n`,
  videos.sort(function(a,b) {
      return b.lengthInMinutes -  a.lengthInMinutes
  })[0].title

)
console.log(
  `Print titles of all "Educational" videos`,
);
videos.filter(e => e.category.toLocaleLowerCase() === 'education').map(e => {
  console.log(e.title)
});

console.log(
  `Print titles of all videos with tag "Javascript"`,
);

videos.filter(e => e.tags.includes('javascript')).map(e => {
  console.log(e.title)
})


console.log(
  `Print titles of all videos with HD feature`,
);

videos.filter(e => e.features.includes('HD')).map(e => {
  console.log(e.title)
})

console.log(
  `Print titles of all videos uploaded today`,
);

videos.filter(e => e.uploadDate.getDay() === new Date().getDay()).map(e => {
  console.log(e.title)
  
})

console.log(
  `Print titles of all videos uploaded this week`,
);

videos.filter(e => (new Date().getDay() - 7) <= e.uploadDate.getDay() && new Date().getMonth() === e.uploadDate.getMonth()).map(e => {
  console.log(e.title)
  
})

console.log(
  `Print titles of all videos uploaded this Month`,
);

videos.filter(e => new Date().getMonth() === e.uploadDate.getMonth()).map(e => {
  console.log(e.title)
  
})

console.log(
  `Print titles of all videos uploaded this Year`,
);

videos.filter(e => new Date().getFullYear() === e.uploadDate.getFullYear()).map(e => {
  console.log(e.title)
  
})

console.log(
  `Sort the array in ascending order of number of views and print the titles`,
);

  videos.sort((a,b) => a.lengthInMinutes - b.lengthInMinutes).map(e => {
    console.log(`Title: ${e.title} 
      Length: ${e.lengthInMinutes} Minutes
 `)
  })

  console.log(
    `Sort the array in decending order of number of views and print the titles`,
  );
  
    videos.sort((a,b) => b.lengthInMinutes - a.lengthInMinutes).map(e => {
      console.log(`Title: ${e.title} 
        Length: ${e.lengthInMinutes} Minutes
   `)
    })


    console.log(`print 1-9 to console`);
    for(let i = 1; i <= 9; i++) {
      console.log(i);
    }

console.log('print 2-10 table');

console.log(`Table of 2`);

for(let i = 1; i <= 10; i++) {
  console.log(`2 * ${i} = ${2*i}`);
} 

console.log(`Table of 3`);

for(let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${3*i}`);
}
console.log(`Table of 4`);

for(let i = 1; i <= 10; i++) {
  console.log(`4 * ${i} = ${4*i}`);
}
console.log(`Table of 5`);

for(let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5*i}`);
}
console.log(`Table of 5`);

for(let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5*i}`);
}
console.log(`Table of 7`);

for(let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7*i}`);
}
console.log(`Table of 8`);

for(let i = 1; i <= 10; i++) {
  console.log(`8 * ${i} = ${8*i}`);
}

console.log(`Table of 9`);

for(let i = 1; i <= 10; i++) {
  console.log(`9 * ${i} = ${9*i}`);


  console.log(`Table of 10`);

  for(let i = 1; i <= 10; i++) {
    console.log(`10 * ${i} = ${10*i}`);
  }}


  let students2 = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];

students2.map(e => {
  console.log(`Hobbies of ${e.name}`);
  e.hobbies.map( (e,i) => {
    console.log(`${i + 1}. ${e}`)
  })
  // for(let i = 0; i < e.hobbies.length; i++) {
  //   console.log(`${i + 1}. ${e.hobbies[i]}` )
  // }
}) 

for(let i = 1; i <= 9; i++) {
  console.log(' '.repeat(i) + i);
}

for(let i = 1; i <= 9; i++) {
  console.log('*'.repeat(i) + i);
}

for(let i = 1; i <= 9; i++) {
  console.log('.'.repeat(i) + i + '~'.repeat(9 - i + 1))
}

let nums = [];
for(let i = 1; i <= 9; i++) {
  nums.push(i);
  console.log(...nums);
}
console.log('```````````````')
let nums2 = [1,2,3,4,5,6,7,8,9];
for(let i = 9; i >= 1; i--) {
  nums2.pop();
  console.log(...nums2);
}









