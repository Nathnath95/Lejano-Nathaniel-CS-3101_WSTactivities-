const backgrounds0 = [
    'assets/tatooine0.png', 
    'assets/hoth0.png',
    'assets/coruscant0.png',
    'assets/cloudcity0.png'
];

const backgrounds1 = [
    'assets/tatooine1.png', 
    'assets/hoth1.png', 
    'assets/coruscant1.png', 
    'assets/cloudcity1.png'
];



const sectionStyles = [
    {
        backgroundColor: 'rgba(172, 28, 28, 0.8)',  
        buttonColor: 'rgba(172, 28, 28, 0.8)'  
    },
    {
        backgroundColor: 'rgba(168, 28, 172, 0.8)',  
        buttonColor: 'rgba(168, 28, 172, 0.8)'  
        },
    {
        backgroundColor: 'rgba(28, 72, 172, 0.8)', 
        buttonColor: 'rgba(28, 72, 172, 0.8)' 
    },
    {
        backgroundColor: 'rgba(28, 172, 42, 0.8)',  
        buttonColor: 'rgba(28, 172, 42, 0.8)' 
    }
];

const sections = [
    {
        title: 'BASIC INFORMATION',
        content: `
            <p><b>Name:</b> Nathaniel Lejano</p>
            <p><b>Age:</b> 20</p>
            <p><b>Height:</b> 5'7" / 170 cm</p>
            <p><b>Course:</b> Computer Science</p>
        `
    },
    {
        title: 'CONTACT INFORMATION',
        content: `
            <p><b>Phone:</b> 0915 238 5608</p>
            <p><b>Email:</b> 22-09208@g.batstate-u.edu.ph</p>
            <p><b>Location:</b> D. Lapitan St. Lian, Batangas</p>
        `
    },
    {
        title: 'SOCIAL MEDIA INFORMATION',
        content: `
            <p><b>Facebook:</b> facebook.com/noleja</p>
            <p><b>Discord:</b> nat8993</p>
            <p><b>GitHub:</b> github.com/Nathnath95</p>
        `
    },
    {
        title: 'SPOTIFY TRACK',
        content: `
            <iframe style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/7zVR4BWiOxV1dIfFEJVvJo?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        `
    }
];

let currentSectionIndex = 0;

function loadSection(index) {
    const section = sections[index];
    const contentBox = document.getElementById('content-box');
    const buttons = document.querySelectorAll('.btn');

    // background0
    document.body.style.backgroundImage = `url('${backgrounds0[index]}')`;

    //fade out
    contentBox.style.opacity = 0;

    //change content
    setTimeout(() => {
        // flexbox content
        contentBox.innerHTML = `
            <h2>${section.title}</h2>
            ${section.content}
        `;
        
        //flexbox color
        contentBox.style.backgroundColor = sectionStyles[index].backgroundColor;

        //button color
        buttons.forEach(button => {
            button.style.backgroundColor = sectionStyles[index].buttonColor;
        });

        //background1
        document.body.style.backgroundImage = `url('${backgrounds1[index]}')`;

        //fade in
        contentBox.style.transition = 'opacity 1s';
        contentBox.style.opacity = 1;
    }, 1000);  
}

function changeContent(section) {
    currentSectionIndex = (currentSectionIndex + section + sections.length) % sections.length;
    loadSection(currentSectionIndex);
}

loadSection(currentSectionIndex);
