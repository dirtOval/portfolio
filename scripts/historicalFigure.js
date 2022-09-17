const firstNames = ['Jesus', 'Napoleon', 'Muhammad', 'William', 'Abraham', 'George', 'Alexander', 'Julius', 'Arthur', 'Louis', 'Alfred','Harold', 'Matilda', 'Eleanor',
                    'Richard', 'John', 'Simon', 'Edward', 'Isabella', 'Katherine', 'Owain', 'Joan', 'Cecily', 'Vlad', 'Elizabeth', 'Margaret', 'Christopher', 'Leonardo',
                    'Anne', 'Thomas', 'Martin', 'Catherine', 'Bess', 'Nobunaga', 'Jane', 'Francis', 'Mary', 'Arbella', 'Oliver', 'Charles', 'Issac', 'Marie', 'Horatio',
                    'Benjamin', 'Isambard', 'Karl', 'Florence', 'Nikola', 'Emmeline', 'Cândido', 'Nicholas', 'Vladimir', 'Winston', 'Samuel', 'Josef', 'Albert',
                    'Franklin', 'Clement', 'Benito', 'Francisco', 'Oswald', 'Alan', 'Rosa', 'Nelson', 'Amílcar', 'Stephen'];

const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson',
                   'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis',
                   'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall',
                   'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes',
                   'Stewart', 'Morris', 'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson', 'Bailey', 'Reed', 'Kelly', 'Howard',
                   'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson', 'Watson', 'Brooks', 'Chavez', 'Wood', 'James', 'Bennett', 'Gray', 'Mendoza', 'Ruiz', 'Hughes', 'Price']

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
                   'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
                   'Burkina Faso', 'Burundi', 'Côte d\'Ivoire', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China',
                   'Columbia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti',
                   'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
                   'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Holy See',
                   'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
                   'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
                   'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova',
                   'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
                   'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
                   'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
                   'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
                   'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
                   'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
                   'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia',
                   'Zimbabwe']

const occupations = ['King', 'Queen', 'President', 'Prime Minister', 'musician', 'painter', 'sculptor', 'general', 'physicist', 'poet', 'astronaut', 'explorer', 'admiral', 'athlete','author', 'philosopher',
                     'biologist', 'activist', 'politician', 'inventor', 'taxidermist', 'labor organizer']

const verbs = ['conquered', 'created', 'authored', 'discovered', 'founded', 'developed', 'declared', 'traveled to', 'invented', 'started', 'participated in', 'initiated',
               'perpetrated', 'instigated', 'birthed', 'invested in', 'promoted', 'publicly condemned']

const things = ['9/11', 'The Spanish Armada', 'World War II', 'a monument', 'the moon', 'an industrial revolution', 'Donkey Kong Country', 'communism', 'gravity', 'the guilloutine',
                'Christmas', 'a well-reviewed children\'s book', `${countries[Math.floor(Math.random()*countries.length)]}`, '100 Gecs', 'Minecraft', 'The Spanish Civil War',
                'the Olympics', 'video games']

const causesOfDeath = ['of Covid', 'of Smallpox', 'by gunshot', 'due to poison', 'by lethal injection', 'by guilloutine', 'due to natural causes', 'of starvation', 'of dysentery',
                       'by execution', 'peacefully in their sleep', 'choking on an orange peel', ' due to shark attack', 'of blood poisoning', 'of infection', 'of an aneurysm']

function generateLifespan() {
    //generate a birthdate and then a death date in an array. death date is 30-80 years after birthdate.
    const birthDate = Math.floor(Math.random() * 2000);
    let deathDate = birthDate + 35 + Math.floor(Math.random() *50);
    if (deathDate > 2022) {
        deathDate = 2022;
    }
    const deathAge = deathDate - birthDate;
    return [birthDate, deathDate, deathAge];
}

function generateNames() {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    return [first, last];
}

function generateEvent(birth, death, startDate) {
    const date = startDate + (Math.floor(Math.random() * (death - startDate)));
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const thing = things[Math.floor(Math.random() * things.length)];
    const locationCheck = Math.random();
    if (locationCheck < 0.5) {
        return [`${date}: ${verb} ${thing}.`, date]
    }
    else {
        const place = countries[Math.floor(Math.random() * countries.length)];
        return [`${date}: ${verb} ${thing} in ${place}.`, date]
    }
}

function generateBirth(birthday) {
    const place = countries[Math.floor(Math.random() * countries.length)];
    return `${birthday}: born in ${place}.`

}

function generateDeath(deathDay, deathAge) {
    const place = countries[Math.floor(Math.random() * countries.length)];
    const cause = causesOfDeath[Math.floor(Math.random() * causesOfDeath.length)];
    return `${deathDay}: died ${cause} in ${place} at the age of ${deathAge}.`
}

const text = document.getElementById('result');
const button = document.getElementById('button');

function generatePerson() {
    let result = "";
    const dates = generateLifespan();
    const name = generateNames();
    const numEvents = 1 + Math.floor(Math.random() * 5);
    let occupation = occupations[Math.floor(Math.random() * occupations.length)]
    if (occupation === 'King' || occupation === 'Queen' || occupation === 'President' || occupation === 'Prime Minister') {
        occupation += ` of ${countries[Math.floor(Math.random() * countries.length)]}`
    }
    result += `<strong>${name[0]} ${name[1]}</strong> (${dates[0]} - ${dates[1]}), ${occupation}:<br>`;
    // result += '-------------------------<br>';
    result += generateBirth(dates[0]) + '<br>';
    let startDate = dates[0];
    for (let i = 0; i < numEvents; i++) {
        let event = generateEvent(dates[0], dates[1], startDate);
        startDate = event[1];
        result += event[0] + '<br>';

    }
    result += generateDeath(dates[1], dates[2]);

    text.innerHTML = result;
}

button.addEventListener('click', generatePerson);