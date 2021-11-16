import vetWait from './images/vet-wait.jpg';
import eventFinder from './images/event-finder.jpg';
import newsAggregator from './images/news-aggregator.jpg';
import covidStats from './images/covid-stats.jpg';
import foodDiscovery from './images/food-discovery.jpg';
import codePen from './images/code-pen.jpg';

const ProjectList = [
    {   
        key: 1,
        link: 'https://github.com/piwanaga/event-finder',
        title: 'EventFinder',
        description: 'App for searching events based on location, keyword, or event type.',
        tech: ['Node', 'Express', 'PostgreSQL', 'React', 'Redux', 'JWT'],
        implementation: 'Frontend built with React and Redux to manage state. Ticketmaster API for all event data. Backend user models and API built with Node and Express.',
        learned: 'How to build a component based UI, manage centralized state across an entire application and handle async function calls from components using redux-thunk and action creators.',
        forward:  'I am working to improve my design skills and my overall approach to building complex projects, especially how to prioritize certain features over others.',
        image: eventFinder,
        alt: 'event finder screenshot'
    },
    {
        key: 2,
        link: 'https://codepen.io/piwanaga/pens/showcase',
        title: 'CodePen',
        description: "My CodePen profile where I'm building small projects to strengthen my CSS and Javascript skills.",
        tech: ['HTML', 'CSS', 'Javascript'],
        implementation: "Focusing on what I can do with vanilla HTML, CSS and Javascript using CodePen's social development environment.",
        learned: "The most challenging thing I've built was the scrolling text border. I learned to render text along an SVG path and animate the startOffset attribute to create a scrolling effect.",
        forward: 'I will continue to build small projects with increasing complexity in order to learn more skills that can help me in future front end roles.',
        image: codePen,
        alt: 'code pen screenshot'   
    },
    {
        key: 3,
        link: 'https://github.com/piwanaga/vet-wait',
        title: 'VetWait',
        description: 'Wait list for checking in pet owners and  sending an SMS notification when ready.',
        tech: ['React', 'Axios', 'TailwindCSS', 'Headless UI'],
        implementation: 'Used React and TailwindCSS to build UI. Textbelt SMS API to send text notifications.',
        learned: 'How to use TailwindCSS utility classes to style components and send text messages using an API endpoint.',
        forward: 'I want to improve my TailwindCSS skills and knowledge and use it more in future projects.',
        image: vetWait,
        alt: 'vet wait screenshot'   
    },
    // {
    //     key: 4,
    //     link: 'https://github.com/piwanaga/News-Aggregator',
    //     title: 'NewsAggregator',
    //     description: "Site to search and browse current news articles using Bing's News API.",
    //     tech: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Jinja', 'JQuery', 'Bootstrap'],
    //     implementation: 'Server and routes built with Flask. HTML templates served via JINJA templating. Models and DB setup using SQLAlchemy.',
    //     learned: 'How to generate encrypted passwords and perform authentication using BCrypt as well as define models for creating and interacting with the database.',
    //     forward: 'I would like to do more complex things using Python that involve more data and computation.',
    //     image: newsAggregator,
    //     alt: 'news aggregator screenshot'
    // },
    {
        key: 5,
        link: 'https://github.com/piwanaga/covid-stats',
        title: 'CovidStats',
        description: 'My intro to GraphQL and Apollo Server. Look up Covid-19 stats by U.S. state.',
        tech: ['GraphQL', 'Apollo Server', 'Apollo Client', 'React', 'TailwindCSS'] ,
        implementation: 'Setup my server, schema, resolver and data source using Apollo Server and GraphQL as a wrapper for an existing API endpoint. Used Apollo Client to query the server and fetch my data.',
        learned: 'The basics of using GraphQL and Apollo Server.',
        forward: "I'd like to include functionality for comparing data between states with some sort of visualization.",
        image: covidStats,
        alt: 'covid stats screnshot'
    },
    {
        key: 6,
        link: null,
        title: 'FoodDiscovery App',
        description: 'My first freelance gig. I created the homepage for (now defunct) FoodDiscovery App.',
        tech: ['React', 'Material UI'],
        implementation: 'Using the mockup and images I was given, I created the homepage to the required specifications.',
        learned: 'How to recreate a UI design using React and Material UI.',
        forward: 'This was great practice for a frontend job, implementing the design and functionality provided to me by the client.',
        image: foodDiscovery,
        alt: 'food discovery screenshot'
    }
]

export default ProjectList