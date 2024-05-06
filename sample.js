let resumeJSON={
    name: "Harish Raajaa R V",
    email: "rvharish@gmail.com",
    phone: "1234567890",      
    summary: "I'm a software developer with 6+ years of Exp.",
    address: {
      No: "9 Santha Illam",
      postalCode: "625019",
      city: "Madurai",
      countryCode: "IN",
      region: "India"
    },
    skillset:["Uipath","Automation","PowerAutomate","HTML","CSS","Javascript"],
    workexp:[
        exp1={company: "Infosys",
        position: "System Engineer",
        website:"https://infosys.com",
        startDate: "2018-05-21",
        endDate:"2021-04-12",
        projected_completed:"4"},
        exp2={company: "Oracle",
        position: "Senior RPA Developer",
        website:"https://oracle.com",
        startDate: "2018-05-21",
        endDate:"2021-04-12",
        projected_completed:"8"}],
    education:["B.E/ECE","HSC","SSLC"]

    
}


//Print Resume data using for in loop

for (var key in resumeJSON)
    {
        
        if(key=="address")
            {
                for (let i in resumeJSON[key])
                    {
                        console.log(i+": "+resumeJSON[key][i])
                    }
            }
            else if(key=="skillset")
            {
                //Normal for 
                for (let x=0;x<resumeJSON[key].length;x++)
                    {
                        console.log(resumeJSON[key][x])
                    }

            }
            else if (key=="education")
                {
                    //for of
                    for ( let a of resumeJSON[key])
                        {
                            console.log("Holding Degrees: "+a)
                        }
                }
            else if(key=="workexp")
                {
                    //forEach
                    resumeJSON[key].forEach(e => {
                        console.log(`Company Name is ${e.company}, Projects completed count is ${e.projected_completed} and its website link is ${e.website}`)                        
                    });
                }
            else {
                console.log(key+": "+resumeJSON[key])
            }
    }

    